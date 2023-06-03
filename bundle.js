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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --burnt-sienna: hsla(12, 63%, 60%, 1);\n  --black: hsla(0, 0%, 0%, 1);\n  --fawn: hsla(30, 75%, 65%, 1);\n  --sandy-brown: hsla(30, 98%, 63%, 1);\n  --navajo-white: hsla(35, 94%, 86%, 1);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  user-select: none;\n  transition: 0.1s ease-in;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--navajo-white);\n  font-family: 'Prompt', sans-serif;\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nmain,\nheader,\n#menu-header {\n  padding: 0px 180px;\n}\n\nmain,\nheader {\n  margin: 45px 0;\n}\n\nheader ul li,\nmain button,\n.headline p {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n/* header */\nheader {\n  display: flex;\n  justify-content: space-between;\n}\n\nheader ul {\n  display: flex;\n  list-style: none;\n  padding-top: 10px;\n  gap: 30px;\n}\n\nheader ul li:hover {\n  color: var(--sandy-brown);\n}\n\nheader .active-page {\n  border: 1.8px solid var(--sandy-brown);\n}\n\nheader img {\n  width: 70px;\n  border: 5px dashed var(--burnt-sienna);\n  border-radius: 20px;\n  padding: 10px;\n}\n\nheader img:hover,\n.menu-item img:hover {\n  border-color: var(--sandy-brown);\n}\n\n/* main */\nmain {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.text > h1:first-child,\n.headline h1:nth-child(2),\n#menu-header,\n#contact-header {\n  color: var(--burnt-sienna);\n}\n\n.text > h1:first-child {\n  font-size: 70px;\n}\n\n.line {\n  width: 200px;\n  height: 4px;\n  background-color: #000;\n}\n\n.line,\n.headline p {\n  margin: 20px 0;\n}\n\n.headline h1 {\n  font-size: 60px;\n  line-height: 1;\n}\n\n.headline p {\n  max-width: 780px;\n  text-align: justify;\n  line-height: 1.5;\n}\n\nmain button {\n  font-weight: bold;\n  color: white;\n  background-color: var(--burnt-sienna);\n  font-family: inherit;\n  padding: 10px 35px;\n  border: 0;\n  border-radius: 30px;\n}\n\nmain button:hover {\n  background-color: var(--sandy-brown);\n}\n\n/* MENUPAGE */\n\n#menu-header,\n#contact-header {\n  line-height: 0.8;\n  font-size: 2em;\n}\n\nmain#menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  grid-gap: 15px 50px;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.menu-item {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 15px;\n  height: 100%;\n  padding: 10px;\n  border-bottom: 1px solid var(--black);\n  border-top: 1px solid var(--black);\n\n  align-items: center;\n}\n\n.menu-item:hover {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 0px 0px;\n}\n\n.menu-item img {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  border-radius: 20px;\n  border: 4px dashed var(--burnt-sienna);\n\n  object-fit: cover;\n}\n\n.menu-item .name {\n  font-size: 20px;\n}\n\n.menu-item .price {\n  margin-top: 3px;\n  font-size: 18px;\n}\n\n/* CONTACT */\n#contact {\n  margin-left: 50px;\n  display: grid;\n  gap: 1rem 50px;\n  grid-template-columns: 1fr 1fr;\n}\n\n#contact-header {\n  grid-column: span 2;\n}\n\nform {\n  grid-row: span 2;\n  border: 1.5px solid var(--black);\n  padding: 80px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nform input {\n  color: var(--sandy-brown);\n  font-family: inherit;\n  font-size: 20px;\n  border: none;\n  border-bottom: 1px solid var(--black);\n  background-color: var(--navajo-white);\n  margin: 10px;\n}\n\nform button {\n  margin-top: 50px;\n  font-size: 20px;\n}\n\n*:focus-visible {\n  outline: none;\n}\n\n.contact-details h2 {\n  font-size: 2rem;\n}\n\n.contact-details p {\n  font-size: 20px;\n}\n\n.social-media img {\n  padding: 10px;\n  border-radius: 15px;\n  max-height: 45px;\n}\n\n.social-media img:hover {\n  background-color: var(--sandy-brown);\n}\n\n.social-media {\n  display: flex;\n  align-self: flex-end;\n  padding-bottom: 15px;\n  gap: 15px;\n}\n\n/* footer */\nfooter {\n  font-size: 15px;\n  width: 100%;\n  text-align: center;\n  margin-top: auto;\n  padding-bottom: 1%;\n}\n\nfooter a {\n  font-weight: 500;\n  text-decoration: none;\n  color: var(--burnt-sienna);\n}\n\nfooter a:hover {\n  color: var(--sandy-brown);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700&display=swap');\n\n:root {\n  --burnt-sienna: hsla(12, 63%, 60%, 1);\n  --black: hsla(0, 0%, 0%, 1);\n  --fawn: hsla(30, 75%, 65%, 1);\n  --sandy-brown: hsla(30, 98%, 63%, 1);\n  --navajo-white: hsla(35, 94%, 86%, 1);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  user-select: none;\n  transition: 0.1s ease-in;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--navajo-white);\n  font-family: 'Prompt', sans-serif;\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nmain,\nheader,\n#menu-header {\n  padding: 0px 180px;\n}\n\nmain,\nheader {\n  margin: 45px 0;\n}\n\nheader ul li,\nmain button,\n.headline p {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n/* header */\nheader {\n  display: flex;\n  justify-content: space-between;\n}\n\nheader ul {\n  display: flex;\n  list-style: none;\n  padding-top: 10px;\n  gap: 30px;\n}\n\nheader ul li:hover {\n  color: var(--sandy-brown);\n}\n\nheader .active-page {\n  border: 1.8px solid var(--sandy-brown);\n}\n\nheader img {\n  width: 70px;\n  border: 5px dashed var(--burnt-sienna);\n  border-radius: 20px;\n  padding: 10px;\n}\n\nheader img:hover,\n.menu-item img:hover {\n  border-color: var(--sandy-brown);\n}\n\n/* main */\nmain {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.text > h1:first-child,\n.headline h1:nth-child(2),\n#menu-header,\n#contact-header {\n  color: var(--burnt-sienna);\n}\n\n.text > h1:first-child {\n  font-size: 70px;\n}\n\n.line {\n  width: 200px;\n  height: 4px;\n  background-color: #000;\n}\n\n.line,\n.headline p {\n  margin: 20px 0;\n}\n\n.headline h1 {\n  font-size: 60px;\n  line-height: 1;\n}\n\n.headline p {\n  max-width: 780px;\n  text-align: justify;\n  line-height: 1.5;\n}\n\nmain button {\n  font-weight: bold;\n  color: white;\n  background-color: var(--burnt-sienna);\n  font-family: inherit;\n  padding: 10px 35px;\n  border: 0;\n  border-radius: 30px;\n}\n\nmain button:hover {\n  background-color: var(--sandy-brown);\n}\n\n/* MENUPAGE */\n\n#menu-header,\n#contact-header {\n  line-height: 0.8;\n  font-size: 2em;\n}\n\nmain#menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));\n  grid-gap: 15px 50px;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.menu-item {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 15px;\n  height: 100%;\n  padding: 10px;\n  border-bottom: 1px solid var(--black);\n  border-top: 1px solid var(--black);\n\n  align-items: center;\n}\n\n.menu-item:hover {\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 0px 0px;\n}\n\n.menu-item img {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  border-radius: 20px;\n  border: 4px dashed var(--burnt-sienna);\n\n  object-fit: cover;\n}\n\n.menu-item .name {\n  font-size: 20px;\n}\n\n.menu-item .price {\n  margin-top: 3px;\n  font-size: 18px;\n}\n\n/* CONTACT */\n#contact {\n  margin-left: 50px;\n  display: grid;\n  gap: 1rem 50px;\n  grid-template-columns: 1fr 1fr;\n}\n\n#contact-header {\n  grid-column: span 2;\n}\n\nform {\n  grid-row: span 2;\n  border: 1.5px solid var(--black);\n  padding: 80px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nform input {\n  color: var(--sandy-brown);\n  font-family: inherit;\n  font-size: 20px;\n  border: none;\n  border-bottom: 1px solid var(--black);\n  background-color: var(--navajo-white);\n  margin: 10px;\n}\n\nform button {\n  margin-top: 50px;\n  font-size: 20px;\n}\n\n*:focus-visible {\n  outline: none;\n}\n\n.contact-details h2 {\n  font-size: 2rem;\n}\n\n.contact-details p {\n  font-size: 20px;\n}\n\n.social-media img {\n  padding: 10px;\n  border-radius: 15px;\n  max-height: 45px;\n}\n\n.social-media img:hover {\n  background-color: var(--sandy-brown);\n}\n\n.social-media {\n  display: flex;\n  align-self: flex-end;\n  padding-bottom: 15px;\n  gap: 15px;\n}\n\n/* footer */\nfooter {\n  font-size: 15px;\n  width: 100%;\n  text-align: center;\n  margin-top: auto;\n  padding-bottom: 1%;\n}\n\nfooter a {\n  font-weight: 500;\n  text-decoration: none;\n  color: var(--burnt-sienna);\n}\n\nfooter a:hover {\n  color: var(--sandy-brown);\n}\n"],"sourceRoot":""}]);
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





