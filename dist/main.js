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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary: #125B50;\n  --secondary: #F8B400;\n  --light-text: #FAF5E4;\n  --dark-text: #000000;\n  --background: #000000;\n  --hit-color: #FF6363;\n  --miss-color: #ABC9FF;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  min-height: 100%;\n  color: var(--light-text);\n  background-color: var(--background);\n}\n\nol {\n  text-align: left;\n}\n\n.instructions {\n  margin-top: 10em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#game-screen {\n  width: 80%;\n  padding-top: 2em;\n  margin: auto;\n  text-align: center;\n}\n\n.header {\n  padding-top: 3em;\n  width: 80%;\n  margin: auto;\n  text-align: center;\n}\n\n.help {\n  margin-top: 2em;\n  color: var(--light-text);\n}\n\n#winner {\n  color: var(--secondary);\n}\n\n#board-wrapper {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: 3em;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 2em);\n  grid-template-rows: repeat(10, 2em);\n}\n\n.area {\n  border: 0;\n  min-width: 2em;\n  min-height: 2em;\n  margin: .1em;\n  background-color: var(--light-text);\n}\n\n.area-hover:hover {\n  background-color: var(--secondary);\n}\n\n.ship {\n  background-color: var(--primary);\n}\n\n.hit {\n  background-color: var(--hit-color);\n}\n\n.miss {\n  background-color: var(--miss-color);\n}\n\n.btn {\n  background-color: var(--primary);\n  color: var(--light-text);\n  font-size: 16px;\n  font-weight: bold;\n  border: 0;\n  padding: 1em;\n  transition: background-color .2s ease-in-out, color .2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: var(--secondary);\n  color: var(--dark-text);\n}\n\n.hidden {\n  display: none;\n}\n\n.legend {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.ship-entry {\n  width: 12em;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.left {\n  display: flex;\n  align-items: flex-end;\n}\n\n.legend-area {\n  min-width: 1em;\n  min-height: 1em;\n  margin: .1em;\n  background-color: var(--light-text);\n}\n\n.ship-placement-hover {\n  background-color: var(--secondary);\n}\n\n@media only screen and (max-width: 860px) {\n  #board-wrapper {\n    display: flex;\n    flex-direction: column;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;EACrB,oBAAoB;EACpB,qBAAqB;EACrB,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,wBAAwB;EACxB,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,SAAS;EACT,cAAc;EACd,eAAe;EACf,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,gCAAgC;EAChC,wBAAwB;EACxB,eAAe;EACf,iBAAiB;EACjB,SAAS;EACT,YAAY;EACZ,mEAAmE;AACrE;;AAEA;EACE,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;EACxB;AACF","sourcesContent":[":root {\n  --primary: #125B50;\n  --secondary: #F8B400;\n  --light-text: #FAF5E4;\n  --dark-text: #000000;\n  --background: #000000;\n  --hit-color: #FF6363;\n  --miss-color: #ABC9FF;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  min-height: 100%;\n  color: var(--light-text);\n  background-color: var(--background);\n}\n\nol {\n  text-align: left;\n}\n\n.instructions {\n  margin-top: 10em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n#game-screen {\n  width: 80%;\n  padding-top: 2em;\n  margin: auto;\n  text-align: center;\n}\n\n.header {\n  padding-top: 3em;\n  width: 80%;\n  margin: auto;\n  text-align: center;\n}\n\n.help {\n  margin-top: 2em;\n  color: var(--light-text);\n}\n\n#winner {\n  color: var(--secondary);\n}\n\n#board-wrapper {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: 3em;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 2em);\n  grid-template-rows: repeat(10, 2em);\n}\n\n.area {\n  border: 0;\n  min-width: 2em;\n  min-height: 2em;\n  margin: .1em;\n  background-color: var(--light-text);\n}\n\n.area-hover:hover {\n  background-color: var(--secondary);\n}\n\n.ship {\n  background-color: var(--primary);\n}\n\n.hit {\n  background-color: var(--hit-color);\n}\n\n.miss {\n  background-color: var(--miss-color);\n}\n\n.btn {\n  background-color: var(--primary);\n  color: var(--light-text);\n  font-size: 16px;\n  font-weight: bold;\n  border: 0;\n  padding: 1em;\n  transition: background-color .2s ease-in-out, color .2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: var(--secondary);\n  color: var(--dark-text);\n}\n\n.hidden {\n  display: none;\n}\n\n.legend {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.ship-entry {\n  width: 12em;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.left {\n  display: flex;\n  align-items: flex-end;\n}\n\n.legend-area {\n  min-width: 1em;\n  min-height: 1em;\n  margin: .1em;\n  background-color: var(--light-text);\n}\n\n.ship-placement-hover {\n  background-color: var(--secondary);\n}\n\n@media only screen and (max-width: 860px) {\n  #board-wrapper {\n    display: flex;\n    flex-direction: column;\n  }\n}"],"sourceRoot":""}]);
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
    const startX = currShip.x;
    const startY = currShip.y;

    if (currShip.isVertical) {
      for (let y = startY; y < startY + currShip.ship.getLength(); y++) {
        const area = playerBoard.querySelector(`[x="${startX}"][y="${y}"]`);
        area.classList.add('ship');
      }
    } else {
      for (let x = startX; x < startX + currShip.ship.getLength(); x++) {
        const area = playerBoard.querySelector(`[x="${x}"][y="${startY}"]`);
        area.classList.add('ship');
      }
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
  
  if (isVertical) {
    for (let i = y; i < y + length; i++) {
      if (x < 10 && i < 10) {
        const area = playerBoard.querySelector(`[x="${x}"][y="${i}"]`);
        area.classList.add('ship-placement-hover');
      }
    }
  } else {
    for (let i = x; i < x + length; i++) {
      if (i < 10 && y < 10) {
        const area = playerBoard.querySelector(`[x="${i}"][y="${y}"]`);
        area.classList.add('ship-placement-hover');
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWUsS0FBSzs7Ozs7O1VDOUJwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNWOztBQUVwQjtBQUNBLEVBQUUsb0RBQUs7QUFDUDs7QUFFQSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1VJVXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnk6ICMxMjVCNTA7XFxuICAtLXNlY29uZGFyeTogI0Y4QjQwMDtcXG4gIC0tbGlnaHQtdGV4dDogI0ZBRjVFNDtcXG4gIC0tZGFyay10ZXh0OiAjMDAwMDAwO1xcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbiAgLS1oaXQtY29sb3I6ICNGRjYzNjM7XFxuICAtLW1pc3MtY29sb3I6ICNBQkM5RkY7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxub2wge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICBtYXJnaW4tdG9wOiAxMGVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZS1zY3JlZW4ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmctdG9wOiAyZW07XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgcGFkZGluZy10b3A6IDNlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWxwIHtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcXG59XFxuXFxuI3dpbm5lciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuI2JvYXJkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMmVtKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyZW0pO1xcbn1cXG5cXG4uYXJlYSB7XFxuICBib3JkZXI6IDA7XFxuICBtaW4td2lkdGg6IDJlbTtcXG4gIG1pbi1oZWlnaHQ6IDJlbTtcXG4gIG1hcmdpbjogLjFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xcbn1cXG5cXG4uYXJlYS1ob3Zlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG59XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1pbi1vdXQsIGNvbG9yIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstdGV4dCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxlZ2VuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwLWVudHJ5IHtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5sZWdlbmQtYXJlYSB7XFxuICBtaW4td2lkdGg6IDFlbTtcXG4gIG1pbi1oZWlnaHQ6IDFlbTtcXG4gIG1hcmdpbjogLjFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQtaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xcbiAgI2JvYXJkLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsU0FBUztFQUNULFlBQVk7RUFDWixtRUFBbUU7QUFDckU7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjMTI1QjUwO1xcbiAgLS1zZWNvbmRhcnk6ICNGOEI0MDA7XFxuICAtLWxpZ2h0LXRleHQ6ICNGQUY1RTQ7XFxuICAtLWRhcmstdGV4dDogIzAwMDAwMDtcXG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcXG4gIC0taGl0LWNvbG9yOiAjRkY2MzYzO1xcbiAgLS1taXNzLWNvbG9yOiAjQUJDOUZGO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbm9sIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgbWFyZ2luLXRvcDogMTBlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUtc2NyZWVuIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nLXRvcDogMmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmctdG9wOiAzZW07XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVscCB7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XFxufVxcblxcbiN3aW5uZXIge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbiNib2FyZC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDJlbSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMmVtKTtcXG59XFxuXFxuLmFyZWEge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWluLXdpZHRoOiAyZW07XFxuICBtaW4taGVpZ2h0OiAyZW07XFxuICBtYXJnaW46IC4xZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcXG59XFxuXFxuLmFyZWEtaG92ZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNvbG9yKTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XFxufVxcblxcbi5idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2UtaW4tb3V0LCBjb2xvciAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLXRleHQpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5sZWdlbmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1lbnRyeSB7XFxuICB3aWR0aDogMTJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubGVnZW5kLWFyZWEge1xcbiAgbWluLXdpZHRoOiAxZW07XFxuICBtaW4taGVpZ2h0OiAxZW07XFxuICBtYXJnaW46IC4xZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50LWhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcXG4gICNib2FyZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBpbml0VUkgPSAocmVzZXRDYWxsYmFjaykgPT4ge1xuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKTtcblxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dHYW1lU2NyZWVuKTtcbiAgc2hvd1N0YXJ0U2NyZWVuKCk7XG4gIGNyZWF0ZUdhbWVTY3JlZW4oKTtcbiAgc2V0VXBSZXNldChyZXNldENhbGxiYWNrKTtcbn1cblxuY29uc3Qgc2hvd1N0YXJ0U2NyZWVuID0gKCkgPT4ge1xuICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtc2NyZWVuJyk7XG4gIHNob3dFbGVtZW50KHNjcmVlbik7XG4gIHNob3dQbGFjZW1lbnRJbnN0cnVjdGlvbnMoKTtcbn1cblxuY29uc3Qgc2hvd0VsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufVxuXG5jb25zdCBoaWRlRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG5cbmNvbnN0IGNyZWF0ZUdhbWVTY3JlZW4gPSAoKSA9PiB7XG4gIGNyZWF0ZVRvZ2dsZVZlcnRpY2FsQnV0dG9uKCk7XG4gIGNyZWF0ZUJvYXJkKCk7XG59XG5cbmNvbnN0IGNyZWF0ZVRvZ2dsZVZlcnRpY2FsQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXZlcnRpY2FsLWJ0bicpO1xuICBcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaXNWZXJ0aWNhbCcsIFwiZmFsc2VcIik7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZU9yaWVudGF0aW9uKTtcbn1cblxuY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZCcpO1xuXG4gIGJvYXJkcy5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYXJlYS5jbGFzc05hbWUgPSAnYXJlYSc7XG4gICAgICAgIGFyZWEuc2V0QXR0cmlidXRlKCd4JywgeCk7XG4gICAgICAgIGFyZWEuc2V0QXR0cmlidXRlKCd5JywgeSk7XG4gIFxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChhcmVhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCBzaG93R2FtZVNjcmVlbiA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NyZWVuJyk7XG4gIGNvbnN0IHN0YXJ0U2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LXNjcmVlbicpO1xuICBjb25zdCBnYW1lSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtaGVhZGVyJyk7XG5cbiAgaGlkZUVsZW1lbnQoc3RhcnRTY3JlZW4pO1xuICBzaG93RWxlbWVudChnYW1lSGVhZGVyKTtcbiAgc2hvd0VsZW1lbnQoYm9hcmRzKTtcbiAgYWRkQXJlYUhvdmVyRWZmZWN0KCdhaS1ib2FyZCcpO1xuICBhZGRBcmVhSG92ZXJFZmZlY3QoJ3BsYXllci1ib2FyZCcpO1xufVxuXG5jb25zdCBzaG93RW5kU2NyZWVuID0gKHBsYXllcldvbikgPT4ge1xuICBjb25zdCBnYW1lSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtaGVhZGVyJyk7XG4gIGNvbnN0IGVuZFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmQtc2NyZWVuJyk7XG4gIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXInKTtcblxuICB3aW5uZXIudGV4dENvbnRlbnQgPSBwbGF5ZXJXb24gPyAnUGxheWVyIHdvbicgOiAnQUkgd29uJztcbiAgaGlkZUVsZW1lbnQoZ2FtZUhlYWRlcik7XG4gIHNob3dFbGVtZW50KGVuZFNjcmVlbik7XG59XG5cbmNvbnN0IGFkZEFyZWFFdmVudExpc3RlbmVycyA9IChpZCwgY2FsbGJhY2ssIHBsYWNlbWVudENhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBjb25zdCBhcmVhcyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcmVhJyk7XG5cbiAgYXJlYXMuZm9yRWFjaCgoYXJlYSkgPT4ge1xuICAgIGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gICAgaWYgKGlkID09PSAncGxheWVyLWJvYXJkJykge1xuICAgICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBwbGFjZW1lbnRDYWxsYmFjayk7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgcmVuZGVyU2hpcHMgPSAoc2hpcFBsYWNlbWVudCwgaXNBSSkgPT4ge1xuICBsZXQgcGxheWVyQm9hcmQ7XG4gIGlmIChpc0FJKSB7XG4gICAgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWktYm9hcmQnKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItYm9hcmQnKTtcbiAgfVxuICBzaGlwUGxhY2VtZW50Lm1hcCgoY3VyclNoaXApID0+IHtcbiAgICBjb25zdCBzdGFydFggPSBjdXJyU2hpcC54O1xuICAgIGNvbnN0IHN0YXJ0WSA9IGN1cnJTaGlwLnk7XG5cbiAgICBpZiAoY3VyclNoaXAuaXNWZXJ0aWNhbCkge1xuICAgICAgZm9yIChsZXQgeSA9IHN0YXJ0WTsgeSA8IHN0YXJ0WSArIGN1cnJTaGlwLnNoaXAuZ2V0TGVuZ3RoKCk7IHkrKykge1xuICAgICAgICBjb25zdCBhcmVhID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvcihgW3g9XCIke3N0YXJ0WH1cIl1beT1cIiR7eX1cIl1gKTtcbiAgICAgICAgYXJlYS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IHggPSBzdGFydFg7IHggPCBzdGFydFggKyBjdXJyU2hpcC5zaGlwLmdldExlbmd0aCgpOyB4KyspIHtcbiAgICAgICAgY29uc3QgYXJlYSA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFt4PVwiJHt4fVwiXVt5PVwiJHtzdGFydFl9XCJdYCk7XG4gICAgICAgIGFyZWEuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IGdldENvb3JkcyA9IChhcmVhKSA9PiB7XG4gIGNvbnN0IHggPSBwYXJzZUludChhcmVhLmdldEF0dHJpYnV0ZSgneCcpKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGFyZWEuZ2V0QXR0cmlidXRlKCd5JykpO1xuXG4gIHJldHVybiB7IHg6IHgsIHk6IHkgfVxufVxuXG5jb25zdCByZW5kZXJCb2FyZHMgPSAocGxheWVyR2FtZWJvYXJkLCBBSUdhbWVib2FyZCkgPT4ge1xuICByZW5kZXJNaXNzZXMocGxheWVyR2FtZWJvYXJkLCBmYWxzZSk7XG4gIHJlbmRlckhpdHMocGxheWVyR2FtZWJvYXJkLCBmYWxzZSk7XG4gIHJlbmRlck1pc3NlcyhBSUdhbWVib2FyZCwgdHJ1ZSk7XG4gIHJlbmRlckhpdHMoQUlHYW1lYm9hcmQsIHRydWUpO1xuICByZW1vdmVBcmVhSG92ZXJFZmZlY3QoJ2FpLWJvYXJkJyk7XG59XG5cbmNvbnN0IHJlbmRlck1pc3NlcyA9IChib2FyZCwgaXNBSSkgPT4ge1xuICBjb25zdCBtaXNzZXMgPSBib2FyZC5nZXRNaXNzZXMoKTtcblxuICBsZXQgZ2FtZWJvYXJkO1xuICBpZiAoaXNBSSkge1xuICAgIGdhbWVib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhaS1ib2FyZCcpO1xuICB9IGVsc2Uge1xuICAgIGdhbWVib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItYm9hcmQnKTtcbiAgfVxuXG4gIG1pc3Nlcy5tYXAoKG1pc3MpID0+IHtcbiAgICBjb25zdCBhcmVhID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFt4PVwiJHttaXNzLnh9XCJdW3k9XCIke21pc3MueX1cIl1gKTtcbiAgICBhcmVhLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgfSk7XG59XG5cbmNvbnN0IHJlbmRlckhpdHMgPSAoYm9hcmQsIGlzQUkpID0+IHtcbiAgY29uc3QgaGl0cyA9IGJvYXJkLmdldEhpdHMoKTtcbiAgXG4gIGxldCBnYW1lYm9hcmQ7XG4gIGlmIChpc0FJKSB7XG4gICAgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FpLWJvYXJkJyk7XG4gIH0gZWxzZSB7XG4gICAgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICB9XG5cbiAgaGl0cy5tYXAoKGhpdCkgPT4ge1xuICAgIGNvbnN0IGFyZWEgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgW3g9XCIke2hpdC54fVwiXVt5PVwiJHtoaXQueX1cIl1gKTtcbiAgICBhcmVhLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICB9KTtcbn1cblxuY29uc3QgZ2V0VmVydGljYWxTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtdmVydGljYWwtYnRuJyk7XG4gIFxuICByZXR1cm4gYnV0dG9uLmdldEF0dHJpYnV0ZSgnaXNWZXJ0aWNhbCcpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG59XG5cbmNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaXNWZXJ0aWNhbCcsICFnZXRWZXJ0aWNhbFN0YXR1cygpKTtcbn1cblxuY29uc3Qgc2V0VXBSZXNldCA9IChjYWxsYmFjaykgPT4ge1xuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idG4nKTtcblxuICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbn1cblxuY29uc3QgcmVzZXRVSSA9ICgpID0+IHtcbiAgY29uc3QgYXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJlYScpO1xuICBjb25zdCBlbmRTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5kLXNjcmVlbicpO1xuICBjb25zdCBnYW1lU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NyZWVuJyk7XG4gIGNvbnN0IGdhbWVIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1oZWFkZXInKTtcblxuICBhcmVhcy5mb3JFYWNoKChhcmVhKSA9PiB7XG4gICAgYXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgICBhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MnKTtcbiAgICBhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICBhcmVhLnRleHRDb250ZW50ID0gJyc7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoYXJlYSk7XG4gIH0pO1xuXG4gIHNob3dQbGFjZW1lbnRJbnN0cnVjdGlvbnMoKTtcbiAgaGlkZUVsZW1lbnQoZW5kU2NyZWVuKTtcbiAgc2hvd0VsZW1lbnQoZ2FtZUhlYWRlcik7XG4gIHNob3dFbGVtZW50KGdhbWVTY3JlZW4pO1xuICBhZGRBcmVhSG92ZXJFZmZlY3QoJ2FpLWJvYXJkJyk7XG4gIGFkZEFyZWFIb3ZlckVmZmVjdCgncGxheWVyLWJvYXJkJyk7XG59XG5cbmNvbnN0IHJlbW92ZUV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICBlbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIGVsZW1lbnQpO1xufVxuXG5jb25zdCBzaG93QXR0YWNrSW5zdHJ1Y3Rpb25zID0gKCkgPT4ge1xuICBjb25zdCBzaGlwUGxhY2VtZW50SGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLXBsYWNlbWVudC1oZWxwJyk7XG4gIGNvbnN0IGF0dGFja0hlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrLWhlbHAnKTtcblxuICBoaWRlRWxlbWVudChzaGlwUGxhY2VtZW50SGVscCk7XG4gIHNob3dFbGVtZW50KGF0dGFja0hlbHApO1xufVxuXG5jb25zdCBzaG93UGxhY2VtZW50SW5zdHJ1Y3Rpb25zID0gKCkgPT4ge1xuICBjb25zdCBzaGlwUGxhY2VtZW50SGVscCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLXBsYWNlbWVudC1oZWxwJyk7XG4gIGNvbnN0IGF0dGFja0hlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrLWhlbHAnKTtcblxuICBoaWRlRWxlbWVudChhdHRhY2tIZWxwKTtcbiAgc2hvd0VsZW1lbnQoc2hpcFBsYWNlbWVudEhlbHApO1xufVxuXG5jb25zdCBhZGRBcmVhSG92ZXJFZmZlY3QgPSAoYm9hcmROYW1lKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9hcmROYW1lKTtcbiAgY29uc3QgYXJlYXMgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJlYScpO1xuXG4gIGFyZWFzLmZvckVhY2goKGFyZWEpID0+IGFyZWEuY2xhc3NMaXN0LmFkZCgnYXJlYS1ob3ZlcicpKTtcbn1cblxuY29uc3QgcmVtb3ZlQXJlYUhvdmVyRWZmZWN0ID0gKGJvYXJkTmFtZSkgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvYXJkTmFtZSk7XG4gIGNvbnN0IGFyZWFzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmFyZWEnKTtcbiAgXG4gIGFyZWFzLmZvckVhY2goKGFyZWEpID0+IHtcbiAgICBpZiAoYXJlYS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpIHx8IGFyZWEuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgIGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnYXJlYS1ob3ZlcicpO1xuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgcmVuZGVyQ3VycmVudFNoaXAgPSAodGFyZ2V0LCBsZW5ndGgpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWJvYXJkJyk7XG4gIGNvbnN0IGFyZWFzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmFyZWEnKTtcbiAgY29uc3QgeyB4LCB5IH0gPSBnZXRDb29yZHModGFyZ2V0KTtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IGdldFZlcnRpY2FsU3RhdHVzKCk7XG5cbiAgYXJlYXMuZm9yRWFjaCgoYXJlYSkgPT4gYXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLXBsYWNlbWVudC1ob3ZlcicpKTtcbiAgXG4gIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh4IDwgMTAgJiYgaSA8IDEwKSB7XG4gICAgICAgIGNvbnN0IGFyZWEgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKGBbeD1cIiR7eH1cIl1beT1cIiR7aX1cIl1gKTtcbiAgICAgICAgYXJlYS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlbWVudC1ob3ZlcicpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPCAxMCAmJiB5IDwgMTApIHtcbiAgICAgICAgY29uc3QgYXJlYSA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFt4PVwiJHtpfVwiXVt5PVwiJHt5fVwiXWApO1xuICAgICAgICBhcmVhLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VtZW50LWhvdmVyJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHJlbW92ZVNoaXBQbGFjZW1lbnRJbmRpY2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItYm9hcmQnKTtcbiAgY29uc3QgYXJlYXMgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJlYScpO1xuXG4gIGFyZWFzLmZvckVhY2goKGFyZWEpID0+IHtcbiAgICBhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtcGxhY2VtZW50LWhvdmVyJyk7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoYXJlYSk7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBpbml0VUksIFxuICByZW5kZXJTaGlwcyxcbiAgZ2V0Q29vcmRzLFxuICByZW5kZXJCb2FyZHMsXG4gIHNob3dFbmRTY3JlZW4sXG4gIGdldFZlcnRpY2FsU3RhdHVzLFxuICByZXNldFVJLFxuICBhZGRBcmVhRXZlbnRMaXN0ZW5lcnMsXG4gIHNob3dBdHRhY2tJbnN0cnVjdGlvbnMsXG4gIHJlbmRlckN1cnJlbnRTaGlwLFxuICByZW1vdmVTaGlwUGxhY2VtZW50SW5kaWNhdGlvbixcbn07IiwiaW1wb3J0IHsgXG4gIGluaXRVSSxcbiAgcmVuZGVyU2hpcHMsXG4gIGdldENvb3JkcyxcbiAgcmVuZGVyQm9hcmRzLFxuICBzaG93RW5kU2NyZWVuLFxuICBnZXRWZXJ0aWNhbFN0YXR1cyxcbiAgcmVzZXRVSSxcbiAgYWRkQXJlYUV2ZW50TGlzdGVuZXJzLFxuICBzaG93QXR0YWNrSW5zdHJ1Y3Rpb25zLFxuICByZW5kZXJDdXJyZW50U2hpcCxcbiAgcmVtb3ZlU2hpcFBsYWNlbWVudEluZGljYXRpb24sXG4gIH0gZnJvbSBcIi4vVUlVdGlsc1wiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIlxuaW1wb3J0IGdhbWVib2FyZEZhY3RvcnkgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgc2hpcHMgZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgcGxheWVyMSA9IHBsYXllcigpO1xuY29uc3QgQUkgPSBwbGF5ZXIoKTtcbmNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbmNvbnN0IEFJR2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuXG5jb25zdCBzdGFydCA9ICgpID0+IHtcbiAgaW5pdFVJKHJlc2V0KTtcbiAgaW5pdEdhbWUoKTtcbn1cblxuY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gIHBsYXllcjEucmVzZXRBdHRhY2tzKCk7XG4gIEFJLnJlc2V0QXR0YWNrcygpO1xuICBwbGF5ZXJHYW1lYm9hcmQucmVzZXQoKTtcbiAgQUlHYW1lYm9hcmQucmVzZXQoKTtcbiAgcmVzZXRVSSgpO1xuICBpbml0R2FtZSgpO1xufVxuXG5jb25zdCBpbml0R2FtZSA9ICgpID0+IHtcbiAgQUlHYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KHNoaXBzKTtcbiAgcmVuZGVyU2hpcHMocGxheWVyR2FtZWJvYXJkLmdldFNoaXBzKCksIGZhbHNlKTtcblxuICBhZGRBcmVhRXZlbnRMaXN0ZW5lcnMoJ3BsYXllci1ib2FyZCcsIHBsYWNlU2hpcHMsIGluZGljYXRlU2hpcFBsYWNlbWVudCk7XG59XG5cbmNvbnN0IHBsYWNlU2hpcHMgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyB4LCB5IH0gPSBnZXRDb29yZHMoZXZlbnQudGFyZ2V0KTtcblxuICBjb25zdCBjdXJyZW50U2hpcHNOdW1iZXIgPSBwbGF5ZXJHYW1lYm9hcmQuZ2V0U2hpcHMoKS5sZW5ndGg7XG4gIGlmIChjdXJyZW50U2hpcHNOdW1iZXIgIT09IHNoaXBzLmxlbmd0aCkge1xuICAgIHBsYXllckdhbWVib2FyZC5hZGRTaGlwKHgsIHksIHNoaXBzW2N1cnJlbnRTaGlwc051bWJlcl0ubGVuZ3RoLCBnZXRWZXJ0aWNhbFN0YXR1cygpKTtcbiAgfVxuXG4gIGlmIChwbGF5ZXJHYW1lYm9hcmQuZ2V0U2hpcHMoKS5sZW5ndGggPT09IHNoaXBzLmxlbmd0aCkge1xuICAgIGFkZEFyZWFFdmVudExpc3RlbmVycygnYWktYm9hcmQnLCBhdHRhY2spO1xuICAgIHNob3dBdHRhY2tJbnN0cnVjdGlvbnMoKTtcbiAgICByZW1vdmVTaGlwUGxhY2VtZW50SW5kaWNhdGlvbigpO1xuICB9XG5cbiAgcmVuZGVyU2hpcHMocGxheWVyR2FtZWJvYXJkLmdldFNoaXBzKCksIGZhbHNlKTtcbn1cblxuY29uc3QgcmFuZG9tQXR0YWNrID0gKHBsYXllciwgZW5lbXlCb2FyZCkgPT4ge1xuICBjb25zdCB7IHgsIHkgfSA9IHBsYXllci5nZW5lcmF0ZU5leHRNb3ZlKCk7XG4gIHBsYXllci5hdHRhY2soeCwgeSwgZW5lbXlCb2FyZCk7XG59XG5cbmNvbnN0IGF0dGFjayA9IChldmVudCkgPT4ge1xuICBjb25zdCB7IHgsIHkgfSA9IGdldENvb3JkcyhldmVudC50YXJnZXQpO1xuXG4gIHBsYXllcjEuYXR0YWNrKHgsIHksIEFJR2FtZWJvYXJkKTtcbiAgcmFuZG9tQXR0YWNrKEFJLCBwbGF5ZXJHYW1lYm9hcmQpO1xuICByZW5kZXJCb2FyZHMocGxheWVyR2FtZWJvYXJkLCBBSUdhbWVib2FyZCk7XG4gIGNoZWNrR2FtZU92ZXIoKTtcbn1cblxuY29uc3QgY2hlY2tHYW1lT3ZlciA9ICgpID0+IHtcbiAgaWYgKHBsYXllckdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSB8fCBBSUdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgIHNob3dFbmRTY3JlZW4oQUlHYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpO1xuICB9XG59XG5cbmNvbnN0IGluZGljYXRlU2hpcFBsYWNlbWVudCA9IChldmVudCkgPT4ge1xuICBjb25zdCBjdXJyZW50U2hpcHNOdW1iZXIgPSBwbGF5ZXJHYW1lYm9hcmQuZ2V0U2hpcHMoKS5sZW5ndGg7XG4gIHJlbmRlckN1cnJlbnRTaGlwKGV2ZW50LnRhcmdldCwgc2hpcHNbY3VycmVudFNoaXBzTnVtYmVyXS5sZW5ndGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFydDsiLCJpbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vc2hpcFwiO1xuXG5mdW5jdGlvbiBnYW1lYm9hcmRGYWN0b3J5KCkge1xuICBsZXQgc2hpcHMgPSBbXTtcbiAgbGV0IG1pc3NlZCA9IFtdO1xuICBsZXQgaGl0cyA9IFtdO1xuXG4gIGNvbnN0IGFkZFNoaXAgPSAoeCwgeSwgbGVuZ3RoID0gMSwgaXNWZXJ0aWNhbCA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IHNoaXBGYWN0b3J5KGxlbmd0aCk7XG5cbiAgICBpZiAoIWlzU2hpcFBsYWNlbWVudFZhbGlkKHsgeDp4LCB5OiB5LCBzaGlwOiBzaGlwLCBpc1ZlcnRpY2FsOiBpc1ZlcnRpY2FsfSkpIHtcbiAgICAgIHRocm93KCdzaGlwIHBsYWNlbWVudCBpcyBub3QgdmFsaWQnKTtcbiAgICB9XG5cbiAgICBzaGlwcy5wdXNoKCB7eDogeCwgeTogeSwgc2hpcDogc2hpcCwgaXNWZXJ0aWNhbDogaXNWZXJ0aWNhbH0gKTtcbiAgfVxuXG4gIGNvbnN0IGlzU2hpcE92ZXJsYXBwaW5nID0gKGN1cnJTaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGN1cnJTaGlwLnNoaXAuZ2V0TGVuZ3RoKCkgLSAxO1xuICAgIGNvbnN0IG5ld1NoaXBTdGFydFggPSBjdXJyU2hpcC54O1xuICAgIGNvbnN0IG5ld1NoaXBFbmRYID0gY3VyclNoaXAuaXNWZXJ0aWNhbCA/IGN1cnJTaGlwLnggOiBjdXJyU2hpcC54ICsgc2hpcExlbmd0aDtcbiAgICBjb25zdCBuZXdTaGlwU3RhcnRZID0gY3VyclNoaXAueTtcbiAgICBjb25zdCBuZXdTaGlwRW5kWSA9IGN1cnJTaGlwLmlzVmVydGljYWwgPyBjdXJyU2hpcC55ICsgc2hpcExlbmd0aCA6IGN1cnJTaGlwLnk7IFxuXG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSBzaGlwLnNoaXAuZ2V0TGVuZ3RoKCkgLSAxO1xuICAgICAgY29uc3Qgc2hpcFN0YXJ0WCA9IHNoaXAueDtcbiAgICAgIGNvbnN0IHNoaXBFbmRYID0gc2hpcC5pc1ZlcnRpY2FsID8gc2hpcC54IDogc2hpcC54ICsgbGVuZ3RoO1xuICAgICAgY29uc3Qgc2hpcFN0YXJ0WSA9IHNoaXAueTtcbiAgICAgIGNvbnN0IHNoaXBFbmRZID0gc2hpcC5pc1ZlcnRpY2FsID8gc2hpcC55ICsgbGVuZ3RoIDogc2hpcC55O1xuXG4gICAgICBpZiAoIShuZXdTaGlwU3RhcnRYID4gc2hpcEVuZFggfHwgbmV3U2hpcFN0YXJ0WSA+IHNoaXBFbmRZIHx8XG4gICAgICAgIG5ld1NoaXBFbmRYIDwgc2hpcFN0YXJ0WCB8fCBuZXdTaGlwRW5kWSA8IHNoaXBTdGFydFkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seSA9IChzaGlwTGlzdCkgPT4ge1xuICAgIHNoaXBMaXN0Lm1hcCgoc2hpcCkgPT4ge1xuICAgICAgbGV0IHJldHJ5ID0gdHJ1ZTtcblxuICAgICAgd2hpbGUgKHJldHJ5KSB7XG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBzaGlwRmFjdG9yeShzaGlwLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgIGNvbnN0IGlzVmVydGljYWwgPSBnZXRSYW5kb21PcmllbnRhdGlvbigpO1xuXG4gICAgICAgIGlmIChpc1NoaXBQbGFjZW1lbnRWYWxpZCh7IHg6IHgsIHk6IHksIHNoaXA6IG5ld1NoaXAsIGlzVmVydGljYWwgfSkpIHtcbiAgICAgICAgICBhZGRTaGlwKHgsIHksIHNoaXAubGVuZ3RoLCBpc1ZlcnRpY2FsKTtcbiAgICAgICAgICByZXRyeSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCBzaGlwSGl0ID0gc2hpcHMuZmluZCgoaXRlbSkgPT5cbiAgICAgIChcbiAgICAgICAgaXRlbS5pc1ZlcnRpY2FsID9cbiAgICAgICAgY2hlY2tWZXJ0aWNhbCh4LCB5LCBpdGVtKSA6XG4gICAgICAgIGNoZWNrSG9yaXpvbnRhbCh4LCB5LCBpdGVtKVxuICAgICAgKVxuICAgICk7XG5cbiAgICBpZihzaGlwSGl0KSB7XG4gICAgICBhZGRIaXQoeCwgeSk7XG4gICAgICBzZW5kSGl0VG9TaGlwKHgsIHksIHNoaXBIaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRNaXNzZWQoeCwgeSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2VuZEhpdFRvU2hpcCA9ICh4LCB5LCBpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uaXNWZXJ0aWNhbCkge1xuICAgICAgaXRlbS5zaGlwLmhpdCh5IC0gaXRlbS55KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5zaGlwLmhpdCh4IC0gaXRlbS54KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBpc1NoaXBQbGFjZW1lbnRWYWxpZCA9IChzaGlwKSA9PiB7XG4gICAgaWYgKChzaGlwLmlzVmVydGljYWwgJiYgc2hpcC55ICsgc2hpcC5zaGlwLmdldExlbmd0aCgpID4gMTApIHx8XG4gICAgICAoIXNoaXAuaXNWZXJ0aWNhbCAmJiBzaGlwLnggKyBzaGlwLnNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc1NoaXBPdmVybGFwcGluZyhzaGlwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgY2hlY2tWZXJ0aWNhbCA9ICh4LCB5LCBpdGVtKSA9PiB7XG4gICAgcmV0dXJuICh5ID49IGl0ZW0ueSAmJiB5IDwgaXRlbS55ICsgaXRlbS5zaGlwLmdldExlbmd0aCgpKSAmJiAoaXRlbS54ID09PSB4KVxuICB9XG5cbiAgY29uc3QgY2hlY2tIb3Jpem9udGFsID0gKHgsIHksIGl0ZW0pID0+IHtcbiAgICByZXR1cm4gKHggPj0gaXRlbS54ICYmIHggPCBpdGVtLnggKyBpdGVtLnNoaXAuZ2V0TGVuZ3RoKCkpICYmIChpdGVtLnkgPT09IHkpXG4gIH1cblxuICBjb25zdCBhcmVBbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChpdGVtKSA9PiBpdGVtLnNoaXAuaXNTdW5rKCkpO1xuICB9XG5cbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgc2hpcHMgPSBbXTtcbiAgICBtaXNzZWQgPSBbXTtcbiAgICBoaXRzID0gW107XG4gIH1cblxuICBjb25zdCBhZGRNaXNzZWQgPSAoeCwgeSkgPT4gbWlzc2VkLnB1c2goIHt4OiB4LCB5OiB5fSApO1xuICBjb25zdCBhZGRIaXQgPSAoeCwgeSkgPT4gaGl0cy5wdXNoKCB7eDogeCwgeTogeX0gKTtcbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBbLi4uc2hpcHNdOyAgXG4gIGNvbnN0IGdldE1pc3NlcyA9ICgpID0+IFsuLi5taXNzZWRdO1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gWy4uLmhpdHNdO1xuICBjb25zdCBnZXRSYW5kb21PcmllbnRhdGlvbiA9ICgpID0+IE1hdGgucmFuZG9tKCkgPiAwLjUgPyB0cnVlIDogZmFsc2U7XG4gIGNvbnN0IGdldFJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICByZXR1cm4geyB4OiB4LCB5OiB5IH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZFNoaXAsXG4gICAgZ2V0U2hpcHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBnZXRNaXNzZXMsXG4gICAgZ2V0SGl0cyxcbiAgICBhcmVBbGxTaGlwc1N1bmssXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIHJlc2V0LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZEZhY3Rvcnk7XG4iLCJmdW5jdGlvbiBwbGF5ZXIoKSB7XG4gIGxldCBhdHRhY2tzID0gW107XG5cbiAgY29uc3QgYXR0YWNrID0gKHgsIHksIGJvYXJkKSA9PiB7XG4gICAgaWYgKGhhc0FscmVhZHlIaXQoeCwgeSkpIHtcbiAgICAgIHRocm93KCdjYW5cXCd0IGF0dGFjayBpbiBwcmV2aW91c2x5IGF0dGFja2VkIHNwYWNlJyk7XG4gICAgfVxuICAgIFxuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgYXR0YWNrcy5wdXNoKHsgeDogeCwgeTogeSB9KVxuICB9XG5cbiAgY29uc3QgZ2VuZXJhdGVOZXh0TW92ZSA9ICgpID0+IHtcbiAgICBsZXQgeCA9IGdldFJhbmRvbU51bWJlcigpO1xuICAgIGxldCB5ID0gZ2V0UmFuZG9tTnVtYmVyKCk7XG4gICAgXG4gICAgd2hpbGUgKGhhc0FscmVhZHlIaXQoeCwgeSkpIHtcbiAgICAgIHggPSBnZXRSYW5kb21OdW1iZXIoKTtcbiAgICAgIHkgPSBnZXRSYW5kb21OdW1iZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB4OiB4LCB5OiB5IH1cbiAgfVxuICBcbiAgY29uc3QgZ2V0UmFuZG9tTnVtYmVyID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBjb25zdCBoYXNBbHJlYWR5SGl0ID0gKHgsIHkpID0+IGF0dGFja3Muc29tZSgoaXRlbSkgPT4gaXRlbS54ID09PSB4ICYmIGl0ZW0ueSA9PT0geSk7XG4gIGNvbnN0IGdldEF0dGFja3MgPSAoKSA9PiBbLi4uYXR0YWNrc107XG4gIGNvbnN0IHJlc2V0QXR0YWNrcyA9ICgpID0+IGF0dGFja3MgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIGF0dGFjayxcbiAgICBnZXRBdHRhY2tzLFxuICAgIGdlbmVyYXRlTmV4dE1vdmUsXG4gICAgcmVzZXRBdHRhY2tzLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjsiLCJmdW5jdGlvbiBzaGlwRmFjdG9yeShzaGlwTGVuZ3RoKSB7XG4gIGxldCBoaXRNYXJrcyA9IFtdO1xuICBjb25zdCBsZW5ndGggPSBzaGlwTGVuZ3RoO1xuXG4gIGNvbnN0IGhpdCA9IChuKSA9PiB7XG4gICAgaWYobiA8IDAgfHwgbiA+PSBsZW5ndGgpIHtcbiAgICAgIHRocm93KCdoaXQgcG9pbnQgb3V0IG9mIHJhbmdlJyk7XG4gICAgfVxuICAgIGhpdE1hcmtzLnB1c2gobik7XG4gIH1cblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRNYXJrcy5sZW5ndGggPT09IGxlbmd0aDtcbiAgY29uc3QgZ2V0SGl0TWFya3MgPSAoKSA9PiBbLi4uaGl0TWFya3NdO1xuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG4gIFxuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGdldEhpdE1hcmtzLFxuICAgIGlzU3VuayxcbiAgICBnZXRMZW5ndGgsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpcEZhY3Rvcnk7IiwiLypcbkNhcnJpZXIgXHQ1XG5CYXR0bGVzaGlwIFx0NFxuRGVzdHJveWVyIFx0M1xuU3VibWFyaW5lIFx0M1xuUGF0cm9sIEJvYXQgXHQyIFxuKi9cbmNvbnN0IHNoaXBzID0gW1xuICB7XG4gICAgbmFtZTogJ2NhcnJpZXInLFxuICAgIGxlbmd0aDogNSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdiYXR0bGVzaGlwJyxcbiAgICBsZW5ndGg6IDQsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGVzdHJveWVyJyxcbiAgICBsZW5ndGg6IDMsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnc3VibWFyaW5lJyxcbiAgICBsZW5ndGg6IDMsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAncGF0cm9sIGJvYXQnLFxuICAgIGxlbmd0aDogMlxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgc2hpcHM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHN0YXJ0IGZyb20gXCIuL2dhbWUuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgc3RhcnQoKTtcbn1cblxuY29tcG9uZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9