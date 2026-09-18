const fs = require('fs');
const path = require('path');

// Vercel da public/ → root bo'ladi, shuning uchun index.html ni public/ dan o'qiymiz
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');

  // Vercel va local server ikkalasida ham ishlaydi
  const htmlPath = path.join(process.cwd(), 'public', 'index.html');

  try {
    const html = fs.readFileSync(htmlPath, 'utf8');
    res.status(200).send(html);
  } catch (err) {
    console.error('Error reading index.html:', err);
    res.status(500).send('Error loading portfolio page');
  }
};
