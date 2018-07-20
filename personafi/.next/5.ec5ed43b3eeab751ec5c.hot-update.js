webpackHotUpdate(5,{

/***/ "./lib/moltin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToCart; });
/* unused harmony export getCartItems */
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

/***/ })

})
//# sourceMappingURL=5.ec5ed43b3eeab751ec5c.hot-update.js.map