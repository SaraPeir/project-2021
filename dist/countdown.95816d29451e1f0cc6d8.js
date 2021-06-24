(self["webpackChunkproject_2021"] = self["webpackChunkproject_2021"] || []).push([["countdown"],{

/***/ "./src/components/Countdown/Countdown.js":
/*!***********************************************!*\
  !*** ./src/components/Countdown/Countdown.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Headline_Headline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/Headline/Headline */ "./src/shared/Headline/Headline.js");



function getDateDifference(date2, date1) {
  var _MS_PER_DAY = 1000 * 60 * 60 * 24; // Discard the time and time-zone information.


  var utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  var utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

var todayDate = new Date();
var nextYear = todayDate.getFullYear() + 1;
var nextYearDate = new Date("".concat(nextYear, "-01-01"));
var dateDifference = getDateDifference(nextYearDate, todayDate);

function Countdown() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Headline_Headline__WEBPACK_IMPORTED_MODULE_1__.default, null, "Count down to ".concat(nextYear)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "".concat(dateDifference, " days")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Countdown);

/***/ })

}]);
//# sourceMappingURL=countdown.95816d29451e1f0cc6d8.js.map