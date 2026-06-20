import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { darkCircleTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(darkCircleTreatment);

export default function DarkCircleTreatmentPage() {
  return <TreatmentPage data={darkCircleTreatment} />;
}
