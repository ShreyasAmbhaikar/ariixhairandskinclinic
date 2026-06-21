import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = [
    { url: `${siteConfig.url}/best-skin-care-clinic-in-pune/`, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${siteConfig.url}/locations/kharadi/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${siteConfig.url}/locations/sinhagad-road/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${siteConfig.url}/about/`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteConfig.url}/treatment/`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteConfig.url}/gallery/`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteConfig.url}/testimonials/`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteConfig.url}/contact-us/`, priority: 0.8, changeFrequency: "monthly" as const }
  ];

  const treatmentPages = siteConfig.treatments.map((t) => ({
    url: `${siteConfig.url}${t.href}`,
    lastModified: siteConfig.lastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  return [
    ...mainPages.map((p) => ({
      url: p.url,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: p.changeFrequency,
      priority: p.priority
    })),
    ...treatmentPages
  ];
}
