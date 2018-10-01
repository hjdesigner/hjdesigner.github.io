(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/home/home.module": [
		"./src/app/pages/home/home.module.ts",
		"pages-home-home-module"
	],
	"./pages/search/search.module": [
		"./src/app/pages/search/search.module.ts",
		"common",
		"pages-search-search-module"
	],
	"./pages/space-details/space-details.module": [
		"./src/app/pages/space-details/space-details.module.ts",
		"common",
		"pages-space-details-space-details-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_client_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/client/client.component */ "./src/app/layout/client/client.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_register_image_user_modal_image_user_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/register/image-user-modal/image-user-modal.component */ "./src/app/pages/register/image-user-modal/image-user-modal.component.ts");
/* harmony import */ var ng2_img_cropper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-img-cropper */ "./node_modules/ng2-img-cropper/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _directives_mask_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/mask.directive */ "./src/app/directives/mask.directive.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_space_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/space.service */ "./src/app/services/space.service.ts");
/* harmony import */ var _services_mostwanted_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/mostwanted.service */ "./src/app/services/mostwanted.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_space_tags_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/space_tags.service */ "./src/app/services/space_tags.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/city.service */ "./src/app/services/city.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _layout_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _pages_register_image_user_modal_image_user_modal_component__WEBPACK_IMPORTED_MODULE_9__["ImageUserModalComponent"],
                _directives_mask_directive__WEBPACK_IMPORTED_MODULE_14__["AppMaskDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutes"], { useHash: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_15__["SweetAlert2Module"].forRoot(),
                ng2_img_cropper__WEBPACK_IMPORTED_MODULE_10__["ImageCropperModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"]
            ],
            exports: [
                _directives_mask_directive__WEBPACK_IMPORTED_MODULE_14__["AppMaskDirective"],
                ng2_img_cropper__WEBPACK_IMPORTED_MODULE_10__["ImageCropperModule"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _services_category_service__WEBPACK_IMPORTED_MODULE_16__["CategoryService"], _services_space_service__WEBPACK_IMPORTED_MODULE_17__["SpaceService"], _services_mostwanted_service__WEBPACK_IMPORTED_MODULE_18__["MostWantedService"], _services_space_tags_service__WEBPACK_IMPORTED_MODULE_20__["SpaceTagsService"], _services_city_service__WEBPACK_IMPORTED_MODULE_21__["CityService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layout_client_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/client/client.component */ "./src/app/layout/client/client.component.ts");

var AppRoutes = [{
        path: '',
        component: _layout_client_client_component__WEBPACK_IMPORTED_MODULE_0__["ClientComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: './pages/home/home.module#HomeModule'
            },
            {
                path: 'search/:category_slug',
                loadChildren: './pages/search/search.module#SearchModule'
            },
            {
                path: 'details/:id',
                loadChildren: './pages/space-details/space-details.module#SpaceDetailsModule'
            }
        ]
    }];


/***/ }),

/***/ "./src/app/directives/mask.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/directives/mask.directive.ts ***!
  \**********************************************/
/*! exports provided: AppMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaskDirective", function() { return AppMaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/**
 * Diretiva de máscara genérica em campo de texto.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.4
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppMaskDirective = /** @class */ (function () {
    function AppMaskDirective(el) {
        this.el = el;
    }
    AppMaskDirective_1 = AppMaskDirective;
    AppMaskDirective.prototype.writeValue = function (value) {
        if (value) {
            this.el.nativeElement.value = this.aplicarMascara(value);
        }
    };
    AppMaskDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    AppMaskDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    AppMaskDirective.prototype.onKeyup = function ($event) {
        var valor = $event.target.value.replace(/\D/g, '');
        // retorna caso pressionado backspace
        if ($event.keyCode === 8) {
            this.onChange(valor);
            return;
        }
        var pad = this.appMask.replace(/\D/g, '').replace(/9/g, '_');
        if (valor.length <= pad.length) {
            this.onChange(valor);
        }
        $event.target.value = this.aplicarMascara(valor);
    };
    AppMaskDirective.prototype.onBlur = function ($event) {
        if ($event.target.value.length === this.appMask.length) {
            return;
        }
        this.onChange('');
        $event.target.value = '';
    };
    /**
     * Aplica a máscara a determinado valor.
     *
     * @param string valor
     * @return string
     */
    AppMaskDirective.prototype.aplicarMascara = function (valor) {
        valor = valor.replace(/\D/g, '');
        var pad = this.appMask.replace(/\D/g, '').replace(/9/g, '_');
        var valorMask = valor + pad.substring(0, pad.length - valor.length);
        var valorMaskPos = 0;
        valor = '';
        for (var i = 0; i < this.appMask.length; i++) {
            if (isNaN(parseInt(this.appMask.charAt(i)))) {
                valor += this.appMask.charAt(i);
            }
            else {
                valor += valorMask[valorMaskPos++];
            }
        }
        if (valor.indexOf('_') > -1) {
            valor = valor.substr(0, valor.indexOf('_'));
        }
        return valor;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appMask'),
        __metadata("design:type", String)
    ], AppMaskDirective.prototype, "appMask", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppMaskDirective.prototype, "onKeyup", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppMaskDirective.prototype, "onBlur", null);
    AppMaskDirective = AppMaskDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMask]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: AppMaskDirective_1,
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppMaskDirective);
    return AppMaskDirective;
    var AppMaskDirective_1;
}());



/***/ }),

/***/ "./src/app/helpers/getFBSDK.ts":
/*!*************************************!*\
  !*** ./src/app/helpers/getFBSDK.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.fbAsyncInit = function () {
    FB.init({
        appId: '363073674431768',
        xfbml: false,
        version: 'v3.1'
    });
    FB.AppEvents.logPageView();
};
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


/***/ }),

/***/ "./src/app/helpers/user.helper.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/user.helper.ts ***!
  \****************************************/
