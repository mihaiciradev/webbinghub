import { ImageResponse } from "next/og";
import { getLogoDataUri, getMascotDataUri, getCormorantFont } from "@/lib/og";
import { OgLayout } from "@/lib/OgLayout";

export const runtime = "nodejs";
export const alt = "The hotel price changed. What the booking engine does before and after the booking. WebbingHUB";
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
      tag="WebbingHUB Blog"
      headline="The hotel price changed."
      headlineEm="Before and after."
      subtitle="A cheaper equivalent at booking, then a watch until free cancellation ends."
    />,
    {
      ...size,
      fonts: fontData
        ? [{ name: "Cormorant", data: fontData, weight: 600 }]
        : [],
    }
  );
}