const content = document.querySelector('div#content');

function init() {
  headerInit();
  content.append(main);
}

const header = document.createElement('header');
const icon = new Image();
const navbar = document.createElement('ul');
const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');

function headerInit() {
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

const main = document.createElement('main');
(function mainInit() {
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

  main.append(mainText, bigImg);
})();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudUl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJvbXB0OndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1idXJudC1zaWVubmE6IGhzbGEoMTIsIDYzJSwgNjAlLCAxKTtcXG4gIC0tYmxhY2s6IGhzbGEoMCwgMCUsIDAlLCAxKTtcXG4gIC0tZmF3bjogaHNsYSgzMCwgNzUlLCA2NSUsIDEpO1xcbiAgLS1zYW5keS1icm93bjogaHNsYSgzMCwgOTglLCA2MyUsIDEpO1xcbiAgLS1uYXZham8td2hpdGU6IGhzbGEoMzUsIDk0JSwgODYlLCAxKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZham8td2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6ICdQcm9tcHQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubWFpbixcXG5oZWFkZXIsXFxuI21lbnUtaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDBweCAxODBweDtcXG59XFxuXFxubWFpbixcXG5oZWFkZXIge1xcbiAgbWFyZ2luOiA0NXB4IDA7XFxufVxcblxcbmhlYWRlciB1bCBsaSxcXG5tYWluIGJ1dHRvbixcXG4uaGVhZGxpbmUgcCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbmhlYWRlciB1bCBsaTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG5oZWFkZXIgLmFjdGl2ZS1wYWdlIHtcXG4gIGJvcmRlcjogMS44cHggc29saWQgdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgYm9yZGVyOiA1cHggZGFzaGVkIHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuaGVhZGVyIGltZzpob3ZlcixcXG4ubWVudS1pdGVtIGltZzpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuLyogbWFpbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0ID4gaDE6Zmlyc3QtY2hpbGQsXFxuLmhlYWRsaW5lIGgxOm50aC1jaGlsZCgyKSxcXG4jbWVudS1oZWFkZXIsXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcbn1cXG5cXG4udGV4dCA+IGgxOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogNzBweDtcXG59XFxuXFxuLmxpbmUge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubGluZSxcXG4uaGVhZGxpbmUgcCB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLmhlYWRsaW5lIGgxIHtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uaGVhZGxpbmUgcCB7XFxuICBtYXgtd2lkdGg6IDc4MHB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbm1haW4gYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgcGFkZGluZzogMTBweCAzNXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxubWFpbiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG4vKiBNRU5VUEFHRSAqL1xcblxcbiNtZW51LWhlYWRlcixcXG4jY29udGFjdC1oZWFkZXIge1xcbiAgbGluZS1oZWlnaHQ6IDAuODtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG5tYWluI21lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQ1MHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAxNXB4IDUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBnYXA6IDE1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDBweCAwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0gaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiA0cHggZGFzaGVkIHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLm1lbnUtaXRlbSAubmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0gLnByaWNlIHtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLyogQ09OVEFDVCAqL1xcbiNjb250YWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbSA1MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jY29udGFjdC1oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuZm9ybSB7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBwYWRkaW5nOiA4MHB4IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmFqby13aGl0ZSk7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbio6Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY29udGFjdC1kZXRhaWxzIGgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtZGV0YWlscyBwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYSBpbWcge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXgtaGVpZ2h0OiA0NXB4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhIGltZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBwYWRkaW5nLWJvdHRvbTogMSU7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUNB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QzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByb21wdDp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tYnVybnQtc2llbm5hOiBoc2xhKDEyLCA2MyUsIDYwJSwgMSk7XFxuICAtLWJsYWNrOiBoc2xhKDAsIDAlLCAwJSwgMSk7XFxuICAtLWZhd246IGhzbGEoMzAsIDc1JSwgNjUlLCAxKTtcXG4gIC0tc2FuZHktYnJvd246IGhzbGEoMzAsIDk4JSwgNjMlLCAxKTtcXG4gIC0tbmF2YWpvLXdoaXRlOiBoc2xhKDM1LCA5NCUsIDg2JSwgMSk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YWpvLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiAnUHJvbXB0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbm1haW4sXFxuaGVhZGVyLFxcbiNtZW51LWhlYWRlciB7XFxuICBwYWRkaW5nOiAwcHggMTgwcHg7XFxufVxcblxcbm1haW4sXFxuaGVhZGVyIHtcXG4gIG1hcmdpbjogNDVweCAwO1xcbn1cXG5cXG5oZWFkZXIgdWwgbGksXFxubWFpbiBidXR0b24sXFxuLmhlYWRsaW5lIHAge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG5oZWFkZXIgdWwgbGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuaGVhZGVyIC5hY3RpdmUtcGFnZSB7XFxuICBib3JkZXI6IDEuOHB4IHNvbGlkIHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICB3aWR0aDogNzBweDtcXG4gIGJvcmRlcjogNXB4IGRhc2hlZCB2YXIoLS1idXJudC1zaWVubmEpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmhlYWRlciBpbWc6aG92ZXIsXFxuLm1lbnUtaXRlbSBpbWc6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbi8qIG1haW4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGV4dCA+IGgxOmZpcnN0LWNoaWxkLFxcbi5oZWFkbGluZSBoMTpudGgtY2hpbGQoMiksXFxuI21lbnUtaGVhZGVyLFxcbiNjb250YWN0LWhlYWRlciB7XFxuICBjb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXG59XFxuXFxuLnRleHQgPiBoMTpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDcwcHg7XFxufVxcblxcbi5saW5lIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuLmxpbmUsXFxuLmhlYWRsaW5lIHAge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5oZWFkbGluZSBoMSB7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmhlYWRsaW5lIHAge1xcbiAgbWF4LXdpZHRoOiA3ODBweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5tYWluIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDEwcHggMzVweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbm1haW4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuLyogTUVOVVBBR0UgKi9cXG5cXG4jbWVudS1oZWFkZXIsXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGxpbmUtaGVpZ2h0OiAwLjg7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxubWFpbiNtZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMTVweCA1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ2FwOiAxNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAwcHggMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogNHB4IGRhc2hlZCB2YXIoLS1idXJudC1zaWVubmEpO1xcblxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0gLm5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIC5wcmljZSB7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qIENPTlRBQ1QgKi9cXG4jY29udGFjdCB7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW0gNTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbmZvcm0ge1xcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgcGFkZGluZzogODBweCAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZham8td2hpdGUpO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4qOmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNvbnRhY3QtZGV0YWlscyBoMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250YWN0LWRldGFpbHMgcCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEgaW1nIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWF4LWhlaWdodDogNDVweDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYSBpbWc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgcGFkZGluZy1ib3R0b206IDElO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBob21lcGFnZUluaXQgZnJvbSAnLi9ob21lcGFnZSc7XG5pbXBvcnQgZmJMb2dvIGZyb20gJy4vYXNzZXRzL2ZhY2Vib29rLWFwcC1zeW1ib2wucG5nJztcbmltcG9ydCBpZ0xvZ28gZnJvbSAnLi9hc3NldHMvaW5zdGFncmFtLnBuZyc7XG5pbXBvcnQgdHd0TG9nbyBmcm9tICcuL2Fzc2V0cy90d2l0dGVyLnBuZyc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBob21lcGFnZUluaXQoKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0Jyk7XG4gIHRleHQucmVtb3ZlKCk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuICBjb250YWN0LmFwcGVuZChjb250YWN0SGVhZGVyLCBmb3JtLCBjb250YWN0RGV0YWlscywgc21Ib2xkZXIpO1xuICBtYWluLmFwcGVuZChjb250YWN0KTtcbn1cblxuY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaGVhZGVyJyk7XG4oZnVuY3Rpb24gY29udEhlYWRlckluaXQoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJztcbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lLmNsYXNzTmFtZSA9ICdsaW5lJztcbiAgY29udGFjdEhlYWRlci5hcHBlbmQoaGVhZGVyLCBsaW5lKTtcbn0pKCk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4oZnVuY3Rpb24gZm9ybUluaXQoKSB7XG4gIGNvbnN0IGlucHV0RnVsbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dEZ1bGxOYW1lLnR5cGUgPSAndGV4dCc7XG4gIGlucHV0RnVsbE5hbWUubmFtZSA9ICdmbmFtZSc7XG4gIGlucHV0RnVsbE5hbWUucGxhY2Vob2xkZXIgPSAnRnVsbCBOYW1lJztcbiAgY29uc3QgaW5wdXRFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0RW1haWwudHlwZSA9ICdlbWFpbCc7XG4gIGlucHV0RW1haWwubmFtZSA9ICdlbWFpbCc7XG4gIGlucHV0RW1haWwucGxhY2Vob2xkZXIgPSAnRS1tYWlsJztcbiAgY29uc3QgaW5wdXRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRNZXNzYWdlLnR5cGUgPSAndGV4dCc7XG4gIGlucHV0TWVzc2FnZS5uYW1lID0gJ21zZyc7XG4gIGlucHV0TWVzc2FnZS5wbGFjZWhvbGRlciA9ICdNZXNzYWdlJztcbiAgY29uc3QgaW5wdXRTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaW5wdXRTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgZm9ybS5hcHBlbmQoaW5wdXRGdWxsTmFtZSwgaW5wdXRFbWFpbCwgaW5wdXRNZXNzYWdlLCBpbnB1dFN1Ym1pdCk7XG59KSgpO1xuXG5jb25zdCBjb250YWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFjdERldGFpbHMuY2xhc3NOYW1lID0gJ2NvbnRhY3QtZGV0YWlscyc7XG4oZnVuY3Rpb24gY29udGFjdERldGFpbHNJbml0KCkge1xuICBjb25zdCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGJhc2VkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgYnREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb250YWN0VGV4dC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgYmFzZWRUZXh0LnRleHRDb250ZW50ID0gJ0Jhc2VkIGluJztcbiAgY3REZXRhaWxzLnRleHRDb250ZW50ID0gJ2ZvbGFmb2xhQGJyZWFkcy5jb20nO1xuICBidERldGFpbHMudGV4dENvbnRlbnQgPSAnTnVldmEgRWNpamEsIFBoaWxpcHBpbmVzJztcbiAgY29udGFjdERldGFpbHMuYXBwZW5kKGNvbnRhY3RUZXh0LCBjdERldGFpbHMsIGJhc2VkVGV4dCwgYnREZXRhaWxzKTtcbn0pKCk7XG5cbmNvbnN0IHNtSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zbUhvbGRlci5jbGFzc05hbWUgPSAnc29jaWFsLW1lZGlhJztcbihmdW5jdGlvbiBzb2NpYWxNZWRpYUluaXQoKSB7XG4gIGNvbnN0IGZiTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZmJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9mYWNlYm9vay5jb20nO1xuICBmYkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIGNvbnN0IGZiID0gbmV3IEltYWdlKCk7XG4gIGZiLnNyYyA9IGZiTG9nbztcbiAgZmJMaW5rLmFwcGVuZENoaWxkKGZiKTtcbiAgY29uc3QgaWdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBpZ0xpbmsuaHJlZiA9ICdodHRwczovL2luc3RhZ3JhbS5jb20nO1xuICBpZ0xpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIGNvbnN0IGlnID0gbmV3IEltYWdlKCk7XG4gIGlnLnNyYyA9IGlnTG9nbztcbiAgaWdMaW5rLmFwcGVuZENoaWxkKGlnKTtcbiAgY29uc3QgdHd0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgdHd0TGluay5ocmVmID0gJ2h0dHBzOi8vdHdpdHRlci5jb20nO1xuICB0d3RMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICBjb25zdCB0d3QgPSBuZXcgSW1hZ2UoKTtcbiAgdHd0LnNyYyA9IHR3dExvZ287XG4gIHR3dExpbmsuYXBwZW5kQ2hpbGQodHd0KTtcbiAgc21Ib2xkZXIuYXBwZW5kKHR3dExpbmssIGZiTGluaywgaWdMaW5rKTtcbn0pKCk7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNoYW5nZUNvbnRlbnQgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBmYXZpY29uIGZyb20gJy4vYXNzZXRzL3JvbGxpbmctcGluLnBuZyc7XG5pbXBvcnQgYmFza2V0IGZyb20gJy4vYXNzZXRzL2Jhc2tldC5wbmcnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgaGVhZGVySW5pdCgpO1xuICBjb250ZW50LmFwcGVuZChtYWluKTtcbn1cblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5jb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG5leHBvcnQgZnVuY3Rpb24gaGVhZGVySW5pdCgpIHtcbiAgaWNvbi5zcmMgPSBmYXZpY29uO1xuICBuYXZiYXIuY2xhc3NOYW1lID0gJ25hdmJhcic7XG4gIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIGhvbWUuY2xhc3NOYW1lID0gJ2hvbWUnO1xuICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51LmNsYXNzTmFtZSA9ICdtZW51JztcbiAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgY29udGFjdC5jbGFzc05hbWUgPSAnY29udGFjdCc7XG5cbiAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcbiAgaGVhZGVyLmFwcGVuZChpY29uLCBuYXZiYXIpO1xuICBuYXZiYXIuYXBwZW5kKGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xufVxuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuKGZ1bmN0aW9uIG1haW5Jbml0KCkge1xuICBjb25zdCBtYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluVGV4dC5jbGFzc05hbWUgPSAndGV4dCc7XG5cbiAgY29uc3QgYnVyZWR1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYnVyZWR1LmNsYXNzTmFtZSA9ICdidXJlZHUnO1xuICBidXJlZHUudGV4dENvbnRlbnQgPSAn44OW44Os44OJ44KlJztcblxuICBjb25zdCBiaWdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgYmlnSW1nLnNyYyA9IGJhc2tldDtcbiAgYmlnSW1nLmNsYXNzTmFtZSA9ICdob21lLWltZyc7XG5cbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lLmNsYXNzTmFtZSA9ICdsaW5lJztcblxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkbGluZS5jbGFzc05hbWUgPSAnaGVhZGxpbmUnO1xuICBjb25zdCBoZWFkT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZE9uZS50ZXh0Q29udGVudCA9ICdBIExPQUYgT0YgTE9WRSc7XG4gIGNvbnN0IGhlYWRUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkVHdvLnRleHRDb250ZW50ID0gJ0ZST00gVEhFIEJBS0VSWSBSRUFMTSc7XG4gIGNvbnN0IGhlYWRUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRUaHJlZS50ZXh0Q29udGVudCA9ICdGT1IgWU9VJztcblxuICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWxjb21lLmlubmVySFRNTCA9XG4gICAgJ1dlbGNvbWUgdG8gQlJFQURTLCBhIGdhc3Ryb25vbWljIGhhdmVuIHdoZXJlIGFydGlzYW5hbCBicmVhZHMgdGFrZSBjZW50ZXIgc3RhZ2UsIG9mZmVyaW5nIGEgZGVsZWN0YWJsZSBzeW1waG9ueSBvZiBmbGF2b3JzIGFuZCB0ZXh0dXJlcyBmb3IgYnJlYWQgZW50aHVzaWFzdHMuJztcblxuICBjb25zdCBicmRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnJkYnRuLnRleHRDb250ZW50ID0gJ0dldCBCcmVhZCc7XG4gIGJyZGJ0bi5jbGFzc05hbWUgPSAnZ2V0LWJyZWFkJztcbiAgaGVhZGxpbmUuYXBwZW5kKGhlYWRPbmUsIGhlYWRUd28sIGhlYWRUaHJlZSwgd2VsY29tZSwgYnJkYnRuKTtcbiAgbWFpblRleHQuYXBwZW5kKGJ1cmVkdSwgbGluZSwgaGVhZGxpbmUpO1xuXG4gIGJyZGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGFuZ2VDb250ZW50KCdNZW51Jyk7XG4gIH0pO1xuXG4gIG1haW4uYXBwZW5kKG1haW5UZXh0LCBiaWdJbWcpO1xufSkoKTtcbiIsImltcG9ydCBmYXZpY29uIGZyb20gJy4vYXNzZXRzL3JvbGxpbmctcGluLnBuZyc7XG5pbXBvcnQgaG9tZXBhZ2VJbml0IGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0IG1lbnVJbml0IGZyb20gJy4vbWVudXBhZ2UnO1xuaW1wb3J0IGNvbnRhY3RJbml0IGZyb20gJy4vY29udGFjdHBhZ2UuanMnO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlua1tyZWx+PSdpY29uJ11cIikuaHJlZiA9IGZhdmljb247XG5cbmhvbWVwYWdlSW5pdCgpO1xuZm9vdGVySW5pdCgpO1xuXG5sZXQgY3VycmVudFBhZ2UgPSAnaG9tZSc7XG5cbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcbmNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbmhyLmNsYXNzTmFtZSA9ICdhY3RpdmUtcGFnZSc7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1cnJlbnRQYWdlfWApLmFwcGVuZChocik7XG5cbm5hdmJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lICE9ICduYXZiYXInKSB7XG4gICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoaHIpO1xuICB9XG59KTtcbm5hdmJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCAhPSAnbmF2YmFyJykge1xuICAgIGUudGFyZ2V0LnJlbW92ZUNoaWxkKGhyKTtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1cnJlbnRQYWdlfWApLmFwcGVuZChocik7XG59KTtcblxubmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNoYW5nZUNvbnRlbnQoZS50YXJnZXQudGV4dENvbnRlbnQpKTtcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29udGVudChlKSB7XG4gIGlmIChjdXJyZW50UGFnZSAhPSAnaG9tZScgJiYgZSA9PT0gJ0hvbWUnKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgaG9tZXBhZ2VJbml0KCk7XG4gICAgY3VycmVudFBhZ2UgPSAnaG9tZSc7XG4gIH1cblxuICBpZiAoY3VycmVudFBhZ2UgIT0gJ21lbnUnICYmIGUgPT09ICdNZW51Jykge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIG1lbnVJbml0KCk7XG4gICAgY3VycmVudFBhZ2UgPSAnbWVudSc7XG4gIH1cblxuICBpZiAoY3VycmVudFBhZ2UgIT0gJ2NvbnRhY3QnICYmIGUgPT09ICdDb250YWN0IFVzJykge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNvbnRhY3RJbml0KCk7XG4gICAgY3VycmVudFBhZ2UgPSAnY29udGFjdCc7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjdXJyZW50UGFnZX1gKS5hcHBlbmQoaHIpO1xufVxuXG5mdW5jdGlvbiBmb290ZXJJbml0KCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjcmVkaXQuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9icmVhZCc7XG4gIGNyZWRpdC50YXJnZXQgPSAnX2JsYW5rJztcbiAgY3JlZGl0LnRleHRDb250ZW50ID0gJ0JyZWFkICYgU29jaWFsIE1lZGlhIEljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uJztcbiAgY29uc3QgY3JlZGl0QnV0TWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNyZWRpdEJ1dE1lLnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIzIGJ5IFBKJztcblxuICBmb290ZXIuYXBwZW5kKGNyZWRpdCwgY3JlZGl0QnV0TWUpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG4iLCJpbXBvcnQgYmFndWV0dGUgZnJvbSAnLi9hc3NldHMvYmFndWV0dGUuanBnJztcbmltcG9ydCBjaW5uYW1vblRvYXN0IGZyb20gJy4vYXNzZXRzL2Npbm5hbW9uVG9hc3QuanBnJztcbmltcG9ydCBzb3VyZG91Z2hCb3VsZSBmcm9tICcuL2Fzc2V0cy9zb3VyZG91Z2hCb3VsZS5qcGcnO1xuaW1wb3J0IGZvY2FjY2lhIGZyb20gJy4vYXNzZXRzL2ZvY2FjY2lhLmpwZyc7XG5pbXBvcnQgbmFhbiBmcm9tICcuL2Fzc2V0cy9uYWFuLmpwZyc7XG5pbXBvcnQgY2lhYmF0dGEgZnJvbSAnLi9hc3NldHMvY2lhYmF0dGEuanBnJztcbmltcG9ydCBwaXRhIGZyb20gJy4vYXNzZXRzL3BpdGEuanBnJztcbmltcG9ydCBicmlvY2hlIGZyb20gJy4vYXNzZXRzL2JyaW9jaGUuanBnJztcbmltcG9ydCB3aG9sZUdyYWluTG9hZiBmcm9tICcuL2Fzc2V0cy93aG9sZUdyYWluTG9hZi5qcGcnO1xuaW1wb3J0IGNoYWxsYWggZnJvbSAnLi9hc3NldHMvY2hhbGxhaC5qcGcnO1xuXG5jb25zdCBpdGVtcyA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIHBpY3R1cmUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHByaWNlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHBpY3R1cmUsXG4gIH07XG59XG5cbihmdW5jdGlvbiBhZGRJdGVtcygpIHtcbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdCYWd1ZXR0ZSBTYW5kd2ljaCcsXG4gICAgICAnJDguOTknLFxuICAgICAgJ0ZyZXNobHkgYmFrZWQgYmFndWV0dGUgZmlsbGVkIHdpdGggYSBjb21iaW5hdGlvbiBvZiBtZWF0cywgY2hlZXNlcywgYW5kIHZlZ2dpZXMuJyxcbiAgICAgIGJhZ3VldHRlXG4gICAgKVxuICApO1xuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ0Npbm5hbW9uIFJhaXNpbiBUb2FzdCcsXG4gICAgICAnJDMuOTknLFxuICAgICAgJ1NsaWNlcyBvZiB0b2FzdGVkIGJyZWFkLCBzcHJpbmtsZWQgd2l0aCBjaW5uYW1vbiBhbmQgdG9wcGVkIHdpdGggcGx1bXAgcmFpc2lucy4nLFxuICAgICAgY2lubmFtb25Ub2FzdFxuICAgIClcbiAgKTtcblxuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ1NvdXJkb3VnaCBCb3VsZScsXG4gICAgICAnJDYuOTknLFxuICAgICAgJ0Egcm91bmQgYXJ0aXNhbiBicmVhZCB3aXRoIGEgdGFuZ3kgZmxhdm9yIGFuZCBhIGNydXN0eSBleHRlcmlvci4nLFxuICAgICAgc291cmRvdWdoQm91bGVcbiAgICApXG4gICk7XG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnRm9jYWNjaWEnLFxuICAgICAgJyQ3Ljk5JyxcbiAgICAgICdBIGZsdWZmeSBhbmQgc2F2b3J5IEl0YWxpYW4gYnJlYWQgdG9wcGVkIHdpdGggaGVyYnMsIG9saXZlIG9pbCwgYW5kIHNlYSBzYWx0LicsXG4gICAgICBmb2NhY2NpYVxuICAgIClcbiAgKTtcbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdOYWFuIEJyZWFkJyxcbiAgICAgICckNS45OScsXG4gICAgICAnU29mdCBhbmQgcGlsbG93eSBJbmRpYW4gYnJlYWQgcGVyZmVjdCBmb3IgZGlwcGluZyBpbiBjdXJyaWVzIGFuZCBzYXVjZXMuJyxcbiAgICAgIG5hYW5cbiAgICApXG4gICk7XG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnQ2lhYmF0dGEnLFxuICAgICAgJyQ2Ljk5JyxcbiAgICAgICdBbiBJdGFsaWFuIGJyZWFkIHdpdGggYSBjaGV3eSB0ZXh0dXJlIGFuZCBsYXJnZSBhaXIgcG9ja2V0cywgaWRlYWwgZm9yIHNhbmR3aWNoZXMuJyxcbiAgICAgIGNpYWJhdHRhXG4gICAgKVxuICApO1xuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ1BpdGEgQnJlYWQnLFxuICAgICAgJyQ0Ljk5JyxcbiAgICAgICdUaGluIGFuZCBwb2NrZXRlZCBicmVhZCBjb21tb25seSB1c2VkIGluIE1lZGl0ZXJyYW5lYW4gYW5kIE1pZGRsZSBFYXN0ZXJuIGN1aXNpbmUuJyxcbiAgICAgIHBpdGFcbiAgICApXG4gICk7XG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnQnJpb2NoZScsXG4gICAgICAnJDUuOTknLFxuICAgICAgJ0EgcmljaCBhbmQgYnV0dGVyeSBicmVhZCBvZnRlbiB1c2VkIGZvciBtYWtpbmcgc3dlZXQgdHJlYXRzIGxpa2UgRnJlbmNoIHRvYXN0LicsXG4gICAgICBicmlvY2hlXG4gICAgKVxuICApO1xuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ1dob2xlIEdyYWluIExvYWYnLFxuICAgICAgJyQ2Ljk5JyxcbiAgICAgICdBIGhlYXJ0eSBicmVhZCBtYWRlIHdpdGggd2hvbGUgd2hlYXQgZmxvdXIgYW5kIHBhY2tlZCB3aXRoIG51dHJpdGlvdXMgZ3JhaW5zLicsXG4gICAgICB3aG9sZUdyYWluTG9hZlxuICAgIClcbiAgKTtcbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdDaGFsbGFoJyxcbiAgICAgICckNy45OScsXG4gICAgICAnQSBicmFpZGVkIEpld2lzaCBicmVhZCB3aXRoIGEgc2xpZ2h0bHkgc3dlZXQgdGFzdGUuJyxcbiAgICAgIGNoYWxsYWhcbiAgICApXG4gICk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpdGVtcztcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaGVhZGVySW5pdCB9IGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0IGl0ZW1zIGZyb20gJy4vbWVudUl0ZW1zJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xubWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgaGVhZGVySW5pdCgpO1xuICBkaXNwbGF5TWVudSgpO1xuICBjb250ZW50LmFwcGVuZChtZW51SGVhZGVyLCBtYWluKTtcbn1cblxuY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWVudUhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtaGVhZGVyJyk7XG4oZnVuY3Rpb24gbWVudUhlYWRlckluaXQoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdCUkVBRFMgTUVOVSc7XG4gIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGluZS5jbGFzc05hbWUgPSAnbGluZSc7XG4gIG1lbnVIZWFkZXIuYXBwZW5kKGhlYWRlciwgbGluZSk7XG59KSgpO1xuXG5mdW5jdGlvbiBkaXNwbGF5TWVudSgpIHtcbiAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xuICAgIGNvbnN0IGl0ZW1Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtSG9sZGVyLmNsYXNzTmFtZSA9ICdtZW51LWl0ZW0nO1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURldGFpbHMuY2xhc3NOYW1lID0gJ2l0ZW0tZGV0YWlscyc7XG4gICAgY29uc3QgaXRlbVBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGl0ZW1QaWMuc3JjID0gaXRlbS5waWN0dXJlO1xuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSAnbmFtZSc7XG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgaXRlbVByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XG4gICAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgIGl0ZW1EZXNjLmNsYXNzTmFtZSA9ICdkZXNjJztcblxuICAgIGl0ZW1EZXRhaWxzLmFwcGVuZChpdGVtTmFtZSwgaXRlbVByaWNlLCBpdGVtRGVzYyk7XG4gICAgaXRlbUhvbGRlci5hcHBlbmQoaXRlbVBpYywgaXRlbURldGFpbHMpO1xuICAgIG1haW4uYXBwZW5kKGl0ZW1Ib2xkZXIpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9