(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(81),o=t.n(a),r=t(645),c=t.n(r)()(o());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700&display=swap);"]),c.push([e.id,":root {\n  --burnt-sienna: hsla(12, 63%, 60%, 1);\n  --black: hsla(0, 0%, 0%, 1);\n  --fawn: hsla(30, 75%, 65%, 1);\n  --sandy-brown: hsla(30, 98%, 63%, 1);\n  --navajo-white: hsla(35, 94%, 86%, 1);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  user-select: none;\n  transition: 0.1s ease-in;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--navajo-white);\n  font-family: 'Prompt', sans-serif;\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nmain,\nheader,\n#menu-header {\n  padding: 0px 180px;\n}\n\nmain,\nheader {\n  margin: 45px 0;\n}\n\nheader ul li,\nmain button,\n.headline p {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n/* header */\nheader {\n  display: flex;\n  justify-content: space-between;\n}\n\nheader ul {\n  display: flex;\n  list-style: none;\n  padding-top: 10px;\n  gap: 30px;\n}\n\nheader ul li:hover {\n  color: var(--sandy-brown);\n}\n\nheader .active-page {\n  border: 1.8px solid var(--sandy-brown);\n}\n\nheader img {\n  width: 70px;\n  border: 5px dashed var(--burnt-sienna);\n  border-radius: 20px;\n  padding: 10px;\n}\n\nheader img:hover,\n.menu-item img:hover {\n  border-color: var(--sandy-brown);\n}\n\n/* main */\nmain {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.text > h1:first-child,\n.headline h1:nth-child(2),\n#menu-header,\n#contact-header {\n  color: var(--burnt-sienna);\n}\n\n.text > h1:first-child {\n  font-size: 70px;\n}\n\n.line {\n  width: 200px;\n  height: 4px;\n  background-color: #000;\n}\n\n.line,\n.headline p {\n  margin: 20px 0;\n}\n\n.headline h1 {\n  font-size: 60px;\n  line-height: 1;\n}\n\n.headline p {\n  max-width: 780px;\n  text-align: justify;\n  line-height: 1.5;\n}\n\nmain button {\n  font-weight: bold;\n  color: white;\n  background-color: var(--burnt-sienna);\n  font-family: inherit;\n  padding: 10px 35px;\n  border: 0;\n  border-radius: 30px;\n}\n\nmain button:hover {\n  background-color: var(--sandy-brown);\n}\n\n/* MENUPAGE */\n\n#menu-header,\n#contact-header {\n  line-height: 0.8;\n  font-size: 2em;\n}\n\nmain#menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  grid-gap: 15px 50px;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.menu-item {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 15px;\n  height: 100%;\n  padding: 10px;\n  border-bottom: 1px solid var(--black);\n  border-top: 1px solid var(--black);\n\n  align-items: center;\n}\n\n.menu-item:hover {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 0px 0px;\n}\n\n.menu-item img {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  border-radius: 20px;\n  border: 4px dashed var(--burnt-sienna);\n\n  object-fit: cover;\n}\n\n.menu-item .name {\n  font-size: 20px;\n}\n\n.menu-item .price {\n  margin-top: 3px;\n  font-size: 18px;\n}\n\n/* CONTACT */\n#contact {\n  margin-left: 50px;\n  display: grid;\n  gap: 1rem 50px;\n  grid-template-columns: 1fr 1fr;\n}\n\n#contact-header {\n  grid-column: span 2;\n}\n\nform {\n  grid-row: span 2;\n  border: 1.5px solid var(--black);\n  padding: 80px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nform input {\n  color: var(--sandy-brown);\n  font-family: inherit;\n  font-size: 20px;\n  border: none;\n  border-bottom: 1px solid var(--black);\n  background-color: var(--navajo-white);\n  margin: 10px;\n}\n\nform button {\n  margin-top: 50px;\n  font-size: 20px;\n}\n\n*:focus-visible {\n  outline: none;\n}\n\n.contact-details h2 {\n  font-size: 2rem;\n}\n\n.contact-details p {\n  font-size: 20px;\n}\n\n.social-media img {\n  padding: 10px;\n  border-radius: 15px;\n  max-height: 45px;\n}\n\n.social-media img:hover {\n  background-color: var(--sandy-brown);\n}\n\n.social-media {\n  display: flex;\n  align-self: flex-end;\n  padding-bottom: 15px;\n  gap: 15px;\n}\n\n/* footer */\nfooter {\n  font-size: 15px;\n  width: 100%;\n  text-align: center;\n  margin-top: auto;\n  padding-bottom: 1%;\n}\n\nfooter a {\n  font-weight: 500;\n  text-decoration: none;\n  color: var(--burnt-sienna);\n}\n\nfooter a:hover {\n  color: var(--sandy-brown);\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},c=[],i=0;i<e.length;i++){var d=e[i],s=a.base?d[0]+a.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=o(u,a);a.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=t(r[c]);n[i].references--}for(var d=a(e,o),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var a={};(()=>{t.d(a,{v:()=>G});const e=t.p+"cb764cbefe053f16861a.png";var n=t(379),o=t.n(n),r=t(795),c=t.n(r),i=t(569),d=t.n(i),s=t(565),l=t.n(s),p=t(216),m=t.n(p),u=t(589),h=t.n(u),f=t(426),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=m(),o()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const b=t.p+"1aeb98284bd930caf839.png",v=document.createElement("header"),x=new Image,y=document.createElement("ul"),w=document.createElement("li"),E=document.createElement("li"),C=document.createElement("li");function N(){const e=document.querySelector("div#content");S();const n=document.createElement("main"),t=document.createElement("div");t.className="text";const a=document.createElement("h1");a.className="buredu",a.textContent="ブレドゥ";const o=new Image;o.src=b,o.className="home-img";const r=document.createElement("div");r.className="line";const c=document.createElement("div");c.className="headline";const i=document.createElement("h1");i.textContent="A LOAF OF LOVE";const d=document.createElement("h1");d.textContent="FROM THE BAKERY REALM";const s=document.createElement("h1");s.textContent="FOR YOU";const l=document.createElement("p");l.innerHTML="Welcome to BREADS, a gastronomic haven where artisanal breads take center stage, offering a delectable symphony of flavors and textures for bread enthusiasts.";const p=document.createElement("button");p.textContent="Get Bread",p.className="get-bread",c.append(i,d,s,l,p),t.append(a,r,c),p.addEventListener("click",(()=>{G("Menu")})),e.append(n),n.append(t,o)}function S(){x.src=e,y.className="navbar",w.textContent="Home",w.className="home",E.textContent="Menu",E.className="menu",C.textContent="Contact Us",C.className="contact",content.append(v),v.append(x,y),y.append(w,E,C)}const k=t.p+"b61142d03a6333bc4691.jpg",j=t.p+"fe6dceb01cc217b55571.jpg",A=t.p+"0ce2c551566f07a9b63e.jpg",M=t.p+"f3bb5a603a8968c30534.jpg",T=t.p+"8cd06586f0409af0c3ac.jpg",I=t.p+"9423d088b348e1a3ed87.jpg",$=t.p+"68241a7fc21bd36ebf4c.jpg",F=t.p+"3ae039b018802a6a6ede.jpg",L=t.p+"055528c0184cdd79b369.jpg",q=t.p+"0da691292e04783cac7d.jpg",z=document.querySelector("div#content");function B(e,n,t,a){return{name:e,price:n,description:t,picture:a}}const O=[];O.push(B("Baguette Sandwich","$8.99","Freshly baked baguette filled with a combination of meats, cheeses, and veggies.",k)),O.push(B("Cinnamon Raisin Toast","$3.99","Slices of toasted bread, sprinkled with cinnamon and topped with plump raisins.",j)),O.push(B("Sourdough Boule","$6.99","A round artisan bread with a tangy flavor and a crusty exterior.",A)),O.push(B("Focaccia","$7.99","A fluffy and savory Italian bread topped with herbs, olive oil, and sea salt.",M)),O.push(B("Naan Bread","$5.99","Soft and pillowy Indian bread perfect for dipping in curries and sauces.",T)),O.push(B("Ciabatta","$6.99","An Italian bread with a chewy texture and large air pockets, ideal for sandwiches.",I)),O.push(B("Pita Bread","$4.99","Thin and pocketed bread commonly used in Mediterranean and Middle Eastern cuisine.",$)),O.push(B("Brioche","$5.99","A rich and buttery bread often used for making sweet treats like French toast.",F)),O.push(B("Whole Grain Loaf","$6.99","A hearty bread made with whole wheat flour and packed with nutritious grains.",L)),O.push(B("Challah","$7.99","A braided Jewish bread with a slightly sweet taste.",q));const P=t.p+"19d62257314c39310b70.png",R=t.p+"776d16d0e9daa177afd5.png",U=t.p+"c08f939e6ae8a4957431.png";document.querySelector("link[rel~='icon']").href=e,N(),function(){const e=document.createElement("footer"),n=document.querySelector("body");e.innerHTML='<a href="https://www.flaticon.com/free-icons/bread" target="_blank" title="bread icons">Bread & Social Media Icons created by Freepik - Flaticon</a>',n.appendChild(e)}();let H="home";const _=document.querySelector(".navbar"),Z=document.createElement("hr");function D(){const e=document.querySelector("div#content");for(;e.firstChild;)e.removeChild(e.firstChild)}function G(e){"home"!=H&&"Home"===e&&(D(),N(),H="home"),"menu"!=H&&"Menu"===e&&(D(),function(){S();const e=document.createElement("main");e.setAttribute("id","menu");const n=document.createElement("div");n.setAttribute("id","menu-header");const t=document.createElement("h1");t.textContent="BREADS MENU";const a=document.createElement("div");a.className="line",n.append(t,a),z.append(n);for(let n of O){const t=document.createElement("div");t.className="menu-item";const a=document.createElement("div");a.className="item-details";const o=new Image;o.src=n.picture;const r=document.createElement("h4");r.textContent=n.name,r.className="name";const c=document.createElement("p");c.textContent=n.price,c.className="price";const i=document.createElement("p");i.textContent=n.description,i.className="desc",a.append(r,c,i),t.append(o,a),e.append(t)}z.appendChild(e)}(),H="menu"),"contact"!=H&&"Contact Us"===e&&(D(),function(){N(),document.querySelector(".text").remove();const e=document.querySelector("main"),n=document.createElement("div");n.setAttribute("id","contact-header");const t=document.createElement("h1");t.textContent="CONTACT US";const a=document.createElement("div");a.className="line",n.append(t,a);const o=document.createElement("div");o.setAttribute("id","contact");const r=document.createElement("form"),c=document.createElement("input");c.type="text",c.name="fname",c.placeholder="Full Name";const i=document.createElement("input");i.type="email",i.name="email",i.placeholder="E-mail";const d=document.createElement("input");d.type="text",d.name="msg",d.placeholder="Message";const s=document.createElement("button");s.textContent="Submit",r.append(c,i,d,s);const l=document.createElement("div");l.className="contact-details";const p=document.createElement("h2"),m=document.createElement("h2"),u=document.createElement("p"),h=document.createElement("p");p.textContent="Contact",m.textContent="Based in",u.textContent="folafola@breads.com",h.textContent="Nueva Ecija, Philippines",l.append(p,u,m,h);const f=document.createElement("div");f.className="social-media";const g=document.createElement("a");g.href="https://facebook.com",g.target="_blank";const b=new Image;b.src=P,g.appendChild(b);const v=document.createElement("a");v.href="https://instagram.com",v.target="_blank";const x=new Image;x.src=R,v.appendChild(x);const y=document.createElement("a");y.href="https://twitter.com",y.target="_blank";const w=new Image;w.src=U,y.appendChild(w),f.append(y,g,v),o.append(n,r,l,f),e.append(o)}(),H="contact"),document.querySelector(`.${H}`).append(Z)}Z.className="active-page",document.querySelector(`.${H}`).append(Z),_.addEventListener("mouseover",(e=>{"navbar"!=e.target.className&&e.target.appendChild(Z)})),_.addEventListener("mouseout",(e=>{"navbar"!=e.target.textContent&&e.target.removeChild(Z),document.querySelector(`.${H}`).append(Z)})),_.addEventListener("click",(e=>G(e.target.textContent)))})()})();