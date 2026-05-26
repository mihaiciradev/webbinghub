import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const BASE = "https://webbinghub.io";

// Static pages with their SEO priority and change frequency
const PAGES = [
  { path: "",                                                              priority: 1.0, freq: "weekly"  },
  { path: "/about",                                                        priority: 0.8, freq: "monthly" },
  { path: "/contact",                                                      priority: 0.9, freq: "monthly" },
  { path: "/blog",                                                         priority: 0.7, freq: "weekly"  },
  { path: "/blog/how-hard-is-it-to-make-a-website",                       priority: 0.7, freq: "monthly" },
  { path: "/blog/maximize-website-visibility-google-search-console",       priority: 0.8, freq: "monthly" },
  { path: "/websites-timisoara",                                           priority: 0.85, freq: "monthly" },
  { path: "/websites-romania",                                             priority: 0.85, freq: "monthly" },
  { path: "/privacy-policy",                                               priority: 0.2, freq: "yearly"  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, freq } of PAGES) {
    // Build one entry per locale, with all alternate language versions
    for (const locale of locales) {
      const url = `${BASE}/${locale}${path}`;

      entries.push({
        url,
        lastModified: now,
        changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
        priority,
        // hreflang alternates so Google knows about all locale versions
        alternates: {
          languages: Object.fromEntries([
            ...locales.map((l) => [l, `${BASE}/${l}${path}`]),
            ["x-default", `${BASE}/en${path}`],
          ]),
        },
      });
    }
  }

  return entries;
}
