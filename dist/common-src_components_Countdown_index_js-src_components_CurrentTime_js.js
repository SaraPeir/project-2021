(self["webpackChunkproject_2021"] = self["webpackChunkproject_2021"] || []).push([["common-src_components_Countdown_index_js-src_components_CurrentTime_js"],{

/***/ "./src/components/Countdown/AsyncCountdown.js":
/*!****************************************************!*\
  !*** ./src/components/Countdown/AsyncCountdown.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
 // Countdown component is loaded by webpack only if user can see it. It's not included in main bundle any more

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
  return __webpack_require__.e(/*! import() | countdown */ "common-src_components_Countdown_Countdown_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Countdown */ "./src/components/Countdown/Countdown.js"));
}));

/***/ }),

/***/ "./src/components/Countdown/index.js":
/*!*******************************************!*\
  !*** ./src/components/Countdown/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AsyncCountdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncCountdown */ "./src/components/Countdown/AsyncCountdown.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AsyncCountdown__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/components/CurrentTime.js":
/*!***************************************!*\
  !*** ./src/components/CurrentTime.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_Headline_Headline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Headline/Headline */ "./src/shared/Headline/Headline.js");



function CurrentTime() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Headline_Headline__WEBPACK_IMPORTED_MODULE_1__.default, null, "Current date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, new Date().toDateString()));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentTime);

/***/ })

}]);
//# sourceMappingURL=common-src_components_Countdown_index_js-src_components_CurrentTime_js.js.map