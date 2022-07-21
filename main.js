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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  color: white;\n  background-color: black;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 2em);\n  grid-template-rows: repeat(10, 2em);\n}\n\n.area {\n  min-width: 2em;\n  min-height: 2em;\n  border: 1px solid white;\n}\n\n.hit {\n  background-color: #F37878;\n}\n\n.miss {\n  background-color: #ABC9FF;\n}\n\n.ship {\n  border: 1px solid black;\n}\n\n.hidden {\n  display: none;\n}\n\n.found {\n  border: 2px solid red;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["body {\n  color: white;\n  background-color: black;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 2em);\n  grid-template-rows: repeat(10, 2em);\n}\n\n.area {\n  min-width: 2em;\n  min-height: 2em;\n  border: 1px solid white;\n}\n\n.hit {\n  background-color: #F37878;\n}\n\n.miss {\n  background-color: #ABC9FF;\n}\n\n.ship {\n  border: 1px solid black;\n}\n\n.hidden {\n  display: none;\n}\n\n.found {\n  border: 2px solid red;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards),
/* harmony export */   "renderShips": () => (/* binding */ renderShips),
/* harmony export */   "resetUI": () => (/* binding */ resetUI),
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
  hideElement(startScreen);
  showElement(boards);
}

const showEndScreen = () => {
  const gameScreen = document.getElementById('game-screen');
  const endScreen = document.getElementById('end-screen');
  
  hideElement(gameScreen);
  showElement(endScreen);
}

