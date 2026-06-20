import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { hairFallTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(hairFallTreatment);

export default function HairFallTreatmentPage() {
  return <TreatmentPage data={hairFallTreatment} />;
}
