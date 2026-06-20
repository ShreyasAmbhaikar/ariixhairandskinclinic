import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { hairLossTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(hairLossTreatment);

export default function HairLossTreatmentPage() {
  return <TreatmentPage data={hairLossTreatment} />;
}
