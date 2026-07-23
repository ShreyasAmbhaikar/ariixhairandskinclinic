import sharp from "sharp";
import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const outputDir = path.join(rootDir, "public", "images", "cards");
const brainDir = "C:\\Users\\Dell 3515\\.gemini\\antigravity\\brain\\babb05f4-b75f-4a38-a4f4-547e3db8d4c3";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function findGeneratedJpg(name) {
  if (!fs.existsSync(brainDir)) return null;
  const files = fs.readdirSync(brainDir);
  const found = files.find(f => f.startsWith(name) && f.endsWith(".jpg"));
  return found ? path.join(brainDir, found) : null;
}

const treatmentsMapping = [
  { slug: "hair-transplant", genName: "hair_transplant_card", fallback: "public/images/hair-transplant-procedure.webp" },
  { slug: "prp-hair-treatment", genName: "prp_hair_card", fallback: "public/images/prp-hair-procedure.webp" },
  { slug: "hair-loss-treatment", genName: "hair_loss_card", fallback: "public/images/hair-loss-procedure.webp" },
  { slug: "hair-fall-treatment", genName: "hair_fall_card", fallback: "public/images/hair-fall-procedure.webp" },
  { slug: "beard-transplant", genName: "beard_transplant_card", fallback: "public/images/beard-transplant-procedure.webp" },
  { slug: "dandruff-treatment", genName: "dandruff_treatment_card", fallback: "public/images/dandruff-procedure.webp" },
  { slug: "laser-hair-removal", genName: "laser_hair_removal_card", fallback: "public/images/laser-hair-removal-procedure-clinic.webp" },
  { slug: "laser-tattoo-removal", genName: "laser_tattoo_card", fallback: "public/images/laser-tattoo-removal-procedure-clinic.webp" },
  { slug: "stretch-mark-removal", genName: "stretch_mark_card", fallback: "public/images/stretch-mark-removal-procedure-clinic.webp" },
  { slug: "laser-skin-rejuvenation", genName: "laser_skin_rejuv_card", fallback: "public/images/laser-skin-rejuvenation-procedure-clinic.webp" },
  { slug: "acne-treatment", genName: "acne_treatment_card", fallback: "public/images/acne-treatment-procedure-clinic.webp" },
  { slug: "acne-scar-treatment", genName: "acne_scar_card", fallback: "public/images/acne-scar-treatment-procedure-clinic.webp" },
  { slug: "pigmentation-treatment", genName: "pigmentation_card", fallback: "public/images/pigmentation-treatment-procedure-clinic.webp" },
  { slug: "dark-circle-treatment", genName: null, fallback: "public/images/dark-circle-treatment-procedure-clinic.webp" },
  { slug: "mole-removal", genName: null, fallback: "public/images/mole-removal-treatment-procedure-clinic.webp" },
  { slug: "skin-tag-removal", genName: null, fallback: "public/images/skin-tag-removal-treatment-procedure-clinic.webp" },
  { slug: "psoriasis-treatment", genName: null, fallback: "public/images/psoriasis-treatment-procedure-clinic.webp" },
  { slug: "vitiligo-treatment", genName: null, fallback: "public/images/vitiligo-treatment-procedure-clinic.webp" },
  { slug: "chemical-peel-treatment", genName: null, fallback: "public/images/chemical-peel-treatment-procedure-clinic.webp" },
  { slug: "hydra-facial", genName: null, fallback: "public/images/hydra-facial-procedure-clinic.webp" },
  { slug: "skin-polishing-and-rejuvenation", genName: null, fallback: "public/images/skin-polishing-and-rejuvenation-procedure-clinic.webp" },
  { slug: "medi-facial", genName: null, fallback: "public/images/medi-facial-procedure-clinic.webp" },
  { slug: "vampire-facial", genName: null, fallback: "public/images/vampire-facial-procedure-clinic.webp" },
  { slug: "oxy-hydra-facial", genName: null, fallback: "public/images/oxy-hydra-facial-procedure-clinic.webp" },
  { slug: "carbon-peel-fruit-peel", genName: null, fallback: "public/images/carbon-peel-fruit-peel-procedure-clinic.webp" }
];

async function processImages() {
  console.log("Optimizing 4:3 card images for 25 treatments...");
  for (const item of treatmentsMapping) {
    const generatedPath = item.genName ? findGeneratedJpg(item.genName) : null;
    let sourcePath = generatedPath || path.join(rootDir, item.fallback);
    
    // Fall back to hero if procedure clinic does not exist
    if (!fs.existsSync(sourcePath)) {
      const heroFallback = path.join(rootDir, item.fallback.replace("-procedure-clinic", "-hero").replace("-procedure", "-hero"));
      if (fs.existsSync(heroFallback)) {
        sourcePath = heroFallback;
      }
    }

    const destPath = path.join(outputDir, `${item.slug}.webp`);

    if (fs.existsSync(sourcePath)) {
      await sharp(sourcePath)
        .resize(600, 450, {
          fit: "cover",
          position: "center"
        })
        .webp({ quality: 85 })
        .toFile(destPath);
      console.log(`✓ Processed 600x450 WebP for ${item.slug}`);
    } else {
      console.warn(`⚠ Missing source for ${item.slug}: ${sourcePath}`);
    }
  }
  console.log("All 25 treatment card images processed & optimized at 4:3 aspect ratio!");
}

processImages().catch(err => {
  console.error("Error processing images:", err);
  process.exit(1);
});
