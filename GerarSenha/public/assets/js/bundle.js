/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/gerarSenha.js":
/*!***********************************!*\
  !*** ./src/modules/gerarSenha.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gerarSenha)
/* harmony export */ });
var rand = function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
var gerarLetraMa = function gerarLetraMa() {
  return String.fromCharCode(rand(65, 91));
};
var gerarLetraMi = function gerarLetraMi() {
  return String.fromCharCode(rand(97, 123));
};
var gerarN = function gerarN() {
  return String.fromCharCode(rand(48, 58));
};
var simbolos = String("!@#$%¨&*()_-+={[}]~;:.,");
var gerarS = function gerarS() {
  return simbolos[rand(0, simbolos.length)];
};
function gerarSenha(qtd, letraMa, letraMi, num, simb) {
  var senhaArray = [];
  qtd = Number(qtd);
  for (var i = 0; i <= qtd; i++) {
    letraMa && senhaArray.push(gerarLetraMa());
    letraMi && senhaArray.push(gerarLetraMi());
    num && senhaArray.push(gerarN());
    simb && senhaArray.push(gerarS());
  }
  var senha = senhaArray.join("").slice(0, qtd);
  if (senha.length === qtd) return senha;else gerarSenha(qtd, letraMa, letraMi, num, simb);
}

/***/ }),

/***/ "./src/modules/pegarSenha.js":
/*!***********************************!*\
  !*** ./src/modules/pegarSenha.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkMa": () => (/* binding */ checkMa),
/* harmony export */   "checkMi": () => (/* binding */ checkMi),
/* harmony export */   "checkN": () => (/* binding */ checkN),
/* harmony export */   "checkS": () => (/* binding */ checkS),
/* harmony export */   "qtd": () => (/* binding */ qtd),
/* harmony export */   "senhaGerada": () => (/* binding */ senhaGerada)
/* harmony export */ });
/* harmony import */ var _gerarSenha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gerarSenha */ "./src/modules/gerarSenha.js");

