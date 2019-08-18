(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tristan/Src/Playground/cadstore/components/Card.js";


var Card = function Card(_ref) {
  var className = _ref.className,
      image = _ref.image,
      meta = _ref.meta,
      title = _ref.title,
      description = _ref.description,
      cost = _ref.cost,
      quantifier = _ref.quantifier,
      isNew = _ref.isNew;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative pb-80%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "absolute rounded-lg top-0 h-full w-full object-cover object-center shadow-md",
    src: image,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative px-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white rounded-lg -mt-12 p-5 shadow-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block text-xs text-gray-600 uppercase tracking-wide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, meta), isNew && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bg-green-500 px-2 uppercase text-xs font-semibold rounded-full shadow-xl text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Plus")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-lg font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mt-3 text-sm leading-snug",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex items-center mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-green-500 font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "$", cost), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-1 text-gray-600 text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "AUD / ", quantifier)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ftristan%2FSrc%2FPlayground%2Fcadstore%2Fpages%2Findex.js!./":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ftristan%2FSrc%2FPlayground%2Fcadstore%2Fpages%2Findex.js ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_129a35c7ec57967eb265 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_129a35c7ec57967eb265 */ "dll-reference dll_129a35c7ec57967eb265"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/Card */ "./components/Card.js");
var _jsxFileName = "/Users/tristan/Src/Playground/cadstore/pages/index.js";



var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex min-h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/5 bg-gray-800 relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-gray-900 h-20 flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "flex items-center justify-center text-white uppercase font-semibold tracking-wider fill-current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-5 h-5",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M5.33 12.77A4 4 0 1 1 3 5.13V5a4 4 0 0 1 5.71-3.62 3.5 3.5 0 0 1 6.26 1.66 2.5 2.5 0 0 1 2 2.08 4 4 0 1 1-2.7 7.49A5.02 5.02 0 0 1 12 14.58V18l2 1v1H6v-1l2-1v-3l-2.67-2.23zM5 10l3 3v-3H5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Workcation"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b-2 border-gray-900 py-8 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "flex-auto px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-gray-600 font-semibold text-sm",
    htmlFor: "bedrooms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Bedrooms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w-full mt-2 rounded-lg focus:outline-none focus:shadow-outline px-4 py-2 bg-gray-600 text-gray-100 placeholder-gray-200",
    type: "text",
    id: "bedrooms",
    placeholder: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "flex-auto px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-gray-600 font-semibold text-sm",
    htmlFor: "bathrooms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Bathrooms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w-full mt-2 rounded-lg focus:outline-none focus:shadow-outline px-4 py-2 bg-gray-600 text-gray-100 placeholder-gray-200",
    type: "text",
    id: "bathrooms",
    placeholder: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "flex-auto px-4 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block text-gray-600 font-semibold text-sm",
    htmlFor: "bedrooms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Price range"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w-full mt-2 rounded-lg focus:outline-none focus:shadow-outline px-4 py-2 bg-gray-600 text-gray-100 placeholder-gray-200",
    type: "text",
    id: "bedrooms",
    placeholder: "250 \u2013 500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-4/5 bg-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-gray-100 px-6 h-20 flex items-center justify-between border-b border-gray-400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w-64 bg-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:shadow-outline shadow-inner placeholder-gray-600",
    type: "text",
    placeholder: "Search by keywords...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "ml-10 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "focus:outline-none focus:shadow-outline",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "List your property")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "ml-10 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "focus:outline-none focus:shadow-outline",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Trips")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "ml-10 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "flex items-center focus:outline-none focus:shadow-outline",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Messages"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bg-gray-800 text-white rounded-full px-2 py-1 text-xs ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "25"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "ml-10 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "focus:outline-none focus:shadow-outline",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Support")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "ml-10 font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "block focus:outline-none shadow rounded-full overflow-hidden focus:shadow-outline",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-10 h-10",
    src: "https://www.trickscity.com/wp-content/uploads/2017/09/cute-profile-pics-for-whatsapp-images.png",
    alt: "Profile picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-end justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-xl font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Brisbane"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-sm text-indigo-600",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "View all"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex -mx-4 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "w-1/4 px-4",
    isNew: true,
    image: "https://cache.marriott.com/marriottassets/marriott/BNEWH/bnewh-wet-deck-3489-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*",
    meta: "2 Beds \u2013 4 Baths",
    title: "Mariott Resort",
    description: "Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores.",
    cost: 300,
    quantifier: "night",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "w-1/4 px-4",
    isNew: true,
    image: "https://cdn-blog.queensland.com/wp-content/uploads/2016/11/family-resorts-qt-port-douglas-tropical-north-queensland.jpg",
    meta: "2 Beds \u2013 4 Baths",
    title: "Mariott Resort",
    description: "Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores.",
    cost: 300,
    quantifier: "night",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "w-1/4 px-4",
    image: "https://www.thehotelconversation.com.au/sites/default/files/styles/article-full/public/oaks_charlotte_towers_brisbane_.jpg",
    meta: "2 Beds \u2013 4 Baths",
    title: "Mariott Resort",
    description: "Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores.",
    cost: 300,
    quantifier: "night",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "w-1/4 px-4",
    image: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Oceania/Australia/Brisbane/Beaches_Streets%20beach%20South%20Bank.jpg?imwidth=480",
    meta: "2 Beds \u2013 4 Baths",
    title: "Mariott Resort",
    description: "Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores.",
    cost: 300,
    quantifier: "night",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-end justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-xl font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Perth"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-sm text-indigo-600",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "View all"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex -mx-4 mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "w-1/4 px-4",
    image: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Oceania/Australia/Brisbane/Beaches_Streets%20beach%20South%20Bank.jpg?imwidth=480",
    meta: "2 Beds \u2013 4 Baths",
    title: "Mariott Resort",
    description: "Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores.",
    cost: 300,
    quantifier: "night",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "w-1/4 px-4",
    image: "https://cache.marriott.com/marriottassets/marriott/BNEWH/bnewh-wet-deck-3489-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*",
    meta: "2 Beds \u2013 4 Baths",
    title: "Mariott Resort",
    description: "Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores.",
    cost: 300,
    quantifier: "night",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "w-1/4 px-4",
    isNew: true,
    image: "https://www.thehotelconversation.com.au/sites/default/files/styles/article-full/public/oaks_charlotte_towers_brisbane_.jpg",
    meta: "2 Beds \u2013 4 Baths",
    title: "Mariott Resort",
    description: "Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores.",
    cost: 300,
    quantifier: "night",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "w-1/4 px-4",
    image: "https://cdn-blog.queensland.com/wp-content/uploads/2016/11/family-resorts-qt-port-douglas-tropical-north-queensland.jpg",
    meta: "2 Beds \u2013 4 Baths",
    title: "Mariott Resort",
    description: "Get busy or get beachy in 'Brissy' where power suits are traded for bathing suits as quickly as one can go from sleek skyscrapers to sun-soaked shores.",
    cost: 300,
    quantifier: "night",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fixed bg-gray-900 p-5 left-0 bottom-0 w-1/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bg-indigo-500 rounded-lg text-white font-semibold px-4 py-3 w-full text-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Update results")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 1:
/*!************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Ftristan%2FSrc%2FPlayground%2Fcadstore%2Fpages%2Findex.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Ftristan%2FSrc%2FPlayground%2Fcadstore%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Ftristan%2FSrc%2FPlayground%2Fcadstore%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_129a35c7ec57967eb265":
/*!*******************************************!*\
  !*** external "dll_129a35c7ec57967eb265" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_129a35c7ec57967eb265;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map