/*! exports provided: UserHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHelper", function() { return UserHelper; });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


var UserHelper = /** @class */ (function () {
    function UserHelper() {
        this.jwt = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]('token-admin');
    }
    UserHelper.prototype.loadToken = function () {
        var token = localStorage.getItem('token-user');
        this.authToken = token;
    };
    UserHelper.prototype.createOptions = function () {
        this.loadToken();
        if (this.authToken) {
            var headers = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Authorization': this.authToken
                })
            };
            return headers;
        }
        else {
            return undefined;
        }
    };
    UserHelper.prototype.getUserDecodedInfo = function () {
        this.userDecoded = this.jwt.decodeToken(localStorage.getItem('token-user'));
        return this.userDecoded;
    };
    UserHelper.prototype.verifyToken = function (token) {
        var isValid = this.jwt.isTokenExpired(token);
        return !isValid;
    };
    return UserHelper;
}());



/***/ }),

/***/ "./src/app/layout/client/client.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/client/client.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/client/client.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/client/client.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layout/client/client.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/client/client.component.ts ***!
  \***************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientComponent = /** @class */ (function () {
    function ClientComponent() {
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/layout/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.css */ "./src/app/layout/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-5\">\r\n        <div class=\"logo\">\r\n          <a [routerLink]=\"['/home']\">\r\n            <img src=\"assets//images/logo-footer.png\" alt=\"\" />\r\n          </a>\r\n        </div>\r\n        <ul class=\"social-links\">\r\n          <li class=\"facebook\">\r\n            <a>\r\n              <i class=\"social-icon facebook\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"instagram\">\r\n            <a>\r\n              <i class=\"social-icon instagram\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"linkedin\">\r\n            <a>\r\n              <i class=\"social-icon linkedin\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"pinterest\">\r\n            <a>\r\n              <i class=\"social-icon pinterest\"></i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-7 d-flex justify-content-between nav-list\">\r\n        <div class=\"footer-nav\">\r\n          <p>Institucional</p>\r\n          <ul class=\"footer-link\">\r\n            <li>\r\n              <a>Sobre nós</a>\r\n            </li>\r\n            <li>\r\n              <a>Fale conosco</a>\r\n            </li>\r\n            <li>\r\n              <a>Termos de serviço</a>\r\n            </li>\r\n            <li>\r\n              <a>Política de privacidade</a>\r\n            </li>\r\n            <li>\r\n              <a>FAQ - Dúvidas frequentes</a>\r\n            </li>\r\n            <li>\r\n              <a>Mídia</a>\r\n            </li>\r\n            <li>\r\n              <a>Blog</a>\r\n            </li>\r\n            <li>\r\n              <a>Trabalhe no Respace</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"footer-nav\">\r\n          <p>Lugares em São Paulo</p>\r\n          <ul class=\"footer-link\">\r\n            <li>\r\n              <a>Zona Sul</a>\r\n            </li>\r\n            <li>\r\n              <a>Zona Norte</a>\r\n            </li>\r\n            <li>\r\n              <a>Zona Leste</a>\r\n            </li>\r\n            <li>\r\n              <a>Zona Oeste</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"footer-nav\">\r\n          <p>Categorias de eventos</p>\r\n          <ul class=\"footer-link\">\r\n            <li *ngFor=\"let c of categories; let i = index\" [ngStyle]=\"i < 12 ? '' : 'display:none'\">\r\n              <h3 class=\"mb-0\"><a>{{c.name}}</a></h3>\r\n            </li>\r\n            <!-- <li>\r\n              <h3 class=\"mb-0\"><a>Filmagens</a></h3>\r\n            </li>\r\n            <li>\r\n              <h3 class=\"mb-0\"><a>Festas de Aniversário</a></h3>\r\n            </li>\r\n            <li>\r\n              <h3 class=\"mb-0\"><a>Ensaios Fotográficos</a></h3>\r\n            </li>\r\n            <li>\r\n              <h3 class=\"mb-0\"><a>Workshops</a></h3>\r\n            </li>\r\n            <li>\r\n              <h3 class=\"mb-0\"><a>Treinamentos</a></h3>\r\n            </li>\r\n            <li>\r\n              <h3 class=\"mb-0\"><a>Jantares</a></h3>\r\n            </li>\r\n            <li>\r\n              <h3 class=\"mb-0\"><a>Almoços</a></h3>\r\n            </li>\r\n            <li>\r\n              <h3 class=\"mb-0\"><a>Eventos ao ar livre</a></h3>\r\n            </li> -->\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(categoryService) {
        this.categoryService = categoryService;
        this.categories = [];
        this.getCategories();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var categories, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.categoryService.getAllCategories()];
                    case 1:
                        categories = _a.sent();
                        this.categories = categories;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.clickable{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\">\r\n  <div class=\"container\">\r\n    <a [routerLink]=\"['/home']\" class=\"navbar-brand\">\r\n      <img src=\"assets/images/logo.png\" alt=\"Respace\" title=\"Respace\" />\r\n      <h1 class=\"d-none\">Respace</h1>\r\n    </a>\r\n    <div class=\"mobile-buttons d-flex d-lg-none\">\r\n      <a class=\"search\">\r\n        <img src=\"assets/images/search-icon.png\" alt=\"\">\r\n      </a>\r\n      <a class=\"heart\">\r\n        <img src=\"assets/images/heart-icon.png\" alt=\"\">\r\n      </a>\r\n      <a class=\"user\">\r\n        <img src=\"assets/images/user-icon.png\" alt=\"\">\r\n      </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <img src=\"assets/images/nav-icon.png\" alt=\"\">\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item fav d-none d-lg-block\">\r\n          <a class=\"nav-link\">\r\n            <i class=\"fa fa-heart mr-1\"></i> Favoritos</a>\r\n        </li>\r\n        <li class=\"nav-item mr-2 d-none d-lg-block\">\r\n          <form action=\"\" class=\"form-inline\">\r\n            <select name=\"\" id=\"\" class=\"selectpicker\" data-style=\"btn-select\" (change)=\"searchByCategory()\" name=\"category\"\r\n              [(ngModel)]=\"categorySlug\">\r\n              <option [selected]=\"true\" value=\"\" [value]=\"\">O que você está planejando?</option>\r\n              <option *ngFor=\"let c of categories\" value=\"{{c.slug}}\" [value]=\"c.slug\">{{c.name}}</option>\r\n            </select>\r\n          </form>\r\n        </li>\r\n        <li class=\"nav-item register-space d-none d-lg-block\">\r\n          <a class=\"btn btn-purple\">Cadastre o seu espaço</a>\r\n        </li>\r\n        <li class=\"nav-item d-none d-lg-block\">\r\n          <a class=\"nav-link pointer\" (click)=\"loginModal()\">Já sou cadastrado</a>\r\n        </li>\r\n        <li class=\"nav-item create d-none d-lg-block\">\r\n          <a class=\"nav-link pointer\" (click)=\"registerModal()\">Crie sua conta</a>\r\n        </li>\r\n        <!-- MOBILE LINKS -->\r\n        <li class=\"nav-item d-lg-none\">\r\n          <a class=\"nav-link\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item d-lg-none\">\r\n          <a class=\"nav-link\">Cadastre o seu espaço</a>\r\n        </li>\r\n        <li class=\"nav-item d-lg-none\">\r\n          <a class=\"nav-link\">Contato</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<app-register *ngIf=\"isRegister\" (clickout)=\"registerModal()\" (loginModal)=\"changeModal()\"></app-register>\r\n<app-login *ngIf=\"isLogin\" (clickout)=\"loginModal()\"></app-login>"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, categoryService) {
        this.router = router;
        this.categoryService = categoryService;
        this.isRegister = false;
        this.isLogin = false;
        this.categories = new Array();
        this.categorySlug = '';
        this.getCategories();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.registerModal = function () {
        this.isRegister = !this.isRegister;
    };
    HeaderComponent.prototype.loginModal = function () {
        this.isLogin = !this.isLogin;
    };
    HeaderComponent.prototype.getCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var categories, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.categoryService.getAllCategories()];
                    case 1:
                        categories = _a.sent();
                        this.categories = categories;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.searchByCategory = function () {
        if (this.categorySlug) {
            this.router.navigate(['search', this.categorySlug], {
                queryParams: {
                    page: 1,
                    per_page: 6,
                    zoom: 5
                }
            });
        }
    };
    HeaderComponent.prototype.changeModal = function () {
        this.isLogin = !this.isLogin;
        this.isRegister = !this.isRegister;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/models/login.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/login.model.ts ***!
  \***************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
        this.email = '';
        this.password = '';
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.name = '';
        this.lastname = '';
        this.facebook_id = '';
        this.password = '';
        this.email = '';
        this.linkedin_id = '';
        this.google_id = '';
        this.gender = '';
        this.telephone = '';
        this.cellphone = '';
        this.image = '';
    }
    UserModel.prototype.loadModel = function (response) {
        this.id = response.id;
        this.name = response.name;
        this.has_space = response.has_space;
        this.facebook_id = response.facebook_id;
        this.email = response.email;
        this.linkedin_id = response.linkedin_id;
        this.google_id = response.google_id;
        this.created_at = response.created_at;
        this.updated_at = response.updated_at;
        this.gender = response.gender;
        this.telephone = response.telephone;
        this.birth_date = response.birth_date;
        this.cellphone = response.cellphone;
        this.image = response.image;
    };
    return UserModel;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The Modal (background) */\r\n.modal {\r\n    display: block;\r\n    /* Hidden by default */\r\n    position: fixed;\r\n    /* Stay in place */\r\n    z-index: 2;\r\n    /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    /* Full width */\r\n    height: 100%;\r\n    /* Full height */\r\n    overflow: auto;\r\n    /* Enable scroll if needed */\r\n    background-color: rgb(0, 0, 0);\r\n    /* Fallback color */\r\n    background-color: rgba(220, 219, 219, 0.78);\r\n}\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 10% auto;\r\n    /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 100%;\r\n    max-width: 768px; \r\n    /* Could be more or less, depending on screen size */\r\n    -webkit-animation: fadeIn 0.2s ease-in both;\r\n            animation: fadeIn 0.2s ease-in both;\r\n    -webkit-animation-delay: 0.2s;\r\n            animation-delay: 0.2s;\r\n    border-radius: 0px !important;\r\n    border: 0px solid #000 !important;\r\n}\r\n.modal-image {\r\n    display: block;\r\n    /* Hidden by default */\r\n    position: fixed;\r\n    /* Stay in place */\r\n    z-index: 3;\r\n    /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    /* Full width */\r\n    height: 100%;\r\n    /* Full height */\r\n    overflow: auto;\r\n    /* Enable scroll if needed */\r\n    background-color: rgb(0, 0, 0);\r\n    /* Fallback color */\r\n    background-color: rgba(53, 53, 53, 0.78);\r\n}\r\n.modal-content-image {\r\n    background-color: #fefefe;\r\n    margin: 10% auto;\r\n    /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 50%;\r\n    /* Could be more or less, depending on screen size */\r\n    -webkit-animation: fadeIn 0.2s ease-in both;\r\n            animation: fadeIn 0.2s ease-in both;\r\n    -webkit-animation-delay: 0.2s;\r\n            animation-delay: 0.2s;\r\n    border-radius: 0px !important;\r\n    border: 0px solid #000 !important;\r\n}\r\n/* The Close Button */\r\n.close {\r\n    color: #5860ab;\r\n    font-size: 45px;\r\n    font-weight: bold;\r\n    width: 20px;\r\n    height: 40px;\r\n    position: absolute;\r\n    display: block;\r\n    right: 15px;\r\n    top: 0;\r\n    opacity: 1;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n@-webkit-keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(0, -20%, 0);\r\n                transform: translate3d(0, -20%, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n                transform: translate3d(0, 0, 0);\r\n    }\r\n}\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(0, -20%, 0);\r\n                transform: translate3d(0, -20%, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n                transform: translate3d(0, 0, 0);\r\n    }\r\n}\r\n.btn.btn-purple.btn-right,\r\n.btn.btn-purple.btn-left {\r\n    color: #fff !important;\r\n}\r\ninput.form-control{\r\n    border: none;\r\n    border-bottom: 2px solid #ced4da;\r\n    height: 60px;\r\n    font-size: 20px;\r\n    padding-left: 0;\r\n    margin-bottom: 20px;\r\n}\r\ninput.form-control:focus{\r\n    outline: none;\r\n}\r\n.red {\r\n    color: red;\r\n}\r\n.modal-form{\r\n    padding: 0 65px;\r\n}\r\n.modal-form h2{\r\n    font-size: 1.6em;\r\n    margin: 30px 0 0 0;\r\n    color: #6d6e71;\r\n}\r\n.form-subtitle{\r\n    margin-bottom: 15px;\r\n}\r\n.form-subtitle h2{\r\n    margin-top: 5px;\r\n}\r\n.form-bt-socials{\r\n    margin: 30px 0 20px;\r\n}\r\n.modal-form .terms{\r\n    margin: 30px 0;\r\n}\r\n.modal-form .link-login{\r\n    margin: 20px 0\r\n}\r\n.modal-form .link-login p{\r\n    font-size: 20px;\r\n}\r\n.modal-form .terms p,\r\n.modal-form .link-login p{\r\n    color: #6d6e71;\r\n    line-height: 20px;\r\n    margin: 0;\r\n}\r\n.modal-form .terms a,\r\n.modal-form .link-login a{\r\n    font-weight: bold;\r\n    color: #6d6e71;\r\n    text-decoration: underline;\r\n}\r\n.modal-form .terms a:hover,\r\n.modal-form .link-login a:hover{\r\n    text-decoration: none;\r\n}\r\n/* Buttons */\r\n.form-bt-socials__btn{\r\n    background-color: transparent;\r\n    height: 60px;\r\n    border: none;\r\n    width: 100%;\r\n    height: 60px;\r\n    margin-bottom: 10px;\r\n    font-size: 26px;\r\n    color: #fff;\r\n    transition: all 0.25s ease-in-out 0s;\r\n    cursor: pointer;\r\n}\r\n.form-bt-socials__btn--blue{\r\n        background-color: #5192f8;\r\n    }\r\n.form-bt-socials__btn--blue:hover{\r\n            background-color: #3081ff;\r\n        }\r\n.form-bt-socials__btn--green{\r\n        background-color: #74e06e;\r\n    }\r\n.form-bt-socials__btn--green:disabled{\r\n        opacity: 0.6;\r\n        cursor: not-allowed;\r\n    }\r\n.form-bt-socials__btn--green:hover{\r\n            background-color: #3d9e38;\r\n        }\r\n.form-bt-socials__btn--gray{\r\n        background-color: #bfbfbf;\r\n    }\r\n.form-bt-socials__btn--gray:hover{\r\n            background-color: #868686;\r\n        }\r\n@media(max-width: 768px){\r\n    .modal-content{\r\n        width: 90%;\r\n    }\r\n}\r\n@media(max-width: 767px){\r\n    .modal-form{\r\n        padding: 0;\r\n    }\r\n}        "

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <span class=\"close\" (click)=\"close()\">&times;</span>\r\n    <div class=\"form-group modal-form\">\r\n      <form #form=\"ngForm\">\r\n        <div class=\"col-md-12 text-center form-title\">\r\n          <h2>Faça o seu login</h2>\r\n        </div>\r\n        <div class=\"col-md-12 text-center form-bt-socials\">\r\n          <button id=\"facebookLogin\" class=\"form-bt-socials__btn form-bt-socials__btn--blue\" (click)=\"handleLoginFacebook()\">Login com o Facebook</button>\r\n          <button id=\"googleLogin\" class=\"form-bt-socials__btn form-bt-socials__btn--gray\">Login com o Google</button>\r\n        </div>\r\n        <div class=\"col-md-12 text-center form-subtitle\">\r\n          <h2>Use seu e-mail:</h2>\r\n        </div>\r\n        <div class=\"form-group\">          \r\n          <input type=\"email\" #email=\"ngModel\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"loginModel.email\"\r\n            required required pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">          \r\n          <input type=\"password\" #password=\"ngModel\" name=\"password\" class=\"form-control\" [(ngModel)]=\"loginModel.password\"\r\n            placeholder=\"Senha\" required>\r\n        </div>\r\n        <div class=\"col-md-12 bt-controls text-center\">\r\n          <button class=\"form-bt-socials__btn form-bt-socials__btn--green\" [disabled]=\"!form.valid\">FAÇA O SEU LOGIN</button>\r\n        </div>\r\n        <div class=\"col-md-12 text-center link-login\">\r\n          <p>\r\n            Não possui uma conta? <a class=\"pointer\" (click)=\"emmitLoginModal()\">Faça o seu cadastro</a>\r\n          </p>\r\n        </div>\r\n        <!-- <button class=\"btn btn-purple btn-right\" [disabled]=\"!form.valid\" (click)=\"login();\">Login</button> -->\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/login.model */ "./src/app/models/login.model.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _helpers_getFBSDK__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/getFBSDK */ "./src/app/helpers/getFBSDK.ts");
/* harmony import */ var _helpers_getFBSDK__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers_getFBSDK__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.clickout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loginModel = new _models_login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModel"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.close = function () {
        this.clickout.emit();
    };
    LoginComponent.prototype.test = function () {
    };
    LoginComponent.prototype.handleLoginFacebook = function () {
        FB.getLoginStatus(function (response) {
            if (response.status !== 'connected') {
                FB.login(function (response) {
                    console.log(response);
                }, { scope: 'public_profile,email' });
            }
            else {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me?fields=id,name,email,gender', function (response) {
                    console.log(response);
                    console.log(response.email);
                    console.log(response.name);
                });
            }
        });
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.login(this.loginModel)];
                    case 1:
                        info = _a.sent();
                        localStorage.setItem('user-info', JSON.stringify({ name: info.name, lastname: info.lastname, email: info.email }));
                        localStorage.setItem('token-user', info.token);
                        this.clickout.emit();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "clickout", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/image-user-modal/image-user-modal.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/register/image-user-modal/image-user-modal.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas.croperXD {\r\n    width: 70% !important;\r\n}\r\n\r\na.btn.btn-purple.btn-right {\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/pages/register/image-user-modal/image-user-modal.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/register/image-user-modal/image-user-modal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"close\" (click)=\"closeModalImage()\">&times;</span>\r\n<div>\r\n  <img-cropper #cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper>\r\n</div>\r\n\r\n<input type=\"file\" class=\"inputfile\" (change)=\"fileChangeListener($event)\" accept=\"image/*\">\r\n\r\n<a class=\"btn btn-purple btn-right\" (click)=\"upload()\">Enviar</a>"

/***/ }),

