import { blogOgContentType, blogOgImage, blogOgSize } from "@/lib/blog-og";

export const runtime = "nodejs";
export const alt = "WebbingHUB Blog";
export const size = blogOgSize;
export const contentType = blogOgContentType;

const text = {
  en: {
    tag: "WebbingHUB Blog",
    headline: "How hard is it to",
    headlineEm: "make a website?",
    subtitle: "A practical breakdown, from drag-and-drop builders to fully custom development, and when to hire professionals.",
  },
  ro: {
    tag: "WebbingHUB Blog",
    headline: "Cât de greu e să",
    headlineEm: "faci un website?",
    subtitle: "O privire practică, de la buildere drag-and-drop până la dezvoltare pe măsură, și când merită să chemi pe cineva.",
  },
  es: {
    tag: "WebbingHUB Blog",
    headline: "Qué tan difícil es",
    headlineEm: "hacer una web?",
    subtitle: "Un desglose práctico, de los constructores de arrastrar y soltar al desarrollo a medida, y cuándo conviene contratar.",
  },
} as const;

export default function Image({ params }: { params: { locale: string } }) {
  const locale = params.locale === "ro" || params.locale === "es" ? params.locale : "en";
  return blogOgImage(text[locale]);
}
