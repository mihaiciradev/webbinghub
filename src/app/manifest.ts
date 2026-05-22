import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WebbingHUB — Custom Web Development",
    short_name: "WebbingHUB",
    description:
      "Custom websites, internal tools, and digital solutions built from scratch. No templates, zero lock-in.",
    start_url: "/en/",
    scope: "/",
    background_color: "#faf8f5",
    theme_color: "#b8975a",
    display: "standalone",
    lang: "en",
    categories: ["business", "productivity", "utilities"],
    icons: [
      { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/screenshot_desktop.png",
        sizes: "2512x1202",
        type: "image/png",
        // @ts-expect-error — valid field, not yet in Next.js types
        form_factor: "wide",
        label: "WebbingHUB homepage on desktop",
      },
      {
        src: "/screenshot_mobile.png",
        sizes: "628x1140",
        type: "image/png",
        // @ts-expect-error — valid field, not yet in Next.js types
        form_factor: "narrow",
        label: "WebbingHUB homepage on mobile",
      },
    ],
  };
}
