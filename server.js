const express = require('express');
const path = require('path');
const compression = require('compression');
const { fetchWwwz, fetchGold } = require('./proxy-stream');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip / brotli compression
app.use(compression());

// Security Headers Middleware
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

// Live site stream proxy routes
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

// Serve static assets with caching
app.use(express.static(__dirname, {
  maxAge: '7d',
  etag: true,
  lastModified: true
}));

// Route for / and /api/page
app.get(['/', '/index.html', '/api/page'], (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, must-revalidate');
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback for any other route
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`⚡ Alisherbek Portfolio Server running on http://localhost:${PORT}`);
});
