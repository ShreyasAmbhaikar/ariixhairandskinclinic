import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { acneScarTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(acneScarTreatment);

export default function AcneScarTreatmentPage() {
  return <TreatmentPage data={acneScarTreatment} />;
}
