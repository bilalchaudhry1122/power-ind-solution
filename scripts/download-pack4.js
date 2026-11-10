const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '../public/images/clients');

const list = [
  { url: 'https://matiarigroup.com/wp-content/uploads/2023/12/Whatsapp-mat-TransparentFGD.png', filename: 'matiari-sugar.png' },
  { url: 'https://dmunitedgroup.com/wp-content/uploads/2024/03/cropped-download.png', filename: 'ranipur-sugar.png' }
];

function dl(item) {
  return new Promise(resolve => {
    const dest = path.join(dir, item.filename);
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
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

