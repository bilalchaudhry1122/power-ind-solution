const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processLogo() {
  const p1 = path.join(__dirname, '..', 'public', 'images', 'catalogue', 'page_1.png');
  // In page 1 (1000x1414), let's crop the exact logo with generous margin
  const rawCrop = path.join(__dirname, 'logo_raw.png');
  
  await sharp(p1)
    .extract({ left: 405, top: 40, width: 540, height: 200 })
    .toFile(rawCrop);

  console.log('Extracted raw logo crop');

  // Convert pure white background to transparent
  // In page_1.png, background is pure white #ffffff
  const { data, info } = await sharp(rawCrop).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  
  // Create transparent version
  const transparentBuffer = Buffer.from(data);
  for (let i = 0; i < transparentBuffer.length; i += 4) {
    const r = transparentBuffer[i];
    const g = transparentBuffer[i + 1];
    const b = transparentBuffer[i + 2];
    // If pixel is near white
    if (r > 240 && g > 240 && b > 240) {
      transparentBuffer[i + 3] = 0; // alpha = 0
    } else if (r > 220 && g > 220 && b > 220) {
      const alpha = Math.max(0, Math.min(255, 255 - ((r + g + b) / 3 - 220) * 12.75));
      transparentBuffer[i + 3] = Math.round(alpha);
    }
  }

  const logoTransPath = path.join(__dirname, '..', 'public', 'images', 'pis-logo.png');
  await sharp(transparentBuffer, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim()
    .toFile(logoTransPath);

  console.log('Saved transparent pis-logo.png');

  // Create White/Dark background version:
  // Green remains #73be44, dark slate becomes crisp white #ffffff, SINCE 2010 becomes #cbd5e1
  const whiteBuffer = Buffer.from(transparentBuffer);
  for (let i = 0; i < whiteBuffer.length; i += 4) {
    const a = whiteBuffer[i + 3];
    if (a > 10) {
      const r = whiteBuffer[i];
      const g = whiteBuffer[i + 1];
      const b = whiteBuffer[i + 2];
      // Check if it's the green part: green has high g, lower r and b (e.g. g > 140 && g > r * 1.2)
      const isGreen = g > 130 && g > r * 1.15 && g > b * 1.3;
      if (!isGreen) {
        // It's the slate/grey text - turn to white/bright light
        whiteBuffer[i] = 255;
        whiteBuffer[i + 1] = 255;
        whiteBuffer[i + 2] = 255;
      }
    }
  }

  const logoWhitePath = path.join(__dirname, '..', 'public', 'images', 'pis-logo-white.png');
  await sharp(whiteBuffer, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim()
    .toFile(logoWhitePath);

  console.log('Saved transparent pis-logo-white.png');
}

processLogo().catch(console.error);

