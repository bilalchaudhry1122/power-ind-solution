const sharp = require('sharp');
const path = require('path');

const dir = path.join(__dirname, '../public/images/clients');

async function analyze(file) {
  const p = path.join(dir, file);
  const { data, info } = await sharp(p).raw().toBuffer({ resolveWithObject: true });
  const colorCounts = {};
  for (let i = 0; i < data.length; i += info.channels) {
    const k = `${data[i]},${data[i+1]},${data[i+2]}`;
    colorCounts[k] = (colorCounts[k] || 0) + 1;
  }
  const sorted = Object.entries(colorCounts).sort((a,b) => b[1] - a[1]).slice(0, 5);
  console.log(file, 'Top colors:', sorted);
}

analyze('chashma-sugar.png');
analyze('sindh-abadgar.png');
analyze('dewan-sugar.png');
analyze('hascol-petroleum.png');
analyze('lucky-electric.png');
analyze('habib-sugar.png');
analyze('mehran-sugar.png');
analyze('sakrand-sugar.png');
analyze('sepcoiii.png');

