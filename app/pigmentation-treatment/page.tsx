import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { pigmentationTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(pigmentationTreatment);

export default function PigmentationTreatmentPage() {
  return <TreatmentPage data={pigmentationTreatment} />;
}
