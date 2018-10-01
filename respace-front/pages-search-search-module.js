(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-search-module"],{

/***/ "./src/app/pages/search/search.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/search/search.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-result {\r\n  width: 100%;\r\n  height: 100vw;\r\n  max-height: 1000px;\r\n  display: inline-block;\r\n}\r\n\r\n.pin {\r\n  width: 253px;\r\n  display: none;\r\n  position: absolute;\r\n  z-index: 10;\r\n  background-color: #FFF;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n* /deep/.pin__image {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  height: 156px;\r\n  overflow: hidden;\r\n}\r\n\r\n* /deep/.pin__image li {\r\n  position: relative;\r\n  display: block;\r\n  padding-top: 60%;\r\n  width: 100%;\r\n}\r\n\r\n* /deep/.pin__image li img {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n* /deep/.pin__price {\r\n  position: absolute;\r\n  right: 5px;\r\n  top: -44px;\r\n  padding: 5px;\r\n  margin: 0;\r\n  background-color: #4d2668;\r\n  font-size: 10px;\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 1.82;\r\n  letter-spacing: normal;\r\n  color: #ffffff;\r\n  width: auto;\r\n}\r\n\r\n* /deep/.pin__info {\r\n  box-sizing: border-box;\r\n  margin-top: 5px;\r\n  padding: 0 10px;\r\n  position: relative;\r\n}\r\n\r\n* /deep/.pin__title {\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 1.14;\r\n  letter-spacing: normal;\r\n  text-align: left;\r\n  color: #424143;\r\n}\r\n\r\n* /deep/.pin__text {\r\n  font-size: 10px;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 1.6;\r\n  letter-spacing: normal;\r\n  text-align: left;\r\n  color: #666666;\r\n}\r\n\r\n* /deep/.pin__text img {\r\n  width: 8.89px;\r\n  height: 9.38px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.pin-load {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #FFF;\r\n  z-index: 11;\r\n}\r\n\r\n.pin-load.active {\r\n  display: block;\r\n}\r\n\r\n.pin-load:after {\r\n  content: \"\";\r\n  width: 40px;\r\n  height: 40px;\r\n  position: absolute;\r\n  top: calc(50% - 20px);\r\n  left: calc(50% - 20px);\r\n  border: 5px solid #5860ab;\r\n  border-radius: 50%;\r\n  border-bottom: 5px solid transparent;\r\n}\r\n\r\n* /deep/.pin .slick-arrow {\r\n  position: absolute;\r\n  top: 42%;\r\n  z-index: 20;\r\n}\r\n\r\n* /deep/.pin .slick-arrow.slick-prev {\r\n  left: 5px;\r\n}\r\n\r\n* /deep/.pin .slick-arrow.slick-next {\r\n  right: 5px;\r\n}\r\n\r\n.form-fields-category,\r\n.form-fields-city,\r\n.form-fields-capacity,\r\n.form-fields-time,\r\n.form-fields-filter {\r\n  width: 200px;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.form-fields-category {\r\n  width: 212px;\r\n}\r\n\r\n.form-visor {\r\n  width: 100%;\r\n  padding: .625rem .75rem;\r\n  border: 1px solid #5860ab;\r\n  background-color: #ddd;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 1.21;\r\n  letter-spacing: normal;\r\n  color: #707070;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-visor::after {\r\n  content: '\\f078';\r\n  font-family: 'FontAwesome', sans-serif;\r\n  border: 0;\r\n  float: right;\r\n  color: #5860ab;\r\n  margin-right: 0px;\r\n  vertical-align: baseline;\r\n  transition: all .25s ease-in-out\r\n}\r\n\r\n.form-visor-different {\r\n  padding: 0;\r\n}\r\n\r\n.form-visor-different::after {\r\n  content: '\\f078';\r\n  position: absolute;\r\n  right: 9px;\r\n  top: 11px;\r\n  font-family: 'FontAwesome', sans-serif;\r\n  border: 0;\r\n  float: right;\r\n  color: #5860ab;\r\n  margin-right: 0px;\r\n  vertical-align: baseline;\r\n  transition: all .25s ease-in-out\r\n}\r\n\r\n.form-visor.show~.form-list {\r\n  display: inline-block;\r\n}\r\n\r\n.form-visor.show::after {\r\n  -webkit-transform: rotate(-180deg);\r\n          transform: rotate(-180deg);\r\n}\r\n\r\n.form-list {\r\n  width: 100%;\r\n  padding: .5rem 0;\r\n  position: absolute;\r\n  z-index: 999999999;\r\n  top: 39px;\r\n  left: 0;\r\n  background-color: #FFF;\r\n  border: 1px solid rgba(0, 0, 0, .15);\r\n  border-radius: .25rem;\r\n  list-style: none;\r\n  display: none;\r\n}\r\n\r\n.form-list li {\r\n  padding: .25rem 1.5rem;\r\n  color: #212529;\r\n  cursor: pointer;\r\n  transition: all .25s ease-in-out;\r\n}\r\n\r\n.form-list li:hover {\r\n  background-color: #007bff;\r\n  color: #FFF;\r\n}\r\n\r\n.input-capacity {\r\n  width: 90%;\r\n  height: 42px;\r\n  padding: 1px 12px;\r\n  border: 1px solid #c6c6c6;\r\n  margin-left: calc(50% - 45%);\r\n}\r\n\r\n.form-fields-time,\r\n.form-fields-filter {\r\n  width: 150px;\r\n}\r\n\r\n.form-list-time {\r\n  width: 270px;\r\n  display: none;\r\n  justify-content: space-between;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.form-visor.show~.form-list-time {\r\n  display: flex;\r\n}\r\n\r\n.input-minTime,\r\n.input-maxTime {\r\n  width: 45%;\r\n  height: 42px;\r\n  padding: 1px 12px;\r\n  border: 1px solid #c6c6c6;\r\n}\r\n\r\n.form-list-filter {\r\n  width: 600px;\r\n  right: 0;\r\n  left: inherit;\r\n  border: 2px solid #4d2668;\r\n  border-radius: 0;\r\n}\r\n\r\n.form-list-filter p {\r\n  font-size: 18px;\r\n  color: #707070;\r\n  margin-left: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.form-list-filter li {\r\n  width: 33%;\r\n  float: left;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n\r\n.form-list-filter li:hover {\r\n  background-color: #FFF;\r\n  color: #212529;\r\n}\r\n\r\n.form-list-filter li input[type=\"checkbox\"] {\r\n  display: none;\r\n}\r\n\r\n.form-list-filter li label {\r\n  width: 100%;\r\n  text-align: left;\r\n  float: left;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 1.21;\r\n  letter-spacing: normal;\r\n  color: #707070;\r\n  position: relative;\r\n  cursor: pointer;\r\n  justify-content: flex-start;\r\n  padding-left: 1.5rem;\r\n  box-sizing: border-box;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.form-list-filter li label::before {\r\n  content: \"\";\r\n  width: 11px;\r\n  height: 11px;\r\n  display: inline-block;\r\n  border: 1px solid #707070;\r\n  border-radius: 3px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.form-list-filter li label::after {\r\n  content: '\\f046';\r\n  display: none;\r\n  font-family: 'FontAwesome', sans-serif;\r\n  border: 0;\r\n  -webkit-transform: rotate(0deg);\r\n          transform: rotate(0deg);\r\n  position: absolute;\r\n  left: 1.5rem;\r\n}\r\n\r\n.form-list-filter li input:checked~label:after {\r\n  display: block;\r\n}\r\n\r\n.field-category,\r\n.field-city {\r\n  width: 94%;\r\n  height: 36px;\r\n  padding: 0 .75rem;\r\n  background-color: #ddd;\r\n  border: 0;\r\n  outline: 0;\r\n}\r\n\r\n.modal-overlay,\r\n.modal-city-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  z-index: 26;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgba(255, 255, 255, .8);\r\n}\r\n\r\n.modal-overlay.close,\r\n.modal-city-overlay.close,\r\n.modal-container.close,\r\n.modal-city-container.close {\r\n  display: none;\r\n}\r\n\r\n.modal-overlay.open,\r\n.modal-city-overlay.open,\r\n.modal-container.open,\r\n.modal-city-container.open {\r\n  display: block;\r\n}\r\n\r\n.modal-container,\r\n.modal-city-container {\r\n  width: 100%;\r\n  max-width: 525px;\r\n  position: absolute;\r\n  z-index: 99999;\r\n  top: 72px;\r\n  left: calc(50% - 262px);\r\n  background-color: #FFF;\r\n  border: 1px solid #d8d7d7;\r\n}\r\n\r\n.modal-close,\r\n.modal-city-close {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n  border: 0;\r\n  font-size: 1.3em;\r\n  color: #818181;\r\n  background-color: #FFF;\r\n  cursor: pointer;\r\n  outline: 0;\r\n}\r\n\r\n.modal-title,\r\n.modal-city-title {\r\n  width: 100%;\r\n  margin: 0;\r\n  display: inline-block;\r\n  text-align: center;\r\n  color: #212529;\r\n  font-size: 1.4em;\r\n  margin-top: 30px;\r\n}\r\n\r\n.modal-list,\r\n.modal-city-list {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 20px;\r\n}\r\n\r\n.modal-list::after,\r\n.modal-city-list::after {\r\n  content: \"\";\r\n  width: 100%;\r\n  clear: both;\r\n  display: inline-block;\r\n}\r\n\r\n.modal-list li,\r\n.modal-city-list li {\r\n  width: 50%;\r\n  float: left;\r\n  padding: .25rem 1.5rem;\r\n  color: #007bff;\r\n  cursor: pointer;\r\n  transition: all .25s ease-in-out;\r\n}\r\n\r\n.modal-list li:hover,\r\n.modal-city-list li:hover {\r\n  background-color: #007bff;\r\n  color: #FFF;\r\n}\r\n\r\n.empty {\r\n  text-align: center;\r\n  padding: 0px 30px;\r\n  color: #818181;\r\n  font-size: .9em;\r\n}\r\n\r\n.empty.close {\r\n  display: none;\r\n}\r\n\r\n.empty.active {\r\n  display: inline-block;\r\n}\r\n\r\n.all-categories,\r\n.all-city {\r\n  margin-top: 8px;\r\n  padding: .25rem 1.5rem;\r\n  color: #007bff;\r\n  cursor: pointer;\r\n  font-size: .8em;\r\n  transition: all .25s ease-in-out;\r\n}\r\n\r\n.all-categories:hover,\r\n.all-city:hover {\r\n  color: #212529;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .form-fields-category {\r\n    width: 160px;\r\n  }\r\n  .form-fields-category,\r\n  .form-fields-city,\r\n  .form-fields-capacity,\r\n  .form-fields-time,\r\n  .form-fields-filter {\r\n    width: 160px;\r\n  }\r\n  .form-field-button {\r\n    width: 100px;    \r\n  }\r\n  .search .filters .btn.btn-green {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n\r\n  .form-fields-category,\r\n  .form-fields-city,\r\n  .form-fields-capacity,\r\n  .form-fields-time,\r\n  .form-fields-filter {\r\n    width: 90%;\r\n    margin-left: calc(50% - 45%);\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .form-fields-filter {\r\n    display: none;\r\n  }\r\n\r\n  .form-list-time {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-field-button {\r\n    width: 90%;\r\n    margin-left: calc(50% - 45%);\r\n  }\r\n\r\n  .form-field-button button {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 525px) {\r\n\r\n  .modal-container,\r\n  .modal-city-container {\r\n    left: 0;\r\n  }\r\n\r\n  .modal-list li,\r\n  .modal-city-list li {\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n  }\r\n}\r\n\r\n.color-black {\r\n  color: #000;\r\n}\r\n\r\n.icon-like {\r\n  position: relative;\r\n  margin-bottom: -23px;\r\n  margin-right: 5px;\r\n  background: #fff;\r\n  border-radius: 50%;\r\n  /* width: 23px; */\r\n  padding: 3px;\r\n}\r\n\r\n.fa.fa-heart.center {\r\n  display: block;\r\n  margin: auto;\r\n  font-size: 14px;\r\n}\r\n\r\n.fa.fa-heart-o.center {\r\n  display: block;\r\n  margin: auto;\r\n  font-size: 14px;\r\n}\r\n\r\n.card-map .img-fluid {\r\n  width: 150% !important;\r\n  height: 100% !important;\r\n  display: inline-block !important;\r\n}\r\n\r\n.img-fluid {\r\n  max-width: none !important;\r\n}\r\n\r\n.arrow-container.prev {\r\n  z-index: 20 !important;\r\n}\r\n\r\n.arrow-container.next {\r\n  z-index: 20 !important;\r\n}\r\n\r\n.tags-count {\r\n  margin-left: 4px;\r\n  color: #808081;\r\n  padding: 1px 4px;\r\n  border-radius: 2px;\r\n}\r\n\r\n.search .content-map .maps .card-map .favorite {\r\n  z-index: 101\r\n}"

/***/ }),

