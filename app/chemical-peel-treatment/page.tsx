import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { chemicalPeelTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(chemicalPeelTreatment);

export default function ChemicalPeelTreatmentPage() {
  return <TreatmentPage data={chemicalPeelTreatment} />;
}
