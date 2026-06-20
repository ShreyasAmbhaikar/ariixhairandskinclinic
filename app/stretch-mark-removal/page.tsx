import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { stretchMarkRemovalTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(stretchMarkRemovalTreatment);

export default function StretchMarkRemovalPage() {
  return <TreatmentPage data={stretchMarkRemovalTreatment} />;
}
