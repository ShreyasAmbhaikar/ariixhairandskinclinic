import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { hairTransplantTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(hairTransplantTreatment);

export default function HairTransplantPage() {
  return <TreatmentPage data={hairTransplantTreatment} />;
}
