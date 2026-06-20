import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { beardTransplantTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(beardTransplantTreatment);

export default function BeardTransplantPage() {
  return <TreatmentPage data={beardTransplantTreatment} />;
}
