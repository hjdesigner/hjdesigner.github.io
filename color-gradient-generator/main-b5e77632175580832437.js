webpackJsonp([0],{11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.newColors=t.removeColors=t.toggleColors=t.addColors=void 0;var o=n(12),r=n(54);t.addColors=function(){return{type:o.ADD_COLORS,payload:{id:(0,r.v4)(),color:"#"+Math.random().toString(16).slice(2,8)}}},t.toggleColors=function(e){return{type:o.TOGGLE_COLORS,payload:{id:e}}},t.removeColors=function(e){return{type:o.REMOVE_COLORS,payload:{id:e}}},t.newColors=function(e,t){return{type:o.NEW_COLORS,payload:{id:e,color:t}}}},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ADD_COLORS="colors:ADD_COLORS",t.TOGGLE_COLORS="colors:TOGGLE_COLORS",t.NEW_COLORS="colors:NEW_COLORS",t.REMOVE_COLORS="colors:REMOVE_COLORS"},17:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(0),l=o(r),u=n(0),a=n(24),c=n(3),i=n(2),d=n(52),f=o(d),s=n(63),m=o(s),O=(0,c.createStore)(m.default);!function(e){(0,u.render)(l.default.createElement(a.AppContainer,null,l.default.createElement(i.Provider,{store:O},l.default.createElement(e,null))),document.querySelector('[data-js="app"]'))}(f.default)},52:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=o(r),u=n(2),a=n(53),c=o(a),i=n(58),d=o(i),f=n(59),s=o(f);n(61);var m=function(e){var t=e.colors;return l.default.createElement("div",{className:"container",style:{background:"linear-gradient(45deg, "+O(t).map(function(e){return e.color})}},l.default.createElement("main",null,l.default.createElement("h1",null,"Color Gradient Generator React.js + Redux"),l.default.createElement(d.default,null),l.default.createElement(c.default,null)),l.default.createElement(s.default,null))},O=function(e){return e.filter(function(e){return!0===e.visibility})},p=function(e){return{colors:e.colors}};t.default=(0,u.connect)(p)(m)},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o),l=n(2),u=n(11),a=n(15),c=n(16),i=function(e){var t=e.colors,n=e.handleClickAdd,o=e.handleClickRemove;return r.default.createElement("div",{className:"form-controls"},r.default.createElement("button",{type:"button",onClick:n},r.default.createElement(a.FontAwesomeIcon,{icon:c.faPlus})),t.length>2&&r.default.createElement("button",{type:"button",onClick:o(t.slice(-1)[0].id)},r.default.createElement(a.FontAwesomeIcon,{icon:c.faMinus})))},d=function(e){return{colors:e.colors}},f=function(e){return{handleClickAdd:function(){e((0,u.addColors)())},handleClickRemove:function(t){return function(){e((0,u.removeColors)(t))}}}};t.default=(0,l.connect)(d,f)(i)},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o),l=n(2),u=n(11),a=n(15),c=n(16),i=function(e){var t=e.colors,n=e.handleValue,o=e.handleClickEye;return r.default.createElement("div",{className:"fields"},t.map(function(e){return r.default.createElement("div",{className:"form-fields",key:e.id},r.default.createElement("input",{type:"text",style:{color:e.color},maxLength:"7",defaultValue:e.color,onChange:n(e.id)}),r.default.createElement("button",{type:"button",className:!0===e.visibility?"true":"false",onClick:o(e.id)},r.default.createElement(a.FontAwesomeIcon,{className:"eye",icon:c.faEye}),r.default.createElement(a.FontAwesomeIcon,{className:"eye-slash",icon:c.faEyeSlash})))}))},d=function(e){return{colors:e.colors}},f=function(e){return{handleClickEye:function(t){return function(){e((0,u.toggleColors)(t))}},handleValue:function(t){return function(n){e((0,u.newColors)(t,n.target.value))}}}};t.default=(0,l.connect)(d,f)(i)},59:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=o(r),u=n(60),a=o(u),c=function(){return l.default.createElement("div",{className:"github"},l.default.createElement("a",{href:"https://github.com/hjdesigner/react-js-color-gradient-generator"},l.default.createElement("img",{src:a.default,alt:"Github"})))};t.default=c},60:function(e,t,n){e.exports=n.p+"media/github.17c09f90.png"},61:function(e,t){},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),r=n(64),l=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=(0,o.combineReducers)({colors:l.default})},64:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=n(12),a=n(65),c=function(e){return e&&e.__esModule?e:{default:e}}(a),i=[{id:0,color:"#6a78d1",visibility:!0},{id:1,color:"#00bda5",visibility:!0}],d=(0,c.default)(i,(r={},o(r,u.ADD_COLORS,function(e,t){return e.concat({id:t.payload.id,color:t.payload.color,visibility:!0})}),o(r,u.TOGGLE_COLORS,function(e,t){return e.map(function(e){return e.id!==t.payload.id?e:l({},e,{visibility:!e.visibility})})}),o(r,u.NEW_COLORS,function(e,t){return e.map(function(e){return e.id!==t.payload.id?e:l({},e,{color:t.payload.color})})}),o(r,u.REMOVE_COLORS,function(e,t){return e.filter(function(e){return e.id!==t.payload.id})}),r));t.default=d},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){if(void 0===e)throw new Error("initialState should not be undefined");if("[object Object]"!==Object.prototype.toString.call(t))throw new Error("createReducer expects the second argument as an object representing reducer");return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,o=arguments[1];return t.hasOwnProperty(o.type)?t[o.type](n,o):n}};t.default=o}},[17]);