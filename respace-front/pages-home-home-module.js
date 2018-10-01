(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner-hero .content-caption p.error {\r\n  display: none;\r\n  color: #FFF;\r\n  font-size: .7em;\r\n  text-align: left;\r\n  margin-top: 5px;\r\n}\r\n.form-fields-category,\r\n.form-fields-where {\r\n  width: 275px;\r\n  display: inline-block;\r\n  position: relative;\r\n  margin-right: 20px\r\n}\r\n.form-fields-where {\r\n  margin-right: 10px;\r\n}\r\n.clickable{\r\n    cursor: pointer;\r\n}\r\n.form-visor {\r\n  width: 100%;\r\n  border: 1px solid #5860ab;\r\n  background-color: #ddd;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 1.21;\r\n  letter-spacing: normal;\r\n  color: #707070;\r\n  cursor: pointer;\r\n}\r\n.form-visor::after {\r\n  content: '\\f078';\r\n  position: absolute;\r\n  right: 9px;\r\n  top: 11px;\r\n  font-family: 'FontAwesome', sans-serif;\r\n  border: 0;\r\n  float: right;\r\n  color: #5860ab;\r\n  margin-right: 0px;\r\n  vertical-align: baseline;\r\n  transition: all .25s ease-in-out\r\n}\r\n.form-visor.show ~ .form-list,\r\n.form-visor.showAll ~ .form-list {\r\n  display: inline-block;\r\n}\r\n.form-visor.show::after,\r\n.form-visor.showAll::after {\r\n  -webkit-transform: rotate(-180deg);\r\n          transform: rotate(-180deg);\r\n}\r\n.form-list {\r\n  width: 100%;\r\n  padding: .5rem 0;\r\n  position: absolute;\r\n  z-index: 11;\r\n  top: 39px;\r\n  left: 0;\r\n  background-color: #FFF;\r\n  border: 1px solid rgba(0,0,0,.15);\r\n  border-radius: .25rem;\r\n  list-style: none;\r\n  display: none;\r\n}\r\n.form-list li {\r\n  padding: .25rem 1.5rem;\r\n  color: #212529;\r\n  cursor: pointer;\r\n  transition: all .25s ease-in-out;\r\n}\r\n.form-list li:hover {\r\n  background-color: #007bff;\r\n  color: #FFF;\r\n}\r\n.all-categories,\r\n.all-city {\r\n  margin-top: 8px;\r\n  color: #007bff;\r\n  cursor: pointer;\r\n  font-size: .8em;\r\n  transition: all .25s ease-in-out;\r\n}\r\n.all-city, .all-categories{\r\n  padding: .25rem 1.5rem;\r\n}\r\n.all-categories:hover,\r\n.all-city:hover {\r\n  color: #212529;\r\n}\r\n.text-white {\r\n  color: #FFF;\r\n}\r\n.top-results .box-img .img{\r\n  min-height: 230px;\r\n  width: 100%;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n}\r\n.top-results .top-block .box-img .img{\r\n  min-height: 325px;\r\n}\r\n.field-category,\r\n.field-city {\r\n  width: 94%;\r\n  height: 36px;\r\n  padding: 0 .75rem;\r\n  background-color: #ddd;\r\n  border: 0;\r\n  outline: 0;\r\n}\r\n.modal-overlay,\r\n.modal-city-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  z-index: 12;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(255,255,255,.8);\r\n}\r\n.modal-overlay.close,\r\n.modal-city-overlay.close,\r\n.modal-container.close,\r\n.modal-city-container.close {\r\n  display: none;\r\n}\r\n.modal-overlay.open,\r\n.modal-city-overlay.open,\r\n.modal-container.open,\r\n.modal-city-container.open {\r\n  display: block;\r\n}\r\n.modal-container,\r\n.modal-city-container {\r\n  width: 100%;\r\n  max-width: 525px;\r\n  position: absolute;\r\n  z-index: 13;\r\n  top: 72px;\r\n  left: calc(50% - 262px);\r\n  background-color: #FFF;\r\n  border: 1px solid #d8d7d7;\r\n}\r\n.modal-close,\r\n.modal-city-close {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n  border: 0;\r\n  font-size: 1.3em;\r\n  color: #818181;\r\n  background-color: #FFF;\r\n  cursor: pointer;\r\n  outline: 0;\r\n}\r\n.modal-title,\r\n.modal-city-title {\r\n  width: 100%;\r\n  margin: 0;\r\n  display: inline-block;\r\n  text-align: center;\r\n  color: #212529;\r\n  font-size: 1.4em;\r\n  margin-top: 30px;\r\n}\r\n.modal-list,\r\n.modal-city-list {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 20px;\r\n}\r\n.modal-list::after,\r\n.modal-city-list::after {\r\n  content: \"\";\r\n  width: 100%;\r\n  clear: both;\r\n  display: inline-block;\r\n}\r\n.modal-list li,\r\n.modal-city-list li {\r\n  width: 50%;\r\n  float: left;\r\n  padding: .25rem 1.5rem;\r\n  color: #007bff;\r\n  cursor: pointer;\r\n  transition: all .25s ease-in-out;\r\n}\r\n.modal-list li:hover,\r\n.modal-city-list li:hover {\r\n  background-color: #007bff;\r\n  color: #FFF;\r\n}\r\n.empty {\r\n  text-align: center;\r\n  padding: 0px 30px;\r\n  color: #818181;\r\n  font-size: .9em;\r\n}\r\n.empty.close {\r\n  display: none;\r\n}\r\n.empty.active {\r\n  display: inline-block;\r\n}\r\n@media screen and (max-width: 1000px) {\r\n  .form-fields-category,\r\n  .form-fields-where {\r\n    margin-right: 0;\r\n    margin-bottom: 15px;\r\n  }\r\n  .form-fields-where {\r\n    margin-right: 0;\r\n  }\r\n}\r\n@media screen and (max-width: 525px) {\r\n  .modal-container,\r\n  .modal-city-container {\r\n    left: 0;\r\n  }\r\n  .modal-list li,\r\n  .modal-city-list li{\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"respace-wrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"row bg-white mt-1 d-none d-lg-block\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"white-bar\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"banner-hero\">\r\n    <img src=\"assets/images/banner-hero.jpg\" alt=\"\" class=\"img-fluid w-100 mb-3 d-block d-lg-none\" />\r\n    <div class=\"content-caption\">\r\n      <h1>Reinvente os espaços</h1>\r\n      <p>Encontre um local inusitado para o seu\r\n        <br />evento e feche direto com o anfitrião</p>\r\n      <div class=\"actions\">\r\n        <div class=\"form-fields-category\">\r\n          <div class=\"form-visor\"  id=\"category\" [ngClass]=\"[searched == 'category' ? 'showAll' : '', searched == 'all' ? 'showAll' : '']\"\r\n            (click)=\"toogleFields($event)\" data-js=\"formFieldsCategory\" data-click=\"0\">\r\n            <input name=\"category\" id=\"categoryField\" autocomplete=\"off\" class=\"field-category\" (keyup)=\"changeCategory($event)\" placeholder=\"O que você esta planejando?\" (click)=\"toogleFieldsInput($event)\">\r\n          </div>\r\n          <ul class=\"form-list\">\r\n            <li (click)=\"handleClickType($event)\" *ngFor=\"let item of listCategory | slice:0:5;\" data-id=\"{{item.slug}}\">{{item.name}}</li>\r\n            <div class=\"empty\" [ngClass]=\"emptyStatusCategory\">Não reconhecemos essa categoria</div>\r\n            <div (click)=\"handleOpenModalCategory($event)\" class=\"all-categories\">Veja todas categorias</div>            \r\n          </ul>\r\n        </div>\r\n        <div class=\"form-fields-where\">\r\n          <div class=\"form-visor\"  id=\"city\" [ngClass]=\"[searched == 'city' ? 'showAll': '', searched == 'all'  ? 'showAll': '']\"\r\n            (click)=\"toogleFields($event)\" data-js=\"formFieldsCity\">\r\n            <input name=\"city\" id=\"cityField\" autocomplete=\"off\" class=\"field-city\" (keyup)=\"changeCity($event)\" placeholder=\"Onde?\" (click)=\"toogleFieldsInputCity($event)\">\r\n          </div>\r\n          <ul class=\"form-list\">\r\n            <li (click)=\"handleClickTypeCity($event)\" *ngFor=\"let item of city | slice:0:5;\" data-id=\"{{item.id}}\">{{item.name}}</li>\r\n            <div class=\"empty\" [ngClass]=\"emptyStatusCity\">Não reconhecemos essa cidade</div>\r\n            <div (click)=\"handleOpenModalCity($event)\" class=\"all-city\">Veja todas cidades</div>            \r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <a class=\"btn btn-green\" (click)=\"searchSpace()\">Buscar</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container bg-white pb-4\">\r\n    <section class=\"how-work\">\r\n      <h4>Como funciona?</h4>\r\n      <p>Encontre espaços perfeitos para se reunir, criar e celebrar</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <div class=\"inner-content\">\r\n            <div class=\"icon\">\r\n              <img src=\"assets/images/search.png\" alt=\"\">\r\n            </div>\r\n            <span>\r\n              <em>1</em>. Encontre casas, espaços comerciais, galerias e muito mais\r\n              <span class=\"bottom-bar\"></span>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"inner-content\">\r\n            <div class=\"icon\">\r\n              <img src=\"assets/images/chat.png\" alt=\"\">\r\n            </div>\r\n            <span>\r\n              <em>2</em>. Confira a disponibilidade, preço e fale direto com o anfitrião\r\n              <span class=\"bottom-bar\"></span>\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"inner-content\">\r\n            <div class=\"icon\">\r\n              <img src=\"assets/images/calendar.png\" alt=\"\">\r\n            </div>\r\n            <span>\r\n              <em>3</em>. Reserve em alguns cliques\r\n              <span class=\"bottom-bar\"></span>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"categories\">\r\n      <h2 class=\"text-center\">Categorias</h2>\r\n      <ul class=\"all-categories\">\r\n        <li *ngFor=\"let c of categories; let i = index\" [ngStyle]=\" i > 11 ? {'display':'none'} : {}\" class=\"category\">\r\n          <a>\r\n            <img (click)=\"searchByCategory(c.slug)\" src=\"{{c.image}}\" class=\"img-fluid clickable\" alt=\"\">\r\n            <h3>{{c.name}}</h3>\r\n            <div class=\"bottom-bar\"></div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </section>\r\n    <section class=\"share\">\r\n      <div class=\"box\">\r\n        <h4>Compartilhe seu espaço e ganhe dinheiro.</h4>\r\n        <p>É fácil, rápido e gratuito.</p>\r\n        <a href=\"/\" class=\"btn btn-green\">Anuncie</a>\r\n      </div>\r\n    </section>\r\n    <section class=\"newsletter d-flex align-items-center justify-content-center\">\r\n      <img src=\"assets/images/envelope.png\" alt=\"\" />\r\n      <span>Cadastre-se para receber novidades e ofertas exclusivas</span>\r\n      <form action=\"\">\r\n        <input type=\"text\" placeholder=\"Digite seu e-mail\" />\r\n        <button class=\"btn btn-purple\">Cadastre-se</button>\r\n      </form>\r\n    </section>\r\n    <section class=\"why-use\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <h2>Por quê usar o Respace?</h2>\r\n          <p>Acreditamos que a inovação acontece quando unimos pessoas conectadas a espaços inspiradores. Por isso,\r\n            promovemos\r\n            o compartilhamento de locais, estimulando a criatividade e  otimizando tempo e espaços subutilizados.</p>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n          <img src=\"assets/images/why-use.jpg\" class=\"img-fluid\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"top-results\">\r\n      <h4>Mais buscados</h4>\r\n      <div class=\"row other-results\">\r\n        <div [ngClass]=\"i === 0 ? 'col-md-12 mb-4 top-block' : 'col-md-4'\" *ngFor=\"let s of mostWanted ;let i = index\">\r\n          <div class=\"box-img\">\r\n            <a routerLink=\"/details/{{s.id}}\">\r\n              <div class=\"img\" [ngStyle]=\"{'background-image': 'url('+s.space_images[0].url+')'}\"></div>\r\n\r\n              <div class=\"col-featured\" [hidden]=\"i > 0\">\r\n                <div class=\"over\">\r\n                  <span class=\"city\">{{s.address.neighborhood}} - {{s.address.city}}</span>\r\n                  <div class=\"value\">{{price(s.price)}}\r\n                    <span>/hr</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-others\" [hidden]=\"i == 0\">\r\n                <div class=\"over\">\r\n                  <div class=\"value\">{{price(s.price)}}\r\n                    <span>/hr</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"caption\">\r\n                  <strong>Rua {{s.address.street}}</strong>\r\n                  <span>Bairro: {{s.address.neighborhood}}</span>\r\n                </div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 text-center mt-4\">\r\n        <a href=\"/\" class=\"btn btn-green btn-search\">Busque o seu espaço</a>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</div>\r\n<div class=\"nav-backdrop\"></div>\r\n<div class=\"modal-overlay\" (click)=\"closeModal()\" [ngClass]=\"statusModal\"></div>\r\n<div class=\"modal-container\" [ngClass]=\"statusModal\">\r\n  <button class=\"modal-close\" (click)=\"closeModal()\"><i class=\"fa fa-times\"></i></button>\r\n  <h2 class=\"modal-title\">O que você esta planejando?</h2>\r\n  <ul class=\"modal-list\">\r\n      <li *ngFor=\"let item of allCategories\" (click)=\"handleCategoryModal($event)\" data-id=\"{{item.slug}}\">{{item.name}}</li>\r\n  </ul>\r\n</div>\r\n\r\n\r\n<div class=\"modal-city-overlay\" (click)=\"closeModalCity()\" [ngClass]=\"statusModalCity\"></div>\r\n<div class=\"modal-city-container\" [ngClass]=\"statusModalCity\">\r\n  <button class=\"modal-city-close\" (click)=\"closeModalCity()\"><i class=\"fa fa-times\"></i></button>\r\n  <h2 class=\"modal-city-title\">Onde?</h2>\r\n  <ul class=\"modal-city-list\">\r\n      <li *ngFor=\"let item of allCity\" (click)=\"handleCityModal($event)\" data-id=\"{{item.id}}\">{{item.name}}</li>\r\n  </ul>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_mostwanted_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mostwanted.service */ "./src/app/services/mostwanted.service.ts");
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




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, categoryService, mostWantedService) {
        this.router = router;
        this.categoryService = categoryService;
        this.mostWantedService = mostWantedService;
        this.categories = new Array();
        this.mostWanted = new Array();
        this.listCategory = [];
        this.searched = '';
        this.statusModal = 'close';
        this.statusModalCity = 'close';
        this.allCategories = [];
        this.emptyStatusCategory = 'close';
        this.emptyStatusCity = 'close';
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
        this.allCity = [
            {
                id: 1,
                name: 'São Paulo'
            },
            {
                id: 2,
                name: 'Rio de Janeiro'
            }
        ];
        $(document).ready(function () {
            $('.navbar-toggler').click(function (e) {
                e.preventDefault();
                if ($('.navbar-collapse').hasClass('opened')) {
                    $('.navbar-collapse').removeClass('opened');
                    $('.nav-backdrop').removeClass('show');
                }
                else {
                    $('.navbar-collapse').addClass('opened');
                    $('.nav-backdrop').addClass('show');
                }
            });
            if (window.innerWidth < 992) {
                $('.all-categories').slick({
                    arrows: false,
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    responsive: [{
                            breakpoint: 552,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }]
                });
                $('.other-results').slick({
                    arrows: false,
                    dots: true,
                    slidesToScroll: 1,
                    slidesToShow: 2,
                    responsive: [{
                            breakpoint: 552,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                centerPadding: '80px',
                            }
                        }]
                });
            }
        });
        this.gelAllCategories();
        this.gelMostWanted();
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    HomeComponent.prototype.findMatches = function (wordToMatch, category) {
        return category.filter(function (item) {
            var regex = new RegExp(wordToMatch, 'gi');
            return item.name.match(regex);
        });
    };
    HomeComponent.prototype.filterRegexMatchAPI = function (value, category) {
        return this.findMatches(value, category);
    };
    HomeComponent.prototype.changeCategory = function (e) {
        e.target.parentElement.setAttribute('data-value', e.target.value);
        var result = this.filterRegexMatchAPI(e.target.value, this.allCategories);
        result.length === 0 ? this.emptyStatusCategory = 'active' : this.emptyStatusCategory = 'close';
        this.listCategory = result;
    };
    HomeComponent.prototype.changeCity = function (e) {
        e.target.parentElement.setAttribute('data-city', e.target.value);
        var result = this.filterRegexMatchAPI(e.target.value, this.allCity);
        result.length === 0 ? this.emptyStatusCity = 'active' : this.emptyStatusCity = 'close';
        this.city = result;
    };
    HomeComponent.prototype.handleOpenModalCategory = function (e) {
        window.scrollTo(0, 0);
        var visor = e.target.parentElement.parentElement.querySelector('.form-visor');
        visor.classList.remove('show');
        this.statusModal = 'open';
    };
    HomeComponent.prototype.handleOpenModalCity = function (e) {
        window.scrollTo(0, 0);
        var visor = e.target.parentElement.parentElement.querySelector('.form-visor');
        visor.classList.remove('show');
        this.statusModalCity = 'open';
    };
    HomeComponent.prototype.closeModal = function () {
        this.statusModal = 'close';
    };
    HomeComponent.prototype.closeModalCity = function () {
        this.statusModalCity = 'close';
    };
    HomeComponent.prototype.handleCategoryModal = function (e) {
        var slugCategory = e.target.getAttribute('id');
        var textCategory = e.target.innerHTML;
        var visor = document.querySelector('.form-fields-category .form-visor');
        var inputVisuor = visor.querySelector('input');
        visor.setAttribute('data-value', textCategory);
        visor.setAttribute('data-click', slugCategory);
        inputVisuor.value = textCategory;
        this.statusModal = 'close';
    };
    HomeComponent.prototype.handleCityModal = function (e) {
        var idCity = e.target.getAttribute('id');
        var textCity = e.target.innerHTML;
        var visor = document.querySelector('.form-fields-where .form-visor');
        var inputVisuor = visor.querySelector('input');
        visor.setAttribute('data-value', textCity);
        visor.setAttribute('data-click', idCity);
        inputVisuor.value = textCity;
        this.statusModalCity = 'close';
    };
    HomeComponent.prototype.searchSpace = function () {
        this.searched = '';
        this.slugCategory = document.querySelector('[data-js="formFieldsCategory"]').getAttribute('data-click');
        this.idCity = document.querySelector('[data-js="formFieldsCity"]').getAttribute('data-city');
        this.validateSearch();
        if (this.slugCategory !== '0' && this.idCity != null) {
            this.router.navigate(["search/" + this.slugCategory], {
                queryParams: {
                    page: 1,
                    per_page: 6,
                    city: this.idCity
                }
            });
        }
    };
    HomeComponent.prototype.searchByCategory = function (category) {
        this.router.navigate(["search/" + category], {
            queryParams: {
                page: 1,
                per_page: 6
            }
        });
    };
    HomeComponent.prototype.validateSearch = function () {
        if (this.slugCategory === '0' && this.idCity == null) {
            this.searched = 'all';
            return;
        }
        if (this.slugCategory === '0') {
            this.searched = 'category';
        }
        if (this.idCity == null) {
            this.searched = 'city';
        }
    };
    HomeComponent.prototype.toogleFields = function (e) {
        this.searched = '';
        var valueInput = e.target.getAttribute('data-value');
        var valueInputCity = e.target.getAttribute('data-city');
        var elementHtml = e.target;
        var category = document.getElementById('category');
        var city = document.getElementById('city');
        this.returnToggledFields(elementHtml.id);
        if (elementHtml.classList.contains('show')) {
            elementHtml.classList.remove('show');
        }
        else {
            if (valueInput !== null && valueInput !== '') {
                this.listCategory = this.filterRegexMatchAPI(valueInput, this.allCategories);
            }
            if (valueInputCity !== null && valueInputCity !== '') {
                this.city = this.filterRegexMatchAPI(valueInputCity, this.allCity);
            }
            elementHtml.classList.add('show');
        }
    };
    HomeComponent.prototype.returnToggledFields = function (id) {
        var category = document.getElementById('category');
        var city = document.getElementById('city');
        switch (id) {
            case 'categoryField':
                city.classList.remove('show');
                break;
            case 'cityField':
                category.classList.remove('show');
                break;
            case 'category':
                city.classList.remove('show');
                break;
            case 'city':
                category.classList.remove('show');
                break;
            default:
                break;
        }
    };
    HomeComponent.prototype.toogleFieldsInput = function (e) {
        e.target.parentElement.classList.add('show');
        this.returnToggledFields(e.target.id);
        this.listCategory = this.filterRegexMatchAPI(e.target.value, this.allCategories);
    };
    HomeComponent.prototype.toogleFieldsInputCity = function (e) {
        e.target.parentElement.classList.add('show');
        this.returnToggledFields(e.target.id);
        this.city = this.filterRegexMatchAPI(e.target.value, this.allCity);
    };
    HomeComponent.prototype.handleClickType = function (e) {
        var textElement = e.target.innerText;
        var idElement = e.target.getAttribute('id');
        var elementVisor = e.target.parentElement.parentElement.firstChild;
        elementVisor.querySelector('input').value = textElement;
        elementVisor.setAttribute('data-click', idElement);
        elementVisor.setAttribute('data-value', textElement);
        elementVisor.classList.remove('show');
        elementVisor.classList.remove('showAll');
    };
    HomeComponent.prototype.handleClickTypeCity = function (e) {
        var textElement = e.target.innerText;
        var idElement = e.target.getAttribute('id');
        var elementVisor = e.target.parentElement.parentElement.firstChild;
        elementVisor.querySelector('input').value = textElement;
        elementVisor.setAttribute('data-click', idElement);
        elementVisor.setAttribute('data-city', textElement);
        elementVisor.classList.remove('show');
        elementVisor.classList.remove('showAll');
    };
    HomeComponent.prototype.gelAllCategories = function () {
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
                        this.listCategory = categories;
                        this.allCategories = categories;
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
    HomeComponent.prototype.gelMostWanted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mostWanted, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.mostWantedService.getMostWanted()];
                    case 1:
                        mostWanted = _a.sent();
                        this.mostWanted = mostWanted.spaces;
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.price = function (value) {
        if (value) {
            var valueFormat = value.toFixed(2).split('.');
            valueFormat[0] = "R$ " + valueFormat[0].split(/(?=(?:...)*$)/).join('.');
            return "" + valueFormat.join(',');
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _services_mostwanted_service__WEBPACK_IMPORTED_MODULE_3__["MostWantedService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeRoutes, HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeRoutes = [{
        path: '',
        data: {
            heading: 'Home'
        },
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(HomeRoutes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map