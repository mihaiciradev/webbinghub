import { blogOgContentType, blogOgImage, blogOgSize } from "@/lib/blog-og";

export const runtime = "nodejs";
export const alt = "WebbingHUB Blog";
export const size = blogOgSize;
export const contentType = blogOgContentType;

const text = {
  en: {
    tag: "WebbingHUB Blog",
    headline: "One supplier timed out.",
    headlineEm: "Search can still return.",
    subtitle: "Timeouts, retries, and recovering a booking whose response was lost.",
  },
  ro: {
    tag: "WebbingHUB Blog",
    headline: "Un furnizor a dat timeout.",
    headlineEm: "Căutarea poate continua.",
    subtitle: "Timeout-uri, retry-uri și recuperarea unei rezervări al cărei răspuns s-a pierdut.",
  },
  es: {
    tag: "WebbingHUB Blog",
    headline: "Un proveedor hizo timeout.",
    headlineEm: "La búsqueda puede seguir.",
    subtitle: "Timeouts, reintentos y cómo recuperar una reserva cuya respuesta se perdió.",
  },
} as const;

export default function Image({ params }: { params: { locale: string } }) {
  const locale = params.locale === "ro" || params.locale === "es" ? params.locale : "en";
  return blogOgImage(text[locale]);
}
