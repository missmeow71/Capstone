webpackHotUpdate(6,{

/***/ "./lib/moltin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return removeFromCart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moltin_sdk__ = __webpack_require__("./node_modules/@moltin/sdk/dist/moltin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moltin_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__moltin_sdk__);

var Moltin = Object(__WEBPACK_IMPORTED_MODULE_0__moltin_sdk__["gateway"])({
  client_id: 'TkrDPNqfC1j7AJFFUHnMZbN9RzPygkff3beqMhxQsl'
});
var getProducts = function getProducts() {
  return Moltin.Products.With('main_image').All();
};
var getProductById = function getProductById(id) {
  return Moltin.Products.With('main_image').Get(id);
};
var addToCart = function addToCart(productId, quantity) {
  return Moltin.Cart().AddProduct(productId, quantity);
};
var getCartItems = function getCartItems(id) {
  return Moltin.Cart(id).Items();
};
var removeFromCart = function removeFromCart(itemId, cartId) {
  return Moltin.Cart(cartId).RemoveItem(itemId);
};

/***/ }),

/***/ "./pages/cart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CartItemList__ = __webpack_require__("./components/CartItemList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CartSummary__ = __webpack_require__("./components/CartSummary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_moltin__ = __webpack_require__("./lib/moltin.js");

var _jsxFileName = "/Users/missmeow/Documents/Capstone/personafi/pages/cart.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Cart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Cart, _React$Component);

  function Cart() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        items: [],
        loading: true,
        completed: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "_handleCheckout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(data) {
          var cartId, token, email, _data$card, name, line_1, city, country, county, postcode, customer, address, _ref2, id;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return localStorage.getItem('mcart');

                case 2:
                  cartId = _context.sent;
                  token = data.id, email = data.email, _data$card = data.card, name = _data$card.name, line_1 = _data$card.address_line1, city = _data$card.adress_city, country = _data$card.address_country, county = _data$card.address_state, postcode = _data$card.address_zip;
                  customer = {
                    name: name,
                    email: email
                  };
                  address = {
                    first_name: name.split(' ')[0],
                    last_name: name.split(' ')[1],
                    line_1: line_1,
                    city: city,
                    county: county,
                    country: country,
                    postcode: postcode
                  };
                  _context.prev = 6;
                  _context.next = 9;
                  return Object(__WEBPACK_IMPORTED_MODULE_5__lib_moltin__["checkoutCart"])(cartId, customer, address);

                case 9:
                  _ref2 = _context.sent;
                  id = _ref2.data.id;
                  _context.next = 13;
                  return Object(__WEBPACK_IMPORTED_MODULE_5__lib_moltin__["payForOrder"])(id, token, email);

                case 13:
                  _this.setState({
                    completed: true
                  });

                  _context.next = 19;
                  break;

                case 16:
                  _context.prev = 16;
                  _context.t0 = _context["catch"](6);
                  console.log(_context.t0);

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[6, 16]]);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "_handleRemoveFromCart", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(itemId) {
          var cartId, _ref3, data, meta;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  cartId = _this.state.cartId;
                  _context2.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_5__lib_moltin__["g" /* removeFromCart */])(itemId, cartId);

                case 3:
                  _ref3 = _context2.sent;
                  data = _ref3.data;
                  meta = _ref3.meta;

                  _this.setState({
                    items: data,
                    meta: meta
                  });

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value(_x2) {
          return _value2.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(Cart, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
        var cartId, _ref4, data, meta;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return localStorage.getItem('mcart');

              case 2:
                cartId = _context3.sent;
                _context3.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_5__lib_moltin__["c" /* getCartItems */])(cartId);

              case 5:
                _ref4 = _context3.sent;
                data = _ref4.data;
                meta = _ref4.meta;
                this.setState({
                  items: data,
                  meta: meta,
                  cartId: cartId,
                  loading: false
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          meta = _state.meta,
          rest = _objectWithoutProperties(_state, ["meta"]);

      var loading = rest.loading;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
        title: "Cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_CartItemList__["a" /* default */], _extends({}, rest, {
        removeFromCart: this._handleRemoveFromCart,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      })), !loading && !rest.completed && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_CartSummary__["a" /* default */], _extends({}, meta, {
        handleCheckout: this._handleCheckout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })));
    }
  }]);

  return Cart;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/cart")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.ef496146c31af2f13917.hot-update.js.map