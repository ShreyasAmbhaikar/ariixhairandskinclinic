const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// Helper to download image
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download: Status ${res.statusCode} from ${url}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });
    req.on('error', reject);
  });
}

// Final verified Pexels photo assignments
const mappings = [
  {
    name: 'Hydra Facial',
    basePath: 'hydra-facial',
    hero: '3762402',
    mobile: '3762466',
    procedure: '3762871'
  },
  {
    name: 'Medi-Facial',
    basePath: 'medi-facial',
    hero: '3985324',
    mobile: '3985292',
    procedure: '5215024'
  },
  {
    name: 'Oxy-Hydra Facial',
    basePath: 'oxy-hydra-facial',
    hero: '3985330',
    mobile: '4041391',
    procedure: '5215016'
  },
  {
    name: 'Vampire Facial',
    basePath: 'vampire-facial',
    hero: '5913837',
    mobile: '5913833',
    procedure: '8467426'
  },
  {
    name: 'Laser Skin Rejuvenation',
    basePath: 'laser-skin-rejuvenation',
    hero: '7582562',
    mobile: '7755387',
    procedure: '7088523'
  },
  {
    name: 'Skin Polishing & Rejuvenation',
    basePath: 'skin-polishing-and-rejuvenation',
    hero: '3985299',
    mobile: '7088524',
    procedure: '7088842'
  },
  {
    name: 'Carbon Peel & Fruit Peel',
    basePath: 'carbon-peel-fruit-peel',
    hero: '5069609',
    mobile: '4046316',
    procedure: '5215019'
  },
  {
    name: 'Chemical Peel',
    basePath: 'chemical-peel-treatment',
    hero: '6663583',
    mobile: '4046305',
    procedure: '5215021'
  }
];

async function main() {
  console.log('--- STARTING FINAL VERIFIED ASSET GENERATION ---');
  
  for (const item of mappings) {
    console.log(`\nProcessing: ${item.name}`);
    
    const targets = [
      { type: 'hero', id: item.hero, name: `${item.basePath}-hero.webp`, w: 1200, h: 630 },
      { type: 'mobile', id: item.mobile, name: `${item.basePath}-hero-mobile.webp`, w: 600, h: 800 },
      { type: 'procedure', id: item.procedure, name: `${item.basePath}-procedure-clinic.webp`, w: 1200, h: 630 }
    ];

    for (const target of targets) {
      const downloadUrl = `https://images.pexels.com/photos/${target.id}/pexels-photo-${target.id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${target.w}&h=${target.h}`;

      const tempFile = path.join(__dirname, 'temp_download.jpg');
      const finalDest = path.join(__dirname, 'public', 'images', target.name);

      try {
        console.log(`  Downloading ${target.type} (${target.id}) from Pexels...`);
        await downloadImage(downloadUrl, tempFile);
        
        console.log(`  Converting to WebP and saving to: ${finalDest}`);
        await sharp(tempFile)
          .webp({ quality: 85 })
          .toFile(finalDest);
          
        if (fs.existsSync(tempFile)) {
          fs.unlinkSync(tempFile);
        }
        console.log(`  [SUCCESS] Created ${target.name} (${fs.statSync(finalDest).size} bytes)`);
      } catch (err) {
        console.error(`  [ERROR] Failed to process ${target.name}:`, err.message);
        if (fs.existsSync(tempFile)) {
          fs.unlinkSync(tempFile);
        }
      }
    }
  }

  console.log('\n--- FINAL ASSETS COMPLETED SUCCESSFULLY ---');
}

main().catch(console.error);
