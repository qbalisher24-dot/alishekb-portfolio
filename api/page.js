const fs=require('fs'),path=require('path'),crypto=require('crypto');

const SECRET='v3ry_s3cr3t_k3y_2026';

function encrypt(html){
  const key=crypto.createHash('sha256').update(SECRET).digest();
  const iv=crypto.randomBytes(16);
  const cipher=crypto.createCipheriv('aes-256-cbc',key,iv);
  let e=cipher.update(html,'utf8','hex');e+=cipher.final('hex');
  return {iv:iv.toString('hex'),data:e};
}

let cached=null;
function getPayload(){
  if(cached)return cached;
  try{
    const html=fs.readFileSync(path.join(process.cwd(),'_raw.html'),'utf8');
    cached=encrypt(html);
    return cached;
  }catch(e){return null}
}

module.exports=(req,res)=>{
  res.setHeader('X-Content-Type-Options','nosniff');
  res.setHeader('X-Frame-Options','DENY');
  res.setHeader('X-XSS-Protection','1; mode=block');
  res.setHeader('Referrer-Policy','no-referrer');
  res.setHeader('Cache-Control','no-store, no-cache, must-revalidate');
  res.setHeader('Content-Type','text/html; charset=utf-8');

  const payload=getPayload();
  if(!payload){res.status(500).send('Error');return}

  res.send(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Loading...</title>
<style>body{margin:0;background:#000;display:flex;align-items:center;justify-content:center;height:100vh;font-family:system-ui;color:#fff}
.ld{width:40px;height:40px;border:3px solid rgba(255,255,255,.1);border-top-color:#6366f1;border-radius:50%;animation:sp .8s linear infinite}
@keyframes sp{to{transform:rotate(360deg)}}</style></head>
<body><div class="ld"></div>
<script>
(function(){
var _dK=false;
function _dT(){var s=performance.now();debugger;var e=performance.now();if(e-s>120&&!_dK){_dK=true;document.body.innerHTML='';document.head.innerHTML='<title>Forbidden</title>';location.replace('about:blank')}}
setInterval(_dT,700);
document.addEventListener('contextmenu',function(e){e.preventDefault()},true);
document.addEventListener('keydown',function(e){
var k=e.key,c=e.ctrlKey,s=e.shiftKey,m=e.metaKey,a=e.altKey;
if(k==='F12'||k==='F11'||k==='F10')return e.preventDefault();
if(c&&s&&(k==='I'||k==='J'||k==='C'))return e.preventDefault();
if(c&&(k==='u'||k==='s'||k==='p'||k==='a'||k==='h'))return e.preventDefault();
if(m&&a&&(k==='I'||k==='i'||k==='U'||k==='u'))return e.preventDefault();
},true);
document.addEventListener('selectstart',function(e){if(e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA')e.preventDefault()},true);
document.addEventListener('copy',function(e){e.preventDefault()},true);
document.addEventListener('cut',function(e){e.preventDefault()},true);
document.addEventListener('dragstart',function(e){e.preventDefault()},true);

var _iv='${payload.iv}';
var _data='${payload.data}';
try{
var _keyStr='v3ry_s3cr3t_k3y_2026';
var _keyBytes=new TextEncoder().encode(_keyStr);
crypto.subtle.digest('SHA-256',_keyBytes).then(function(_hash){
return crypto.subtle.importKey('raw',_hash,{name:'AES-CBC'},false,['decrypt']);
}).then(function(_ck){
var _ivBytes=Uint8Array.from(_iv.match(/.{2}/g).map(function(b){return parseInt(b,16)}));
var _dataBytes=Uint8Array.from(_data.match(/.{2}/g).map(function(b){return parseInt(b,16)}));
return crypto.subtle.decrypt({name:'AES-CBC',iv:_ivBytes},_ck,_dataBytes);
}).then(function(_buf){
var _html=new TextDecoder().decode(_buf);
document.open();document.write(_html);document.close();
}).catch(function(){document.body.innerHTML='<h2 style="color:#6366f1">Access Denied</h2>'});
}catch(e){document.body.innerHTML='<h2 style="color:#6366f1">Access Denied</h2>'}
})();
</script></body></html>`);
};
