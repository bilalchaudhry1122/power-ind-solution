const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/clients');

function colorDist(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt((r1 - r2)**2 + (g1 - g2)**2 + (b1 - b2)**2);
}

// Flood fill from corners to make background transparent
async function makeTransparentFlood(filename, options = {}) {
  const p = path.join(dir, filename);
  const { data, info } = await sharp(p).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  // Target background color is sampled from (0,0)
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];
  const threshold = options.threshold || 30;

  const visited = new Uint8Array(w * h);
  const queue = [0, w - 1, (h - 1) * w, (h - 1) * w + (w - 1)]; // 4 corners

  for (const idx of queue) {
    visited[idx] = 1;
  }

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % w;
    const cy = Math.floor(curr / w);
    const offset = curr * 4;

    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];

    if (colorDist(r, g, b, bgR, bgG, bgB) <= threshold) {
      data[offset + 3] = 0; // Make transparent

      // Check 4 neighbors
      const neighbors = [];
      if (cx > 0) neighbors.push(curr - 1);
      if (cx < w - 1) neighbors.push(curr + 1);
      if (cy > 0) neighbors.push(curr - w);
      if (cy < h - 1) neighbors.push(curr + w);

      for (const n of neighbors) {
        if (!visited[n]) {
          visited[n] = 1;
          queue.push(n);
        }
      }
    }
  }

  // If invertForeground is set (e.g. for chashma where logo is white), recolor visible pixels to target
  if (options.recolorForeground) {
    const [tr, tg, tb] = options.recolorForeground;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] > 10) { // visible pixel
        data[i] = tr;
        data[i + 1] = tg;
        data[i + 2] = tb;
      }
    }
  }

  // Save back as trimmed PNG
  await sharp(data, {
    raw: { width: w, height: h, channels: 4 }
  })
  .trim()
  .png()
  .toFile(p);

  console.log(`Made transparent & trimmed: ${filename}`);
}

async function processTradingViewLogos() {
  const tvLogos = [
    'dewan-sugar.png',
    'habib-sugar.png',
    'hascol-petroleum.png',
    'lucky-electric.png',
    'mehran-sugar.png',
    'sakrand-sugar.png',
    'sepcoiii.png'
  ];

  for (const f of tvLogos) {
    await makeTransparentFlood(f, { threshold: 30 });
  }

  // Chashma Sugar: dark background -> transparent, white CS logo -> navy #0B1B3D
  await makeTransparentFlood('chashma-sugar.png', {
    threshold: 40,
    recolorForeground: [11, 27, 61]
  });

  // Sindh Abadgar: khaki background -> transparent
  await makeTransparentFlood('sindh-abadgar.png', { threshold: 45 });
}

// Remove background rect from all 9 SVGs
function cleanSVGs() {
  const svgs = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));
  for (const f of svgs) {
    const p = path.join(dir, f);
    let content = fs.readFileSync(p, 'utf8');
    // Remove the background rect tag
    const cleaned = content.replace(/<rect\s+width="240"\s+height="80"\s+rx="8"\s+fill="#F8FAFC"\s*\/>/gi, '');
    if (cleaned !== content) {
      fs.writeFileSync(p, cleaned);
      console.log(`Cleaned background box from SVG: ${f}`);
    }
  }
}

async function main() {
  await processTradingViewLogos();
  cleanSVGs();
  console.log('All logos processed successfully!');
}

main().catch(err => console.error(err));

