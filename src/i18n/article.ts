import type { BlogLocale } from "./config";
import { isBlogLocale } from "./config";
import { BASE_URL, marketingLocale } from "./utils";

export function articleLocale(locale: string): BlogLocale {
  return isBlogLocale(locale) ? locale : "en";
}

export function articleUrl(locale: string, path: string) {
  return `${BASE_URL}/${articleLocale(locale)}${path}`;
}

export function blogPostingSchema(opts: {
  locale: string;
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  wordCount?: number;
  timeRequired?: string;
  section?: string;
  keywords?: string;
  crumb: string;
  homeName?: string;
}) {
  const locale = articleLocale(opts.locale);
  const url = articleUrl(locale, opts.path);
  const home = marketingLocale(locale);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
    ...(opts.timeRequired ? { timeRequired: opts.timeRequired } : {}),
    inLanguage: locale,
    author: {
      "@type": "Organization",
      name: "WebbingHUB",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/full_logo_gold.svg`, width: 250, height: 60 },
    },
    publisher: {
      "@type": "Organization",
      name: "WebbingHUB",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/full_logo_gold.svg`, width: 250, height: 60 },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@id": `${BASE_URL}/${locale}/blog#webpage` },
    ...(opts.section ? { articleSection: opts.section } : {}),
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: opts.homeName ?? (home === "ro" ? "Acasă" : "Home"),
          item: `${BASE_URL}/${home}`,
        },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/${locale}/blog` },
        { "@type": "ListItem", position: 3, name: opts.crumb, item: url },
      ],
    },
  };
}
