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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByb21wdDp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYnVybnQtc2llbm5hOiBoc2xhKDEyLCA2MyUsIDYwJSwgMSk7XFxuICAtLWJsYWNrOiBoc2xhKDAsIDAlLCAwJSwgMSk7XFxuICAtLWZhd246IGhzbGEoMzAsIDc1JSwgNjUlLCAxKTtcXG4gIC0tc2FuZHktYnJvd246IGhzbGEoMzAsIDk4JSwgNjMlLCAxKTtcXG4gIC0tbmF2YWpvLXdoaXRlOiBoc2xhKDM1LCA5NCUsIDg2JSwgMSk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YWpvLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiAnUHJvbXB0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbm1haW4sXFxuaGVhZGVyLFxcbiNtZW51LWhlYWRlciB7XFxuICBwYWRkaW5nOiAwcHggMTgwcHg7XFxufVxcblxcbm1haW4sXFxuaGVhZGVyIHtcXG4gIG1hcmdpbjogNDVweCAwO1xcbn1cXG5cXG5oZWFkZXIgdWwgbGksXFxubWFpbiBidXR0b24sXFxuLmhlYWRsaW5lIHAge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG5oZWFkZXIgdWwgbGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuaGVhZGVyIC5hY3RpdmUtcGFnZSB7XFxuICBib3JkZXI6IDEuOHB4IHNvbGlkIHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICB3aWR0aDogNzBweDtcXG4gIGJvcmRlcjogNXB4IGRhc2hlZCB2YXIoLS1idXJudC1zaWVubmEpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmhlYWRlciBpbWc6aG92ZXIsXFxuLm1lbnUtaXRlbSBpbWc6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbi8qIG1haW4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGV4dCA+IGgxOmZpcnN0LWNoaWxkLFxcbi5oZWFkbGluZSBoMTpudGgtY2hpbGQoMiksXFxuI21lbnUtaGVhZGVyLFxcbiNjb250YWN0LWhlYWRlciB7XFxuICBjb2xvcjogdmFyKC0tYnVybnQtc2llbm5hKTtcXG59XFxuXFxuLnRleHQgPiBoMTpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDcwcHg7XFxufVxcblxcbi5saW5lIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuLmxpbmUsXFxuLmhlYWRsaW5lIHAge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5oZWFkbGluZSBoMSB7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmhlYWRsaW5lIHAge1xcbiAgbWF4LXdpZHRoOiA3ODBweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5tYWluIGJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDEwcHggMzVweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbm1haW4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuLyogTUVOVVBBR0UgKi9cXG5cXG4jbWVudS1oZWFkZXIsXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGxpbmUtaGVpZ2h0OiAwLjg7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxubWFpbiNtZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0NTBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMTVweCA1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ2FwOiAxNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAwcHggMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogNHB4IGRhc2hlZCB2YXIoLS1idXJudC1zaWVubmEpO1xcblxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0gLm5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIC5wcmljZSB7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qIENPTlRBQ1QgKi9cXG4jY29udGFjdCB7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW0gNTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbmZvcm0ge1xcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgcGFkZGluZzogODBweCAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZham8td2hpdGUpO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4qOmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNvbnRhY3QtZGV0YWlscyBoMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250YWN0LWRldGFpbHMgcCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEgaW1nIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWF4LWhlaWdodDogNDVweDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYSBpbWc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgcGFkZGluZy1ib3R0b206IDElO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VB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QUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qcm9tcHQ6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWJ1cm50LXNpZW5uYTogaHNsYSgxMiwgNjMlLCA2MCUsIDEpO1xcbiAgLS1ibGFjazogaHNsYSgwLCAwJSwgMCUsIDEpO1xcbiAgLS1mYXduOiBoc2xhKDMwLCA3NSUsIDY1JSwgMSk7XFxuICAtLXNhbmR5LWJyb3duOiBoc2xhKDMwLCA5OCUsIDYzJSwgMSk7XFxuICAtLW5hdmFqby13aGl0ZTogaHNsYSgzNSwgOTQlLCA4NiUsIDEpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmFqby13aGl0ZSk7XFxuICBmb250LWZhbWlseTogJ1Byb21wdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluLFxcbmhlYWRlcixcXG4jbWVudS1oZWFkZXIge1xcbiAgcGFkZGluZzogMHB4IDE4MHB4O1xcbn1cXG5cXG5tYWluLFxcbmhlYWRlciB7XFxuICBtYXJnaW46IDQ1cHggMDtcXG59XFxuXFxuaGVhZGVyIHVsIGxpLFxcbm1haW4gYnV0dG9uLFxcbi5oZWFkbGluZSBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuaGVhZGVyIHVsIGxpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbmhlYWRlciAuYWN0aXZlLXBhZ2Uge1xcbiAgYm9yZGVyOiAxLjhweCBzb2xpZCB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgd2lkdGg6IDcwcHg7XFxuICBib3JkZXI6IDVweCBkYXNoZWQgdmFyKC0tYnVybnQtc2llbm5hKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5oZWFkZXIgaW1nOmhvdmVyLFxcbi5tZW51LWl0ZW0gaW1nOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cXG4vKiBtYWluICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRleHQgPiBoMTpmaXJzdC1jaGlsZCxcXG4uaGVhZGxpbmUgaDE6bnRoLWNoaWxkKDIpLFxcbiNtZW51LWhlYWRlcixcXG4jY29udGFjdC1oZWFkZXIge1xcbiAgY29sb3I6IHZhcigtLWJ1cm50LXNpZW5uYSk7XFxufVxcblxcbi50ZXh0ID4gaDE6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbn1cXG5cXG4ubGluZSB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5saW5lLFxcbi5oZWFkbGluZSBwIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4uaGVhZGxpbmUgaDEge1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5oZWFkbGluZSBwIHtcXG4gIG1heC13aWR0aDogNzgwcHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxubWFpbiBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAxMHB4IDM1cHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG5tYWluIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYW5keS1icm93bik7XFxufVxcblxcbi8qIE1FTlVQQUdFICovXFxuXFxuI21lbnUtaGVhZGVyLFxcbiNjb250YWN0LWhlYWRlciB7XFxuICBsaW5lLWhlaWdodDogMC44O1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbm1haW4jbWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDUwcHgsIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDE1cHggNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdhcDogMTVweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMHB4IDBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSBpbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDRweCBkYXNoZWQgdmFyKC0tYnVybnQtc2llbm5hKTtcXG5cXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ubWVudS1pdGVtIC5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSAucHJpY2Uge1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4vKiBDT05UQUNUICovXFxuI2NvbnRhY3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtIDUwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbiNjb250YWN0LWhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIHBhZGRpbmc6IDgwcHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YWpvLXdoaXRlKTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuKjpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jb250YWN0LWRldGFpbHMgaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdC1kZXRhaWxzIHAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhIGltZyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1heC1oZWlnaHQ6IDQ1cHg7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEgaW1nOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmR5LWJyb3duKTtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1idXJudC1zaWVubmEpO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2FuZHktYnJvd24pO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaG9tZXBhZ2VJbml0IGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0IGZiTG9nbyBmcm9tICcuL2Fzc2V0cy9mYWNlYm9vay1hcHAtc3ltYm9sLnBuZyc7XG5pbXBvcnQgaWdMb2dvIGZyb20gJy4vYXNzZXRzL2luc3RhZ3JhbS5wbmcnO1xuaW1wb3J0IHR3dExvZ28gZnJvbSAnLi9hc3NldHMvdHdpdHRlci5wbmcnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgaG9tZXBhZ2VJbml0KCk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpO1xuICBpZiAodGV4dCAhPT0gbnVsbCkge1xuICAgIHRleHQucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG4gIGNvbnRhY3QuYXBwZW5kKGNvbnRhY3RIZWFkZXIsIGZvcm0sIGNvbnRhY3REZXRhaWxzLCBzbUhvbGRlcik7XG4gIG1haW4uYXBwZW5kKGNvbnRhY3QpO1xufVxuXG5jb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWN0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1oZWFkZXInKTtcbihmdW5jdGlvbiBjb250SGVhZGVySW5pdCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QgVVMnO1xuICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpbmUuY2xhc3NOYW1lID0gJ2xpbmUnO1xuICBjb250YWN0SGVhZGVyLmFwcGVuZChoZWFkZXIsIGxpbmUpO1xufSkoKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbihmdW5jdGlvbiBmb3JtSW5pdCgpIHtcbiAgY29uc3QgaW5wdXRGdWxsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0RnVsbE5hbWUudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXRGdWxsTmFtZS5uYW1lID0gJ2ZuYW1lJztcbiAgaW5wdXRGdWxsTmFtZS5wbGFjZWhvbGRlciA9ICdGdWxsIE5hbWUnO1xuICBjb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRFbWFpbC50eXBlID0gJ2VtYWlsJztcbiAgaW5wdXRFbWFpbC5uYW1lID0gJ2VtYWlsJztcbiAgaW5wdXRFbWFpbC5wbGFjZWhvbGRlciA9ICdFLW1haWwnO1xuICBjb25zdCBpbnB1dE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dE1lc3NhZ2UudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXRNZXNzYWdlLm5hbWUgPSAnbXNnJztcbiAgaW5wdXRNZXNzYWdlLnBsYWNlaG9sZGVyID0gJ01lc3NhZ2UnO1xuICBjb25zdCBpbnB1dFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBpbnB1dFN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICBmb3JtLmFwcGVuZChpbnB1dEZ1bGxOYW1lLCBpbnB1dEVtYWlsLCBpbnB1dE1lc3NhZ2UsIGlucHV0U3VibWl0KTtcbn0pKCk7XG5cbmNvbnN0IGNvbnRhY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWN0RGV0YWlscy5jbGFzc05hbWUgPSAnY29udGFjdC1kZXRhaWxzJztcbihmdW5jdGlvbiBjb250YWN0RGV0YWlsc0luaXQoKSB7XG4gIGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgYmFzZWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBidERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnRhY3RUZXh0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBiYXNlZFRleHQudGV4dENvbnRlbnQgPSAnQmFzZWQgaW4nO1xuICBjdERldGFpbHMudGV4dENvbnRlbnQgPSAnZm9sYWZvbGFAYnJlYWRzLmNvbSc7XG4gIGJ0RGV0YWlscy50ZXh0Q29udGVudCA9ICdOdWV2YSBFY2lqYSwgUGhpbGlwcGluZXMnO1xuICBjb250YWN0RGV0YWlscy5hcHBlbmQoY29udGFjdFRleHQsIGN0RGV0YWlscywgYmFzZWRUZXh0LCBidERldGFpbHMpO1xufSkoKTtcblxuY29uc3Qgc21Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNtSG9sZGVyLmNsYXNzTmFtZSA9ICdzb2NpYWwtbWVkaWEnO1xuKGZ1bmN0aW9uIHNvY2lhbE1lZGlhSW5pdCgpIHtcbiAgY29uc3QgZmJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBmYkxpbmsuaHJlZiA9ICdodHRwczovL2ZhY2Vib29rLmNvbSc7XG4gIGZiTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgY29uc3QgZmIgPSBuZXcgSW1hZ2UoKTtcbiAgZmIuc3JjID0gZmJMb2dvO1xuICBmYkxpbmsuYXBwZW5kQ2hpbGQoZmIpO1xuICBjb25zdCBpZ0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGlnTGluay5ocmVmID0gJ2h0dHBzOi8vaW5zdGFncmFtLmNvbSc7XG4gIGlnTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgY29uc3QgaWcgPSBuZXcgSW1hZ2UoKTtcbiAgaWcuc3JjID0gaWdMb2dvO1xuICBpZ0xpbmsuYXBwZW5kQ2hpbGQoaWcpO1xuICBjb25zdCB0d3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICB0d3RMaW5rLmhyZWYgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbSc7XG4gIHR3dExpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIGNvbnN0IHR3dCA9IG5ldyBJbWFnZSgpO1xuICB0d3Quc3JjID0gdHd0TG9nbztcbiAgdHd0TGluay5hcHBlbmRDaGlsZCh0d3QpO1xuICBzbUhvbGRlci5hcHBlbmQodHd0TGluaywgZmJMaW5rLCBpZ0xpbmspO1xufSkoKTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY2hhbmdlQ29udGVudCB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IGZhdmljb24gZnJvbSAnLi9hc3NldHMvcm9sbGluZy1waW4ucG5nJztcbmltcG9ydCBiYXNrZXQgZnJvbSAnLi9hc3NldHMvYmFza2V0LnBuZyc7XG5cbi8vaGVhZGVyIGNvbXBvbmVudHNcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG5cbiAgaGVhZGVySW5pdCgpO1xuXG4gIC8vbWFpblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBtYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluVGV4dC5jbGFzc05hbWUgPSAndGV4dCc7XG4gIGNvbnN0IGJ1cmVkdSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGJ1cmVkdS5jbGFzc05hbWUgPSAnYnVyZWR1JztcbiAgYnVyZWR1LnRleHRDb250ZW50ID0gJ+ODluODrOODieOCpSc7XG4gIGNvbnN0IGJpZ0ltZyA9IG5ldyBJbWFnZSgpO1xuICBiaWdJbWcuc3JjID0gYmFza2V0O1xuICBiaWdJbWcuY2xhc3NOYW1lID0gJ2hvbWUtaW1nJztcbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lLmNsYXNzTmFtZSA9ICdsaW5lJztcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGxpbmUuY2xhc3NOYW1lID0gJ2hlYWRsaW5lJztcbiAgY29uc3QgaGVhZE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRPbmUudGV4dENvbnRlbnQgPSAnQSBMT0FGIE9GIExPVkUnO1xuICBjb25zdCBoZWFkVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZFR3by50ZXh0Q29udGVudCA9ICdGUk9NIFRIRSBCQUtFUlkgUkVBTE0nO1xuICBjb25zdCBoZWFkVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkVGhyZWUudGV4dENvbnRlbnQgPSAnRk9SIFlPVSc7XG4gIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdlbGNvbWUuaW5uZXJIVE1MID1cbiAgICAnV2VsY29tZSB0byBCUkVBRFMsIGEgZ2FzdHJvbm9taWMgaGF2ZW4gd2hlcmUgYXJ0aXNhbmFsIGJyZWFkcyB0YWtlIGNlbnRlciBzdGFnZSwgb2ZmZXJpbmcgYSBkZWxlY3RhYmxlIHN5bXBob255IG9mIGZsYXZvcnMgYW5kIHRleHR1cmVzIGZvciBicmVhZCBlbnRodXNpYXN0cy4nO1xuICBjb25zdCBicmRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnJkYnRuLnRleHRDb250ZW50ID0gJ0dldCBCcmVhZCc7XG4gIGJyZGJ0bi5jbGFzc05hbWUgPSAnZ2V0LWJyZWFkJztcbiAgaGVhZGxpbmUuYXBwZW5kKGhlYWRPbmUsIGhlYWRUd28sIGhlYWRUaHJlZSwgd2VsY29tZSwgYnJkYnRuKTtcbiAgbWFpblRleHQuYXBwZW5kKGJ1cmVkdSwgbGluZSwgaGVhZGxpbmUpO1xuXG4gIGJyZGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGFuZ2VDb250ZW50KCdNZW51Jyk7XG4gIH0pO1xuXG4gIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xuICBtYWluLmFwcGVuZChtYWluVGV4dCwgYmlnSW1nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlckluaXQoKSB7XG4gIC8vaGVhZGVyXG4gIGljb24uc3JjID0gZmF2aWNvbjtcbiAgbmF2YmFyLmNsYXNzTmFtZSA9ICduYXZiYXInO1xuICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBob21lLmNsYXNzTmFtZSA9ICdob21lJztcbiAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudS5jbGFzc05hbWUgPSAnbWVudSc7XG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gIGNvbnRhY3QuY2xhc3NOYW1lID0gJ2NvbnRhY3QnO1xuXG4gIGNvbnRlbnQuYXBwZW5kKGhlYWRlcik7XG4gIGhlYWRlci5hcHBlbmQoaWNvbiwgbmF2YmFyKTtcbiAgbmF2YmFyLmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcbn0iLCJpbXBvcnQgZmF2aWNvbiBmcm9tICcuL2Fzc2V0cy9yb2xsaW5nLXBpbi5wbmcnO1xuaW1wb3J0IGhvbWVwYWdlSW5pdCBmcm9tICcuL2hvbWVwYWdlJztcbmltcG9ydCBtZW51SW5pdCBmcm9tICcuL21lbnVwYWdlJztcbmltcG9ydCBjb250YWN0SW5pdCBmcm9tICcuL2NvbnRhY3RwYWdlLmpzJztcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbcmVsfj0naWNvbiddXCIpLmhyZWYgPSBmYXZpY29uO1xuXG5ob21lcGFnZUluaXQoKTtcbmZvb3RlckluaXQoKTtcblxubGV0IGN1cnJlbnRQYWdlID0gJ2hvbWUnO1xuXG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG5jb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5oci5jbGFzc05hbWUgPSAnYWN0aXZlLXBhZ2UnO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudFBhZ2V9YCkuYXBwZW5kKGhyKTtcblxubmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgIT0gJ25hdmJhcicgJiYgIWUudGFyZ2V0LmNvbnRhaW5zKGhyKSkge1xuICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGhyKTtcbiAgfVxufSk7XG5cbm5hdmJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCAhPSAnbmF2YmFyJyAmJiAhZS50YXJnZXQuY29udGFpbnMoaHIpKSB7XG4gICAgZS50YXJnZXQucmVtb3ZlQ2hpbGQoaHIpO1xuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2N1cnJlbnRQYWdlfWApLmFwcGVuZChocik7XG59KTtcblxubmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNoYW5nZUNvbnRlbnQoZS50YXJnZXQudGV4dENvbnRlbnQpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbnRlbnQoZSkge1xuICBpZiAoY3VycmVudFBhZ2UgIT0gJ2hvbWUnICYmIGUgPT09ICdIb21lJykge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGhvbWVwYWdlSW5pdCgpO1xuICAgIGN1cnJlbnRQYWdlID0gJ2hvbWUnO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRQYWdlICE9ICdtZW51JyAmJiBlID09PSAnTWVudScpIHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBtZW51SW5pdCgpO1xuICAgIGN1cnJlbnRQYWdlID0gJ21lbnUnO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRQYWdlICE9ICdjb250YWN0JyAmJiBlID09PSAnQ29udGFjdCBVcycpIHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjb250YWN0SW5pdCgpO1xuICAgIGN1cnJlbnRQYWdlID0gJ2NvbnRhY3QnO1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudFBhZ2V9YCkuYXBwZW5kKGhyKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb290ZXJJbml0KCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjcmVkaXQuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9icmVhZCc7XG4gIGNyZWRpdC50YXJnZXQgPSAnX2JsYW5rJztcbiAgY3JlZGl0LnRleHRDb250ZW50ID1cbiAgICAnQnJlYWQgJiBTb2NpYWwgTWVkaWEgSWNvbnMgY3JlYXRlZCBieSBGcmVlcGlrIC0gRmxhdGljb24nO1xuICBjb25zdCBjcmVkaXRCdXRNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY3JlZGl0QnV0TWUudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IMKpIDIwMjMgYnkgUEonO1xuXG4gIGZvb3Rlci5hcHBlbmQoY3JlZGl0LCBjcmVkaXRCdXRNZSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cbiIsImltcG9ydCBiYWd1ZXR0ZSBmcm9tICcuL2Fzc2V0cy9iYWd1ZXR0ZS5qcGcnO1xuaW1wb3J0IGNpbm5hbW9uVG9hc3QgZnJvbSAnLi9hc3NldHMvY2lubmFtb25Ub2FzdC5qcGcnO1xuaW1wb3J0IHNvdXJkb3VnaEJvdWxlIGZyb20gJy4vYXNzZXRzL3NvdXJkb3VnaEJvdWxlLmpwZyc7XG5pbXBvcnQgZm9jYWNjaWEgZnJvbSAnLi9hc3NldHMvZm9jYWNjaWEuanBnJztcbmltcG9ydCBuYWFuIGZyb20gJy4vYXNzZXRzL25hYW4uanBnJztcbmltcG9ydCBjaWFiYXR0YSBmcm9tICcuL2Fzc2V0cy9jaWFiYXR0YS5qcGcnO1xuaW1wb3J0IHBpdGEgZnJvbSAnLi9hc3NldHMvcGl0YS5qcGcnO1xuaW1wb3J0IGJyaW9jaGUgZnJvbSAnLi9hc3NldHMvYnJpb2NoZS5qcGcnO1xuaW1wb3J0IHdob2xlR3JhaW5Mb2FmIGZyb20gJy4vYXNzZXRzL3dob2xlR3JhaW5Mb2FmLmpwZyc7XG5pbXBvcnQgY2hhbGxhaCBmcm9tICcuL2Fzc2V0cy9jaGFsbGFoLmpwZyc7XG5cbmNvbnN0IGl0ZW1zID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgcGljdHVyZSkge1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgcHJpY2UsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgcGljdHVyZSxcbiAgfTtcbn1cblxuKGZ1bmN0aW9uIGFkZEl0ZW1zKCkge1xuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ0JhZ3VldHRlIFNhbmR3aWNoJyxcbiAgICAgICckOC45OScsXG4gICAgICAnRnJlc2hseSBiYWtlZCBiYWd1ZXR0ZSBmaWxsZWQgd2l0aCBhIGNvbWJpbmF0aW9uIG9mIG1lYXRzLCBjaGVlc2VzLCBhbmQgdmVnZ2llcy4nLFxuICAgICAgYmFndWV0dGVcbiAgICApXG4gICk7XG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnQ2lubmFtb24gUmFpc2luIFRvYXN0JyxcbiAgICAgICckMy45OScsXG4gICAgICAnU2xpY2VzIG9mIHRvYXN0ZWQgYnJlYWQsIHNwcmlua2xlZCB3aXRoIGNpbm5hbW9uIGFuZCB0b3BwZWQgd2l0aCBwbHVtcCByYWlzaW5zLicsXG4gICAgICBjaW5uYW1vblRvYXN0XG4gICAgKVxuICApO1xuXG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnU291cmRvdWdoIEJvdWxlJyxcbiAgICAgICckNi45OScsXG4gICAgICAnQSByb3VuZCBhcnRpc2FuIGJyZWFkIHdpdGggYSB0YW5neSBmbGF2b3IgYW5kIGEgY3J1c3R5IGV4dGVyaW9yLicsXG4gICAgICBzb3VyZG91Z2hCb3VsZVxuICAgIClcbiAgKTtcbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdGb2NhY2NpYScsXG4gICAgICAnJDcuOTknLFxuICAgICAgJ0EgZmx1ZmZ5IGFuZCBzYXZvcnkgSXRhbGlhbiBicmVhZCB0b3BwZWQgd2l0aCBoZXJicywgb2xpdmUgb2lsLCBhbmQgc2VhIHNhbHQuJyxcbiAgICAgIGZvY2FjY2lhXG4gICAgKVxuICApO1xuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ05hYW4gQnJlYWQnLFxuICAgICAgJyQ1Ljk5JyxcbiAgICAgICdTb2Z0IGFuZCBwaWxsb3d5IEluZGlhbiBicmVhZCBwZXJmZWN0IGZvciBkaXBwaW5nIGluIGN1cnJpZXMgYW5kIHNhdWNlcy4nLFxuICAgICAgbmFhblxuICAgIClcbiAgKTtcbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdDaWFiYXR0YScsXG4gICAgICAnJDYuOTknLFxuICAgICAgJ0FuIEl0YWxpYW4gYnJlYWQgd2l0aCBhIGNoZXd5IHRleHR1cmUgYW5kIGxhcmdlIGFpciBwb2NrZXRzLCBpZGVhbCBmb3Igc2FuZHdpY2hlcy4nLFxuICAgICAgY2lhYmF0dGFcbiAgICApXG4gICk7XG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnUGl0YSBCcmVhZCcsXG4gICAgICAnJDQuOTknLFxuICAgICAgJ1RoaW4gYW5kIHBvY2tldGVkIGJyZWFkIGNvbW1vbmx5IHVzZWQgaW4gTWVkaXRlcnJhbmVhbiBhbmQgTWlkZGxlIEVhc3Rlcm4gY3Vpc2luZS4nLFxuICAgICAgcGl0YVxuICAgIClcbiAgKTtcbiAgaXRlbXMucHVzaChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICdCcmlvY2hlJyxcbiAgICAgICckNS45OScsXG4gICAgICAnQSByaWNoIGFuZCBidXR0ZXJ5IGJyZWFkIG9mdGVuIHVzZWQgZm9yIG1ha2luZyBzd2VldCB0cmVhdHMgbGlrZSBGcmVuY2ggdG9hc3QuJyxcbiAgICAgIGJyaW9jaGVcbiAgICApXG4gICk7XG4gIGl0ZW1zLnB1c2goXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAnV2hvbGUgR3JhaW4gTG9hZicsXG4gICAgICAnJDYuOTknLFxuICAgICAgJ0EgaGVhcnR5IGJyZWFkIG1hZGUgd2l0aCB3aG9sZSB3aGVhdCBmbG91ciBhbmQgcGFja2VkIHdpdGggbnV0cml0aW91cyBncmFpbnMuJyxcbiAgICAgIHdob2xlR3JhaW5Mb2FmXG4gICAgKVxuICApO1xuICBpdGVtcy5wdXNoKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgJ0NoYWxsYWgnLFxuICAgICAgJyQ3Ljk5JyxcbiAgICAgICdBIGJyYWlkZWQgSmV3aXNoIGJyZWFkIHdpdGggYSBzbGlnaHRseSBzd2VldCB0YXN0ZS4nLFxuICAgICAgY2hhbGxhaFxuICAgIClcbiAgKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1zO1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoZWFkZXJJbml0IH0gZnJvbSAnLi9ob21lcGFnZSc7XG5pbXBvcnQgaXRlbXMgZnJvbSAnLi9tZW51SXRlbXMnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5tYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBoZWFkZXJJbml0KCk7XG4gIGRpc3BsYXlNZW51KCk7XG4gIGNvbnRlbnQuYXBwZW5kKG1lbnVIZWFkZXIsIG1haW4pO1xufVxuXG5jb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1oZWFkZXInKTtcbihmdW5jdGlvbiBtZW51SGVhZGVySW5pdCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0JSRUFEUyBNRU5VJztcbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaW5lLmNsYXNzTmFtZSA9ICdsaW5lJztcbiAgbWVudUhlYWRlci5hcHBlbmQoaGVhZGVyLCBsaW5lKTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlNZW51KCkge1xuICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1Ib2xkZXIuY2xhc3NOYW1lID0gJ21lbnUtaXRlbSc7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtRGV0YWlscy5jbGFzc05hbWUgPSAnaXRlbS1kZXRhaWxzJztcbiAgICBjb25zdCBpdGVtUGljID0gbmV3IEltYWdlKCk7XG4gICAgaXRlbVBpYy5zcmMgPSBpdGVtLnBpY3R1cmU7XG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgIGl0ZW1OYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcbiAgICBpdGVtUHJpY2UuY2xhc3NOYW1lID0gJ3ByaWNlJztcbiAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtRGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgaXRlbURlc2MuY2xhc3NOYW1lID0gJ2Rlc2MnO1xuXG4gICAgaXRlbURldGFpbHMuYXBwZW5kKGl0ZW1OYW1lLCBpdGVtUHJpY2UsIGl0ZW1EZXNjKTtcbiAgICBpdGVtSG9sZGVyLmFwcGVuZChpdGVtUGljLCBpdGVtRGV0YWlscyk7XG4gICAgbWFpbi5hcHBlbmQoaXRlbUhvbGRlcik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=