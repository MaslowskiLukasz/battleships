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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary: #125B50;\n  --secondary: #F8B400;\n  --light-text: #FAF5E4;\n  --dark-text: #000000;\n  --background: #000000;\n  --hit-color: #FF6363;\n  --miss-color: #ABC9FF;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  min-height: 100%;\n  color: var(--light-text);\n  background-color: var(--background);\n}\n\nol {\n  text-align: left;\n}\n\n.instructions {\n  margin-top: 10em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#game-screen {\n  width: 80%;\n  padding-top: 2em;\n  margin: auto;\n  text-align: center;\n}\n\n.header {\n  padding-top: 3em;\n  width: 80%;\n  margin: auto;\n  text-align: center;\n}\n\n.help {\n  margin-top: 2em;\n  color: var(--light-text);\n}\n\n#winner {\n  color: var(--secondary);\n}\n\n#board-wrapper {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: 3em;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 2em);\n  grid-template-rows: repeat(10, 2em);\n}\n\n.area {\n  border: 0;\n  min-width: 2em;\n  min-height: 2em;\n  margin: .1em;\n  background-color: var(--light-text);\n}\n\n.area-hover:hover {\n  background-color: var(--secondary);\n}\n\n.ship {\n  background-color: var(--primary);\n}\n\n.hit {\n  background-color: var(--hit-color);\n}\n\n.miss {\n  background-color: var(--miss-color);\n}\n\n.btn {\n  background-color: var(--primary);\n  color: var(--light-text);\n  font-size: 16px;\n  font-weight: bold;\n  border: 0;\n  padding: 1em;\n  transition: background-color .2s ease-in-out, color .2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: var(--secondary);\n  color: var(--dark-text);\n}\n\n.hidden {\n  display: none;\n}\n\n.legend {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.ship-entry {\n  width: 12em;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.left {\n  display: flex;\n  align-items: flex-end;\n}\n\n.legend-area {\n  min-width: 1em;\n  min-height: 1em;\n  margin: .1em;\n  background-color: var(--light-text);\n}\n\n.ship-placement-hover {\n  background-color: var(--secondary);\n}\n\n.sunk {\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 860px) {\n  #board-wrapper {\n    display: flex;\n    flex-direction: column;\n  }\n\n  #end-screen {\n    position: fixed;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    background-color: var(--background);\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;EACrB,oBAAoB;EACpB,qBAAqB;EACrB,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,wBAAwB;EACxB,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,SAAS;EACT,cAAc;EACd,eAAe;EACf,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,gCAAgC;EAChC,wBAAwB;EACxB,eAAe;EACf,iBAAiB;EACjB,SAAS;EACT,YAAY;EACZ,mEAAmE;AACrE;;AAEA;EACE,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,eAAe;IACf,UAAU;IACV,WAAW;IACX,YAAY;IACZ,mCAAmC;EACrC;AACF","sourcesContent":[":root {\n  --primary: #125B50;\n  --secondary: #F8B400;\n  --light-text: #FAF5E4;\n  --dark-text: #000000;\n  --background: #000000;\n  --hit-color: #FF6363;\n  --miss-color: #ABC9FF;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  min-height: 100%;\n  color: var(--light-text);\n  background-color: var(--background);\n}\n\nol {\n  text-align: left;\n}\n\n.instructions {\n  margin-top: 10em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#game-screen {\n  width: 80%;\n  padding-top: 2em;\n  margin: auto;\n  text-align: center;\n}\n\n.header {\n  padding-top: 3em;\n  width: 80%;\n  margin: auto;\n  text-align: center;\n}\n\n.help {\n  margin-top: 2em;\n  color: var(--light-text);\n}\n\n#winner {\n  color: var(--secondary);\n}\n\n#board-wrapper {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: 3em;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 2em);\n  grid-template-rows: repeat(10, 2em);\n}\n\n.area {\n  border: 0;\n  min-width: 2em;\n  min-height: 2em;\n  margin: .1em;\n  background-color: var(--light-text);\n}\n\n.area-hover:hover {\n  background-color: var(--secondary);\n}\n\n.ship {\n  background-color: var(--primary);\n}\n\n.hit {\n  background-color: var(--hit-color);\n}\n\n.miss {\n  background-color: var(--miss-color);\n}\n\n.btn {\n  background-color: var(--primary);\n  color: var(--light-text);\n  font-size: 16px;\n  font-weight: bold;\n  border: 0;\n  padding: 1em;\n  transition: background-color .2s ease-in-out, color .2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: var(--secondary);\n  color: var(--dark-text);\n}\n\n.hidden {\n  display: none;\n}\n\n.legend {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.ship-entry {\n  width: 12em;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.left {\n  display: flex;\n  align-items: flex-end;\n}\n\n.legend-area {\n  min-width: 1em;\n  min-height: 1em;\n  margin: .1em;\n  background-color: var(--light-text);\n}\n\n.ship-placement-hover {\n  background-color: var(--secondary);\n}\n\n.sunk {\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 860px) {\n  #board-wrapper {\n    display: flex;\n    flex-direction: column;\n  }\n\n  #end-screen {\n    position: fixed;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    background-color: var(--background);\n  }\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/UIUtils.js":
/*!************************!*\
  !*** ./src/UIUtils.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAreaEventListeners": () => (/* binding */ addAreaEventListeners),
/* harmony export */   "getCoords": () => (/* binding */ getCoords),
/* harmony export */   "getVerticalStatus": () => (/* binding */ getVerticalStatus),
/* harmony export */   "initUI": () => (/* binding */ initUI),
/* harmony export */   "removeShipPlacementIndication": () => (/* binding */ removeShipPlacementIndication),
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards),
/* harmony export */   "renderCurrentShip": () => (/* binding */ renderCurrentShip),
/* harmony export */   "renderShips": () => (/* binding */ renderShips),
/* harmony export */   "resetUI": () => (/* binding */ resetUI),
/* harmony export */   "showAttackInstructions": () => (/* binding */ showAttackInstructions),
/* harmony export */   "showEndScreen": () => (/* binding */ showEndScreen)
/* harmony export */ });
const initUI = (resetCallback) => {
  const startButton = document.getElementById('start-btn');

  startButton.addEventListener('click', showGameScreen);
  showStartScreen();
  createGameScreen();
  setUpReset(resetCallback);
}

const showStartScreen = () => {
  const screen = document.getElementById('start-screen');
  showElement(screen);
  showPlacementInstructions();
}

const showElement = (element) => {
  element.classList.remove('hidden');
}

const hideElement = (element) => {
  element.classList.add('hidden');
}

const createGameScreen = () => {
  createToggleVerticalButton();
  createBoard();
}

const createToggleVerticalButton = () => {
  const button = document.getElementById('toggle-vertical-btn');
  
  button.setAttribute('isVertical', "false");
  button.addEventListener('click', changeOrientation);
}

const createBoard = () => {
  const boards = document.querySelectorAll('.board');

  boards.forEach((board) => {
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const area = document.createElement('button');
        area.className = 'area';
        area.setAttribute('x', x);
        area.setAttribute('y', y);
  
        board.appendChild(area);
      }
    }
  });
}

const showGameScreen = () => {
  const boards = document.getElementById('game-screen');
  const startScreen = document.getElementById('start-screen');
  const gameHeader = document.getElementById('game-header');

  hideElement(startScreen);
  showElement(gameHeader);
  showElement(boards);
  addAreaHoverEffect('ai-board');
  addAreaHoverEffect('player-board');
}

