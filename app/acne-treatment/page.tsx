import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { acneTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(acneTreatment);

export default function AcneTreatmentPage() {
  return <TreatmentPage data={acneTreatment} />;
}
