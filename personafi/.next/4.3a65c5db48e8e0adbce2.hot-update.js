webpackHotUpdate(4,{

/***/ "./components/ProductList.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/missmeow/Documents/Capstone/personafi/components/ProductList.js: Unexpected token, expected \";\" (22:9)\n\n  20 |     meta: price\n  21 |   }\n> 22 |   <style jsx global>{`\n     |          ^\n  23 |       body { \n  24 |         background-image:  linear-gradient(\n  25 |         rgba(148, 143, 145, 0.20),\n    at _class.raise (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2063:16)\n    at _class.semicolon (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2047:40)\n    at _class.parseReturnStatement (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:4272:12)\n    at _class.parseStatementContent (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3960:21)\n    at _class.parseStatement (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseBlock (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:4446:10)\n    at _class.parseFunctionBody (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3722:24)\n    at _class.parseArrowExpression (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3674:10)\n    at _class.parseParenAndDistinguishExpression (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3290:12)\n    at _class.parseExprAtom (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3081:21)\n    at _class.parseExprAtom (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:8086:52)");

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


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var Home = function Home(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
    title: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ProductList__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })));
};

Home.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var _ref2, data, main_images, products;

  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_2__lib_moltin__["c" /* getProducts */])();

        case 2:
          _ref2 = _context.sent;
          data = _ref2.data;
          main_images = _ref2.included.main_images;
          products = data.map(function (product) {
            var imageId = product.relationships.main_image ? product.relationships.main_image.data.id : false;
            return _objectSpread({}, product, {
              image: imageId ? main_images.find(function (img) {
                return img.id === imageId;
              }).link.href : '/static/logo-wht.png'
            });
          });
          return _context.abrupt("return", {
            products: products
          });

        case 7:
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
//# sourceMappingURL=4.3a65c5db48e8e0adbce2.hot-update.js.map