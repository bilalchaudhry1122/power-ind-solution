const sharp = require('sharp');
const path = require('path');

const dir = path.join(__dirname, '../public/images/clients');

async function inspect(file) {
  const p = path.join(dir, file);
  const img = sharp(p);
  const meta = await img.metadata();
  console.log('---', file, '---');
  console.log('Width:', meta.width, 'Height:', meta.height);
}

inspect('chashma-sugar.png');
inspect('sindh-abadgar.png');

