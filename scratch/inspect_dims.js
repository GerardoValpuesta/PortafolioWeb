const fs = require('fs');

function getJpegDimensions(path) {
  const buffer = fs.readFileSync(path);
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xFF) break;
    const marker = buffer[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    const length = buffer.readUInt16BE(offset + 2);
    offset += 2 + length;
  }
  return null;
}

const img1 = 'C:/Users/geer2/.gemini/antigravity/brain/66a24348-6a21-40d2-8892-c4520ac2e68a/.user_uploaded/media_1793985708799_eb8774dd.jpg';
const img2 = 'C:/Users/geer2/.gemini/antigravity/brain/66a24348-6a21-40d2-8892-c4520ac2e68a/.user_uploaded/media_1793985708801_0a035ebe.jpg';

console.log('Img1 (Inicio):', getJpegDimensions(img1));
console.log('Img2 (About):', getJpegDimensions(img2));
console.log('Old profile-real.jpg:', getJpegDimensions('public/profile-real.jpg'));

