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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --burnt-sienna: hsla(12, 63%, 60%, 1);\n  --black: hsla(0, 0%, 0%, 1);\n  --fawn: hsla(30, 75%, 65%, 1);\n  --sandy-brown: hsla(30, 98%, 63%, 1);\n  --navajo-white: hsla(35, 94%, 86%, 1);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  user-select: none;\n  transition: 0.1s ease-in;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--navajo-white);\n  font-family: 'Prompt', sans-serif;\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nmain,\nheader,\n#menu-header {\n  padding: 0px 180px;\n}\n\nmain,\nheader {\n  margin: 45px 0;\n}\n\nheader ul li,\nmain button,\n.headline p {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n/* header */\nheader {\n  display: flex;\n  justify-content: space-between;\n}\n\nheader ul {\n  display: flex;\n  list-style: none;\n  padding-top: 10px;\n  gap: 30px;\n}\n\nheader ul li:hover {\n  color: var(--sandy-brown);\n}\n\nheader .active-page {\n  border: 1.8px solid var(--sandy-brown);\n}\n\nheader img {\n  width: 70px;\n  border: 5px dashed var(--burnt-sienna);\n  border-radius: 20px;\n  padding: 10px;\n}\n\nheader img:hover,\n.menu-item img:hover {\n  border-color: var(--sandy-brown);\n}\n\n/* main */\nmain {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.text > h1:first-child,\n.headline h1:nth-child(2),\n#menu-header,\n#contact-header {\n  color: var(--burnt-sienna);\n}\n\n.text > h1:first-child {\n  font-size: 70px;\n}\n\n.line {\n  width: 200px;\n  height: 4px;\n  background-color: #000;\n}\n\n.line,\n.headline p {\n  margin: 20px 0;\n}\n\n.headline h1 {\n  font-size: 60px;\n  line-height: 1;\n}\n\n.headline p {\n  max-width: 780px;\n  text-align: justify;\n  line-height: 1.5;\n}\n\nmain button {\n  font-weight: bold;\n  color: white;\n  background-color: var(--burnt-sienna);\n  font-family: inherit;\n  padding: 10px 35px;\n  border: 0;\n  border-radius: 30px;\n}\n\nmain button:hover {\n  background-color: var(--sandy-brown);\n}\n\n/* MENUPAGE */\n\n#menu-header,\n#contact-header {\n  line-height: 0.8;\n  font-size: 2em;\n}\n\nmain#menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  grid-gap: 15px 50px;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.menu-item {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 15px;\n  height: 100%;\n  padding: 10px;\n  border-bottom: 1px solid var(--black);\n  border-top: 1px solid var(--black);\n\n  align-items: center;\n}\n\n.menu-item:hover {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 0px 0px;\n}\n\n.menu-item img {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  border-radius: 20px;\n  border: 4px dashed var(--burnt-sienna);\n\n  object-fit: cover;\n}\n\n.menu-item .name {\n  font-size: 20px;\n}\n\n.menu-item .price {\n  margin-top: 3px;\n  font-size: 18px;\n}\n\n/* CONTACT */\n#contact {\n  margin-left: 50px;\n  display: grid;\n  gap: 1rem 50px;\n  grid-template-columns: 1fr 1fr;\n}\n\n#contact-header {\n  grid-column: span 2;\n}\n\nform {\n  grid-row: span 2;\n  border: 1.5px solid var(--black);\n  padding: 80px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nform input {\n  color: var(--sandy-brown);\n  font-family: inherit;\n  font-size: 20px;\n  border: none;\n  border-bottom: 1px solid var(--black);\n  background-color: var(--navajo-white);\n  margin: 10px;\n}\n\nform button {\n  margin-top: 50px;\n  font-size: 20px;\n}\n\n*:focus-visible {\n  outline: none;\n}\n\n.contact-details h2 {\n  font-size: 2rem;\n}\n\n.contact-details p {\n  font-size: 20px;\n}\n\n.social-media img {\n  padding: 10px;\n  border-radius: 15px;\n  max-height: 45px;\n}\n\n.social-media img:hover {\n  background-color: var(--sandy-brown);\n}\n\n.social-media {\n  display: flex;\n  align-self: flex-end;\n  padding-bottom: 15px;\n  gap: 15px;\n}\n\n/* footer */\nfooter {\n  font-size: 15px;\n  width: 100%;\n  text-align: center;\n  margin-top: auto;\n  padding-bottom: 1%;\n}\n\nfooter a {\n  font-weight: 500;\n  text-decoration: none;\n  color: var(--burnt-sienna);\n}\n\nfooter a:hover {\n  color: var(--sandy-brown);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,qCAAqC;EACrC,2BAA2B;EAC3B,6BAA6B;EAC7B,oCAAoC;EACpC,qCAAqC;AACvC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iBAAiB;EACjB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,qCAAqC;EACrC,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;;;EAGE,gBAAgB;EAChB,eAAe;AACjB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,sCAAsC;EACtC,mBAAmB;EACnB,aAAa;AACf;;AAEA;;EAEE,gCAAgC;AAClC;;AAEA,SAAS;AACT;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;;;;EAIE,0BAA0B;AAC5B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,qCAAqC;EACrC,oBAAoB;EACpB,kBAAkB;EAClB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;AACtC;;AAEA,aAAa;;AAEb;;EAEE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,4DAA4D;EAC5D,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,SAAS;EACT,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,kCAAkC;;EAElC,mBAAmB;AACrB;;AAEA;EACE,oDAAoD;AACtD;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,sCAAsC;;EAEtC,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA,YAAY;AACZ;EACE,iBAAiB;EACjB,aAAa;EACb,cAAc;EACd,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,gCAAgC;EAChC,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,oBAAoB;EACpB,eAAe;EACf,YAAY;EACZ,qCAAqC;EACrC,qCAAqC;EACrC,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,oBAAoB;EACpB,SAAS;AACX;;AAEA,WAAW;AACX;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700&display=swap');\n\n:root {\n  --burnt-sienna: hsla(12, 63%, 60%, 1);\n  --black: hsla(0, 0%, 0%, 1);\n  --fawn: hsla(30, 75%, 65%, 1);\n  --sandy-brown: hsla(30, 98%, 63%, 1);\n  --navajo-white: hsla(35, 94%, 86%, 1);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  user-select: none;\n  transition: 0.1s ease-in;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--navajo-white);\n  font-family: 'Prompt', sans-serif;\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nmain,\nheader,\n#menu-header {\n  padding: 0px 180px;\n}\n\nmain,\nheader {\n  margin: 45px 0;\n}\n\nheader ul li,\nmain button,\n.headline p {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n/* header */\nheader {\n  display: flex;\n  justify-content: space-between;\n}\n\nheader ul {\n  display: flex;\n  list-style: none;\n  padding-top: 10px;\n  gap: 30px;\n}\n\nheader ul li:hover {\n  color: var(--sandy-brown);\n}\n\nheader .active-page {\n  border: 1.8px solid var(--sandy-brown);\n}\n\nheader img {\n  width: 70px;\n  border: 5px dashed var(--burnt-sienna);\n  border-radius: 20px;\n  padding: 10px;\n}\n\nheader img:hover,\n.menu-item img:hover {\n  border-color: var(--sandy-brown);\n}\n\n/* main */\nmain {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.text > h1:first-child,\n.headline h1:nth-child(2),\n#menu-header,\n#contact-header {\n  color: var(--burnt-sienna);\n}\n\n.text > h1:first-child {\n  font-size: 70px;\n}\n\n.line {\n  width: 200px;\n  height: 4px;\n  background-color: #000;\n}\n\n.line,\n.headline p {\n  margin: 20px 0;\n}\n\n.headline h1 {\n  font-size: 60px;\n  line-height: 1;\n}\n\n.headline p {\n  max-width: 780px;\n  text-align: justify;\n  line-height: 1.5;\n}\n\nmain button {\n  font-weight: bold;\n  color: white;\n  background-color: var(--burnt-sienna);\n  font-family: inherit;\n  padding: 10px 35px;\n  border: 0;\n  border-radius: 30px;\n}\n\nmain button:hover {\n  background-color: var(--sandy-brown);\n}\n\n/* MENUPAGE */\n\n#menu-header,\n#contact-header {\n  line-height: 0.8;\n  font-size: 2em;\n}\n\nmain#menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  grid-gap: 15px 50px;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.menu-item {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 15px;\n  height: 100%;\n  padding: 10px;\n  border-bottom: 1px solid var(--black);\n  border-top: 1px solid var(--black);\n\n  align-items: center;\n}\n\n.menu-item:hover {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 0px 0px;\n}\n\n.menu-item img {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  border-radius: 20px;\n  border: 4px dashed var(--burnt-sienna);\n\n  object-fit: cover;\n}\n\n.menu-item .name {\n  font-size: 20px;\n}\n\n.menu-item .price {\n  margin-top: 3px;\n  font-size: 18px;\n}\n\n/* CONTACT */\n#contact {\n  margin-left: 50px;\n  display: grid;\n  gap: 1rem 50px;\n  grid-template-columns: 1fr 1fr;\n}\n\n#contact-header {\n  grid-column: span 2;\n}\n\nform {\n  grid-row: span 2;\n  border: 1.5px solid var(--black);\n  padding: 80px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nform input {\n  color: var(--sandy-brown);\n  font-family: inherit;\n  font-size: 20px;\n  border: none;\n  border-bottom: 1px solid var(--black);\n  background-color: var(--navajo-white);\n  margin: 10px;\n}\n\nform button {\n  margin-top: 50px;\n  font-size: 20px;\n}\n\n*:focus-visible {\n  outline: none;\n}\n\n.contact-details h2 {\n  font-size: 2rem;\n}\n\n.contact-details p {\n  font-size: 20px;\n}\n\n.social-media img {\n  padding: 10px;\n  border-radius: 15px;\n  max-height: 45px;\n}\n\n.social-media img:hover {\n  background-color: var(--sandy-brown);\n}\n\n.social-media {\n  display: flex;\n  align-self: flex-end;\n  padding-bottom: 15px;\n  gap: 15px;\n}\n\n/* footer */\nfooter {\n  font-size: 15px;\n  width: 100%;\n  text-align: center;\n  margin-top: auto;\n  padding-bottom: 1%;\n}\n\nfooter a {\n  font-weight: 500;\n  text-decoration: none;\n  color: var(--burnt-sienna);\n}\n\nfooter a:hover {\n  color: var(--sandy-brown);\n}\n"],"sourceRoot":""}]);
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
  text.remove();

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
  // home page
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
/* harmony export */   changeContent: () => (/* binding */ changeContent)
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
  if (e.target.className != 'navbar') {
    e.target.appendChild(hr);
  }
});
navbar.addEventListener('mouseout', (e) => {
  if (e.target.textContent != 'navbar') {
    e.target.removeChild(hr);
  }

  document.querySelector(`.${currentPage}`).append(hr);
});

