webpackHotUpdate(4,{

/***/ "./components/ProductList.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/missmeow/Documents/Capstone/personafi/components/ProductList.js: Unexpected token (27:0)\n\n  25 | // export default ({ products }) => (\n  26 | //   <Item.Group items={mapProductsToItems(products)} />\n> 27 | )\n     | ^\n  28 | \n    at _class.raise (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2063:16)\n    at _class.parseExprAtom (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3125:20)\n    at _class.parseExprAtom (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprSubscripts (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseExpression (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2499:21)\n    at _class.parseStatementContent (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:4040:21)\n    at _class.parseStatement (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:4457:10)");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_moltin__ = __webpack_require__("./lib/moltin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ProductList__ = __webpack_require__("./components/ProductList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ProductList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_ProductList__);

var _jsxFileName = "/Users/missmeow/Documents/Capstone/personafi/pages/index.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var Home = function Home(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
    title: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ProductList__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })));
};

Home.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var products;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_2__lib_moltin__["a" /* getProducts */])();

        case 2:
          products = _context.sent;
          return _context.abrupt("return", {
            products: products
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.7fa6071de62495f2732b.hot-update.js.map