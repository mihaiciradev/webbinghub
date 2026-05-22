import { ImageResponse } from "next/og";
import { getLogoDataUri, getMascotDataUri, getCormorantFont } from "@/lib/og";
import { OgLayout } from "@/lib/OgLayout";

export const runtime = "nodejs";
export const alt = "WebbingHUB — Custom Web Development Agency";
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
      tag="Web Development Agency"
      headline="Your website should work"
      headlineEm="as hard as you do."
      subtitle="Custom-built websites, tools & stores for businesses across Europe. Zero lock-in."
    />,
    {
      ...size,
      fonts: fontData
        ? [{ name: "Cormorant", data: fontData, weight: 600 }]
        : [],
    }
  );
}
