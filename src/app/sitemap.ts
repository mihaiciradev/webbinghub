import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
        }
    ]
}