import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { skinTagRemovalTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(skinTagRemovalTreatment);

export default function SkinTagRemovalPage() {
  return <TreatmentPage data={skinTagRemovalTreatment} />;
}
