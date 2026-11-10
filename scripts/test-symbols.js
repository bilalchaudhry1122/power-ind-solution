const https = require('https');

const tests = [
  'premier-sugar-mills-and-distillery-company--600.png',
  'premier-sugar-mills--600.png',
  'sakrand-sugar-mills--600.png',
  'sindh-abadgars-sugar-mills--600.png',
  'sindh-abadgar-sugar-mills--600.png',
  'matiari-sugar-mills--600.png',
  'al-noor-sugar-mills-limited--600.png',
  'alnoor-sugar-mills--600.png'
];

tests.forEach(t => {
  const url = `https://s3-symbol-logo.tradingview.com/${t}`;
  https.get(url, res => {
    console.log(t, res.statusCode);
  }).on('error', e => console.log(t, e.message));
});

