import { ImageResponse } from "next/og";
import { getLogoDataUri, getMascotDataUri, getCormorantFont } from "@/lib/og";
import { OgLayout } from "@/lib/OgLayout";

export const blogOgSize = { width: 1200, height: 630 };
export const blogOgContentType = "image/png";

export async function blogOgImage(text: {
  tag: string;
  headline: string;
  headlineEm: string;
  subtitle: string;
}) {
  const painted = `${text.tag}\n${text.headline}\n${text.headlineEm}\n${text.subtitle}`;
  const [logoSrc, mascotSrc, fontData] = await Promise.all([
    Promise.resolve(getLogoDataUri()),
    Promise.resolve(getMascotDataUri()),
    getCormorantFont(painted),
  ]);

  return new ImageResponse(
    (
      <OgLayout
        logoSrc={logoSrc}
        mascotSrc={mascotSrc}
        tag={text.tag}
        headline={text.headline}
        headlineEm={text.headlineEm}
        subtitle={text.subtitle}
      />
    ),
    {
      ...blogOgSize,
      fonts: fontData ? [{ name: "Cormorant", data: fontData, weight: 600 }] : [],
    }
  );
}
