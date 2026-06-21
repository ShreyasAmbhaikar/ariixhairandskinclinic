const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\e63010f2-b919-4fe3-a069-f5d6d4bb96a8\\carbon_laser_peel_1782037725365.png';
const outputPath = path.join(__dirname, '../public/images/laser-skin-rejuvenation-procedure-clinic.webp');

if (fs.existsSync(inputPath)) {
  sharp(inputPath)
    .webp({ quality: 82 }) // Optimize quality for fast loading
    .toFile(outputPath)
    .then(info => {
      console.log(`Success: Converted generated PNG to optimized WebP at ${outputPath}`);
      console.log(info);
    })
    .catch(err => {
      console.error('Error converting image:', err);
    });
} else {
  console.error(`Input file not found: ${inputPath}`);
}
