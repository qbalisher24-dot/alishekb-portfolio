/* ══════════════════════════════════════════════════════════════
   ALISHERBEK QURAMBAYEV — PORTFOLIO HELPER & SECURITY
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  // Anti-clickjacking (Prevent unauthorized iframe embedding)
  try {
    if (window.self !== window.top) {
      window.top.location = window.self.location;
    }
  } catch (e) {}

  // Developer & Security Console Banner
  const banner = `
%c  █████╗ ██╗     ██╗███████╗██╗  ██╗███████╗██████╗ ██████╗ ███████╗██╗  ██╗
 ██╔══██╗██║     ██║██╔════╝██║  ██║██╔════╝██╔══██╗██╔══██╗██╔════╝██║ ██╔╝
 ███████║██║     ██║███████╗███████║█████╗  ██████╔╝██████╔╝█████╗  █████╔╝ 
 ██╔══██║██║     ██║╚════██║██╔══██║██╔══╝  ██╔══██╗██╔══██╗██╔══╝  ██╔═██╗ 
 ██║  ██║███████╗██║███████║██║  ██║███████╗██████╔╝██████╔╝███████╗██║  ██╗
 ╚═╝  ╚═╝╚══════╝╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
`;
  const bannerStyle = 'color: #3ecf7c; font-weight: bold; font-family: monospace; font-size: 11px; text-shadow: 0 0 10px rgba(62,207,124,0.4);';
  const subStyle = 'color: #7fd9a0; font-family: sans-serif; font-size: 13px; font-weight: bold; padding: 4px 0;';
  const infoStyle = 'color: #93a89a; font-family: monospace; font-size: 11px;';

  console.log(banner, bannerStyle);
  console.log('%c🚀 Alisherbek Qurambayev — Fullstack Developer & Pentester', subStyle);
  console.log('%c📍 Telegram: https://t.me/alisherkb | Channel: https://t.me/kodra_dev', infoStyle);

})();
