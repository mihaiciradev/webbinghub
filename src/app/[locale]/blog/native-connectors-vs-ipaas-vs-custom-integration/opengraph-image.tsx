import { blogOgContentType, blogOgImage, blogOgSize } from "@/lib/blog-og";

export const runtime = "nodejs";
export const alt = "WebbingHUB Blog";
export const size = blogOgSize;
export const contentType = blogOgContentType;

const text = {
  en: {
    tag: "WebbingHUB Blog",
    headline: "The same order,",
    headlineEm: "three ways.",
    subtitle: "Native connectors, iPaaS, and custom integration.",
  },
  ro: {
    tag: "WebbingHUB Blog",
    headline: "Aceeași comandă,",
    headlineEm: "pe trei căi.",
    subtitle: "Conector nativ, iPaaS și integrare pe măsură.",
  },
  es: {
    tag: "WebbingHUB Blog",
    headline: "El mismo pedido,",
    headlineEm: "de tres maneras.",
    subtitle: "Conector nativo, iPaaS e integración a medida.",
  },
} as const;

export default function Image({ params }: { params: { locale: string } }) {
  const locale = params.locale === "ro" || params.locale === "es" ? params.locale : "en";
  return blogOgImage(text[locale]);
}
