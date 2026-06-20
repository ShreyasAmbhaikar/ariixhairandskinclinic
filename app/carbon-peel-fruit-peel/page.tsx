import {
  createTreatmentMetadata,
  TreatmentPage
} from "@/components/treatment/treatment-page";
import { carbonPeelFruitPeelTreatment } from "@/lib/treatment-pages";

export const metadata = createTreatmentMetadata(carbonPeelFruitPeelTreatment);

export default function CarbonPeelFruitPeelPage() {
  return <TreatmentPage data={carbonPeelFruitPeelTreatment} />;
}
