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
  console.log('hi');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O1VDbERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudUl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJvbXB0OndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1idXJudC1zaWVubmE6IGhzbGEoMTIsIDYzJSwgNjAlLCAxKTtcXHJcXG4gIC0tYmxhY2s6IGhzbGEoMCwgMCUsIDAlLCAxKTtcXHJcXG4gIC0tZmF3bjogaHNsYSgzMCwgNzUlLCA2NSUsIDEpO1xcclxcbiAgLS1zYW5keS1icm93bjogaHNsYSgzMCwgOTglLCA2MyUsIDEpO1xcclxcbiAgLS1uYXZham8td2hpdGU6IGhzbGEoMzUsIDk0JSwgODYlLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZham8td2hpdGUpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQcm9tcHQnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbixcXHJcXG5oZWFkZXIsXFxyXFxuI21lbnUtaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDBweCAxODBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbixcXHJcXG5oZWFkZXIge1xcclxcbiAgbWFyZ2luOiA0NXB4IDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB1bCBsaSxcXHJcXG5tYWluIGJ1dHRvbixcXHJcXG4uaGVhZGxpbmUgcCB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoZWFkZXIgKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB1bCBsaTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmFjdGl2ZS1wYWdlIHtcXHJcXG4gIGJvcmRlcjogMS44cHggc29saWQgdmFyKC0tc2FuZHktYnJvd24pO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaW1nIHtcXHJcXG4gIG1heC13aWR0aDogNzBweDtcXHJcXG4gIGJvcmRlcjogNXB4IGRhc2hlZCB2YXIoLS1idXJudC1zaWVubmEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBpbWc6aG92ZXIsXFxyXFxuLm1lbnUtaXRlbSBpbWc6aG92ZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4gKi9cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dCA+IGgxOmZpcnN0LWNoaWxkLFxcclxcbi5oZWFkbGluZSBoMTpudGgtY2hpbGQoMiksXFxyXFxuI21lbnUtaGVhZGVyLFxcclxcbiNjb250YWN0LWhlYWRlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQgPiBoMTpmaXJzdC1jaGlsZCB7XFxyXFxuICBmb250LXNpemU6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5saW5lIHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGhlaWdodDogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUsXFxyXFxuLmhlYWRsaW5lIHAge1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkbGluZSBoMSB7XFxyXFxuICBmb250LXNpemU6IDYwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRsaW5lIHAge1xcclxcbiAgbWF4LXdpZHRoOiA3ODBweDtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIGJ1dHRvbiB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMzVweDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVOVVBBR0UgKi9cXHJcXG5cXHJcXG4jbWVudS1oZWFkZXIsXFxyXFxuI2NvbnRhY3QtaGVhZGVyIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwLjg7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiNtZW51IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7XFxyXFxuICBncmlkLWdhcDogMTVweCA1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcblxcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIGltZyB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNHB4IGRhc2hlZCB2YXIoLS1idXJudC1zaWVubmEpO1xcclxcblxcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gLm5hbWUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIC5wcmljZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi8qIENPTlRBQ1QgKi9cXHJcXG4jY29udGFjdCB7XFxyXFxuICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDFyZW0gNTBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtaGVhZGVyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXHJcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbiAgcGFkZGluZzogODBweCAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuKjpmb2N1cy12aXNpYmxlIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWRldGFpbHMgaDIge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1kZXRhaWxzIHAge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLW1lZGlhIGltZyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEgaW1nOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGEge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuICAvKiBob21lICovXFxyXFxuICAuaG9tZS1pbWcge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBsZWZ0OiA2MCU7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxyXFxuICAvKiBob21lICovXFxyXFxuICBtYWluLFxcclxcbiAgaGVhZGVyLFxcclxcbiAgI21lbnUtaGVhZGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIHVsIGxpLFxcclxcbiAgbWFpbiBidXR0b24sXFxyXFxuICAuaGVhZGxpbmUgcCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLWltZyB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciBhIHtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBtYWluI21lbnUge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgcC5kZXNjIHtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NvbnRhY3Qge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29udGFjdCBoMSB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtZGV0YWlscyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5zb2NpYWwtbWVkaWEge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxz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QUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qcm9tcHQ6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJ1cm50LXNpZW5uYTogaHNsYSgxMiwgNjMlLCA2MCUsIDEpO1xcclxcbiAgLS1ibGFjazogaHNsYSgwLCAwJSwgMCUsIDEpO1xcclxcbiAgLS1mYXduOiBoc2xhKDMwLCA3NSUsIDY1JSwgMSk7XFxyXFxuICAtLXNhbmR5LWJyb3duOiBoc2xhKDMwLCA5OCUsIDYzJSwgMSk7XFxyXFxuICAtLW5hdmFqby13aGl0ZTogaHNsYSgzNSwgOTQlLCA4NiUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmFqby13aGl0ZSk7XFxyXFxuICBmb250LWZhbWlseTogJ1Byb21wdCcsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluLFxcclxcbmhlYWRlcixcXHJcXG4jbWVudS1oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMHB4IDE4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluLFxcclxcbmhlYWRlciB7XFxyXFxuICBtYXJnaW46IDQ1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHVsIGxpLFxcclxcbm1haW4gYnV0dG9uLFxcclxcbi5oZWFkbGluZSBwIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGhlYWRlciAqL1xcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHVsIGxpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAuYWN0aXZlLXBhZ2Uge1xcclxcbiAgYm9yZGVyOiAxLjhweCBzb2xpZCB2YXIoLS1zYW5keS1icm93bik7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBpbWcge1xcclxcbiAgbWF4LXdpZHRoOiA3MHB4O1xcclxcbiAgYm9yZGVyOiA1cHggZGFzaGVkIHZhcigtLWJ1cm50LXNpZW5uYSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGltZzpob3ZlcixcXHJcXG4ubWVudS1pdGVtIGltZzpob3ZlciB7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbiAqL1xcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0ID4gaDE6Zmlyc3QtY2hpbGQsXFxyXFxuLmhlYWRsaW5lIGgxOm50aC1jaGlsZCgyKSxcXHJcXG4jbWVudS1oZWFkZXIsXFxyXFxuI2NvbnRhY3QtaGVhZGVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dCA+IGgxOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtc2l6ZTogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSxcXHJcXG4uaGVhZGxpbmUgcCB7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRsaW5lIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUgcCB7XFxyXFxuICBtYXgtd2lkdGg6IDc4MHB4O1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbm1haW4gYnV0dG9uIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMTBweCAzNXB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRU5VUEFHRSAqL1xcclxcblxcclxcbiNtZW51LWhlYWRlcixcXHJcXG4jY29udGFjdC1oZWFkZXIge1xcclxcbiAgbGluZS1oZWlnaHQ6IDAuODtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluI21lbnUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQ1MHB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtZ2FwOiAxNXB4IDUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiA0cHggZGFzaGVkIHZhcigtLWJ1cm50LXNpZW5uYSk7XFxyXFxuXFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSAubmFtZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gLnByaWNlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ09OVEFDVCAqL1xcclxcbiNjb250YWN0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMXJlbSA1MHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1oZWFkZXIge1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBncmlkLXJvdzogc3BhbiAyO1xcclxcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuICBwYWRkaW5nOiA4MHB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQge1xcclxcbiAgY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4qOmZvY3VzLXZpc2libGUge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZGV0YWlscyBoMiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWRldGFpbHMgcCB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtbWVkaWEgaW1nIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgbWF4LWhlaWdodDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYSBpbWc6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLW1lZGlhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYSB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXHJcXG4gIC8qIGhvbWUgKi9cXHJcXG4gIC5ob21lLWltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIGxlZnQ6IDYwJTtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcXHJcXG4gIC8qIGhvbWUgKi9cXHJcXG4gIG1haW4sXFxyXFxuICBoZWFkZXIsXFxyXFxuICAjbWVudS1oZWFkZXIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBpbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDYwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgdWwgbGksXFxyXFxuICBtYWluIGJ1dHRvbixcXHJcXG4gIC5oZWFkbGluZSBwIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgbWFpbiB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtaW1nIHtcXHJcXG4gICAgb3BhY2l0eTogMC4zO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIGEge1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG1haW4jbWVudSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwLmRlc2Mge1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29udGFjdCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb250YWN0IGgxIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1kZXRhaWxzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgZGl2LnNvY2lhbC1tZWRpYSB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgaG9tZXBhZ2VJbml0IGZyb20gJy4vaG9tZXBhZ2UnO1xyXG5pbXBvcnQgZmJMb2dvIGZyb20gJy4vYXNzZXRzL2ZhY2Vib29rLWFwcC1zeW1ib2wucG5nJztcclxuaW1wb3J0IGlnTG9nbyBmcm9tICcuL2Fzc2V0cy9pbnN0YWdyYW0ucG5nJztcclxuaW1wb3J0IHR3dExvZ28gZnJvbSAnLi9hc3NldHMvdHdpdHRlci5wbmcnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xyXG4gIGhvbWVwYWdlSW5pdCgpO1xyXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpO1xyXG4gIGlmICh0ZXh0ICE9PSBudWxsKSB7XHJcbiAgICB0ZXh0LnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcclxuICBjb250YWN0LmFwcGVuZChjb250YWN0SGVhZGVyLCBmb3JtLCBjb250YWN0RGV0YWlscywgc21Ib2xkZXIpO1xyXG4gIG1haW4uYXBwZW5kKGNvbnRhY3QpO1xyXG59XHJcblxyXG5jb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRhY3RIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWhlYWRlcicpO1xyXG4oZnVuY3Rpb24gY29udEhlYWRlckluaXQoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnQ09OVEFDVCBVUyc7XHJcbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxpbmUuY2xhc3NOYW1lID0gJ2xpbmUnO1xyXG4gIGNvbnRhY3RIZWFkZXIuYXBwZW5kKGhlYWRlciwgbGluZSk7XHJcbn0pKCk7XHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4oZnVuY3Rpb24gZm9ybUluaXQoKSB7XHJcbiAgY29uc3QgaW5wdXRGdWxsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXRGdWxsTmFtZS50eXBlID0gJ3RleHQnO1xyXG4gIGlucHV0RnVsbE5hbWUubmFtZSA9ICdmbmFtZSc7XHJcbiAgaW5wdXRGdWxsTmFtZS5wbGFjZWhvbGRlciA9ICdGdWxsIE5hbWUnO1xyXG4gIGNvbnN0IGlucHV0RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0RW1haWwudHlwZSA9ICdlbWFpbCc7XHJcbiAgaW5wdXRFbWFpbC5uYW1lID0gJ2VtYWlsJztcclxuICBpbnB1dEVtYWlsLnBsYWNlaG9sZGVyID0gJ0UtbWFpbCc7XHJcbiAgY29uc3QgaW5wdXRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dE1lc3NhZ2UudHlwZSA9ICd0ZXh0JztcclxuICBpbnB1dE1lc3NhZ2UubmFtZSA9ICdtc2cnO1xyXG4gIGlucHV0TWVzc2FnZS5wbGFjZWhvbGRlciA9ICdNZXNzYWdlJztcclxuICBjb25zdCBpbnB1dFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGlucHV0U3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XHJcbiAgZm9ybS5hcHBlbmQoaW5wdXRGdWxsTmFtZSwgaW5wdXRFbWFpbCwgaW5wdXRNZXNzYWdlLCBpbnB1dFN1Ym1pdCk7XHJcbn0pKCk7XHJcblxyXG5jb25zdCBjb250YWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250YWN0RGV0YWlscy5jbGFzc05hbWUgPSAnY29udGFjdC1kZXRhaWxzJztcclxuKGZ1bmN0aW9uIGNvbnRhY3REZXRhaWxzSW5pdCgpIHtcclxuICBjb25zdCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgY29uc3QgYmFzZWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBjb25zdCBjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgYnREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnRhY3RUZXh0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xyXG4gIGJhc2VkVGV4dC50ZXh0Q29udGVudCA9ICdCYXNlZCBpbic7XHJcbiAgY3REZXRhaWxzLnRleHRDb250ZW50ID0gJ2ZvbGFmb2xhQGJyZWFkcy5jb20nO1xyXG4gIGJ0RGV0YWlscy50ZXh0Q29udGVudCA9ICdOdWV2YSBFY2lqYSwgUGhpbGlwcGluZXMnO1xyXG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZChjb250YWN0VGV4dCwgY3REZXRhaWxzLCBiYXNlZFRleHQsIGJ0RGV0YWlscyk7XHJcbn0pKCk7XHJcblxyXG5jb25zdCBzbUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5zbUhvbGRlci5jbGFzc05hbWUgPSAnc29jaWFsLW1lZGlhJztcclxuKGZ1bmN0aW9uIHNvY2lhbE1lZGlhSW5pdCgpIHtcclxuICBjb25zdCBmYkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgZmJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9mYWNlYm9vay5jb20nO1xyXG4gIGZiTGluay50YXJnZXQgPSAnX2JsYW5rJztcclxuICBjb25zdCBmYiA9IG5ldyBJbWFnZSgpO1xyXG4gIGZiLnNyYyA9IGZiTG9nbztcclxuICBmYkxpbmsuYXBwZW5kQ2hpbGQoZmIpO1xyXG4gIGNvbnN0IGlnTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBpZ0xpbmsuaHJlZiA9ICdodHRwczovL2luc3RhZ3JhbS5jb20nO1xyXG4gIGlnTGluay50YXJnZXQgPSAnX2JsYW5rJztcclxuICBjb25zdCBpZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGlnLnNyYyA9IGlnTG9nbztcclxuICBpZ0xpbmsuYXBwZW5kQ2hpbGQoaWcpO1xyXG4gIGNvbnN0IHR3dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgdHd0TGluay5ocmVmID0gJ2h0dHBzOi8vdHdpdHRlci5jb20nO1xyXG4gIHR3dExpbmsudGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgY29uc3QgdHd0ID0gbmV3IEltYWdlKCk7XHJcbiAgdHd0LnNyYyA9IHR3dExvZ287XHJcbiAgdHd0TGluay5hcHBlbmRDaGlsZCh0d3QpO1xyXG4gIHNtSG9sZGVyLmFwcGVuZCh0d3RMaW5rLCBmYkxpbmssIGlnTGluayk7XHJcbn0pKCk7XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBjaGFuZ2VDb250ZW50IH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcbmltcG9ydCBmYXZpY29uIGZyb20gJy4vYXNzZXRzL3JvbGxpbmctcGluLnBuZyc7XHJcbmltcG9ydCBiYXNrZXQgZnJvbSAnLi9hc3NldHMvYmFza2V0LnBuZyc7XHJcblxyXG4vL2hlYWRlciBjb21wb25lbnRzXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5jb25zdCBpY29uID0gbmV3IEltYWdlKCk7XHJcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xyXG5cclxuICBoZWFkZXJJbml0KCk7XHJcblxyXG4gIC8vbWFpblxyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluVGV4dC5jbGFzc05hbWUgPSAndGV4dCc7XHJcbiAgY29uc3QgYnVyZWR1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBidXJlZHUuY2xhc3NOYW1lID0gJ2J1cmVkdSc7XHJcbiAgYnVyZWR1LnRleHRDb250ZW50ID0gJ+ODluODrOODieOCpSc7XHJcbiAgY29uc3QgYmlnSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgYmlnSW1nLnNyYyA9IGJhc2tldDtcclxuICBiaWdJbWcuY2xhc3NOYW1lID0gJ2hvbWUtaW1nJztcclxuICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGluZS5jbGFzc05hbWUgPSAnbGluZSc7XHJcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBoZWFkbGluZS5jbGFzc05hbWUgPSAnaGVhZGxpbmUnO1xyXG4gIGNvbnN0IGhlYWRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRPbmUudGV4dENvbnRlbnQgPSAnQSBMT0FGIE9GIExPVkUnO1xyXG4gIGNvbnN0IGhlYWRUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRUd28udGV4dENvbnRlbnQgPSAnRlJPTSBUSEUgQkFLRVJZIFJFQUxNJztcclxuICBjb25zdCBoZWFkVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGhlYWRUaHJlZS50ZXh0Q29udGVudCA9ICdGT1IgWU9VJztcclxuICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHdlbGNvbWUuaW5uZXJIVE1MID1cclxuICAgICdXZWxjb21lIHRvIEJSRUFEUywgYSBnYXN0cm9ub21pYyBoYXZlbiB3aGVyZSBhcnRpc2FuYWwgYnJlYWRzIHRha2UgY2VudGVyIHN0YWdlLCBvZmZlcmluZyBhIGRlbGVjdGFibGUgc3ltcGhvbnkgb2YgZmxhdm9ycyBhbmQgdGV4dHVyZXMgZm9yIGJyZWFkIGVudGh1c2lhc3RzLic7XHJcbiAgY29uc3QgYnJkYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnJkYnRuLnRleHRDb250ZW50ID0gJ0dldCBCcmVhZCc7XHJcbiAgYnJkYnRuLmNsYXNzTmFtZSA9ICdnZXQtYnJlYWQnO1xyXG4gIGhlYWRsaW5lLmFwcGVuZChoZWFkT25lLCBoZWFkVHdvLCBoZWFkVGhyZWUsIHdlbGNvbWUsIGJyZGJ0bik7XHJcbiAgbWFpblRleHQuYXBwZW5kKGJ1cmVkdSwgbGluZSwgaGVhZGxpbmUpO1xyXG5cclxuICBicmRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjaGFuZ2VDb250ZW50KCdNZW51Jyk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xyXG4gIG1haW4uYXBwZW5kKG1haW5UZXh0LCBiaWdJbWcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGVhZGVySW5pdCgpIHtcclxuICAvL2hlYWRlclxyXG4gIGljb24uc3JjID0gZmF2aWNvbjtcclxuICBuYXZiYXIuY2xhc3NOYW1lID0gJ25hdmJhcic7XHJcbiAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcclxuICBob21lLmNsYXNzTmFtZSA9ICdob21lJztcclxuICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG4gIG1lbnUuY2xhc3NOYW1lID0gJ21lbnUnO1xyXG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XHJcbiAgY29udGFjdC5jbGFzc05hbWUgPSAnY29udGFjdCc7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kKGhlYWRlcik7XHJcbiAgaGVhZGVyLmFwcGVuZChpY29uLCBuYXZiYXIpO1xyXG4gIG5hdmJhci5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XHJcbn0iLCJpbXBvcnQgZmF2aWNvbiBmcm9tICcuL2Fzc2V0cy9yb2xsaW5nLXBpbi5wbmcnO1xyXG5pbXBvcnQgaG9tZXBhZ2VJbml0IGZyb20gJy4vaG9tZXBhZ2UnO1xyXG5pbXBvcnQgbWVudUluaXQgZnJvbSAnLi9tZW51cGFnZSc7XHJcbmltcG9ydCBjb250YWN0SW5pdCBmcm9tICcuL2NvbnRhY3RwYWdlLmpzJztcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW3JlbH49J2ljb24nXVwiKS5ocmVmID0gZmF2aWNvbjtcclxuXHJcbmhvbWVwYWdlSW5pdCgpO1xyXG5mb290ZXJJbml0KCk7XHJcblxyXG5sZXQgY3VycmVudFBhZ2UgPSAnaG9tZSc7XHJcblxyXG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XHJcbmNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuaHIuY2xhc3NOYW1lID0gJ2FjdGl2ZS1wYWdlJztcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudFBhZ2V9YCkuYXBwZW5kKGhyKTtcclxuXHJcbm5hdmJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgIT0gJ25hdmJhcicgJiYgIWUudGFyZ2V0LmNvbnRhaW5zKGhyKSkge1xyXG4gICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoaHIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5uYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCAhPSAnbmF2YmFyJyAmJiAhZS50YXJnZXQuY29udGFpbnMoaHIpKSB7XHJcbiAgICBlLnRhcmdldC5yZW1vdmVDaGlsZChocik7XHJcbiAgfVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1cnJlbnRQYWdlfWApLmFwcGVuZChocik7XHJcbn0pO1xyXG5cclxubmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNoYW5nZUNvbnRlbnQoZS50YXJnZXQudGV4dENvbnRlbnQpKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb250ZW50KGUpIHtcclxuICBpZiAoY3VycmVudFBhZ2UgIT0gJ2hvbWUnICYmIGUgPT09ICdIb21lJykge1xyXG4gICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICBob21lcGFnZUluaXQoKTtcclxuICAgIGN1cnJlbnRQYWdlID0gJ2hvbWUnO1xyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRQYWdlICE9ICdtZW51JyAmJiBlID09PSAnTWVudScpIHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgbWVudUluaXQoKTtcclxuICAgIGN1cnJlbnRQYWdlID0gJ21lbnUnO1xyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRQYWdlICE9ICdjb250YWN0JyAmJiBlID09PSAnQ29udGFjdCBVcycpIHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgY29udGFjdEluaXQoKTtcclxuICAgIGN1cnJlbnRQYWdlID0gJ2NvbnRhY3QnO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudFBhZ2V9YCkuYXBwZW5kKGhyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xyXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmNoaWxkKHBhcmVudCkge1xyXG4gIHZhciBjaGlsZCA9IHBhcmVudC5maXJzdENoaWxkO1xyXG4gIHdoaWxlIChjaGlsZCkge1xyXG4gICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICBjaGlsZCA9IHBhcmVudC5maXJzdENoaWxkO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9vdGVySW5pdCgpIHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjcmVkaXQuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9icmVhZCc7XHJcbiAgY3JlZGl0LnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gIGNyZWRpdC50ZXh0Q29udGVudCA9XHJcbiAgICAnQnJlYWQgJiBTb2NpYWwgTWVkaWEgSWNvbnMgY3JlYXRlZCBieSBGcmVlcGlrIC0gRmxhdGljb24nO1xyXG4gIGNvbnN0IGNyZWRpdEJ1dE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNyZWRpdEJ1dE1lLnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIzIGJ5IFBKJztcclxuXHJcbiAgZm9vdGVyLmFwcGVuZChjcmVkaXQsIGNyZWRpdEJ1dE1lKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn1cclxuIiwiaW1wb3J0IGJhZ3VldHRlIGZyb20gJy4vYXNzZXRzL2JhZ3VldHRlLmpwZyc7XHJcbmltcG9ydCBjaW5uYW1vblRvYXN0IGZyb20gJy4vYXNzZXRzL2Npbm5hbW9uVG9hc3QuanBnJztcclxuaW1wb3J0IHNvdXJkb3VnaEJvdWxlIGZyb20gJy4vYXNzZXRzL3NvdXJkb3VnaEJvdWxlLmpwZyc7XHJcbmltcG9ydCBmb2NhY2NpYSBmcm9tICcuL2Fzc2V0cy9mb2NhY2NpYS5qcGcnO1xyXG5pbXBvcnQgbmFhbiBmcm9tICcuL2Fzc2V0cy9uYWFuLmpwZyc7XHJcbmltcG9ydCBjaWFiYXR0YSBmcm9tICcuL2Fzc2V0cy9jaWFiYXR0YS5qcGcnO1xyXG5pbXBvcnQgcGl0YSBmcm9tICcuL2Fzc2V0cy9waXRhLmpwZyc7XHJcbmltcG9ydCBicmlvY2hlIGZyb20gJy4vYXNzZXRzL2JyaW9jaGUuanBnJztcclxuaW1wb3J0IHdob2xlR3JhaW5Mb2FmIGZyb20gJy4vYXNzZXRzL3dob2xlR3JhaW5Mb2FmLmpwZyc7XHJcbmltcG9ydCBjaGFsbGFoIGZyb20gJy4vYXNzZXRzL2NoYWxsYWguanBnJztcclxuXHJcbmNvbnN0IGl0ZW1zID0gW107XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIHBpY3R1cmUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIHByaWNlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBwaWN0dXJlLFxyXG4gIH07XHJcbn1cclxuXHJcbihmdW5jdGlvbiBhZGRJdGVtcygpIHtcclxuICBpdGVtcy5wdXNoKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgICdCYWd1ZXR0ZSBTYW5kd2ljaCcsXHJcbiAgICAgICckOC45OScsXHJcbiAgICAgICdGcmVzaGx5IGJha2VkIGJhZ3VldHRlIGZpbGxlZCB3aXRoIGEgY29tYmluYXRpb24gb2YgbWVhdHMsIGNoZWVzZXMsIGFuZCB2ZWdnaWVzLicsXHJcbiAgICAgIGJhZ3VldHRlXHJcbiAgICApXHJcbiAgKTtcclxuICBpdGVtcy5wdXNoKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgICdDaW5uYW1vbiBSYWlzaW4gVG9hc3QnLFxyXG4gICAgICAnJDMuOTknLFxyXG4gICAgICAnU2xpY2VzIG9mIHRvYXN0ZWQgYnJlYWQsIHNwcmlua2xlZCB3aXRoIGNpbm5hbW9uIGFuZCB0b3BwZWQgd2l0aCBwbHVtcCByYWlzaW5zLicsXHJcbiAgICAgIGNpbm5hbW9uVG9hc3RcclxuICAgIClcclxuICApO1xyXG5cclxuICBpdGVtcy5wdXNoKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgICdTb3VyZG91Z2ggQm91bGUnLFxyXG4gICAgICAnJDYuOTknLFxyXG4gICAgICAnQSByb3VuZCBhcnRpc2FuIGJyZWFkIHdpdGggYSB0YW5neSBmbGF2b3IgYW5kIGEgY3J1c3R5IGV4dGVyaW9yLicsXHJcbiAgICAgIHNvdXJkb3VnaEJvdWxlXHJcbiAgICApXHJcbiAgKTtcclxuICBpdGVtcy5wdXNoKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgICdGb2NhY2NpYScsXHJcbiAgICAgICckNy45OScsXHJcbiAgICAgICdBIGZsdWZmeSBhbmQgc2F2b3J5IEl0YWxpYW4gYnJlYWQgdG9wcGVkIHdpdGggaGVyYnMsIG9saXZlIG9pbCwgYW5kIHNlYSBzYWx0LicsXHJcbiAgICAgIGZvY2FjY2lhXHJcbiAgICApXHJcbiAgKTtcclxuICBpdGVtcy5wdXNoKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgICdOYWFuIEJyZWFkJyxcclxuICAgICAgJyQ1Ljk5JyxcclxuICAgICAgJ1NvZnQgYW5kIHBpbGxvd3kgSW5kaWFuIGJyZWFkIHBlcmZlY3QgZm9yIGRpcHBpbmcgaW4gY3VycmllcyBhbmQgc2F1Y2VzLicsXHJcbiAgICAgIG5hYW5cclxuICAgIClcclxuICApO1xyXG4gIGl0ZW1zLnB1c2goXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgJ0NpYWJhdHRhJyxcclxuICAgICAgJyQ2Ljk5JyxcclxuICAgICAgJ0FuIEl0YWxpYW4gYnJlYWQgd2l0aCBhIGNoZXd5IHRleHR1cmUgYW5kIGxhcmdlIGFpciBwb2NrZXRzLCBpZGVhbCBmb3Igc2FuZHdpY2hlcy4nLFxyXG4gICAgICBjaWFiYXR0YVxyXG4gICAgKVxyXG4gICk7XHJcbiAgaXRlbXMucHVzaChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAnUGl0YSBCcmVhZCcsXHJcbiAgICAgICckNC45OScsXHJcbiAgICAgICdUaGluIGFuZCBwb2NrZXRlZCBicmVhZCBjb21tb25seSB1c2VkIGluIE1lZGl0ZXJyYW5lYW4gYW5kIE1pZGRsZSBFYXN0ZXJuIGN1aXNpbmUuJyxcclxuICAgICAgcGl0YVxyXG4gICAgKVxyXG4gICk7XHJcbiAgaXRlbXMucHVzaChcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFxyXG4gICAgICAnQnJpb2NoZScsXHJcbiAgICAgICckNS45OScsXHJcbiAgICAgICdBIHJpY2ggYW5kIGJ1dHRlcnkgYnJlYWQgb2Z0ZW4gdXNlZCBmb3IgbWFraW5nIHN3ZWV0IHRyZWF0cyBsaWtlIEZyZW5jaCB0b2FzdC4nLFxyXG4gICAgICBicmlvY2hlXHJcbiAgICApXHJcbiAgKTtcclxuICBpdGVtcy5wdXNoKFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXHJcbiAgICAgICdXaG9sZSBHcmFpbiBMb2FmJyxcclxuICAgICAgJyQ2Ljk5JyxcclxuICAgICAgJ0EgaGVhcnR5IGJyZWFkIG1hZGUgd2l0aCB3aG9sZSB3aGVhdCBmbG91ciBhbmQgcGFja2VkIHdpdGggbnV0cml0aW91cyBncmFpbnMuJyxcclxuICAgICAgd2hvbGVHcmFpbkxvYWZcclxuICAgIClcclxuICApO1xyXG4gIGl0ZW1zLnB1c2goXHJcbiAgICBjcmVhdGVNZW51SXRlbShcclxuICAgICAgJ0NoYWxsYWgnLFxyXG4gICAgICAnJDcuOTknLFxyXG4gICAgICAnQSBicmFpZGVkIEpld2lzaCBicmVhZCB3aXRoIGEgc2xpZ2h0bHkgc3dlZXQgdGFzdGUuJyxcclxuICAgICAgY2hhbGxhaFxyXG4gICAgKVxyXG4gICk7XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpdGVtcztcclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGhlYWRlckluaXQgfSBmcm9tICcuL2hvbWVwYWdlJztcclxuaW1wb3J0IGl0ZW1zIGZyb20gJy4vbWVudUl0ZW1zJztcclxuaW1wb3J0IHsgdW5jaGlsZCB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbm1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xyXG4gIGhlYWRlckluaXQoKTtcclxuICBkaXNwbGF5TWVudSgpO1xyXG4gIGNvbnRlbnQuYXBwZW5kKG1lbnVIZWFkZXIsIG1haW4pO1xyXG59XHJcblxyXG5jb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm1lbnVIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWhlYWRlcicpO1xyXG4oZnVuY3Rpb24gbWVudUhlYWRlckluaXQoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnQlJFQURTIE1FTlUnO1xyXG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsaW5lLmNsYXNzTmFtZSA9ICdsaW5lJztcclxuICBtZW51SGVhZGVyLmFwcGVuZChoZWFkZXIsIGxpbmUpO1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheU1lbnUoKSB7XHJcbiAgdW5jaGlsZChtYWluKTtcclxuICBjb25zb2xlLmxvZygnaGknKTtcclxuXHJcbiAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgY29uc3QgaXRlbUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbUhvbGRlci5jbGFzc05hbWUgPSAnbWVudS1pdGVtJztcclxuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtRGV0YWlscy5jbGFzc05hbWUgPSAnaXRlbS1kZXRhaWxzJztcclxuICAgIGNvbnN0IGl0ZW1QaWMgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGl0ZW1QaWMuc3JjID0gaXRlbS5waWN0dXJlO1xyXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSAnbmFtZSc7XHJcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xyXG4gICAgaXRlbVByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XHJcbiAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuICAgIGl0ZW1EZXNjLmNsYXNzTmFtZSA9ICdkZXNjJztcclxuXHJcbiAgICBpdGVtRGV0YWlscy5hcHBlbmQoaXRlbU5hbWUsIGl0ZW1QcmljZSwgaXRlbURlc2MpO1xyXG4gICAgaXRlbUhvbGRlci5hcHBlbmQoaXRlbVBpYywgaXRlbURldGFpbHMpO1xyXG4gICAgbWFpbi5hcHBlbmQoaXRlbUhvbGRlcik7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=