"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ChannelBadge({ className }: { className?: string }) {
  return (
    <Link
      href="https://youtube.com/@all_inone_editz7?si=Zkt1oI2_0QjS06X-"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-3 px-3 py-2 rounded-full border border-sidebar-primary/60 bg-background/60 hover:bg-accent/10 transition neon-glow",
        className,
      )}
      aria-label="Visit ALL IN ONE EDITZ7 on YouTube"
    >
      <span className="relative h-6 w-6 rounded-full overflow-hidden border border-sidebar-primary/50">
        <Image
          src="/ssa-channel-logo.jpg"
          alt="ALL IN ONE EDITZ7 channel logo"
          fill
          sizes="24px"
          className="object-cover"
        />
      </span>
      <span className="text-sm font-medium">ALL IN ONE EDITZ7</span>
    </Link>
  )
}
