webpackHotUpdate(6,{

/***/ "./components/AddToCart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToCart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_moltin__ = __webpack_require__("./lib/moltin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_moltin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__lib_moltin__);

var _jsxFileName = "/Users/missmeow/Documents/Capstone/personafi/components/AddToCart.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var AddToCart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddToCart, _React$Component);

  function AddToCart() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AddToCart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AddToCart.__proto__ || Object.getPrototypeOf(AddToCart)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        loading: false,
        quantity: 1
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "_handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var productId, quantity, cart;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  productId = _this.props.productId;
                  quantity = _this.state.quantity;

                  _this.setState({
                    loading: true
                  });

                  _context.next = 5;
                  return Object(__WEBPACK_IMPORTED_MODULE_3__lib_moltin__["addToCart"])(productId, quantity);

                case 5:
                  cart = _context.sent;

                  _this.setState({
                    loading: false,
                    quantity: 1
                  });

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "_handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref2) {
        var _value2 = _ref2.target.value;
        return _this.setState({
          quantity: _value2
        });
      }
    }), _temp));
  }

  _createClass(AddToCart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          loading = _state.loading,
          quantity = _state.quantity;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Input */], {
        type: "number",
        placeholder: "Quantity",
        value: quantity,
        onChange: function onChange(e) {
          return _this2._handleChange(e);
        },
        action: {
          color: 'orange',
          content: 'Add to Cart',
          icon: 'plus cart',
          onClick: this._handleSubmit,
          loading: loading,
          disabled: loading
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      });
    }
  }]);

  return AddToCart;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./lib/moltin.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/missmeow/Documents/Capstone/personafi/lib/moltin.js: export is a reserved word (28:0)\n\n  26 | // \n  27 | \n> 28 | export const register = async ({email, password, ...rest}) => {\n     | ^\n  29 |   const {\n  30 |     data: { name, id }\n  31 |   } = await Moltin.Customers.Create({\n    at _class.raise (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:778:15)\n    at _class.checkReservedWord (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3839:12)\n    at _class.parseObjectProperty (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3592:12)\n    at _class.parseObjPropValue (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3612:99)\n    at _class.parseObj (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3523:12)\n    at _class.parseExprAtom (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3091:21)\n    at _class.parseExprAtom (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprSubscripts (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseExprListItem (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:3792:18)\n    at _class.parseCallExpressionArguments (/Users/missmeow/Documents/Capstone/personafi/node_modules/babylon/lib/index.js:2921:22)");

/***/ }),

/***/ "./node_modules/@moltin/sdk/dist/moltin.js":
false,

/***/ "./node_modules/assert/assert.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/buffer/index.js":
false,

/***/ "./node_modules/constants-browserify/constants.json":
false,

/***/ "./node_modules/core-util-is/lib/util.js":
false,

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/fetch-everywhere/fetch-npm-browserify.js":
false,

/***/ "./node_modules/graceful-fs/fs.js":
false,

/***/ "./node_modules/graceful-fs/graceful-fs.js":
false,

/***/ "./node_modules/graceful-fs/legacy-streams.js":
false,

/***/ "./node_modules/graceful-fs/polyfills.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/imurmurhash/imurmurhash.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/node-libs-browser/mock/empty.js":
false,

/***/ "./node_modules/node-localstorage/LocalStorage.js":
false,

/***/ "./node_modules/path-browserify/index.js":
false,

/***/ "./node_modules/process-nextick-args/index.js":
false,

/***/ "./node_modules/readable-stream/duplex-browser.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/readable-stream/passthrough.js":
false,

/***/ "./node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/readable-stream/transform.js":
false,

/***/ "./node_modules/readable-stream/writable-browser.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/setimmediate/setImmediate.js":
false,

/***/ "./node_modules/slide/lib/async-map.js":
false,

/***/ "./node_modules/slide/lib/bind-actor.js":
false,

/***/ "./node_modules/slide/lib/chain.js":
false,

/***/ "./node_modules/slide/lib/slide.js":
false,

/***/ "./node_modules/stream-browserify/index.js":
false,

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/timers-browserify/main.js":
false,

/***/ "./node_modules/util-deprecate/browser.js":
false,

/***/ "./node_modules/util/support/isBufferBrowser.js":
false,

/***/ "./node_modules/util/util.js":
false,

/***/ "./node_modules/whatwg-fetch/fetch.js":
false,

/***/ "./node_modules/write-file-atomic/index.js":
false,

/***/ "./pages/product.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_moltin__ = __webpack_require__("./lib/moltin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_moltin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__lib_moltin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ProductSummary__ = __webpack_require__("./components/ProductSummary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ProductAttributes__ = __webpack_require__("./components/ProductAttributes.js");

var _jsxFileName = "/Users/missmeow/Documents/Capstone/personafi/pages/product.js";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var ProductPage = function ProductPage(_ref) {
  var product = _ref.product;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
    title: product.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ProductSummary__["a" /* default */], _extends({}, product, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ProductAttributes__["a" /* default */], _extends({}, product, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })));
};

ProductPage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
    var id, _ref4, data, main_images, imageId;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref2.query.id;
            _context.next = 3;
            return Object(__WEBPACK_IMPORTED_MODULE_3__lib_moltin__["getProductById"])(id);

          case 3:
            _ref4 = _context.sent;
            data = _ref4.data;
            main_images = _ref4.included.main_images;
            imageId = data.relationships.main_image ? data.relationships.main_image.data.id : false;
            return _context.abrupt("return", {
              product: _objectSpread({}, data, {
                image: imageId ? main_images.find(function (img) {
                  return img.id === imageId;
                }).link.href : '/static/amazon-artificial-intelligence.svg'
              })
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (ProductPage);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/product")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 4:
false,

/***/ 5:
false

})
//# sourceMappingURL=6.d5c87b535ee7a22c9d75.hot-update.js.map