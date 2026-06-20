import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { laserSkinRejuvenationTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(laserSkinRejuvenationTreatment);

export default function LaserSkinRejuvenationPage() {
  return <TreatmentPage data={laserSkinRejuvenationTreatment} />;
}
