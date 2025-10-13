import { NextResponse } from "next/server"

export async function GET() {
  const backendConfigured = Boolean(process.env.SSA_BACKEND_URL)
  return NextResponse.json({ backendConfigured })
}
