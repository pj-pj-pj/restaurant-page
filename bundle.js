/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --burnt-sienna: hsla(12, 63%, 60%, 1);\r\n  --black: hsla(0, 0%, 0%, 1);\r\n  --fawn: hsla(30, 75%, 65%, 1);\r\n  --sandy-brown: hsla(30, 98%, 63%, 1);\r\n  --navajo-white: hsla(35, 94%, 86%, 1);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  user-select: none;\r\n  transition: 0.1s ease-in;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--navajo-white);\r\n  font-family: 'Prompt', sans-serif;\r\n}\r\n\r\n#content {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nmain,\r\nheader,\r\n#menu-header {\r\n  padding: 0px 180px;\r\n}\r\n\r\nmain,\r\nheader {\r\n  margin: 45px 0;\r\n}\r\n\r\nheader ul li,\r\nmain button,\r\n.headline p {\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n}\r\n\r\n/* header */\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nheader ul {\r\n  display: flex;\r\n  list-style: none;\r\n  padding-top: 10px;\r\n  gap: 30px;\r\n}\r\n\r\nheader ul li:hover {\r\n  color: var(--sandy-brown);\r\n}\r\n\r\nheader .active-page {\r\n  border: 1.8px solid var(--sandy-brown);\r\n}\r\n\r\nheader img {\r\n  max-width: 70px;\r\n  border: 5px dashed var(--burnt-sienna);\r\n  border-radius: 20px;\r\n  padding: 10px;\r\n}\r\n\r\nheader img:hover,\r\n.menu-item img:hover {\r\n  border-color: var(--sandy-brown);\r\n}\r\n\r\n/* main */\r\nmain {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.text > h1:first-child,\r\n.headline h1:nth-child(2),\r\n#menu-header,\r\n#contact-header {\r\n  color: var(--burnt-sienna);\r\n}\r\n\r\n.text > h1:first-child {\r\n  font-size: 70px;\r\n}\r\n\r\n.line {\r\n  width: 200px;\r\n  height: 4px;\r\n  background-color: #000;\r\n}\r\n\r\n.line,\r\n.headline p {\r\n  margin: 20px 0;\r\n}\r\n\r\n.headline h1 {\r\n  font-size: 60px;\r\n  line-height: 1;\r\n}\r\n\r\n.headline p {\r\n  max-width: 780px;\r\n  text-align: justify;\r\n  line-height: 1.5;\r\n}\r\n\r\nmain button {\r\n  font-weight: bold;\r\n  color: white;\r\n  background-color: var(--burnt-sienna);\r\n  font-family: inherit;\r\n  padding: 10px 35px;\r\n  border: 0;\r\n  border-radius: 30px;\r\n}\r\n\r\nmain button:hover {\r\n  background-color: var(--sandy-brown);\r\n}\r\n\r\n/* MENUPAGE */\r\n\r\n#menu-header,\r\n#contact-header {\r\n  line-height: 0.8;\r\n  font-size: 2em;\r\n}\r\n\r\nmain#menu {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\r\n  grid-gap: 15px 50px;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.menu-item {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  gap: 15px;\r\n  height: 100%;\r\n  padding: 10px;\r\n  border-bottom: 1px solid var(--black);\r\n  border-top: 1px solid var(--black);\r\n\r\n  align-items: center;\r\n}\r\n\r\n.menu-item:hover {\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 0px 0px;\r\n}\r\n\r\n.menu-item img {\r\n  width: 100px;\r\n  height: 100px;\r\n  padding: 5px;\r\n  border-radius: 20px;\r\n  border: 4px dashed var(--burnt-sienna);\r\n\r\n  object-fit: cover;\r\n}\r\n\r\n.menu-item .name {\r\n  font-size: 20px;\r\n}\r\n\r\n.menu-item .price {\r\n  margin-top: 3px;\r\n  font-size: 18px;\r\n}\r\n\r\n/* CONTACT */\r\n#contact {\r\n  margin-left: 50px;\r\n  display: grid;\r\n  gap: 1rem 50px;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n#contact-header {\r\n  grid-column: span 2;\r\n}\r\n\r\nform {\r\n  grid-row: span 2;\r\n  border: 1.5px solid var(--black);\r\n  padding: 80px 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform input {\r\n  color: var(--sandy-brown);\r\n  font-family: inherit;\r\n  font-size: 20px;\r\n  border: none;\r\n  border-bottom: 1px solid var(--black);\r\n  background-color: transparent;\r\n  margin: 10px;\r\n}\r\n\r\nform button {\r\n  margin-top: 50px;\r\n  font-size: 20px;\r\n}\r\n\r\n*:focus-visible {\r\n  outline: none;\r\n}\r\n\r\n.contact-details h2 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.contact-details p {\r\n  font-size: 20px;\r\n}\r\n\r\n.social-media img {\r\n  padding: 10px;\r\n  border-radius: 15px;\r\n  max-height: 45px;\r\n}\r\n\r\n.social-media img:hover {\r\n  background-color: var(--sandy-brown);\r\n}\r\n\r\n.social-media {\r\n  display: flex;\r\n  align-self: flex-end;\r\n  padding-bottom: 15px;\r\n  gap: 15px;\r\n}\r\n\r\n/* footer */\r\nfooter {\r\n  font-size: 15px;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: auto;\r\n  padding-bottom: 2%;\r\n}\r\n\r\nfooter a {\r\n  font-weight: 500;\r\n  text-decoration: none;\r\n  color: var(--burnt-sienna);\r\n}\r\n\r\nfooter a:hover {\r\n  color: var(--sandy-brown);\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  /* home */\r\n  .home-img {\r\n    position: fixed;\r\n    z-index: -1;\r\n    left: 60%;\r\n    opacity: 0.7;\r\n  }\r\n}\r\n\r\n@media (max-width: 760px) {\r\n  /* home */\r\n  main,\r\n  header,\r\n  #menu-header {\r\n    margin: 0;\r\n    padding: 20px 15px;\r\n  }\r\n\r\n  header img {\r\n    max-width: 60px;\r\n  }\r\n\r\n  header ul li,\r\n  main button,\r\n  .headline p {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n  }\r\n\r\n  main {\r\n    justify-content: center;\r\n  }\r\n\r\n  .home-img {\r\n    opacity: 0.3;\r\n  }\r\n\r\n  footer {\r\n    font-size: 11px;\r\n  }\r\n\r\n  footer a {\r\n    color: inherit;\r\n  }\r\n\r\n  main#menu {\r\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n    margin-top: -30px;\r\n  }\r\n\r\n  p.desc {\r\n    font-size: 13px;\r\n  }\r\n\r\n  #contact {\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  #contact h1 {\r\n    line-height: 1;\r\n  }\r\n\r\n  .contact-details {\r\n    text-align: center;\r\n  }\r\n\r\n  div.social-media {\r\n    align-self: center;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700&display=swap');\r\n\r\n:root {\r\n  --burnt-sienna: hsla(12, 63%, 60%, 1);\r\n  --black: hsla(0, 0%, 0%, 1);\r\n  --fawn: hsla(30, 75%, 65%, 1);\r\n  --sandy-brown: hsla(30, 98%, 63%, 1);\r\n  --navajo-white: hsla(35, 94%, 86%, 1);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  user-select: none;\r\n  transition: 0.1s ease-in;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--navajo-white);\r\n  font-family: 'Prompt', sans-serif;\r\n}\r\n\r\n#content {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nmain,\r\nheader,\r\n#menu-header {\r\n  padding: 0px 180px;\r\n}\r\n\r\nmain,\r\nheader {\r\n  margin: 45px 0;\r\n}\r\n\r\nheader ul li,\r\nmain button,\r\n.headline p {\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n}\r\n\r\n/* header */\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nheader ul {\r\n  display: flex;\r\n  list-style: none;\r\n  padding-top: 10px;\r\n  gap: 30px;\r\n}\r\n\r\nheader ul li:hover {\r\n  color: var(--sandy-brown);\r\n}\r\n\r\nheader .active-page {\r\n  border: 1.8px solid var(--sandy-brown);\r\n}\r\n\r\nheader img {\r\n  max-width: 70px;\r\n  border: 5px dashed var(--burnt-sienna);\r\n  border-radius: 20px;\r\n  padding: 10px;\r\n}\r\n\r\nheader img:hover,\r\n.menu-item img:hover {\r\n  border-color: var(--sandy-brown);\r\n}\r\n\r\n/* main */\r\nmain {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.text > h1:first-child,\r\n.headline h1:nth-child(2),\r\n#menu-header,\r\n#contact-header {\r\n  color: var(--burnt-sienna);\r\n}\r\n\r\n.text > h1:first-child {\r\n  font-size: 70px;\r\n}\r\n\r\n.line {\r\n  width: 200px;\r\n  height: 4px;\r\n  background-color: #000;\r\n}\r\n\r\n.line,\r\n.headline p {\r\n  margin: 20px 0;\r\n}\r\n\r\n.headline h1 {\r\n  font-size: 60px;\r\n  line-height: 1;\r\n}\r\n\r\n.headline p {\r\n  max-width: 780px;\r\n  text-align: justify;\r\n  line-height: 1.5;\r\n}\r\n\r\nmain button {\r\n  font-weight: bold;\r\n  color: white;\r\n  background-color: var(--burnt-sienna);\r\n  font-family: inherit;\r\n  padding: 10px 35px;\r\n  border: 0;\r\n  border-radius: 30px;\r\n}\r\n\r\nmain button:hover {\r\n  background-color: var(--sandy-brown);\r\n}\r\n\r\n/* MENUPAGE */\r\n\r\n#menu-header,\r\n#contact-header {\r\n  line-height: 0.8;\r\n  font-size: 2em;\r\n}\r\n\r\nmain#menu {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\r\n  grid-gap: 15px 50px;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.menu-item {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  gap: 15px;\r\n  height: 100%;\r\n  padding: 10px;\r\n  border-bottom: 1px solid var(--black);\r\n  border-top: 1px solid var(--black);\r\n\r\n  align-items: center;\r\n}\r\n\r\n.menu-item:hover {\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 0px 0px;\r\n}\r\n\r\n.menu-item img {\r\n  width: 100px;\r\n  height: 100px;\r\n  padding: 5px;\r\n  border-radius: 20px;\r\n  border: 4px dashed var(--burnt-sienna);\r\n\r\n  object-fit: cover;\r\n}\r\n\r\n.menu-item .name {\r\n  font-size: 20px;\r\n}\r\n\r\n.menu-item .price {\r\n  margin-top: 3px;\r\n  font-size: 18px;\r\n}\r\n\r\n/* CONTACT */\r\n#contact {\r\n  margin-left: 50px;\r\n  display: grid;\r\n  gap: 1rem 50px;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n#contact-header {\r\n  grid-column: span 2;\r\n}\r\n\r\nform {\r\n  grid-row: span 2;\r\n  border: 1.5px solid var(--black);\r\n  padding: 80px 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform input {\r\n  color: var(--sandy-brown);\r\n  font-family: inherit;\r\n  font-size: 20px;\r\n  border: none;\r\n  border-bottom: 1px solid var(--black);\r\n  background-color: transparent;\r\n  margin: 10px;\r\n}\r\n\r\nform button {\r\n  margin-top: 50px;\r\n  font-size: 20px;\r\n}\r\n\r\n*:focus-visible {\r\n  outline: none;\r\n}\r\n\r\n.contact-details h2 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.contact-details p {\r\n  font-size: 20px;\r\n}\r\n\r\n.social-media img {\r\n  padding: 10px;\r\n  border-radius: 15px;\r\n  max-height: 45px;\r\n}\r\n\r\n.social-media img:hover {\r\n  background-color: var(--sandy-brown);\r\n}\r\n\r\n.social-media {\r\n  display: flex;\r\n  align-self: flex-end;\r\n  padding-bottom: 15px;\r\n  gap: 15px;\r\n}\r\n\r\n/* footer */\r\nfooter {\r\n  font-size: 15px;\r\n  width: 100%;\r\n  text-align: center;\r\n  margin-top: auto;\r\n  padding-bottom: 2%;\r\n}\r\n\r\nfooter a {\r\n  font-weight: 500;\r\n  text-decoration: none;\r\n  color: var(--burnt-sienna);\r\n}\r\n\r\nfooter a:hover {\r\n  color: var(--sandy-brown);\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  /* home */\r\n  .home-img {\r\n    position: fixed;\r\n    z-index: -1;\r\n    left: 60%;\r\n    opacity: 0.7;\r\n  }\r\n}\r\n\r\n@media (max-width: 760px) {\r\n  /* home */\r\n  main,\r\n  header,\r\n  #menu-header {\r\n    margin: 0;\r\n    padding: 20px 15px;\r\n  }\r\n\r\n  header img {\r\n    max-width: 60px;\r\n  }\r\n\r\n  header ul li,\r\n  main button,\r\n  .headline p {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n  }\r\n\r\n  main {\r\n    justify-content: center;\r\n  }\r\n\r\n  .home-img {\r\n    opacity: 0.3;\r\n  }\r\n\r\n  footer {\r\n    font-size: 11px;\r\n  }\r\n\r\n  footer a {\r\n    color: inherit;\r\n  }\r\n\r\n  main#menu {\r\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n    margin-top: -30px;\r\n  }\r\n\r\n  p.desc {\r\n    font-size: 13px;\r\n  }\r\n\r\n  #contact {\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  #contact h1 {\r\n    line-height: 1;\r\n  }\r\n\r\n  .contact-details {\r\n    text-align: center;\r\n  }\r\n\r\n  div.social-media {\r\n    align-self: center;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _assets_facebook_app_symbol_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/facebook-app-symbol.png */ "./src/assets/facebook-app-symbol.png");
/* harmony import */ var _assets_instagram_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/instagram.png */ "./src/assets/instagram.png");
/* harmony import */ var _assets_twitter_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/twitter.png */ "./src/assets/twitter.png");








