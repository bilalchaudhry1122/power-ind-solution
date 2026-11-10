const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const dir = path.join(__dirname, '../public/images/clients');

const list = [
  { url: 'https://s3-symbol-logo.tradingview.com/sakrand-sugar-mills--600.png', filename: 'sakrand-sugar.png' },
  { url: 'https://s3-symbol-logo.tradingview.com/sindh-abadgars-sugar-mill--600.png', filename: 'sindh-abadgar.png' },
  { url: 'http://premiersugarmills.com/images/psm.jpg', filename: 'premier-sugar.jpg' }
];

function dl(item) {
  return new Promise(resolve => {
    const dest = path.join(dir, item.filename);
    const mod = item.url.startsWith('https') ? https : http;
    mod.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Saved ${item.filename} (${fs.statSync(dest).size} bytes)`);
          resolve(true);
        });
      } else {
        console.log(`Failed ${item.filename}: ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', err => {
      console.log(`Error ${item.filename}:`, err.message);
      resolve(false);
    });
  });
}

async function main() {
  for (const it of list) await dl(it);
}
main();

