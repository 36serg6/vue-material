/*!
* Vue Material v0.8.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})("undefined"!=typeof self?self:this,(function(){return (function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=479)})({0:function(t,e){t.exports=function(t,e,n,r,o){var i,u=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(i=t,u=t.default);var s="function"==typeof u?u.options:u;e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),r&&(s._scopeId=r);var f;if(o?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},s._ssrRegister=f):n&&(f=n),f){var a=s.functional,l=a?s.render:s.beforeCreate;a?s.render=function(t,e){return f.call(e),l(t,e)}:s.beforeCreate=l?[].concat(l,f):[f]}return{esModule:i,exports:u,options:s}}},10:function(t,e,n){var r=n(8),o=n(17);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},12:function(t,e,n){var r=n(22)("wks"),o=n(20),i=n(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},13:function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},14:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},15:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},16:function(t,e,n){var r=n(2),o=n(4),i=n(29),u=n(10),c=function(t,e,n){var s,f,a,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,m=t&c.W,y=p?o:o[e]||(o[e]={}),x=y.prototype,_=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(s in n)(f=!l&&_&&void 0!==_[s])&&s in y||(a=f?_[s]:n[s],y[s]=p&&"function"!=typeof _[s]?n[s]:h&&f?i(a,r):m&&_[s]==a?(function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e})(a):v&&"function"==typeof a?i(Function.call,a):a,v&&((y.virtual||(y.virtual={}))[s]=a,t&c.R&&x&&!x[s]&&u(x,s,a)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},17:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},18:function(t,e,n){var r=n(22)("keys"),o=n(20);t.exports=function(t){return r[t]||(r[t]=o(t))}},19:function(t,e,n){var r=n(30),o=n(23);t.exports=Object.keys||function(t){return r(t,o)}},2:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},20:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},21:function(t,e,n){var r=n(14);t.exports=function(t){return Object(r(t))}},22:function(t,e,n){var r=n(2),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},23:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},24:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},25:function(t,e,n){var r=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},26:function(t,e,n){var r=n(5),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},27:function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},28:function(t,e,n){var r=n(15),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},29:function(t,e,n){var r=n(35);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},3:function(t,e,n){t.exports=!n(6)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},30:function(t,e,n){var r=n(7),o=n(9),i=n(33)(!1),u=n(18)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(f,n)||f.push(n));return f}},31:function(t,e,n){t.exports=!n(3)&&!n(6)((function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a}))},32:function(t,e){t.exports={}},33:function(t,e,n){var r=n(9),o=n(28),i=n(34);t.exports=function(t){return function(e,n,u){var c,s=r(e),f=o(s.length),a=i(u,f);if(t&&n!=n){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===n)return t||a||0;return!t&&-1}}},34:function(t,e,n){var r=n(15),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},35:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},37:function(t,e,n){var r=n(8).f,o=n(7),i=n(12)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},4:function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},40:function(t,e){t.exports=!0},42:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(function(){var t=document.createElement("span"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]})(),t.exports=e.default},43:function(t,e,n){"use strict";var r=n(40),o=n(16),i=n(49),u=n(10),c=n(7),s=n(32),f=n(52),a=n(37),l=n(55),p=n(12)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,h,m,y,x){f(n,e,h);var _,b,g,E=function(t){if(!d&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",w="values"==m,j=!1,T=t.prototype,P=T[p]||T["@@iterator"]||m&&T[m],S=!d&&P||E(m),C=m?w?E("entries"):S:void 0,M="Array"==e?T.entries||P:P;if(M&&(g=l(M.call(new t)))!==Object.prototype&&g.next&&(a(g,O,!0),r||c(g,p)||u(g,p,v)),w&&P&&"values"!==P.name&&(j=!0,S=function(){return P.call(this)}),r&&!x||!d&&!j&&T[p]||u(T,p,S),s[e]=S,s[O]=v,m)if(_={values:w?S:E("values"),keys:y?S:E("keys"),entries:C},x)for(b in _)b in T||i(T,b,_[b]);else o(o.P+o.F*(d||j),e,_);return _}},435:function(t,e,n){"use strict";function r(t){t.component("md-tooltip",i.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(436),i=(function(t){return t&&t.__esModule?t:{default:t}})(o);t.exports=e.default},436:function(t,e,n){function r(t){n(437)}var o=n(0)(n(438),n(439),r,null,null);t.exports=o.exports},437:function(t,e){},438:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(66),i=r(o),u=n(42),c=r(u);e.default={name:"md-tooltip",props:{mdDirection:{type:String,default:"bottom"},mdDelay:{type:String,default:"0"}},data:function(){return{active:!1,parentClass:null,transitionOff:!1,topPosition:!1,leftPosition:!1}},computed:{classes:function(){var t={"md-active":this.active,"md-transition-off":this.transitionOff,"md-tooltip-top":"top"===this.mdDirection,"md-tooltip-right":"right"===this.mdDirection,"md-tooltip-bottom":"bottom"===this.mdDirection,"md-tooltip-left":"left"===this.mdDirection};return this.parentClass&&(t[this.parentClass]=!0),t},style:function(){return{"transition-delay":this.mdDelay+"ms",top:this.topPosition+"px",left:this.leftPosition+"px"}}},watch:{mdDirection:function(){this.calculateTooltipPosition()}},methods:{removeTooltips:function(){this.tooltipElement&&this.tooltipElement.parentNode&&(this.tooltipElement.removeEventListener(c.default,this.removeTooltips),this.tooltipElement.parentNode.removeChild(this.tooltipElement))},calculateTooltipPosition:function(){var t=this.parentElement.getBoundingClientRect(),e={};switch(this.mdDirection){case"top":e.top=t.top-this.$el.offsetHeight,e.left=t.left+t.width/2;break;case"right":e.top=t.top,e.left=t.left+t.width;break;case"bottom":e.top=t.bottom,e.left=t.left+t.width/2;break;case"left":e.top=t.top,e.left=t.left-this.$el.offsetWidth;break;default:console.warn("Invalid "+this.mdDirection+" option to md-direction option")}this.topPosition=e.top,this.leftPosition=e.left},generateTooltipClasses:function(){var t=[];[].concat((0,i.default)(this.parentElement.classList)).forEach((function(e){e.indexOf("md-")>=0&&"md-active"!==e&&t.push(e+"-tooltip")})),this.parentClass=t.join(" ")},open:function(){var t=this;this.removeTooltips(),this.$nextTick((function(){document.body.appendChild(t.tooltipElement),getComputedStyle(t.tooltipElement).top,t.transitionOff=!0,t.generateTooltipClasses(),t.calculateTooltipPosition(),window.setTimeout((function(){t.transitionOff=!1,t.active=!0}),10)}))},close:function(){this.active=!1,this.tooltipElement.removeEventListener(c.default,this.removeTooltips),this.tooltipElement.addEventListener(c.default,this.removeTooltips)}},mounted:function(){var t=this;this.$nextTick((function(){t.tooltipElement=t.$el,t.parentElement=t.tooltipElement.parentNode,t.$el.parentNode.removeChild(t.$el),t.parentElement.addEventListener("mouseenter",t.open),t.parentElement.addEventListener("focus",t.open),t.parentElement.addEventListener("mouseleave",t.close),t.parentElement.addEventListener("blur",t.close)}))},beforeDestroy:function(){this.active=!1,this.removeTooltips(),this.parentElement&&(this.parentElement.removeEventListener("mouseenter",this.open),this.parentElement.removeEventListener("focus",this.open),this.parentElement.removeEventListener("mouseleave",this.close),this.parentElement.removeEventListener("blur",this.close))}},t.exports=e.default},439:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"md-tooltip",class:t.classes,style:t.style},[t._t("default")],2)},staticRenderFns:[]}},479:function(t,e,n){t.exports=n(435)},48:function(t,e,n){"use strict";var r=n(51)(!0);n(43)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},49:function(t,e,n){t.exports=n(10)},5:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},50:function(t,e,n){var r=n(13),o=n(53),i=n(23),u=n(18)("IE_PROTO"),c=function(){},s=function(){var t,e=n(26)("iframe"),r=i.length;for(e.style.display="none",n(54).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},51:function(t,e,n){var r=n(15),o=n(14);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),s=r(n),f=c.length;return s<0||s>=f?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===f||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},52:function(t,e,n){"use strict";var r=n(50),o=n(17),i=n(37),u={};n(10)(u,n(12)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},53:function(t,e,n){var r=n(8),o=n(13),i=n(19);t.exports=n(3)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,s=0;c>s;)r.f(t,n=u[s++],e[n]);return t}},54:function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},55:function(t,e,n){var r=n(7),o=n(21),i=n(18)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},6:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},60:function(t,e,n){var r=n(61),o=n(12)("iterator"),i=n(32);t.exports=n(4).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},61:function(t,e,n){var r=n(24),o=n(12)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},66:function(t,e,n){"use strict";e.__esModule=!0;var r=n(69),o=(function(t){return t&&t.__esModule?t:{default:t}})(r);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,o.default)(t)}},69:function(t,e,n){t.exports={default:n(70),__esModule:!0}},7:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},70:function(t,e,n){n(48),n(71),t.exports=n(4).Array.from},71:function(t,e,n){"use strict";var r=n(29),o=n(16),i=n(21),u=n(72),c=n(73),s=n(28),f=n(74),a=n(60);o(o.S+o.F*!n(75)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,l,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,x=a(p);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==x||d==Array&&c(x))for(e=s(p.length),n=new d(e);e>y;y++)f(n,y,m?h(p[y],y):p[y]);else for(l=x.call(p),n=new d;!(o=l.next()).done;y++)f(n,y,m?u(l,h,[o.value,y],!0):o.value);return n.length=y,n}})},72:function(t,e,n){var r=n(13);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},73:function(t,e,n){var r=n(32),o=n(12)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},74:function(t,e,n){"use strict";var r=n(8),o=n(17);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},75:function(t,e,n){var r=n(12)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},8:function(t,e,n){var r=n(13),o=n(31),i=n(27),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},9:function(t,e,n){var r=n(25),o=n(14);t.exports=function(t){return r(o(t))}}})}));