"use client";

import { useEffect, useState } from "react";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";

type GalleryMedia = {
  src: string;
  alt: string;
  type?: "image" | "video";
};

export function GalleryLightboxClient({
  images
}: {
  images: readonly GalleryMedia[];
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <GalleryLightbox images={images} />;
}
