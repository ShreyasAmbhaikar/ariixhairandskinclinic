import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FEFCFF",
    theme_color: "#B85F0D",
    icons: [
      {
        src: siteConfig.images.logo,
        sizes: "338x288",
        type: "image/png"
      }
    ]
  };
}
