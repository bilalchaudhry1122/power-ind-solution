const sharp = require('sharp');
const path = require('path');

async function main() {
  const sourcePath = path.join(__dirname, 'exact_original_logo.png');
  const imagesDir = path.join(__dirname, '..', 'public', 'images');

  const { data, info } = await sharp(sourcePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;

  // Buffers for light and dark themes
  const lightData = Buffer.alloc(width * height * 4);
  const darkData = Buffer.alloc(width * height * 4);

  // Exact Brand Colors from User Swatch:
  // Amber / Solar Gold: #fca311 -> (252, 163, 17)
  // Oxford Midnight Navy: #14213d -> (20, 33, 61)
  // Pure White: #ffffff -> (255, 255, 255)

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Check if background pixel
    // Pure white or near white
    const minVal = Math.min(r, g, b);
    const maxVal = Math.max(r, g, b);
    const isNeutral = (maxVal - minVal) < 18;

    let alpha = 255;
    if (minVal > 245) {
      alpha = 0;
    } else if (minVal > 215) {
      // Smooth alpha transition
      const factor = (minVal - 215) / (245 - 215);
      alpha = Math.round(255 * (1 - factor));
    }

    if (alpha <= 0) {
      // Transparent
      lightData[i] = 0;
      lightData[i + 1] = 0;
      lightData[i + 2] = 0;
      lightData[i + 3] = 0;

      darkData[i] = 0;
      darkData[i + 1] = 0;
      darkData[i + 2] = 0;
      darkData[i + 3] = 0;
      continue;
    }

    // Determine if green or slate
    // In original logo, green has g > 100 and g > r * 1.15
    const isGreen = g > 95 && g > r * 1.12 && g > b * 1.2;

    if (isGreen) {
      // Map to Brand Safety Amber #fca311 (252, 163, 17)
      // Estimate intensity
      const intensity = Math.min(1.0, Math.max(0.65, (g / 200)));
      
      const amberR = Math.round(252 * intensity);
      const amberG = Math.round(163 * intensity);
      const amberB = Math.round(17 * intensity);

      // Light theme
      lightData[i] = amberR;
      lightData[i + 1] = amberG;
      lightData[i + 2] = amberB;
      lightData[i + 3] = alpha;

      // Dark theme (Amber stays #fca311)
      darkData[i] = amberR;
      darkData[i + 1] = amberG;
      darkData[i + 2] = amberB;
      darkData[i + 3] = alpha;
    } else {
      // Slate text ("INDUSTRIAL", "SOLUTIONS", "SINCE 2010" and "i" pipe)
      // Light theme -> Deep Oxford Navy #14213d (20, 33, 61)
      // Preserve subtle shading
      const slateLum = (r + g + b) / (3 * 100);
      const lumFactor = Math.min(1.2, Math.max(0.7, slateLum));

      lightData[i] = Math.round(20 * lumFactor);
      lightData[i + 1] = Math.round(33 * lumFactor);
      lightData[i + 2] = Math.round(61 * lumFactor);
      lightData[i + 3] = alpha;

      // Dark theme -> Pure White #ffffff / #e5e5e5
      const whiteLum = Math.min(255, Math.max(220, Math.round(255 * (r + g + b) / (3 * 90))));
      darkData[i] = whiteLum;
      darkData[i + 1] = whiteLum;
      darkData[i + 2] = whiteLum;
      darkData[i + 3] = alpha;
    }
  }

  // Save Light Theme Logo in exact palette
  const lightOutput = path.join(imagesDir, 'pis-logo.png');
  await sharp(lightData, { raw: { width, height, channels: 4 } })
    .trim()
    .resize(900, null, { kernel: sharp.kernel.lanczos3 })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(lightOutput);
  console.log('Saved perfect palette pis-logo.png');

  // Save Dark Theme Logo in exact palette
  const darkOutput = path.join(imagesDir, 'pis-logo-white.png');
  await sharp(darkData, { raw: { width, height, channels: 4 } })
    .trim()
    .resize(900, null, { kernel: sharp.kernel.lanczos3 })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(darkOutput);
  console.log('Saved perfect palette pis-logo-white.png');

  // Standalone Emblem (PIS ribbon in Amber & Navy)
  await sharp(lightOutput)
    .extract({ left: 0, top: 0, width: 370, height: 390 })
    .trim()
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(imagesDir, 'pis-symbol.png'));
  console.log('Saved perfect palette pis-symbol.png');

  // Favicon
  await sharp(path.join(imagesDir, 'pis-symbol.png'))
    .resize(64, 64)
    .toFile(path.join(__dirname, '..', 'public', 'icon.png'));
  console.log('Saved perfect palette public/icon.png');
}

main().catch(console.error);

