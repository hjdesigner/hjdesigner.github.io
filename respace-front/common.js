(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/models/address.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/address.model.ts ***!
  \*****************************************/
/*! exports provided: AddressModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModel", function() { return AddressModel; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/app/models/user.model.ts");

var AddressModel = /** @class */ (function () {
    function AddressModel() {
        this.street = '';
        this.neighborhood = '';
        this.city = '';
        this.zip_code = '';
        this.country = '';
        this.complement = '';
        this.state = '';
        this.latitude = '';
        this.longitude = '';
        this.user_id = new _user_model__WEBPACK_IMPORTED_MODULE_0__["UserModel"]();
    }
    AddressModel.prototype.loadModel = function (response) {
        this.id = response.id;
        this.street = response.street;
        this.neighborhood = response.neighborhood;
        this.city = response.city;
        this.zip_code = response.zip_code;
        this.country = response.country;
        this.complement = response.complement;
        this.number = response.number;
        this.state = response.state;
        this.latitude = response.latitude;
        this.longitude = response.longitude;
        this.user_id = response.user_id;
    };
    return AddressModel;
}());



/***/ }),

/***/ "./src/app/models/category.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/category.model.ts ***!
  \******************************************/
/*! exports provided: CategoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModel", function() { return CategoryModel; });
var CategoryModel = /** @class */ (function () {
    function CategoryModel() {
        this.name = '';
        this.image = '';
    }
    CategoryModel.prototype.loadModel = function (response) {
        this.id = response.id;
        this.name = response.name;
        this.image = response.image;
        this.status = response.status;
        this.created_at = response.created_at;
        this.updated_at = response.updated_at;
    };
    return CategoryModel;
}());



/***/ }),

/***/ "./src/app/models/space.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/space.model.ts ***!
  \***************************************/
/*! exports provided: SpaceModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceModel", function() { return SpaceModel; });
/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.model */ "./src/app/models/category.model.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _address_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.model */ "./src/app/models/address.model.ts");



var SpaceModel = /** @class */ (function () {
    function SpaceModel() {
        this.name = '';
        this.category_id = new _category_model__WEBPACK_IMPORTED_MODULE_0__["CategoryModel"]();
        // this.user_id = new UserModel();
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
        this.description = '';
        this.rules = '';
        this.address = new _address_model__WEBPACK_IMPORTED_MODULE_2__["AddressModel"]();
        this.liked = false;
        this.images = [];
    }
    SpaceModel.prototype.loadModel = function (response) {
        this.id = response.id;
        this.name = response.name;
        this.category_id = response.category_id;
        this.description = response.description;
        // this.user_id = response.user_id;
        this.user = response.user;
        this.price = response.price;
        this.address = response.address_id;
        this.capacity = response.capacity;
        this.rules = response.rules;
        this.liked = response.liked;
    };
    return SpaceModel;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map