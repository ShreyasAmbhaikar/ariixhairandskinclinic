import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { prpHairTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(prpHairTreatment);

export default function PrpHairTreatmentPage() {
  return <TreatmentPage data={prpHairTreatment} />;
}
