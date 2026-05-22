import { ImageResponse } from "next/og";
import { getLogoDataUri, getMascotDataUri, getCormorantFont } from "@/lib/og";
import { OgLayout } from "@/lib/OgLayout";

export const runtime = "nodejs";
export const alt = "WebbingHUB Blog — Web Development Insights";
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
      tag="From the team"
      headline="We try to contribute."
      headlineEm="Because we care."
      subtitle="Practical insights on web development, website costs, and digital growth for business owners."
    />,
    {
      ...size,
      fonts: fontData
        ? [{ name: "Cormorant", data: fontData, weight: 600 }]
        : [],
    }
  );
}