navbar.addEventListener('click', (e) => changeContent(e.target.textContent));

function clearContent() {
  const content = document.querySelector('div#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

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

function footerInit() {
  const footer = document.createElement('footer');
  const body = document.querySelector('body');
  const credit = document.createElement('a');
  credit.href = 'https://www.flaticon.com/free-icons/bread';
  credit.target = '_blank';
  credit.textContent = 'Bread & Social Media Icons created by Freepik - Flaticon';
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

module.exports = __webpack_require__.p + "b61142d03a6333bc4691.jpg";

/***/ }),

/***/ "./src/assets/basket.png":
/*!*******************************!*\
  !*** ./src/assets/basket.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1aeb98284bd930caf839.png";

/***/ }),

/***/ "./src/assets/brioche.jpg":
/*!********************************!*\
  !*** ./src/assets/brioche.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ae039b018802a6a6ede.jpg";

/***/ }),

/***/ "./src/assets/challah.jpg":
/*!********************************!*\
  !*** ./src/assets/challah.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0da691292e04783cac7d.jpg";

/***/ }),

/***/ "./src/assets/ciabatta.jpg":
/*!*********************************!*\
  !*** ./src/assets/ciabatta.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9423d088b348e1a3ed87.jpg";

/***/ }),

/***/ "./src/assets/cinnamonToast.jpg":
/*!**************************************!*\
  !*** ./src/assets/cinnamonToast.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe6dceb01cc217b55571.jpg";

/***/ }),