function init() {
  (0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const text = document.querySelector('.text');
  if (text !== null) {
    text.remove();
  }

  const main = document.querySelector('main');
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');
  contact.append(contactHeader, form, contactDetails, smHolder);
  main.append(contact);
}

const contactHeader = document.createElement('div');
contactHeader.setAttribute('id', 'contact-header');
(function contHeaderInit() {
  const header = document.createElement('h1');
  header.textContent = 'CONTACT US';
  const line = document.createElement('div');
  line.className = 'line';
  contactHeader.append(header, line);
})();

const form = document.createElement('form');
(function formInit() {
  const inputFullName = document.createElement('input');
  inputFullName.type = 'text';
  inputFullName.name = 'fname';
  inputFullName.placeholder = 'Full Name';
  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  inputEmail.placeholder = 'E-mail';
  const inputMessage = document.createElement('input');
  inputMessage.type = 'text';
  inputMessage.name = 'msg';
  inputMessage.placeholder = 'Message';
  const inputSubmit = document.createElement('button');
  inputSubmit.textContent = 'Submit';
  form.append(inputFullName, inputEmail, inputMessage, inputSubmit);
})();

const contactDetails = document.createElement('div');
contactDetails.className = 'contact-details';
(function contactDetailsInit() {
  const contactText = document.createElement('h2');
  const basedText = document.createElement('h2');
  const ctDetails = document.createElement('p');
  const btDetails = document.createElement('p');
  contactText.textContent = 'Contact';
  basedText.textContent = 'Based in';
  ctDetails.textContent = 'folafola@breads.com';
  btDetails.textContent = 'Nueva Ecija, Philippines';
  contactDetails.append(contactText, ctDetails, basedText, btDetails);
})();

const smHolder = document.createElement('div');
smHolder.className = 'social-media';
(function socialMediaInit() {
  const fbLink = document.createElement('a');
  fbLink.href = 'https://facebook.com';
  fbLink.target = '_blank';
  const fb = new Image();
  fb.src = _assets_facebook_app_symbol_png__WEBPACK_IMPORTED_MODULE_2__;
  fbLink.appendChild(fb);
  const igLink = document.createElement('a');
  igLink.href = 'https://instagram.com';
  igLink.target = '_blank';
  const ig = new Image();
  ig.src = _assets_instagram_png__WEBPACK_IMPORTED_MODULE_3__;
  igLink.appendChild(ig);
  const twtLink = document.createElement('a');
  twtLink.href = 'https://twitter.com';
  twtLink.target = '_blank';
  const twt = new Image();
  twt.src = _assets_twitter_png__WEBPACK_IMPORTED_MODULE_4__;
  twtLink.appendChild(twt);
  smHolder.append(twtLink, fbLink, igLink);
})();


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init),
/* harmony export */   headerInit: () => (/* binding */ headerInit)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _assets_rolling_pin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/rolling-pin.png */ "./src/assets/rolling-pin.png");
/* harmony import */ var _assets_basket_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/basket.png */ "./src/assets/basket.png");





