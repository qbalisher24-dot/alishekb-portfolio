const { fetchGold } = require('../../src/proxy-stream');

module.exports = async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  try {
    const html = await fetchGold();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=15');
    res.setHeader(
      'Content-Security-Policy',
      "default-src * 'unsafe-inline' 'unsafe-eval' data: blob: https:; img-src * data: blob: https:; media-src * data: blob: https:; font-src * data: https:; style-src * 'unsafe-inline' https:; script-src * 'unsafe-inline' 'unsafe-eval' https:; frame-src *;"
    );
    res.status(200).send(html);
  } catch (err) {
    console.error('Error proxying gold:', err);
    res.status(500).send('Error streaming live page');
  }
};
