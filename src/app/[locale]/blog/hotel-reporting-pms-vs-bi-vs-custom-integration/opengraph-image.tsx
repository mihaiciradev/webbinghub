import { blogOgContentType, blogOgImage, blogOgSize } from "@/lib/blog-og";

export const runtime = "nodejs";
export const alt = "WebbingHUB Blog";
export const size = blogOgSize;
export const contentType = blogOgContentType;

const text = {
  en: {
    tag: "WebbingHUB Blog",
    headline: "Where the numbers",
    headlineEm: "disagree.",
    subtitle: "PMS reports, Power BI, or a custom integration.",
  },
  ro: {
    tag: "WebbingHUB Blog",
    headline: "Unde nu se",
    headlineEm: "potrivesc cifrele.",
    subtitle: "Rapoarte din PMS, Power BI sau integrare pe măsură.",
  },
  es: {
    tag: "WebbingHUB Blog",
    headline: "Dónde dejan",
    headlineEm: "de coincidir las cifras.",
    subtitle: "Informes del PMS, Power BI o integración a medida.",
  },
} as const;

export default function Image({ params }: { params: { locale: string } }) {
  const locale = params.locale === "ro" || params.locale === "es" ? params.locale : "en";
  return blogOgImage(text[locale]);
}
