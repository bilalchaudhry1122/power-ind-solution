const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIR = path.join(__dirname, '..', 'Our work');
const DEST_DIR = path.join(__dirname, '..', 'public', 'images', 'our-work');
const THUMB_DIR = path.join(DEST_DIR, 'thumbs');

// Curated unique real photographs from "Our work" (exact MD5 duplicates AND visual near-similar shots removed)
const DEDUPLICATED_REAL_FILES = [
  '20180228_210826.jpg.jpeg',
  '20180228_210905.jpg.jpeg',
  '20180228_210915.jpg.jpeg',
  '20180228_211228.jpg.jpeg',
  '20180401_183034.jpg.jpeg',
  '20180401_190745.jpg.jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.09 PM (1).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.09 PM (4).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.09 PM (5).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.09 PM (6).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.09 PM.jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (1).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (10).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (12).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (14).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (16).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (18).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (2).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (20).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (21).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (22).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (23).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (24).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (25).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (26).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (29).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (3).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (30).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (31).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (33).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (38).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (40).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (41).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (42).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (43).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (6).jpeg',
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (7).jpeg'
];

// Clean existing generated files so no stale or duplicate images remain
if (fs.existsSync(DEST_DIR)) {
  for (const file of fs.readdirSync(DEST_DIR)) {
    const full = path.join(DEST_DIR, file);
    if (fs.statSync(full).isFile()) fs.unlinkSync(full);
  }
}
if (fs.existsSync(THUMB_DIR)) {
  for (const file of fs.readdirSync(THUMB_DIR)) {
    const full = path.join(THUMB_DIR, file);
    if (fs.statSync(full).isFile()) fs.unlinkSync(full);
  }
}

fs.mkdirSync(DEST_DIR, { recursive: true });
fs.mkdirSync(THUMB_DIR, { recursive: true });

async function processAll() {
  const analysis = JSON.parse(fs.readFileSync(path.join(__dirname, 'work_analysis.json'), 'utf8'));
  const fileMap = new Map(analysis.images.map(img => [img.filename, img]));
  const uniqueImages = DEDUPLICATED_REAL_FILES.map(f => fileMap.get(f)).filter(Boolean);

  console.log(`Processing ${uniqueImages.length} deduplicated real images from "Our work"...`);

  const processedList = [];

  for (let i = 0; i < uniqueImages.length; i++) {
    const item = uniqueImages[i];
    const srcPath = path.join(SOURCE_DIR, item.filename);
    const id = `work-${(i + 1).toString().padStart(2, '0')}`;
    const outputFilename = `${id}.webp`;
    const thumbFilename = `${id}-thumb.webp`;

    const outPath = path.join(DEST_DIR, outputFilename);
    const thumbPath = path.join(THUMB_DIR, thumbFilename);

    console.log(`[${i + 1}/${uniqueImages.length}] Processing ${item.filename}...`);

    try {
      let pipeline = sharp(srcPath).rotate();
      const meta = await pipeline.metadata();
      const isLowRes = meta.width < 700 || meta.height < 700;
      const isVeryLowRes = meta.width < 400 || meta.height < 400;

      if (isVeryLowRes) {
        const targetW = Math.round(meta.width * 2);
        pipeline = pipeline
          .resize(targetW, null, { kernel: sharp.kernel.lanczos3 })
          .sharpen({ sigma: 1.0, m1: 1.2, m2: 0.5 });
      } else if (isLowRes) {
        const targetW = Math.round(meta.width * 1.4);
        pipeline = pipeline
          .resize(targetW, null, { kernel: sharp.kernel.lanczos3 })
          .sharpen({ sigma: 0.8, m1: 1.1, m2: 0.4 });
      } else {
        if (meta.width > 1920 || meta.height > 1920) {
          pipeline = pipeline.resize(1920, 1920, { fit: 'inside', withoutEnlargement: true });
        }
        pipeline = pipeline.sharpen({ sigma: 0.6, m1: 1.0, m2: 0.4 });
      }

      await pipeline.clone().webp({ quality: 86, effort: 6 }).toFile(outPath);

      await sharp(srcPath)
        .rotate()
        .resize(600, 600, { fit: 'cover', position: 'center' })
        .sharpen({ sigma: 0.5 })
        .webp({ quality: 84, effort: 4 })
        .toFile(thumbPath);

      const finalStat = fs.statSync(outPath);
      const thumbStat = fs.statSync(thumbPath);

      processedList.push({
        id,
        originalFile: item.filename,
        webPath: `/images/our-work/${outputFilename}`,
        thumbPath: `/images/our-work/thumbs/${thumbFilename}`,
        origWidth: item.width,
        origHeight: item.height,
        finalSizeKB: Math.round(finalStat.size / 1024),
        thumbSizeKB: Math.round(thumbStat.size / 1024),
        isEnhanced: isLowRes
      });
    } catch (err) {
      console.error(`Failed to process ${item.filename}:`, err);
    }
  }

  const videoDir = path.join(__dirname, '..', 'public', 'videos', 'our-work');
  fs.mkdirSync(videoDir, { recursive: true });

  const processedVideos = [];
  for (let v = 0; v < analysis.videos.length; v++) {
    const vid = analysis.videos[v];
    const src = path.join(SOURCE_DIR, vid.filename);
    const destName = `work-video-${v + 1}.mp4`;
    const dest = path.join(videoDir, destName);
    fs.copyFileSync(src, dest);
    processedVideos.push({
      id: `vid-${v + 1}`,
      originalFile: vid.filename,
      webPath: `/videos/our-work/${destName}`,
      sizeMB: (vid.size / (1024 * 1024)).toFixed(1)
    });
  }

  fs.writeFileSync(path.join(__dirname, 'processed_work.json'), JSON.stringify({ images: processedList, videos: processedVideos }, null, 2));
  console.log(`\nDone! Processed ${processedList.length} unique real images and ${processedVideos.length} videos.`);
}

processAll().catch(console.error);
