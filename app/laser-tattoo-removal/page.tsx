import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { laserTattooRemovalTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(laserTattooRemovalTreatment);

export default function LaserTattooRemovalPage() {
  return <TreatmentPage data={laserTattooRemovalTreatment} />;
}
