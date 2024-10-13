// import { MetadataRoute } from 'next'

export default function manifest(): any {
    return {
        name: "WebbingHub",
        short_name: "WebbingHub",
        description: "Websites for any vision, any business & every user.",
        start_url: "/",
        background_color: "#E4D0A7",
        theme_color: "#333232",
        display: "standalone",
        icons: [
            {
                src: "/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        screenshots: [
            {
                src: "/screenshot_desktop.png",
                sizes: "2512x1202",
                type: "image/png",
                form_factor: "wide",
            },
            {
                src: "/screenshot_mobile.png",
                sizes: "628x1140",
                type: "image/png",
                form_factor: "narrow",
            }
        ],
    }
}