/***/ "./src/assets/facebook-app-symbol.png":
/*!********************************************!*\
  !*** ./src/assets/facebook-app-symbol.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "19d62257314c39310b70.png";

/***/ }),

/***/ "./src/assets/focaccia.jpg":
/*!*********************************!*\
  !*** ./src/assets/focaccia.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3bb5a603a8968c30534.jpg";

/***/ }),

/***/ "./src/assets/instagram.png":
/*!**********************************!*\
  !*** ./src/assets/instagram.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "776d16d0e9daa177afd5.png";

/***/ }),

/***/ "./src/assets/naan.jpg":
/*!*****************************!*\
  !*** ./src/assets/naan.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8cd06586f0409af0c3ac.jpg";

/***/ }),

/***/ "./src/assets/pita.jpg":
/*!*****************************!*\
  !*** ./src/assets/pita.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68241a7fc21bd36ebf4c.jpg";

/***/ }),

/***/ "./src/assets/rolling-pin.png":
/*!************************************!*\
  !*** ./src/assets/rolling-pin.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb764cbefe053f16861a.png";

/***/ }),

/***/ "./src/assets/sourdoughBoule.jpg":
/*!***************************************!*\
  !*** ./src/assets/sourdoughBoule.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ce2c551566f07a9b63e.jpg";

/***/ }),

/***/ "./src/assets/twitter.png":
/*!********************************!*\
  !*** ./src/assets/twitter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c08f939e6ae8a4957431.png";

/***/ }),