//header components
const header = document.createElement('header');
const icon = new Image();
const navbar = document.createElement('ul');
const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');

function init() {
  const content = document.querySelector('div#content');

  headerInit();

  //main
  const main = document.createElement('main');
  const mainText = document.createElement('div');
  mainText.className = 'text';
  const buredu = document.createElement('h1');
  buredu.className = 'buredu';
  buredu.textContent = 'ブレドゥ';
  const bigImg = new Image();
  bigImg.src = _assets_basket_png__WEBPACK_IMPORTED_MODULE_3__;
  bigImg.className = 'home-img';
  const line = document.createElement('div');
  line.className = 'line';
  const headline = document.createElement('div');
  headline.className = 'headline';
  const headOne = document.createElement('h1');
  headOne.textContent = 'A LOAF OF LOVE';
  const headTwo = document.createElement('h1');
  headTwo.textContent = 'FROM THE BAKERY REALM';
  const headThree = document.createElement('h1');
  headThree.textContent = 'FOR YOU';
  const welcome = document.createElement('p');
  welcome.innerHTML =
    'Welcome to BREADS, a gastronomic haven where artisanal breads take center stage, offering a delectable symphony of flavors and textures for bread enthusiasts.';
  const brdbtn = document.createElement('button');
  brdbtn.textContent = 'Get Bread';
  brdbtn.className = 'get-bread';
  headline.append(headOne, headTwo, headThree, welcome, brdbtn);
  mainText.append(buredu, line, headline);

  brdbtn.addEventListener('click', () => {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.changeContent)('Menu');
  });

  content.append(main);
  main.append(mainText, bigImg);
}

function headerInit() {
  //header
  icon.src = _assets_rolling_pin_png__WEBPACK_IMPORTED_MODULE_2__;
  navbar.className = 'navbar';
  home.textContent = 'Home';
  home.className = 'home';
  menu.textContent = 'Menu';
  menu.className = 'menu';
  contact.textContent = 'Contact Us';
  contact.className = 'contact';

  content.append(header);
  header.append(icon, navbar);
  navbar.append(home, menu, contact);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeContent: () => (/* binding */ changeContent),
/* harmony export */   unchild: () => (/* binding */ unchild)
/* harmony export */ });
/* harmony import */ var _assets_rolling_pin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/rolling-pin.png */ "./src/assets/rolling-pin.png");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menupage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menupage */ "./src/menupage.js");
/* harmony import */ var _contactpage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactpage.js */ "./src/contactpage.js");





document.querySelector("link[rel~='icon']").href = _assets_rolling_pin_png__WEBPACK_IMPORTED_MODULE_0__;

(0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])();
footerInit();

let currentPage = 'home';

const navbar = document.querySelector('.navbar');
const hr = document.createElement('hr');
hr.className = 'active-page';
document.querySelector(`.${currentPage}`).append(hr);

navbar.addEventListener('mouseover', (e) => {
  if (e.target.className != 'navbar' && !e.target.contains(hr)) {
    e.target.appendChild(hr);
  }
});

navbar.addEventListener('mouseout', (e) => {
  if (e.target.textContent != 'navbar' && !e.target.contains(hr)) {
    e.target.removeChild(hr);
  }
  document.querySelector(`.${currentPage}`).append(hr);
});

navbar.addEventListener('click', (e) => changeContent(e.target.textContent));

function changeContent(e) {
  if (currentPage != 'home' && e === 'Home') {
    clearContent();
    (0,_homepage__WEBPACK_IMPORTED_MODULE_1__["default"])();
    currentPage = 'home';
  }

  if (currentPage != 'menu' && e === 'Menu') {
    clearContent();
    (0,_menupage__WEBPACK_IMPORTED_MODULE_2__["default"])();
    currentPage = 'menu';
  }

  if (currentPage != 'contact' && e === 'Contact Us') {
    clearContent();
    (0,_contactpage_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    currentPage = 'contact';
  }

  document.querySelector(`.${currentPage}`).append(hr);
}

function clearContent() {
  const content = document.querySelector('div#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function unchild(parent) {
  var child = parent.firstChild;
  while (child) {
    child.remove();
    child = parent.firstChild;
  }
}

function footerInit() {
  const footer = document.createElement('footer');
  const body = document.querySelector('body');
  const credit = document.createElement('a');
  credit.href = 'https://www.flaticon.com/free-icons/bread';
  credit.target = '_blank';
  credit.textContent =
    'Bread & Social Media Icons created by Freepik - Flaticon';
  const creditButMe = document.createElement('p');
  creditButMe.textContent = 'Copyright © 2023 by PJ';

  footer.append(credit, creditButMe);
  body.appendChild(footer);
}


/***/ }),

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_baguette_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/baguette.jpg */ "./src/assets/baguette.jpg");
/* harmony import */ var _assets_cinnamonToast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/cinnamonToast.jpg */ "./src/assets/cinnamonToast.jpg");
/* harmony import */ var _assets_sourdoughBoule_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/sourdoughBoule.jpg */ "./src/assets/sourdoughBoule.jpg");
/* harmony import */ var _assets_focaccia_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/focaccia.jpg */ "./src/assets/focaccia.jpg");
/* harmony import */ var _assets_naan_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/naan.jpg */ "./src/assets/naan.jpg");
/* harmony import */ var _assets_ciabatta_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/ciabatta.jpg */ "./src/assets/ciabatta.jpg");
/* harmony import */ var _assets_pita_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/pita.jpg */ "./src/assets/pita.jpg");
/* harmony import */ var _assets_brioche_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/brioche.jpg */ "./src/assets/brioche.jpg");
/* harmony import */ var _assets_wholeGrainLoaf_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/wholeGrainLoaf.jpg */ "./src/assets/wholeGrainLoaf.jpg");
/* harmony import */ var _assets_challah_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/challah.jpg */ "./src/assets/challah.jpg");











const items = [];

function createMenuItem(name, price, description, picture) {
  return {
    name,
    price,
    description,
    picture,
  };
}

