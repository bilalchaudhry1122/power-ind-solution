const sharp = require('sharp');
const path = require('path');

async function createAmberLogo() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  const lightPath = path.join(imagesDir, 'pis-logo.png');

  const { data, info } = await sharp(lightPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const amberBuf = Buffer.from(data);
  for (let i = 0; i < amberBuf.length; i += 4) {
    const a = amberBuf[i + 3];
    if (a > 15) {
      const r = amberBuf[i];
      const g = amberBuf[i + 1];
      const b = amberBuf[i + 2];

      // Green ribbon and "POWER" detection
      const isGreen = g > 115 && g > r * 1.15 && g > b * 1.25;
      if (isGreen) {
        // Shift to brand safety amber #fca311 (r: 252, g: 163, b: 17)
        // Maintain luminance
        const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 160;
        amberBuf[i] = Math.min(255, Math.round(252 * lum));
        amberBuf[i + 1] = Math.min(255, Math.round(163 * lum));
        amberBuf[i + 2] = Math.min(255, Math.round(17 * lum));
      } else {
        // Slate text and "i" pipe -> shift to Oxford midnight navy #14213d (r: 20, g: 33, b: 61)
        const lum = (r + g + b) / (3 * 80);
        amberBuf[i] = Math.min(255, Math.round(20 * lum));
        amberBuf[i + 1] = Math.min(255, Math.round(33 * lum));
        amberBuf[i + 2] = Math.min(255, Math.round(61 * lum));
      }
    }
  }

  await sharp(amberBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .toFile(path.join(imagesDir, 'pis-logo-amber.png'));
  console.log('Created public/images/pis-logo-amber.png');

  // Dark background amber logo (Amber green + pure white text)
  const amberWhiteBuf = Buffer.from(data);
  for (let i = 0; i < amberWhiteBuf.length; i += 4) {
    const a = amberWhiteBuf[i + 3];
    if (a > 15) {
      const r = amberWhiteBuf[i];
      const g = amberWhiteBuf[i + 1];
      const b = amberWhiteBuf[i + 2];

      const isGreen = g > 115 && g > r * 1.15 && g > b * 1.25;
      if (isGreen) {
        const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 160;
        amberWhiteBuf[i] = Math.min(255, Math.round(252 * lum));
        amberWhiteBuf[i + 1] = Math.min(255, Math.round(163 * lum));
        amberWhiteBuf[i + 2] = Math.min(255, Math.round(17 * lum));
      } else {
        amberWhiteBuf[i] = 255;
        amberWhiteBuf[i + 1] = 255;
        amberWhiteBuf[i + 2] = 255;
      }
    }
  }

  await sharp(amberWhiteBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .toFile(path.join(imagesDir, 'pis-logo-amber-white.png'));
  console.log('Created public/images/pis-logo-amber-white.png');
}

createAmberLogo().catch(console.error);

