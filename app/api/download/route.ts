import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Helper: sanitize filenames and map content-types by container
const sanitize = (name: string) => name.replace(/[\\/\r\n"]/g, "_").slice(0, 128)
const contentTypeFor = (container: string, isAudio: boolean) => {
  if (container === "mp4") return isAudio ? "audio/mp4" : "video/mp4"
  if (container === "webm") return isAudio ? "audio/webm" : "video/webm"
  return "application/octet-stream"
}

// Helper: polyfill timer handles with unref/ref and dynamically import ytdl-core
async function getYtdl() {
  const g: any = globalThis as any
  if (!g.__unrefPatched) {
    const _setInterval = g.setInterval.bind(g)
    const _clearInterval = g.clearInterval.bind(g)
    g.setInterval = ((handler: TimerHandler, timeout?: number, ...args: any[]) => {
      const id = _setInterval(handler as any, timeout as any, ...args)
      return {
        id,
        unref() {
          return this
        },
        ref() {
          return this
        },
      }
    }) as any
    g.clearInterval = ((h: any) => _clearInterval(h && typeof h === "object" && "id" in h ? h.id : h)) as any

    const _setTimeout = g.setTimeout.bind(g)
    const _clearTimeout = g.clearTimeout.bind(g)
    g.setTimeout = ((handler: TimerHandler, timeout?: number, ...args: any[]) => {
      const id = _setTimeout(handler as any, timeout as any, ...args)
      return {
        id,
        unref() {
          return this
        },
        ref() {
          return this
        },
      }
    }) as any
    g.clearTimeout = ((h: any) => _clearTimeout(h && typeof h === "object" && "id" in h ? h.id : h)) as any

    g.__unrefPatched = true
  }
  const mod: any = await import("ytdl-core")
  return mod.default ?? mod
}

export async function GET(req: Request) {
  const urlObj = new URL(req.url)
  const ytUrl = urlObj.searchParams.get("url")
  const type = urlObj.searchParams.get("type") // "video" | "audio"
  const quality = urlObj.searchParams.get("quality") // e.g. "360" | "1080" | "low" | "medium" | "high"
  const filename = urlObj.searchParams.get("filename")

  if (!ytUrl || !type) {
    return NextResponse.json({ error: "Missing required query params: url, type" }, { status: 400 })
  }

  // require external backend to handle ytdl-core streaming in a true Node runtime
  const backend = process.env.SSA_BACKEND_URL
  if (!backend) {
    return NextResponse.json(
      { error: "Backend not configured", hint: "Set SSA_BACKEND_URL in Vars to your deployed backend URL." },
      { status: 501 },
    )
  }

  // Build upstream URL; map our "quality" to vq/aq if the backend expects them
  const upstreamUrl = new URL("/api/download", backend)
  upstreamUrl.searchParams.set("url", ytUrl)
  upstreamUrl.searchParams.set("type", type)
  if (filename) upstreamUrl.searchParams.set("filename", filename)
  if (type === "audio") {
    // pass both for compatibility
    if (quality) upstreamUrl.searchParams.set("quality", quality)
    if (quality) upstreamUrl.searchParams.set("aq", quality)
  } else {
    if (quality) upstreamUrl.searchParams.set("quality", quality)
    if (quality) upstreamUrl.searchParams.set("vq", quality)
  }

  const upstream = await fetch(upstreamUrl.toString(), { method: "GET", headers: { Accept: "*/*" } }).catch(() => null)
  if (!upstream || !upstream.ok || !upstream.body) {
    return NextResponse.json({ error: "Upstream request failed" }, { status: 502 })
  }

  // forward stream with sensible headers (filename fallback if upstream missing it)
  const headers = new Headers()
  const contentType = upstream.headers.get("content-type") ?? "application/octet-stream"
  const contentDisposition =
    upstream.headers.get("content-disposition") ??
    `attachment; filename="${filename ?? (type === "audio" ? "audio.m4a" : "video.mp4")}"`
  headers.set("content-type", contentType)
  headers.set("content-disposition", contentDisposition)
  headers.set("cache-control", "no-store")

  return new Response(upstream.body, { status: upstream.status, headers })
}
