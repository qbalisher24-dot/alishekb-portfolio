const https = require('https');

// Simple in-memory cache for live site streaming (cache for 30s)
const cache = {
  wwwz: { html: null, timestamp: 0 },
  gold: { html: null, timestamp: 0 }
};

const CACHE_TTL = 30 * 1000; // 30 seconds

function fetchWwwz() {
  return new Promise((resolve, reject) => {
    const now = Date.now();
    if (cache.wwwz.html && (now - cache.wwwz.timestamp < CACHE_TTL)) {
      return resolve(cache.wwwz.html);
    }

    const req = https.get('https://wwwz.uz', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      rejectUnauthorized: false
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        let processed = body;
        
        // Inject base tag
        if (!processed.includes('<base')) {
          processed = processed.replace('<head>', '<head><base href="https://wwwz.uz/">');
        }

        // Custom live stream styling & disabling frame restrictions
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
            window.top = window.self;
            window.parent = window.self;
          </script>
        `;
        processed = processed.replace('</head>', `${injectStyles}</head>`);

        cache.wwwz.html = processed;
        cache.wwwz.timestamp = Date.now();
        resolve(processed);
      });
    });

    req.on('error', (err) => {
      if (cache.wwwz.html) return resolve(cache.wwwz.html);
      reject(err);
    });
  });
}

function fetchGold() {
  return new Promise((resolve, reject) => {
    const now = Date.now();
    if (cache.gold.html && (now - cache.gold.timestamp < CACHE_TTL)) {
      return resolve(cache.gold.html);
    }

    const initialReq = https.get('https://gold.wwwz.uz', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      rejectUnauthorized: false
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const match = body.match(/var tok = \"([^\"]+)\"/);
        const tok = match ? match[1] : '';

        const secondReq = https.request({
          hostname: 'gold.wwwz.uz',
          port: 443,
          path: '/',
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Cookie': '__gold_sec=' + tok
          },
          rejectUnauthorized: false
        }, (res2) => {
          let body2 = '';
          res2.on('data', chunk => body2 += chunk);
          res2.on('end', () => {
            let processed = body2;
            if (!processed.includes('<base')) {
              processed = processed.replace('<head>', '<head><base href="https://gold.wwwz.uz/">');
            }

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
                window.top = window.self;
                window.parent = window.self;
              </script>
            `;
            processed = processed.replace('</head>', `${injectStyles}</head>`);

            cache.gold.html = processed;
            cache.gold.timestamp = Date.now();
            resolve(processed);
          });
        });

        secondReq.on('error', (err) => {
          if (cache.gold.html) return resolve(cache.gold.html);
          reject(err);
        });
        secondReq.end();
      });
    });

    initialReq.on('error', (err) => {
      if (cache.gold.html) return resolve(cache.gold.html);
      reject(err);
    });
  });
}

module.exports = {
  fetchWwwz,
  fetchGold
};
