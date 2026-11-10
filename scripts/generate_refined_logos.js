const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function main() {
  const sourcePath = path.join(__dirname, 'exact_original_logo.png');
  const imagesDir = path.join(__dirname, '..', 'public', 'images');

  // Load raw pixels with alpha
  const { data, info } = await sharp(sourcePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // 1. Refined Authentic Logo (Transparent Background)
  const lightBuf = Buffer.from(data);
  for (let i = 0; i < lightBuf.length; i += 4) {
    const r = lightBuf[i];
    const g = lightBuf[i + 1];
    const b = lightBuf[i + 2];
    
    // Smooth anti-aliased background transparency
    if (r > 240 && g > 240 && b > 240) {
      lightBuf[i + 3] = 0;
    } else if (r > 215 && g > 215 && b > 215) {
      const avg = (r + g + b) / 3;
      const alpha = Math.max(0, Math.min(255, 255 - (avg - 215) * 10.2));
      lightBuf[i + 3] = Math.round(alpha);
    }
  }

  const logoLightPath = path.join(imagesDir, 'pis-logo.png');
  await sharp(lightBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim()
    .resize(800, null, { kernel: sharp.kernel.lanczos3 })
    .toFile(logoLightPath);
  console.log('Generated refined authentic public/images/pis-logo.png');

  // 2. Refined Authentic Logo for Dark Backgrounds (White text)
  const darkBuf = Buffer.from(lightBuf);
  for (let i = 0; i < darkBuf.length; i += 4) {
    const a = darkBuf[i + 3];
    if (a > 15) {
      const r = darkBuf[i];
      const g = darkBuf[i + 1];
      const b = darkBuf[i + 2];
      
      // Keep green ribbon and green "POWER"
      const isGreen = g > 115 && g > r * 1.15 && g > b * 1.25;
      if (!isGreen) {
        // Turn dark slate text ("INDUSTRIAL SOLUTIONS SINCE 2010" and "i" pipe) to pure crisp white
        darkBuf[i] = 255;
        darkBuf[i + 1] = 255;
        darkBuf[i + 2] = 255;
      }
    }
  }

  const logoDarkPath = path.join(imagesDir, 'pis-logo-white.png');
  await sharp(darkBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim()
    .resize(800, null, { kernel: sharp.kernel.lanczos3 })
    .toFile(logoDarkPath);
  console.log('Generated refined authentic public/images/pis-logo-white.png');

  // 3. Standalone Authentic Emblem Symbol (P-i-S ribbon)
  await sharp(logoLightPath)
    .extract({ left: 0, top: 0, width: 330, height: 350 })
    .trim()
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(imagesDir, 'pis-symbol.png'));
  console.log('Generated refined authentic public/images/pis-symbol.png');

  // Favicon icon.png
  await sharp(path.join(imagesDir, 'pis-symbol.png'))
    .resize(64, 64)
    .toFile(path.join(__dirname, '..', 'public', 'icon.png'));
  console.log('Updated public/icon.png');
}

main().catch(console.error);
