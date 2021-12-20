/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/app.ts":
/*!*******************!*\
  !*** ./ts/app.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getImage */ \"./ts/getImage.ts\");\n/* harmony import */ var _clickImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickImage */ \"./ts/clickImage.ts\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination */ \"./ts/pagination.ts\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initial */ \"./ts/initial.ts\");\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', _getImage__WEBPACK_IMPORTED_MODULE_0__.getImages);\n_initial__WEBPACK_IMPORTED_MODULE_4__.initial.PREVIOUS_BUTTON.addEventListener('click', _pagination__WEBPACK_IMPORTED_MODULE_2__.getPreviousPage);\n_initial__WEBPACK_IMPORTED_MODULE_4__.initial.NEXT_BUTTON.addEventListener('click', _pagination__WEBPACK_IMPORTED_MODULE_2__.getNextPage);\n\n//# sourceURL=webpack://todo-list/./ts/app.ts?");

/***/ }),

/***/ "./ts/clickImage.ts":
/*!**************************!*\
  !*** ./ts/clickImage.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBigImage\": () => (/* binding */ getBigImage),\n/* harmony export */   \"removeBigImageBtn\": () => (/* binding */ removeBigImageBtn)\n/* harmony export */ });\n/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ \"./ts/initial.ts\");\n\nfunction getBigImage() {\n  var div = document.createElement('div');\n  var img = document.createElement('img');\n  var button = document.createElement('button');\n  div.className = 'big-image-container';\n  img.className = 'big-image-item';\n  button.className = 'buttons';\n  button.textContent = 'Remove';\n  button.id = 'remove-btn';\n  _initial__WEBPACK_IMPORTED_MODULE_0__.initial.divContainerImg.prepend(div);\n  div.prepend(img);\n  div.prepend(button);\n  img.src = this.src;\n  var BUTTON_REMOVE_BIG_IMAGE = document.getElementById('remove-btn');\n  BUTTON_REMOVE_BIG_IMAGE.addEventListener('click', removeBigImageBtn);\n}\nfunction removeBigImageBtn(e) {\n  return e.target.parentElement.style.display = 'none';\n}\n\n//# sourceURL=webpack://todo-list/./ts/clickImage.ts?");

/***/ }),

/***/ "./ts/getImage.ts":
/*!************************!*\
  !*** ./ts/getImage.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getImages\": () => (/* binding */ getImages),\n/* harmony export */   \"printImages\": () => (/* binding */ printImages)\n/* harmony export */ });\n/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ \"./ts/initial.ts\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination */ \"./ts/pagination.ts\");\n/* harmony import */ var _clickImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickImage */ \"./ts/clickImage.ts\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nfunction getImages() {\n  return _getImages.apply(this, arguments);\n}\n\nfunction _getImages() {\n  _getImages = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var page;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(_initial__WEBPACK_IMPORTED_MODULE_0__.initial.DOG_API).then(function (res) {\n              return res.json();\n            }).then(function (data) {\n              return data.message.forEach(function (element) {\n                return _initial__WEBPACK_IMPORTED_MODULE_0__.initial.apiArray.push(element);\n              });\n            });\n\n          case 3:\n            _context.next = 8;\n            break;\n\n          case 5:\n            _context.prev = 5;\n            _context.t0 = _context[\"catch\"](0);\n            console.log('api fail: ', _context.t0);\n\n          case 8:\n            _context.prev = 8;\n            page = _initial__WEBPACK_IMPORTED_MODULE_0__.initial.apiArray.length - 1;\n            renderNumbersOfImage(page);\n            return _context.finish(8);\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 5, 8, 12]]);\n  }));\n  return _getImages.apply(this, arguments);\n}\n\nfunction renderNumbersOfImage(numbers) {\n  numbers = numbers / _initial__WEBPACK_IMPORTED_MODULE_0__.initial.itemsOnPage;\n\n  for (var i = 1; i <= numbers; i++) {\n    var li = document.createElement('li');\n    li.textContent = \"\".concat(i);\n    _initial__WEBPACK_IMPORTED_MODULE_0__.initial.UL_TAG.append(li);\n  }\n\n  var _iterator = _createForOfIteratorHelper(_initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      item.addEventListener('click', _pagination__WEBPACK_IMPORTED_MODULE_1__.paginations);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\nfunction printImages(array) {\n  if (_initial__WEBPACK_IMPORTED_MODULE_0__.initial.divContainerImg.children.length !== 0) {\n    _initial__WEBPACK_IMPORTED_MODULE_0__.initial.divContainerImg.innerHTML = '';\n  }\n\n  var countId = 0;\n\n  var _iterator2 = _createForOfIteratorHelper(array),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var item = _step2.value;\n      if (countId === _initial__WEBPACK_IMPORTED_MODULE_0__.initial.itemsOnPage) return;\n      countId++;\n      var div = document.createElement('div');\n      var img = document.createElement('img');\n      div.className = 'image-container';\n      div.id = countId;\n      img.className = 'image-item';\n      img.id = \"image-\".concat(countId);\n      img.src = item;\n      _initial__WEBPACK_IMPORTED_MODULE_0__.initial.divContainerImg.prepend(div);\n      div.prepend(img);\n\n      var _iterator3 = _createForOfIteratorHelper(_initial__WEBPACK_IMPORTED_MODULE_0__.initial.IMG),\n          _step3;\n\n      try {\n        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n          var _item = _step3.value;\n\n          _item.addEventListener('click', _clickImage__WEBPACK_IMPORTED_MODULE_2__.getBigImage);\n        }\n      } catch (err) {\n        _iterator3.e(err);\n      } finally {\n        _iterator3.f();\n      }\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n}\n\n//# sourceURL=webpack://todo-list/./ts/getImage.ts?");

