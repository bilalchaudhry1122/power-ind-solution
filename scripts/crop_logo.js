const sharp = require('sharp');
const path = require('path');

async function cropLogo() {
  const p1 = path.join(__dirname, '..', 'public', 'images', 'catalogue', 'page_1.png');
  // Crop top-right corner where logo is
  // Page 1 is 1000 x 1414
  await sharp(p1)
    .extract({ left: 380, top: 20, width: 600, height: 320 })
    .toFile(path.join(__dirname, 'exact_original_logo.png'));
  console.log('Cropped exact original logo!');
}

cropLogo().catch(console.error);

