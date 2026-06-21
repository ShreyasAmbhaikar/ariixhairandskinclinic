const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputHeroPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\e63010f2-b919-4fe3-a069-f5d6d4bb96a8\\skin_tag_hero_1782038508196.png';
const inputProcedurePath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\e63010f2-b919-4fe3-a069-f5d6d4bb96a8\\skin_tag_procedure_1782038522953.png';

const outputHeroPath = path.join(__dirname, '../public/images/skin-tag-removal-treatment-hero.webp');
const outputHeroMobilePath = path.join(__dirname, '../public/images/skin-tag-removal-treatment-hero-mobile.webp');
const outputProcedurePath = path.join(__dirname, '../public/images/skin-tag-removal-treatment-procedure-clinic.webp');

const promises = [];

// 1. Process Hero Image (Desktop)
if (fs.existsSync(inputHeroPath)) {
  promises.push(
    sharp(inputHeroPath)
      .webp({ quality: 82 })
      .toFile(outputHeroPath)
      .then(info => console.log(`Saved optimized hero: ${outputHeroPath}`, info))
  );
  promises.push(
    sharp(inputHeroPath)
      .resize({ width: 600 })
      .webp({ quality: 80 })
      .toFile(outputHeroMobilePath)
      .then(info => console.log(`Saved optimized mobile hero: ${outputHeroMobilePath}`, info))
  );
} else {
  console.error(`Input hero not found: ${inputHeroPath}`);
}

// 2. Process Procedure Image
if (fs.existsSync(inputProcedurePath)) {
  promises.push(
    sharp(inputProcedurePath)
      .webp({ quality: 82 })
      .toFile(outputProcedurePath)
      .then(info => console.log(`Saved optimized procedure: ${outputProcedurePath}`, info))
  );
} else {
  console.error(`Input procedure not found: ${inputProcedurePath}`);
}

Promise.all(promises)
  .then(() => console.log('All skin tag removal images processed successfully!'))
  .catch(err => console.error('Error processing skin tag removal images:', err));
