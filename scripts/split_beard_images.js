const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\e63010f2-b919-4fe3-a069-f5d6d4bb96a8\\media__1782038100586.jpg';

const outputHeroPath = path.join(__dirname, '../public/images/beard-transplant-hero.webp');
const outputHeroMobilePath = path.join(__dirname, '../public/images/beard-transplant-hero-mobile.webp');
const outputProcedurePath = path.join(__dirname, '../public/images/beard-transplant-procedure.webp');

if (!fs.existsSync(inputPath)) {
  console.error(`Input file not found: ${inputPath}`);
  process.exit(1);
}

sharp(inputPath)
  .metadata()
  .then(metadata => {
    const width = metadata.width;
    const height = metadata.height;
    const halfWidth = Math.floor(width / 2);

    console.log(`Input image dimensions: ${width}x${height}`);

    // 1. Process left half (Procedure Image)
    const procPromise = sharp(inputPath)
      .extract({ left: 0, top: 0, width: halfWidth, height: height })
      .webp({ quality: 82 })
      .toFile(outputProcedurePath)
      .then(info => {
        console.log(`Saved optimized procedure image: ${outputProcedurePath}`, info);
      });

    // 2. Process right half (Hero Image)
    const heroPromise = sharp(inputPath)
      .extract({ left: halfWidth, top: 0, width: width - halfWidth, height: height })
      .webp({ quality: 82 })
      .toFile(outputHeroPath)
      .then(info => {
        console.log(`Saved optimized hero image: ${outputHeroPath}`, info);
      });

    // 3. Process right half resized (Mobile Hero Image)
    const heroMobilePromise = sharp(inputPath)
      .extract({ left: halfWidth, top: 0, width: width - halfWidth, height: height })
      .resize({ width: 600 }) // Resize width for mobile viewport performance
      .webp({ quality: 80 })
      .toFile(outputHeroMobilePath)
      .then(info => {
        console.log(`Saved optimized mobile hero image: ${outputHeroMobilePath}`, info);
      });

    return Promise.all([procPromise, heroPromise, heroMobilePromise]);
  })
  .then(() => {
    console.log('All images split and optimized successfully!');
  })
  .catch(err => {
    console.error('Error processing images:', err);
  });
