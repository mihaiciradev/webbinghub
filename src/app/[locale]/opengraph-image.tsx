import { ImageResponse } from "next/og";
import { getLogoDataUri, getMascotDataUri, getCormorantFont } from "@/lib/og";
import { OgLayout } from "@/lib/OgLayout";

export const runtime = "nodejs";
export const alt = "WebbingHUB: custom software that connects your business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [logoSrc, mascotSrc, fontData] = await Promise.all([
    Promise.resolve(getLogoDataUri()),
    Promise.resolve(getMascotDataUri()),
    getCormorantFont(),
  ]);

  return new ImageResponse(
    <OgLayout
      logoSrc={logoSrc}
      mascotSrc={mascotSrc}
      tag="Software studio"
      headline="Custom software that connects"
      headlineEm="your business."
      subtitle="Internal platforms, customer portals, and integrations. You own the code and the result."
    />,
    {
      ...size,
      fonts: fontData
        ? [{ name: "Cormorant", data: fontData, weight: 600 }]
        : [],
    }
  );
}
