const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const dir = path.join(__dirname, '../public/images/clients');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const list = [
  { url: 'https://images.seeklogo.com/logo-png/36/1/sepcoiii-logo-png_seeklogo-363853.png', filename: 'sepcoiii.png' },
  { url: 'https://iconape.com/wp-content/files/cj/359119/png/359119.png', filename: 'sepcoiii-alt.png' },
  { url: 'https://itbrands.pk/wp-content/uploads/2019/02/soorty-logo.jpg', filename: 'soorty.jpg' }
];

function download(item) {
  return new Promise(resolve => {
    const dest = path.join(dir, item.filename);
    const mod = item.url.startsWith('https') ? https : http;
    const req = mod.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log(`Redirecting ${item.filename} to ${res.headers.location}`);
        return download({ url: res.headers.location, filename: item.filename }).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`Failed ${item.filename}: ${res.statusCode}`);
        return resolve(false);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved ${item.filename} (${fs.statSync(dest).size} bytes)`);
        resolve(true);
      });
    });
    req.on('error', err => {
      console.log(`Error ${item.filename}:`, err.message);
      resolve(false);
    });
  });
}

async function main() {
  for (const it of list) {
    await download(it);
  }
}
main();

