import ytdl from "ytdl-core"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const url = searchParams.get("url")
    if (!url || !ytdl.validateURL(url)) {
      return new Response(JSON.stringify({ error: "Invalid or missing url" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      })
    }

    const info = await ytdl.getInfo(url)
    const { title, thumbnails, lengthSeconds, author } = info.videoDetails
    const thumb = thumbnails?.[thumbnails.length - 1]?.url

    return new Response(
      JSON.stringify({
        title,
        thumbnail: thumb,
        lengthSeconds,
        channel: author?.name,
      }),
      { headers: { "content-type": "application/json", "cache-control": "no-store" } },
    )
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || "Metadata fetch failed" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    })
  }
}
