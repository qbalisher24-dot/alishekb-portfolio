const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');

  try {
    const html = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send('Error loading portfolio page');
  }
};
