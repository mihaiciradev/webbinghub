import { blogOgContentType, blogOgImage, blogOgSize } from "@/lib/blog-og";

export const runtime = "nodejs";
export const alt = "WebbingHUB Blog";
export const size = blogOgSize;
export const contentType = blogOgContentType;

const text = {
  en: {
    tag: "WebbingHUB Blog",
    headline: "Could you just",
    headlineEm: "use Claude?",
    subtitle: "Connectors, quotes, and the booking record.",
  },
  ro: {
    tag: "WebbingHUB Blog",
    headline: "N-ar merge",
    headlineEm: "doar cu Claude?",
    subtitle: "Conectori, oferte și evidența rezervării.",
  },
  es: {
    tag: "WebbingHUB Blog",
    headline: "¿No bastaría",
    headlineEm: "con usar Claude?",
    subtitle: "Conectores, cotizaciones y el registro.",
  },
} as const;

export default function Image({ params }: { params: { locale: string } }) {
  const locale = params.locale === "ro" || params.locale === "es" ? params.locale : "en";
  return blogOgImage(text[locale]);
}
