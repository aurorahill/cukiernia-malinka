(()=>{"use strict";var e,t={509:(e,t,r)=>{const n=r.p+"images/logo-white-small73a257..png",o=r.p+"images/main-menu51e386..png",a=document.querySelector(".nav__list");document.querySelector(".main").addEventListener("click",(()=>{a.classList.contains("show")&&a.classList.remove("show")})),document.querySelector(".nav__menu-btn").addEventListener("click",(()=>{a.classList.toggle("show")})),document.querySelector(".nav__logo-image").src=n,document.querySelector(".nav__menu-btn-image").src=o;const c=r.p+"images/logo-white1e52aa..png";document.querySelector(".contact__logo-image").src=c;const i=r.p+"images/pie-bcg-small96357f..png";(()=>{const e=document.querySelector(".aboutus-header");e.innerHTML='\n        <div class="page-header__wrapper">\n          <h1 class="page-header__title">O naszej cukierni</h1>\n          <a\n            class="page-header__link"\n            href="../index.html"\n            >Powrót na stronę główną</a\n          >\n        </div>\n        ',e.style.backgroundImage=`url(${i})`})();const s=document.querySelectorAll(".card");let l=0;function u(e){s.forEach(((t,r)=>{t.classList.toggle("active-offer-photo",r===e)}))}s.forEach(((e,t)=>{e.addEventListener("click",(()=>{l=t,u(l)}))}));let p=0,d=!1;document.addEventListener("touchstart",(e=>{d=!0,p=e.touches[0].clientX})),document.addEventListener("touchmove",(e=>{if(!d)return;const t=e.touches[0].clientX,r=p-t;r>50&&l<s.length-1?(l+=1,u(l),d=!1):r<-50&&l>0&&(l-=1,u(l),d=!1)})),document.addEventListener("touchend",(()=>{d=!1}))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var i=!0,s=0;s<r.length;s++)(!1&a||c>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(i=!1,a<c&&(c=a));if(i){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),(()=>{var e={114:0,814:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,c=r[0],i=r[1],s=r[2],l=0;if(c.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var u=s(n)}for(t&&t(r);l<c.length;l++)a=c[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunkcukiernia_malinka=self.webpackChunkcukiernia_malinka||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[814],(()=>n(509)));o=n.O(o)})();