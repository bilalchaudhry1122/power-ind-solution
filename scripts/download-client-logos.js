const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '../public/images/clients');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const downloads = [
  { url: 'https://s3-symbol-logo.tradingview.com/lucky-cement--600.png', filename: 'lucky-electric.png' },
  { url: 'https://s3-symbol-logo.tradingview.com/hascol-petroleum--600.png', filename: 'hascol-petroleum.png' },
  { url: 'https://s3-symbol-logo.tradingview.com/habib-sugar-mills--600.png', filename: 'habib-sugar.png' },
  { url: 'https://s3-symbol-logo.tradingview.com/dewan-sugar-mills--600.png', filename: 'dewan-sugar.png' },
  { url: 'https://s3-symbol-logo.tradingview.com/mehran-sugar-mills--600.png', filename: 'mehran-sugar.png' },
  { url: 'https://s3-symbol-logo.tradingview.com/chashma-sugar-mills--600.png', filename: 'chashma-sugar.png' }
];

function downloadFile(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(dir, item.filename);
    const file = fs.createWriteStream(dest);
    https.get(item.url, res => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${item.filename}: status ${res.statusCode}`);
        resolve(false);
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${item.filename} (${fs.statSync(dest).size} bytes)`);
        resolve(true);
      });
    }).on('error', err => {
      console.error(`Error ${item.filename}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  for (const item of downloads) {
    await downloadFile(item);
  }
}

run();

