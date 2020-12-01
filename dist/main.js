(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>S});var o=t(645),r=t.n(o),a=t(667),i=t.n(a),c=t(841),s=t(4),d=t(20),l=t(770),u=t(11),p=t(605),m=t(165),f=t(632),g=r()((function(n){return n[1]})),h=i()(c),b=i()(s),v=i()(d),w=i()(l),y=i()(u),x=i()(p),k=i()(m),E=i()(f);g.push([n.id,"@font-face {\n  font-family: 'Roboto';\n  src: url("+h+");\n}\n\n@font-face {\n  font-family: 'Dancing Script', cursive;\n  src: url("+b+");\n}\n\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n  color: lightgoldenrodyellow;\n}\n\na {\n  color: lightgoldenrodyellow;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\nbutton {\n  margin-top: 2em;\n  height: 5em;\n  width: 25em;\n  background-color: transparent;\n  border: 3px solid lightgoldenrodyellow;\n  border-radius: 50%;\n  color: lightgoldenrodyellow;\n}\n\na:hover,\nbutton:hover {\n  background-color: #555;\n}\n\nheader {\n  background-color: black;\n  border-bottom: 3px solid lightgoldenrodyellow;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 10%;\n}\n\n.first-page {\n  background: url(https://cdn.pixabay.com/photo/2017/01/07/20/41/alcohol-1961542_960_720.jpg)  no-repeat center center fixed;\n  background-size: 100%;\n  width: 100%;\n  height: 95%;\n  padding: 0;\n}\n\n.main-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 2%;\n}\n\n.main-text {\n  padding-top: 25%;\n  font-size: 2em;\n}\n\nh1 {\n  font-size: 5em;\n  font-family: 'Dancing Script', cursive;\n  font-style: italic;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.menu-items {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 25px;\n  color: black;\n  margin-top: 6%;\n}\n\n.show-more {\n  top: 67%;\n  margin-top: 2em;\n  height: 4em;\n  width: 18em;\n  background-color: transparent;\n  border: 3px solid lightgoldenrodyellow;\n  border-radius: 50%;\n  color: lightgoldenrodyellow;\n  position: absolute;\n  left: 25%;\n}\n\n.item {\n  position: relative;\n  height: 300px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  border: 3px solid rgb(250, 250, 210);\n  border-radius: 5%;\n}\n\n.item1 {\n  background-image: url("+v+");\n}\n\n.item2 {\n  background-image: url("+w+");\n}\n\n.item3 {\n  background-image: url("+y+");\n}\n\n.item4 {\n  background-image: url("+x+");\n}\n\n.item5 {\n  background-image: url("+k+");\n}\n\n.item6 {\n  background-image: url("+E+");\n}\n\n.contact-items {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 2.6rem;\n  padding-top: 15%;\n  background: linear-gradient(to right top, #7e7e7b, #33322a, #302f22, #747470);\n}\n\n.contact-us,\n.contact-info {\n  padding: 0.6rem 0;\n  font-size: 1.5em;\n}\n\n.contact-us {\n  font-weight: bold;\n}\n\n@media screen and (max-width: 768px) {\n  .first-page {\n    background-size: 140%;\n  }\n\n  .main-text {\n    padding-top: 35%;\n  }\n\n  .menu-items {\n    grid-template-columns: 1fr;\n    margin-top: 10%;\n  }\n\n  .show-more {\n    left: 32%;\n  }\n}\n",""]);const S=g},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function i(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var c=n[r],s=e.base?c[0]+e.base:c[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=i(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:g(p,e),references:1}),o.push(l)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var i=r(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var a=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function p(n,e,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,f=0;function g(n,e){var t,o,r;if(e.singleton){var a=f++;t=m||(m=s(e)),o=u.bind(null,t,a,!1),r=u.bind(null,t,a,!0)}else t=s(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=i(t[o]);a[r].references--}for(var s=c(n,e),d=0;d<t.length;d++){var l=i(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=s}}}},4:(n,e,t)=>{n.exports=t.p+"d618761a95b9c756b18a.ttf"},841:(n,e,t)=>{n.exports=t.p+"2a1b89d7506c26fb931b.ttf"},165:(n,e,t)=>{n.exports=t.p+"105bf092e13bce308b05.jpg"},632:(n,e,t)=>{n.exports=t.p+"e50d29f48908e37e39c2.jpg"},770:(n,e,t)=>{n.exports=t.p+"dcaca7ff0d3bef912d9d.jpg"},20:(n,e,t)=>{n.exports=t.p+"2a869df677dd1e894316.jpg"},11:(n,e,t)=>{n.exports=t.p+"03cb21c8129b6e3781a7.jpg"},605:(n,e,t)=>{n.exports=t.p+"fe57a99095f77a2bec33.jpg"}},e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),o=t(426);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const r=()=>{const n=document.createElement("div");return n.innerHTML='<div class="main-wrap first-page">\n              <p class="main-text">Wellcome to the </p><br>\n              <h1>"our restaurant"</our></h1>\n              </div> ',n},a=document.getElementById("content");(()=>{a.appendChild((()=>{const n=document.createElement("header");return n.innerHTML='<a href="#" id="home">Home</a>\n                         <a href="#" id="menu">Menu</a>\n                         <a href="#" id="contact">Contact</a>',n})());const n=document.createElement("div");n.classList.add("wrapper"),n.id="wrapper",a.appendChild(n),n.appendChild(r())})();const i=document.getElementById("wrapper"),c=()=>{i.innerText="",i.appendChild((()=>{const n=document.createElement("div");return n.innerHTML='\n    <div class="menu-items main-wrap">\n    <div class="item item1"><button class="show-more">Show more</button></div>\n    <div class="item item2"><button class="show-more">Show menu</button></div>\n    <div class="item item3"><button class="show-more">Show menu</button></div>\n    <div class="item item4"><button class="show-more">Show menu</button></div>\n    <div class="item item5"><button class="show-more">Show menu</button></div>\n    <div class="item item6"><button class="show-more">Show menu</button></div>\n     </div> ',n})())},s=()=>{i.innerText="",i.appendChild((()=>{const n=document.createElement("div");return n.innerHTML='<div class="contact-items">\n      <span class="contact-us">Address:</span>\n      <span class="contact-info">Kharkiv, Nauki.av. 9</span>\n      <span class="contact-us">Email:</span>\n      <span class="contact-info">ourrestaurant@gmail.com</span>\n      <span class="contact-us">Phone:</span>\n      <span class="contact-info">+38(093)1234567</span>\n      <span class="contact-us">Delivery 24/7:</span>\n      <span class="contact-info">+38(095)8934567</span>\n     </div> ',n})())},d=()=>{i.innerText="",i.appendChild(r())};(()=>{const n=document.getElementById("home"),e=document.getElementById("menu"),t=document.getElementById("contact");n.addEventListener("click",d),e.addEventListener("click",c),t.addEventListener("click",s)})()})()})();