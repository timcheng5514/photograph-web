const __vite__mapDeps=(e,t=__vite__mapDeps,i=t.f||(t.f=["_astro/SwupA11yPlugin.D84kWg1p.js","_astro/Swup.T76dPaas.js","_astro/index.modern.CkIAsQri.js","_astro/SwupPreloadPlugin.CnFDLkk0.js","_astro/SwupScrollPlugin.CPHDirUY.js","_astro/SwupHeadPlugin.BKT_SVYP.js","_astro/SwupScriptsPlugin.o5PkFIdr.js"]))=>e.map((e=>i[e]));import{_ as i}from"./preload-helper.DjzxFC7u.js";function o(e){return JSON.parse(e,w)}function w(e,t){if(Array.isArray(t)&&2===t.length&&"string"==typeof t[1]){const e=t[0];if(t=t[1],":regex:"===e){const e=t.match(/\/(.*?)\/([a-z]*)?$/i)||[];return new RegExp(e[1],e[2]||"")}if(":function:"===e)return new Function(`return (${t}).apply(this, arguments);`)}return t}function s(e,{timeoutFallback:t=1e3}={}){"requestIdleCallback"in window?window.requestIdleCallback((()=>e())):setTimeout((()=>e()),t)}function p(e){"complete"===document.readyState?setTimeout((()=>e()),0):window.addEventListener("load",(()=>e()))}function l(e,{delayAfterLoad:t=0}={}){p((()=>{t>0?setTimeout((()=>s(e)),t):s(e)}))}async function f(){const[e,t,n,s,a,r]=await Promise.all([i((()=>import("./Swup.T76dPaas.js").then((e=>e.S))),[]).then((e=>e.default)),i((()=>import("./SwupA11yPlugin.D84kWg1p.js")),__vite__mapDeps([0,1,2])).then((e=>e.default)),i((()=>import("./SwupPreloadPlugin.CnFDLkk0.js")),__vite__mapDeps([3,2,1])).then((e=>e.default)),i((()=>import("./SwupScrollPlugin.CPHDirUY.js")),__vite__mapDeps([4,2,1])).then((e=>e.default)),i((()=>import("./SwupHeadPlugin.BKT_SVYP.js")),__vite__mapDeps([5,2])).then((e=>e.default)),i((()=>import("./SwupScriptsPlugin.o5PkFIdr.js")),__vite__mapDeps([6,2])).then((e=>e.default))]),u=new e({animationSelector:'[class*="transition-swup-"]',containers:["main","#toc"],cache:!0,plugins:[new t(o("{}")),new n(o('{"preloadHoveredLinks":true,"preloadVisibleLinks":false}')),new s(o("{}")),new a(o('{"awaitAssets":true}')),new r(o("{}"))]});window.swup=u}l(f);