import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { dandruffTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(dandruffTreatment);

export default function DandruffTreatmentPage() {
  return <TreatmentPage data={dandruffTreatment} />;
}
