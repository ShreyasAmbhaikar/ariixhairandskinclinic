import { siteConfig } from "@/lib/site-config";

export function getLlmsText() {
  return `# ${siteConfig.name}

> ${siteConfig.tagline}

${siteConfig.description}

- **Website**: [${siteConfig.name}](${siteConfig.url})
- **Phone**: ${siteConfig.phone}
- **Email**: ${siteConfig.email}
- **Address**: ${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}, ${siteConfig.address.addressCountry}
- **Clinic Hours**: ${siteConfig.hours}
- **Geolocation**: Latitude ${siteConfig.geo.latitude}, Longitude ${siteConfig.geo.longitude}

## All Skin, Hair & Laser Treatments & Services
${siteConfig.treatments.map((t) => `- [**${t.title}**](${siteConfig.url}${t.href}${t.href.endsWith('/') ? '' : '/'}): ${t.description}`).join("\n")}

## Useful Navigation Links
- [**Home**](${siteConfig.url}/best-skin-care-clinic-in-pune/)
- [**About the Clinic**](${siteConfig.url}/best-skin-care-clinic-in-pune/about)
- [**Our Services Directory**](${siteConfig.url}/best-skin-care-clinic-in-pune/treatment)
- [**Patient Testimonials**](${siteConfig.url}/best-skin-care-clinic-in-pune/testimonials)
- [**Contact Info & Directions**](${siteConfig.url}/best-skin-care-clinic-in-pune/contact-us)
- [**Gallery**](${siteConfig.url}/best-skin-care-clinic-in-pune/gallery)
- [**Sitemap XML**](${siteConfig.url}/best-skin-care-clinic-in-pune/sitemap.xml)
`;
}

export function getLlmsFullText() {
  return `${getLlmsText()}

## About the Specialist

### Dr. Abhimanyu Jagtap
- **Role**: Skin, Hair & Laser Specialist
- **Experience**: 8+ Years of clinical experience in advanced dermatology
- **Specializations**: FUE Hair Transplant, PRP Hair & Skin, Laser Rejuvenation, Acne & Scar revision, Aesthetic Medicine.

## Frequently Asked Questions (FAQ)
${siteConfig.faqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join("\n\n")}

## AI Crawler and Search Optimization Notes
This site is fully search engine optimized (SEO) and optimized for LLM agents. All treatment pages have custom structured JSON-LD schemas (\`MedicalWebPage\`, \`FAQPage\`, \`BreadcrumbList\`, \`DermatologyClinic\`), clear Heading hierarchies (single H1 per page), semantic tags, responsive optimized images in WebP format, and local keywords focused on Kharadi and Sinhagad Road, Pune.
`;
}
