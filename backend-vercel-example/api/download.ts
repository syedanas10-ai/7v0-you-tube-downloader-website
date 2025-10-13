import type { VercelRequest, VercelResponse } from "@vercel/node"
import ytdl from "ytdl-core"

const sanitize = (name: string) => name.replace(/[\\/\r\n"]/g, "_").slice(0, 128)
const contentTypeFor = (container?: string, isAudio?: boolean) => {
  if (container === "mp4") return isAudio ? "audio/mp4" : "video/mp4"
  if (container === "webm") return isAudio ? "audio/webm" : "video/webm"
  return "application/octet-stream"
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const ytUrl = (req.query.url as string) || ""
  const type = (req.query.type as string) || "video" // "video" | "audio"
  const quality = (req.query.quality as string) || "" // "360"|"480"|"720"|"1080"|"1440"|"2160" or "low"|"medium"|"high"
  const filename = (req.query.filename as string) || ""

  if (!ytUrl || !ytdl.validateURL(ytUrl)) {
    res.status(400).json({ error: "Missing or invalid url" })
    return
  }

  try {
    const info = await ytdl.getInfo(ytUrl)
    const isAudio = type === "audio"

    if (isAudio) {
      // choose audio container + bitrate
      const want = quality === "low" ? 96 : quality === "medium" ? 160 : 256
      const audioOnly = ytdl.filterFormats(info.formats, "audioonly")
      const sorted = audioOnly.sort((a, b) => (b.audioBitrate || 0) - (a.audioBitrate || 0))
      const chosen = sorted.find((f) => (f.audioBitrate || 0) <= want) || sorted[sorted.length - 1] || sorted[0]
      if (!chosen) {
        res.status(500).json({ error: "No audio format available" })
        return
      }

      const ext = chosen.container === "mp4" ? "m4a" : "webm"
      const ct = contentTypeFor(chosen.container, true)
      const base = sanitize(filename || `${info.videoDetails.title || "ssa-audio"}.${ext}`)

      res.setHeader("Content-Type", ct)
      res.setHeader("Content-Disposition", `attachment; filename="${base}"`)
      res.setHeader("Cache-Control", "no-store")

      ytdl(ytUrl, { quality: chosen.itag }).pipe(res)
      return
    }

    // video: pick progressive (audio+video) close to requested quality, otherwise highest
    const target = Number(quality || "720")
    const progressive = info.formats.filter(
      (f) => f.hasAudio && f.hasVideo && (f.container === "mp4" || f.container === "webm"),
    )
    if (!progressive.length) {
      res.status(500).json({ error: "No progressive video formats available" })
      return
    }
    const mp4 = progressive.filter((f) => f.container === "mp4")
    const pool = (mp4.length ? mp4 : progressive).sort((a, b) => (b.height || 0) - (a.height || 0))
    const chosen = pool.find((f) => (f.height || 0) <= target) || pool[0]

    const ext = chosen.container === "mp4" ? "mp4" : "webm"
    const ct = contentTypeFor(chosen.container, false)
    const base = sanitize(filename || `${info.videoDetails.title || "ssa-video"}.${ext}`)

    res.setHeader("Content-Type", ct)
    res.setHeader("Content-Disposition", `attachment; filename="${base}"`)
    res.setHeader("Cache-Control", "no-store")

    ytdl(ytUrl, { quality: chosen.itag }).pipe(res)
  } catch (err: any) {
    res.status(500).json({ error: "Download failed", detail: String(err?.message || err) })
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}