var qtd = document.querySelector('.qtd');
var checkMa = document.querySelector('.checkMa');
var checkMi = document.querySelector('.checkMi');
var checkN = document.querySelector('.checkN');
var checkS = document.querySelector('.checkS');
var senhaGerada = function senhaGerada() {
  return (0,_gerarSenha__WEBPACK_IMPORTED_MODULE_0__["default"])(qtd.value, checkMa.checked, checkMi.checked, checkN.checked, checkS.checked);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lora&family=Roboto+Mono:wght@100&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --color-standard: rgb(10, 73, 109);\r\n  --font: 'Lora', serif;\r\n}\r\n\r\n\r\n* {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\nbody {\r\n  background-color: var(--color-standard);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: rgb(66, 243, 234);\r\n}\r\n\r\n.container {\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.253);\r\n  margin: 150px auto;\r\n  padding: 20px;\r\n\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  max-width: 600px;\r\n  text-align: center;\r\n\r\n  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.315);\r\n}\r\n\r\n.container:hover {\r\n  animation-name: boxshadow;\r\n  animation-duration: 1s;\r\n  box-shadow: 3px 3px 20px 10px rgba(0, 0, 0, 0.658);\r\n}\r\n\r\n@keyframes boxshadow {\r\n  0% {\r\n    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.315);\r\n  }\r\n\r\n  100% {\r\n    box-shadow: 3px 3px 20px 10px rgba(0, 0, 0, 0.658);\r\n  }\r\n}\r\n\r\n.container > h1 {\r\n  font-family: var(--font);\r\n  font-size: 3em;\r\n}\r\n\r\n.container > h2 {\r\n  font-size: 2em;\r\n  margin: 10px;\r\n}\r\n\r\n.senha-gerada {\r\n  font-size: 1.6em;\r\n}\r\n\r\n.qtd {\r\n  width: 60px;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.display-style {\r\n  color: white;\r\n\r\n  \r\n\r\n  font-size: 2em;\r\n\r\n  margin: 10px;\r\n  padding: 5px;\r\n\r\n  border: 1px solid rgba(0, 0, 0, 0.562);\r\n  border-radius: 15px;\r\n\r\n  box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.466);\r\n  \r\n}\r\n\r\n.footer {\r\n  font-size: 2.3em;\r\n  color: white;\r\n  \r\n  text-align: center;\r\n}\r\n\r\n.gerar {\r\n  border: none;\r\n  border-radius: 5px;\r\n\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n\r\n  background-color: rgba(0, 0, 0, 0.418);\r\n  color: white;\r\n\r\n  padding: 10px;\r\n  margin: 20px;\r\n\r\n\r\n}\r\n\r\n.gerar:hover {\r\n  background-color: rgb(0, 0, 0);\r\n}\r\n\r\n.gerar:active {\r\n  background-color: rgb(8, 38, 48);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAEA;EACE,kCAAkC;EAClC,qBAAqB;AACvB;;;AAGA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,sCAAsC;EACtC,kBAAkB;EAClB,aAAa;;EAEb,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;;EAElB,iDAAiD;AACnD;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,kDAAkD;AACpD;;AAEA;EACE;IACE,iDAAiD;EACnD;;EAEA;IACE,kDAAkD;EACpD;AACF;;AAEA;EACE,wBAAwB;EACxB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,YAAY;;;;EAIZ,cAAc;;EAEd,YAAY;EACZ,YAAY;;EAEZ,sCAAsC;EACtC,mBAAmB;;EAEnB,uDAAuD;;AAEzD;;AAEA;EACE,gBAAgB;EAChB,YAAY;;EAEZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;;EAElB,yCAAyC;EACzC,cAAc;EACd,eAAe;;EAEf,sCAAsC;EACtC,YAAY;;EAEZ,aAAa;EACb,YAAY;;;AAGd;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lora&family=Roboto+Mono:wght@100&display=swap');\r\n\r\n:root {\r\n  --color-standard: rgb(10, 73, 109);\r\n  --font: 'Lora', serif;\r\n}\r\n\r\n\r\n* {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\nbody {\r\n  background-color: var(--color-standard);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: rgb(66, 243, 234);\r\n}\r\n\r\n.container {\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.253);\r\n  margin: 150px auto;\r\n  padding: 20px;\r\n\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  max-width: 600px;\r\n  text-align: center;\r\n\r\n  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.315);\r\n}\r\n\r\n.container:hover {\r\n  animation-name: boxshadow;\r\n  animation-duration: 1s;\r\n  box-shadow: 3px 3px 20px 10px rgba(0, 0, 0, 0.658);\r\n}\r\n\r\n@keyframes boxshadow {\r\n  0% {\r\n    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.315);\r\n  }\r\n\r\n  100% {\r\n    box-shadow: 3px 3px 20px 10px rgba(0, 0, 0, 0.658);\r\n  }\r\n}\r\n\r\n.container > h1 {\r\n  font-family: var(--font);\r\n  font-size: 3em;\r\n}\r\n\r\n.container > h2 {\r\n  font-size: 2em;\r\n  margin: 10px;\r\n}\r\n\r\n.senha-gerada {\r\n  font-size: 1.6em;\r\n}\r\n\r\n.qtd {\r\n  width: 60px;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.display-style {\r\n  color: white;\r\n\r\n  \r\n\r\n  font-size: 2em;\r\n\r\n  margin: 10px;\r\n  padding: 5px;\r\n\r\n  border: 1px solid rgba(0, 0, 0, 0.562);\r\n  border-radius: 15px;\r\n\r\n  box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.466);\r\n  \r\n}\r\n\r\n.footer {\r\n  font-size: 2.3em;\r\n  color: white;\r\n  \r\n  text-align: center;\r\n}\r\n\r\n.gerar {\r\n  border: none;\r\n  border-radius: 5px;\r\n\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n\r\n  background-color: rgba(0, 0, 0, 0.418);\r\n  color: white;\r\n\r\n  padding: 10px;\r\n  margin: 20px;\r\n\r\n\r\n}\r\n\r\n.gerar:hover {\r\n  background-color: rgb(0, 0, 0);\r\n}\r\n\r\n.gerar:active {\r\n  background-color: rgb(8, 38, 48);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_pegarSenha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pegarSenha */ "./src/modules/pegarSenha.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");


document.addEventListener('click', function (e) {
  var el = e.target;
  if (el.classList.contains('gerar')) {
    var display = document.querySelector(".display");
    var senha = (0,_modules_pegarSenha__WEBPACK_IMPORTED_MODULE_0__.senhaGerada)();
    if (senha) {
      display.classList.add('display-style');
      display.innerHTML = senha;
    } else if (!_modules_pegarSenha__WEBPACK_IMPORTED_MODULE_0__.qtd.value) {
      alert('Adicione a quantidade de caracteres que deseja.');
      display.innerHTML = '';
      display.classList.remove('display-style');
    } else if (!_modules_pegarSenha__WEBPACK_IMPORTED_MODULE_0__.checkMa.checked && !_modules_pegarSenha__WEBPACK_IMPORTED_MODULE_0__.checkMi.checked && !_modules_pegarSenha__WEBPACK_IMPORTED_MODULE_0__.checkN.checked && !_modules_pegarSenha__WEBPACK_IMPORTED_MODULE_0__.checkS.checked) alert('Selecione alguma das opções.');
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map