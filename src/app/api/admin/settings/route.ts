import { NextRequest, NextResponse } from "next/server";
import { getSettings, saveSettings } from "@/lib/settings";

export async function GET() {
  return NextResponse.json(getSettings());
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Geçersiz veri" }, { status: 400 });
  }

  const updated = saveSettings({
    siteName: typeof body.siteName === "string" ? body.siteName : undefined,
    colors: body.colors,
  });

  return NextResponse.json(updated);
}
