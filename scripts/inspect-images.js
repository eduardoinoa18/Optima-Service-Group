const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const files = [
  'public/Logo.png',
  'public/logo.svg',
  'public/icon-16.png',
  'public/icon-32.png',
  'public/icon-192.png',
  'public/icon-512.png',
  'public/apple-touch-icon.png',
  'public/og-image.png',
  'public/twitter-image.png'
];

(async () => {
  for (const rel of files) {
    const p = path.join(__dirname, '..', rel);
    if (!fs.existsSync(p)) {
      console.log(`- Missing: ${rel}`);
      continue;
    }
    try {
      if (p.endsWith('.svg')) {
        const size = fs.statSync(p).size;
        console.log(`SVG: ${rel} | ${size} bytes`);
        continue;
      }
      const meta = await sharp(p).metadata();
      console.log(`${rel} -> ${meta.width}x${meta.height} | space=${meta.space} | size=${fs.statSync(p).size} bytes`);
    } catch (e) {
      console.log(`Error reading ${rel}:`, e.message);
    }
  }
})();
