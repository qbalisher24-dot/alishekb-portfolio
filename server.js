const express=require('express'),fs=require('fs'),path=require('path');
const app=express(),PORT=process.env.PORT||3000;

/* ── LOAD HTML ── */
const htmlPath=path.join(__dirname,'index.html');
const rawHTML=fs.readFileSync(htmlPath,'utf8');

/* ── SECURITY HEADERS ── */
app.use((req,res,next)=>{
  res.setHeader('X-Content-Type-Options','nosniff');
  res.setHeader('X-Frame-Options','DENY');
  res.setHeader('X-XSS-Protection','1; mode=block');
  res.setHeader('Referrer-Policy','no-referrer');
  res.setHeader('Permissions-Policy','camera=(), microphone=(), geolocation=()');
  res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; media-src 'self';");
  res.removeHeader('X-Powered-By');
  next();
});

/* ── COMPRESS ── */
try{app.use(require('compression')())}catch(e){}

/* ── BLOCK DIRECT ACCESS TO SOURCE ── */
app.get('/index.html',(req,res)=>res.status(403).send('Forbidden'));
app.get('/source',(req,res)=>res.status(403).send('Forbidden'));
app.get('/view-source',(req,res)=>res.status(403).send('Forbidden'));

/* ── SERVE STATIC ASSETS ── */
app.use('/photo_2026-06-17_00-30-12.jpg',express.static(path.join(__dirname,'photo_2026-06-17_00-30-12.jpg'),{maxAge:'30d'}));
app.use('/bevafo.mp3',express.static(path.join(__dirname,'bevafo.mp3'),{maxAge:'30d'}));
app.use('/iwill.mp3',express.static(path.join(__dirname,'iwill.mp3'),{maxAge:'30d'}));
app.use('/uchrashmadik.mp3',express.static(path.join(__dirname,'uchrashmadik.mp3'),{maxAge:'30d'}));
app.use('/protection.js',express.static(path.join(__dirname,'protection.js'),{maxAge:'1h'}));

/* ── SERVE HTML ── */
app.get('/',(req,res)=>{
  res.setHeader('Cache-Control','no-store, no-cache, must-revalidate');
  res.setHeader('Pragma','no-cache');
  res.type('html').send(rawHTML);
});

/* ── RATE LIMITING ── */
const rateLimit={};
app.use((req,res,next)=>{
  const ip=req.ip;
  const now=Date.now();
  if(!rateLimit[ip])rateLimit[ip]=[];
  rateLimit[ip]=rateLimit[ip].filter(t=>now-t<60000);
  if(rateLimit[ip].length>100)return res.status(429).send('Too Many Requests');
  rateLimit[ip].push(now);
  next();
});

/* ── START ── */
app.listen(PORT,()=>console.log('Server running on port '+PORT));
