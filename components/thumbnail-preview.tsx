"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export function ThumbnailPreview({
  thumbnailUrl,
  title,
  author,
  className,
}: {
  thumbnailUrl: string
  title: string
  author: string
  className?: string
}) {
  return (
    <figure className={cn("grid grid-cols-[120px_1fr] gap-4 items-center", className)}>
      <div className="relative aspect-video w-[120px] rounded-md overflow-hidden border border-border neon-glow">
        {/* crossOrigin not needed since we are not drawing on canvas */}
        <Image
          src={thumbnailUrl || "/placeholder.svg"}
          alt={`Thumbnail for ${title}`}
          fill
          sizes="120px"
          className="object-cover"
          priority
        />
      </div>
      <figcaption className="space-y-1">
        <div className="font-medium text-pretty">{title}</div>
        <div className="text-xs text-muted-foreground">{author}</div>
      </figcaption>
    </figure>
  )
}
