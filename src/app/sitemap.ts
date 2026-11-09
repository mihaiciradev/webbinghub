import type { MetadataRoute } from "next";
import { locales, singleLocalePages } from "@/i18n/config";
import { BASE_URL as BASE, pageAlternates } from "@/i18n/utils";

// Static pages with their SEO priority and change frequency
const PAGES = [
  { path: "",                                                              priority: 1.0, freq: "weekly"  },
  { path: "/about",                                                        priority: 0.8, freq: "monthly" },
  { path: "/contact",                                                      priority: 0.9, freq: "monthly" },
  { path: "/blog",                                                         priority: 0.7, freq: "weekly"  },
  { path: "/blog/native-connectors-vs-ipaas-vs-custom-integration",       priority: 0.7, freq: "monthly" },
  { path: "/blog/hotel-price-changed-before-booking",                    priority: 0.7, freq: "monthly" },
  { path: "/blog/how-hard-is-it-to-make-a-website",                       priority: 0.7, freq: "monthly" },
  { path: "/blog/maximize-website-visibility-google-search-console",       priority: 0.8, freq: "monthly" },
  { path: "/websites-timisoara",                                           priority: 0.85, freq: "monthly" },
  { path: "/websites-bucuresti",                                           priority: 0.85, freq: "monthly" },
  { path: "/websites-romania",                                             priority: 0.85, freq: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, freq } of PAGES) {
    // One entry per language the page actually exists in
    const pageLocales = singleLocalePages[path] ? [singleLocalePages[path]] : locales;
    for (const locale of pageLocales) {
      entries.push({
        url: `${BASE}/${locale}${path}`,
        lastModified: now,
        changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
        priority,
        alternates: { languages: pageAlternates(locale, path).languages },
      });
    }
  }

  return entries;
}
