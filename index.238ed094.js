!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequired76b;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},e.parcelRequired76b=i),i("iE7OH").register(JSON.parse('{"EVgbq":"index.238ed094.js","iLcwi":"arrow-left.9cf9051e.svg","kU96s":"popcorn.svg-min.0955faaa.png","dGS1X":"index.b4163ec8.css","7nwxg":"library.dadf5cc8.js"}')),i("hD105"),i("4Nugj"),i("gOTip");var s,o=i("bpxeT"),a=i("2TvXO"),u=i("hD105"),c=i("6JpON"),l=i("4Nugj"),p=i("hLUXT"),f=(u=i("hD105"),p=i("hLUXT"),l=i("4Nugj"),{});window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
s=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,r,i,s,o=Object.prototype.hasOwnProperty;for(i=1,s=arguments.length;i<s;i+=1)for(r in n=arguments[i])o.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var r=n(2),i=n(17),s=n(6);t.exports=function(t,e,n){r(t)?i(t,e,n):s(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){"use strict";var r=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e,n){var i,s;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(s=e.length,i=n;n>=0&&i<s;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){"use strict";var r=n(29),i=n(30),s=n(5),o={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=s(t)?t(e):r(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=o},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var r=n(13),i=n(7),s=n(0),o=n(1),a=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(t,e){this._options=s({},c,e),this._currentPage=0,this._view=new a(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),i=this._getPageIndex(n),s=this._getEdge(t);return e.leftPageNumber=s.left,e.rightPageNumber=s.right,e.prevMore=r>1,e.nextMore=r<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,i=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(s/2),(n=(e=Math.max(t-r,1))+s-1)>i&&(e=Math.max(i-s+1,1),n=i)):(e=(o-1)*s+1,n=o*s,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){"use strict";var r=n(0),i=n(14),s=n(4),o=n(16),a=n(2),u=n(5),c=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){r(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var r=this;s(t)?(t=t.split(l),c(t,(function(t){r._bindEvent(t,e,n)}))):o(t)&&(n=e,c(t,(function(t,e){r.on(e,t,n)})))},p.prototype.once=function(t,e,n){var r=this;if(o(t))return n=e,void c(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),r.off(t,i,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,r=0;if(a(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},p.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var i=t===r.handler,s=e===r.context,o=i&&s;return o&&n._forgetContext(r.context),o}},p.prototype._offByEventName=function(t,e){var n=this,r=u(e),i=n._matchHandler(e);t=t.split(l),c(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,i):(c(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?c(t,(function(t,e){r.off(e,t)})):s(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):u(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),c(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},p.prototype.off=function(t,e){s(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,r,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(i=e[r]).handler.apply(i.context,n))return!1;r+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var r=n(1),i=n(15);t.exports=function(t){return!r(t)&&!i(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r=0,i=t.length;for(n=n||null;r<i&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var r=n(3),i=n(7),s=n(21),o=n(22),a=n(24),u=n(25),c=n(0),l=n(4),p=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],g=["prev","next"],_=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(d,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(d,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,u(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,u(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,i=t.rightPageNumber;for(n=r;n<=i;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||u(e,this._firstItemClassName),n!==i||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();o(e,"click",(function(e){var n,r,i=s(e);a(e),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!f.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=_},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var r=n(4),i=n(3),s=n(23);function o(t,e,n,r){function o(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,o):"attachEvent"in t&&t.attachEvent("on"+e,o),function(t,e,n,r){var o=s(t,e),a=!1;i(o,(function(t){return t.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:r})}(t,e,n,o)}t.exports=function(t,e,n,s){r(e)?i(e.split(/\s+/g),(function(e){o(t,e,n,s)})):i(e,(function(e,r){o(t,r,e,n)}))}},function(t,e,n){"use strict";var r="_feEventKey";t.exports=function(t,e){var n,i=t[r];return i||(i=t[r]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var r=n(3),i=n(8),s=n(26),o=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,u=[];a?r(n,(function(e){t.classList.add(e)})):((e=s(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){i(t,u)<0&&u.push(t)})),o(t,u))}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var r=n(2),i=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var r=n(8),i=n(3),s=n(2),o=n(4),a=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,d=/"|'/g,g=/^-?\d+\.?\d*$/,_={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],s=0,o=0;return i(e,(function(t,i){0===t.indexOf("if")?s+=1:"/if"===t?s-=1:s||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(o,i)),o=i+1)})),r.push(e.slice(o)),{exps:n,sourcesInsideIf:r}}(t,e),s=!1,o="";return i(r.exps,(function(t,e){return(s=y(t,n))&&(o=b(r.sourcesInsideIf[e],n)),!s})),o},each:function(t,e,n){var r=y(t,n),o=s(r)?"@index":"@key",u={},c="";return i(r,(function(t,r){u[o]=r,u["@this"]=t,a(n,u),c+=b(e.slice(),n)})),c},with:function(t,e,n){var i=r("as",t),s=t[i+1],o=y(t.slice(0,i),n),u={};return u[s]=o,b(e,a(n,u))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,i=[],s=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,i.push(t.slice(s,r)),s=r+n[0].length,n=e.exec(t);return i.push(t.slice(s)),i};function m(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:h.test(t)?r=t.replace(d,""):c.test(t)?r=m((n=t.split(l))[0],e)[m(n[1],e)]:p.test(t)?r=m((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(r=parseFloat(t)),r}function x(t,e,n){for(var r,i,s,a,u=_[t],c=1,l=2,p=e[l];c&&o(p);)0===p.indexOf(t)?c+=1:0===p.indexOf("/"+t)&&(c-=1,r=l),p=e[l+=2];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=u(e[0].split(" ").slice(1),(i=0,s=r,(a=e.splice(i+1,s-i)).pop(),a),n),e}function y(t,e){var n=m(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return i(e,(function(t){r.push(m(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function b(t,e){for(var n,r,i,s=1,a=t[s];o(a);)r=(n=a.split(" "))[0],_[r]?(i=x(r,t.splice(s,t.length-s),e),t=t.concat(i)):t[s]=y(n,e),a=t[s+=2];return t.join("")}t.exports=function(t,e){return b(v(t,u),e)}},function(t,e,n){"use strict";var r=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",o=window.localStorage.getItem(s);(r(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(t){return(new Date).getTime()-t>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return r(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},f=s();var h;h=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("iLcwi");var d=new(0,u.FilmAPI),g={},_=document.querySelector("#pagination"),v=function(t){d.page=t.page,window.scrollTo({top:0,behavior:"smooth"}),null!==d.query&&d.fetchFilmsByQuery().then((function(t){l.refs.galleryCardLibraryEl.innerHTML=(0,p.markupFilmCardHome)(t.data.results)})),d.fetchTrendingFilms().then((function(t){l.refs.galleryCardLibraryEl.innerHTML=(0,p.markupFilmCardHome)(t.data.results)}))};d.page=1,d.fetchTrendingFilms().then((function(e){l.refs.galleryCardLibraryEl=document.querySelector(".js-card-library"),l.refs.galleryCardLibraryEl.innerHTML=(0,p.markupFilmCardHome)(e.data.results);var n={totalItems:e.data.total_results,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:function(e){var n=e.type;return"first"===n||"prev"===n?'<div class="custom-page-btn">'+'<img src="'.concat(t(h),'" class="arrow tui-ico-{{type}}" alt="arrow next" />')+"</div>":"next"===n||"last"===n?'<div class="custom-page-btn">'+'<img src="'.concat(t(h),'" class="arrow next tui-ico-{{type}}" alt="arrow next" />')+"</div>":void 0},disabledMoveButton:function(e){var n=e.type;return"first"===n||"prev"===n?'<div class="custom-page-btn">'+'<img src="'.concat(t(h),'" class="arrow is-hidden tui-ico-{{type}}" alt="arrow next" />')+"</div>":"next"===n||"last"===n?'<div class="custom-page-btn">'+'<img src="'.concat(t(h),'" class="arrow next is-hidden tui-ico-{{type}}" alt="arrow next" />')+"</div>":void 0},moreButton:'<a href="#" class="tui-page-btn mobile-hidden tui-{{type}}-is-ellip"><span class="tui-ico-ellip dots">...</span></a>'}};(g=new(t(f))(_,n)).on("afterMove",v)}));var m;m=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("kU96s");var x=document.querySelector(".header__form"),y=(document.querySelector(".header__input"),document.querySelector(".btn_search"),document.querySelector(".header__warning")),b=document.querySelector(".js_search_results"),C=new(0,u.FilmAPI);function P(){return'<img class="popcorn__picture__search" src="'.concat(t(m),'" alt="popcorn picture" width="150">')}function E(){return(E=t(o)(t(a).mark((function e(n){return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),C.query=n.currentTarget.elements.searchQuery.value.trim().toLowerCase(),C.page=1,""!==C.query){e.next=8;break}return b.textContent="",y.textContent="",b.textContent="Please write something in the box!",e.abrupt("return");case 8:t(c).Loading.pulse({backgroundColor:"rgba(0,0,0,0.8)",svgColor:"#ff6b08"}),C.fetchFilmsByQuery().then((function(e){if(0===e.total_results)return t(c).Loading.remove(300),g.reset(e.total_results),b.textContent="",l.refs.galleryCardLibraryEl.innerHTML=P(),void(y.textContent="Search result not successful. Enter the correct movie name");t(c).Loading.remove(2500),l.refs.galleryCardLibraryEl.innerHTML=(0,p.markupFilmCardHome)(e.results),g.reset(e.total_results),g.off("afterMove",v),g.on("afterMove",(function(t){C.page=t.page,window.scrollTo({top:0,behavior:"smooth"}),C.fetchFilmsByQuery().then((function(t){l.refs.galleryCardLibraryEl.innerHTML=(0,p.markupFilmCardHome)(t.results)}))}))})).catch((function(t){console.log(t)})),n.currentTarget.elements.searchQuery.value="",b.textContent="",y.textContent="";case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}x.addEventListener("submit",(function(t){return E.apply(this,arguments)})),i("7hKzD"),i("5xtVg"),i("cfhex"),i("e2ABG")}();
//# sourceMappingURL=index.238ed094.js.map
