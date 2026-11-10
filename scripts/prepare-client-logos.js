const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/clients');

async function processSoorty() {
  const src = path.join(dir, 'soorty.jpg');
  const dest = path.join(dir, 'soorty.png');
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Make white background transparent
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > 240 && g > 240 && b > 240) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
  .trim()
  .png()
  .toFile(dest);

  console.log('Processed soorty.png');
}

async function processPremier() {
  const src = path.join(dir, 'premier-sugar.jpg');
  const dest = path.join(dir, 'premier-sugar.png');
  const { data, info } = await sharp(src)
    .toColorspace('srgb')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > 235 && g > 235 && b > 235) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
  .trim()
  .png()
  .toFile(dest);

  console.log('Processed premier-sugar.png');
}

Promise.all([processSoorty(), processPremier()])
  .then(() => console.log('Image processing complete'))
  .catch(err => console.error(err));