/***/ "./src/app/pages/register/image-user-modal/image-user-modal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/register/image-user-modal/image-user-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ImageUserModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUserModalComponent", function() { return ImageUserModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_img_cropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-img-cropper */ "./node_modules/ng2-img-cropper/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ImageUserModalComponent = /** @class */ (function () {
    function ImageUserModalComponent(userService) {
        this.userService = userService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showingWebCam = false;
        this.edited = false;
        this.name = '';
        this.cropperSettings = new ng2_img_cropper__WEBPACK_IMPORTED_MODULE_1__["CropperSettings"]();
        this.cropperSettings.dynamicSizing = true;
        this.cropperSettings.croppedWidth = 900;
        this.cropperSettings.croppedHeight = 900;
        this.cropperSettings.canvasWidth = 900;
        this.cropperSettings.canvasHeight = 900;
        this.cropperSettings.cropperDrawSettings.strokeColor = '#0091ea';
        this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
        this.cropperSettings.fileType = 'image/jpeg';
        this.cropperSettings.cropperClass = 'croperXD';
        this.cropperSettings.noFileInput = true;
        this.data = {};
    }
    ImageUserModalComponent.prototype.dropped = function (event) {
        var _this = this;
        this.files = event.files;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            file.fileEntry.file(function (info) {
                var image = new Image();
                var fileInfo = info;
                var myReader = new FileReader();
                var that = _this;
                myReader.onloadend = function (loadEvent) {
                    image.src = loadEvent.target.result;
                    that.cropper.setImage(image);
                    that.picture = image;
                };
                myReader.readAsDataURL(fileInfo);
            });
        }
    };
    ImageUserModalComponent.prototype.ngOnInit = function () {
    };
    ImageUserModalComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    ImageUserModalComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    ImageUserModalComponent.prototype.fileChangeListener = function ($event) {
        this.edited = true;
        this.showingWebCam = false;
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        this.name = $event.target.files[0].name;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
            that.picture = image;
        };
        myReader.readAsDataURL(file);
    };
    ImageUserModalComponent.prototype.closeModalImage = function () {
        this.close.emit();
    };
    ImageUserModalComponent.prototype.upload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.data['image']) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userService.uploadImage(this.data['image'], this.name)];
                    case 2:
                        url = _a.sent();
                        this.imageUploaded.emit({ image: url });
                        this.close.emit();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImageUserModalComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImageUserModalComponent.prototype, "imageUploaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cropper'),
        __metadata("design:type", ng2_img_cropper__WEBPACK_IMPORTED_MODULE_1__["ImageCropperComponent"])
    ], ImageUserModalComponent.prototype, "cropper", void 0);
    ImageUserModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-user-modal',
            template: __webpack_require__(/*! ./image-user-modal.component.html */ "./src/app/pages/register/image-user-modal/image-user-modal.component.html"),
            styles: [__webpack_require__(/*! ./image-user-modal.component.css */ "./src/app/pages/register/image-user-modal/image-user-modal.component.css")],
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ImageUserModalComponent);
    return ImageUserModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The Modal (background) */\r\n.modal {\r\n    display: block;\r\n    /* Hidden by default */\r\n    position: fixed;\r\n    /* Stay in place */\r\n    z-index: 2;\r\n    /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    /* Full width */\r\n    height: 100%;\r\n    /* Full height */\r\n    overflow: auto;\r\n    /* Enable scroll if needed */\r\n    background-color: rgb(0, 0, 0);\r\n    /* Fallback color */\r\n    background-color: rgba(220, 219, 219, 0.78);\r\n}\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 10% auto;\r\n    /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 100%;\r\n    max-width: 768px; \r\n    /* Could be more or less, depending on screen size */\r\n    -webkit-animation: fadeIn 0.2s ease-in both;\r\n            animation: fadeIn 0.2s ease-in both;\r\n    -webkit-animation-delay: 0.2s;\r\n            animation-delay: 0.2s;\r\n    border-radius: 0px !important;\r\n    border: 0px solid #000 !important;\r\n}\r\n.modal-image {\r\n    display: block;\r\n    /* Hidden by default */\r\n    position: fixed;\r\n    /* Stay in place */\r\n    z-index: 3;\r\n    /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    /* Full width */\r\n    height: 100%;\r\n    /* Full height */\r\n    overflow: auto;\r\n    /* Enable scroll if needed */\r\n    background-color: rgb(0, 0, 0);\r\n    /* Fallback color */\r\n    background-color: rgba(53, 53, 53, 0.78);\r\n}\r\n.modal-content-image {\r\n    background-color: #fefefe;\r\n    margin: 10% auto;\r\n    /* 15% from the top and centered */\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 50%;\r\n    /* Could be more or less, depending on screen size */\r\n    -webkit-animation: fadeIn 0.2s ease-in both;\r\n            animation: fadeIn 0.2s ease-in both;\r\n    -webkit-animation-delay: 0.2s;\r\n            animation-delay: 0.2s;\r\n    border-radius: 0px !important;\r\n    border: 0px solid #000 !important;\r\n}\r\n/* The Close Button */\r\n.close {\r\n    color: #5860ab;\r\n    font-size: 45px;\r\n    font-weight: bold;\r\n    width: 20px;\r\n    height: 40px;\r\n    position: absolute;\r\n    display: block;\r\n    right: 15px;\r\n    top: 0;\r\n    opacity: 1;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n@-webkit-keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(0, -20%, 0);\r\n                transform: translate3d(0, -20%, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n                transform: translate3d(0, 0, 0);\r\n    }\r\n}\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(0, -20%, 0);\r\n                transform: translate3d(0, -20%, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n                transform: translate3d(0, 0, 0);\r\n    }\r\n}\r\n.btn.btn-purple.btn-right,\r\n.btn.btn-purple.btn-left {\r\n    color: #fff !important;\r\n}\r\ninput.form-control{\r\n    border: none;\r\n    border-bottom: 2px solid #ced4da;\r\n    height: 60px;\r\n    font-size: 20px;\r\n    padding-left: 0;\r\n    margin-bottom: 20px;\r\n}\r\ninput.form-control:focus{\r\n    outline: none;\r\n}\r\n.red {\r\n    color: red;\r\n}\r\n.modal-form{\r\n    padding: 0 65px;\r\n}\r\n.modal-form h2{\r\n    font-size: 1.6em;\r\n    margin: 30px 0 0 0;\r\n    color: #6d6e71;\r\n}\r\n.form-subtitle{\r\n    margin-bottom: 15px;\r\n}\r\n.form-subtitle h2{\r\n    margin-top: 5px;\r\n}\r\n.form-bt-socials{\r\n    margin: 30px 0 20px;\r\n}\r\n.form-bt-socials p.hide {\r\n    display: none;\r\n}\r\n.form-bt-socials p.show {\r\n    display: inline-block;\r\n}\r\n.modal-form .terms{\r\n    margin: 30px 0;\r\n}\r\n.modal-form .link-login{\r\n    margin: 20px 0\r\n}\r\n.modal-form .link-login p{\r\n    font-size: 20px;\r\n}\r\n.modal-form .terms p,\r\n.modal-form .link-login p{\r\n    color: #6d6e71;\r\n    line-height: 20px;\r\n    margin: 0;\r\n}\r\n.modal-form .terms a,\r\n.modal-form .link-login a{\r\n    font-weight: bold;\r\n    color: #6d6e71;\r\n    text-decoration: underline;\r\n}\r\n.modal-form .terms a:hover,\r\n.modal-form .link-login a:hover{\r\n    text-decoration: none;\r\n}\r\n/* Buttons */\r\n.form-bt-socials__btn{\r\n    background-color: transparent;\r\n    height: 60px;\r\n    border: none;\r\n    width: 100%;\r\n    height: 60px;\r\n    margin-bottom: 10px;\r\n    font-size: 26px;\r\n    color: #fff;\r\n    transition: all 0.25s ease-in-out 0s;\r\n    cursor: pointer;\r\n}\r\n.form-bt-socials__btn--blue{\r\n        background-color: #5192f8;\r\n    }\r\n.form-bt-socials__btn--blue:hover{\r\n            background-color: #3081ff;\r\n        }\r\n.form-bt-socials__btn--green{\r\n        background-color: #74e06e;\r\n    }\r\n.form-bt-socials__btn--green:disabled{\r\n        opacity: 0.6;\r\n        cursor: not-allowed;\r\n    }\r\n.form-bt-socials__btn--green:hover{\r\n            background-color: #3d9e38;\r\n        }\r\n.form-bt-socials__btn--gray{\r\n        background-color: #bfbfbf;\r\n    }\r\n.form-bt-socials__btn--gray:hover{\r\n            background-color: #868686;\r\n        }\r\n@media(max-width: 768px){\r\n    .modal-content{\r\n        width: 90%;\r\n    }\r\n}\r\n@media(max-width: 767px){\r\n    .modal-form{\r\n        padding: 0;\r\n    }\r\n}        "

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal\">\r\n  <div class=\"modal-content\" (clickOutside)=\"close()\">\r\n    <span class=\"close\" (click)=\"close()\">&times;</span>\r\n    <div class=\"form-group modal-form\">\r\n      <form #form=\"ngForm\" (ngSubmit)=\"save(form)\">\r\n        <div class=\"col-md-12 text-center form-title\">\r\n          <h2>Crie sua conta agora</h2>\r\n          \r\n        </div>\r\n        <div class=\"col-md-12 text-center form-bt-socials\">\r\n          <button id=\"facebookLogin\" class=\"form-bt-socials__btn form-bt-socials__btn--blue\" (click)=\"handleLoginFacebook()\">Cadastrar com o Facebook</button>\r\n          <button id=\"googleLogin\" class=\"form-bt-socials__btn form-bt-socials__btn--gray\">Cadastrar com o Google</button>\r\n          <p *ngIf=\"errorSocialShow\" class=\"alert alert-danger\"><i class=\"fa fa-exclamation-triangle\"></i><strong> trtret</strong></p>\r\n        </div>\r\n        <div class=\"col-md-12 text-center form-subtitle\">\r\n          <h2>Use seu e-mail:</h2>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <input type=\"text\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"userModel.name\" class=\"form-control\" placeholder=\"Seu nome\"\r\n            required>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <p class=\"red\" *ngIf=\"emailError\">* {{emailError}}</p>\r\n          <input type=\"text\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"userModel.email\" class=\"form-control\"\r\n            placeholder=\"Seu email\" required pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\">\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <input type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"userModel.password\" class=\"form-control\"\r\n            placeholder=\"Escolha uma senha\" required>\r\n        </div>\r\n        <div class=\"col-md-12 text-center terms\">\r\n          <p>\r\n            Fazendo o seu cadastro, você concorda com nossos<br /> <a href=\"#\">Termos de Serviços</a> e <a href=\"#\">Política\r\n              de Privacidade</a>\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-12 bt-controls text-center\">\r\n          <button class=\"form-bt-socials__btn form-bt-socials__btn--green\" [disabled]=\"!form.valid\">FAÇA SEU CADASTRO</button>\r\n        </div>\r\n        <div class=\"col-md-12 text-center link-login\">\r\n          <p>\r\n            Já possui uma conta? <a class=\"pointer\" (click)=\"emmitLoginModal()\">Faça seu login</a>\r\n          </p>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <!-- <div class=\"form-group\" *ngIf=\"step == 1\">\r\n          <label for=\"email\">Email <span class=\"red\" *ngIf=\"(!email.valid) && email.touched\">*</span></label>\r\n          <input type=\"text\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"userModel.email\" class=\"form-control\"\r\n            placeholder=\"Email\" required pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\">\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"step == 1\">\r\n          <label for=\"password\">Senha\r\n            <span class=\"red\" *ngIf=\"(!password.valid) && password.touched\">*</span>\r\n          </label>\r\n          <input type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"userModel.password\" class=\"form-control\"\r\n            placeholder=\"Senha\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\" *ngIf=\"step == 1\">\r\n          <label for=\"confirmation\">Confirmação da senha\r\n            <span class=\"red\" *ngIf=\"(!confirmationPassword.valid) && confirmationPassword.touched\">*</span>\r\n            <span class=\"red\" *ngIf=\"userModel.password != confirmation && confirmationPassword.touched\">As\r\n              senhas não coincidem.</span>\r\n          </label>\r\n          <input type=\"password\" #confirmationPassword=\"ngModel\" name=\"confirmation\" [(ngModel)]=\"confirmation\" class=\"form-control\"\r\n            placeholder=\"Confirmação da senha\" required>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"step == 2\">\r\n          <label for=\"image\">Foto: {{userModel.image}}</label>\r\n\r\n          <a (click)=\"openModalImage()\" class=\"btn btn-purple btn-right image-input m-l-5\">\r\n            Enviar foto\r\n            <input type=\"file\" #file multiple=\"false\" name=\"image\">\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"form-group\" *ngIf=\"step == 2\">\r\n          <label for=\"name\">Nome <span class=\"red\" *ngIf=\"(!name.valid) && name.touched\">*</span></label>\r\n          <input type=\"text\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"userModel.name\" class=\"form-control\" placeholder=\"Nome\"\r\n            required>\r\n        </div>\r\n\r\n        <div class=\"form-group\" *ngIf=\"step == 2\">\r\n          <label for=\"name\">Sobrenome <span class=\"red\" *ngIf=\"(!lastname.valid) && lastname.touched\">*</span></label>\r\n          <input type=\"text\" #lastname=\"ngModel\" name=\"lastName\" [(ngModel)]=\"userModel.lastname\" class=\"form-control\"\r\n            placeholder=\"Sobrenome\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\" *ngIf=\"step == 2\">\r\n          <label for=\"phone\">Telefone <span class=\"red\" *ngIf=\"(!phone.valid) && phone.touched\">*</span></label>\r\n          <input type=\"text\" #phone=\"ngModel\" name=\"phone\" appMask=\"(99) 99999-9999\" [(ngModel)]=\"userModel.phone\"\r\n            class=\"form-control\" placeholder=\"Telefone\" required>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\" *ngIf=\"step == 3\">\r\n          <label for=\"email\">Email <span class=\"red\" *ngIf=\"(!confirmationEmail.valid) && confirmationEmail.touched\">*</span></label>\r\n          <input type=\"text\" #confirmationEmail=\"ngModel\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\"\r\n            placeholder=\"Email\" required pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\">\r\n        </div>\r\n\r\n        <button *ngIf=\"step == 3\" class=\"btn btn-success btn-right\" (click)=\"save(form)\" [disabled]=\"!form.valid\">Confirmar</button>\r\n        <a class=\"btn btn-purple btn-left\" *ngIf=\"step > 1\" (click)=\"lastStep()\">Voltar</a>\r\n        <a class=\"btn btn-purple btn-right\" *ngIf=\"step < 3\" (click)=\"nextStep()\">Próximo</a> -->\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<!-- <div class=\"modal-image\" *ngIf=\"modalImage\" (clickOutside)=\"close()\">\r\n  <div class=\"modal-content-image\" (clickOutside)=\"close()\">\r\n    <app-image-user-modal (imageUploaded)=\"setUserImage($event)\" (close)=\"openModalImage()\"></app-image-user-modal>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _helpers_getFBSDK__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/getFBSDK */ "./src/app/helpers/getFBSDK.ts");
/* harmony import */ var _helpers_getFBSDK__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers_getFBSDK__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
        this.modalImage = false;
        this.clickout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loginModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.step = 1;
        this.userModel = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
        this.email = '';
        this.emailError = '';
        this.errorSocial = '';
        this.errorSocialShow = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerFacebook = function () {
        var _this = this;
        FB.api('/me?fields=id,name,email,gender', function (response) {
            if (response.email) {
                _this.userModel.facebook_id = response.id;
                _this.userModel.name = response.name;
                _this.userModel.email = response.email;
                _this.saveFacebook(_this.userModel);
            }
        });
    };
    RegisterComponent.prototype.handleLoginFacebook = function () {
        var _this = this;
        FB.getLoginStatus(function (response) {
            if (response.status !== 'connected') {
                FB.login(function (response) {
                    this.registerFacebook();
                }, { scope: 'public_profile,email' });
            }
            else {
                _this.registerFacebook();
            }
        });
    };
    RegisterComponent.prototype.close = function () {
        this.clickout.emit();
    };
    RegisterComponent.prototype.nextStep = function () {
        if (this.step < 3) {
            this.step++;
        }
    };
    RegisterComponent.prototype.lastStep = function () {
        if (this.step > 1) {
            this.step--;
        }
    };
    RegisterComponent.prototype.openModalImage = function () {
        this.modalImage = !this.modalImage;
    };
    RegisterComponent.prototype.setUserImage = function (image) {
        this.userModel.image = image.image;
    };
    RegisterComponent.prototype.save = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var user, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!form.valid) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userService.create(this.userModel)];
                    case 2:
                        user = _a.sent();
                        this.close();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        if (e_1.error.friendly_message === 'Já existe um usuário com este email') {
                            this.emailError = e_1.error.friendly_message;
                        }
                        else {
                            this.emailError = '';
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent.prototype.saveFacebook = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var user, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.create(item)];
                    case 1:
                        user = _a.sent();
                        this.errorSocialShow = true;
                        this.close();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        throw e_2;
                    case 3:
                        this.errorSocialShow = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent.prototype.emmitLoginModal = function () {
        this.loginModal.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "clickout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "loginModal", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CategoryService = /** @class */ (function () {
    function CategoryService(_http) {
        this._http = _http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi;
    }
    CategoryService.prototype.getAllCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._http.get(this.url + "categories/all").toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/city.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/city.service.ts ***!
  \******************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var CityService = /** @class */ (function () {
    function CityService() {
        this.city = [
            {
                id: 1,
                name: 'São Paulo'
            },
            {
                id: 2,
                name: 'Rio de Janeiro'
            }
        ];
    }
    CityService.prototype.getAllCities = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.city];
            });
        });
    };
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/services/mostwanted.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/mostwanted.service.ts ***!
  \************************************************/
