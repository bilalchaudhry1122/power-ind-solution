const fs = require('fs');
const path = require('path');

function getFiles(dir, exts) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, exts));
    } else {
      if (exts.some(ext => fullPath.endsWith(ext))) results.push(fullPath);
    }
  });
  return results;
}

const files = [
  ...getFiles('app', ['.tsx', '.ts', '.jsx', '.js']),
  ...getFiles('components', ['.tsx', '.ts', '.jsx', '.js']),
  ...getFiles('data', ['.tsx', '.ts', '.jsx', '.js'])
];

const imgRegex = /['"](\/(?:images|videos)\/[^'"]+)['"]/g;
const foundPaths = new Set();
const pathOrigins = {};

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const p = match[1];
    foundPaths.add(p);
    if (!pathOrigins[p]) pathOrigins[p] = [];
    pathOrigins[p].push(file);
  }
});

console.log('Total media paths found in code:', foundPaths.size);

const missing = [];
const existing = [];

foundPaths.forEach(p => {
  // Strip query params or hash if any
  const cleanPath = p.split('?')[0].split('#')[0];
  const publicPath = path.join('public', cleanPath.replace(/^\//, ''));
  if (!fs.existsSync(publicPath)) {
    missing.push({ path: p, files: pathOrigins[p] });
  } else {
    existing.push(p);
  }
});

console.log('\n--- MISSING IMAGES (' + missing.length + ') ---');
missing.forEach(m => {
  console.log('MISSING:', m.path);
  console.log('  Referenced in:', m.files.join(', '));
});

console.log('\n--- EXISTING IMAGES (' + existing.length + ') ---');
existing.slice(0, 15).forEach(e => console.log('EXISTS:', e));
if (existing.length > 15) console.log('...and ' + (existing.length - 15) + ' more.');