/***/ "./src/app/pages/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\r\n  <div class=\"respace-wrapper\">\r\n    <div class=\"container bg-white pb-3 pt-3\">\r\n      <a href=\"javascript:void(0)\" class=\"btn btn-filter d-block d-lg-none\"><i class=\"fa fa-filter\"></i> Filtros</a>\r\n      <section class=\"filters\">\r\n        <div class=\"inner-filters\">\r\n          <div class=\"header-filter-mob d-block d-lg-none\">\r\n            <a href=\"javascript:void(0)\" class=\"btn-close-filters\"><i class=\"fa fa-close\"></i></a>\r\n            <strong>Filtros</strong>\r\n          </div>\r\n          <form action=\"javascript:void(0)\" (submit)=\"handleFilter($event)\" class=\"form-inline d-flex justify-content-between\">\r\n            <div class=\"form-fields-category\">\r\n              <div class=\"form-visor form-visor-different\" id=\"categoryField\" (click)=\"toogleFields($event)\" data-js=\"formFieldsCategoy\">\r\n                <input name=\"category\" class=\"field-category\" id=\"input-category-search\" autocomplete=\"off\" (keyup)=\"change($event,'category')\"\r\n                  placeholder=\"O que você esta planejando?\" [(ngModel)]='categoryFilter' (click)=\"toogleFieldsInput($event, 'category')\">\r\n              </div>\r\n              <ul *ngIf=\"canSee\" class=\"form-list\">\r\n                <li (click)=\"handleClick($event, item, 'category')\" *ngFor=\"let item of listCategory | slice:0:5\"\r\n                  data-id=\"{{item.id}}\">{{item.name}}</li>\r\n                <div class=\"empty\" [ngClass]=\"emptyStatusCategory\">Não reconhecemos essa categoria</div>\r\n                <div (click)=\"handleOpenModal($event,'category')\" class=\"all-categories\">Veja todas categorias</div>\r\n              </ul>\r\n            </div>\r\n            <div class=\"form-fields-city\">\r\n              <div class=\"form-visor form-visor-different\" id=\"cityField\" (click)=\"toogleFields($event)\" data-js=\"formFieldsCity\">\r\n                <input name=\"city\" class=\"field-city\" id=\"input-city-search\" [(ngModel)]='cityFilter' autocomplete=\"off\"\r\n                  (keyup)=\"change($event, 'city')\" placeholder=\"Onde?\" (click)=\"toogleFieldsInput($event, 'city')\">\r\n              </div>\r\n              <ul *ngIf=\"canSee\" class=\"form-list\">\r\n                <li (click)=\"handleClick($event, item, 'city')\" *ngFor=\"let item of city | slice:0:5;\" data-id=\"{{item.id}}\">{{item.name}}</li>\r\n                <div class=\"empty\" [ngClass]=\"emptyStatusCity\">Não reconhecemos essa cidade</div>\r\n                <div (click)=\"handleOpenModal($event,'city')\" class=\"all-city\">Veja todas cidades</div>\r\n              </ul>\r\n            </div>\r\n            <div class=\"form-fields-capacity\">\r\n              <div class=\"form-visor\" id=\"capacityField\" (click)=\"toogleFields($event)\">\r\n                Capacidade\r\n              </div>\r\n              <div class=\"form-list\">\r\n                <input [(ngModel)]='capacityFilter' type=\"number\" id='capacity' name=\"capacity\" class=\"input-capacity\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-fields-time\">\r\n              <div class=\"form-visor\" id=\"priceField\" (click)=\"toogleFields($event)\" data-js=\"formFieldsTime\">\r\n                Preço por hora\r\n              </div>\r\n              <div class=\"form-list form-list-time\">\r\n                <input [(ngModel)]='minPriceFilter' type=\"number\" id='minTime' name=\"minTime\" class=\"input-minTime\"\r\n                  placeholder=\"Min\">\r\n                <input [(ngModel)]='maxPriceFilter' type=\"number\" id='maxTime' name=\"maxTime\" class=\"input-maxTime\"\r\n                  placeholder=\"Max\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-fields-filter\">\r\n              <div class=\"form-visor\" id=\"moreField\" (click)=\"toogleFields($event)\" data-js=\"formFieldsFilter\">\r\n                Mais filtros\r\n              </div>\r\n              <ul class=\"form-list form-list-filter\">\r\n                <p>Filtre pelas características abaixo:</p>\r\n                <li *ngFor=\"let st of spaceTags\">\r\n                  <input type=\"checkbox\" name=\"filter\" id=\"{{st.name}}\" [value]=\"st.id\" />\r\n                  <label for=\"{{st.name}}\">{{st.name}} <span class=\" tags-count\"> ({{st.tag_spaces[0]?.count ?\r\n                      st.tag_spaces[0]?.count : 0}})</span></label>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"form-field-button\">\r\n              <button class=\"btn btn-green\">BUSCAR</button>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </section>\r\n      <section class=\"content-map\">\r\n        <a href=\"javascript:void(0);\" class=\"btn btn-map d-block d-lg-none\"><i class=\"fa fa-map-marker mr-2\"></i> <span>Mapa</span></a>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"map\">\r\n\r\n              <div class=\"pin\" data-js=\"mapPopUp\">\r\n\r\n              </div>\r\n\r\n              <div class=\"map-result\" id=\"mapResult\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"row maps\">\r\n              <div class=\"col-lg-6\" data-js=\"vitrine\" *ngFor=\"let item of listSpace\">\r\n                <div class=\"card-map\" data-id=\"{{item.id}}\">\r\n                  <div class=\"img-list\">\r\n                    <slideshow [height]=\"height\" [minHeight]=\"'200px'\" [autoPlay]=\"false\" [showArrows]=\"item.images?.length > 1\"\r\n                      [imageUrls]=\"item.images\" [lazyLoad]=\"item.images?.length > 1\"\r\n                      [autoPlayWaitForLazyLoad]=\"true\" [disableSwiping]=\"item.images?.length < 2\">\r\n                    </slideshow>\r\n                  </div>\r\n                  <span class=\"flag\" [innerHTML]=\"price(item.price)\"></span>\r\n                  <span class=\"favorite\" (click)=\"favoriteSpace(item)\"><i [ngClass]=\"item.liked ? 'fa fa-heart' : 'fa fa-heart-o'\"></i></span>\r\n                  <div class=\"caption\">\r\n                    <h2 (click)=\"goToDetails(item)\" class=\"clickable\">{{item.name}}</h2>\r\n                    <p class=\"desc\">\r\n                      <span class=\"person\"><img src=\"assets/images/user-icon.png\" alt=\"\"> Capacidade: {{item.capacity}}\r\n                        pessoas</span>\r\n                      <span class=\"hours\"><img src=\"assets/images/clock-icon.png\" alt=\"\"> A partir de\r\n                        {{item.minimum_hours}} horas</span>\r\n                    </p>\r\n\r\n                    <p class=\"district\">Bairro: {{item.address.neighborhood}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"pagination-wrapper\">\r\n                  <span *ngIf=\"totalSpace == 1\" class=\"text\">{{totalSpace}} resultado</span>\r\n                  <span *ngIf=\"totalSpace != 1\" class=\"text\">{{totalSpace}} resultados</span>\r\n                  <div class=\"pagination\">\r\n                    <span class=\"prev-arrow\" (click)=\"clickPagePrev()\"><i class=\"fa fa-chevron-left\"></i></span>\r\n                    <ul class=\"pagination-items\">\r\n                      <li *ngFor=\"let item of totalPage\">\r\n                        <a (click)=\"clickPage(item)\" class=\"pointer\" [ngClass]=\"item === pageGet ? 'active' : ''\"\r\n                          [attr.data-page]=\"item\">{{item}}</a>\r\n                      </li>\r\n                    </ul>\r\n                    <span class=\"next-arrow\" (click)=\"clickPageNext()\"><i class=\"fa fa-chevron-right\"></i></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-overlay\" (click)=\"closeModal('category')\" [ngClass]=\"statusModal\"></div>\r\n<div class=\"modal-container\" [ngClass]=\"statusModal\">\r\n  <button class=\"modal-close\" (click)=\"closeModal('category')\"><i class=\"fa fa-times\"></i></button>\r\n  <h2 class=\"modal-title\">O que você esta planejando?</h2>\r\n  <ul class=\"modal-list\">\r\n    <li *ngFor=\"let item of allCategories\" (click)=\"selectModal(item, 'category')\">{{item.name}}</li>\r\n  </ul>\r\n</div>\r\n\r\n\r\n<div class=\"modal-city-overlay\" (click)=\"closeModal('city')\" [ngClass]=\"statusModalCity\"></div>\r\n<div class=\"modal-city-container\" [ngClass]=\"statusModalCity\">\r\n  <button class=\"modal-city-close\" (click)=\"closeModal('city')\"><i class=\"fa fa-times\"></i></button>\r\n  <h2 class=\"modal-city-title\">Onde?</h2>\r\n  <ul class=\"modal-city-list\">\r\n    <li *ngFor=\"let item of allCity\" (click)=\"selectModal(item,'city')\">{{item.name}}</li>\r\n  </ul>\r\n</div>\r\n\r\n<app-login *ngIf=\"isLogin\" (clickout)=\"loginModal()\"></app-login>"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_space_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/space.model */ "./src/app/models/space.model.ts");
/* harmony import */ var _services_space_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/space.service */ "./src/app/services/space.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_space_tags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/space_tags.service */ "./src/app/services/space_tags.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/city.service */ "./src/app/services/city.service.ts");
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







