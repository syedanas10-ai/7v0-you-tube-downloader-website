import { HomePageClient } from "./HomePageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Video Creator Academy & Tools | SSA",
  description:
    "Master video editing, YouTube growth, and content creation with educational resources and utility tools.",
  keywords: "video editing, YouTube growth, content creation, video tools, tutorials",
  openGraph: {
    title: "Video Creator Academy & Tools",
    description: "Learn video creation, editing, and optimization with professional tools.",
    type: "website",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