/***/ }),

/***/ "./ts/initial.ts":
/*!***********************!*\
  !*** ./ts/initial.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initial\": () => (/* binding */ initial)\n/* harmony export */ });\nvar initial = {\n  DOG_API: 'https://dog.ceo/api/breed/hound/images',\n  JSON_PLACEHOLDER_API: 'https://jsonplaceholder.typicode.com/photos?_limit=50',\n  apiArray: [],\n  divContainerImg: document.querySelector('.container-images'),\n  DIV_PAGINATION: document.querySelector('.pagination'),\n  UL_TAG: document.querySelector('ul'),\n  LI_TAG: document.getElementsByTagName('li'),\n  itemsOnPage: 16,\n  PREVIOUS_BUTTON: document.querySelector('#btn-previous'),\n  NEXT_BUTTON: document.querySelector('#btn-next'),\n  IMG: document.getElementsByClassName('image-item'),\n  BIG_IMAGE_DIV: document.querySelector('.big-image-container')\n};\n\n//# sourceURL=webpack://todo-list/./ts/initial.ts?");

/***/ }),

/***/ "./ts/pagination.ts":
/*!**************************!*\
  !*** ./ts/pagination.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paginations\": () => (/* binding */ paginations),\n/* harmony export */   \"getPreviousPage\": () => (/* binding */ getPreviousPage),\n/* harmony export */   \"getNextPage\": () => (/* binding */ getNextPage),\n/* harmony export */   \"getPieceOfArray\": () => (/* binding */ getPieceOfArray)\n/* harmony export */ });\n/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ \"./ts/initial.ts\");\n/* harmony import */ var _getImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getImage */ \"./ts/getImage.ts\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nfunction paginations() {\n  var _iterator = _createForOfIteratorHelper(_initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      item.classList.remove('active');\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  this.classList.add('active');\n  return getPieceOfArray(this.textContent);\n}\nfunction getPreviousPage() {\n  var prev;\n\n  for (var i = _initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG.length - 1; i >= 0; i--) {\n    if (_initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG[i].className === 'active') {\n      _initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG[i].classList.remove('active');\n      i--;\n\n      if (_initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG[i] === undefined) {\n        i = _initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG.length - 1;\n      }\n\n      _initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG[i].classList.add('active');\n      prev = Number(_initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG[i].innerHTML);\n    }\n  }\n\n  return getPieceOfArray(prev);\n}\nfunction getNextPage() {\n  var current;\n\n  for (var i = 0; i < _initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG.length; i++) {\n    if (_initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG[i].className === 'active') {\n      _initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG[i].classList.remove('active');\n      i++;\n\n      if (_initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG[i] === undefined) {\n        i = 0;\n      }\n\n      _initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG[i].classList.add('active');\n      current = Number(_initial__WEBPACK_IMPORTED_MODULE_0__.initial.LI_TAG[i].innerHTML);\n    }\n  }\n\n  return getPieceOfArray(current);\n}\nfunction getPieceOfArray(current) {\n  var start = (current - 1) * _initial__WEBPACK_IMPORTED_MODULE_0__.initial.itemsOnPage;\n  var end = start + _initial__WEBPACK_IMPORTED_MODULE_0__.initial.itemsOnPage;\n  var numberOfItems = _initial__WEBPACK_IMPORTED_MODULE_0__.initial.apiArray.slice(start, end);\n  return (0,_getImage__WEBPACK_IMPORTED_MODULE_1__.printImages)(numberOfItems);\n}\n\n//# sourceURL=webpack://todo-list/./ts/pagination.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/app.ts");
/******/ 	
/******/ })()
;