var SearchComponent = /** @class */ (function () {
    function SearchComponent(cityService, categoryService, spaceService, route, router, spaceTagsService) {
        this.cityService = cityService;
        this.categoryService = categoryService;
        this.spaceService = spaceService;
        this.route = route;
        this.router = router;
        this.spaceTagsService = spaceTagsService;
        this.categoryFilter = '';
        this.cityFilter = '';
        this.lastCategoryId = '';
        this.listSpace = [];
        this.totalSpace = 0;
        this.atualPage = 1;
        this.totalPage = [];
        this.listCategory = [];
        this.allCategories = [];
        this.idCategory = '';
        this.statusModal = 'close';
        this.statusModalCity = 'close';
        this.emptyStatusCategory = 'close';
        this.emptyStatusCity = 'close';
        this.isLogin = false;
        this.space = new _models_space_model__WEBPACK_IMPORTED_MODULE_2__["SpaceModel"]();
        this.spaceTags = [];
        this.city = [];
        this.allCity = [];
        this.canSee = false;
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
            if ($(window).width() < 992) {
                $('#select-filter').selectpicker({
                    dropupAuto: false
                });
                $('#select-filter').parent().find('div.dropdown-menu').addClass('show');
                $('#select-filter').selectpicker('toggle');
            }
            $('.btn-map').click(function (e) {
                e.preventDefault();
                if ($('.content-map .map').hasClass('active')) {
                    $('.btn-map').find('span').text('Mapa');
                    $('.btn-map').find('i').removeClass('fa-list').addClass('fa-map-marker');
                }
                else {
                    $('.btn-map').find('span').text('Lista');
                    $('.btn-map').find('i').removeClass('fa-map-marker').addClass('fa-list');
                }
                $('.content-map .map').toggleClass('active');
            });
            $('.btn-filter').click(function (e) {
                e.preventDefault();
                $('section.filters').toggleClass('active');
            });
            $('.btn-close-filters').click(function (e) {
                e.preventDefault();
                $('section.filters').toggleClass('active');
            });
            $('.cancel-filter').click(function (e) {
                e.preventDefault();
                $('section.filters').toggleClass('active');
            });
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, cities;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allCategory()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.urlParams()];
                    case 2:
                        _a.sent();
                        query = this.mountQuery();
                        return [4 /*yield*/, this.getAllSpaceTags(query)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.cityService.getAllCities()];
                    case 4:
                        cities = _a.sent();
                        this.city = cities;
                        this.allCity = cities;
                        this.canSee = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.mountQuery = function (map) {
        var _this = this;
        this.allCategories.forEach(function (cat) {
            if (cat.name === _this.categoryFilter) {
                _this.categoryFilter = cat.id;
            }
        });
        this.lastCategoryId = this.categoryFilter;
        var filters = document.querySelectorAll('input[name="filter"]');
        var filtersId = [];
        for (var i = 0; i < filters.length; i++) {
            if (filters[i].checked === true) {
                filtersId.push(filters[i].value);
            }
        }
        var urlCategory = "" + (this.categoryFilter !== null ? "&category=" + this.categoryFilter : '');
        var urlCapacity = "" + (this.capacityFilter ? "&capacity=" + this.capacityFilter : '');
        var urlMin = "" + (this.minPriceFilter ? "&min_price=" + this.minPriceFilter.toString() : '');
        var urlMax = "" + (this.maxPriceFilter ? "&max_price=" + this.maxPriceFilter.toString() : '');
        var urlTag = "" + (filtersId.length !== 0 ? "&tags=" + filtersId.toString() : '');
        if (map) {
            var bounds = map.getBounds();
            var ne = bounds.getNorthEast();
            var sw = bounds.getSouthWest();
            // tslint:disable-next-line:max-line-length
            var query = "page=" + this.atualPage + "&per_page=6" + urlCategory + urlCapacity + urlMin + urlMax + urlTag + "&point1=" + ne.lat() + "," + sw.lng() + "&point2=" + sw.lat() + "," + ne.lng();
            return query;
        }
        else {
            var query = "page=" + this.atualPage + "&per_page=6" + urlCategory + urlCapacity + urlMin + urlMax + urlTag;
            if (this.cityFilter) {
                var urlCity = "&city=" + this.cityFilter;
                query = query + urlCity;
            }
            return query;
        }
    };
    SearchComponent.prototype.searchSpaces = function (query, firstSearch) {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.spaceService.getAllPaginated(query)];
                    case 1:
                        res = _a.sent();
                        this.totalPage = [];
                        this.listSpace = [];
                        if (res.spaces) {
                            this.mountUrl(query, res, firstSearch);
                        }
                        return [2 /*return*/, res];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.mountUrl = function (query, res, firstSearch) {
        var _this = this;
        this.totalSpace = res.total_items;
        this.pagination(res.total_items);
        var category = this.allCategories.find(function (c) { return c.id === _this.lastCategoryId; });
        this.categoryFilter = category.name;
        if (!firstSearch) {
            window.history.pushState('respace', 'respace', "#/search/" + category.slug + "?" + query.replace("category=" + this.lastCategoryId, ''));
        }
    };
    SearchComponent.prototype.getAllSpaceTags = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.route.queryParams.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
                        var tags;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.spaceTagsService.getAll(query)];
                                case 1:
                                    tags = _a.sent();
                                    this.spaceTags = tags;
                                    if (params['tags']) {
                                        this.writeTags(params['tags']);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                catch (e) { }
                return [2 /*return*/];
            });
        });
    };
    SearchComponent.prototype.findMatches = function (wordToMatch, category) {
        return category.filter(function (item) {
            var regex = new RegExp(wordToMatch, 'gi');
            return item.name.match(regex);
        });
    };
    SearchComponent.prototype.toogleFieldsInput = function (e, type) {
        e.target.parentElement.classList.add('show');
        this.returnToggledFields(e.target.id);
        if (type === 'category') {
            this.listCategory = this.findMatches(e.target.value, this.allCategories);
        }
        else {
            this.city = this.findMatches(e.target.value, this.allCity);
        }
    };
    SearchComponent.prototype.toogleFields = function (e) {
        var elementHtml = e.target;
        this.returnToggledFields(elementHtml.id);
        if (elementHtml.classList.contains('show')) {
            elementHtml.classList.remove('show');
        }
        else {
            elementHtml.classList.add('show');
        }
    };
    SearchComponent.prototype.returnToggledFields = function (id) {
        var category = document.getElementById('categoryField');
        var city = document.getElementById('cityField');
        var capacity = document.getElementById('capacityField');
        var price = document.getElementById('priceField');
        var more = document.getElementById('moreField');
        switch (id) {
            case 'categoryField':
                city.classList.remove('show');
                capacity.classList.remove('show');
                price.classList.remove('show');
                more.classList.remove('show');
                break;
            case 'cityField':
                category.classList.remove('show');
                capacity.classList.remove('show');
                price.classList.remove('show');
                more.classList.remove('show');
                break;
            case 'capacityField':
                category.classList.remove('show');
                city.classList.remove('show');
                price.classList.remove('show');
                more.classList.remove('show');
                break;
            case 'priceField':
                category.classList.remove('show');
                city.classList.remove('show');
                capacity.classList.remove('show');
                more.classList.remove('show');
                break;
            case 'moreField':
                category.classList.remove('show');
                city.classList.remove('show');
                capacity.classList.remove('show');
                price.classList.remove('show');
                break;
            case 'input-category-search':
                city.classList.remove('show');
                capacity.classList.remove('show');
                price.classList.remove('show');
                more.classList.remove('show');
                break;
            case 'input-city-search':
                category.classList.remove('show');
                capacity.classList.remove('show');
                price.classList.remove('show');
                more.classList.remove('show');
                break;
            default:
                break;
        }
    };
    SearchComponent.prototype.change = function (e, type) {
        e.target.parentElement.setAttribute('data-value', e.target.value);
        if (type === 'city') {
            var result = this.findMatches(e.target.value, this.allCity);
            result.length === 0 ? this.emptyStatusCity = 'active' : this.emptyStatusCity = 'close';
            this.city = result;
        }
        else {
            var result = this.findMatches(e.target.value, this.allCategories);
            result.length === 0 ? this.emptyStatusCategory = 'active' : this.emptyStatusCategory = 'close';
            this.listCategory = result;
        }
    };
    SearchComponent.prototype.selectModal = function (item, type) {
        if (type === 'city') {
            {
                this.cityFilter = item.name;
            }
        }
        else {
            this.categoryFilter = item.name;
        }
        this.closeModal(type);
    };
    SearchComponent.prototype.handleOpenModal = function (e, type) {
        window.scrollTo(0, 0);
        var visor = e.target.parentElement.parentElement.querySelector('.form-visor');
        visor.classList.remove('show');
        if (type === 'city') {
            this.statusModalCity = 'open';
        }
        else {
            this.statusModal = 'open';
        }
    };
    SearchComponent.prototype.closeModal = function (type) {
        if (type === 'city') {
            this.statusModalCity = 'close';
        }
        else {
            this.statusModal = 'close';
        }
    };
    SearchComponent.prototype.writePinImage = function (items, id) {
        var liImage = document.createElement('ul');
        for (var i = 0; i < items.length; i++) {
            var html = "<li>\n                <a href='/#/details/" + id + "'><img src='" + items[i].url + "' width='100%' class='img-fluid' alt=''></a>\n            </li>";
            liImage.insertAdjacentHTML('beforeend', html);
        }
        return liImage.innerHTML;
    };
    SearchComponent.prototype.writePin = function (item, e) {
        var htmlModalPin = document.querySelector('[data-js="mapPopUp"]');
        var pinHtml = "<ul class='pin__image'>\n                " + this.writePinImage(item.contentImages, item.contentId) + "\n            </ul>\n            <div class='pin__info'>\n                <p class='pin__price'>" + this.price(item.contentPrice) + "</p>\n                <h2 class='pin__title'>" + item.contentTitle + "</h2>\n                <p class='pin__text'>\n                    <span class='pin__text-person'><img src='assets/images/user-icon.png' alt=''> Capacidade: " + item.contentCapacity + " pessoas</span>\n                </p>\n        </div>";
        htmlModalPin.innerHTML = pinHtml;
        htmlModalPin.setAttribute('style', "display: inline-block; transform: translate(calc(" + e.wa.pageX + "px - 242px), calc(" + e.wa.pageY + "px - 371px))");
        $('[data-js="mapPopUp"] ul').slick({
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a href="javascript:void(0);" class="custom-arrow slick-prev"><img src="assets/images/left-arrow.png"/></a>',
            nextArrow: '<a href="javascript:void(0);" class="custom-arrow slick-next"><img src="assets/images/right-arrow.png" /></a>',
        });
    };
    SearchComponent.prototype.getMoveMap = function (items, map, htmlModalPin) {
        var _this = this;
        if (items.length > 0) {
            var myLatLng_1 = [];
            this.listSpace = items;
            this.addImages();
            items.forEach(function (item) {
                myLatLng_1.push({
                    lat: parseFloat(item.address.latitude),
                    lng: parseFloat(item.address.longitude),
                    id: item.id,
                    title: item.name,
                    price: item.price,
                    capacity: item.capacity,
                    images: item.space_images
                });
            });
            myLatLng_1.forEach(function (item) {
                var marker = new google.maps.Marker({
                    position: { lat: item.lat, lng: item.lng },
                    map: map,
                    contentId: item.id,
                    contentTitle: item.title,
                    contentPrice: item.price,
                    contentCapacity: item.capacity,
                    contentImages: item.images
                });
                google.maps.event.addListener(marker, 'click', function (e) {
                    htmlModalPin.setAttribute('style', "display: none;");
                    htmlModalPin.innerHTML = '';
                    _this.writePin(marker, e);
                });
            });
        }
    };
    SearchComponent.prototype.getMap = function (items, zoomNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var map_1, htmlModalPin_1, myLatLng_2, map;
            return __generator(this, function (_a) {
                this.listSpace = [];
                if (items.length > 0) {
                    this.listSpace = items;
                    this.addImages();
                    map_1 = new google.maps.Map(document.getElementById('mapResult'), {
                        zoom: zoomNumber,
                        center: { lat: parseFloat(items[0].address.latitude), lng: parseFloat(items[0].address.longitude) }
                    });
                    htmlModalPin_1 = document.querySelector('[data-js="mapPopUp"]');
                    myLatLng_2 = [];
                    items.forEach(function (item) {
                        myLatLng_2.push({
                            lat: parseFloat(item.address.latitude),
                            lng: parseFloat(item.address.longitude),
                            id: item.id,
                            title: item.name,
                            price: item.price,
                            capacity: item.capacity,
                            images: item.space_images
                        });
                    });
                    myLatLng_2.forEach(function (item) {
                        var marker = new google.maps.Marker({
                            position: { lat: item.lat, lng: item.lng },
                            map: map_1,
                            contentId: item.id,
                            contentTitle: item.title,
                            contentPrice: item.price,
                            contentCapacity: item.capacity,
                            contentImages: item.images
                        });
                        google.maps.event.addListener(marker, 'click', function (e) {
                            htmlModalPin_1.setAttribute('style', "display: none;");
                            htmlModalPin_1.innerHTML = '';
                            _this.writePin(marker, e);
                        });
                    });
                    map_1.addListener('drag', function (event) {
                        htmlModalPin_1.setAttribute('style', "display: none;");
                        htmlModalPin_1.innerHTML = '';
                    });
                    google.maps.event.addListener(map_1, 'dragend', function (e) { return __awaiter(_this, void 0, void 0, function () {
                        var query, res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    query = this.mountQuery(map_1);
                                    return [4 /*yield*/, this.searchSpaces(query, false)];
                                case 1:
                                    res = _a.sent();
                                    this.getMoveMap(res.spaces, map_1, htmlModalPin_1);
                                    return [4 /*yield*/, this.getAllSpaceTags(query)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                else {
                    map = new google.maps.Map(document.getElementById('mapResult'), {
                        zoom: 7,
                        center: { lat: -23.6815314, lng: -46.8754974 }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    SearchComponent.prototype.pagination = function (num) {
        var pages = Math.ceil(num / 6);
        for (var i = 0; i < pages; i++) {
            this.totalPage.push(i + 1);
        }
    };
    SearchComponent.prototype.goToDetails = function (item) {
        this.router.navigateByUrl("/details/" + item.id);
    };
    SearchComponent.prototype.activePage = function (item) {
        var links = document.querySelectorAll('.pagination a');
        var linkActual = document.querySelector("[data-page='" + item + "']");
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove('active');
        }
        linkActual.classList.add('active');
    };
    SearchComponent.prototype.clickPage = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(item !== this.atualPage)) return [3 /*break*/, 2];
                        this.atualPage = item;
                        query = this.mountQuery();
                        this.activePage(item);
                        return [4 /*yield*/, this.searchSpaces(query, false)];
                    case 1:
                        res = _a.sent();
                        this.getMap(res.spaces, 7);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.clickPageNext = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.atualPage++;
                        query = this.mountQuery();
                        this.activePage(this.atualPage);
                        return [4 /*yield*/, this.searchSpaces(query, false)];
                    case 1:
                        res = _a.sent();
                        this.getMap(res.spaces, 7);
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.clickPagePrev = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.atualPage--;
                        query = this.mountQuery();
                        this.activePage(this.atualPage);
                        return [4 /*yield*/, this.searchSpaces(query, false)];
                    case 1:
                        res = _a.sent();
                        this.getMap(res.spaces, 7);
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.writeTags = function (item) {
        var newItem = item.split(',');
        var allList = document.querySelectorAll('.form-list-filter li');
        for (var i = 0; i < newItem.length; i++) {
            for (var j = 0; j < allList.length; j++) {
                if (allList[i].querySelector('input').value === newItem[i]) {
                    allList[i].querySelector('input').checked = true;
                }
            }
        }
    };
    SearchComponent.prototype.urlParams = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var urlSpace;
            return __generator(this, function (_a) {
                urlSpace = '';
                this.route.params.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
                    var categorySlug, category;
                    return __generator(this, function (_a) {
                        categorySlug = params['category_slug'];
                        category = this.allCategories.find(function (item) { return item.slug === categorySlug; });
                        this.idCategory = category ? category.id : this.idCategory;
                        this.categoryFilter = category ? category.name : this.categoryFilter;
                        urlSpace = urlSpace + "category=" + this.idCategory;
                        return [2 /*return*/];
                    });
                }); });
                this.route.queryParams.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var res;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                Object.keys(params).map(function (item, index) { return __awaiter(_this, void 0, void 0, function () {
                                    var param;
                                    return __generator(this, function (_a) {
                                        param = params[item];
                                        if (item === 'city') {
                                            this.cityFilter = param;
                                        }
                                        if (item === 'capacity') {
                                            this.capacityFilter = param;
                                        }
                                        if (item === 'min_price') {
                                            this.minPriceFilter = param;
                                        }
                                        if (item === 'max_price') {
                                            this.maxPriceFilter = param;
                                        }
                                        if (item === 'tags') {
                                            this.writeTags(param);
                                        }
                                        urlSpace = urlSpace + "&" + item + "=" + param;
                                        return [2 /*return*/];
                                    });
                                }); });
                                this.totalPage = [];
                                return [4 /*yield*/, this.searchSpaces(urlSpace, true)];
                            case 1:
                                res = _a.sent();
                                this.getMap(res.spaces, 7);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SearchComponent.prototype.price = function (value) {
        var valueFormat = value.toFixed(2).split('.');
        valueFormat[0] = "R$ " + valueFormat[0].split(/(?=(?:...)*$)/).join('.');
        return " " + valueFormat.join(',') + "/hr";
    };
    SearchComponent.prototype.handleFilter = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var allElement, i, query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.totalPage = [];
                        document.querySelector('[data-js="mapPopUp"]').setAttribute('style', 'display: none');
                        allElement = document.querySelectorAll('.form-visor');
                        for (i = 0; i < allElement.length; i++) {
                            allElement[i].classList.remove('show');
                        }
                        query = this.mountQuery();
                        return [4 /*yield*/, this.getAllSpaceTags(query)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.searchSpaces(query, false)];
                    case 2:
                        res = _a.sent();
                        this.getMap(res.spaces, 7);
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.handleClick = function (e, item, type) {
        var elementVisor = e.target.parentElement.parentElement.firstChild;
        elementVisor.classList.remove('show');
        if (type === 'category') {
            this.categoryFilter = item.name;
        }
        else {
            this.cityFilter = item.name;
        }
    };
    SearchComponent.prototype.allCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, textCategory, e_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.categoryService.getAllCategories()];
                    case 1:
                        _a.listCategory = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.categoryService.getAllCategories()];
                    case 2:
                        _b.allCategories = _c.sent();
                        textCategory = this.listCategory.filter(function (item) {
                            if (item.id === parseInt(_this.idCategory)) {
                                return item;
                            }
                        });
                        if (textCategory.length > 0) {
                            this.categoryFilter = textCategory;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _c.sent();
                        console.log(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.favoriteSpace = function (space) {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, userFavoriteModel, favorite, spaceRes, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.space = space;
                        if (!this.spaceService.getUserInfo()) return [3 /*break*/, 9];
                        userInfo = this.spaceService.getUserInfo();
                        userFavoriteModel = {
                            space_id: undefined,
                            user_id: undefined
                        };
                        userFavoriteModel.space_id = this.space.id;
                        userFavoriteModel.user_id = userInfo.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        favorite = void 0;
                        if (!this.space.liked) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.spaceService.deleteFavoriteSpace(userFavoriteModel)];
                    case 2:
                        favorite = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.spaceService.favoriteSpace(userFavoriteModel)];
                    case 4:
                        favorite = _a.sent();
                        _a.label = 5;
                    case 5: return [4 /*yield*/, this.spaceService.getById({ id: this.space.id, user_id: userInfo.id })];
                    case 6:
                        spaceRes = _a.sent();
                        this.space.liked = spaceRes.liked;
                        return [3 /*break*/, 8];
                    case 7:
                        e_3 = _a.sent();
                        console.log(e_3);
                        return [3 /*break*/, 8];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        this.loginModal();
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.loginModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, favoriteSpace, space, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLogin = !this.isLogin;
                        userInfo = this.spaceService.getUserInfo();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!this.spaceService.getUserInfo()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.favoriteSpace(this.space)];
                    case 2:
                        favoriteSpace = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!userInfo) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.spaceService.getById({ id: this.space.id, user_id: userInfo.id })];
                    case 4:
                        space = _a.sent();
                        this.space.liked = space.liked;
                        this.urlParams();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_4 = _a.sent();
                        console.log(e_4);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.addImages = function () {
        var _this = this;
        this.listSpace.forEach(function (space) {
            space.images = [];
            space.space_images.forEach(function (image) {
                if (image.main) {
                    space.images.unshift({ url: image.url, clickAction: function () { return _this.router.navigate(['/details', space.id]); } });
                }
                else {
                    space.images.push({ url: image.url, clickAction: function () { return _this.router.navigate(['/details', space.id]); } });
                }
            });
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/pages/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_city_service__WEBPACK_IMPORTED_MODULE_6__["CityService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _services_space_service__WEBPACK_IMPORTED_MODULE_3__["SpaceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_space_tags_service__WEBPACK_IMPORTED_MODULE_5__["SpaceTagsService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/search/search.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchRoutes, SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutes", function() { return SearchRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SearchRoutes = [{
        path: '',
        data: {
            heading: 'Home'
        },
        component: _search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]
    }];
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(SearchRoutes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-search-search-module.js.map