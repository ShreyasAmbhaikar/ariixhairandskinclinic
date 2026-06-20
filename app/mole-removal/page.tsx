import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { moleRemovalTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(moleRemovalTreatment);

export default function MoleRemovalPage() {
  return <TreatmentPage data={moleRemovalTreatment} />;
}
