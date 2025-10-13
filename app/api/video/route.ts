import ytdl, { type videoInfo } from "ytdl-core"

function sanitizeFilename(name: string) {
  return (
    name
      .replace(/[^a-z0-9\-_.\s]/gi, "_")
      .slice(0, 80)
      .trim() || "video"
  )
}

function pickProgressiveFormat(info: videoInfo, targetHeight?: number) {
  // Prefer MP4 progressive (video+audio) so users get a single file.
  const progressive = info.formats
    .filter((f) => f.hasVideo && f.hasAudio && f.container === "mp4")
    .sort((a, b) => (b.height || 0) - (a.height || 0))

  if (!progressive.length) return null
  if (!targetHeight) return progressive[0]

  const atOrBelow = progressive.find((f) => (f.height || 0) <= targetHeight)
  return atOrBelow || progressive[0]
}

function nodeToWebStream(nodeReadable: NodeJS.ReadableStream) {
  return new ReadableStream({
    start(controller) {
      nodeReadable.on("data", (chunk) => controller.enqueue(chunk))
      nodeReadable.on("end", () => controller.close())
      nodeReadable.on("error", (err) => controller.error(err))
    },
    cancel() {
      try {
        // @ts-ignore
        nodeReadable.destroy?.()
      } catch {}
    },
  })
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const url = searchParams.get("url")
    const qualityParam = searchParams.get("quality") // "360" | "480" | "720" | "1080" | "1440" | "2160"
    const filenameParam = searchParams.get("filename")

    if (!url || !ytdl.validateURL(url)) {
      return new Response(JSON.stringify({ error: "Invalid or missing url" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      })
    }

    const qualityMap: Record<string, number> = {
      "360": 360,
      "480": 480,
      "720": 720,
      "1080": 1080,
      "1440": 1440, // 2k
      "2160": 2160, // 4k
    }
    const targetHeight = qualityParam ? qualityMap[qualityParam] : undefined

    const info = await ytdl.getInfo(url)
    const title = sanitizeFilename(filenameParam || info.videoDetails.title)

    // Choose best progressive MP4 near requested height (720p max typical)
    let format = pickProgressiveFormat(info, targetHeight)
    let effectiveHeight = format?.height

    // Fallback: if no progressive MP4, pick best combined stream (still single file if possible)
    if (!format) {
      const combined = info.formats.filter((f) => f.hasVideo && f.hasAudio)
      format = combined.sort((a, b) => (b.height || 0) - (a.height || 0))[0]
      effectiveHeight = format?.height
    }

    // Stream lock to chosen itag to avoid separate-only streams
    const stream = ytdl(url, {
      quality: format?.itag,
      filter: (f) => f.hasVideo && f.hasAudio,
      requestOptions: { headers: { "user-agent": req.headers.get("user-agent") || "" } },
      highWaterMark: 1 << 25, // bump buffer for stability
    })

    const container = (format?.container || "mp4").toLowerCase()
    const filename = `${title}${effectiveHeight ? `-${effectiveHeight}p` : ""}.${container}`

    const webStream = nodeToWebStream(stream)
    return new Response(webStream, {
      headers: {
        "content-type": `video/${container}`,
        "content-disposition": `attachment; filename="${filename}"`,
        "cache-control": "no-store",
      },
    })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || "Video download failed" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    })
  }
}
