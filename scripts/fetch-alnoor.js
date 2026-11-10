const https = require('https');
const fs = require('fs');

https.get('https://www.alnoorsugar.co', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scripts/alnoor.html', data);
    console.log('Saved alnoor.html, length:', data.length);
  });
});

