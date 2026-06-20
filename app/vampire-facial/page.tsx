import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { vampireFacialTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(vampireFacialTreatment);

export default function VampireFacialPage() {
  return <TreatmentPage data={vampireFacialTreatment} />;
}
