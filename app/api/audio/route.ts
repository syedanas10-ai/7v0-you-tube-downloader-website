import { NextResponse } from "next/server"
import ytdl from "ytdl-core"
import type { Readable } from "node:stream"

function nodeToWeb(stream: Readable) {
  return new ReadableStream<Uint8Array>({
    start(controller) {
      stream.on("data", (chunk) => controller.enqueue(chunk))
      stream.on("end", () => controller.close())
      stream.on("error", (err) => controller.error(err))
    },
    cancel() {
      try {
        // @ts-ignore
        stream.destroy?.()
      } catch {}
    },
  })
}

function sanitizeFileName(name: string) {
  return name.replace(/[^\w\d-_. ]+/g, "_").slice(0, 120)
}

export async function GET(req: Request) {
  try {
    const urlObj = new URL(req.url)
    const ytUrl = urlObj.searchParams.get("url")
    const aq = urlObj.searchParams.get("aq") // desired kbps (best-effort)
    const qualityShorthand = urlObj.searchParams.get("quality") // "low"|"medium"|"high"
    const fallback = urlObj.searchParams.get("filename") || "ssa-audio.m4a"

    if (!ytUrl || !ytdl.validateURL(ytUrl)) {
      return NextResponse.json({ error: "Invalid YouTube URL" }, { status: 400 })
    }

    const info = await ytdl.getInfo(ytUrl)

    // Try to find an audio-only format close to requested bitrate.
    const audioOnly = info.formats.filter((f) => f.hasAudio && !f.hasVideo)
    let fmt = ytdl.chooseFormat(audioOnly, { quality: "highestaudio" })
    const qualityToKbps: Record<string, number> = { low: 128, medium: 192, high: 256 }
    const mapped = qualityShorthand ? qualityToKbps[qualityShorthand] : undefined
    const target = aq ? Number(aq) : mapped

    if (target && Number.isFinite(target)) {
      // pick the format with abr closest to target
      let best = fmt
      let bestDelta = Number.POSITIVE_INFINITY
      for (const f of audioOnly) {
        const abr = typeof f.audioBitrate === "number" ? f.audioBitrate : (f.bitrate as number | undefined)
        if (!abr) continue
        const d = Math.abs(abr - target)
        if (d < bestDelta) {
          best = f as any
          bestDelta = d
        }
      }
      fmt = (best as any) || fmt
    }

    const title = sanitizeFileName(info.videoDetails.title || "ssa-audio")
    const container = (fmt.container || "webm").toLowerCase()
    const ext = container === "mp4" ? "m4a" : container // mp4 container typically holds AAC -> use .m4a
    const abr = (fmt.audioBitrate as number | undefined) || undefined

    const filename = sanitizeFileName(
      fallback.endsWith(".mp3")
        ? `${title}_${abr ? abr + "kbps" : "audio"}.m4a` // correct mismatched extension if any
        : fallback.endsWith(".m4a") || fallback.endsWith(".webm")
          ? fallback
          : `${title}_${abr ? abr + "kbps" : "audio"}.${ext}`,
    )

    const nodeStream = ytdl.downloadFromInfo(info, {
      format: fmt,
      requestOptions: { headers: { "user-agent": req.headers.get("user-agent") || "" } },
      highWaterMark: 1 << 25,
    })
    const webStream = nodeToWeb(nodeStream as unknown as Readable)

    const headers = new Headers()
    headers.set("content-type", container === "mp4" ? "audio/mp4" : "audio/webm")
    headers.set("content-disposition", `attachment; filename="${filename}"`)
    headers.set("cache-control", "no-store")

    return new NextResponse(webStream, { status: 200, headers })
  } catch (err: any) {
    return NextResponse.json({ error: "Audio download failed", detail: String(err?.message || err) }, { status: 500 })
  }
}
