// robots.txt 生成

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site";

// Static Export用
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [],
        },
        sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    };
}
