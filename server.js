const express = require('express');
const path = require('path');
const compression = require('compression');
const { fetchWwwz, fetchGold } = require('./src/proxy-stream');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// ── Compression (gzip / brotli) ──
app.use(compression());

// ── Security Headers ──
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader(
    'Content-Security-Policy',
    "default-src * 'self' data: blob: 'unsafe-inline' 'unsafe-eval' https:; img-src * data: blob: https:; media-src * data: blob: https:; font-src * data: https:; style-src * 'unsafe-inline' https:; script-src * 'unsafe-inline' 'unsafe-eval' https:; frame-src 'self' * https: data:; connect-src * https:;"
  );
  res.removeHeader('X-Powered-By');
  next();
});

// ── Live Proxy Routes ──
app.get('/api/proxy/wwwz', async (req, res) => {
  try {
    const html = await fetchWwwz();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=15');
    res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval' data: blob: https:; img-src * data: blob: https:; media-src * data: blob: https:; font-src * data: https:; style-src * 'unsafe-inline' https:; script-src * 'unsafe-inline' 'unsafe-eval' https:; frame-src *;");
    res.send(html);
  } catch (err) {
    console.error('Error proxying wwwz:', err);
    res.status(500).send('Error streaming live page');
  }
});

app.get('/api/proxy/gold', async (req, res) => {
  try {
    const html = await fetchGold();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=15');
    res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval' data: blob: https:; img-src * data: blob: https:; media-src * data: blob: https:; font-src * data: https:; style-src * 'unsafe-inline' https:; script-src * 'unsafe-inline' 'unsafe-eval' https:; frame-src *;");
    res.send(html);
  } catch (err) {
    console.error('Error proxying gold:', err);
    res.status(500).send('Error streaming live page');
  }
});

// ── Static Assets (public/ folder) with caching ──
app.use(express.static(PUBLIC_DIR, {
  maxAge: '7d',
  etag: true,
  lastModified: true
}));

// ── Root & main routes → index.html ──
app.get(['/', '/index.html', '/api/page'], (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, must-revalidate');
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

// ── Fallback SPA ──
app.use((req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

// ── Start ──
app.listen(PORT, () => {
  console.log(`⚡ Alisherbek Portfolio → http://localhost:${PORT}`);
});
