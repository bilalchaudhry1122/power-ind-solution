const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/clients');

// Delete invalid html file if present
if (fs.existsSync(path.join(dir, 'al-noor-logo.png'))) {
  fs.unlinkSync(path.join(dir, 'al-noor-logo.png'));
}

async function inspect(file) {
  const p = path.join(dir, file);
  try {
    const { data, info } = await sharp(p).raw().toBuffer({ resolveWithObject: true });
    // Sample top-left corner pixel (x=0, y=0)
    const ch = info.channels;
    const r = data[0];
    const g = data[1];
    const b = data[2];
    const a = ch === 4 ? data[3] : 255;
    console.log(`${file}: size ${info.width}x${info.height}, channels=${ch}, top-left=[${r},${g},${b}, alpha=${a}]`);
  } catch (e) {
    console.log(`${file}: error ${e.message}`);
  }
}

async function main() {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
  for (const f of files) {
    await inspect(f);
  }
}
main();

