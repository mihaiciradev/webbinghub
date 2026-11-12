import { blogOgContentType, blogOgImage, blogOgSize } from "@/lib/blog-og";

export const runtime = "nodejs";
export const alt = "WebbingHUB Blog";
export const size = blogOgSize;
export const contentType = blogOgContentType;

const text = {
  en: {
    tag: "From the team",
    headline: "We try to contribute.",
    headlineEm: "Because we care.",
    subtitle: "Practical insights on web development, website costs, and digital growth for business owners.",
  },
  ro: {
    tag: "De la echipă",
    headline: "Încercăm să contribuim.",
    headlineEm: "Pentru că ne pasă.",
    subtitle: "Articole practice despre dezvoltare web, costuri și creștere, pentru cine conduce o afacere.",
  },
  es: {
    tag: "Del equipo",
    headline: "Intentamos aportar.",
    headlineEm: "Porque nos importa.",
    subtitle: "Artículos prácticos sobre desarrollo web, costes y crecimiento, para quien lleva un negocio.",
  },
} as const;

export default function Image({ params }: { params: { locale: string } }) {
  const locale = params.locale === "ro" || params.locale === "es" ? params.locale : "en";
  return blogOgImage(text[locale]);
}
