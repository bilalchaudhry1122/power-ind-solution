const sharp = require('sharp');
const path = require('path');

async function testBounds() {
  const p1 = path.join(__dirname, '..', 'public', 'images', 'catalogue', 'page_1.png');
  // Crop from left: 380, top: 25, width: 600, height: 350
  await sharp(p1)
    .extract({ left: 380, top: 25, width: 600, height: 350 })
    .toFile(path.join(__dirname, 'test_logo_full.png'));
  console.log('Saved test_logo_full.png');
}

testBounds().catch(console.error);

