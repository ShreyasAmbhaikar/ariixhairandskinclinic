import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { skinPolishingRejuvenationTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(skinPolishingRejuvenationTreatment);

export default function SkinPolishingRejuvenationPage() {
  return <TreatmentPage data={skinPolishingRejuvenationTreatment} />;
}
