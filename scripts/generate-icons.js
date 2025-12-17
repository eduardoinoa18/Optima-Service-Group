const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, '../public/Logo.png');
const publicDir = path.join(__dirname, '../public');
const appDir = path.join(__dirname, '../src/app');

async function generateIcons() {
  try {
    console.log('🎨 Generating icons from Logo.png...\n');

    // Read the logo
    const logoBuffer = fs.readFileSync(logoPath);

    // Generate favicon.ico (32x32)
    await sharp(logoBuffer)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toColourspace('srgb')
      .toFile(path.join(appDir, 'favicon.ico'));
    console.log('✅ Generated favicon.ico (32x32)');

    // Generate icon-16x16.png
    await sharp(logoBuffer)
      .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toColourspace('srgb')
      .png()
      .toFile(path.join(publicDir, 'icon-16.png'));
    console.log('✅ Generated icon-16.png (16x16)');

    // Generate icon-32x32.png
    await sharp(logoBuffer)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toColourspace('srgb')
      .png()
      .toFile(path.join(publicDir, 'icon-32.png'));
    console.log('✅ Generated icon-32.png (32x32)');

    // Generate icon-192x192.png (for Android)
    await sharp(logoBuffer)
      .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toColourspace('srgb')
      .png()
      .toFile(path.join(publicDir, 'icon-192.png'));
    console.log('✅ Generated icon-192.png (192x192)');

    // Generate icon-512x512.png (for Android)
    await sharp(logoBuffer)
      .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toColourspace('srgb')
      .png()
      .toFile(path.join(publicDir, 'icon-512.png'));
    console.log('✅ Generated icon-512.png (512x512)');

    // Generate apple-touch-icon.png (180x180)
    await sharp(logoBuffer)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toColourspace('srgb')
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✅ Generated apple-touch-icon.png (180x180)');

    // Generate OpenGraph image (1200x630) with logo centered
    await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 15, g: 33, b: 58, alpha: 1 } // optima-navy
      }
    })
    .composite([
      {
        input: await sharp(logoBuffer)
          .resize(400, 400, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .toColourspace('srgb')
          .toBuffer(),
        gravity: 'center'
      }
    ])
    .toColourspace('srgb')
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
    console.log('✅ Generated og-image.png (1200x630)');

    // Generate Twitter card image (same as OG)
    fs.copyFileSync(
      path.join(publicDir, 'og-image.png'),
      path.join(publicDir, 'twitter-image.png')
    );
    console.log('✅ Generated twitter-image.png (1200x630)');

    console.log('\n✨ All icons generated successfully!');
  } catch (error) {
    console.error('❌ Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
