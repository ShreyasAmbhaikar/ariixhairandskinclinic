import type { Metadata } from "next";
import HomePageClient from "./home-page-client";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Best Skin Care Clinic in Pune | Dermatologist Kharadi & Sinhagad Road",
  description: "Consult Dr. Abhimanyu Jagtap at Ariix Clinic, the best skin care clinic in Pune. Safe and effective hair transplant, laser hair removal, and skin rejuvenation.",
  alternates: {
    canonical: `${siteConfig.url}/best-skin-care-clinic-in-pune/`
  }
};

export default function BestSkinCareClinicPage() {
  return <HomePageClient />;
}
