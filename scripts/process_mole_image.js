const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\e63010f2-b919-4fe3-a069-f5d6d4bb96a8\\media__1782038681413.jpg';
const outputPath = path.join(__dirname, '../public/images/mole-removal-treatment-procedure-clinic.webp');

if (fs.existsSync(inputPath)) {
  sharp(inputPath)
    .webp({ quality: 82 }) // Optimize quality for web performance
    .toFile(outputPath)
    .then(info => {
      console.log(`Success: Converted mole removal procedure image to WebP at ${outputPath}`);
      console.log(info);
    })
    .catch(err => {
      console.error('Error converting image:', err);
    });
} else {
  console.error(`Input file not found: ${inputPath}`);
}