(function addItems() {
  items.push(
    createMenuItem(
      'Baguette Sandwich',
      '$8.99',
      'Freshly baked baguette filled with a combination of meats, cheeses, and veggies.',
      _assets_baguette_jpg__WEBPACK_IMPORTED_MODULE_0__
    )
  );
  items.push(
    createMenuItem(
      'Cinnamon Raisin Toast',
      '$3.99',
      'Slices of toasted bread, sprinkled with cinnamon and topped with plump raisins.',
      _assets_cinnamonToast_jpg__WEBPACK_IMPORTED_MODULE_1__
    )
  );

  items.push(
    createMenuItem(
      'Sourdough Boule',
      '$6.99',
      'A round artisan bread with a tangy flavor and a crusty exterior.',
      _assets_sourdoughBoule_jpg__WEBPACK_IMPORTED_MODULE_2__
    )
  );
  items.push(
    createMenuItem(
      'Focaccia',
      '$7.99',
      'A fluffy and savory Italian bread topped with herbs, olive oil, and sea salt.',
      _assets_focaccia_jpg__WEBPACK_IMPORTED_MODULE_3__
    )
  );
  items.push(
    createMenuItem(
      'Naan Bread',
      '$5.99',
      'Soft and pillowy Indian bread perfect for dipping in curries and sauces.',
      _assets_naan_jpg__WEBPACK_IMPORTED_MODULE_4__
    )
  );
  items.push(
    createMenuItem(
      'Ciabatta',
      '$6.99',
      'An Italian bread with a chewy texture and large air pockets, ideal for sandwiches.',
      _assets_ciabatta_jpg__WEBPACK_IMPORTED_MODULE_5__
    )
  );
  items.push(
    createMenuItem(
      'Pita Bread',
      '$4.99',
      'Thin and pocketed bread commonly used in Mediterranean and Middle Eastern cuisine.',
      _assets_pita_jpg__WEBPACK_IMPORTED_MODULE_6__
    )
  );
  items.push(
    createMenuItem(
      'Brioche',
      '$5.99',
      'A rich and buttery bread often used for making sweet treats like French toast.',
      _assets_brioche_jpg__WEBPACK_IMPORTED_MODULE_7__
    )
  );
  items.push(
    createMenuItem(
      'Whole Grain Loaf',
      '$6.99',
      'A hearty bread made with whole wheat flour and packed with nutritious grains.',
      _assets_wholeGrainLoaf_jpg__WEBPACK_IMPORTED_MODULE_8__
    )
  );
  items.push(
    createMenuItem(
      'Challah',
      '$7.99',
      'A braided Jewish bread with a slightly sweet taste.',
      _assets_challah_jpg__WEBPACK_IMPORTED_MODULE_9__
    )
  );
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (items);


/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuItems */ "./src/menuItems.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ "./src/index.js");





const content = document.querySelector('div#content');
const main = document.createElement('main');
main.setAttribute('id', 'menu');

function init() {
  (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.headerInit)();
  displayMenu();
  content.append(menuHeader, main);
}

const menuHeader = document.createElement('div');
menuHeader.setAttribute('id', 'menu-header');
(function menuHeaderInit() {
  const header = document.createElement('h1');
  header.textContent = 'BREADS MENU';
  const line = document.createElement('div');
  line.className = 'line';
  menuHeader.append(header, line);
})();

function displayMenu() {
  (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.unchild)(main);

  for (let item of _menuItems__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    const itemHolder = document.createElement('div');
    itemHolder.className = 'menu-item';
    const itemDetails = document.createElement('div');
    itemDetails.className = 'item-details';
    const itemPic = new Image();
    itemPic.src = item.picture;
    const itemName = document.createElement('h4');
    itemName.textContent = item.name;
    itemName.className = 'name';
    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;
    itemPrice.className = 'price';
    const itemDesc = document.createElement('p');
    itemDesc.textContent = item.description;
    itemDesc.className = 'desc';

    itemDetails.append(itemName, itemPrice, itemDesc);
    itemHolder.append(itemPic, itemDetails);
    main.append(itemHolder);
  }
}


/***/ }),

/***/ "./src/assets/baguette.jpg":
/*!*********************************!*\
  !*** ./src/assets/baguette.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/baguette.jpg";

/***/ }),

/***/ "./src/assets/basket.png":
/*!*******************************!*\
  !*** ./src/assets/basket.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/basket.png";

/***/ }),

/***/ "./src/assets/brioche.jpg":
/*!********************************!*\
  !*** ./src/assets/brioche.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/brioche.jpg";

/***/ }),

/***/ "./src/assets/challah.jpg":
/*!********************************!*\
  !*** ./src/assets/challah.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/challah.jpg";

/***/ }),

/***/ "./src/assets/ciabatta.jpg":
/*!*********************************!*\
  !*** ./src/assets/ciabatta.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ciabatta.jpg";

/***/ }),

/***/ "./src/assets/cinnamonToast.jpg":
/*!**************************************!*\
  !*** ./src/assets/cinnamonToast.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cinnamonToast.jpg";

/***/ }),

/***/ "./src/assets/facebook-app-symbol.png":
/*!********************************************!*\
  !*** ./src/assets/facebook-app-symbol.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/facebook-app-symbol.png";

/***/ }),

/***/ "./src/assets/focaccia.jpg":
/*!*********************************!*\
  !*** ./src/assets/focaccia.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/focaccia.jpg";

/***/ }),

/***/ "./src/assets/instagram.png":
/*!**********************************!*\
  !*** ./src/assets/instagram.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/instagram.png";

/***/ }),

/***/ "./src/assets/naan.jpg":
/*!*****************************!*\
  !*** ./src/assets/naan.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/naan.jpg";

/***/ }),

/***/ "./src/assets/pita.jpg":
/*!*****************************!*\
  !*** ./src/assets/pita.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/pita.jpg";

/***/ }),

/***/ "./src/assets/rolling-pin.png":
/*!************************************!*\
  !*** ./src/assets/rolling-pin.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/rolling-pin.png";

/***/ }),

/***/ "./src/assets/sourdoughBoule.jpg":
/*!***************************************!*\
  !*** ./src/assets/sourdoughBoule.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sourdoughBoule.jpg";

/***/ }),

/***/ "./src/assets/twitter.png":
/*!********************************!*\
  !*** ./src/assets/twitter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/twitter.png";

/***/ }),

