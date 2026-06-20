import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { laserHairRemovalTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(laserHairRemovalTreatment);

export default function LaserHairRemovalPage() {
  return <TreatmentPage data={laserHairRemovalTreatment} />;
}
