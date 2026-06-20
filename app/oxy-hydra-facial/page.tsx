import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { oxyHydraFacialTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(oxyHydraFacialTreatment);

export default function OxyHydraFacialPage() {
  return <TreatmentPage data={oxyHydraFacialTreatment} />;
}
