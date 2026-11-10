const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

const WORK_DIR = path.join(__dirname, '..', 'Our work');

async function main() {
  const files = fs.readdirSync(WORK_DIR);
  console.log(`Total files found: ${files.length}`);

  const hashes = new Map();
  const images = [];
  const videos = [];

  for (const file of files) {
    const fullPath = path.join(WORK_DIR, file);
    const stat = fs.statSync(fullPath);
    if (!stat.isFile()) continue;

    const ext = path.extname(file).toLowerCase();
    const buffer = fs.readFileSync(fullPath);
    const md5 = crypto.createHash('md5').update(buffer).digest('hex');

    if (ext === '.mp4') {
      videos.push({
        filename: file,
        size: stat.size,
        hash: md5
      });
      continue;
    }

    if (hashes.has(md5)) {
      console.log(`[Duplicate] ${file} is duplicate of ${hashes.get(md5)}`);
      continue;
    }

    hashes.set(md5, file);

    try {
      const meta = await sharp(fullPath).metadata();
      images.push({
        filename: file,
        size: stat.size,
        width: meta.width,
        height: meta.height,
        format: meta.format,
        hasAlpha: meta.hasAlpha,
        hash: md5
      });
    } catch (err) {
      console.error(`Error reading ${file}:`, err.message);
    }
  }

  console.log(`\nUnique Images: ${images.length}`);
  console.log(`Videos: ${videos.length}`);
  fs.writeFileSync(path.join(__dirname, 'work_analysis.json'), JSON.stringify({ images, videos }, null, 2));
}

main().catch(console.error);

