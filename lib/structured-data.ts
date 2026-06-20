import { siteConfig } from "@/lib/site-config";

const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();

export function getStructuredData() {
  const sameAs = Object.values(siteConfig.socialLinks).filter(Boolean);

  // Generate structured schema data for each branch location
  const localBusinesses = siteConfig.locations.map((loc) => {
    return {
      "@context": "https://schema.org",
      "@type": "DermatologyClinic",
      "@id": `${siteConfig.url}/locations/${loc.slug}/#clinic`,
      name: `${loc.name} - ${loc.branchName}`,
      url: `${siteConfig.url}/locations/${loc.slug}`,
      image: [
        absoluteUrl(siteConfig.images.logo),
        absoluteUrl("/images/hair-transplant-hero.webp"),
        absoluteUrl("/images/acne-treatment-hero.webp")
      ],
      logo: absoluteUrl(siteConfig.images.logo),
      description: siteConfig.description,
      telephone: loc.phone,
      email: siteConfig.email,
      priceRange: siteConfig.priceRange,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address.streetAddress,
        addressLocality: loc.address.addressLocality,
        addressRegion: loc.address.addressRegion,
        postalCode: loc.address.postalCode,
        addressCountry: loc.address.addressCountry
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: loc.geo.latitude,
        longitude: loc.geo.longitude
      },
      openingHoursSpecification: Object.entries(loc.hours).map(([day, val]) => {
        let opens = "00:00";
        let closes = "00:00";
        
        if (val !== "Closed") {
          if (loc.slug === "kharadi") {
            opens = day === "sunday" ? "12:00" : "00:00";
            closes = day === "sunday" ? "20:00" : "00:00";
          } else {
            opens = day === "sunday" ? "00:00" : "10:30";
            closes = day === "sunday" ? "00:00" : "21:00";
          }
        }
        
        return {
          "@type": "OpeningHoursSpecification" as const,
          dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
          opens,
          closes
        };
      }),
      areaServed: {
        "@type": "City",
        name: "Pune"
      },
      medicalSpecialty: "Dermatology",
      sameAs,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Skin & Hair treatments",
        itemListElement: siteConfig.treatments.map((treatment) => ({
          "@type": "Offer",
          url: absoluteUrl(treatment.href),
          itemOffered: {
            "@type": "Service",
            name: treatment.title,
            description: treatment.description,
            url: absoluteUrl(treatment.href),
            provider: {
              "@id": `${siteConfig.url}/locations/${loc.slug}/#clinic`
            }
          }
        }))
      }
    };
  });

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.images.logo),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: siteConfig.address.addressCountry,
      availableLanguage: ["English", "Hindi"]
    },
    sameAs
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    },
    inLanguage: siteConfig.language
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url
      }
    ]
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return [...localBusinesses, organization, website, breadcrumb, faqPage];
}