const addAreaEventListeners = (id, callback) => {
  const playerBoard = document.getElementById(id);
  const areas = playerBoard.querySelectorAll('.area');

  areas.forEach((area) => area.addEventListener('click', callback));
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
        area.textContent = 'X';
        area.classList.add('ship');
      }
    } else {
      for (let x = startX; x < startX + currShip.ship.getLength(); x++) {
        const area = playerBoard.querySelector(`[x="${x}"][y="${startY}"]`);
        area.textContent = '0';
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

  areas.forEach((area) => {
    area.classList.remove('hit');
    area.classList.remove('miss');
    area.classList.remove('ship');
    area.textContent = '';
    removeEventListeners(area);
  });

  hideElement(endScreen);
  showElement(gameScreen);
}

const removeEventListeners = (element) => {
  const newElement = element.cloneNode(true);
  element.parentNode.replaceChild(newElement, element);
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





/*
TODO
ui -> show where the ship will be placed
*/
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
  (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.renderShips)(AIGameboard.getShips(), true);
  (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.renderShips)(playerGameboard.getShips(), false);

  (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.addAreaEventListeners)('player-board', placeShips);
}

const placeShips = (event) => {
  const { x, y } = (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.getCoords)(event.target);

  const currentShipsNumber = playerGameboard.getShips().length;
  if (currentShipsNumber !== _utils__WEBPACK_IMPORTED_MODULE_3__["default"].length) {
    playerGameboard.addShip(x, y, _utils__WEBPACK_IMPORTED_MODULE_3__["default"][currentShipsNumber].length, (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.getVerticalStatus)());
  }

  if (playerGameboard.getShips().length === _utils__WEBPACK_IMPORTED_MODULE_3__["default"].length) {
    (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.addAreaEventListeners)('ai-board', attack);
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
    (0,_UIUtils__WEBPACK_IMPORTED_MODULE_0__.showEndScreen)();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9VSVV0aWxzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMmVtKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyZW0pO1xcbn1cXG5cXG4uYXJlYSB7XFxuICBtaW4td2lkdGg6IDJlbTtcXG4gIG1pbi1oZWlnaHQ6IDJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMzc4Nzg7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNBQkM5RkY7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3VuZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyZW0pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDJlbSk7XFxufVxcblxcbi5hcmVhIHtcXG4gIG1pbi13aWR0aDogMmVtO1xcbiAgbWluLWhlaWdodDogMmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzNzg3ODtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FCQzlGRjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvdW5kIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBpbml0VUkgPSAocmVzZXRDYWxsYmFjaykgPT4ge1xuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKTtcblxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dHYW1lU2NyZWVuKTtcbiAgc2hvd1N0YXJ0U2NyZWVuKCk7XG4gIGNyZWF0ZUdhbWVTY3JlZW4oKTtcbiAgc2V0VXBSZXNldChyZXNldENhbGxiYWNrKTtcbn1cblxuY29uc3Qgc2hvd1N0YXJ0U2NyZWVuID0gKCkgPT4ge1xuICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtc2NyZWVuJyk7XG4gIHNob3dFbGVtZW50KHNjcmVlbik7XG59XG5cbmNvbnN0IHNob3dFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuY29uc3QgaGlkZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuXG5jb25zdCBjcmVhdGVHYW1lU2NyZWVuID0gKCkgPT4ge1xuICBjcmVhdGVUb2dnbGVWZXJ0aWNhbEJ1dHRvbigpO1xuICBjcmVhdGVCb2FyZCgpO1xufVxuXG5jb25zdCBjcmVhdGVUb2dnbGVWZXJ0aWNhbEJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS12ZXJ0aWNhbC1idG4nKTtcbiAgXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzVmVydGljYWwnLCBcImZhbHNlXCIpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VPcmllbnRhdGlvbik7XG59XG5cbmNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKTtcblxuICBib2FyZHMuZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFyZWEuY2xhc3NOYW1lID0gJ2FyZWEnO1xuICAgICAgICBhcmVhLnNldEF0dHJpYnV0ZSgneCcsIHgpO1xuICAgICAgICBhcmVhLnNldEF0dHJpYnV0ZSgneScsIHkpO1xuICBcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYXJlYSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3Qgc2hvd0dhbWVTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXNjcmVlbicpO1xuICBjb25zdCBzdGFydFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1zY3JlZW4nKTtcbiAgaGlkZUVsZW1lbnQoc3RhcnRTY3JlZW4pO1xuICBzaG93RWxlbWVudChib2FyZHMpO1xufVxuXG5jb25zdCBzaG93RW5kU2NyZWVuID0gKCkgPT4ge1xuICBjb25zdCBnYW1lU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NyZWVuJyk7XG4gIGNvbnN0IGVuZFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmQtc2NyZWVuJyk7XG4gIFxuICBoaWRlRWxlbWVudChnYW1lU2NyZWVuKTtcbiAgc2hvd0VsZW1lbnQoZW5kU2NyZWVuKTtcbn1cblxuY29uc3QgYWRkQXJlYUV2ZW50TGlzdGVuZXJzID0gKGlkLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgY29uc3QgYXJlYXMgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJlYScpO1xuXG4gIGFyZWFzLmZvckVhY2goKGFyZWEpID0+IGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjaykpO1xufVxuXG5jb25zdCByZW5kZXJTaGlwcyA9IChzaGlwUGxhY2VtZW50LCBpc0FJKSA9PiB7XG4gIGxldCBwbGF5ZXJCb2FyZDtcbiAgaWYgKGlzQUkpIHtcbiAgICBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhaS1ib2FyZCcpO1xuICB9IGVsc2Uge1xuICAgIHBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICB9XG4gIHNoaXBQbGFjZW1lbnQubWFwKChjdXJyU2hpcCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0WCA9IGN1cnJTaGlwLng7XG4gICAgY29uc3Qgc3RhcnRZID0gY3VyclNoaXAueTtcblxuICAgIGlmIChjdXJyU2hpcC5pc1ZlcnRpY2FsKSB7XG4gICAgICBmb3IgKGxldCB5ID0gc3RhcnRZOyB5IDwgc3RhcnRZICsgY3VyclNoaXAuc2hpcC5nZXRMZW5ndGgoKTsgeSsrKSB7XG4gICAgICAgIGNvbnN0IGFyZWEgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yKGBbeD1cIiR7c3RhcnRYfVwiXVt5PVwiJHt5fVwiXWApO1xuICAgICAgICBhcmVhLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBhcmVhLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgeCA9IHN0YXJ0WDsgeCA8IHN0YXJ0WCArIGN1cnJTaGlwLnNoaXAuZ2V0TGVuZ3RoKCk7IHgrKykge1xuICAgICAgICBjb25zdCBhcmVhID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvcihgW3g9XCIke3h9XCJdW3k9XCIke3N0YXJ0WX1cIl1gKTtcbiAgICAgICAgYXJlYS50ZXh0Q29udGVudCA9ICcwJztcbiAgICAgICAgYXJlYS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgZ2V0Q29vcmRzID0gKGFyZWEpID0+IHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGFyZWEuZ2V0QXR0cmlidXRlKCd4JykpO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoYXJlYS5nZXRBdHRyaWJ1dGUoJ3knKSk7XG5cbiAgcmV0dXJuIHsgeDogeCwgeTogeSB9XG59XG5cbmNvbnN0IHJlbmRlckJvYXJkcyA9IChwbGF5ZXJHYW1lYm9hcmQsIEFJR2FtZWJvYXJkKSA9PiB7XG4gIHJlbmRlck1pc3NlcyhwbGF5ZXJHYW1lYm9hcmQsIGZhbHNlKTtcbiAgcmVuZGVySGl0cyhwbGF5ZXJHYW1lYm9hcmQsIGZhbHNlKTtcbiAgcmVuZGVyTWlzc2VzKEFJR2FtZWJvYXJkLCB0cnVlKTtcbiAgcmVuZGVySGl0cyhBSUdhbWVib2FyZCwgdHJ1ZSk7XG59XG5cbmNvbnN0IHJlbmRlck1pc3NlcyA9IChib2FyZCwgaXNBSSkgPT4ge1xuICBjb25zdCBtaXNzZXMgPSBib2FyZC5nZXRNaXNzZXMoKTtcblxuICBsZXQgZ2FtZWJvYXJkO1xuICBpZiAoaXNBSSkge1xuICAgIGdhbWVib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhaS1ib2FyZCcpO1xuICB9IGVsc2Uge1xuICAgIGdhbWVib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItYm9hcmQnKTtcbiAgfVxuXG4gIG1pc3Nlcy5tYXAoKG1pc3MpID0+IHtcbiAgICBjb25zdCBhcmVhID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFt4PVwiJHttaXNzLnh9XCJdW3k9XCIke21pc3MueX1cIl1gKTtcbiAgICBhcmVhLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgfSk7XG59XG5cbmNvbnN0IHJlbmRlckhpdHMgPSAoYm9hcmQsIGlzQUkpID0+IHtcbiAgY29uc3QgaGl0cyA9IGJvYXJkLmdldEhpdHMoKTtcbiAgXG4gIGxldCBnYW1lYm9hcmQ7XG4gIGlmIChpc0FJKSB7XG4gICAgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FpLWJvYXJkJyk7XG4gIH0gZWxzZSB7XG4gICAgZ2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICB9XG5cbiAgaGl0cy5tYXAoKGhpdCkgPT4ge1xuICAgIGNvbnN0IGFyZWEgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgW3g9XCIke2hpdC54fVwiXVt5PVwiJHtoaXQueX1cIl1gKTtcbiAgICBhcmVhLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICB9KTtcbn1cblxuY29uc3QgZ2V0VmVydGljYWxTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtdmVydGljYWwtYnRuJyk7XG4gIFxuICByZXR1cm4gYnV0dG9uLmdldEF0dHJpYnV0ZSgnaXNWZXJ0aWNhbCcpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG59XG5cbmNvbnN0IGNoYW5nZU9yaWVudGF0aW9uID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaXNWZXJ0aWNhbCcsICFnZXRWZXJ0aWNhbFN0YXR1cygpKTtcbn1cblxuY29uc3Qgc2V0VXBSZXNldCA9IChjYWxsYmFjaykgPT4ge1xuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idG4nKTtcblxuICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbn1cblxuY29uc3QgcmVzZXRVSSA9ICgpID0+IHtcbiAgY29uc3QgYXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJlYScpO1xuICBjb25zdCBlbmRTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5kLXNjcmVlbicpO1xuICBjb25zdCBnYW1lU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NyZWVuJyk7XG5cbiAgYXJlYXMuZm9yRWFjaCgoYXJlYSkgPT4ge1xuICAgIGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG4gICAgYXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzJyk7XG4gICAgYXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgYXJlYS50ZXh0Q29udGVudCA9ICcnO1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKGFyZWEpO1xuICB9KTtcblxuICBoaWRlRWxlbWVudChlbmRTY3JlZW4pO1xuICBzaG93RWxlbWVudChnYW1lU2NyZWVuKTtcbn1cblxuY29uc3QgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIGVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgZWxlbWVudCk7XG59XG5cbmV4cG9ydCB7XG4gIGluaXRVSSwgXG4gIHJlbmRlclNoaXBzLFxuICBnZXRDb29yZHMsXG4gIHJlbmRlckJvYXJkcyxcbiAgc2hvd0VuZFNjcmVlbixcbiAgZ2V0VmVydGljYWxTdGF0dXMsXG4gIHJlc2V0VUksXG4gIGFkZEFyZWFFdmVudExpc3RlbmVycyxcbn07IiwiaW1wb3J0IHsgXG4gIGluaXRVSSxcbiAgcmVuZGVyU2hpcHMsXG4gIGdldENvb3JkcyxcbiAgcmVuZGVyQm9hcmRzLFxuICBzaG93RW5kU2NyZWVuLFxuICBnZXRWZXJ0aWNhbFN0YXR1cyxcbiAgcmVzZXRVSSxcbiAgYWRkQXJlYUV2ZW50TGlzdGVuZXJzLFxuICB9IGZyb20gXCIuL1VJVXRpbHNcIjtcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCJcbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHNoaXBzIGZyb20gXCIuL3V0aWxzXCI7XG5cbi8qXG5UT0RPXG51aSAtPiBzaG93IHdoZXJlIHRoZSBzaGlwIHdpbGwgYmUgcGxhY2VkXG4qL1xuY29uc3QgcGxheWVyMSA9IHBsYXllcigpO1xuY29uc3QgQUkgPSBwbGF5ZXIoKTtcbmNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbmNvbnN0IEFJR2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuXG5jb25zdCBzdGFydCA9ICgpID0+IHtcbiAgaW5pdFVJKHJlc2V0KTtcbiAgaW5pdEdhbWUoKTtcbn1cblxuY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gIHBsYXllcjEucmVzZXRBdHRhY2tzKCk7XG4gIEFJLnJlc2V0QXR0YWNrcygpO1xuICBwbGF5ZXJHYW1lYm9hcmQucmVzZXQoKTtcbiAgQUlHYW1lYm9hcmQucmVzZXQoKTtcbiAgcmVzZXRVSSgpO1xuICBpbml0R2FtZSgpO1xufVxuXG5jb25zdCBpbml0R2FtZSA9ICgpID0+IHtcbiAgQUlHYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KHNoaXBzKTtcbiAgcmVuZGVyU2hpcHMoQUlHYW1lYm9hcmQuZ2V0U2hpcHMoKSwgdHJ1ZSk7XG4gIHJlbmRlclNoaXBzKHBsYXllckdhbWVib2FyZC5nZXRTaGlwcygpLCBmYWxzZSk7XG5cbiAgYWRkQXJlYUV2ZW50TGlzdGVuZXJzKCdwbGF5ZXItYm9hcmQnLCBwbGFjZVNoaXBzKTtcbn1cblxuY29uc3QgcGxhY2VTaGlwcyA9IChldmVudCkgPT4ge1xuICBjb25zdCB7IHgsIHkgfSA9IGdldENvb3JkcyhldmVudC50YXJnZXQpO1xuXG4gIGNvbnN0IGN1cnJlbnRTaGlwc051bWJlciA9IHBsYXllckdhbWVib2FyZC5nZXRTaGlwcygpLmxlbmd0aDtcbiAgaWYgKGN1cnJlbnRTaGlwc051bWJlciAhPT0gc2hpcHMubGVuZ3RoKSB7XG4gICAgcGxheWVyR2FtZWJvYXJkLmFkZFNoaXAoeCwgeSwgc2hpcHNbY3VycmVudFNoaXBzTnVtYmVyXS5sZW5ndGgsIGdldFZlcnRpY2FsU3RhdHVzKCkpO1xuICB9XG5cbiAgaWYgKHBsYXllckdhbWVib2FyZC5nZXRTaGlwcygpLmxlbmd0aCA9PT0gc2hpcHMubGVuZ3RoKSB7XG4gICAgYWRkQXJlYUV2ZW50TGlzdGVuZXJzKCdhaS1ib2FyZCcsIGF0dGFjayk7XG4gIH1cblxuICByZW5kZXJTaGlwcyhwbGF5ZXJHYW1lYm9hcmQuZ2V0U2hpcHMoKSwgZmFsc2UpO1xufVxuXG5jb25zdCByYW5kb21BdHRhY2sgPSAocGxheWVyLCBlbmVteUJvYXJkKSA9PiB7XG4gIGNvbnN0IHsgeCwgeSB9ID0gcGxheWVyLmdlbmVyYXRlTmV4dE1vdmUoKTtcbiAgcGxheWVyLmF0dGFjayh4LCB5LCBlbmVteUJvYXJkKTtcbn1cblxuY29uc3QgYXR0YWNrID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgeCwgeSB9ID0gZ2V0Q29vcmRzKGV2ZW50LnRhcmdldCk7XG5cbiAgcGxheWVyMS5hdHRhY2soeCwgeSwgQUlHYW1lYm9hcmQpO1xuICByYW5kb21BdHRhY2soQUksIHBsYXllckdhbWVib2FyZCk7XG4gIHJlbmRlckJvYXJkcyhwbGF5ZXJHYW1lYm9hcmQsIEFJR2FtZWJvYXJkKTtcbiAgY2hlY2tHYW1lT3ZlcigpO1xufVxuXG5jb25zdCBjaGVja0dhbWVPdmVyID0gKCkgPT4ge1xuICBpZiAocGxheWVyR2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpIHx8IEFJR2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgc2hvd0VuZFNjcmVlbigpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXJ0OyIsImltcG9ydCBzaGlwRmFjdG9yeSBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIGdhbWVib2FyZEZhY3RvcnkoKSB7XG4gIGxldCBzaGlwcyA9IFtdO1xuICBsZXQgbWlzc2VkID0gW107XG4gIGxldCBoaXRzID0gW107XG5cbiAgY29uc3QgYWRkU2hpcCA9ICh4LCB5LCBsZW5ndGggPSAxLCBpc1ZlcnRpY2FsID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBzaGlwID0gc2hpcEZhY3RvcnkobGVuZ3RoKTtcblxuICAgIGlmICghaXNTaGlwUGxhY2VtZW50VmFsaWQoeyB4OngsIHk6IHksIHNoaXA6IHNoaXAsIGlzVmVydGljYWw6IGlzVmVydGljYWx9KSkge1xuICAgICAgdGhyb3coJ3NoaXAgcGxhY2VtZW50IGlzIG5vdCB2YWxpZCcpO1xuICAgIH1cblxuICAgIHNoaXBzLnB1c2goIHt4OiB4LCB5OiB5LCBzaGlwOiBzaGlwLCBpc1ZlcnRpY2FsOiBpc1ZlcnRpY2FsfSApO1xuICB9XG5cbiAgY29uc3QgaXNTaGlwT3ZlcmxhcHBpbmcgPSAoY3VyclNoaXApID0+IHtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gY3VyclNoaXAuc2hpcC5nZXRMZW5ndGgoKSAtIDE7XG4gICAgY29uc3QgbmV3U2hpcFN0YXJ0WCA9IGN1cnJTaGlwLng7XG4gICAgY29uc3QgbmV3U2hpcEVuZFggPSBjdXJyU2hpcC5pc1ZlcnRpY2FsID8gY3VyclNoaXAueCA6IGN1cnJTaGlwLnggKyBzaGlwTGVuZ3RoO1xuICAgIGNvbnN0IG5ld1NoaXBTdGFydFkgPSBjdXJyU2hpcC55O1xuICAgIGNvbnN0IG5ld1NoaXBFbmRZID0gY3VyclNoaXAuaXNWZXJ0aWNhbCA/IGN1cnJTaGlwLnkgKyBzaGlwTGVuZ3RoIDogY3VyclNoaXAueTsgXG5cbiAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAuc2hpcC5nZXRMZW5ndGgoKSAtIDE7XG4gICAgICBjb25zdCBzaGlwU3RhcnRYID0gc2hpcC54O1xuICAgICAgY29uc3Qgc2hpcEVuZFggPSBzaGlwLmlzVmVydGljYWwgPyBzaGlwLnggOiBzaGlwLnggKyBsZW5ndGg7XG4gICAgICBjb25zdCBzaGlwU3RhcnRZID0gc2hpcC55O1xuICAgICAgY29uc3Qgc2hpcEVuZFkgPSBzaGlwLmlzVmVydGljYWwgPyBzaGlwLnkgKyBsZW5ndGggOiBzaGlwLnk7XG5cbiAgICAgIGlmICghKG5ld1NoaXBTdGFydFggPiBzaGlwRW5kWCB8fCBuZXdTaGlwU3RhcnRZID4gc2hpcEVuZFkgfHxcbiAgICAgICAgbmV3U2hpcEVuZFggPCBzaGlwU3RhcnRYIHx8IG5ld1NoaXBFbmRZIDwgc2hpcFN0YXJ0WSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcGxhY2VTaGlwc1JhbmRvbWx5ID0gKHNoaXBMaXN0KSA9PiB7XG4gICAgc2hpcExpc3QubWFwKChzaGlwKSA9PiB7XG4gICAgICBsZXQgcmV0cnkgPSB0cnVlO1xuXG4gICAgICB3aGlsZSAocmV0cnkpIHtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IHNoaXBGYWN0b3J5KHNoaXAubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBnZXRSYW5kb21Db29yZHMoKTtcbiAgICAgICAgY29uc3QgaXNWZXJ0aWNhbCA9IGdldFJhbmRvbU9yaWVudGF0aW9uKCk7XG5cbiAgICAgICAgaWYgKGlzU2hpcFBsYWNlbWVudFZhbGlkKHsgeDogeCwgeTogeSwgc2hpcDogbmV3U2hpcCwgaXNWZXJ0aWNhbCB9KSkge1xuICAgICAgICAgIGFkZFNoaXAoeCwgeSwgc2hpcC5sZW5ndGgsIGlzVmVydGljYWwpO1xuICAgICAgICAgIHJldHJ5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IHNoaXBIaXQgPSBzaGlwcy5maW5kKChpdGVtKSA9PlxuICAgICAgKFxuICAgICAgICBpdGVtLmlzVmVydGljYWwgP1xuICAgICAgICBjaGVja1ZlcnRpY2FsKHgsIHksIGl0ZW0pIDpcbiAgICAgICAgY2hlY2tIb3Jpem9udGFsKHgsIHksIGl0ZW0pXG4gICAgICApXG4gICAgKTtcblxuICAgIGlmKHNoaXBIaXQpIHtcbiAgICAgIGFkZEhpdCh4LCB5KTtcbiAgICAgIHNlbmRIaXRUb1NoaXAoeCwgeSwgc2hpcEhpdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZE1pc3NlZCh4LCB5KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZW5kSGl0VG9TaGlwID0gKHgsIHksIGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5pc1ZlcnRpY2FsKSB7XG4gICAgICBpdGVtLnNoaXAuaGl0KHkgLSBpdGVtLnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLnNoaXAuaGl0KHggLSBpdGVtLngpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGlzU2hpcFBsYWNlbWVudFZhbGlkID0gKHNoaXApID0+IHtcbiAgICBpZiAoKHNoaXAuaXNWZXJ0aWNhbCAmJiBzaGlwLnkgKyBzaGlwLnNoaXAuZ2V0TGVuZ3RoKCkgPiAxMCkgfHxcbiAgICAgICghc2hpcC5pc1ZlcnRpY2FsICYmIHNoaXAueCArIHNoaXAuc2hpcC5nZXRMZW5ndGgoKSA+IDEwKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzU2hpcE92ZXJsYXBwaW5nKHNoaXApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBjaGVja1ZlcnRpY2FsID0gKHgsIHksIGl0ZW0pID0+IHtcbiAgICByZXR1cm4gKHkgPj0gaXRlbS55ICYmIHkgPCBpdGVtLnkgKyBpdGVtLnNoaXAuZ2V0TGVuZ3RoKCkpICYmIChpdGVtLnggPT09IHgpXG4gIH1cblxuICBjb25zdCBjaGVja0hvcml6b250YWwgPSAoeCwgeSwgaXRlbSkgPT4ge1xuICAgIHJldHVybiAoeCA+PSBpdGVtLnggJiYgeCA8IGl0ZW0ueCArIGl0ZW0uc2hpcC5nZXRMZW5ndGgoKSkgJiYgKGl0ZW0ueSA9PT0geSlcbiAgfVxuXG4gIGNvbnN0IGFyZUFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcHMuZXZlcnkoKGl0ZW0pID0+IGl0ZW0uc2hpcC5pc1N1bmsoKSk7XG4gIH1cblxuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBzaGlwcyA9IFtdO1xuICAgIG1pc3NlZCA9IFtdO1xuICAgIGhpdHMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IGFkZE1pc3NlZCA9ICh4LCB5KSA9PiBtaXNzZWQucHVzaCgge3g6IHgsIHk6IHl9ICk7XG4gIGNvbnN0IGFkZEhpdCA9ICh4LCB5KSA9PiBoaXRzLnB1c2goIHt4OiB4LCB5OiB5fSApO1xuICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IFsuLi5zaGlwc107ICBcbiAgY29uc3QgZ2V0TWlzc2VzID0gKCkgPT4gWy4uLm1pc3NlZF07XG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiBbLi4uaGl0c107XG4gIGNvbnN0IGdldFJhbmRvbU9yaWVudGF0aW9uID0gKCkgPT4gTWF0aC5yYW5kb20oKSA+IDAuNSA/IHRydWUgOiBmYWxzZTtcbiAgY29uc3QgZ2V0UmFuZG9tQ29vcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkU2hpcCxcbiAgICBnZXRTaGlwcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGdldE1pc3NlcyxcbiAgICBnZXRIaXRzLFxuICAgIGFyZUFsbFNoaXBzU3VuayxcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHksXG4gICAgcmVzZXQsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkRmFjdG9yeTtcbiIsImZ1bmN0aW9uIHBsYXllcigpIHtcbiAgbGV0IGF0dGFja3MgPSBbXTtcblxuICBjb25zdCBhdHRhY2sgPSAoeCwgeSwgYm9hcmQpID0+IHtcbiAgICBpZiAoaGFzQWxyZWFkeUhpdCh4LCB5KSkge1xuICAgICAgdGhyb3coJ2NhblxcJ3QgYXR0YWNrIGluIHByZXZpb3VzbHkgYXR0YWNrZWQgc3BhY2UnKTtcbiAgICB9XG4gICAgXG4gICAgYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICBhdHRhY2tzLnB1c2goeyB4OiB4LCB5OiB5IH0pXG4gIH1cblxuICBjb25zdCBnZW5lcmF0ZU5leHRNb3ZlID0gKCkgPT4ge1xuICAgIGxldCB4ID0gZ2V0UmFuZG9tTnVtYmVyKCk7XG4gICAgbGV0IHkgPSBnZXRSYW5kb21OdW1iZXIoKTtcbiAgICBcbiAgICB3aGlsZSAoaGFzQWxyZWFkeUhpdCh4LCB5KSkge1xuICAgICAgeCA9IGdldFJhbmRvbU51bWJlcigpO1xuICAgICAgeSA9IGdldFJhbmRvbU51bWJlcigpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfVxuICB9XG4gIFxuICBjb25zdCBnZXRSYW5kb21OdW1iZXIgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGNvbnN0IGhhc0FscmVhZHlIaXQgPSAoeCwgeSkgPT4gYXR0YWNrcy5zb21lKChpdGVtKSA9PiBpdGVtLnggPT09IHggJiYgaXRlbS55ID09PSB5KTtcbiAgY29uc3QgZ2V0QXR0YWNrcyA9ICgpID0+IFsuLi5hdHRhY2tzXTtcbiAgY29uc3QgcmVzZXRBdHRhY2tzID0gKCkgPT4gYXR0YWNrcyA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgYXR0YWNrLFxuICAgIGdldEF0dGFja3MsXG4gICAgZ2VuZXJhdGVOZXh0TW92ZSxcbiAgICByZXNldEF0dGFja3MsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImZ1bmN0aW9uIHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgpIHtcbiAgbGV0IGhpdE1hcmtzID0gW107XG4gIGNvbnN0IGxlbmd0aCA9IHNoaXBMZW5ndGg7XG5cbiAgY29uc3QgaGl0ID0gKG4pID0+IHtcbiAgICBpZihuIDwgMCB8fCBuID49IGxlbmd0aCkge1xuICAgICAgdGhyb3coJ2hpdCBwb2ludCBvdXQgb2YgcmFuZ2UnKTtcbiAgICB9XG4gICAgaGl0TWFya3MucHVzaChuKTtcbiAgfVxuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdE1hcmtzLmxlbmd0aCA9PT0gbGVuZ3RoO1xuICBjb25zdCBnZXRIaXRNYXJrcyA9ICgpID0+IFsuLi5oaXRNYXJrc107XG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcbiAgXG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgZ2V0SGl0TWFya3MsXG4gICAgaXNTdW5rLFxuICAgIGdldExlbmd0aCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaGlwRmFjdG9yeTsiLCIvKlxuQ2FycmllciBcdDVcbkJhdHRsZXNoaXAgXHQ0XG5EZXN0cm95ZXIgXHQzXG5TdWJtYXJpbmUgXHQzXG5QYXRyb2wgQm9hdCBcdDIgXG4qL1xuY29uc3Qgc2hpcHMgPSBbXG4gIHtcbiAgICBuYW1lOiAnY2FycmllcicsXG4gICAgbGVuZ3RoOiA1LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2JhdHRsZXNoaXAnLFxuICAgIGxlbmd0aDogNCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkZXN0cm95ZXInLFxuICAgIGxlbmd0aDogMyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzdWJtYXJpbmUnLFxuICAgIGxlbmd0aDogMyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdwYXRyb2wgYm9hdCcsXG4gICAgbGVuZ3RoOiAyXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBzaGlwczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3RhcnQgZnJvbSBcIi4vZ2FtZS5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICBzdGFydCgpO1xufVxuXG5jb21wb25lbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=