/*! exports provided: MostWantedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostWantedService", function() { return MostWantedService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var MostWantedService = /** @class */ (function () {
    function MostWantedService(_http) {
        this._http = _http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi;
    }
    MostWantedService.prototype.getMostWanted = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._http.get(this.url + "spacevisit/getMostWanted").toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MostWantedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], MostWantedService);
    return MostWantedService;
}());



/***/ }),

/***/ "./src/app/services/space.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/space.service.ts ***!
  \*******************************************/
/*! exports provided: SpaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceService", function() { return SpaceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _helpers_user_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/user.helper */ "./src/app/helpers/user.helper.ts");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SpaceService = /** @class */ (function () {
    function SpaceService(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi;
        this.userHelper = new _helpers_user_helper__WEBPACK_IMPORTED_MODULE_3__["UserHelper"]();
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
    }
    // Upload method
    SpaceService.prototype.toFormData = function (serverFieldName, name) {
        var form = new FormData();
        form.append('file', this.dataURItoBlob(serverFieldName), name);
        return form;
    };
    // Upload method
    SpaceService.prototype.dataURItoBlob = function (dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var ab = new ArrayBuffer(byteString.length);
        return new Blob([ab], { type: 'image/jpeg' });
    };
    SpaceService.prototype.getById = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var createUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        createUrl = this.url + "spaces/findbyid?" + Object(querystring__WEBPACK_IMPORTED_MODULE_4__["stringify"])(params);
                        return [4 /*yield*/, this.httpClient.get(createUrl, this.userHelper.createOptions()).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpaceService.prototype.getAllPaginated = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, createUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.getUserInfo()) {
                            userInfo = this.getUserInfo();
                            query += '&user_id=' + userInfo.id;
                        }
                        createUrl = this.url + "spaces/?" + query;
                        return [4 /*yield*/, this.httpClient.get(createUrl).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpaceService.prototype.postVisit = function (space_id) {
        return __awaiter(this, void 0, void 0, function () {
            var postObj, createUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postObj = { space_id: space_id };
                        createUrl = this.url + "spacevisit/savevisit";
                        return [4 /*yield*/, this.httpClient.post(createUrl, postObj).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpaceService.prototype.getSimilar = function (category_id, space_id) {
        return __awaiter(this, void 0, void 0, function () {
            var createUrl, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        createUrl = this.url + "spacevisit/getSimilar/" + category_id + "?space_id=" + space_id;
                        if (this.getUserInfo()) {
                            userInfo = this.getUserInfo();
                            createUrl += '&user_id=' + userInfo.id;
                        }
                        return [4 /*yield*/, this.httpClient.get(createUrl).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpaceService.prototype.uploadImage = function (image, name) {
        return __awaiter(this, void 0, void 0, function () {
            var uploadUrl, uploadedImage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uploadUrl = this.url + "spaces/upload";
                        return [4 /*yield*/, this.httpClient.post(uploadUrl, this.toFormData(image, name)).toPromise()];
                    case 1:
                        uploadedImage = _a.sent();
                        return [2 /*return*/, uploadedImage];
                }
            });
        });
    };
    SpaceService.prototype.favoriteSpace = function (user_favorites) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi + "userfavorites";
                        return [4 /*yield*/, this.httpClient.post(url, user_favorites).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpaceService.prototype.deleteFavoriteSpace = function (user_favorites) {
        return __awaiter(this, void 0, void 0, function () {
            var query, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = Object(querystring__WEBPACK_IMPORTED_MODULE_4__["stringify"])(user_favorites);
                        url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi + "userfavorites?" + query;
                        return [4 /*yield*/, this.httpClient.delete(url, user_favorites).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpaceService.prototype.getUserInfo = function () {
        if (localStorage.getItem('token-user')) {
            if (this.userHelper.verifyToken(localStorage.getItem('token-user'))) {
                var userInfo = this.helper.decodeToken(localStorage.getItem('token-user'));
                return userInfo;
            }
        }
        return undefined;
    };
    SpaceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], SpaceService);
    return SpaceService;
}());



/***/ }),

/***/ "./src/app/services/space_tags.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/space_tags.service.ts ***!
  \************************************************/
/*! exports provided: SpaceTagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceTagsService", function() { return SpaceTagsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SpaceTagsService = /** @class */ (function () {
    function SpaceTagsService(_http) {
        this._http = _http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi;
    }
    SpaceTagsService.prototype.getAll = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._http.get(this.url + "tags/getandcount?" + params).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpaceTagsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], SpaceTagsService);
    return SpaceTagsService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlApi;
    }
    // Upload method
    UserService.prototype.toFormData = function (serverFieldName, name) {
        var form = new FormData();
        console.log(this.dataURItoBlob(serverFieldName));
        form.append("file", this.dataURItoBlob(serverFieldName), name);
        return form;
    };
    // Upload method
    UserService.prototype.dataURItoBlob = function (dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: 'image/jpeg' });
    };
    UserService.prototype.login = function (login) {
        return __awaiter(this, void 0, void 0, function () {
            var loginUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loginUrl = this.url + "users/auth";
                        return [4 /*yield*/, this.httpClient.post(loginUrl, login).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.validateEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var validateUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validateUrl = this.url + "users/validate-email";
                        return [4 /*yield*/, this.httpClient.post(validateUrl, email).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.create = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var createUrl, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        createUrl = this.url + "users";
                        return [4 /*yield*/, this.httpClient.post(createUrl, user).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.uploadImage = function (image, name) {
        return __awaiter(this, void 0, void 0, function () {
            var uploadUrl, uploadedImage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uploadUrl = this.url + "users/upload";
                        return [4 /*yield*/, this.httpClient.post(uploadUrl, this.toFormData(image, name)).toPromise()];
                    case 1:
                        uploadedImage = _a.sent();
                        return [2 /*return*/, uploadedImage];
                }
            });
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_4__["SlideshowModule"]
            ],
            declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
            exports: [
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_4__["SlideshowModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    urlApi: 'http://localhost:3000/api/',
    urlFront: 'http://localhost:4201/#/',
    itensPerPage: 10
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\henrique.melanda\Documents\projects\respace\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map