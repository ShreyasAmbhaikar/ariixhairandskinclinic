import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { hydraFacialTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(hydraFacialTreatment);

export default function HydraFacialPage() {
  return <TreatmentPage data={hydraFacialTreatment} />;
}
