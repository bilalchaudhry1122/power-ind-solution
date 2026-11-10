const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function renderLogos() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  const lightSvg = path.join(imagesDir, 'pis-logo.svg');
  const darkSvg = path.join(imagesDir, 'pis-logo-white.svg');

  // 1. Render light SVG to crisp high-density PNG (720px wide)
  await sharp(lightSvg, { density: 300 })
    .resize(720)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(imagesDir, 'pis-logo.png'));
  console.log('Generated public/images/pis-logo.png in palette');

  // 2. Render dark SVG to crisp high-density PNG (720px wide)
  await sharp(darkSvg, { density: 300 })
    .resize(720)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(imagesDir, 'pis-logo-white.png'));
  console.log('Generated public/images/pis-logo-white.png in palette');

  // 3. Render Standalone Emblem Symbol (Square 256x256)
  const symbolSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="256" height="256">
    <defs>
      <linearGradient id="symAmber" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fca311" />
        <stop offset="100%" stop-color="#e0910f" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="24" fill="#14213d" />
    <g transform="translate(10, 10)">
      <path d="M 0 0 L 52 0 C 76 0 92 12 92 34 C 92 56 76 66 52 66 L 24 66 L 24 100 L 0 100 Z M 24 18 L 24 48 L 50 48 C 62 48 70 42 70 34 C 70 26 62 18 50 18 Z" fill="url(#symAmber)" />
      <circle cx="48" cy="42" r="7" fill="#ffffff" />
      <path d="M 48 54 C 64 54 76 62 76 76 C 76 90 62 100 42 100 L 22 100 L 22 84 L 42 84 C 50 84 54 80 54 76 C 54 72 50 68 42 68 L 34 68 C 24 68 18 62 18 54 L 36 54 C 36 56 38 58 42 58 L 48 58 C 48 56 48 54 48 54 Z" fill="#ffffff" />
      <path d="M 40 84 L 86 84 C 94 84 100 78 100 70 C 100 62 94 56 86 56 L 78 56 L 78 72 L 86 72 C 88 72 90 74 90 76 C 90 78 88 80 86 80 L 40 80 Z" fill="url(#symAmber)" />
    </g>
  </svg>`;

  await sharp(Buffer.from(symbolSvg), { density: 300 })
    .resize(256, 256)
    .png()
    .toFile(path.join(imagesDir, 'pis-symbol.png'));
  console.log('Generated public/images/pis-symbol.png in palette');

  // Also update public/icon.png (favicons)
  await sharp(Buffer.from(symbolSvg), { density: 300 })
    .resize(64, 64)
    .png()
    .toFile(path.join(__dirname, '..', 'public', 'icon.png'));
  console.log('Generated public/icon.png in palette');
}

renderLogos().catch(console.error);

