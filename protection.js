/* ══════════════════════════════════════════════════════════════
   SITE PROTECTION v3.0 — SERVER-ENFORCED
   ══════════════════════════════════════════════════════════════ */
(function(){
  'use strict';

  document.addEventListener('contextmenu',function(e){e.preventDefault();e.stopPropagation();return false},true);

  document.addEventListener('keydown',function(e){
    var k=e.key,c=e.ctrlKey,s=e.shiftKey,m=e.metaKey,a=e.altKey;
    if(k==='F12'||k==='F11'||k==='F10')return block(e);
    if(c&&s&&(k==='I'||k==='J'||k==='C'))return block(e);
    if(c&&(k==='u'||k==='s'||k==='p'||k==='a'||k==='h'))return block(e);
    if(m&&a&&(k==='I'||k==='i'||k==='U'||k==='u'||k==='C'||k==='c'))return block(e);
    if(c&&k==='g')return block(e);
    if(c&&k==='shift'&&k==='G')return block(e);
  },true);

  function block(e){e.preventDefault();e.stopPropagation();e.cancelBubble=true;return false}

  document.addEventListener('selectstart',function(e){
    if(e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA'){e.preventDefault();return false}
  },true);

  document.addEventListener('copy',function(e){e.preventDefault()},true);
  document.addEventListener('cut',function(e){e.preventDefault()},true);
  document.addEventListener('dragstart',function(e){e.preventDefault()},true);
  document.addEventListener('mousedown',function(e){
    if(e.detail>1)e.preventDefault();
  },true);

  /* DEVTOOLS DETECTION */
  var devToolsOpen=false;
  var threshold=100;

  function detectDevTools(){
    var start=performance.now();
    debugger;
    var end=performance.now();
    if(end-start>threshold){
      if(!devToolsOpen){devToolsOpen=true;onDevToolsOpen()}
    }else{devToolsOpen=false}
  }

  function onDevToolsOpen(){
    document.body.style.filter='blur(30px)';
    document.body.style.transition='filter .2s';
    document.body.style.pointerEvents='none';
    document.body.style.userSelect='none';
    document.body.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:100vh;color:#6366f1;font-family:system-ui;font-size:24px">⛔ Access Denied</div>';
    document.head.innerHTML='<title>Forbidden</title>';
    setTimeout(function(){location.replace('about:blank')},500);
  }

  setInterval(detectDevTools,600);

  /* CONSOLE WARNING */
  (function(){
    var t='%c⛔ WARNING: This site is protected. Unauthorized access is prohibited.';
    var s='color:red;font-size:18px;font-weight:bold;background:#000;padding:10px;border:2px solid red';
    console.log(t,s);
  })();

  /* IFRAME BLOCK */
  if(window.self!==window.top){window.top.location=window.self.location}

  /* CACHE HEADERS */
  var m1=document.createElement('meta');m1.httpEquiv='Pragma';m1.content='no-cache';document.head.appendChild(m1);
  var m2=document.createElement('meta');m2.httpEquiv='Cache-Control';m2.content='no-cache, no-store, must-revalidate';document.head.appendChild(m2);
  var m3=document.createElement('meta');m3.httpEquiv='Expires';m3.content='0';document.head.appendChild(m3);

  /* OVERRIDE toString */
  var _o={}.toString;
  var _s=String;
  String.prototype.toString=function(){return _o.call(this)};

  /* PREVENT toString ON FUNCTIONS */
  (function(){
    var fd=Function.prototype.toString;
    Function.prototype.toString=function(){
      if(this===Function.prototype.toString)return 'function toString() { [native code] }';
      return fd.call(this);
    };
  })();

  /* BLOCK EVAL */
  window.eval=function(){throw new Error('eval is not allowed')};
  window.Function=function(){throw new Error('Function constructor is not allowed')};

  /* PREVENT WINDOW OPEN */
  var _wo=window.open;
  window.open=function(){return null};

  /* MONITOR DOM MODIFICATIONS */
  var _mo=new MutationObserver(function(mutations){
    mutations.forEach(function(m){
      m.addedNodes.forEach(function(node){
        if(node.nodeType===1&&node.tagName==='SCRIPT'&&node.src&&node.src.indexOf('debug')>-1){
          node.remove();
        }
      });
    });
  });
  _mo.observe(document.documentElement,{childList:true,subtree:true});

})();
