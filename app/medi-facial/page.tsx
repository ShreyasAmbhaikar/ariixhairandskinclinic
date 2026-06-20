import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { mediFacialTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(mediFacialTreatment);

export default function MediFacialPage() {
  return <TreatmentPage data={mediFacialTreatment} />;
}
