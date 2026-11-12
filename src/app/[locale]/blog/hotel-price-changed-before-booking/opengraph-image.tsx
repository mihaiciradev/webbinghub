import { blogOgContentType, blogOgImage, blogOgSize } from "@/lib/blog-og";

export const runtime = "nodejs";
export const alt = "WebbingHUB Blog";
export const size = blogOgSize;
export const contentType = blogOgContentType;

const text = {
  en: {
    tag: "WebbingHUB Blog",
    headline: "The hotel price changed.",
    headlineEm: "Before and after.",
    subtitle: "A cheaper equivalent at booking, then a watch until free cancellation ends.",
  },
  ro: {
    tag: "WebbingHUB Blog",
    headline: "Prețul hotelului s-a schimbat.",
    headlineEm: "Înainte și după.",
    subtitle: "Un echivalent mai ieftin la rezervare, apoi o urmărire până se termină anularea gratuită.",
  },
  es: {
    tag: "WebbingHUB Blog",
    headline: "El precio del hotel cambió.",
    headlineEm: "Antes y después.",
    subtitle: "Un equivalente más barato al reservar, y una vigilancia hasta que termina la cancelación gratuita.",
  },
} as const;

export default function Image({ params }: { params: { locale: string } }) {
  const locale = params.locale === "ro" || params.locale === "es" ? params.locale : "en";
  return blogOgImage(text[locale]);
}