/***/ "./src/assets/wholeGrainLoaf.jpg":
/*!***************************************!*\
  !*** ./src/assets/wholeGrainLoaf.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/wholeGrainLoaf.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztVQ2pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByb21wdDp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tYnVybnQtc2llbm5hOiBoc2xhKDEyLCA2MyUsIDYwJSwgMSk7XFxyXFxuICAtLWJsYWNrOiBoc2xhKDAsIDAlLCAwJSwgMSk7XFxyXFxuICAtLWZhd246IGhzbGEoMzAsIDc1JSwgNjUlLCAxKTtcXHJcXG4gIC0tc2FuZHktYnJvd246IGhzbGEoMzAsIDk4JSwgNjMlLCAxKTtcXHJcXG4gIC0tbmF2YWpvLXdoaXRlOiBoc2xhKDM1LCA5NCUsIDg2JSwgMSk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YWpvLXdoaXRlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUHJvbXB0Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbm1haW4sXFxyXFxuaGVhZGVyLFxcclxcbiNtZW51LWhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAwcHggMTgwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4sXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogNDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgdWwgbGksXFxyXFxubWFpbiBidXR0b24sXFxyXFxuLmhlYWRsaW5lIHAge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogaGVhZGVyICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgdWwgbGk6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5hY3RpdmUtcGFnZSB7XFxyXFxuICBib3JkZXI6IDEuOHB4IHNvbGlkIHZhcigtLXNhbmR5LWJyb3duKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDcwcHg7XFxyXFxuICBib3JkZXI6IDVweCBkYXNoZWQgdmFyKC0tYnVybnQtc2llbm5hKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaW1nOmhvdmVyLFxcclxcbi5tZW51LWl0ZW0gaW1nOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtYWluICovXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQgPiBoMTpmaXJzdC1jaGlsZCxcXHJcXG4uaGVhZGxpbmUgaDE6bnRoLWNoaWxkKDIpLFxcclxcbiNtZW51LWhlYWRlcixcXHJcXG4jY29udGFjdC1oZWFkZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0ID4gaDE6Zmlyc3QtY2hpbGQge1xcclxcbiAgZm9udC1zaXplOiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5saW5lLFxcclxcbi5oZWFkbGluZSBwIHtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUgaDEge1xcclxcbiAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZSBwIHtcXHJcXG4gIG1heC13aWR0aDogNzgwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBidXR0b24ge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDM1cHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxyXFxufVxcclxcblxcclxcbi8qIE1FTlVQQUdFICovXFxyXFxuXFxyXFxuI21lbnUtaGVhZGVyLFxcclxcbiNjb250YWN0LWhlYWRlciB7XFxyXFxuICBsaW5lLWhlaWdodDogMC44O1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4jbWVudSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDUwcHgsIDFmcikpO1xcclxcbiAgZ3JpZC1nYXA6IDE1cHggNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXHJcXG5cXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW06aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSBpbWcge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDRweCBkYXNoZWQgdmFyKC0tYnVybnQtc2llbm5hKTtcXHJcXG5cXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIC5uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSAucHJpY2Uge1xcclxcbiAgbWFyZ2luLXRvcDogM3B4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDT05UQUNUICovXFxyXFxuI2NvbnRhY3Qge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAxcmVtIDUwcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWhlYWRlciB7XFxyXFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxyXFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXHJcXG4gIHBhZGRpbmc6IDgwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbio6Zm9jdXMtdmlzaWJsZSB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1kZXRhaWxzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZGV0YWlscyBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYSBpbWcge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBtYXgtaGVpZ2h0OiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLW1lZGlhIGltZzpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIGZvb3RlciAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xcclxcbiAgLyogaG9tZSAqL1xcclxcbiAgLmhvbWUtaW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgbGVmdDogNjAlO1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xcclxcbiAgLyogaG9tZSAqL1xcclxcbiAgbWFpbixcXHJcXG4gIGhlYWRlcixcXHJcXG4gICNtZW51LWhlYWRlciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIGltZyB7XFxyXFxuICAgIG1heC13aWR0aDogNjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciB1bCBsaSxcXHJcXG4gIG1haW4gYnV0dG9uLFxcclxcbiAgLmhlYWRsaW5lIHAge1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaG9tZS1pbWcge1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIge1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIgYSB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiNtZW51IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAuZGVzYyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhY3QgaDEge1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0LWRldGFpbHMge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYuc29jaWFsLW1lZGlhIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxhQUFhOztBQUViOztFQUVFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDREQUE0RDtFQUM1RCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQzs7RUFFbEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNDQUFzQzs7RUFFdEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBLFlBQVk7QUFDWjtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztFQUNkLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBLFdBQVc7QUFDWDtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7RUFDVDtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsU0FBUztFQUNUOzs7SUFHRSxTQUFTO0lBQ1Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTs7O0lBR0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLDREQUE0RDtJQUM1RCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJvbXB0OndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1idXJudC1zaWVubmE6IGhzbGEoMTIsIDYzJSwgNjAlLCAxKTtcXHJcXG4gIC0tYmxhY2s6IGhzbGEoMCwgMCUsIDAlLCAxKTtcXHJcXG4gIC0tZmF3bjogaHNsYSgzMCwgNzUlLCA2NSUsIDEpO1xcclxcbiAgLS1zYW5keS1icm93bjogaHNsYSgzMCwgOTglLCA2MyUsIDEpO1xcclxcbiAgLS1uYXZham8td2hpdGU6IGhzbGEoMzUsIDk0JSwgODYlLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZham8td2hpdGUpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQcm9tcHQnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbixcXHJcXG5oZWFkZXIsXFxyXFxuI21lbnUtaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDBweCAxODBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbixcXHJcXG5oZWFkZXIge1xcclxcbiAgbWFyZ2luOiA0NXB4IDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB1bCBsaSxcXHJcXG5tYWluIGJ1dHRvbixcXHJcXG4uaGVhZGxpbmUgcCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoZWFkZXIgKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB1bCBsaTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmFjdGl2ZS1wYWdlIHtcXHJcXG4gIGJvcmRlcjogMS44cHggc29saWQgdmFyKC0tc2FuZHktYnJvd24pO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaW1nIHtcXHJcXG4gIG1heC13aWR0aDogNzBweDtcXHJcXG4gIGJvcmRlcjogNXB4IGRhc2hlZCB2YXIoLS1idXJudC1zaWVubmEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBpbWc6aG92ZXIsXFxyXFxuLm1lbnUtaXRlbSBpbWc6aG92ZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4gKi9cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dCA+IGgxOmZpcnN0LWNoaWxkLFxcclxcbi5oZWFkbGluZSBoMTpudGgtY2hpbGQoMiksXFxyXFxuI21lbnUtaGVhZGVyLFxcclxcbiNjb250YWN0LWhlYWRlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQgPiBoMTpmaXJzdC1jaGlsZCB7XFxyXFxuICBmb250LXNpemU6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5saW5lIHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGhlaWdodDogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUsXFxyXFxuLmhlYWRsaW5lIHAge1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZSBoMSB7XFxyXFxuICBmb250LXNpemU6IDYwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRsaW5lIHAge1xcclxcbiAgbWF4LXdpZHRoOiA3ODBweDtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIGJ1dHRvbiB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMzVweDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVOVVBBR0UgKi9cXHJcXG5cXHJcXG4jbWVudS1oZWFkZXIsXFxyXFxuI2NvbnRhY3QtaGVhZGVyIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwLjg7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiNtZW51IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7XFxyXFxuICBncmlkLWdhcDogMTVweCA1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcblxcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIGltZyB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNHB4IGRhc2hlZCB2YXIoLS1idXJudC1zaWVubmEpO1xcclxcblxcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gLm5hbWUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIC5wcmljZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi8qIENPTlRBQ1QgKi9cXHJcXG4jY29udGFjdCB7XFxyXFxuICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDFyZW0gNTBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtaGVhZGVyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXHJcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbiAgcGFkZGluZzogODBweCAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuKjpmb2N1cy12aXNpYmxlIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWRldGFpbHMgaDIge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1kZXRhaWxzIHAge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLW1lZGlhIGltZyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEgaW1nOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGEge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuICAvKiBob21lICovXFxyXFxuICAuaG9tZS1pbWcge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBsZWZ0OiA2MCU7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxyXFxuICAvKiBob21lICovXFxyXFxuICBtYWluLFxcclxcbiAgaGVhZGVyLFxcclxcbiAgI21lbnUtaGVhZGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIHVsIGxpLFxcclxcbiAgbWFpbiBidXR0b24sXFxyXFxuICAuaGVhZGxpbmUgcCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLWltZyB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciBhIHtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluI21lbnUge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgcC5kZXNjIHtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhY3Qge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29udGFjdCBoMSB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtZGV0YWlscyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5zb2NpYWwtbWVkaWEge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGhvbWVwYWdlSW5pdCBmcm9tICcuL2hvbWVwYWdlJztcclxuaW1wb3J0IGZiTG9nbyBmcm9tICcuL2Fzc2V0cy9mYWNlYm9vay1hcHAtc3ltYm9sLnBuZyc7XHJcbmltcG9ydCBpZ0xvZ28gZnJvbSAnLi9hc3NldHMvaW5zdGFncmFtLnBuZyc7XHJcbmltcG9ydCB0d3RMb2dvIGZyb20gJy4vYXNzZXRzL3R3aXR0ZXIucG5nJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICBob21lcGFnZUluaXQoKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQnKTtcclxuICBpZiAodGV4dCAhPT0gbnVsbCkge1xyXG4gICAgdGV4dC5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XHJcbiAgY29udGFjdC5hcHBlbmQoY29udGFjdEhlYWRlciwgZm9ybSwgY29udGFjdERldGFpbHMsIHNtSG9sZGVyKTtcclxuICBtYWluLmFwcGVuZChjb250YWN0KTtcclxufVxyXG5cclxuY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250YWN0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1oZWFkZXInKTtcclxuKGZ1bmN0aW9uIGNvbnRIZWFkZXJJbml0KCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QgVVMnO1xyXG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsaW5lLmNsYXNzTmFtZSA9ICdsaW5lJztcclxuICBjb250YWN0SGVhZGVyLmFwcGVuZChoZWFkZXIsIGxpbmUpO1xyXG59KSgpO1xyXG5cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuKGZ1bmN0aW9uIGZvcm1Jbml0KCkge1xyXG4gIGNvbnN0IGlucHV0RnVsbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0RnVsbE5hbWUudHlwZSA9ICd0ZXh0JztcclxuICBpbnB1dEZ1bGxOYW1lLm5hbWUgPSAnZm5hbWUnO1xyXG4gIGlucHV0RnVsbE5hbWUucGxhY2Vob2xkZXIgPSAnRnVsbCBOYW1lJztcclxuICBjb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dEVtYWlsLnR5cGUgPSAnZW1haWwnO1xyXG4gIGlucHV0RW1haWwubmFtZSA9ICdlbWFpbCc7XHJcbiAgaW5wdXRFbWFpbC5wbGFjZWhvbGRlciA9ICdFLW1haWwnO1xyXG4gIGNvbnN0IGlucHV0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXRNZXNzYWdlLnR5cGUgPSAndGV4dCc7XHJcbiAgaW5wdXRNZXNzYWdlLm5hbWUgPSAnbXNnJztcclxuICBpbnB1dE1lc3NhZ2UucGxhY2Vob2xkZXIgPSAnTWVzc2FnZSc7XHJcbiAgY29uc3QgaW5wdXRTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBpbnB1dFN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xyXG4gIGZvcm0uYXBwZW5kKGlucHV0RnVsbE5hbWUsIGlucHV0RW1haWwsIGlucHV0TWVzc2FnZSwgaW5wdXRTdWJtaXQpO1xyXG59KSgpO1xyXG5cclxuY29uc3QgY29udGFjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29udGFjdERldGFpbHMuY2xhc3NOYW1lID0gJ2NvbnRhY3QtZGV0YWlscyc7XHJcbihmdW5jdGlvbiBjb250YWN0RGV0YWlsc0luaXQoKSB7XHJcbiAgY29uc3QgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGNvbnN0IGJhc2VkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgY29uc3QgY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGJ0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb250YWN0VGV4dC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcclxuICBiYXNlZFRleHQudGV4dENvbnRlbnQgPSAnQmFzZWQgaW4nO1xyXG4gIGN0RGV0YWlscy50ZXh0Q29udGVudCA9ICdmb2xhZm9sYUBicmVhZHMuY29tJztcclxuICBidERldGFpbHMudGV4dENvbnRlbnQgPSAnTnVldmEgRWNpamEsIFBoaWxpcHBpbmVzJztcclxuICBjb250YWN0RGV0YWlscy5hcHBlbmQoY29udGFjdFRleHQsIGN0RGV0YWlscywgYmFzZWRUZXh0LCBidERldGFpbHMpO1xyXG59KSgpO1xyXG5cclxuY29uc3Qgc21Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc21Ib2xkZXIuY2xhc3NOYW1lID0gJ3NvY2lhbC1tZWRpYSc7XHJcbihmdW5jdGlvbiBzb2NpYWxNZWRpYUluaXQoKSB7XHJcbiAgY29uc3QgZmJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGZiTGluay5ocmVmID0gJ2h0dHBzOi8vZmFjZWJvb2suY29tJztcclxuICBmYkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgY29uc3QgZmIgPSBuZXcgSW1hZ2UoKTtcclxuICBmYi5zcmMgPSBmYkxvZ287XHJcbiAgZmJMaW5rLmFwcGVuZENoaWxkKGZiKTtcclxuICBjb25zdCBpZ0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgaWdMaW5rLmhyZWYgPSAnaHR0cHM6Ly9pbnN0YWdyYW0uY29tJztcclxuICBpZ0xpbmsudGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgY29uc3QgaWcgPSBuZXcgSW1hZ2UoKTtcclxuICBpZy5zcmMgPSBpZ0xvZ287XHJcbiAgaWdMaW5rLmFwcGVuZENoaWxkKGlnKTtcclxuICBjb25zdCB0d3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIHR3dExpbmsuaHJlZiA9ICdodHRwczovL3R3aXR0ZXIuY29tJztcclxuICB0d3RMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gIGNvbnN0IHR3dCA9IG5ldyBJbWFnZSgpO1xyXG4gIHR3dC5zcmMgPSB0d3RMb2dvO1xyXG4gIHR3dExpbmsuYXBwZW5kQ2hpbGQodHd0KTtcclxuICBzbUhvbGRlci5hcHBlbmQodHd0TGluaywgZmJMaW5rLCBpZ0xpbmspO1xyXG59KSgpO1xyXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgY2hhbmdlQ29udGVudCB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5pbXBvcnQgZmF2aWNvbiBmcm9tICcuL2Fzc2V0cy9yb2xsaW5nLXBpbi5wbmcnO1xyXG5pbXBvcnQgYmFza2V0IGZyb20gJy4vYXNzZXRzL2Jhc2tldC5wbmcnO1xyXG5cclxuLy9oZWFkZXIgY29tcG9uZW50c1xyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xyXG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5jb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcclxuXHJcbiAgaGVhZGVySW5pdCgpO1xyXG5cclxuICAvL21haW5cclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWFpblRleHQuY2xhc3NOYW1lID0gJ3RleHQnO1xyXG4gIGNvbnN0IGJ1cmVkdSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgYnVyZWR1LmNsYXNzTmFtZSA9ICdidXJlZHUnO1xyXG4gIGJ1cmVkdS50ZXh0Q29udGVudCA9ICfjg5bjg6zjg4njgqUnO1xyXG4gIGNvbnN0IGJpZ0ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGJpZ0ltZy5zcmMgPSBiYXNrZXQ7XHJcbiAgYmlnSW1nLmNsYXNzTmFtZSA9ICdob21lLWltZyc7XHJcbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxpbmUuY2xhc3NOYW1lID0gJ2xpbmUnO1xyXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGVhZGxpbmUuY2xhc3NOYW1lID0gJ2hlYWRsaW5lJztcclxuICBjb25zdCBoZWFkT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkT25lLnRleHRDb250ZW50ID0gJ0EgTE9BRiBPRiBMT1ZFJztcclxuICBjb25zdCBoZWFkVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkVHdvLnRleHRDb250ZW50ID0gJ0ZST00gVEhFIEJBS0VSWSBSRUFMTSc7XHJcbiAgY29uc3QgaGVhZFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkVGhyZWUudGV4dENvbnRlbnQgPSAnRk9SIFlPVSc7XHJcbiAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB3ZWxjb21lLmlubmVySFRNTCA9XHJcbiAgICAnV2VsY29tZSB0byBCUkVBRFMsIGEgZ2FzdHJvbm9taWMgaGF2ZW4gd2hlcmUgYXJ0aXNhbmFsIGJyZWFkcyB0YWtlIGNlbnRlciBzdGFnZSwgb2ZmZXJpbmcgYSBkZWxlY3RhYmxlIHN5bXBob255IG9mIGZsYXZvcnMgYW5kIHRleHR1cmVzIGZvciBicmVhZCBlbnRodXNpYXN0cy4nO1xyXG4gIGNvbnN0IGJyZGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGJyZGJ0bi50ZXh0Q29udGVudCA9ICdHZXQgQnJlYWQnO1xyXG4gIGJyZGJ0bi5jbGFzc05hbWUgPSAnZ2V0LWJyZWFkJztcclxuICBoZWFkbGluZS5hcHBlbmQoaGVhZE9uZSwgaGVhZFR3bywgaGVhZFRocmVlLCB3ZWxjb21lLCBicmRidG4pO1xyXG4gIG1haW5UZXh0LmFwcGVuZChidXJlZHUsIGxpbmUsIGhlYWRsaW5lKTtcclxuXHJcbiAgYnJkYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY2hhbmdlQ29udGVudCgnTWVudScpO1xyXG4gIH0pO1xyXG5cclxuICBjb250ZW50LmFwcGVuZChtYWluKTtcclxuICBtYWluLmFwcGVuZChtYWluVGV4dCwgYmlnSW1nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlckluaXQoKSB7XHJcbiAgLy9oZWFkZXJcclxuICBpY29uLnNyYyA9IGZhdmljb247XHJcbiAgbmF2YmFyLmNsYXNzTmFtZSA9ICduYXZiYXInO1xyXG4gIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XHJcbiAgaG9tZS5jbGFzc05hbWUgPSAnaG9tZSc7XHJcbiAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICBtZW51LmNsYXNzTmFtZSA9ICdtZW51JztcclxuICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xyXG4gIGNvbnRhY3QuY2xhc3NOYW1lID0gJ2NvbnRhY3QnO1xyXG5cclxuICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xyXG4gIGhlYWRlci5hcHBlbmQoaWNvbiwgbmF2YmFyKTtcclxuICBuYXZiYXIuYXBwZW5kKGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xyXG59IiwiaW1wb3J0IGZhdmljb24gZnJvbSAnLi9hc3NldHMvcm9sbGluZy1waW4ucG5nJztcclxuaW1wb3J0IGhvbWVwYWdlSW5pdCBmcm9tICcuL2hvbWVwYWdlJztcclxuaW1wb3J0IG1lbnVJbml0IGZyb20gJy4vbWVudXBhZ2UnO1xyXG5pbXBvcnQgY29udGFjdEluaXQgZnJvbSAnLi9jb250YWN0cGFnZS5qcyc7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlua1tyZWx+PSdpY29uJ11cIikuaHJlZiA9IGZhdmljb247XHJcblxyXG5ob21lcGFnZUluaXQoKTtcclxuZm9vdGVySW5pdCgpO1xyXG5cclxubGV0IGN1cnJlbnRQYWdlID0gJ2hvbWUnO1xyXG5cclxuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xyXG5jb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbmhyLmNsYXNzTmFtZSA9ICdhY3RpdmUtcGFnZSc7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1cnJlbnRQYWdlfWApLmFwcGVuZChocik7XHJcblxyXG5uYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lICE9ICduYXZiYXInICYmICFlLnRhcmdldC5jb250YWlucyhocikpIHtcclxuICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGhyKTtcclxuICB9XHJcbn0pO1xyXG5cclxubmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgIT0gJ25hdmJhcicgJiYgIWUudGFyZ2V0LmNvbnRhaW5zKGhyKSkge1xyXG4gICAgZS50YXJnZXQucmVtb3ZlQ2hpbGQoaHIpO1xyXG4gIH1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjdXJyZW50UGFnZX1gKS5hcHBlbmQoaHIpO1xyXG59KTtcclxuXHJcbm5hdmJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjaGFuZ2VDb250ZW50KGUudGFyZ2V0LnRleHRDb250ZW50KSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29udGVudChlKSB7XHJcbiAgaWYgKGN1cnJlbnRQYWdlICE9ICdob21lJyAmJiBlID09PSAnSG9tZScpIHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgaG9tZXBhZ2VJbml0KCk7XHJcbiAgICBjdXJyZW50UGFnZSA9ICdob21lJztcclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50UGFnZSAhPSAnbWVudScgJiYgZSA9PT0gJ01lbnUnKSB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIG1lbnVJbml0KCk7XHJcbiAgICBjdXJyZW50UGFnZSA9ICdtZW51JztcclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50UGFnZSAhPSAnY29udGFjdCcgJiYgZSA9PT0gJ0NvbnRhY3QgVXMnKSB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIGNvbnRhY3RJbml0KCk7XHJcbiAgICBjdXJyZW50UGFnZSA9ICdjb250YWN0JztcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1cnJlbnRQYWdlfWApLmFwcGVuZChocik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcclxuICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XHJcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5jaGlsZChwYXJlbnQpIHtcclxuICB2YXIgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZDtcclxuICB3aGlsZSAoY2hpbGQpIHtcclxuICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvb3RlckluaXQoKSB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICBjb25zdCBjcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgY3JlZGl0LmhyZWYgPSAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvYnJlYWQnO1xyXG4gIGNyZWRpdC50YXJnZXQgPSAnX2JsYW5rJztcclxuICBjcmVkaXQudGV4dENvbnRlbnQgPVxyXG4gICAgJ0JyZWFkICYgU29jaWFsIE1lZGlhIEljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uJztcclxuICBjb25zdCBjcmVkaXRCdXRNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjcmVkaXRCdXRNZS50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMyBieSBQSic7XHJcblxyXG4gIGZvb3Rlci5hcHBlbmQoY3JlZGl0LCBjcmVkaXRCdXRNZSk7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59XHJcbiIsImltcG9ydCBiYWd1ZXR0ZSBmcm9tICcuL2Fzc2V0cy9iYWd1ZXR0ZS5qcGcnO1xyXG5pbXBvcnQgY2lubmFtb25Ub2FzdCBmcm9tICcuL2Fzc2V0cy9jaW5uYW1vblRvYXN0LmpwZyc7XHJcbmltcG9ydCBzb3VyZG91Z2hCb3VsZSBmcm9tICcuL2Fzc2V0cy9zb3VyZG91Z2hCb3VsZS5qcGcnO1xyXG5pbXBvcnQgZm9jYWNjaWEgZnJvbSAnLi9hc3NldHMvZm9jYWNjaWEuanBnJztcclxuaW1wb3J0IG5hYW4gZnJvbSAnLi9hc3NldHMvbmFhbi5qcGcnO1xyXG5pbXBvcnQgY2lhYmF0dGEgZnJvbSAnLi9hc3NldHMvY2lhYmF0dGEuanBnJztcclxuaW1wb3J0IHBpdGEgZnJvbSAnLi9hc3NldHMvcGl0YS5qcGcnO1xyXG5pbXBvcnQgYnJpb2NoZSBmcm9tICcuL2Fzc2V0cy9icmlvY2hlLmpwZyc7XHJcbmltcG9ydCB3aG9sZUdyYWluTG9hZiBmcm9tICcuL2Fzc2V0cy93aG9sZUdyYWluTG9hZi5qcGcnO1xyXG5pbXBvcnQgY2hhbGxhaCBmcm9tICcuL2Fzc2V0cy9jaGFsbGFoLmpwZyc7XHJcblxyXG5jb25zdCBpdGVtcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBwaWN0dXJlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBwcmljZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcGljdHVyZSxcclxuICB9O1xyXG59XHJcblxyXG4oZnVuY3Rpb24gYWRkSXRlbXMoKSB7XHJcbiAgaXRlbXMucHVzaChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAnQmFndWV0dGUgU2FuZHdpY2gnLFxyXG4gICAgICAnJDguOTknLFxyXG4gICAgICAnRnJlc2hseSBiYWtlZCBiYWd1ZXR0ZSBmaWxsZWQgd2l0aCBhIGNvbWJpbmF0aW9uIG9mIG1lYXRzLCBjaGVlc2VzLCBhbmQgdmVnZ2llcy4nLFxyXG4gICAgICBiYWd1ZXR0ZVxyXG4gICAgKVxyXG4gICk7XHJcbiAgaXRlbXMucHVzaChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAnQ2lubmFtb24gUmFpc2luIFRvYXN0JyxcclxuICAgICAgJyQzLjk5JyxcclxuICAgICAgJ1NsaWNlcyBvZiB0b2FzdGVkIGJyZWFkLCBzcHJpbmtsZWQgd2l0aCBjaW5uYW1vbiBhbmQgdG9wcGVkIHdpdGggcGx1bXAgcmFpc2lucy4nLFxyXG4gICAgICBjaW5uYW1vblRvYXN0XHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgaXRlbXMucHVzaChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAnU291cmRvdWdoIEJvdWxlJyxcclxuICAgICAgJyQ2Ljk5JyxcclxuICAgICAgJ0Egcm91bmQgYXJ0aXNhbiBicmVhZCB3aXRoIGEgdGFuZ3kgZmxhdm9yIGFuZCBhIGNydXN0eSBleHRlcmlvci4nLFxyXG4gICAgICBzb3VyZG91Z2hCb3VsZVxyXG4gICAgKVxyXG4gICk7XHJcbiAgaXRlbXMucHVzaChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAnRm9jYWNjaWEnLFxyXG4gICAgICAnJDcuOTknLFxyXG4gICAgICAnQSBmbHVmZnkgYW5kIHNhdm9yeSBJdGFsaWFuIGJyZWFkIHRvcHBlZCB3aXRoIGhlcmJzLCBvbGl2ZSBvaWwsIGFuZCBzZWEgc2FsdC4nLFxyXG4gICAgICBmb2NhY2NpYVxyXG4gICAgKVxyXG4gICk7XHJcbiAgaXRlbXMucHVzaChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAnTmFhbiBCcmVhZCcsXHJcbiAgICAgICckNS45OScsXHJcbiAgICAgICdTb2Z0IGFuZCBwaWxsb3d5IEluZGlhbiBicmVhZCBwZXJmZWN0IGZvciBkaXBwaW5nIGluIGN1cnJpZXMgYW5kIHNhdWNlcy4nLFxyXG4gICAgICBuYWFuXHJcbiAgICApXHJcbiAgKTtcclxuICBpdGVtcy5wdXNoKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgICdDaWFiYXR0YScsXHJcbiAgICAgICckNi45OScsXHJcbiAgICAgICdBbiBJdGFsaWFuIGJyZWFkIHdpdGggYSBjaGV3eSB0ZXh0dXJlIGFuZCBsYXJnZSBhaXIgcG9ja2V0cywgaWRlYWwgZm9yIHNhbmR3aWNoZXMuJyxcclxuICAgICAgY2lhYmF0dGFcclxuICAgIClcclxuICApO1xyXG4gIGl0ZW1zLnB1c2goXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgJ1BpdGEgQnJlYWQnLFxyXG4gICAgICAnJDQuOTknLFxyXG4gICAgICAnVGhpbiBhbmQgcG9ja2V0ZWQgYnJlYWQgY29tbW9ubHkgdXNlZCBpbiBNZWRpdGVycmFuZWFuIGFuZCBNaWRkbGUgRWFzdGVybiBjdWlzaW5lLicsXHJcbiAgICAgIHBpdGFcclxuICAgIClcclxuICApO1xyXG4gIGl0ZW1zLnB1c2goXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgJ0JyaW9jaGUnLFxyXG4gICAgICAnJDUuOTknLFxyXG4gICAgICAnQSByaWNoIGFuZCBidXR0ZXJ5IGJyZWFkIG9mdGVuIHVzZWQgZm9yIG1ha2luZyBzd2VldCB0cmVhdHMgbGlrZSBGcmVuY2ggdG9hc3QuJyxcclxuICAgICAgYnJpb2NoZVxyXG4gICAgKVxyXG4gICk7XHJcbiAgaXRlbXMucHVzaChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAnV2hvbGUgR3JhaW4gTG9hZicsXHJcbiAgICAgICckNi45OScsXHJcbiAgICAgICdBIGhlYXJ0eSBicmVhZCBtYWRlIHdpdGggd2hvbGUgd2hlYXQgZmxvdXIgYW5kIHBhY2tlZCB3aXRoIG51dHJpdGlvdXMgZ3JhaW5zLicsXHJcbiAgICAgIHdob2xlR3JhaW5Mb2FmXHJcbiAgICApXHJcbiAgKTtcclxuICBpdGVtcy5wdXNoKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgICdDaGFsbGFoJyxcclxuICAgICAgJyQ3Ljk5JyxcclxuICAgICAgJ0EgYnJhaWRlZCBKZXdpc2ggYnJlYWQgd2l0aCBhIHNsaWdodGx5IHN3ZWV0IHRhc3RlLicsXHJcbiAgICAgIGNoYWxsYWhcclxuICAgIClcclxuICApO1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXRlbXM7XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBoZWFkZXJJbml0IH0gZnJvbSAnLi9ob21lcGFnZSc7XHJcbmltcG9ydCBpdGVtcyBmcm9tICcuL21lbnVJdGVtcyc7XHJcbmltcG9ydCB7IHVuY2hpbGQgfSBmcm9tICcuL2luZGV4LmpzJztcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5tYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICBoZWFkZXJJbml0KCk7XHJcbiAgZGlzcGxheU1lbnUoKTtcclxuICBjb250ZW50LmFwcGVuZChtZW51SGVhZGVyLCBtYWluKTtcclxufVxyXG5cclxuY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5tZW51SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1oZWFkZXInKTtcclxuKGZ1bmN0aW9uIG1lbnVIZWFkZXJJbml0KCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0JSRUFEUyBNRU5VJztcclxuICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGluZS5jbGFzc05hbWUgPSAnbGluZSc7XHJcbiAgbWVudUhlYWRlci5hcHBlbmQoaGVhZGVyLCBsaW5lKTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlNZW51KCkge1xyXG4gIHVuY2hpbGQobWFpbik7XHJcblxyXG4gIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgIGNvbnN0IGl0ZW1Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1Ib2xkZXIuY2xhc3NOYW1lID0gJ21lbnUtaXRlbSc7XHJcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbURldGFpbHMuY2xhc3NOYW1lID0gJ2l0ZW0tZGV0YWlscyc7XHJcbiAgICBjb25zdCBpdGVtUGljID0gbmV3IEltYWdlKCk7XHJcbiAgICBpdGVtUGljLnNyYyA9IGl0ZW0ucGljdHVyZTtcclxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG4gICAgaXRlbU5hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xyXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcclxuICAgIGl0ZW1QcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xyXG4gICAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtRGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XHJcbiAgICBpdGVtRGVzYy5jbGFzc05hbWUgPSAnZGVzYyc7XHJcblxyXG4gICAgaXRlbURldGFpbHMuYXBwZW5kKGl0ZW1OYW1lLCBpdGVtUHJpY2UsIGl0ZW1EZXNjKTtcclxuICAgIGl0ZW1Ib2xkZXIuYXBwZW5kKGl0ZW1QaWMsIGl0ZW1EZXRhaWxzKTtcclxuICAgIG1haW4uYXBwZW5kKGl0ZW1Ib2xkZXIpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9