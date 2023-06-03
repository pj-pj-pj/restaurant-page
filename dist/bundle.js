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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --burnt-sienna: hsla(12, 63%, 60%, 1);\n  --black: hsla(0, 0%, 0%, 1);\n  --fawn: hsla(30, 75%, 65%, 1);\n  --sandy-brown: hsla(30, 98%, 63%, 1);\n  --navajo-white: hsla(35, 94%, 86%, 1);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  user-select: none;\n  transition: 0.1s ease-in;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--navajo-white);\n  font-family: 'Prompt', sans-serif;\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nmain,\nheader,\n#menu-header {\n  padding: 0px 180px;\n}\n\nmain,\nheader {\n  margin: 45px 0;\n}\n\nheader ul li,\nmain button,\n.headline p {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n/* header */\nheader {\n  display: flex;\n  justify-content: space-between;\n}\n\nheader ul {\n  display: flex;\n  list-style: none;\n  padding-top: 10px;\n  gap: 30px;\n}\n\nheader ul li:hover {\n  color: var(--sandy-brown);\n}\n\nheader .active-page {\n  border: 1.8px solid var(--sandy-brown);\n}\n\nheader img {\n  max-width: 70px;\n  border: 5px dashed var(--burnt-sienna);\n  border-radius: 20px;\n  padding: 10px;\n}\n\nheader img:hover,\n.menu-item img:hover {\n  border-color: var(--sandy-brown);\n}\n\n/* main */\nmain {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.text > h1:first-child,\n.headline h1:nth-child(2),\n#menu-header,\n#contact-header {\n  color: var(--burnt-sienna);\n}\n\n.text > h1:first-child {\n  font-size: 70px;\n}\n\n.line {\n  width: 200px;\n  height: 4px;\n  background-color: #000;\n}\n\n.line,\n.headline p {\n  margin: 20px 0;\n}\n\n.headline h1 {\n  font-size: 60px;\n  line-height: 1;\n}\n\n.headline p {\n  max-width: 780px;\n  text-align: justify;\n  line-height: 1.5;\n}\n\nmain button {\n  font-weight: bold;\n  color: white;\n  background-color: var(--burnt-sienna);\n  font-family: inherit;\n  padding: 10px 35px;\n  border: 0;\n  border-radius: 30px;\n}\n\nmain button:hover {\n  background-color: var(--sandy-brown);\n}\n\n/* MENUPAGE */\n\n#menu-header,\n#contact-header {\n  line-height: 0.8;\n  font-size: 2em;\n}\n\nmain#menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  grid-gap: 15px 50px;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.menu-item {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 15px;\n  height: 100%;\n  padding: 10px;\n  border-bottom: 1px solid var(--black);\n  border-top: 1px solid var(--black);\n\n  align-items: center;\n}\n\n.menu-item:hover {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 0px 0px;\n}\n\n.menu-item img {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  border-radius: 20px;\n  border: 4px dashed var(--burnt-sienna);\n\n  object-fit: cover;\n}\n\n.menu-item .name {\n  font-size: 20px;\n}\n\n.menu-item .price {\n  margin-top: 3px;\n  font-size: 18px;\n}\n\n/* CONTACT */\n#contact {\n  margin-left: 50px;\n  display: grid;\n  gap: 1rem 50px;\n  grid-template-columns: 1fr 1fr;\n}\n\n#contact-header {\n  grid-column: span 2;\n}\n\nform {\n  grid-row: span 2;\n  border: 1.5px solid var(--black);\n  padding: 80px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nform input {\n  color: var(--sandy-brown);\n  font-family: inherit;\n  font-size: 20px;\n  border: none;\n  border-bottom: 1px solid var(--black);\n  background-color: transparent;\n  margin: 10px;\n}\n\nform button {\n  margin-top: 50px;\n  font-size: 20px;\n}\n\n*:focus-visible {\n  outline: none;\n}\n\n.contact-details h2 {\n  font-size: 2rem;\n}\n\n.contact-details p {\n  font-size: 20px;\n}\n\n.social-media img {\n  padding: 10px;\n  border-radius: 15px;\n  max-height: 45px;\n}\n\n.social-media img:hover {\n  background-color: var(--sandy-brown);\n}\n\n.social-media {\n  display: flex;\n  align-self: flex-end;\n  padding-bottom: 15px;\n  gap: 15px;\n}\n\n/* footer */\nfooter {\n  font-size: 15px;\n  width: 100%;\n  text-align: center;\n  margin-top: auto;\n  padding-bottom: 2%;\n}\n\nfooter a {\n  font-weight: 500;\n  text-decoration: none;\n  color: var(--burnt-sienna);\n}\n\nfooter a:hover {\n  color: var(--sandy-brown);\n}\n\n@media (max-width: 1100px) {\n  /* home */\n  .home-img {\n    position: fixed;\n    z-index: -1;\n    left: 60%;\n    opacity: 0.7;\n  }\n}\n\n@media (max-width: 760px) {\n  /* home */\n  main,\n  header,\n  #menu-header {\n    margin: 0;\n    padding: 20px 15px;\n  }\n\n  header img {\n    max-width: 60px;\n  }\n\n  header ul li,\n  main button,\n  .headline p {\n    font-weight: 500;\n    font-size: 16px;\n  }\n\n  main {\n    justify-content: center;\n  }\n\n  .home-img {\n    opacity: 0.3;\n  }\n\n  footer {\n    font-size: 11px;\n  }\n\n  footer a {\n    color: inherit;\n  }\n\n  main#menu {\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    margin-top: -30px;\n  }\n\n  p.desc {\n    font-size: 13px;\n  }\n\n  #contact {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n  }\n\n  #contact h1 {\n    line-height: 1;\n  }\n\n  .contact-details {\n    text-align: center;\n  }\n\n  div.social-media {\n    align-self: center;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700&display=swap');\n\n:root {\n  --burnt-sienna: hsla(12, 63%, 60%, 1);\n  --black: hsla(0, 0%, 0%, 1);\n  --fawn: hsla(30, 75%, 65%, 1);\n  --sandy-brown: hsla(30, 98%, 63%, 1);\n  --navajo-white: hsla(35, 94%, 86%, 1);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  user-select: none;\n  transition: 0.1s ease-in;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--navajo-white);\n  font-family: 'Prompt', sans-serif;\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nmain,\nheader,\n#menu-header {\n  padding: 0px 180px;\n}\n\nmain,\nheader {\n  margin: 45px 0;\n}\n\nheader ul li,\nmain button,\n.headline p {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n/* header */\nheader {\n  display: flex;\n  justify-content: space-between;\n}\n\nheader ul {\n  display: flex;\n  list-style: none;\n  padding-top: 10px;\n  gap: 30px;\n}\n\nheader ul li:hover {\n  color: var(--sandy-brown);\n}\n\nheader .active-page {\n  border: 1.8px solid var(--sandy-brown);\n}\n\nheader img {\n  max-width: 70px;\n  border: 5px dashed var(--burnt-sienna);\n  border-radius: 20px;\n  padding: 10px;\n}\n\nheader img:hover,\n.menu-item img:hover {\n  border-color: var(--sandy-brown);\n}\n\n/* main */\nmain {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.text > h1:first-child,\n.headline h1:nth-child(2),\n#menu-header,\n#contact-header {\n  color: var(--burnt-sienna);\n}\n\n.text > h1:first-child {\n  font-size: 70px;\n}\n\n.line {\n  width: 200px;\n  height: 4px;\n  background-color: #000;\n}\n\n.line,\n.headline p {\n  margin: 20px 0;\n}\n\n.headline h1 {\n  font-size: 60px;\n  line-height: 1;\n}\n\n.headline p {\n  max-width: 780px;\n  text-align: justify;\n  line-height: 1.5;\n}\n\nmain button {\n  font-weight: bold;\n  color: white;\n  background-color: var(--burnt-sienna);\n  font-family: inherit;\n  padding: 10px 35px;\n  border: 0;\n  border-radius: 30px;\n}\n\nmain button:hover {\n  background-color: var(--sandy-brown);\n}\n\n/* MENUPAGE */\n\n#menu-header,\n#contact-header {\n  line-height: 0.8;\n  font-size: 2em;\n}\n\nmain#menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  grid-gap: 15px 50px;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.menu-item {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 15px;\n  height: 100%;\n  padding: 10px;\n  border-bottom: 1px solid var(--black);\n  border-top: 1px solid var(--black);\n\n  align-items: center;\n}\n\n.menu-item:hover {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 0px 0px;\n}\n\n.menu-item img {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  border-radius: 20px;\n  border: 4px dashed var(--burnt-sienna);\n\n  object-fit: cover;\n}\n\n.menu-item .name {\n  font-size: 20px;\n}\n\n.menu-item .price {\n  margin-top: 3px;\n  font-size: 18px;\n}\n\n/* CONTACT */\n#contact {\n  margin-left: 50px;\n  display: grid;\n  gap: 1rem 50px;\n  grid-template-columns: 1fr 1fr;\n}\n\n#contact-header {\n  grid-column: span 2;\n}\n\nform {\n  grid-row: span 2;\n  border: 1.5px solid var(--black);\n  padding: 80px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nform input {\n  color: var(--sandy-brown);\n  font-family: inherit;\n  font-size: 20px;\n  border: none;\n  border-bottom: 1px solid var(--black);\n  background-color: transparent;\n  margin: 10px;\n}\n\nform button {\n  margin-top: 50px;\n  font-size: 20px;\n}\n\n*:focus-visible {\n  outline: none;\n}\n\n.contact-details h2 {\n  font-size: 2rem;\n}\n\n.contact-details p {\n  font-size: 20px;\n}\n\n.social-media img {\n  padding: 10px;\n  border-radius: 15px;\n  max-height: 45px;\n}\n\n.social-media img:hover {\n  background-color: var(--sandy-brown);\n}\n\n.social-media {\n  display: flex;\n  align-self: flex-end;\n  padding-bottom: 15px;\n  gap: 15px;\n}\n\n/* footer */\nfooter {\n  font-size: 15px;\n  width: 100%;\n  text-align: center;\n  margin-top: auto;\n  padding-bottom: 2%;\n}\n\nfooter a {\n  font-weight: 500;\n  text-decoration: none;\n  color: var(--burnt-sienna);\n}\n\nfooter a:hover {\n  color: var(--sandy-brown);\n}\n\n@media (max-width: 1100px) {\n  /* home */\n  .home-img {\n    position: fixed;\n    z-index: -1;\n    left: 60%;\n    opacity: 0.7;\n  }\n}\n\n@media (max-width: 760px) {\n  /* home */\n  main,\n  header,\n  #menu-header {\n    margin: 0;\n    padding: 20px 15px;\n  }\n\n  header img {\n    max-width: 60px;\n  }\n\n  header ul li,\n  main button,\n  .headline p {\n    font-weight: 500;\n    font-size: 16px;\n  }\n\n  main {\n    justify-content: center;\n  }\n\n  .home-img {\n    opacity: 0.3;\n  }\n\n  footer {\n    font-size: 11px;\n  }\n\n  footer a {\n    color: inherit;\n  }\n\n  main#menu {\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    margin-top: -30px;\n  }\n\n  p.desc {\n    font-size: 13px;\n  }\n\n  #contact {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n  }\n\n  #contact h1 {\n    line-height: 1;\n  }\n\n  .contact-details {\n    text-align: center;\n  }\n\n  div.social-media {\n    align-self: center;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssd0JBQXdCLHlCQUF5QixLQUFLLHdCQUF3Qix5QkFBeUIsS0FBSyxHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlB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QUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudUl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJvbXB0OndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1idXJudC1zaWVubmE6IGhzbGEoMTIsIDYzJSwgNjAlLCAxKTtcXG4gIC0tYmxhY2s6IGhzbGEoMCwgMCUsIDAlLCAxKTtcXG4gIC0tZmF3bjogaHNsYSgzMCwgNzUlLCA2NSUsIDEpO1xcbiAgLS1zYW5keS1icm93bjogaHNsYSgzMCwgOTglLCA2MyUsIDEpO1xcbiAgLS1uYXZham8td2hpdGU6IGhzbGEoMzUsIDk0JSwgODYlLCAxKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZham8td2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6ICdQcm9tcHQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubWFpbixcXG5oZWFkZXIsXFxuI21lbnUtaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDBweCAxODBweDtcXG59XFxuXFxubWFpbixcXG5oZWFkZXIge1xcbiAgbWFyZ2luOiA0NXB4IDA7XFxufVxcblxcbmhlYWRlciB1bCBsaSxcXG5tYWluIGJ1dHRvbixcXG4uaGVhZGxpbmUgcCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbmhlYWRlciB1bCBsaTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG5oZWFkZXIgLmFjdGl2ZS1wYWdlIHtcXG4gIGJvcmRlcjogMS44cHggc29saWQgdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gIG1heC13aWR0aDogNzBweDtcXG4gIGJvcmRlcjogNXB4IGRhc2hlZCB2YXIoLS1idXJudC1zaWVubmEpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmhlYWRlciBpbWc6aG92ZXIsXFxuLm1lbnUtaXRlbSBpbWc6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbi8qIG1haW4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGV4dCA+IGgxOmZpcnN0LWNoaWxkLFxcbi5oZWFkbGluZSBoMTpudGgtY2hpbGQoMiksXFxuI21lbnUtaGVhZGVyLFxcbiNjb250YWN0LWhlYWRlciB7XFxuICBjb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXG59XFxuXFxuLnRleHQgPiBoMTpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDcwcHg7XFxufVxcblxcbi5saW5lIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuLmxpbmUsXFxuLmhlYWRsaW5lIHAge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5oZWFkbGluZSBoMSB7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmhlYWRsaW5lIHAge1xcbiAgbWF4LXdpZHRoOiA3ODBweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5tYWluIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDEwcHggMzVweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbm1haW4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuLyogTUVOVVBBR0UgKi9cXG5cXG4jbWVudS1oZWFkZXIsXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGxpbmUtaGVpZ2h0OiAwLjg7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxubWFpbiNtZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMTVweCA1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ2FwOiAxNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAwcHggMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogNHB4IGRhc2hlZCB2YXIoLS1idXJudC1zaWVubmEpO1xcblxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0gLm5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIC5wcmljZSB7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qIENPTlRBQ1QgKi9cXG4jY29udGFjdCB7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW0gNTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbmZvcm0ge1xcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgcGFkZGluZzogODBweCAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuKjpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jb250YWN0LWRldGFpbHMgaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdC1kZXRhaWxzIHAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhIGltZyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1heC1oZWlnaHQ6IDQ1cHg7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEgaW1nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICAvKiBob21lICovXFxuICAuaG9tZS1pbWcge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBsZWZ0OiA2MCU7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxuICAvKiBob21lICovXFxuICBtYWluLFxcbiAgaGVhZGVyLFxcbiAgI21lbnUtaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XFxuICB9XFxuXFxuICBoZWFkZXIgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xcbiAgfVxcblxcbiAgaGVhZGVyIHVsIGxpLFxcbiAgbWFpbiBidXR0b24sXFxuICAuaGVhZGxpbmUgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ob21lLWltZyB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gIH1cXG5cXG4gIGZvb3RlciBhIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICB9XFxuXFxuICBtYWluI21lbnUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xcbiAgfVxcblxcbiAgcC5kZXNjIHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgfVxcblxcbiAgI2NvbnRhY3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAjY29udGFjdCBoMSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtZGV0YWlscyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGRpdi5zb2NpYWwtbWVkaWEge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMkJBQTJCO0VB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LG9CQUFvQjtFQUNwQixTQUFTO0FBQ1g7O0FBRUEsV0FBVztBQUNYO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztFQUNUO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1Q7OztJQUdFLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOzs7SUFHRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsNERBQTREO0lBQzVELGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qcm9tcHQ6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWJ1cm50LXNpZW5uYTogaHNsYSgxMiwgNjMlLCA2MCUsIDEpO1xcbiAgLS1ibGFjazogaHNsYSgwLCAwJSwgMCUsIDEpO1xcbiAgLS1mYXduOiBoc2xhKDMwLCA3NSUsIDY1JSwgMSk7XFxuICAtLXNhbmR5LWJyb3duOiBoc2xhKDMwLCA5OCUsIDYzJSwgMSk7XFxuICAtLW5hdmFqby13aGl0ZTogaHNsYSgzNSwgOTQlLCA4NiUsIDEpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmFqby13aGl0ZSk7XFxuICBmb250LWZhbWlseTogJ1Byb21wdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluLFxcbmhlYWRlcixcXG4jbWVudS1oZWFkZXIge1xcbiAgcGFkZGluZzogMHB4IDE4MHB4O1xcbn1cXG5cXG5tYWluLFxcbmhlYWRlciB7XFxuICBtYXJnaW46IDQ1cHggMDtcXG59XFxuXFxuaGVhZGVyIHVsIGxpLFxcbm1haW4gYnV0dG9uLFxcbi5oZWFkbGluZSBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuaGVhZGVyIHVsIGxpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbmhlYWRlciAuYWN0aXZlLXBhZ2Uge1xcbiAgYm9yZGVyOiAxLjhweCBzb2xpZCB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgbWF4LXdpZHRoOiA3MHB4O1xcbiAgYm9yZGVyOiA1cHggZGFzaGVkIHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuaGVhZGVyIGltZzpob3ZlcixcXG4ubWVudS1pdGVtIGltZzpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuLyogbWFpbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0ID4gaDE6Zmlyc3QtY2hpbGQsXFxuLmhlYWRsaW5lIGgxOm50aC1jaGlsZCgyKSxcXG4jbWVudS1oZWFkZXIsXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcbn1cXG5cXG4udGV4dCA+IGgxOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG59XFxuXFxuLmxpbmUge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubGluZSxcXG4uaGVhZGxpbmUgcCB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLmhlYWRsaW5lIGgxIHtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uaGVhZGxpbmUgcCB7XFxuICBtYXgtd2lkdGg6IDc4MHB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbm1haW4gYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgcGFkZGluZzogMTBweCAzNXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxubWFpbiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG4vKiBNRU5VUEFHRSAqL1xcblxcbiNtZW51LWhlYWRlcixcXG4jY29udGFjdC1oZWFkZXIge1xcbiAgbGluZS1oZWlnaHQ6IDAuODtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG5tYWluI21lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQ1MHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAxNXB4IDUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBnYXA6IDE1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDBweCAwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0gaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiA0cHggZGFzaGVkIHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLm1lbnUtaXRlbSAubmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0gLnByaWNlIHtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLyogQ09OVEFDVCAqL1xcbiNjb250YWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbSA1MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jY29udGFjdC1oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuZm9ybSB7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBwYWRkaW5nOiA4MHB4IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4qOmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNvbnRhY3QtZGV0YWlscyBoMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250YWN0LWRldGFpbHMgcCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEgaW1nIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWF4LWhlaWdodDogNDVweDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYSBpbWc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIC8qIGhvbWUgKi9cXG4gIC5ob21lLWltZyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGxlZnQ6IDYwJTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC8qIGhvbWUgKi9cXG4gIG1haW4sXFxuICBoZWFkZXIsXFxuICAjbWVudS1oZWFkZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcXG4gIH1cXG5cXG4gIGhlYWRlciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDYwcHg7XFxuICB9XFxuXFxuICBoZWFkZXIgdWwgbGksXFxuICBtYWluIGJ1dHRvbixcXG4gIC5oZWFkbGluZSBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhvbWUtaW1nIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgfVxcblxcbiAgZm9vdGVyIGEge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gIH1cXG5cXG4gIG1haW4jbWVudSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XFxuICB9XFxuXFxuICBwLmRlc2Mge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICB9XFxuXFxuICAjY29udGFjdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gICNjb250YWN0IGgxIHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICB9XFxuXFxuICAuY29udGFjdC1kZXRhaWxzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgZGl2LnNvY2lhbC1tZWRpYSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGhvbWVwYWdlSW5pdCBmcm9tICcuL2hvbWVwYWdlJztcbmltcG9ydCBmYkxvZ28gZnJvbSAnLi9hc3NldHMvZmFjZWJvb2stYXBwLXN5bWJvbC5wbmcnO1xuaW1wb3J0IGlnTG9nbyBmcm9tICcuL2Fzc2V0cy9pbnN0YWdyYW0ucG5nJztcbmltcG9ydCB0d3RMb2dvIGZyb20gJy4vYXNzZXRzL3R3aXR0ZXIucG5nJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGhvbWVwYWdlSW5pdCgpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQnKTtcbiAgaWYgKHRleHQgIT09IG51bGwpIHtcbiAgICB0ZXh0LnJlbW92ZSgpO1xuICB9XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuICBjb250YWN0LmFwcGVuZChjb250YWN0SGVhZGVyLCBmb3JtLCBjb250YWN0RGV0YWlscywgc21Ib2xkZXIpO1xuICBtYWluLmFwcGVuZChjb250YWN0KTtcbn1cblxuY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaGVhZGVyJyk7XG4oZnVuY3Rpb24gY29udEhlYWRlckluaXQoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJztcbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lLmNsYXNzTmFtZSA9ICdsaW5lJztcbiAgY29udGFjdEhlYWRlci5hcHBlbmQoaGVhZGVyLCBsaW5lKTtcbn0pKCk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4oZnVuY3Rpb24gZm9ybUluaXQoKSB7XG4gIGNvbnN0IGlucHV0RnVsbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dEZ1bGxOYW1lLnR5cGUgPSAndGV4dCc7XG4gIGlucHV0RnVsbE5hbWUubmFtZSA9ICdmbmFtZSc7XG4gIGlucHV0RnVsbE5hbWUucGxhY2Vob2xkZXIgPSAnRnVsbCBOYW1lJztcbiAgY29uc3QgaW5wdXRFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0RW1haWwudHlwZSA9ICdlbWFpbCc7XG4gIGlucHV0RW1haWwubmFtZSA9ICdlbWFpbCc7XG4gIGlucHV0RW1haWwucGxhY2Vob2xkZXIgPSAnRS1tYWlsJztcbiAgY29uc3QgaW5wdXRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRNZXNzYWdlLnR5cGUgPSAndGV4dCc7XG4gIGlucHV0TWVzc2FnZS5uYW1lID0gJ21zZyc7XG4gIGlucHV0TWVzc2FnZS5wbGFjZWhvbGRlciA9ICdNZXNzYWdlJztcbiAgY29uc3QgaW5wdXRTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaW5wdXRTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgZm9ybS5hcHBlbmQoaW5wdXRGdWxsTmFtZSwgaW5wdXRFbWFpbCwgaW5wdXRNZXNzYWdlLCBpbnB1dFN1Ym1pdCk7XG59KSgpO1xuXG5jb25zdCBjb250YWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFjdERldGFpbHMuY2xhc3NOYW1lID0gJ2NvbnRhY3QtZGV0YWlscyc7XG4oZnVuY3Rpb24gY29udGFjdERldGFpbHNJbml0KCkge1xuICBjb25zdCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGJhc2VkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgYnREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb250YWN0VGV4dC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgYmFzZWRUZXh0LnRleHRDb250ZW50ID0gJ0Jhc2VkIGluJztcbiAgY3REZXRhaWxzLnRleHRDb250ZW50ID0gJ2ZvbGFmb2xhQGJyZWFkcy5jb20nO1xuICBidERldGFpbHMudGV4dENvbnRlbnQgPSAnTnVldmEgRWNpamEsIFBoaWxpcHBpbmVzJztcbiAgY29udGFjdERldGFpbHMuYXBwZW5kKGNvbnRhY3RUZXh0LCBjdERldGFpbHMsIGJhc2VkVGV4dCwgYnREZXRhaWxzKTtcbn0pKCk7XG5cbmNvbnN0IHNtSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zbUhvbGRlci5jbGFzc05hbWUgPSAnc29jaWFsLW1lZGlhJztcbihmdW5jdGlvbiBzb2NpYWxNZWRpYUluaXQoKSB7XG4gIGNvbnN0IGZiTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZmJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9mYWNlYm9vay5jb20nO1xuICBmYkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIGNvbnN0IGZiID0gbmV3IEltYWdlKCk7XG4gIGZiLnNyYyA9IGZiTG9nbztcbiAgZmJMaW5rLmFwcGVuZENoaWxkKGZiKTtcbiAgY29uc3QgaWdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBpZ0xpbmsuaHJlZiA9ICdodHRwczovL2luc3RhZ3JhbS5jb20nO1xuICBpZ0xpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIGNvbnN0IGlnID0gbmV3IEltYWdlKCk7XG4gIGlnLnNyYyA9IGlnTG9nbztcbiAgaWdMaW5rLmFwcGVuZENoaWxkKGlnKTtcbiAgY29uc3QgdHd0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgdHd0TGluay5ocmVmID0gJ2h0dHBzOi8vdHdpdHRlci5jb20nO1xuICB0d3RMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICBjb25zdCB0d3QgPSBuZXcgSW1hZ2UoKTtcbiAgdHd0LnNyYyA9IHR3dExvZ287XG4gIHR3dExpbmsuYXBwZW5kQ2hpbGQodHd0KTtcbiAgc21Ib2xkZXIuYXBwZW5kKHR3dExpbmssIGZiTGluaywgaWdMaW5rKTtcbn0pKCk7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNoYW5nZUNvbnRlbnQgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBmYXZpY29uIGZyb20gJy4vYXNzZXRzL3JvbGxpbmctcGluLnBuZyc7XG5pbXBvcnQgYmFza2V0IGZyb20gJy4vYXNzZXRzL2Jhc2tldC5wbmcnO1xuXG4vL2hlYWRlciBjb21wb25lbnRzXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbmNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5jb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuXG4gIGhlYWRlckluaXQoKTtcblxuICAvL21haW5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpblRleHQuY2xhc3NOYW1lID0gJ3RleHQnO1xuICBjb25zdCBidXJlZHUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBidXJlZHUuY2xhc3NOYW1lID0gJ2J1cmVkdSc7XG4gIGJ1cmVkdS50ZXh0Q29udGVudCA9ICfjg5bjg6zjg4njgqUnO1xuICBjb25zdCBiaWdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgYmlnSW1nLnNyYyA9IGJhc2tldDtcbiAgYmlnSW1nLmNsYXNzTmFtZSA9ICdob21lLWltZyc7XG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGluZS5jbGFzc05hbWUgPSAnbGluZSc7XG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRsaW5lLmNsYXNzTmFtZSA9ICdoZWFkbGluZSc7XG4gIGNvbnN0IGhlYWRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkT25lLnRleHRDb250ZW50ID0gJ0EgTE9BRiBPRiBMT1ZFJztcbiAgY29uc3QgaGVhZFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRUd28udGV4dENvbnRlbnQgPSAnRlJPTSBUSEUgQkFLRVJZIFJFQUxNJztcbiAgY29uc3QgaGVhZFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZFRocmVlLnRleHRDb250ZW50ID0gJ0ZPUiBZT1UnO1xuICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWxjb21lLmlubmVySFRNTCA9XG4gICAgJ1dlbGNvbWUgdG8gQlJFQURTLCBhIGdhc3Ryb25vbWljIGhhdmVuIHdoZXJlIGFydGlzYW5hbCBicmVhZHMgdGFrZSBjZW50ZXIgc3RhZ2UsIG9mZmVyaW5nIGEgZGVsZWN0YWJsZSBzeW1waG9ueSBvZiBmbGF2b3JzIGFuZCB0ZXh0dXJlcyBmb3IgYnJlYWQgZW50aHVzaWFzdHMuJztcbiAgY29uc3QgYnJkYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJyZGJ0bi50ZXh0Q29udGVudCA9ICdHZXQgQnJlYWQnO1xuICBicmRidG4uY2xhc3NOYW1lID0gJ2dldC1icmVhZCc7XG4gIGhlYWRsaW5lLmFwcGVuZChoZWFkT25lLCBoZWFkVHdvLCBoZWFkVGhyZWUsIHdlbGNvbWUsIGJyZGJ0bik7XG4gIG1haW5UZXh0LmFwcGVuZChidXJlZHUsIGxpbmUsIGhlYWRsaW5lKTtcblxuICBicmRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hhbmdlQ29udGVudCgnTWVudScpO1xuICB9KTtcblxuICBjb250ZW50LmFwcGVuZChtYWluKTtcbiAgbWFpbi5hcHBlbmQobWFpblRleHQsIGJpZ0ltZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXJJbml0KCkge1xuICAvL2hlYWRlclxuICBpY29uLnNyYyA9IGZhdmljb247XG4gIG5hdmJhci5jbGFzc05hbWUgPSAnbmF2YmFyJztcbiAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgaG9tZS5jbGFzc05hbWUgPSAnaG9tZSc7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG1lbnUuY2xhc3NOYW1lID0gJ21lbnUnO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICBjb250YWN0LmNsYXNzTmFtZSA9ICdjb250YWN0JztcblxuICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kKGljb24sIG5hdmJhcik7XG4gIG5hdmJhci5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XG59IiwiaW1wb3J0IGZhdmljb24gZnJvbSAnLi9hc3NldHMvcm9sbGluZy1waW4ucG5nJztcbmltcG9ydCBob21lcGFnZUluaXQgZnJvbSAnLi9ob21lcGFnZSc7XG5pbXBvcnQgbWVudUluaXQgZnJvbSAnLi9tZW51cGFnZSc7XG5pbXBvcnQgY29udGFjdEluaXQgZnJvbSAnLi9jb250YWN0cGFnZS5qcyc7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW3JlbH49J2ljb24nXVwiKS5ocmVmID0gZmF2aWNvbjtcblxuaG9tZXBhZ2VJbml0KCk7XG5mb290ZXJJbml0KCk7XG5cbmxldCBjdXJyZW50UGFnZSA9ICdob21lJztcblxuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xuY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuaHIuY2xhc3NOYW1lID0gJ2FjdGl2ZS1wYWdlJztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1cnJlbnRQYWdlfWApLmFwcGVuZChocik7XG5cbm5hdmJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lICE9ICduYXZiYXInICYmICFlLnRhcmdldC5jb250YWlucyhocikpIHtcbiAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChocik7XG4gIH1cbn0pO1xuXG5uYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgIT0gJ25hdmJhcicgJiYgIWUudGFyZ2V0LmNvbnRhaW5zKGhyKSkge1xuICAgIGUudGFyZ2V0LnJlbW92ZUNoaWxkKGhyKTtcbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjdXJyZW50UGFnZX1gKS5hcHBlbmQoaHIpO1xufSk7XG5cbm5hdmJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjaGFuZ2VDb250ZW50KGUudGFyZ2V0LnRleHRDb250ZW50KSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb250ZW50KGUpIHtcbiAgaWYgKGN1cnJlbnRQYWdlICE9ICdob21lJyAmJiBlID09PSAnSG9tZScpIHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBob21lcGFnZUluaXQoKTtcbiAgICBjdXJyZW50UGFnZSA9ICdob21lJztcbiAgfVxuXG4gIGlmIChjdXJyZW50UGFnZSAhPSAnbWVudScgJiYgZSA9PT0gJ01lbnUnKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbWVudUluaXQoKTtcbiAgICBjdXJyZW50UGFnZSA9ICdtZW51JztcbiAgfVxuXG4gIGlmIChjdXJyZW50UGFnZSAhPSAnY29udGFjdCcgJiYgZSA9PT0gJ0NvbnRhY3QgVXMnKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY29udGFjdEluaXQoKTtcbiAgICBjdXJyZW50UGFnZSA9ICdjb250YWN0JztcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1cnJlbnRQYWdlfWApLmFwcGVuZChocik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9vdGVySW5pdCgpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY3JlZGl0LmhyZWYgPSAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvYnJlYWQnO1xuICBjcmVkaXQudGFyZ2V0ID0gJ19ibGFuayc7XG4gIGNyZWRpdC50ZXh0Q29udGVudCA9XG4gICAgJ0JyZWFkICYgU29jaWFsIE1lZGlhIEljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uJztcbiAgY29uc3QgY3JlZGl0QnV0TWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNyZWRpdEJ1dE1lLnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIzIGJ5IFBKJztcblxuICBmb290ZXIuYXBwZW5kKGNyZWRpdCwgY3JlZGl0QnV0TWUpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG4iLCJpbXBvcnQgYmFndWV0dGUgZnJvbSAnLi9hc3NldHMvYmFndWV0dGUuanBnJztcbmltcG9ydCBjaW5uYW1vblRvYXN0IGZyb20gJy4vYXNzZXRzL2Npbm5hbW9uVG9hc3QuanBnJztcbmltcG9ydCBzb3VyZG91Z2hCb3VsZSBmcm9tICcuL2Fzc2V0cy9zb3VyZG91Z2hCb3VsZS5qcGcnO1xuaW1wb3J0IGZvY2FjY2lhIGZyb20gJy4vYXNzZXRzL2ZvY2FjY2lhLmpwZyc7XG5pbXBvcnQgbmFhbiBmcm9tICcuL2Fzc2V0cy9uYWFuLmpwZyc7XG5pbXBvcnQgY2lhYmF0dGEgZnJvbSAnLi9hc3NldHMvY2lhYmF0dGEuanBnJztcbmltcG9ydCBwaXRhIGZyb20gJy4vYXNzZXRzL3BpdGEuanBnJztcbmltcG9ydCBicmlvY2hlIGZyb20gJy4vYXNzZXRzL2JyaW9jaGUuanBnJztcbmltcG9ydCB3aG9sZUdyYWluTG9hZiBmcm9tICcuL2Fzc2V0cy93aG9sZUdyYWluTG9hZi5qcGcnO1xuaW1wb3J0IGNoYWxsYWggZnJvbSAnLi9hc3NldHMvY2hhbGxhaC5qcGcnO1xuXG5jb25zdCBpdGVtcyA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIHBpY3R1cmUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHByaWNlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHBpY3R1cmUsXG4gIH07XG59XG5cbihmdW5jdGlvbiBhZGRJdGVtcygpIHtcbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdCYWd1ZXR0ZSBTYW5kd2ljaCcsXG4gICAgICAnJDguOTknLFxuICAgICAgJ0ZyZXNobHkgYmFrZWQgYmFndWV0dGUgZmlsbGVkIHdpdGggYSBjb21iaW5hdGlvbiBvZiBtZWF0cywgY2hlZXNlcywgYW5kIHZlZ2dpZXMuJyxcbiAgICAgIGJhZ3VldHRlXG4gICAgKVxuICApO1xuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ0Npbm5hbW9uIFJhaXNpbiBUb2FzdCcsXG4gICAgICAnJDMuOTknLFxuICAgICAgJ1NsaWNlcyBvZiB0b2FzdGVkIGJyZWFkLCBzcHJpbmtsZWQgd2l0aCBjaW5uYW1vbiBhbmQgdG9wcGVkIHdpdGggcGx1bXAgcmFpc2lucy4nLFxuICAgICAgY2lubmFtb25Ub2FzdFxuICAgIClcbiAgKTtcblxuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ1NvdXJkb3VnaCBCb3VsZScsXG4gICAgICAnJDYuOTknLFxuICAgICAgJ0Egcm91bmQgYXJ0aXNhbiBicmVhZCB3aXRoIGEgdGFuZ3kgZmxhdm9yIGFuZCBhIGNydXN0eSBleHRlcmlvci4nLFxuICAgICAgc291cmRvdWdoQm91bGVcbiAgICApXG4gICk7XG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnRm9jYWNjaWEnLFxuICAgICAgJyQ3Ljk5JyxcbiAgICAgICdBIGZsdWZmeSBhbmQgc2F2b3J5IEl0YWxpYW4gYnJlYWQgdG9wcGVkIHdpdGggaGVyYnMsIG9saXZlIG9pbCwgYW5kIHNlYSBzYWx0LicsXG4gICAgICBmb2NhY2NpYVxuICAgIClcbiAgKTtcbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdOYWFuIEJyZWFkJyxcbiAgICAgICckNS45OScsXG4gICAgICAnU29mdCBhbmQgcGlsbG93eSBJbmRpYW4gYnJlYWQgcGVyZmVjdCBmb3IgZGlwcGluZyBpbiBjdXJyaWVzIGFuZCBzYXVjZXMuJyxcbiAgICAgIG5hYW5cbiAgICApXG4gICk7XG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnQ2lhYmF0dGEnLFxuICAgICAgJyQ2Ljk5JyxcbiAgICAgICdBbiBJdGFsaWFuIGJyZWFkIHdpdGggYSBjaGV3eSB0ZXh0dXJlIGFuZCBsYXJnZSBhaXIgcG9ja2V0cywgaWRlYWwgZm9yIHNhbmR3aWNoZXMuJyxcbiAgICAgIGNpYWJhdHRhXG4gICAgKVxuICApO1xuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ1BpdGEgQnJlYWQnLFxuICAgICAgJyQ0Ljk5JyxcbiAgICAgICdUaGluIGFuZCBwb2NrZXRlZCBicmVhZCBjb21tb25seSB1c2VkIGluIE1lZGl0ZXJyYW5lYW4gYW5kIE1pZGRsZSBFYXN0ZXJuIGN1aXNpbmUuJyxcbiAgICAgIHBpdGFcbiAgICApXG4gICk7XG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnQnJpb2NoZScsXG4gICAgICAnJDUuOTknLFxuICAgICAgJ0EgcmljaCBhbmQgYnV0dGVyeSBicmVhZCBvZnRlbiB1c2VkIGZvciBtYWtpbmcgc3dlZXQgdHJlYXRzIGxpa2UgRnJlbmNoIHRvYXN0LicsXG4gICAgICBicmlvY2hlXG4gICAgKVxuICApO1xuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ1dob2xlIEdyYWluIExvYWYnLFxuICAgICAgJyQ2Ljk5JyxcbiAgICAgICdBIGhlYXJ0eSBicmVhZCBtYWRlIHdpdGggd2hvbGUgd2hlYXQgZmxvdXIgYW5kIHBhY2tlZCB3aXRoIG51dHJpdGlvdXMgZ3JhaW5zLicsXG4gICAgICB3aG9sZUdyYWluTG9hZlxuICAgIClcbiAgKTtcbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdDaGFsbGFoJyxcbiAgICAgICckNy45OScsXG4gICAgICAnQSBicmFpZGVkIEpld2lzaCBicmVhZCB3aXRoIGEgc2xpZ2h0bHkgc3dlZXQgdGFzdGUuJyxcbiAgICAgIGNoYWxsYWhcbiAgICApXG4gICk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpdGVtcztcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaGVhZGVySW5pdCB9IGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0IGl0ZW1zIGZyb20gJy4vbWVudUl0ZW1zJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xubWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgaGVhZGVySW5pdCgpO1xuICBkaXNwbGF5TWVudSgpO1xuICBjb250ZW50LmFwcGVuZChtZW51SGVhZGVyLCBtYWluKTtcbn1cblxuY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudUhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtaGVhZGVyJyk7XG4oZnVuY3Rpb24gbWVudUhlYWRlckluaXQoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdCUkVBRFMgTUVOVSc7XG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGluZS5jbGFzc05hbWUgPSAnbGluZSc7XG4gIG1lbnVIZWFkZXIuYXBwZW5kKGhlYWRlciwgbGluZSk7XG59KSgpO1xuXG5mdW5jdGlvbiBkaXNwbGF5TWVudSgpIHtcbiAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xuICAgIGNvbnN0IGl0ZW1Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtSG9sZGVyLmNsYXNzTmFtZSA9ICdtZW51LWl0ZW0nO1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURldGFpbHMuY2xhc3NOYW1lID0gJ2l0ZW0tZGV0YWlscyc7XG4gICAgY29uc3QgaXRlbVBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGl0ZW1QaWMuc3JjID0gaXRlbS5waWN0dXJlO1xuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSAnbmFtZSc7XG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgaXRlbVByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XG4gICAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgIGl0ZW1EZXNjLmNsYXNzTmFtZSA9ICdkZXNjJztcblxuICAgIGl0ZW1EZXRhaWxzLmFwcGVuZChpdGVtTmFtZSwgaXRlbVByaWNlLCBpdGVtRGVzYyk7XG4gICAgaXRlbUhvbGRlci5hcHBlbmQoaXRlbVBpYywgaXRlbURldGFpbHMpO1xuICAgIG1haW4uYXBwZW5kKGl0ZW1Ib2xkZXIpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9