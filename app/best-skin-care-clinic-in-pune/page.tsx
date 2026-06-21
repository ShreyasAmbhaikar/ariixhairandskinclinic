import type { Metadata } from "next";
import HomePageClient from "./home-page-client";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Best Skin Care Clinic in Pune | Ariix Clinic"
  },
  description: "Consult Dr. Abhimanyu Jagtap at Ariix Clinic, Pune's top skin care clinic. Expert hair transplant, laser hair removal & skin treatments.",
  alternates: {
    canonical: `${siteConfig.url}/best-skin-care-clinic-in-pune/`,
    languages: {
      "en-IN": `${siteConfig.url}/best-skin-care-clinic-in-pune/`,
      "x-default": `${siteConfig.url}/best-skin-care-clinic-in-pune/`
    }
  }
};

export default function BestSkinCareClinicPage() {
  const kharadi = siteConfig.locations[0];
  const sinhagad = siteConfig.locations[1];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "name": siteConfig.name,
      "url": `${siteConfig.url}/best-skin-care-clinic-in-pune/`
    },
    {
      "@context": "https://schema.org",
      "@type": "DermatologyClinic",
      "@id": `${siteConfig.url}/locations/kharadi/#clinic`,
      "name": `${siteConfig.name} - Kharadi Branch`,
      "url": `${siteConfig.url}/locations/kharadi/`,
      "logo": `${siteConfig.url}/images/logo-symbol.webp`,
      "image": `${siteConfig.url}/images/logo-symbol.webp`,
      "description": `${kharadi.branchName} - ${siteConfig.description}`,
      "telephone": kharadi.phone,
      "email": siteConfig.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": kharadi.address.streetAddress,
        "addressLocality": kharadi.address.addressLocality,
        "addressRegion": kharadi.address.addressRegion,
        "postalCode": kharadi.address.postalCode,
        "addressCountry": kharadi.address.addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": kharadi.geo.latitude,
        "longitude": kharadi.geo.longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "12:00",
          "closes": "20:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": kharadi.reviews.rating,
        "reviewCount": kharadi.reviews.count
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "DermatologyClinic",
      "@id": `${siteConfig.url}/locations/sinhagad-road/#clinic`,
      "name": `${siteConfig.name} - Sinhagad Road Branch`,
      "url": `${siteConfig.url}/locations/sinhagad-road/`,
      "logo": `${siteConfig.url}/images/logo-symbol.webp`,
      "image": `${siteConfig.url}/images/logo-symbol.webp`,
      "description": `${sinhagad.branchName} - ${siteConfig.description}`,
      "telephone": sinhagad.phone,
      "email": siteConfig.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": sinhagad.address.streetAddress,
        "addressLocality": sinhagad.address.addressLocality,
        "addressRegion": sinhagad.address.addressRegion,
        "postalCode": sinhagad.address.postalCode,
        "addressCountry": sinhagad.address.addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": sinhagad.geo.latitude,
        "longitude": sinhagad.geo.longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:30",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "17:30",
          "closes": "21:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": sinhagad.reviews.rating,
        "reviewCount": sinhagad.reviews.count
      }
    }
  ];

  return (
    <>
      <HomePageClient />
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c")
          }}
        />
      ))}
    </>
  );
}
