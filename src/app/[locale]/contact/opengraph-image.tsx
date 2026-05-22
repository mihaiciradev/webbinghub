import { ImageResponse } from "next/og";
import { getLogoDataUri, getMascotDataUri, getCormorantFont } from "@/lib/og";
import { OgLayout } from "@/lib/OgLayout";

export const runtime = "nodejs";
export const alt = "Contact WebbingHUB — Let's Have a Chat";
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
      tag="Get in touch"
      headline="Let's have"
      headlineEm="a chat."
      subtitle="No pressure, no pitch. An honest conversation about your business and what you need online."
    />,
    {
      ...size,
      fonts: fontData
        ? [{ name: "Cormorant", data: fontData, weight: 600 }]
        : [],
    }
  );
}
