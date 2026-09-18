const https = require('https');

// In-memory cache for live site streaming
const cache = {
  wwwz: { html: null, timestamp: 0 },
  gold: { html: null, timestamp: 0 },
  goldCss: { css: null, timestamp: 0 }
};

const CACHE_TTL = 45 * 1000;

function fetchUrl(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        ...options.headers
      },
      rejectUnauthorized: false
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });

    req.on('error', reject);
    req.setTimeout(8000, () => {
      req.destroy();
      reject(new Error('Timeout fetching ' + url));
    });
  });
}

function fetchWwwz() {
  return new Promise(async (resolve, reject) => {
    const now = Date.now();
    if (cache.wwwz.html && (now - cache.wwwz.timestamp < CACHE_TTL)) {
      return resolve(cache.wwwz.html);
    }

    try {
      let body = await fetchUrl('https://wwwz.uz');
      let processed = body;

      // Ensure base tag
      if (!processed.includes('<base')) {
        processed = processed.replace('<head>', '<head><base href="https://wwwz.uz/">');
      }

      // Stream iframe styling & optimizations
      const injectStyles = `
        <style>
          html, body {
            overflow: hidden !important;
            user-select: none !important;
            background-color: #08080a !important;
          }
          body::-webkit-scrollbar { display: none !important; }
          #sitePreloader { display: none !important; }
        </style>
        <script>
          try {
            window.top = window.self;
            window.parent = window.self;
          } catch(e) {}
        </script>
      `;
      processed = processed.replace('</head>', `${injectStyles}</head>`);

      cache.wwwz.html = processed;
      cache.wwwz.timestamp = Date.now();
      resolve(processed);
    } catch (err) {
      if (cache.wwwz.html) return resolve(cache.wwwz.html);
      reject(err);
    }
  });
}

async function fetchGoldCss() {
  const now = Date.now();
  if (cache.goldCss.css && (now - cache.goldCss.timestamp < 10 * 60 * 1000)) {
    return cache.goldCss.css;
  }
  try {
    const css = await fetchUrl('https://gold.wwwz.uz/assets/css/style.css');
    if (css && css.length > 500) {
      cache.goldCss.css = css;
      cache.goldCss.timestamp = Date.now();
      return css;
    }
  } catch (e) {
    console.error('Error fetching gold style.css:', e);
  }
  return cache.goldCss.css || '';
}

function fetchGold() {
  return new Promise(async (resolve, reject) => {
    const now = Date.now();
    if (cache.gold.html && (now - cache.gold.timestamp < CACHE_TTL)) {
      return resolve(cache.gold.html);
    }

    try {
      // Step 1: Request initial challenge
      const initialHtml = await fetchUrl('https://gold.wwwz.uz');
      const match = initialHtml.match(/var tok = \"([^\"]+)\"/);
      const tok = match ? match[1] : '';

      // Step 2: Request full page with challenge cookie
      const fullHtml = await new Promise((res, rej) => {
        const req = https.request({
          hostname: 'gold.wwwz.uz',
          port: 443,
          path: '/',
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Cookie': '__gold_sec=' + tok
          },
          rejectUnauthorized: false
        }, (resp) => {
          let b = '';
          resp.on('data', chunk => b += chunk);
          resp.on('end', () => res(b));
        });
        req.on('error', rej);
        req.setTimeout(8000, () => {
          req.destroy();
          rej(new Error('Timeout fetching gold.wwwz.uz body'));
        });
        req.end();
      });

      let processed = fullHtml;

      // Step 3: Fetch and inline the full CSS stylesheet directly
      const goldCss = await fetchGoldCss();

      if (goldCss) {
        processed = processed.replace(
          /<link[^>]*href=["'][^"']*assets\/css\/style\.css[^"']*["'][^>]*>/i,
          `<style id="gold-inlined-style">\n${goldCss}\n</style>`
        );
      }

      // Ensure base tag
      if (!processed.includes('<base')) {
        processed = processed.replace('<head>', '<head><base href="https://gold.wwwz.uz/">');
      }

      // Inject styling for preview iframe
      const injectStyles = `
        <style>
          html, body {
            overflow: hidden !important;
            user-select: none !important;
            background-color: #0b0d13 !important;
          }
          body::-webkit-scrollbar { display: none !important; }
        </style>
        <script>
          try {
            window.top = window.self;
            window.parent = window.self;
          } catch(e) {}
        </script>
      `;
      processed = processed.replace('</head>', `${injectStyles}</head>`);

      cache.gold.html = processed;
      cache.gold.timestamp = Date.now();
      resolve(processed);
    } catch (err) {
      console.error('fetchGold error:', err);
      if (cache.gold.html) return resolve(cache.gold.html);
      reject(err);
    }
  });
}

module.exports = {
  fetchWwwz,
  fetchGold
};