/***/ "./src/assets/wholeGrainLoaf.jpg":
/*!***************************************!*\
  !*** ./src/assets/wholeGrainLoaf.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "055528c0184cdd79b369.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51SXRlbXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qcm9tcHQ6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJ1cm50LXNpZW5uYTogaHNsYSgxMiwgNjMlLCA2MCUsIDEpO1xcbiAgLS1ibGFjazogaHNsYSgwLCAwJSwgMCUsIDEpO1xcbiAgLS1mYXduOiBoc2xhKDMwLCA3NSUsIDY1JSwgMSk7XFxuICAtLXNhbmR5LWJyb3duOiBoc2xhKDMwLCA5OCUsIDYzJSwgMSk7XFxuICAtLW5hdmFqby13aGl0ZTogaHNsYSgzNSwgOTQlLCA4NiUsIDEpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmFqby13aGl0ZSk7XFxuICBmb250LWZhbWlseTogJ1Byb21wdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluLFxcbmhlYWRlcixcXG4jbWVudS1oZWFkZXIge1xcbiAgcGFkZGluZzogMHB4IDE4MHB4O1xcbn1cXG5cXG5tYWluLFxcbmhlYWRlciB7XFxuICBtYXJnaW46IDQ1cHggMDtcXG59XFxuXFxuaGVhZGVyIHVsIGxpLFxcbm1haW4gYnV0dG9uLFxcbi5oZWFkbGluZSBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuaGVhZGVyIHVsIGxpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbmhlYWRlciAuYWN0aXZlLXBhZ2Uge1xcbiAgYm9yZGVyOiAxLjhweCBzb2xpZCB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgd2lkdGg6IDcwcHg7XFxuICBib3JkZXI6IDVweCBkYXNoZWQgdmFyKC0tYnVybnQtc2llbm5hKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5oZWFkZXIgaW1nOmhvdmVyLFxcbi5tZW51LWl0ZW0gaW1nOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG4vKiBtYWluICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRleHQgPiBoMTpmaXJzdC1jaGlsZCxcXG4uaGVhZGxpbmUgaDE6bnRoLWNoaWxkKDIpLFxcbiNtZW51LWhlYWRlcixcXG4jY29udGFjdC1oZWFkZXIge1xcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxufVxcblxcbi50ZXh0ID4gaDE6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbn1cXG5cXG4ubGluZSB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5saW5lLFxcbi5oZWFkbGluZSBwIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4uaGVhZGxpbmUgaDEge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5oZWFkbGluZSBwIHtcXG4gIG1heC13aWR0aDogNzgwcHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxubWFpbiBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAxMHB4IDM1cHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG5tYWluIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbi8qIE1FTlVQQUdFICovXFxuXFxuI21lbnUtaGVhZGVyLFxcbiNjb250YWN0LWhlYWRlciB7XFxuICBsaW5lLWhlaWdodDogMC44O1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbm1haW4jbWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDUwcHgsIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDE1cHggNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdhcDogMTVweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMHB4IDBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSBpbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDRweCBkYXNoZWQgdmFyKC0tYnVybnQtc2llbm5hKTtcXG5cXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ubWVudS1pdGVtIC5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSAucHJpY2Uge1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4vKiBDT05UQUNUICovXFxuI2NvbnRhY3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtIDUwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbiNjb250YWN0LWhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIHBhZGRpbmc6IDgwcHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YWpvLXdoaXRlKTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuKjpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jb250YWN0LWRldGFpbHMgaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdC1kZXRhaWxzIHAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhIGltZyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1heC1oZWlnaHQ6IDQ1cHg7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEgaW1nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQ0FB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M0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJvbXB0OndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1idXJudC1zaWVubmE6IGhzbGEoMTIsIDYzJSwgNjAlLCAxKTtcXG4gIC0tYmxhY2s6IGhzbGEoMCwgMCUsIDAlLCAxKTtcXG4gIC0tZmF3bjogaHNsYSgzMCwgNzUlLCA2NSUsIDEpO1xcbiAgLS1zYW5keS1icm93bjogaHNsYSgzMCwgOTglLCA2MyUsIDEpO1xcbiAgLS1uYXZham8td2hpdGU6IGhzbGEoMzUsIDk0JSwgODYlLCAxKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZham8td2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6ICdQcm9tcHQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubWFpbixcXG5oZWFkZXIsXFxuI21lbnUtaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDBweCAxODBweDtcXG59XFxuXFxubWFpbixcXG5oZWFkZXIge1xcbiAgbWFyZ2luOiA0NXB4IDA7XFxufVxcblxcbmhlYWRlciB1bCBsaSxcXG5tYWluIGJ1dHRvbixcXG4uaGVhZGxpbmUgcCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbmhlYWRlciB1bCBsaTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG5oZWFkZXIgLmFjdGl2ZS1wYWdlIHtcXG4gIGJvcmRlcjogMS44cHggc29saWQgdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgYm9yZGVyOiA1cHggZGFzaGVkIHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuaGVhZGVyIGltZzpob3ZlcixcXG4ubWVudS1pdGVtIGltZzpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuLyogbWFpbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0ID4gaDE6Zmlyc3QtY2hpbGQsXFxuLmhlYWRsaW5lIGgxOm50aC1jaGlsZCgyKSxcXG4jbWVudS1oZWFkZXIsXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcbn1cXG5cXG4udGV4dCA+IGgxOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG59XFxuXFxuLmxpbmUge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubGluZSxcXG4uaGVhZGxpbmUgcCB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLmhlYWRsaW5lIGgxIHtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uaGVhZGxpbmUgcCB7XFxuICBtYXgtd2lkdGg6IDc4MHB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbm1haW4gYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgcGFkZGluZzogMTBweCAzNXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxubWFpbiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG4vKiBNRU5VUEFHRSAqL1xcblxcbiNtZW51LWhlYWRlcixcXG4jY29udGFjdC1oZWFkZXIge1xcbiAgbGluZS1oZWlnaHQ6IDAuODtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG5tYWluI21lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQ1MHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAxNXB4IDUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBnYXA6IDE1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDBweCAwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0gaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiA0cHggZGFzaGVkIHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLm1lbnUtaXRlbSAubmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0gLnByaWNlIHtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLyogQ09OVEFDVCAqL1xcbiNjb250YWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbSA1MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jY29udGFjdC1oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuZm9ybSB7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBwYWRkaW5nOiA4MHB4IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmFqby13aGl0ZSk7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbio6Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY29udGFjdC1kZXRhaWxzIGgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtZGV0YWlscyBwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYSBpbWcge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXgtaGVpZ2h0OiA0NXB4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhIGltZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBwYWRkaW5nLWJvdHRvbTogMSU7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGhvbWVwYWdlSW5pdCBmcm9tICcuL2hvbWVwYWdlJztcbmltcG9ydCBmYkxvZ28gZnJvbSAnLi9hc3NldHMvZmFjZWJvb2stYXBwLXN5bWJvbC5wbmcnO1xuaW1wb3J0IGlnTG9nbyBmcm9tICcuL2Fzc2V0cy9pbnN0YWdyYW0ucG5nJztcbmltcG9ydCB0d3RMb2dvIGZyb20gJy4vYXNzZXRzL3R3aXR0ZXIucG5nJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGhvbWVwYWdlSW5pdCgpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQnKTtcbiAgdGV4dC5yZW1vdmUoKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG4gIGNvbnRhY3QuYXBwZW5kKGNvbnRhY3RIZWFkZXIsIGZvcm0sIGNvbnRhY3REZXRhaWxzLCBzbUhvbGRlcik7XG4gIG1haW4uYXBwZW5kKGNvbnRhY3QpO1xufVxuXG5jb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWN0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1oZWFkZXInKTtcbihmdW5jdGlvbiBjb250SGVhZGVySW5pdCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QgVVMnO1xuICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmUuY2xhc3NOYW1lID0gJ2xpbmUnO1xuICBjb250YWN0SGVhZGVyLmFwcGVuZChoZWFkZXIsIGxpbmUpO1xufSkoKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbihmdW5jdGlvbiBmb3JtSW5pdCgpIHtcbiAgY29uc3QgaW5wdXRGdWxsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0RnVsbE5hbWUudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXRGdWxsTmFtZS5uYW1lID0gJ2ZuYW1lJztcbiAgaW5wdXRGdWxsTmFtZS5wbGFjZWhvbGRlciA9ICdGdWxsIE5hbWUnO1xuICBjb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRFbWFpbC50eXBlID0gJ2VtYWlsJztcbiAgaW5wdXRFbWFpbC5uYW1lID0gJ2VtYWlsJztcbiAgaW5wdXRFbWFpbC5wbGFjZWhvbGRlciA9ICdFLW1haWwnO1xuICBjb25zdCBpbnB1dE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dE1lc3NhZ2UudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXRNZXNzYWdlLm5hbWUgPSAnbXNnJztcbiAgaW5wdXRNZXNzYWdlLnBsYWNlaG9sZGVyID0gJ01lc3NhZ2UnO1xuICBjb25zdCBpbnB1dFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBpbnB1dFN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICBmb3JtLmFwcGVuZChpbnB1dEZ1bGxOYW1lLCBpbnB1dEVtYWlsLCBpbnB1dE1lc3NhZ2UsIGlucHV0U3VibWl0KTtcbn0pKCk7XG5cbmNvbnN0IGNvbnRhY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWN0RGV0YWlscy5jbGFzc05hbWUgPSAnY29udGFjdC1kZXRhaWxzJztcbihmdW5jdGlvbiBjb250YWN0RGV0YWlsc0luaXQoKSB7XG4gIGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgYmFzZWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBidERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnRhY3RUZXh0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBiYXNlZFRleHQudGV4dENvbnRlbnQgPSAnQmFzZWQgaW4nO1xuICBjdERldGFpbHMudGV4dENvbnRlbnQgPSAnZm9sYWZvbGFAYnJlYWRzLmNvbSc7XG4gIGJ0RGV0YWlscy50ZXh0Q29udGVudCA9ICdOdWV2YSBFY2lqYSwgUGhpbGlwcGluZXMnO1xuICBjb250YWN0RGV0YWlscy5hcHBlbmQoY29udGFjdFRleHQsIGN0RGV0YWlscywgYmFzZWRUZXh0LCBidERldGFpbHMpO1xufSkoKTtcblxuY29uc3Qgc21Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNtSG9sZGVyLmNsYXNzTmFtZSA9ICdzb2NpYWwtbWVkaWEnO1xuKGZ1bmN0aW9uIHNvY2lhbE1lZGlhSW5pdCgpIHtcbiAgY29uc3QgZmJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBmYkxpbmsuaHJlZiA9ICdodHRwczovL2ZhY2Vib29rLmNvbSc7XG4gIGZiTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgY29uc3QgZmIgPSBuZXcgSW1hZ2UoKTtcbiAgZmIuc3JjID0gZmJMb2dvO1xuICBmYkxpbmsuYXBwZW5kQ2hpbGQoZmIpO1xuICBjb25zdCBpZ0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGlnTGluay5ocmVmID0gJ2h0dHBzOi8vaW5zdGFncmFtLmNvbSc7XG4gIGlnTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgY29uc3QgaWcgPSBuZXcgSW1hZ2UoKTtcbiAgaWcuc3JjID0gaWdMb2dvO1xuICBpZ0xpbmsuYXBwZW5kQ2hpbGQoaWcpO1xuICBjb25zdCB0d3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICB0d3RMaW5rLmhyZWYgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbSc7XG4gIHR3dExpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIGNvbnN0IHR3dCA9IG5ldyBJbWFnZSgpO1xuICB0d3Quc3JjID0gdHd0TG9nbztcbiAgdHd0TGluay5hcHBlbmRDaGlsZCh0d3QpO1xuICBzbUhvbGRlci5hcHBlbmQodHd0TGluaywgZmJMaW5rLCBpZ0xpbmspO1xufSkoKTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY2hhbmdlQ29udGVudCB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IGZhdmljb24gZnJvbSAnLi9hc3NldHMvcm9sbGluZy1waW4ucG5nJztcbmltcG9ydCBiYXNrZXQgZnJvbSAnLi9hc3NldHMvYmFza2V0LnBuZyc7XG5cbi8vaGVhZGVyIGNvbXBvbmVudHNcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgLy8gaG9tZSBwYWdlXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuXG4gIGhlYWRlckluaXQoKTtcblxuICAvL21haW5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpblRleHQuY2xhc3NOYW1lID0gJ3RleHQnO1xuICBjb25zdCBidXJlZHUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBidXJlZHUuY2xhc3NOYW1lID0gJ2J1cmVkdSc7XG4gIGJ1cmVkdS50ZXh0Q29udGVudCA9ICfjg5bjg6zjg4njgqUnO1xuICBjb25zdCBiaWdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgYmlnSW1nLnNyYyA9IGJhc2tldDtcbiAgYmlnSW1nLmNsYXNzTmFtZSA9ICdob21lLWltZyc7XG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGluZS5jbGFzc05hbWUgPSAnbGluZSc7XG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRsaW5lLmNsYXNzTmFtZSA9ICdoZWFkbGluZSc7XG4gIGNvbnN0IGhlYWRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkT25lLnRleHRDb250ZW50ID0gJ0EgTE9BRiBPRiBMT1ZFJztcbiAgY29uc3QgaGVhZFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRUd28udGV4dENvbnRlbnQgPSAnRlJPTSBUSEUgQkFLRVJZIFJFQUxNJztcbiAgY29uc3QgaGVhZFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZFRocmVlLnRleHRDb250ZW50ID0gJ0ZPUiBZT1UnO1xuICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWxjb21lLmlubmVySFRNTCA9XG4gICAgJ1dlbGNvbWUgdG8gQlJFQURTLCBhIGdhc3Ryb25vbWljIGhhdmVuIHdoZXJlIGFydGlzYW5hbCBicmVhZHMgdGFrZSBjZW50ZXIgc3RhZ2UsIG9mZmVyaW5nIGEgZGVsZWN0YWJsZSBzeW1waG9ueSBvZiBmbGF2b3JzIGFuZCB0ZXh0dXJlcyBmb3IgYnJlYWQgZW50aHVzaWFzdHMuJztcbiAgY29uc3QgYnJkYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJyZGJ0bi50ZXh0Q29udGVudCA9ICdHZXQgQnJlYWQnO1xuICBicmRidG4uY2xhc3NOYW1lID0gJ2dldC1icmVhZCc7XG4gIGhlYWRsaW5lLmFwcGVuZChoZWFkT25lLCBoZWFkVHdvLCBoZWFkVGhyZWUsIHdlbGNvbWUsIGJyZGJ0bik7XG4gIG1haW5UZXh0LmFwcGVuZChidXJlZHUsIGxpbmUsIGhlYWRsaW5lKTtcblxuICBicmRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hhbmdlQ29udGVudCgnTWVudScpO1xuICB9KTtcblxuICBjb250ZW50LmFwcGVuZChtYWluKTtcbiAgbWFpbi5hcHBlbmQobWFpblRleHQsIGJpZ0ltZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXJJbml0KCkge1xuICAvL2hlYWRlclxuICBpY29uLnNyYyA9IGZhdmljb247XG4gIG5hdmJhci5jbGFzc05hbWUgPSAnbmF2YmFyJztcbiAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgaG9tZS5jbGFzc05hbWUgPSAnaG9tZSc7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG1lbnUuY2xhc3NOYW1lID0gJ21lbnUnO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICBjb250YWN0LmNsYXNzTmFtZSA9ICdjb250YWN0JztcblxuICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kKGljb24sIG5hdmJhcik7XG4gIG5hdmJhci5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XG59XG4iLCJpbXBvcnQgZmF2aWNvbiBmcm9tICcuL2Fzc2V0cy9yb2xsaW5nLXBpbi5wbmcnO1xuaW1wb3J0IGhvbWVwYWdlSW5pdCBmcm9tICcuL2hvbWVwYWdlJztcbmltcG9ydCBtZW51SW5pdCBmcm9tICcuL21lbnVwYWdlJztcbmltcG9ydCBjb250YWN0SW5pdCBmcm9tICcuL2NvbnRhY3RwYWdlLmpzJztcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbcmVsfj0naWNvbiddXCIpLmhyZWYgPSBmYXZpY29uO1xuXG5ob21lcGFnZUluaXQoKTtcbmZvb3RlckluaXQoKTtcblxubGV0IGN1cnJlbnRQYWdlID0gJ2hvbWUnO1xuXG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG5jb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5oci5jbGFzc05hbWUgPSAnYWN0aXZlLXBhZ2UnO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjdXJyZW50UGFnZX1gKS5hcHBlbmQoaHIpO1xuXG5uYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSAhPSAnbmF2YmFyJykge1xuICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGhyKTtcbiAgfVxufSk7XG5uYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgIT0gJ25hdmJhcicpIHtcbiAgICBlLnRhcmdldC5yZW1vdmVDaGlsZChocik7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjdXJyZW50UGFnZX1gKS5hcHBlbmQoaHIpO1xufSk7XG5cbm5hdmJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjaGFuZ2VDb250ZW50KGUudGFyZ2V0LnRleHRDb250ZW50KSk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbnRlbnQoZSkge1xuICBpZiAoY3VycmVudFBhZ2UgIT0gJ2hvbWUnICYmIGUgPT09ICdIb21lJykge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGhvbWVwYWdlSW5pdCgpO1xuICAgIGN1cnJlbnRQYWdlID0gJ2hvbWUnO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRQYWdlICE9ICdtZW51JyAmJiBlID09PSAnTWVudScpIHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBtZW51SW5pdCgpO1xuICAgIGN1cnJlbnRQYWdlID0gJ21lbnUnO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRQYWdlICE9ICdjb250YWN0JyAmJiBlID09PSAnQ29udGFjdCBVcycpIHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjb250YWN0SW5pdCgpO1xuICAgIGN1cnJlbnRQYWdlID0gJ2NvbnRhY3QnO1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudFBhZ2V9YCkuYXBwZW5kKGhyKTtcbn1cblxuZnVuY3Rpb24gZm9vdGVySW5pdCgpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY3JlZGl0LmhyZWYgPSAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvYnJlYWQnO1xuICBjcmVkaXQudGFyZ2V0ID0gJ19ibGFuayc7XG4gIGNyZWRpdC50ZXh0Q29udGVudCA9ICdCcmVhZCAmIFNvY2lhbCBNZWRpYSBJY29ucyBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvbic7XG4gIGNvbnN0IGNyZWRpdEJ1dE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjcmVkaXRCdXRNZS50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMyBieSBQSic7XG5cbiAgZm9vdGVyLmFwcGVuZChjcmVkaXQsIGNyZWRpdEJ1dE1lKTtcbiAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuIiwiaW1wb3J0IGJhZ3VldHRlIGZyb20gJy4vYXNzZXRzL2JhZ3VldHRlLmpwZyc7XG5pbXBvcnQgY2lubmFtb25Ub2FzdCBmcm9tICcuL2Fzc2V0cy9jaW5uYW1vblRvYXN0LmpwZyc7XG5pbXBvcnQgc291cmRvdWdoQm91bGUgZnJvbSAnLi9hc3NldHMvc291cmRvdWdoQm91bGUuanBnJztcbmltcG9ydCBmb2NhY2NpYSBmcm9tICcuL2Fzc2V0cy9mb2NhY2NpYS5qcGcnO1xuaW1wb3J0IG5hYW4gZnJvbSAnLi9hc3NldHMvbmFhbi5qcGcnO1xuaW1wb3J0IGNpYWJhdHRhIGZyb20gJy4vYXNzZXRzL2NpYWJhdHRhLmpwZyc7XG5pbXBvcnQgcGl0YSBmcm9tICcuL2Fzc2V0cy9waXRhLmpwZyc7XG5pbXBvcnQgYnJpb2NoZSBmcm9tICcuL2Fzc2V0cy9icmlvY2hlLmpwZyc7XG5pbXBvcnQgd2hvbGVHcmFpbkxvYWYgZnJvbSAnLi9hc3NldHMvd2hvbGVHcmFpbkxvYWYuanBnJztcbmltcG9ydCBjaGFsbGFoIGZyb20gJy4vYXNzZXRzL2NoYWxsYWguanBnJztcblxuY29uc3QgaXRlbXMgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBwaWN0dXJlKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBwcmljZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBwaWN0dXJlLFxuICB9O1xufVxuXG4oZnVuY3Rpb24gYWRkSXRlbXMoKSB7XG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnQmFndWV0dGUgU2FuZHdpY2gnLFxuICAgICAgJyQ4Ljk5JyxcbiAgICAgICdGcmVzaGx5IGJha2VkIGJhZ3VldHRlIGZpbGxlZCB3aXRoIGEgY29tYmluYXRpb24gb2YgbWVhdHMsIGNoZWVzZXMsIGFuZCB2ZWdnaWVzLicsXG4gICAgICBiYWd1ZXR0ZVxuICAgIClcbiAgKTtcbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdDaW5uYW1vbiBSYWlzaW4gVG9hc3QnLFxuICAgICAgJyQzLjk5JyxcbiAgICAgICdTbGljZXMgb2YgdG9hc3RlZCBicmVhZCwgc3ByaW5rbGVkIHdpdGggY2lubmFtb24gYW5kIHRvcHBlZCB3aXRoIHBsdW1wIHJhaXNpbnMuJyxcbiAgICAgIGNpbm5hbW9uVG9hc3RcbiAgICApXG4gICk7XG5cbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdTb3VyZG91Z2ggQm91bGUnLFxuICAgICAgJyQ2Ljk5JyxcbiAgICAgICdBIHJvdW5kIGFydGlzYW4gYnJlYWQgd2l0aCBhIHRhbmd5IGZsYXZvciBhbmQgYSBjcnVzdHkgZXh0ZXJpb3IuJyxcbiAgICAgIHNvdXJkb3VnaEJvdWxlXG4gICAgKVxuICApO1xuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ0ZvY2FjY2lhJyxcbiAgICAgICckNy45OScsXG4gICAgICAnQSBmbHVmZnkgYW5kIHNhdm9yeSBJdGFsaWFuIGJyZWFkIHRvcHBlZCB3aXRoIGhlcmJzLCBvbGl2ZSBvaWwsIGFuZCBzZWEgc2FsdC4nLFxuICAgICAgZm9jYWNjaWFcbiAgICApXG4gICk7XG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnTmFhbiBCcmVhZCcsXG4gICAgICAnJDUuOTknLFxuICAgICAgJ1NvZnQgYW5kIHBpbGxvd3kgSW5kaWFuIGJyZWFkIHBlcmZlY3QgZm9yIGRpcHBpbmcgaW4gY3VycmllcyBhbmQgc2F1Y2VzLicsXG4gICAgICBuYWFuXG4gICAgKVxuICApO1xuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ0NpYWJhdHRhJyxcbiAgICAgICckNi45OScsXG4gICAgICAnQW4gSXRhbGlhbiBicmVhZCB3aXRoIGEgY2hld3kgdGV4dHVyZSBhbmQgbGFyZ2UgYWlyIHBvY2tldHMsIGlkZWFsIGZvciBzYW5kd2ljaGVzLicsXG4gICAgICBjaWFiYXR0YVxuICAgIClcbiAgKTtcbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdQaXRhIEJyZWFkJyxcbiAgICAgICckNC45OScsXG4gICAgICAnVGhpbiBhbmQgcG9ja2V0ZWQgYnJlYWQgY29tbW9ubHkgdXNlZCBpbiBNZWRpdGVycmFuZWFuIGFuZCBNaWRkbGUgRWFzdGVybiBjdWlzaW5lLicsXG4gICAgICBwaXRhXG4gICAgKVxuICApO1xuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ0JyaW9jaGUnLFxuICAgICAgJyQ1Ljk5JyxcbiAgICAgICdBIHJpY2ggYW5kIGJ1dHRlcnkgYnJlYWQgb2Z0ZW4gdXNlZCBmb3IgbWFraW5nIHN3ZWV0IHRyZWF0cyBsaWtlIEZyZW5jaCB0b2FzdC4nLFxuICAgICAgYnJpb2NoZVxuICAgIClcbiAgKTtcbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdXaG9sZSBHcmFpbiBMb2FmJyxcbiAgICAgICckNi45OScsXG4gICAgICAnQSBoZWFydHkgYnJlYWQgbWFkZSB3aXRoIHdob2xlIHdoZWF0IGZsb3VyIGFuZCBwYWNrZWQgd2l0aCBudXRyaXRpb3VzIGdyYWlucy4nLFxuICAgICAgd2hvbGVHcmFpbkxvYWZcbiAgICApXG4gICk7XG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnQ2hhbGxhaCcsXG4gICAgICAnJDcuOTknLFxuICAgICAgJ0EgYnJhaWRlZCBKZXdpc2ggYnJlYWQgd2l0aCBhIHNsaWdodGx5IHN3ZWV0IHRhc3RlLicsXG4gICAgICBjaGFsbGFoXG4gICAgKVxuICApO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbXM7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhlYWRlckluaXQgfSBmcm9tICcuL2hvbWVwYWdlJztcbmltcG9ydCBpdGVtcyBmcm9tICcuL21lbnVJdGVtcyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbm1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGhlYWRlckluaXQoKTtcbiAgZGlzcGxheU1lbnUoKTtcbiAgY29udGVudC5hcHBlbmQobWVudUhlYWRlciwgbWFpbik7XG59XG5cbmNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWhlYWRlcicpO1xuKGZ1bmN0aW9uIG1lbnVIZWFkZXJJbml0KCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnQlJFQURTIE1FTlUnO1xuICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmUuY2xhc3NOYW1lID0gJ2xpbmUnO1xuICBtZW51SGVhZGVyLmFwcGVuZChoZWFkZXIsIGxpbmUpO1xufSkoKTtcblxuZnVuY3Rpb24gZGlzcGxheU1lbnUoKSB7XG4gIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICBjb25zdCBpdGVtSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbUhvbGRlci5jbGFzc05hbWUgPSAnbWVudS1pdGVtJztcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EZXRhaWxzLmNsYXNzTmFtZSA9ICdpdGVtLWRldGFpbHMnO1xuICAgIGNvbnN0IGl0ZW1QaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBpdGVtUGljLnNyYyA9IGl0ZW0ucGljdHVyZTtcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgaXRlbU5hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuICAgIGl0ZW1QcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xuICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICBpdGVtRGVzYy5jbGFzc05hbWUgPSAnZGVzYyc7XG5cbiAgICBpdGVtRGV0YWlscy5hcHBlbmQoaXRlbU5hbWUsIGl0ZW1QcmljZSwgaXRlbURlc2MpO1xuICAgIGl0ZW1Ib2xkZXIuYXBwZW5kKGl0ZW1QaWMsIGl0ZW1EZXRhaWxzKTtcbiAgICBtYWluLmFwcGVuZChpdGVtSG9sZGVyKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==