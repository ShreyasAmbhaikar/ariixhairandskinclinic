import { Plus_Jakarta_Sans, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import "./ariix.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "fallback",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

import type { Metadata, Viewport } from "next";
// import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { BackToTopFloat } from "@/components/landing/back-to-top-float";
import { Footer } from "@/components/ariix/Footer";
import { Header } from "@/components/ariix/Header";
import { WhatsAppFloat } from "@/components/landing/whatsapp-float";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seoTitle,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.seoDescription,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hair-transplant-hero.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} skin and hair clinic`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    images: ["/images/hair-transplant-hero.webp"]
  },
  icons: {
    icon: [
      {
        url: "/images/logo-symbol-footer.webp",
        type: "image/webp"
      }
    ],
    shortcut: "/images/logo-symbol-footer.webp",
    apple: "/images/logo-symbol-footer.webp"
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7B4BB8",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} data-scroll-behavior="smooth" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${dmSans.variable}`}>
      <head />
      <body id="page-top" className={dmSans.className}>
        {/* <GoogleTagManager gtmId="GTM-PXN97FFN" /> */}
        {/* <GoogleAnalytics gaId="G-5ZQYRLSYZZ" /> */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="canvas-wrapper relative">
          <Header />
          {children}
          <Footer />
        </div>
        <BackToTopFloat />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
