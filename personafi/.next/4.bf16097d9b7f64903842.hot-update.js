webpackHotUpdate(4,{

/***/ "./components/ProductList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/missmeow/Documents/Capstone/personafi/components/ProductList.js";




var mapProductsToItems = function mapProductsToItems(products) {
  return products.map(function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        image = _ref.image,
        description = _ref.description,
        meta = _ref.meta;
    var price = meta.display_price.with_tax.formatted || null;
    return {
      childKey: id,
      image: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/product?id=".concat(id),
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Item */].Image, {
        size: "small",
        src: image,
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })),
      header: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/product?id=".concat(id),
        passHref: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Item */].Header, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, name)),
      description: description,
      meta: price
    };
  });
};

/* harmony default export */ __webpack_exports__["a"] = (function (_ref2) {
  var products = _ref2.products;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Item */].Group, {
    items: mapProductsToItems(products),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  });
});

/***/ })

})
//# sourceMappingURL=4.bf16097d9b7f64903842.hot-update.js.map