if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const c=e=>n(e,o),t={module:{uri:o},exports:d,require:c};i[o]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(s(...e),d)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-144ba5bf.js",revision:null},{url:"assets/index-fcbc3b0d.css",revision:null},{url:"index.html",revision:"a616eab99ffdc6244497f2b7dc695a7e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"7f9d542687c8cb215f022fa831d7e11f"},{url:"apple-touch-icon.png",revision:"d3061001a82d9cdbeeeceda9d4d6bb96"},{url:"android-chrome-192x192.png",revision:"fa2e521a171561e6c14baa982c7f9511"},{url:"android-chrome-512x512.png",revision:"2099a8ce628557e3bebdf04a5995d720"},{url:"maskable_icon.png",revision:"8fe636d595fbc4393c686438770db692"},{url:"manifest.webmanifest",revision:"09b145fdb5f3ca4d3e15055252d3281e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));