const showEndScreen = (playerWon) => {
  const gameHeader = document.getElementById('game-header');
  const endScreen = document.getElementById('end-screen');
  const winner = document.getElementById('winner');

  winner.textContent = playerWon ? 'Player won' : 'AI won';
  hideElement(gameHeader);
  showElement(endScreen);
}

const addAreaEventListeners = (id, callback, placementCallback) => {
  const playerBoard = document.getElementById(id);
  const areas = playerBoard.querySelectorAll('.area');

  areas.forEach((area) => {
    area.addEventListener('click', callback);
    if (id === 'player-board') {
      area.addEventListener('mouseover', placementCallback);
    }
  });
}

const renderShips = (shipPlacement, isAI) => {
  let playerBoard;
  if (isAI) {
    playerBoard = document.getElementById('ai-board');
  } else {
    playerBoard = document.getElementById('player-board');
  }
  
  shipPlacement.map((currShip) => {
    for (let i = 0; i < currShip.ship.getLength(); i++) {
      const x = currShip.isVertical ? currShip.x : currShip.x + i;
      const y = currShip.isVertical ? currShip.y + i : currShip.y;
      const area = playerBoard.querySelector(`[x="${x}"][y="${y}"]`);
      area.classList.add('ship');
    }
  });
}

const getCoords = (area) => {
  const x = parseInt(area.getAttribute('x'));
  const y = parseInt(area.getAttribute('y'));

  return { x: x, y: y }
}

const renderBoards = (playerGameboard, AIGameboard) => {
  renderMisses(playerGameboard, false);
  renderHits(playerGameboard, false);
  renderMisses(AIGameboard, true);
  renderHits(AIGameboard, true);
  renderSunkShips(playerGameboard, false);
  renderSunkShips(AIGameboard, true);
  removeAreaHoverEffect('ai-board');
}

const renderMisses = (board, isAI) => {
  const misses = board.getMisses();

  let gameboard;
  if (isAI) {
    gameboard = document.getElementById('ai-board');
  } else {
    gameboard = document.getElementById('player-board');
  }

  misses.map((miss) => {
    const area = gameboard.querySelector(`[x="${miss.x}"][y="${miss.y}"]`);
    area.classList.add('miss');
  });
}

const renderHits = (board, isAI) => {
  const hits = board.getHits();
  
  let gameboard;
  if (isAI) {
    gameboard = document.getElementById('ai-board');
  } else {
    gameboard = document.getElementById('player-board');
  }

  hits.map((hit) => {
    const area = gameboard.querySelector(`[x="${hit.x}"][y="${hit.y}"]`);
    area.classList.add('hit');
  });
}

const getVerticalStatus = () => {
  const button = document.getElementById('toggle-vertical-btn');
  
  return button.getAttribute('isVertical') === 'true' ? true : false;
}

const changeOrientation = (event) => {
  const button = event.target;
  button.setAttribute('isVertical', !getVerticalStatus());
}

const setUpReset = (callback) => {
  const resetBtn = document.getElementById('reset-btn');

  resetBtn.addEventListener('click', callback);
}

const resetUI = () => {
  const areas = document.querySelectorAll('.area');
  const endScreen = document.getElementById('end-screen');
  const gameScreen = document.getElementById('game-screen');
  const gameHeader = document.getElementById('game-header');

  areas.forEach((area) => {
    area.classList.remove('hit');
    area.classList.remove('miss');
    area.classList.remove('ship');
    area.textContent = '';
    removeEventListeners(area);
  });

  showPlacementInstructions();
  hideElement(endScreen);
  showElement(gameHeader);
  showElement(gameScreen);
  addAreaHoverEffect('ai-board');
  addAreaHoverEffect('player-board');
}

const removeEventListeners = (element) => {
  const newElement = element.cloneNode(true);
  element.parentNode.replaceChild(newElement, element);
}

const showAttackInstructions = () => {
  const shipPlacementHelp = document.getElementById('ship-placement-help');
  const attackHelp = document.getElementById('attack-help');

  hideElement(shipPlacementHelp);
  showElement(attackHelp);
}

const showPlacementInstructions = () => {
  const shipPlacementHelp = document.getElementById('ship-placement-help');
  const attackHelp = document.getElementById('attack-help');

  hideElement(attackHelp);
  showElement(shipPlacementHelp);
}

const addAreaHoverEffect = (boardName) => {
  const board = document.getElementById(boardName);
  const areas = board.querySelectorAll('.area');

  areas.forEach((area) => area.classList.add('area-hover'));
}

const removeAreaHoverEffect = (boardName) => {
  const board = document.getElementById(boardName);
  const areas = board.querySelectorAll('.area');
  
  areas.forEach((area) => {
    if (area.classList.contains('hit') || area.classList.contains('miss')) {
      area.classList.remove('area-hover');
    }
  })
}

const renderCurrentShip = (target, length) => {
  const playerBoard = document.getElementById('player-board');
  const areas = playerBoard.querySelectorAll('.area');
  const { x, y } = getCoords(target);
  const isVertical = getVerticalStatus();

  areas.forEach((area) => area.classList.remove('ship-placement-hover'));

  for (let i = 0; i < length; i++) {
    const currX = isVertical ? x : x + i;
    const currY = isVertical ? y + i : y;
    if (currX < 10 && currY < 10) {
      const area = playerBoard.querySelector(`[x="${currX}"][y="${currY}"]`);
      area.classList.add('ship-placement-hover');
    }
  }
}

const removeShipPlacementIndication = () => {
  const playerBoard = document.getElementById('player-board');
  const areas = playerBoard.querySelectorAll('.area');

  areas.forEach((area) => {
    area.classList.remove('ship-placement-hover');
    removeEventListeners(area);
  });
}

const renderSunkShips = (board, isAI) => {
  const ships = board.getShips();
  
  let gameboard;
  if (isAI) {
    gameboard = document.getElementById('ai-board');
  } else {
    gameboard = document.getElementById('player-board');
  }

  ships.map((ship) => {
    if (ship.ship.isSunk()) {
      for (let i = 0; i < ship.ship.getLength(); i++) {
        const x = ship.isVertical ? ship.x : ship.x + i;
        const y = ship.isVertical ? ship.y + i : ship.y
        const area = gameboard.querySelector(`[x="${x}"][y="${y}"]`);
        area.textContent = 'X';
        area.classList.add('sunk');
      }
    }
  });
}



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UIUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIUtils */ "./src/UIUtils.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.js");





const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
const AI = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
const playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])();
const AIGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])();

const start = () => {
  (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.initUI)(reset);
  initGame();
}

const reset = () => {
  player1.resetAttacks();
  AI.resetAttacks();
  playerGameboard.reset();
  AIGameboard.reset();
  (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.resetUI)();
  initGame();
}

const initGame = () => {
  AIGameboard.placeShipsRandomly(_utils__WEBPACK_IMPORTED_MODULE_3__["default"]);
  (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.renderShips)(playerGameboard.getShips(), false);

  (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.addAreaEventListeners)('player-board', placeShips, indicateShipPlacement);
}

