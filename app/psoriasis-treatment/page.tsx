import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { psoriasisTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(psoriasisTreatment);

export default function PsoriasisTreatmentPage() {
  return <TreatmentPage data={psoriasisTreatment} />;
}
