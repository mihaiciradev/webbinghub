import type { MetadataRoute } from "next";

const baseUrl = "https://webbinghub.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/about`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
    { url: `${baseUrl}/blog/how-hard-is-it-to-make-a-website`, lastModified },
  ];
}