const placeShips = (event) => {
  const { x, y } = (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.getCoords)(event.target);

  const currentShipsNumber = playerGameboard.getShips().length;
  if (currentShipsNumber !== _utils__WEBPACK_IMPORTED_MODULE_3__["default"].length) {
    playerGameboard.addShip(x, y, _utils__WEBPACK_IMPORTED_MODULE_3__["default"][currentShipsNumber].length, (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.getVerticalStatus)());
  }

  if (playerGameboard.getShips().length === _utils__WEBPACK_IMPORTED_MODULE_3__["default"].length) {
    (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.addAreaEventListeners)('ai-board', attack);
    (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.showAttackInstructions)();
    (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.removeShipPlacementIndication)();
  }

  (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.renderShips)(playerGameboard.getShips(), false);
}

const randomAttack = (player, enemyBoard) => {
  const { x, y } = player.generateNextMove();
  player.attack(x, y, enemyBoard);
}

const attack = (event) => {
  const { x, y } = (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.getCoords)(event.target);

  player1.attack(x, y, AIGameboard);
  randomAttack(AI, playerGameboard);
  (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.renderBoards)(playerGameboard, AIGameboard);
  checkGameOver();
}

const checkGameOver = () => {
  if (playerGameboard.areAllShipsSunk() || AIGameboard.areAllShipsSunk()) {
    (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.showEndScreen)(AIGameboard.areAllShipsSunk());
  }
}

