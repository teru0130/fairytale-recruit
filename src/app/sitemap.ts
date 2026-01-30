// sitemap.xml 生成（Static Export対応）

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site";

// Static Export用
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url;

    const routes = [
        "",
        "/about-nonadult",
        "/safety",
        "/how-to-start",
        "/requirements",
        "/faq",
        "/legal",
        "/blog",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));
}
