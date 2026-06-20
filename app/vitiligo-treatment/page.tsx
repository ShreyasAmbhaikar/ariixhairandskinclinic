import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { vitiligoTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(vitiligoTreatment);

export default function VitiligoTreatmentPage() {
  return <TreatmentPage data={vitiligoTreatment} />;
}