const indicateShipPlacement = (event) => {
  const currentShipsNumber = playerGameboard.getShips().length;
  (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.renderCurrentShip)(event.target, _utils__WEBPACK_IMPORTED_MODULE_3__["default"][currentShipsNumber].length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function gameboardFactory() {
  let ships = [];
  let missed = [];
  let hits = [];

  const addShip = (x, y, length = 1, isVertical = false) => {
    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);

    if (!isShipPlacementValid({ x:x, y: y, ship: ship, isVertical: isVertical})) {
      throw('ship placement is not valid');
    }

    ships.push( {x: x, y: y, ship: ship, isVertical: isVertical} );
  }

  const isShipOverlapping = (currShip) => {
    const shipLength = currShip.ship.getLength() - 1;
    const newShipStartX = currShip.x;
    const newShipEndX = currShip.isVertical ? currShip.x : currShip.x + shipLength;
    const newShipStartY = currShip.y;
    const newShipEndY = currShip.isVertical ? currShip.y + shipLength : currShip.y; 

    for (const ship of ships) {
      const length = ship.ship.getLength() - 1;
      const shipStartX = ship.x;
      const shipEndX = ship.isVertical ? ship.x : ship.x + length;
      const shipStartY = ship.y;
      const shipEndY = ship.isVertical ? ship.y + length : ship.y;

      if (!(newShipStartX > shipEndX || newShipStartY > shipEndY ||
        newShipEndX < shipStartX || newShipEndY < shipStartY)) {
          return true;
      }
    }
    
    return false;
  }

  const placeShipsRandomly = (shipList) => {
    shipList.map((ship) => {
      let retry = true;

      while (retry) {
        const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(ship.length);
        const { x, y } = getRandomCoords();
        const isVertical = getRandomOrientation();

        if (isShipPlacementValid({ x: x, y: y, ship: newShip, isVertical })) {
          addShip(x, y, ship.length, isVertical);
          retry = false;
        }
      }
    });
  }

  const receiveAttack = (x, y) => {
    const shipHit = ships.find((item) =>
      (
        item.isVertical ?
        checkVertical(x, y, item) :
        checkHorizontal(x, y, item)
      )
    );

    if(shipHit) {
      addHit(x, y);
      sendHitToShip(x, y, shipHit);
    } else {
      addMissed(x, y);
    }
  }

  const sendHitToShip = (x, y, item) => {
    if (item.isVertical) {
      item.ship.hit(y - item.y);
    } else {
      item.ship.hit(x - item.x);
    }
  }

  const isShipPlacementValid = (ship) => {
    if ((ship.isVertical && ship.y + ship.ship.getLength() > 10) ||
      (!ship.isVertical && ship.x + ship.ship.getLength() > 10)) {
        return false;
    }

    if (isShipOverlapping(ship)) {
      return false;
    }

    return true;
  }

  const checkVertical = (x, y, item) => {
    return (y >= item.y && y < item.y + item.ship.getLength()) && (item.x === x)
  }

  const checkHorizontal = (x, y, item) => {
    return (x >= item.x && x < item.x + item.ship.getLength()) && (item.y === y)
  }

  const areAllShipsSunk = () => {
    return ships.every((item) => item.ship.isSunk());
  }

  const reset = () => {
    ships = [];
    missed = [];
    hits = [];
  }

  const addMissed = (x, y) => missed.push( {x: x, y: y} );
  const addHit = (x, y) => hits.push( {x: x, y: y} );
  const getShips = () => [...ships];  
  const getMisses = () => [...missed];
  const getHits = () => [...hits];
  const getRandomOrientation = () => Math.random() > 0.5 ? true : false;
  const getRandomCoords = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10)
    return { x: x, y: y };
  }

  return {
    addShip,
    getShips,
    receiveAttack,
    getMisses,
    getHits,
    areAllShipsSunk,
    placeShipsRandomly,
    reset,
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardFactory);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function player() {
  let attacks = [];

  const attack = (x, y, board) => {
    if (hasAlreadyHit(x, y)) {
      throw('can\'t attack in previously attacked space');
    }
    
    board.receiveAttack(x, y);
    attacks.push({ x: x, y: y })
  }

  const generateNextMove = () => {
    let x = getRandomNumber();
    let y = getRandomNumber();
    
    while (hasAlreadyHit(x, y)) {
      x = getRandomNumber();
      y = getRandomNumber();
    }

    return { x: x, y: y }
  }
  
  const getRandomNumber = () => Math.floor(Math.random() * 10);
  const hasAlreadyHit = (x, y) => attacks.some((item) => item.x === x && item.y === y);
  const getAttacks = () => [...attacks];
  const resetAttacks = () => attacks = [];

  return {
    attack,
    getAttacks,
    generateNextMove,
    resetAttacks,
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function shipFactory(shipLength) {
  let hitMarks = [];
  const length = shipLength;

  const hit = (n) => {
    if(n < 0 || n >= length) {
      throw('hit point out of range');
    }
    hitMarks.push(n);
  }

  const isSunk = () => hitMarks.length === length;
  const getHitMarks = () => [...hitMarks];
  const getLength = () => length;
  

  return {
    hit,
    getHitMarks,
    isSunk,
    getLength,
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipFactory);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
Carrier 	5
Battleship 	4
Destroyer 	3
Submarine 	3
Patrol Boat 	2 
*/
const ships = [
  {
    name: 'carrier',
    length: 5,
  },
  {
    name: 'battleship',
    length: 4,
  },
  {
    name: 'destroyer',
    length: 3,
  },
  {
    name: 'submarine',
    length: 3,
  },
  {
    name: 'patrol boat',
    length: 2
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ships);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function component() {
  (0,_game_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

component();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDeEIxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxLQUFLOzs7Ozs7VUM5QnBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ1Y7O0FBRXBCO0FBQ0EsRUFBRSxvREFBSztBQUNQOztBQUVBLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvVUlVdGlscy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcHJpbWFyeTogIzEyNUI1MDtcXG4gIC0tc2Vjb25kYXJ5OiAjRjhCNDAwO1xcbiAgLS1saWdodC10ZXh0OiAjRkFGNUU0O1xcbiAgLS1kYXJrLXRleHQ6ICMwMDAwMDA7XFxuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XFxuICAtLWhpdC1jb2xvcjogI0ZGNjM2MztcXG4gIC0tbWlzcy1jb2xvcjogI0FCQzlGRjtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG5vbCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gIG1hcmdpbi10b3A6IDEwZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lLXNjcmVlbiB7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZy10b3A6IDJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwYWRkaW5nLXRvcDogM2VtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlbHAge1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xcbn1cXG5cXG4jd2lubmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4jYm9hcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyZW0pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDJlbSk7XFxufVxcblxcbi5hcmVhIHtcXG4gIGJvcmRlcjogMDtcXG4gIG1pbi13aWR0aDogMmVtO1xcbiAgbWluLWhlaWdodDogMmVtO1xcbiAgbWFyZ2luOiAuMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XFxufVxcblxcbi5hcmVhLWhvdmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jb2xvcik7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAxZW07XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluLW91dCwgY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay10ZXh0KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGVnZW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtZW50cnkge1xcbiAgd2lkdGg6IDEyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmxlZ2VuZC1hcmVhIHtcXG4gIG1pbi13aWR0aDogMWVtO1xcbiAgbWluLWhlaWdodDogMWVtO1xcbiAgbWFyZ2luOiAuMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uc3VuayB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xcbiAgI2JvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgI2VuZC1zY3JlZW4ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsU0FBUztFQUNULFlBQVk7RUFDWixtRUFBbUU7QUFDckU7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztFQUNyQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcHJpbWFyeTogIzEyNUI1MDtcXG4gIC0tc2Vjb25kYXJ5OiAjRjhCNDAwO1xcbiAgLS1saWdodC10ZXh0OiAjRkFGNUU0O1xcbiAgLS1kYXJrLXRleHQ6ICMwMDAwMDA7XFxuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XFxuICAtLWhpdC1jb2xvcjogI0ZGNjM2MztcXG4gIC0tbWlzcy1jb2xvcjogI0FCQzlGRjtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG5vbCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gIG1hcmdpbi10b3A6IDEwZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lLXNjcmVlbiB7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZy10b3A6IDJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwYWRkaW5nLXRvcDogM2VtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlbHAge1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xcbn1cXG5cXG4jd2lubmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4jYm9hcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyZW0pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDJlbSk7XFxufVxcblxcbi5hcmVhIHtcXG4gIGJvcmRlcjogMDtcXG4gIG1pbi13aWR0aDogMmVtO1xcbiAgbWluLWhlaWdodDogMmVtO1xcbiAgbWFyZ2luOiAuMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XFxufVxcblxcbi5hcmVhLWhvdmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jb2xvcik7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAxZW07XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluLW91dCwgY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBjb2xvcjogdmFyKC0tZGFyay10ZXh0KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGVnZW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtZW50cnkge1xcbiAgd2lkdGg6IDEyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmxlZ2VuZC1hcmVhIHtcXG4gIG1pbi13aWR0aDogMWVtO1xcbiAgbWluLWhlaWdodDogMWVtO1xcbiAgbWFyZ2luOiAuMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uc3VuayB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xcbiAgI2JvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgI2VuZC1zY3JlZW4ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGluaXRVSSA9IChyZXNldENhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ0bicpO1xuXG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0dhbWVTY3JlZW4pO1xuICBzaG93U3RhcnRTY3JlZW4oKTtcbiAgY3JlYXRlR2FtZVNjcmVlbigpO1xuICBzZXRVcFJlc2V0KHJlc2V0Q2FsbGJhY2spO1xufVxuXG5jb25zdCBzaG93U3RhcnRTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1zY3JlZW4nKTtcbiAgc2hvd0VsZW1lbnQoc2NyZWVuKTtcbiAgc2hvd1BsYWNlbWVudEluc3RydWN0aW9ucygpO1xufVxuXG5jb25zdCBzaG93RWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbmNvbnN0IGhpZGVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbn1cblxuY29uc3QgY3JlYXRlR2FtZVNjcmVlbiA9ICgpID0+IHtcbiAgY3JlYXRlVG9nZ2xlVmVydGljYWxCdXR0b24oKTtcbiAgY3JlYXRlQm9hcmQoKTtcbn1cblxuY29uc3QgY3JlYXRlVG9nZ2xlVmVydGljYWxCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtdmVydGljYWwtYnRuJyk7XG4gIFxuICBidXR0b24uc2V0QXR0cmlidXRlKCdpc1ZlcnRpY2FsJywgXCJmYWxzZVwiKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlT3JpZW50YXRpb24pO1xufVxuXG5jb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkJyk7XG5cbiAgYm9hcmRzLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgICAgY29uc3QgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhcmVhLmNsYXNzTmFtZSA9ICdhcmVhJztcbiAgICAgICAgYXJlYS5zZXRBdHRyaWJ1dGUoJ3gnLCB4KTtcbiAgICAgICAgYXJlYS5zZXRBdHRyaWJ1dGUoJ3knLCB5KTtcbiAgXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGFyZWEpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHNob3dHYW1lU2NyZWVuID0gKCkgPT4ge1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zY3JlZW4nKTtcbiAgY29uc3Qgc3RhcnRTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtc2NyZWVuJyk7XG4gIGNvbnN0IGdhbWVIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1oZWFkZXInKTtcblxuICBoaWRlRWxlbWVudChzdGFydFNjcmVlbik7XG4gIHNob3dFbGVtZW50KGdhbWVIZWFkZXIpO1xuICBzaG93RWxlbWVudChib2FyZHMpO1xuICBhZGRBcmVhSG92ZXJFZmZlY3QoJ2FpLWJvYXJkJyk7XG4gIGFkZEFyZWFIb3ZlckVmZmVjdCgncGxheWVyLWJvYXJkJyk7XG59XG5cbmNvbnN0IHNob3dFbmRTY3JlZW4gPSAocGxheWVyV29uKSA9PiB7XG4gIGNvbnN0IGdhbWVIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1oZWFkZXInKTtcbiAgY29uc3QgZW5kU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZC1zY3JlZW4nKTtcbiAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lcicpO1xuXG4gIHdpbm5lci50ZXh0Q29udGVudCA9IHBsYXllcldvbiA/ICdQbGF5ZXIgd29uJyA6ICdBSSB3b24nO1xuICBoaWRlRWxlbWVudChnYW1lSGVhZGVyKTtcbiAgc2hvd0VsZW1lbnQoZW5kU2NyZWVuKTtcbn1cblxuY29uc3QgYWRkQXJlYUV2ZW50TGlzdGVuZXJzID0gKGlkLCBjYWxsYmFjaywgcGxhY2VtZW50Q2FsbGJhY2spID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGNvbnN0IGFyZWFzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmFyZWEnKTtcblxuICBhcmVhcy5mb3JFYWNoKChhcmVhKSA9PiB7XG4gICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgICBpZiAoaWQgPT09ICdwbGF5ZXItYm9hcmQnKSB7XG4gICAgICBhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHBsYWNlbWVudENhbGxiYWNrKTtcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCByZW5kZXJTaGlwcyA9IChzaGlwUGxhY2VtZW50LCBpc0FJKSA9PiB7XG4gIGxldCBwbGF5ZXJCb2FyZDtcbiAgaWYgKGlzQUkpIHtcbiAgICBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhaS1ib2FyZCcpO1xuICB9IGVsc2Uge1xuICAgIHBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICB9XG4gIFxuICBzaGlwUGxhY2VtZW50Lm1hcCgoY3VyclNoaXApID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJTaGlwLnNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IGN1cnJTaGlwLmlzVmVydGljYWwgPyBjdXJyU2hpcC54IDogY3VyclNoaXAueCArIGk7XG4gICAgICBjb25zdCB5ID0gY3VyclNoaXAuaXNWZXJ0aWNhbCA/IGN1cnJTaGlwLnkgKyBpIDogY3VyclNoaXAueTtcbiAgICAgIGNvbnN0IGFyZWEgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKGBbeD1cIiR7eH1cIl1beT1cIiR7eX1cIl1gKTtcbiAgICAgIGFyZWEuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IGdldENvb3JkcyA9IChhcmVhKSA9PiB7XG4gIGNvbnN0IHggPSBwYXJzZUludChhcmVhLmdldEF0dHJpYnV0ZSgneCcpKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGFyZWEuZ2V0QXR0cmlidXRlKCd5JykpO1xuXG4gIHJldHVybiB7IHg6IHgsIHk6IHkgfVxufVxuXG5jb25zdCByZW5kZXJCb2FyZHMgPSAocGxheWVyR2FtZWJvYXJkLCBBSUdhbWVib2FyZCkgPT4ge1xuICByZW5kZXJNaXNzZXMocGxheWVyR2FtZWJvYXJkLCBmYWxzZSk7XG4gIHJlbmRlckhpdHMocGxheWVyR2FtZWJvYXJkLCBmYWxzZSk7XG4gIHJlbmRlck1pc3NlcyhBSUdhbWVib2FyZCwgdHJ1ZSk7XG4gIHJlbmRlckhpdHMoQUlHYW1lYm9hcmQsIHRydWUpO1xuICByZW5kZXJTdW5rU2hpcHMocGxheWVyR2FtZWJvYXJkLCBmYWxzZSk7XG4gIHJlbmRlclN1bmtTaGlwcyhBSUdhbWVib2FyZCwgdHJ1ZSk7XG4gIHJlbW92ZUFyZWFIb3ZlckVmZmVjdCgnYWktYm9hcmQnKTtcbn1cblxuY29uc3QgcmVuZGVyTWlzc2VzID0gKGJvYXJkLCBpc0FJKSA9PiB7XG4gIGNvbnN0IG1pc3NlcyA9IGJvYXJkLmdldE1pc3NlcygpO1xuXG4gIGxldCBnYW1lYm9hcmQ7XG4gIGlmIChpc0FJKSB7XG4gICAgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FpLWJvYXJkJyk7XG4gIH0gZWxzZSB7XG4gICAgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICB9XG5cbiAgbWlzc2VzLm1hcCgobWlzcykgPT4ge1xuICAgIGNvbnN0IGFyZWEgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgW3g9XCIke21pc3MueH1cIl1beT1cIiR7bWlzcy55fVwiXWApO1xuICAgIGFyZWEuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICB9KTtcbn1cblxuY29uc3QgcmVuZGVySGl0cyA9IChib2FyZCwgaXNBSSkgPT4ge1xuICBjb25zdCBoaXRzID0gYm9hcmQuZ2V0SGl0cygpO1xuICBcbiAgbGV0IGdhbWVib2FyZDtcbiAgaWYgKGlzQUkpIHtcbiAgICBnYW1lYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWktYm9hcmQnKTtcbiAgfSBlbHNlIHtcbiAgICBnYW1lYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWJvYXJkJyk7XG4gIH1cblxuICBoaXRzLm1hcCgoaGl0KSA9PiB7XG4gICAgY29uc3QgYXJlYSA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKGBbeD1cIiR7aGl0Lnh9XCJdW3k9XCIke2hpdC55fVwiXWApO1xuICAgIGFyZWEuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gIH0pO1xufVxuXG5jb25zdCBnZXRWZXJ0aWNhbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS12ZXJ0aWNhbC1idG4nKTtcbiAgXG4gIHJldHVybiBidXR0b24uZ2V0QXR0cmlidXRlKCdpc1ZlcnRpY2FsJykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcbn1cblxuY29uc3QgY2hhbmdlT3JpZW50YXRpb24gPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICBidXR0b24uc2V0QXR0cmlidXRlKCdpc1ZlcnRpY2FsJywgIWdldFZlcnRpY2FsU3RhdHVzKCkpO1xufVxuXG5jb25zdCBzZXRVcFJlc2V0ID0gKGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LWJ0bicpO1xuXG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xufVxuXG5jb25zdCByZXNldFVJID0gKCkgPT4ge1xuICBjb25zdCBhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcmVhJyk7XG4gIGNvbnN0IGVuZFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmQtc2NyZWVuJyk7XG4gIGNvbnN0IGdhbWVTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zY3JlZW4nKTtcbiAgY29uc3QgZ2FtZUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWhlYWRlcicpO1xuXG4gIGFyZWFzLmZvckVhY2goKGFyZWEpID0+IHtcbiAgICBhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpO1xuICAgIGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnbWlzcycpO1xuICAgIGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgIGFyZWEudGV4dENvbnRlbnQgPSAnJztcbiAgICByZW1vdmVFdmVudExpc3RlbmVycyhhcmVhKTtcbiAgfSk7XG5cbiAgc2hvd1BsYWNlbWVudEluc3RydWN0aW9ucygpO1xuICBoaWRlRWxlbWVudChlbmRTY3JlZW4pO1xuICBzaG93RWxlbWVudChnYW1lSGVhZGVyKTtcbiAgc2hvd0VsZW1lbnQoZ2FtZVNjcmVlbik7XG4gIGFkZEFyZWFIb3ZlckVmZmVjdCgnYWktYm9hcmQnKTtcbiAgYWRkQXJlYUhvdmVyRWZmZWN0KCdwbGF5ZXItYm9hcmQnKTtcbn1cblxuY29uc3QgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIGVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgZWxlbWVudCk7XG59XG5cbmNvbnN0IHNob3dBdHRhY2tJbnN0cnVjdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBQbGFjZW1lbnRIZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtcGxhY2VtZW50LWhlbHAnKTtcbiAgY29uc3QgYXR0YWNrSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2staGVscCcpO1xuXG4gIGhpZGVFbGVtZW50KHNoaXBQbGFjZW1lbnRIZWxwKTtcbiAgc2hvd0VsZW1lbnQoYXR0YWNrSGVscCk7XG59XG5cbmNvbnN0IHNob3dQbGFjZW1lbnRJbnN0cnVjdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBQbGFjZW1lbnRIZWxwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtcGxhY2VtZW50LWhlbHAnKTtcbiAgY29uc3QgYXR0YWNrSGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2staGVscCcpO1xuXG4gIGhpZGVFbGVtZW50KGF0dGFja0hlbHApO1xuICBzaG93RWxlbWVudChzaGlwUGxhY2VtZW50SGVscCk7XG59XG5cbmNvbnN0IGFkZEFyZWFIb3ZlckVmZmVjdCA9IChib2FyZE5hbWUpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChib2FyZE5hbWUpO1xuICBjb25zdCBhcmVhcyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcmVhJyk7XG5cbiAgYXJlYXMuZm9yRWFjaCgoYXJlYSkgPT4gYXJlYS5jbGFzc0xpc3QuYWRkKCdhcmVhLWhvdmVyJykpO1xufVxuXG5jb25zdCByZW1vdmVBcmVhSG92ZXJFZmZlY3QgPSAoYm9hcmROYW1lKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9hcmROYW1lKTtcbiAgY29uc3QgYXJlYXMgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJlYScpO1xuICBcbiAgYXJlYXMuZm9yRWFjaCgoYXJlYSkgPT4ge1xuICAgIGlmIChhcmVhLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgfHwgYXJlYS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xuICAgICAgYXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdhcmVhLWhvdmVyJyk7XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCByZW5kZXJDdXJyZW50U2hpcCA9ICh0YXJnZXQsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItYm9hcmQnKTtcbiAgY29uc3QgYXJlYXMgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJlYScpO1xuICBjb25zdCB7IHgsIHkgfSA9IGdldENvb3Jkcyh0YXJnZXQpO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gZ2V0VmVydGljYWxTdGF0dXMoKTtcblxuICBhcmVhcy5mb3JFYWNoKChhcmVhKSA9PiBhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtcGxhY2VtZW50LWhvdmVyJykpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyWCA9IGlzVmVydGljYWwgPyB4IDogeCArIGk7XG4gICAgY29uc3QgY3VyclkgPSBpc1ZlcnRpY2FsID8geSArIGkgOiB5O1xuICAgIGlmIChjdXJyWCA8IDEwICYmIGN1cnJZIDwgMTApIHtcbiAgICAgIGNvbnN0IGFyZWEgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKGBbeD1cIiR7Y3Vyclh9XCJdW3k9XCIke2N1cnJZfVwiXWApO1xuICAgICAgYXJlYS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlbWVudC1ob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZW1vdmVTaGlwUGxhY2VtZW50SW5kaWNhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWJvYXJkJyk7XG4gIGNvbnN0IGFyZWFzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmFyZWEnKTtcblxuICBhcmVhcy5mb3JFYWNoKChhcmVhKSA9PiB7XG4gICAgYXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLXBsYWNlbWVudC1ob3ZlcicpO1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKGFyZWEpO1xuICB9KTtcbn1cblxuY29uc3QgcmVuZGVyU3Vua1NoaXBzID0gKGJvYXJkLCBpc0FJKSA9PiB7XG4gIGNvbnN0IHNoaXBzID0gYm9hcmQuZ2V0U2hpcHMoKTtcbiAgXG4gIGxldCBnYW1lYm9hcmQ7XG4gIGlmIChpc0FJKSB7XG4gICAgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FpLWJvYXJkJyk7XG4gIH0gZWxzZSB7XG4gICAgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICB9XG5cbiAgc2hpcHMubWFwKChzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gc2hpcC5pc1ZlcnRpY2FsID8gc2hpcC54IDogc2hpcC54ICsgaTtcbiAgICAgICAgY29uc3QgeSA9IHNoaXAuaXNWZXJ0aWNhbCA/IHNoaXAueSArIGkgOiBzaGlwLnlcbiAgICAgICAgY29uc3QgYXJlYSA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKGBbeD1cIiR7eH1cIl1beT1cIiR7eX1cIl1gKTtcbiAgICAgICAgYXJlYS50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgYXJlYS5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgaW5pdFVJLCBcbiAgcmVuZGVyU2hpcHMsXG4gIGdldENvb3JkcyxcbiAgcmVuZGVyQm9hcmRzLFxuICBzaG93RW5kU2NyZWVuLFxuICBnZXRWZXJ0aWNhbFN0YXR1cyxcbiAgcmVzZXRVSSxcbiAgYWRkQXJlYUV2ZW50TGlzdGVuZXJzLFxuICBzaG93QXR0YWNrSW5zdHJ1Y3Rpb25zLFxuICByZW5kZXJDdXJyZW50U2hpcCxcbiAgcmVtb3ZlU2hpcFBsYWNlbWVudEluZGljYXRpb24sXG59OyIsImltcG9ydCB7IFxuICBpbml0VUksXG4gIHJlbmRlclNoaXBzLFxuICBnZXRDb29yZHMsXG4gIHJlbmRlckJvYXJkcyxcbiAgc2hvd0VuZFNjcmVlbixcbiAgZ2V0VmVydGljYWxTdGF0dXMsXG4gIHJlc2V0VUksXG4gIGFkZEFyZWFFdmVudExpc3RlbmVycyxcbiAgc2hvd0F0dGFja0luc3RydWN0aW9ucyxcbiAgcmVuZGVyQ3VycmVudFNoaXAsXG4gIHJlbW92ZVNoaXBQbGFjZW1lbnRJbmRpY2F0aW9uLFxuICB9IGZyb20gXCIuL1VJVXRpbHNcIjtcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCJcbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHNoaXBzIGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoKTtcbmNvbnN0IEFJID0gcGxheWVyKCk7XG5jb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG5jb25zdCBBSUdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcblxuY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gIGluaXRVSShyZXNldCk7XG4gIGluaXRHYW1lKCk7XG59XG5cbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICBwbGF5ZXIxLnJlc2V0QXR0YWNrcygpO1xuICBBSS5yZXNldEF0dGFja3MoKTtcbiAgcGxheWVyR2FtZWJvYXJkLnJlc2V0KCk7XG4gIEFJR2FtZWJvYXJkLnJlc2V0KCk7XG4gIHJlc2V0VUkoKTtcbiAgaW5pdEdhbWUoKTtcbn1cblxuY29uc3QgaW5pdEdhbWUgPSAoKSA9PiB7XG4gIEFJR2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seShzaGlwcyk7XG4gIHJlbmRlclNoaXBzKHBsYXllckdhbWVib2FyZC5nZXRTaGlwcygpLCBmYWxzZSk7XG5cbiAgYWRkQXJlYUV2ZW50TGlzdGVuZXJzKCdwbGF5ZXItYm9hcmQnLCBwbGFjZVNoaXBzLCBpbmRpY2F0ZVNoaXBQbGFjZW1lbnQpO1xufVxuXG5jb25zdCBwbGFjZVNoaXBzID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgeCwgeSB9ID0gZ2V0Q29vcmRzKGV2ZW50LnRhcmdldCk7XG5cbiAgY29uc3QgY3VycmVudFNoaXBzTnVtYmVyID0gcGxheWVyR2FtZWJvYXJkLmdldFNoaXBzKCkubGVuZ3RoO1xuICBpZiAoY3VycmVudFNoaXBzTnVtYmVyICE9PSBzaGlwcy5sZW5ndGgpIHtcbiAgICBwbGF5ZXJHYW1lYm9hcmQuYWRkU2hpcCh4LCB5LCBzaGlwc1tjdXJyZW50U2hpcHNOdW1iZXJdLmxlbmd0aCwgZ2V0VmVydGljYWxTdGF0dXMoKSk7XG4gIH1cblxuICBpZiAocGxheWVyR2FtZWJvYXJkLmdldFNoaXBzKCkubGVuZ3RoID09PSBzaGlwcy5sZW5ndGgpIHtcbiAgICBhZGRBcmVhRXZlbnRMaXN0ZW5lcnMoJ2FpLWJvYXJkJywgYXR0YWNrKTtcbiAgICBzaG93QXR0YWNrSW5zdHJ1Y3Rpb25zKCk7XG4gICAgcmVtb3ZlU2hpcFBsYWNlbWVudEluZGljYXRpb24oKTtcbiAgfVxuXG4gIHJlbmRlclNoaXBzKHBsYXllckdhbWVib2FyZC5nZXRTaGlwcygpLCBmYWxzZSk7XG59XG5cbmNvbnN0IHJhbmRvbUF0dGFjayA9IChwbGF5ZXIsIGVuZW15Qm9hcmQpID0+IHtcbiAgY29uc3QgeyB4LCB5IH0gPSBwbGF5ZXIuZ2VuZXJhdGVOZXh0TW92ZSgpO1xuICBwbGF5ZXIuYXR0YWNrKHgsIHksIGVuZW15Qm9hcmQpO1xufVxuXG5jb25zdCBhdHRhY2sgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyB4LCB5IH0gPSBnZXRDb29yZHMoZXZlbnQudGFyZ2V0KTtcblxuICBwbGF5ZXIxLmF0dGFjayh4LCB5LCBBSUdhbWVib2FyZCk7XG4gIHJhbmRvbUF0dGFjayhBSSwgcGxheWVyR2FtZWJvYXJkKTtcbiAgcmVuZGVyQm9hcmRzKHBsYXllckdhbWVib2FyZCwgQUlHYW1lYm9hcmQpO1xuICBjaGVja0dhbWVPdmVyKCk7XG59XG5cbmNvbnN0IGNoZWNrR2FtZU92ZXIgPSAoKSA9PiB7XG4gIGlmIChwbGF5ZXJHYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkgfHwgQUlHYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICBzaG93RW5kU2NyZWVuKEFJR2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKTtcbiAgfVxufVxuXG5jb25zdCBpbmRpY2F0ZVNoaXBQbGFjZW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgY3VycmVudFNoaXBzTnVtYmVyID0gcGxheWVyR2FtZWJvYXJkLmdldFNoaXBzKCkubGVuZ3RoO1xuICByZW5kZXJDdXJyZW50U2hpcChldmVudC50YXJnZXQsIHNoaXBzW2N1cnJlbnRTaGlwc051bWJlcl0ubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhcnQ7IiwiaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gXCIuL3NoaXBcIjtcblxuZnVuY3Rpb24gZ2FtZWJvYXJkRmFjdG9yeSgpIHtcbiAgbGV0IHNoaXBzID0gW107XG4gIGxldCBtaXNzZWQgPSBbXTtcbiAgbGV0IGhpdHMgPSBbXTtcblxuICBjb25zdCBhZGRTaGlwID0gKHgsIHksIGxlbmd0aCA9IDEsIGlzVmVydGljYWwgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBzaGlwRmFjdG9yeShsZW5ndGgpO1xuXG4gICAgaWYgKCFpc1NoaXBQbGFjZW1lbnRWYWxpZCh7IHg6eCwgeTogeSwgc2hpcDogc2hpcCwgaXNWZXJ0aWNhbDogaXNWZXJ0aWNhbH0pKSB7XG4gICAgICB0aHJvdygnc2hpcCBwbGFjZW1lbnQgaXMgbm90IHZhbGlkJyk7XG4gICAgfVxuXG4gICAgc2hpcHMucHVzaCgge3g6IHgsIHk6IHksIHNoaXA6IHNoaXAsIGlzVmVydGljYWw6IGlzVmVydGljYWx9ICk7XG4gIH1cblxuICBjb25zdCBpc1NoaXBPdmVybGFwcGluZyA9IChjdXJyU2hpcCkgPT4ge1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBjdXJyU2hpcC5zaGlwLmdldExlbmd0aCgpIC0gMTtcbiAgICBjb25zdCBuZXdTaGlwU3RhcnRYID0gY3VyclNoaXAueDtcbiAgICBjb25zdCBuZXdTaGlwRW5kWCA9IGN1cnJTaGlwLmlzVmVydGljYWwgPyBjdXJyU2hpcC54IDogY3VyclNoaXAueCArIHNoaXBMZW5ndGg7XG4gICAgY29uc3QgbmV3U2hpcFN0YXJ0WSA9IGN1cnJTaGlwLnk7XG4gICAgY29uc3QgbmV3U2hpcEVuZFkgPSBjdXJyU2hpcC5pc1ZlcnRpY2FsID8gY3VyclNoaXAueSArIHNoaXBMZW5ndGggOiBjdXJyU2hpcC55OyBcblxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5zaGlwLmdldExlbmd0aCgpIC0gMTtcbiAgICAgIGNvbnN0IHNoaXBTdGFydFggPSBzaGlwLng7XG4gICAgICBjb25zdCBzaGlwRW5kWCA9IHNoaXAuaXNWZXJ0aWNhbCA/IHNoaXAueCA6IHNoaXAueCArIGxlbmd0aDtcbiAgICAgIGNvbnN0IHNoaXBTdGFydFkgPSBzaGlwLnk7XG4gICAgICBjb25zdCBzaGlwRW5kWSA9IHNoaXAuaXNWZXJ0aWNhbCA/IHNoaXAueSArIGxlbmd0aCA6IHNoaXAueTtcblxuICAgICAgaWYgKCEobmV3U2hpcFN0YXJ0WCA+IHNoaXBFbmRYIHx8IG5ld1NoaXBTdGFydFkgPiBzaGlwRW5kWSB8fFxuICAgICAgICBuZXdTaGlwRW5kWCA8IHNoaXBTdGFydFggfHwgbmV3U2hpcEVuZFkgPCBzaGlwU3RhcnRZKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBwbGFjZVNoaXBzUmFuZG9tbHkgPSAoc2hpcExpc3QpID0+IHtcbiAgICBzaGlwTGlzdC5tYXAoKHNoaXApID0+IHtcbiAgICAgIGxldCByZXRyeSA9IHRydWU7XG5cbiAgICAgIHdoaWxlIChyZXRyeSkge1xuICAgICAgICBjb25zdCBuZXdTaGlwID0gc2hpcEZhY3Rvcnkoc2hpcC5sZW5ndGgpO1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGdldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICBjb25zdCBpc1ZlcnRpY2FsID0gZ2V0UmFuZG9tT3JpZW50YXRpb24oKTtcblxuICAgICAgICBpZiAoaXNTaGlwUGxhY2VtZW50VmFsaWQoeyB4OiB4LCB5OiB5LCBzaGlwOiBuZXdTaGlwLCBpc1ZlcnRpY2FsIH0pKSB7XG4gICAgICAgICAgYWRkU2hpcCh4LCB5LCBzaGlwLmxlbmd0aCwgaXNWZXJ0aWNhbCk7XG4gICAgICAgICAgcmV0cnkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3Qgc2hpcEhpdCA9IHNoaXBzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAoXG4gICAgICAgIGl0ZW0uaXNWZXJ0aWNhbCA/XG4gICAgICAgIGNoZWNrVmVydGljYWwoeCwgeSwgaXRlbSkgOlxuICAgICAgICBjaGVja0hvcml6b250YWwoeCwgeSwgaXRlbSlcbiAgICAgIClcbiAgICApO1xuXG4gICAgaWYoc2hpcEhpdCkge1xuICAgICAgYWRkSGl0KHgsIHkpO1xuICAgICAgc2VuZEhpdFRvU2hpcCh4LCB5LCBzaGlwSGl0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkTWlzc2VkKHgsIHkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNlbmRIaXRUb1NoaXAgPSAoeCwgeSwgaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmlzVmVydGljYWwpIHtcbiAgICAgIGl0ZW0uc2hpcC5oaXQoeSAtIGl0ZW0ueSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0uc2hpcC5oaXQoeCAtIGl0ZW0ueCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaXNTaGlwUGxhY2VtZW50VmFsaWQgPSAoc2hpcCkgPT4ge1xuICAgIGlmICgoc2hpcC5pc1ZlcnRpY2FsICYmIHNoaXAueSArIHNoaXAuc2hpcC5nZXRMZW5ndGgoKSA+IDEwKSB8fFxuICAgICAgKCFzaGlwLmlzVmVydGljYWwgJiYgc2hpcC54ICsgc2hpcC5zaGlwLmdldExlbmd0aCgpID4gMTApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNTaGlwT3ZlcmxhcHBpbmcoc2hpcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrVmVydGljYWwgPSAoeCwgeSwgaXRlbSkgPT4ge1xuICAgIHJldHVybiAoeSA+PSBpdGVtLnkgJiYgeSA8IGl0ZW0ueSArIGl0ZW0uc2hpcC5nZXRMZW5ndGgoKSkgJiYgKGl0ZW0ueCA9PT0geClcbiAgfVxuXG4gIGNvbnN0IGNoZWNrSG9yaXpvbnRhbCA9ICh4LCB5LCBpdGVtKSA9PiB7XG4gICAgcmV0dXJuICh4ID49IGl0ZW0ueCAmJiB4IDwgaXRlbS54ICsgaXRlbS5zaGlwLmdldExlbmd0aCgpKSAmJiAoaXRlbS55ID09PSB5KVxuICB9XG5cbiAgY29uc3QgYXJlQWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwcy5ldmVyeSgoaXRlbSkgPT4gaXRlbS5zaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIHNoaXBzID0gW107XG4gICAgbWlzc2VkID0gW107XG4gICAgaGl0cyA9IFtdO1xuICB9XG5cbiAgY29uc3QgYWRkTWlzc2VkID0gKHgsIHkpID0+IG1pc3NlZC5wdXNoKCB7eDogeCwgeTogeX0gKTtcbiAgY29uc3QgYWRkSGl0ID0gKHgsIHkpID0+IGhpdHMucHVzaCgge3g6IHgsIHk6IHl9ICk7XG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gWy4uLnNoaXBzXTsgIFxuICBjb25zdCBnZXRNaXNzZXMgPSAoKSA9PiBbLi4ubWlzc2VkXTtcbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IFsuLi5oaXRzXTtcbiAgY29uc3QgZ2V0UmFuZG9tT3JpZW50YXRpb24gPSAoKSA9PiBNYXRoLnJhbmRvbSgpID4gMC41ID8gdHJ1ZSA6IGZhbHNlO1xuICBjb25zdCBnZXRSYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRTaGlwLFxuICAgIGdldFNoaXBzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2V0TWlzc2VzLFxuICAgIGdldEhpdHMsXG4gICAgYXJlQWxsU2hpcHNTdW5rLFxuICAgIHBsYWNlU2hpcHNSYW5kb21seSxcbiAgICByZXNldCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmRGYWN0b3J5O1xuIiwiZnVuY3Rpb24gcGxheWVyKCkge1xuICBsZXQgYXR0YWNrcyA9IFtdO1xuXG4gIGNvbnN0IGF0dGFjayA9ICh4LCB5LCBib2FyZCkgPT4ge1xuICAgIGlmIChoYXNBbHJlYWR5SGl0KHgsIHkpKSB7XG4gICAgICB0aHJvdygnY2FuXFwndCBhdHRhY2sgaW4gcHJldmlvdXNseSBhdHRhY2tlZCBzcGFjZScpO1xuICAgIH1cbiAgICBcbiAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGF0dGFja3MucHVzaCh7IHg6IHgsIHk6IHkgfSlcbiAgfVxuXG4gIGNvbnN0IGdlbmVyYXRlTmV4dE1vdmUgPSAoKSA9PiB7XG4gICAgbGV0IHggPSBnZXRSYW5kb21OdW1iZXIoKTtcbiAgICBsZXQgeSA9IGdldFJhbmRvbU51bWJlcigpO1xuICAgIFxuICAgIHdoaWxlIChoYXNBbHJlYWR5SGl0KHgsIHkpKSB7XG4gICAgICB4ID0gZ2V0UmFuZG9tTnVtYmVyKCk7XG4gICAgICB5ID0gZ2V0UmFuZG9tTnVtYmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSB9XG4gIH1cbiAgXG4gIGNvbnN0IGdldFJhbmRvbU51bWJlciA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgY29uc3QgaGFzQWxyZWFkeUhpdCA9ICh4LCB5KSA9PiBhdHRhY2tzLnNvbWUoKGl0ZW0pID0+IGl0ZW0ueCA9PT0geCAmJiBpdGVtLnkgPT09IHkpO1xuICBjb25zdCBnZXRBdHRhY2tzID0gKCkgPT4gWy4uLmF0dGFja3NdO1xuICBjb25zdCByZXNldEF0dGFja3MgPSAoKSA9PiBhdHRhY2tzID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRhY2ssXG4gICAgZ2V0QXR0YWNrcyxcbiAgICBnZW5lcmF0ZU5leHRNb3ZlLFxuICAgIHJlc2V0QXR0YWNrcyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7IiwiZnVuY3Rpb24gc2hpcEZhY3Rvcnkoc2hpcExlbmd0aCkge1xuICBsZXQgaGl0TWFya3MgPSBbXTtcbiAgY29uc3QgbGVuZ3RoID0gc2hpcExlbmd0aDtcblxuICBjb25zdCBoaXQgPSAobikgPT4ge1xuICAgIGlmKG4gPCAwIHx8IG4gPj0gbGVuZ3RoKSB7XG4gICAgICB0aHJvdygnaGl0IHBvaW50IG91dCBvZiByYW5nZScpO1xuICAgIH1cbiAgICBoaXRNYXJrcy5wdXNoKG4pO1xuICB9XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0TWFya3MubGVuZ3RoID09PSBsZW5ndGg7XG4gIGNvbnN0IGdldEhpdE1hcmtzID0gKCkgPT4gWy4uLmhpdE1hcmtzXTtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBcblxuICByZXR1cm4ge1xuICAgIGhpdCxcbiAgICBnZXRIaXRNYXJrcyxcbiAgICBpc1N1bmssXG4gICAgZ2V0TGVuZ3RoLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXBGYWN0b3J5OyIsIi8qXG5DYXJyaWVyIFx0NVxuQmF0dGxlc2hpcCBcdDRcbkRlc3Ryb3llciBcdDNcblN1Ym1hcmluZSBcdDNcblBhdHJvbCBCb2F0IFx0MiBcbiovXG5jb25zdCBzaGlwcyA9IFtcbiAge1xuICAgIG5hbWU6ICdjYXJyaWVyJyxcbiAgICBsZW5ndGg6IDUsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYmF0dGxlc2hpcCcsXG4gICAgbGVuZ3RoOiA0LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2Rlc3Ryb3llcicsXG4gICAgbGVuZ3RoOiAzLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3N1Ym1hcmluZScsXG4gICAgbGVuZ3RoOiAzLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3BhdHJvbCBib2F0JyxcbiAgICBsZW5ndGg6IDJcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXBzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdGFydCBmcm9tIFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIHN0YXJ0KCk7XG59XG5cbmNvbXBvbmVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==