const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/clients');

function dl(url, dest) {
  const file = fs.createWriteStream(dest);
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    if (res.statusCode === 200) {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Saved', dest, fs.statSync(dest).size, 'bytes');
      });
    } else {
      console.log('Failed', url, res.statusCode);
    }
  });
}

dl('https://www.alnoorsugar.co/assets/header/al-noor%20black%20logo.png', path.join(dir, 'al-noor-logo.png'));
dl('https://www.alnoorsugar.co/alnoor.png', path.join(dir, 'al-noor-emblem.png'));

