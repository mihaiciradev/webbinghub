import { blogOgContentType, blogOgImage, blogOgSize } from "@/lib/blog-og";

export const runtime = "nodejs";
export const alt = "WebbingHUB Blog";
export const size = blogOgSize;
export const contentType = blogOgContentType;

const text = {
  en: {
    tag: "WebbingHUB Blog",
    headline: "Maximize your website's",
    headlineEm: "visibility with Search Console",
    subtitle: "Learn how Google Search Console transforms search performance into real business growth.",
  },
  ro: {
    tag: "WebbingHUB Blog",
    headline: "Vizibilitate mai bună",
    headlineEm: "cu Search Console",
    subtitle: "Cum transformă Google Search Console performanța în căutare în creștere reală pentru afacere.",
  },
  es: {
    tag: "WebbingHUB Blog",
    headline: "Más visibilidad",
    headlineEm: "con Search Console",
    subtitle: "Cómo convierte Google Search Console el rendimiento en la búsqueda en crecimiento real.",
  },
} as const;

export default function Image({ params }: { params: { locale: string } }) {
  const locale = params.locale === "ro" || params.locale === "es" ? params.locale : "en";
  return blogOgImage(text[locale]);
}
