/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@docsearch/js/dist/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@docsearch/js/dist/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/*! @docsearch/js 1.0.0-alpha.28 (UNRELEASED 0a58769) | MIT License | © Algolia, Inc. and contributors | https://github.com/francoischalifour/autocomplete.js */
function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(n){e(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s,l,f,p,h,d,m={},g=[],v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function y(e,t){for(var n in t)e[n]=t[n];return e}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function b(e,t,n){var r,o=arguments,i={};for(r in t)"key"!==r&&"ref"!==r&&(i[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return S(e,i,t&&t.key,t&&t.ref)}function S(e,t,n,r){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return s.vnode&&s.vnode(o),o}function O(e){return e.children}function E(e,t){this.props=e,this.context=t}function w(e,t){if(null==t)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?w(e):null}function P(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return P(e)}}function j(e){(!e.__d&&(e.__d=!0)&&1===l.push(e)||p!==s.debounceRendering)&&((p=s.debounceRendering)||f)(C)}function C(){var e,t,n,r,o,i,a;for(l.sort((function(e,t){return t.__v.__b-e.__v.__b}));e=l.pop();)e.__d&&(n=void 0,r=void 0,i=(o=(t=e).__v).__e,(a=t.__P)&&(n=[],r=H(a,o,y({},o),t.__n,void 0!==a.ownerSVGElement,null,n,null==i?w(o):i),A(n,o),r!=i&&P(o)))}function x(e,t,n,r,o,i,a,c,u){var s,l,f,p,h,d,v,y=n&&n.__k||g,b=y.length;if(c==m&&(c=null!=i?i[0]:b?w(n,0):null),s=0,t.__k=k(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(f=y[s])||f&&n.key==f.key&&n.type===f.type)y[s]=void 0;else for(l=0;l<b;l++){if((f=y[l])&&n.key==f.key&&n.type===f.type){y[l]=void 0;break}f=null}if(p=H(e,n,f=f||m,r,o,i,a,c,u),(l=n.ref)&&f.ref!=l&&(v||(v=[]),f.ref&&v.push(f.ref,null,n),v.push(l,n.__c||p,n)),null!=p){var g;if(null==d&&(d=p),void 0!==n.__d)g=n.__d,n.__d=void 0;else if(i==f||p!=c||null==p.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(p),g=null;else{for(h=c,l=0;(h=h.nextSibling)&&l<b;l+=2)if(h==p)break e;e.insertBefore(p,c),g=c}"option"==t.type&&(e.value="")}c=void 0!==g?g:p.nextSibling,"function"==typeof t.type&&(t.__d=c)}}return s++,n})),t.__e=d,null!=i&&"function"!=typeof t.type)for(s=i.length;s--;)null!=i[s]&&_(i[s]);for(s=b;s--;)null!=y[s]&&q(y[s],y[s]);if(v)for(s=0;s<v.length;s++)T(v[s],v[++s],v[++s])}function k(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)k(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?S(null,e,null,null):null!=e.__e||null!=e.__c?S(e.type,e.props,e.key,null):e):e);return n}function D(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===v.test(t)?n+"px":null==n?"":n}function I(e,t,n,r,o){var i,a,c,u,s;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(a in r)n&&a in n||D(i,a,"");if(n)for(c in n)r&&n[c]===r[c]||D(i,c,n[c])}else"o"===t[0]&&"n"===t[1]?(u=t!==(t=t.replace(/Capture$/,"")),s=t.toLowerCase(),t=(s in e?s:t).slice(2),n?(r||e.addEventListener(t,N,u),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,N,u)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function N(e){this.l[e.type](s.event?s.event(e):e)}function H(e,t,n,r,o,i,a,c,u){var l,f,p,h,d,m,g,v,_,b,S=t.type;if(void 0!==t.constructor)return null;(l=s.__b)&&l(t);try{e:if("function"==typeof S){if(v=t.props,_=(l=S.contextType)&&r[l.__c],b=l?_?_.props.value:l.__:r,n.__c?g=(f=t.__c=n.__c).__=f.__E:("prototype"in S&&S.prototype.render?t.__c=f=new S(v,b):(t.__c=f=new E(v,b),f.constructor=S,f.render=L),_&&_.sub(f),f.props=v,f.state||(f.state={}),f.context=b,f.__n=r,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=y({},f.__s)),y(f.__s,S.getDerivedStateFromProps(v,f.__s))),h=f.props,d=f.state,p)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&v!==h&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(v,b),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(v,f.__s,b)){for(f.props=v,f.state=f.__s,f.__d=!1,f.__v=t,t.__e=n.__e,t.__k=n.__k,f.__h.length&&a.push(f),l=0;l<t.__k.length;l++)t.__k[l]&&(t.__k[l].__=t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(v,f.__s,b),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(h,d,m)}))}f.context=b,f.props=v,f.state=f.__s,(l=s.__r)&&l(t),f.__d=!1,f.__v=t,f.__P=e,l=f.render(f.props,f.state,f.context),t.__k=null!=l&&l.type==O&&null==l.key?l.props.children:l,null!=f.getChildContext&&(r=y(y({},r),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(h,d)),x(e,t,n,r,o,i,a,c,u),f.base=t.__e,f.__h.length&&a.push(f),g&&(f.__E=f.__=null),f.__e=!1}else t.__e=M(n.__e,t,n,r,o,i,a,u);(l=s.diffed)&&l(t)}catch(e){s.__e(e,t,n)}return t.__e}function A(e,t){s.__c&&s.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){s.__e(e,t.__v)}}))}function M(e,t,n,r,o,i,a,c){var u,s,l,f,p,h=n.props,d=t.props;if(o="svg"===t.type||o,null==e&&null!=i)for(u=0;u<i.length;u++)if(null!=(s=i[u])&&(null===t.type?3===s.nodeType:s.localName===t.type)){e=s,i[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,d.is&&{is:d.is}),i=null}if(null===t.type)null!=i&&(i[i.indexOf(e)]=null),h!==d&&e.data!=d&&(e.data=d);else if(t!==n){if(null!=i&&(i[i.indexOf(e)]=null,i=g.slice.call(e.childNodes)),l=(h=n.props||m).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!c){if(h===m)for(h={},p=0;p<e.attributes.length;p++)h[e.attributes[p].name]=e.attributes[p].value;(f||l)&&(f&&l&&f.__html==l.__html||(e.innerHTML=f&&f.__html||""))}(function(e,t,n,r,o){var i;for(i in n)i in t||I(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"value"===i||"checked"===i||n[i]===t[i]||I(e,i,t[i],n[i],r)})(e,d,h,o,c),t.__k=t.props.children,f||x(e,t,n,r,"foreignObject"!==t.type&&o,i,a,m,c),c||("value"in d&&void 0!==d.value&&d.value!==e.value&&(e.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==e.checked&&(e.checked=d.checked))}return e}function T(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){s.__e(e,n)}}function q(e,t,n){var r,o,i;if(s.unmount&&s.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||T(r,null,t)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){s.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&q(r[i],t,n);null!=o&&_(o)}function L(e,t,n){return this.constructor(e,n)}function R(e,t,n){var r,o,i;s.__&&s.__(e,t),o=(r=n===h)?null:n&&n.__k||t.__k,e=b(O,null,[e]),i=[],H(t,(r?t:n||t).__k=e,o||m,m,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:g.slice.call(t.childNodes),i,n||m,r),A(i,e)}function F(e,t){return t=y(y({},e.props),t),arguments.length>2&&(t.children=g.slice.call(arguments,2)),S(e.type,t,t.key||e.key,t.ref||e.ref)}s={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return j(n.__E=n)}catch(t){e=t}throw e}},E.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=y({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&y(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),j(this))},E.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),j(this))},E.prototype.render=O,l=[],f="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,h=m,d=0;var U,z,V,Q=[],B=s.__r,W=s.diffed,K=s.__c,J=s.unmount;function $(e){s.__h&&s.__h(z);var t=z.__H||(z.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Y(e){return G(ie,e)}function G(e,t,n){var r=$(U++);return r.__c||(r.__c=z,r.__=[n?n(t):ie(void 0,t),function(t){var n=e(r.__[0],t);r.__[0]!==n&&(r.__[0]=n,r.__c.setState({}))}]),r.__}function Z(e,t){var n=$(U++);oe(n.__H,t)&&(n.__=e,n.__H=t,z.__H.__h.push(n))}function X(e,t){var n=$(U++);oe(n.__H,t)&&(n.__=e,n.__H=t,z.__h.push(n))}function ee(e,t){var n=$(U++);return oe(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function te(){Q.some((function(e){if(e.__P)try{e.__H.__h.forEach(ne),e.__H.__h.forEach(re),e.__H.__h=[]}catch(t){return s.__e(t,e.__v),!0}})),Q=[]}function ne(e){e.t&&e.t()}function re(e){var t=e.__();"function"==typeof t&&(e.t=t)}function oe(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function ie(e,t){return"function"==typeof t?t(e):t}function ae(e,t){for(var n in t)e[n]=t[n];return e}function ce(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}s.__r=function(e){B&&B(e),U=0,(z=e.__c).__H&&(z.__H.__h.forEach(ne),z.__H.__h.forEach(re),z.__H.__h=[])},s.diffed=function(e){W&&W(e);var t=e.__c;if(t){var n=t.__H;n&&n.__h.length&&(1!==Q.push(t)&&V===s.requestAnimationFrame||((V=s.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(te))}},s.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ne),e.__h=e.__h.filter((function(e){return!e.__||re(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],s.__e(n,e.__v)}})),K&&K(e,t)},s.unmount=function(e){J&&J(e);var t=e.__c;if(t){var n=t.__H;if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){s.__e(e,t.__v)}}};var ue=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).isPureReactComponent=!0,n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.shouldComponentUpdate=function(e,t){return ce(this.props,e)||ce(this.state,t)},r}(E);var se=s.vnode;s.vnode=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),se&&se(e)};var le=function(e,t){return e?k(e).reduce((function(e,n,r){return e.concat(t(n,r))}),[]):null},fe={map:le,forEach:le,count:function(e){return e?k(e).length:0},only:function(e){if(1!==(e=k(e)).length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:k},pe=s.__e;function he(e){return e&&((e=ae({},e)).__c=null,e.__k=e.__k&&e.__k.map(he)),e}function de(e){this.__u=0,this.o=null,this.__b=null}function me(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function ge(){this.i=null,this.l=null}s.__e=function(e,t,n){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(e,t.__c);pe(e,t,n)},(de.prototype=new E).__c=function(e,t){var n=this;null==n.o&&(n.o=[]),n.o.push(t);var r=me(n.__v),o=!1,i=function(){o||(o=!0,r?r(a):a())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){i(),t.__c&&t.__c()};var a=function(){var e;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});e=n.o.pop();)e.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(i,i)},de.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=he(this.__b),this.__b=null),[b(E,null,t.u?null:e.children),t.u&&e.fallback]};var ve=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(ge.prototype=new E).u=function(e){var t=this,n=me(t.__v),r=t.l.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),ve(t,e,r)):o()};n?n(i):i()}},ge.prototype.render=function(e){this.i=null,this.l=new Map;var t=k(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},ge.prototype.componentDidUpdate=ge.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,n){ve(e,n,t)}))};var ye=function(){function e(){}var t=e.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children},e}();function _e(e){var t=this,n=e.container,r=b(ye,{context:t.context},e.vnode);return t.s&&t.s!==n&&(t.h.parentNode&&t.s.removeChild(t.h),q(t.v),t.p=!1),e.vnode?t.p?(n.__k=t.__k,R(r,n),t.__k=n.__k):(t.h=document.createTextNode(""),function(e,t){R(e,t,h)}("",n),n.appendChild(t.h),t.p=!0,t.s=n,R(r,n,t.h),t.__k=this.h.__k):t.p&&(t.h.parentNode&&t.s.removeChild(t.h),q(t.v)),t.v=r,t.componentWillUnmount=function(){t.h.parentNode&&t.s.removeChild(t.h),q(t.v)},null}function be(e,t){return b(_e,{vnode:e,container:t})}var Se=/^(?:accent|alignment|arabic|baseline|cap|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;E.prototype.isReactComponent={};var Oe="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;function Ee(e,t,n){if(null==t.__k)for(;t.firstChild;)t.removeChild(t.firstChild);return function(e,t,n){return R(e,t),"function"==typeof n&&n(),e?e.__c:null}(e,t,n)}var we=s.event;function Pe(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}s.event=function(e){return we&&(e=we(e)),e.persist=function(){},e.nativeEvent=e};var je={configurable:!0,get:function(){return this.class}},Ce=s.vnode;function xe(e){return!!e&&e.$$typeof===Oe}s.vnode=function(e){e.$$typeof=Oe;var t=e.type,n=e.props;if(n.class!=n.className&&(je.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",je)),"function"!=typeof t){var r,o,i;for(i in n.defaultValue&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===t&&(k(n.children).forEach((function(e){-1!=n.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete n.value),n)if(r=Se.test(i))break;if(r)for(i in o=e.props={},n)o[Se.test(i)?i.replace(/([A-Z0-9])/,"-$1").toLowerCase():i]=n[i]}!function(t){var n=e.type,r=e.props;if(r&&"string"==typeof n){var o={};for(var i in r)/^on(Ani|Tra|Tou)/.test(i)&&(r[i.toLowerCase()]=r[i],delete r[i]),o[i.toLowerCase()]=i;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var a=o.oninput||"oninput";r[a]||(r[a]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(Pe(t.prototype,"componentWillMount"),Pe(t.prototype,"componentWillReceiveProps"),Pe(t.prototype,"componentWillUpdate"),t.m=!0),Ce&&Ce(e)};var ke={useState:Y,useReducer:G,useEffect:Z,useLayoutEffect:X,useRef:function(e){return ee((function(){return{current:e}}),[])},useImperativeHandle:function(e,t,n){X((function(){"function"==typeof e?e(t()):e&&(e.current=t())}),null==n?n:n.concat(e))},useMemo:ee,useCallback:function(e,t){return ee((function(){return e}),t)},useContext:function(e){var t=z.context[e.__c];if(!t)return e.__;var n=$(U++);return null==n.__&&(n.__=!0,t.sub(z)),t.props.value},useDebugValue:function(e,t){s.useDebugValue&&s.useDebugValue(t?t(e):e)},version:"16.8.0",Children:fe,render:Ee,hydrate:Ee,unmountComponentAtNode:function(e){return!!e.__k&&(R(null,e),!0)},createPortal:be,createElement:b,createContext:function(e){var t={},n={__c:"__cC"+d++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(t){e.value!==t.value&&r.some((function(e){e.context=t.value,j(e)}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n},createFactory:function(e){return b.bind(null,e)},cloneElement:function(e){return xe(e)?F.apply(null,arguments):e},createRef:function(){return{}},Fragment:O,isValidElement:xe,findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:E,PureComponent:ue,memo:function(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return!r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:ce(this.props,e)}function r(t){return this.shouldComponentUpdate=n,b(e,ae({},t))}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(e.displayName||e.name)+")",r.t=!0,r},forwardRef:function(e){function t(t){var n=ae({},t);return delete n.ref,e(n,t.ref)}return t.prototype.isReactComponent=!0,t.t=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t},unstable_batchedUpdates:function(e,t){return e(t)},Suspense:de,SuspenseList:ge,lazy:function(e){var t,n,r;function o(o){if(t||(t=e()).then((function(e){n=e.default||e}),(function(e){r=e})),r)throw r;if(!n)throw t;return b(n,o)}return o.displayName="Lazy",o.t=!0,o}};function De(){return ke.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},ke.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}function Ie(){return ke.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},ke.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function He(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Me(){return"undefined"==typeof navigator?"Ctrl":/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var Te=ke.forwardRef((function(e,t){var n=He(Y((function(){return Me()?"⌘":"Ctrl"})),2),r=n[0],o=n[1];return Z((function(){Me()&&o("⌘")}),[]),ke.createElement("button",Ne({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),ke.createElement(Ie,null),ke.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),ke.createElement("span",{className:"DocSearch-Button-Key"},"Ctrl"===r?ke.createElement(De,null):r),ke.createElement("span",{className:"DocSearch-Button-Key"},"K"))}));function qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Re=function(){},Fe=0;function Ue(e){return 0===e.suggestions.length?0:e.suggestions.reduce((function(e,t){return e+t.items.length}),0)}function ze(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?qe(Object(n),!0).forEach((function(t){Le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({getInputValue:function(e){return e.state.query},getSuggestionUrl:function(){},onSelect:function(e){(0,e.setIsOpen)(!1)},onHighlight:Re},e)}function Ve(e,t,n,r){if(null===t&&e<0)return n-1;if(null!==r&&0===t&&e<0)return n-1;var o=(null===t?-1:t)+e;return o<=-1||o>=n?null===r?null:0:o}function Qe(e){var t=e.state,n=function(e){var t=e.state,n=t.suggestions.map((function(e){return e.items.length})).reduce((function(e,t,n){var r=(e[n-1]||0)+t;return e.push(r),e}),[]).reduce((function(e,n){return n<=t.highlightedIndex?e+1:e}),0);return t.suggestions[n]}({state:t});if(!n)return null;var r=n.items[function(e){for(var t=e.state,n=e.suggestion,r=!1,o=0,i=0;!1===r;){var a=t.suggestions[o];if(a===n){r=!0;break}i+=a.items.length,o++}return t.highlightedIndex-i}({state:t,suggestion:n})],o=n.source;return{item:r,itemValue:o.getInputValue({suggestion:r,state:t}),itemUrl:o.getSuggestionUrl({suggestion:r,state:t}),source:o}}function Be(e,t){return e===t||e.contains&&e.contains(t)}function We(e){var t=e.state;if(!1===e.props.enableCompletion||!1===t.isOpen||null===t.highlightedIndex||"stalled"===t.status)return null;var n=Qe({state:t}).itemValue;if(t.query.length>0&&0===n.toLocaleLowerCase().indexOf(t.query.toLocaleLowerCase())){var r=t.query+n.slice(t.query.length);return r===t.query?null:r}return null}function Ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(n),!0).forEach((function(t){$e(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ye(e,t){return{state:t.initialState,getState:function(){return this.state},send:function(n,r){this.state=function(e,t){return Je(Je({},e),{},{completion:We({state:e,props:t})})}(e({type:n,value:r},this.state,t),t),t.onStateChange({state:this.state})}}}function Ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(n),!0).forEach((function(t){Xe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?et(Object(n),!0).forEach((function(t){nt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function nt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?rt(Object(n),!0).forEach((function(t){it(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function it(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var at=null;function ct(e){var t,n=e.query,r=e.store,o=e.props,i=e.setHighlightedIndex,a=e.setQuery,c=e.setSuggestions,u=e.setIsOpen,s=e.setStatus,l=e.setContext,f=e.nextState,p=void 0===f?{}:f;return o.onInput?Promise.resolve(o.onInput({query:n,state:r.getState(),setHighlightedIndex:i,setQuery:a,setSuggestions:c,setIsOpen:u,setStatus:s,setContext:l})):(at&&clearTimeout(at),i(o.defaultHighlightedIndex),a(n),0===n.length&&!1===o.openOnFocus?(s("idle"),c(r.getState().suggestions.map((function(e){return ot(ot({},e),{},{items:[]})}))),u(null!==(t=p.isOpen)&&void 0!==t?t:o.shouldDropdownShow({state:r.getState()})),Promise.resolve()):(s("loading"),at=o.environment.setTimeout((function(){s("stalled")}),o.stallThreshold),o.getSources({query:n,state:r.getState(),setHighlightedIndex:i,setQuery:a,setSuggestions:c,setIsOpen:u,setStatus:s,setContext:l}).then((function(e){return s("loading"),Promise.all(e.map((function(e){return Promise.resolve(e.getSuggestions({query:n,state:r.getState(),setHighlightedIndex:i,setQuery:a,setSuggestions:c,setIsOpen:u,setStatus:s,setContext:l})).then((function(t){return{source:e,items:t}}))}))).then((function(e){var t;s("idle"),c(e),u(null!==(t=p.isOpen)&&void 0!==t?t:0===n.length&&o.openOnFocus||o.shouldDropdownShow({state:r.getState()}))})).catch((function(e){throw s("error"),e})).finally((function(){at&&clearTimeout(at)}))}))))}function ut(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function st(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function lt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?st(Object(n),!0).forEach((function(t){ft(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ft(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pt(e){var t=e.store,n=e.props,r=e.setHighlightedIndex,o=e.setQuery,i=e.setSuggestions,a=e.setIsOpen,c=e.setStatus,u=e.setContext;return{getEnvironmentProps:function(e){return{onTouchStart:function(r){!1!==t.getState().isOpen&&r.target!==e.inputElement&&(!1===[e.searchBoxElement,e.dropdownElement].some((function(e){return e&&(Be(e,r.target)||Be(e,n.environment.document.activeElement))}))&&t.send("blur",null))},onTouchMove:function(r){!1!==t.getState().isOpen&&e.inputElement===n.environment.document.activeElement&&r.target!==e.inputElement&&e.inputElement.blur()}}},getRootProps:function(e){return lt({role:"combobox","aria-expanded":t.getState().isOpen,"aria-haspopup":"listbox","aria-owns":t.getState().isOpen?"".concat(n.id,"-menu"):void 0,"aria-labelledby":"".concat(n.id,"-label")},e)},getFormProps:function(e){e.inputElement;return lt({action:"",noValidate:!0,role:"search",onSubmit:function(s){s.preventDefault(),n.onSubmit({state:t.getState(),setHighlightedIndex:r,setQuery:o,setSuggestions:i,setIsOpen:a,setStatus:c,setContext:u,event:s}),t.send("submit",null),e.inputElement&&e.inputElement.blur()},onReset:function(s){s.preventDefault(),n.openOnFocus&&ct({query:"",store:t,props:n,setHighlightedIndex:r,setQuery:o,setSuggestions:i,setIsOpen:a,setStatus:c,setContext:u}),t.send("reset",null),e.inputElement&&e.inputElement.focus()}},ut(e,["inputElement"]))},getLabelProps:function(e){return lt({htmlFor:"".concat(n.id,"-input"),id:"".concat(n.id,"-label")},e)},getInputProps:function(e){function s(){(n.openOnFocus||t.getState().query.length>0)&&ct({query:t.getState().query,store:t,props:n,setHighlightedIndex:r,setQuery:o,setSuggestions:i,setIsOpen:a,setStatus:c,setContext:u}),t.send("focus",null)}var l="ontouchstart"in n.environment,f=e||{},p=(f.inputElement,f.maxLength),h=void 0===p?512:p,d=ut(f,["inputElement","maxLength"]);return lt({"aria-autocomplete":n.enableCompletion?"both":"list","aria-activedescendant":t.getState().isOpen&&null!==t.getState().highlightedIndex?"".concat(n.id,"-item-").concat(t.getState().highlightedIndex):void 0,"aria-controls":t.getState().isOpen?"".concat(n.id,"-menu"):void 0,"aria-labelledby":"".concat(n.id,"-label"),value:t.getState().query,id:"".concat(n.id,"-input"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:n.autoFocus,placeholder:n.placeholder,maxLength:h,type:"search",onChange:function(e){ct({query:e.currentTarget.value.slice(0,h),store:t,props:n,setHighlightedIndex:r,setQuery:o,setSuggestions:i,setIsOpen:a,setStatus:c,setContext:u})},onKeyDown:function(e){!function(e){var t=e.event,n=e.store,r=e.props,o=e.setHighlightedIndex,i=e.setQuery,a=e.setSuggestions,c=e.setIsOpen,u=e.setStatus,s=e.setContext;if("ArrowUp"===t.key||"ArrowDown"===t.key){t.preventDefault(),n.send(t.key,{shiftKey:t.shiftKey});var l=r.environment.document.getElementById("".concat(r.id,"-item-").concat(n.getState().highlightedIndex));null==l||l.scrollIntoView(!1);var f=Qe({state:n.getState()});if(null!==n.getState().highlightedIndex&&f){var p=f.item,h=f.itemValue,d=f.itemUrl,m=f.source;m.onHighlight({suggestion:p,suggestionValue:h,suggestionUrl:d,source:m,state:n.getState(),setHighlightedIndex:o,setQuery:i,setSuggestions:a,setIsOpen:c,setStatus:u,setContext:s,event:t})}}else if(("Tab"===t.key||"ArrowRight"===t.key&&t.target.selectionStart===n.getState().query.length)&&r.enableCompletion&&null!==n.getState().highlightedIndex){t.preventDefault();var g=We({state:n.getState(),props:r});g&&ct({query:g,store:n,props:r,setHighlightedIndex:o,setQuery:i,setSuggestions:a,setIsOpen:c,setStatus:u,setContext:s})}else if("Escape"===t.key)t.preventDefault(),n.send(t.key,null);else if("Enter"===t.key){if(null===n.getState().highlightedIndex||n.getState().suggestions.every((function(e){return 0===e.items.length})))return;t.preventDefault();var v=Qe({state:n.getState()}),y=v.item,_=v.itemValue,b=v.itemUrl,S=v.source;t.metaKey||t.ctrlKey?void 0!==b&&r.navigator.navigateNewTab({suggestionUrl:b,suggestion:y,state:n.getState()}):t.shiftKey?void 0!==b&&r.navigator.navigateNewWindow({suggestionUrl:b,suggestion:y,state:n.getState()}):t.altKey||(ct({query:_,store:n,props:r,setHighlightedIndex:o,setQuery:i,setSuggestions:a,setIsOpen:c,setStatus:u,setContext:s,nextState:{isOpen:!1}}).then((function(){S.onSelect({suggestion:y,suggestionValue:_,suggestionUrl:b,source:S,state:n.getState(),setHighlightedIndex:o,setQuery:i,setSuggestions:a,setIsOpen:c,setStatus:u,setContext:s,event:t})})),void 0!==b&&r.navigator.navigate({suggestionUrl:b,suggestion:y,state:n.getState()}))}}({event:e,store:t,props:n,setHighlightedIndex:r,setQuery:o,setSuggestions:i,setIsOpen:a,setStatus:c,setContext:u})},onFocus:s,onBlur:function(){l||t.send("blur",null)},onClick:function(){e.inputElement!==n.environment.document.activeElement||t.getState().isOpen||s()}},d)},getDropdownProps:function(e){return lt({onMouseDown:function(e){e.preventDefault()},onMouseLeave:function(){t.send("mouseleave",null)}},e)},getMenuProps:function(e){return lt({role:"listbox","aria-labelledby":"".concat(n.id,"-label"),id:"".concat(n.id,"-menu")},e)},getItemProps:function(e){var s=e.item,l=e.source,f=ut(e,["item","source"]);return lt({id:"".concat(n.id,"-item-").concat(s.__autocomplete_id),role:"option","aria-selected":t.getState().highlightedIndex===s.__autocomplete_id,onMouseMove:function(e){if(s.__autocomplete_id!==t.getState().highlightedIndex){t.send("mousemove",s.__autocomplete_id);var n=Qe({state:t.getState()});if(null!==t.getState().highlightedIndex&&n){var l=n.item,f=n.itemValue,p=n.itemUrl,h=n.source;h.onHighlight({suggestion:l,suggestionValue:f,suggestionUrl:p,source:h,state:t.getState(),setHighlightedIndex:r,setQuery:o,setSuggestions:i,setIsOpen:a,setStatus:c,setContext:u,event:e})}}},onMouseDown:function(e){e.preventDefault()},onClick:function(e){if(void 0===l.getSuggestionUrl({suggestion:s,state:t.getState()})&&!function(e){return 1===e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}(e)){var f=l.getInputValue({suggestion:s,state:t.getState()});ct({query:f,store:t,props:n,setHighlightedIndex:r,setQuery:o,setSuggestions:i,setIsOpen:a,setStatus:c,setContext:u,nextState:{isOpen:!1}}).then((function(){l.onSelect({suggestion:s,suggestionValue:f,suggestionUrl:l.getSuggestionUrl({suggestion:s,state:t.getState()}),source:l,state:t.getState(),setHighlightedIndex:r,setQuery:o,setSuggestions:i,setIsOpen:a,setStatus:c,setContext:u,event:e})}))}}},f)}}}function ht(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function dt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ht(Object(n),!0).forEach((function(t){mt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ht(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function mt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var gt=function(e,t,n){switch(e.type){case"setHighlightedIndex":return dt(dt({},t),{},{highlightedIndex:e.value});case"setQuery":return dt(dt({},t),{},{query:e.value});case"setSuggestions":return dt(dt({},t),{},{suggestions:e.value});case"setIsOpen":return dt(dt({},t),{},{isOpen:e.value});case"setStatus":return dt(dt({},t),{},{status:e.value});case"setContext":return dt(dt({},t),{},{context:dt(dt({},t.context),e.value)});case"ArrowDown":return dt(dt({},t),{},{highlightedIndex:Ve(1,t.highlightedIndex,Ue(t),n.defaultHighlightedIndex)});case"ArrowUp":return dt(dt({},t),{},{highlightedIndex:Ve(-1,t.highlightedIndex,Ue(t),n.defaultHighlightedIndex)});case"Escape":return t.isOpen?dt(dt({},t),{},{isOpen:!1}):dt(dt({},t),{},{query:"",status:"idle",statusContext:{},suggestions:[]});case"submit":return dt(dt({},t),{},{highlightedIndex:null,isOpen:!1,status:"idle",statusContext:{}});case"reset":return dt(dt({},t),{},{highlightedIndex:!0===n.openOnFocus?n.defaultHighlightedIndex:null,isOpen:n.openOnFocus,status:"idle",statusContext:{},query:""});case"focus":return dt(dt({},t),{},{highlightedIndex:n.defaultHighlightedIndex,isOpen:n.openOnFocus||t.query.length>0});case"blur":return dt(dt({},t),{},{isOpen:!1,highlightedIndex:null});case"mousemove":return dt(dt({},t),{},{highlightedIndex:e.value});case"mouseleave":return dt(dt({},t),{},{highlightedIndex:n.defaultHighlightedIndex});default:return t}};function vt(e){var t=function(e){var t,n,r="undefined"!=typeof window?window:{};return tt(tt({openOnFocus:!1,placeholder:"",autoFocus:!1,defaultHighlightedIndex:null,enableCompletion:!1,stallThreshold:300,environment:r,shouldDropdownShow:function(e){return Ue(e.state)>0},onStateChange:Re,onSubmit:Re},e),{},{id:null!==(t=e.id)&&void 0!==t?t:"autocomplete-".concat(Fe++),initialState:tt({highlightedIndex:null,query:"",completion:null,suggestions:[],isOpen:!1,status:"idle",statusContext:{},context:{}},e.initialState),getSources:(n=e.getSources,function(e){return Promise.resolve(n(e)).then((function(e){return Promise.all(e.filter(Boolean).map((function(e){return Promise.resolve(ze(e))})))}))}),navigator:tt({navigate:function(e){var t=e.suggestionUrl;r.location.assign(t)},navigateNewTab:function(e){var t=e.suggestionUrl,n=r.open(t,"_blank","noopener");n&&n.focus()},navigateNewWindow:function(e){var t=e.suggestionUrl;r.open(t,"_blank","noopener")}},e.navigator)})}(e),n=Ye(gt,t),r=function(e){var t=e.store;return{setHighlightedIndex:function(e){t.send("setHighlightedIndex",e)},setQuery:function(e){t.send("setQuery",e)},setSuggestions:function(e){var n=0,r=e.map((function(e){return Ze(Ze({},e),{},{items:e.items.map((function(e){return Ze(Ze({},e),{},{__autocomplete_id:n++})}))})}));t.send("setSuggestions",r)},setIsOpen:function(e){t.send("setIsOpen",e)},setStatus:function(e){t.send("setStatus",e)},setContext:function(e){t.send("setContext",e)}}}({store:n}),o=r.setHighlightedIndex,i=r.setQuery,a=r.setSuggestions,c=r.setIsOpen,u=r.setStatus,s=r.setContext,l=pt({store:n,props:t,setHighlightedIndex:o,setQuery:i,setSuggestions:a,setIsOpen:c,setStatus:u,setContext:s}),f=l.getEnvironmentProps,p=l.getRootProps,h=l.getFormProps,d=l.getLabelProps,m=l.getInputProps,g=l.getDropdownProps,v=l.getMenuProps,y=l.getItemProps;return{setHighlightedIndex:o,setQuery:i,setSuggestions:a,setIsOpen:c,setStatus:u,setContext:s,getEnvironmentProps:f,getRootProps:p,getFormProps:h,getInputProps:m,getLabelProps:d,getDropdownProps:g,getMenuProps:v,getItemProps:y,refresh:function(){return ct({query:n.getState().query,store:n,props:t,setHighlightedIndex:o,setQuery:i,setSuggestions:a,setIsOpen:c,setStatus:u,setContext:s})}}}function yt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?yt(Object(n),!0).forEach((function(t){bt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function bt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function St(e){return function(e){var t=e.searchClient,n=e.queries;return"function"==typeof t.addAlgoliaAgent&&t.addAlgoliaAgent("autocomplete-core","1.0.0-alpha.28"),t.search(n.map((function(e){return{indexName:e.indexName,query:e.query,params:_t({hitsPerPage:5,highlightPreTag:"<mark>",highlightPostTag:"</mark>"},e.params)}})))}({searchClient:e.searchClient,queries:e.queries}).then((function(e){return e.results}))}function Ot(){return ke.createElement("a",{href:"https://www.algolia.com/docsearch",target:"_blank",rel:"noopener noreferrer"},ke.createElement("span",{className:"DocSearch-Label"},"Search by"),ke.createElement("svg",{width:"77",height:"19"},ke.createElement("path",{d:"M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z",fill:"currentColor",fillRule:"evenodd"})))}function Et(){return ke.createElement(ke.Fragment,null,ke.createElement("div",{className:"DocSearch-Logo"},ke.createElement(Ot,null)),ke.createElement("ul",{className:"DocSearch-Commands"},ke.createElement("li",null,ke.createElement("span",{className:"DocSearch-Commands-Key"},ke.createElement(wt,null,ke.createElement("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"}))),ke.createElement("span",{className:"DocSearch-Label"},"to select")),ke.createElement("li",null,ke.createElement("span",{className:"DocSearch-Commands-Key"},ke.createElement(wt,null,ke.createElement("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"}))),ke.createElement("span",{className:"DocSearch-Commands-Key"},ke.createElement(wt,null,ke.createElement("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"}))),ke.createElement("span",{className:"DocSearch-Label"},"to navigate")),ke.createElement("li",null,ke.createElement("span",{className:"DocSearch-Commands-Key"},ke.createElement(wt,null,ke.createElement("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"}))),ke.createElement("span",{className:"DocSearch-Label"},"to close"))))}function wt(e){return ke.createElement("svg",{width:"15",height:"15"},ke.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2"},e.children))}function Pt(e){var t=e.hit,n=e.children;return(ke.createElement("a",{href:t.url},n))}function jt(){return ke.createElement("svg",{viewBox:"0 0 38 38",stroke:"currentColor",strokeOpacity:".5"},ke.createElement("g",{fill:"none",fillRule:"evenodd"},ke.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},ke.createElement("circle",{strokeOpacity:".3",cx:"18",cy:"18",r:"18"}),ke.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},ke.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}function Ct(){return ke.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},ke.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},ke.createElement("path",{d:"M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"}),ke.createElement("path",{d:"M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"})))}function xt(){return ke.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},ke.createElement("path",{d:"M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function kt(){return ke.createElement("svg",{className:"DocSearch-Hit-Select-Icon",width:"20",height:"20",viewBox:"0 0 20 20"},ke.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},ke.createElement("path",{d:"M18 3v4c0 2-2 4-4 4H2"}),ke.createElement("path",{d:"M8 17l-6-6 6-6"})))}function Dt(e){switch(e.type){case"lvl1":return ke.createElement(It,null);case"content":return ke.createElement(Ht,null);default:return ke.createElement(Nt,null)}}function It(){return ke.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},ke.createElement("path",{d:"M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function Nt(){return ke.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},ke.createElement("path",{d:"M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function Ht(){return ke.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},ke.createElement("path",{d:"M17 5H3h14zm0 5H3h14zm0 5H3h14z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function At(){return ke.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},ke.createElement("path",{d:"M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function Mt(){return ke.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},ke.createElement("path",{d:"M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"}))}function Tt(){return ke.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},ke.createElement("path",{d:"M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"}))}function qt(){return ke.createElement("div",{className:"DocSearch-ErrorScreen"},ke.createElement("div",{className:"DocSearch-Screen-Icon"},ke.createElement(Mt,null)),ke.createElement("p",{className:"DocSearch-Title"},"Unable to fetch results"),ke.createElement("p",{className:"DocSearch-Help"},"You might want to check your network connection."))}function Lt(e){return function(e){if(Array.isArray(e))return Rt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Rt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rt(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Rt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ft(e){var t=e.state.context.searchSuggestions;return(ke.createElement("div",{className:"DocSearch-NoResults"},ke.createElement("div",{className:"DocSearch-Screen-Icon"},ke.createElement(Tt,null)),ke.createElement("p",{className:"DocSearch-Title"},'No results for "',ke.createElement("strong",null,e.state.query),'"'),t&&t.length>0&&ke.createElement("div",{className:"DocSearch-NoResults-Prefill-List"},ke.createElement("p",{className:"DocSearch-Help"},"Try searching for:"),ke.createElement("ul",null,t.slice(0,3).reduce((function(t,n){return[].concat(Lt(t),[ke.createElement("li",{key:n},ke.createElement("button",{className:"DocSearch-Prefill",key:n,onClick:function(){e.setQuery(n.toLowerCase()+" "),e.refresh(),e.inputRef.current.focus()}},n))])}),[]))),ke.createElement("p",{className:"DocSearch-Help"},"Believe this query should return results?"," ",ke.createElement("a",{href:"https://github.com/algolia/docsearch-configs/issues/new?template=Missing_results.md&title=[".concat(e.indexName,']+Missing+results+for+query+"').concat(e.state.query,'"'),target:"_blank",rel:"noopener noreferrer"},"Let us know"),".")))}function Ut(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function zt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ut(Object(n),!0).forEach((function(t){Vt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ut(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Vt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qt(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Bt(e,t){return t.split(".").reduce((function(e,t){return e&&e[t]}),e)}function Wt(e){var t=e.hit,n=e.attribute,r=e.tagName;return b(void 0===r?"span":r,zt(zt({},Qt(e,["hit","attribute","tagName"])),{},{dangerouslySetInnerHTML:{__html:Bt(t,"_snippetResult.".concat(n,".value"))||Bt(t,n)}}))}function Kt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Jt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Jt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $t(){return($t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Yt(e){return e.suggestion&&0!==e.suggestion.items.length?ke.createElement("section",{className:"DocSearch-Hits"},ke.createElement("div",{className:"DocSearch-Hit-source"},e.title),ke.createElement("ul",e.getMenuProps(),e.suggestion.items.map((function(t,n){return ke.createElement(Gt,$t({key:[e.title,t.objectID].join(":"),item:t,index:n},e))})))):null}function Gt(e){var t=e.item,n=e.index,r=e.renderIcon,o=e.renderAction,i=e.getItemProps,a=e.onItemClick,c=e.suggestion,u=e.hitComponent,s=Kt(ke.useState(!1),2),l=s[0],f=s[1],p=Kt(ke.useState(!1),2),h=p[0],d=p[1],m=ke.useRef(null),g=u;return ke.createElement("li",$t({className:["DocSearch-Hit",t.__docsearch_parent&&"DocSearch-Hit--Child",l&&"DocSearch-Hit--deleting",h&&"DocSearch-Hit--favoriting"].filter(Boolean).join(" "),onTransitionEnd:function(){m.current&&m.current()}},i({item:t,source:c.source,onClick:function(){a(t)}})),ke.createElement(g,{hit:t},ke.createElement("div",{className:"DocSearch-Hit-Container"},r({item:t,index:n}),t.hierarchy[t.type]&&"lvl1"===t.type&&ke.createElement("div",{className:"DocSearch-Hit-content-wrapper"},ke.createElement(Wt,{className:"DocSearch-Hit-title",hit:t,attribute:"hierarchy.lvl1"}),t.content&&ke.createElement(Wt,{className:"DocSearch-Hit-path",hit:t,attribute:"content"})),t.hierarchy[t.type]&&("lvl2"===t.type||"lvl3"===t.type||"lvl4"===t.type||"lvl5"===t.type||"lvl6"===t.type)&&ke.createElement("div",{className:"DocSearch-Hit-content-wrapper"},ke.createElement(Wt,{className:"DocSearch-Hit-title",hit:t,attribute:"hierarchy.".concat(t.type)}),ke.createElement(Wt,{className:"DocSearch-Hit-path",hit:t,attribute:"hierarchy.lvl1"})),"content"===t.type&&ke.createElement("div",{className:"DocSearch-Hit-content-wrapper"},ke.createElement(Wt,{className:"DocSearch-Hit-title",hit:t,attribute:"content"}),ke.createElement(Wt,{className:"DocSearch-Hit-path",hit:t,attribute:"hierarchy.lvl1"})),o({item:t,runDeleteTransition:function(e){f(!0),m.current=e},runFavoriteTransition:function(e){d(!0),m.current=e}}))))}function Zt(){return(Zt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Xt(e){return ke.createElement("div",{className:"DocSearch-Dropdown-Container"},e.state.suggestions.map((function(t,n){if(0===t.items.length)return null;var r=t.items[0].hierarchy.lvl0;return(ke.createElement(Yt,Zt({},e,{key:n,title:r,suggestion:t,renderIcon:function(e){var n,r=e.item,o=e.index;return ke.createElement(ke.Fragment,null,r.__docsearch_parent&&ke.createElement("svg",{className:"DocSearch-Hit-Tree",viewBox:"0 0 24 54"},ke.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},r.__docsearch_parent!==(null===(n=t.items[o+1])||void 0===n?void 0:n.__docsearch_parent)?ke.createElement("path",{d:"M8 6v21M20 27H8.3"}):ke.createElement("path",{d:"M8 6v42M20 27H8.3"}))),ke.createElement("div",{className:"DocSearch-Hit-icon"},ke.createElement(Dt,{type:r.type})))},renderAction:function(){return ke.createElement("div",{className:"DocSearch-Hit-action"},ke.createElement(kt,null))}})))})),e.resultsFooterComponent&&ke.createElement("section",{className:"DocSearch-HitsFooter"},ke.createElement(e.resultsFooterComponent,{state:e.state})))}function en(){return(en=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function tn(e){return"idle"===e.state.status&&!1===e.hasSuggestions?e.disableUserPersonalization?null:ke.createElement("div",{className:"DocSearch-StartScreen"},ke.createElement("p",{className:"DocSearch-Help"},"No recent searches")):!1===e.hasSuggestions?null:ke.createElement("div",{className:"DocSearch-Dropdown-Container"},ke.createElement(Yt,en({},e,{title:"Recent",suggestion:e.state.suggestions[0],renderIcon:function(){return ke.createElement("div",{className:"DocSearch-Hit-icon"},ke.createElement(Ct,null))},renderAction:function(t){var n=t.item,r=t.runFavoriteTransition,o=t.runDeleteTransition;return(ke.createElement(ke.Fragment,null,ke.createElement("div",{className:"DocSearch-Hit-action"},ke.createElement("button",{className:"DocSearch-Hit-action-button",title:"Save this search",onClick:function(t){t.preventDefault(),t.stopPropagation(),r((function(){e.favoriteSearches.add(n),e.recentSearches.remove(n),e.refresh()}))}},ke.createElement(At,null))),ke.createElement("div",{className:"DocSearch-Hit-action"},ke.createElement("button",{className:"DocSearch-Hit-action-button",title:"Remove this search from history",onClick:function(t){t.preventDefault(),t.stopPropagation(),o((function(){e.recentSearches.remove(n),e.refresh()}))}},ke.createElement(xt,null)))))}})),ke.createElement(Yt,en({},e,{title:"Favorites",suggestion:e.state.suggestions[1],renderIcon:function(){return ke.createElement("div",{className:"DocSearch-Hit-icon"},ke.createElement(At,null))},renderAction:function(t){var n=t.item,r=t.runDeleteTransition;return(ke.createElement("div",{className:"DocSearch-Hit-action"},ke.createElement("button",{className:"DocSearch-Hit-action-button",title:"Remove this search from favorites",onClick:function(t){t.preventDefault(),t.stopPropagation(),r((function(){e.favoriteSearches.remove(n),e.refresh()}))}},ke.createElement(xt,null))))}})))}function nn(){return(nn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var rn=ke.memo((function(e){if("error"===e.state.status)return ke.createElement(qt,null);var t=e.state.suggestions.some((function(e){return e.items.length>0}));return e.state.query?!1===t?ke.createElement(Ft,e):ke.createElement(Xt,e):ke.createElement(tn,nn({},e,{hasSuggestions:t}))}),(function(e,t){return"loading"===t.state.status||"stalled"===t.state.status}));function on(){return(on=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function an(e){var t=e.getFormProps({inputElement:e.inputRef.current}).onReset;return ke.useEffect((function(){e.autoFocus&&e.inputRef.current&&e.inputRef.current.focus()}),[e.autoFocus,e.inputRef]),ke.createElement(ke.Fragment,null,ke.createElement("form",{action:"",role:"search",noValidate:!0,className:"DocSearch-Form",onSubmit:function(e){e.preventDefault()},onReset:t},ke.createElement("label",on({className:"DocSearch-MagnifierLabel"},e.getLabelProps()),ke.createElement(Ie,null)),ke.createElement("div",{className:"DocSearch-LoadingIndicator"},ke.createElement(jt,null)),ke.createElement("input",on({className:"DocSearch-Input",ref:e.inputRef},e.getInputProps({inputElement:e.inputRef.current,autoFocus:e.autoFocus,maxLength:64,enterkeyhint:"go"}))),ke.createElement("button",{type:"reset",title:"Clear the query",className:"DocSearch-Reset",hidden:!e.state.query,onClick:t},ke.createElement(xt,null))),ke.createElement("button",{className:"DocSearch-Cancel",onClick:e.onClose},"Cancel"))}function cn(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function un(e){return!1===function(){var e="__TEST_KEY__";try{return localStorage.setItem(e,""),localStorage.removeItem(e),!0}catch(e){return!1}}()?{setItem:function(){},getItem:function(){return[]}}:{setItem:function(t){return window.localStorage.setItem(e,JSON.stringify(t))},getItem:function(){var t=window.localStorage.getItem(e);return t?JSON.parse(t):[]}}}function sn(e){var t=e.key,n=e.limit,r=void 0===n?5:n,o=un(t),i=o.getItem().slice(0,r);return{add:function(e){var t=e,n=(t._highlightResult,t._snippetResult,cn(t,["_highlightResult","_snippetResult"])),a=i.findIndex((function(e){return e.objectID===n.objectID}));a>-1&&i.splice(a,1),i.unshift(n),i=i.slice(0,r),o.setItem(i)},remove:function(e){i=i.filter((function(t){return t.objectID!==e.objectID})),o.setItem(i)},getAll:function(){return i}}}function ln(e){var t,n="algoliasearch-client-js-".concat(e.key),r=function(){return void 0===t&&(t=e.localStorage||window.localStorage),t},o=function(){return JSON.parse(r().getItem(n)||"{}")};return{get:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var n=JSON.stringify(e),r=o()[n];return Promise.all([r||t(),void 0!==r])})).then((function(e){var t=i(e,2),r=t[0],o=t[1];return Promise.all([r,o||n.miss(r)])})).then((function(e){return i(e,1)[0]}))},set:function(e,t){return Promise.resolve().then((function(){var i=o();return i[JSON.stringify(e)]=t,r().setItem(n,JSON.stringify(i)),t}))},delete:function(e){return Promise.resolve().then((function(){var t=o();delete t[JSON.stringify(e)],r().setItem(n,JSON.stringify(t))}))},clear:function(){return Promise.resolve().then((function(){r().removeItem(n)}))}}}function fn(e){var t=a(e.caches),n=t.shift();return void 0===n?{get:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},r=t();return r.then((function(e){return Promise.all([e,n.miss(e)])})).then((function(e){return i(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return n.get(e,r,o).catch((function(){return fn({caches:t}).get(e,r,o)}))},set:function(e,r){return n.set(e,r).catch((function(){return fn({caches:t}).set(e,r)}))},delete:function(e){return n.delete(e).catch((function(){return fn({caches:t}).delete(e)}))},clear:function(){return n.clear().catch((function(){return fn({caches:t}).clear()}))}}}function pn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return{get:function(n,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},i=JSON.stringify(n);if(i in t)return Promise.resolve(e.serializable?JSON.parse(t[i]):t[i]);var a=r(),c=o&&o.miss||function(){return Promise.resolve()};return a.then((function(e){return c(e)})).then((function(){return a}))},set:function(n,r){return t[JSON.stringify(n)]=e.serializable?JSON.stringify(r):r,Promise.resolve(r)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function hn(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e}function dn(e,t){return Object.keys(void 0!==t?t:{}).forEach((function(n){e[n]=t[n](e)})),e}function mn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0;return e.replace(/%s/g,(function(){return encodeURIComponent(n[o++])}))}var gn={WithinQueryParameters:0,WithinHeaders:1};function vn(e,t){var n=e||{},r=n.data||{};return Object.keys(n).forEach((function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(r[e]=n[e])})),{data:Object.entries(r).length>0?r:void 0,timeout:n.timeout||t,headers:n.headers||{},queryParameters:n.queryParameters||{},cacheable:n.cacheable}}var yn={Read:1,Write:2,Any:3},_n=1,bn=2,Sn=3;function On(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_n;return r(r({},e),{},{status:t,lastUpdate:Date.now()})}function En(e){return{protocol:e.protocol||"https",url:e.url,accept:e.accept||yn.Any}}var wn="GET",Pn="POST";function jn(e,t){return Promise.all(t.map((function(t){return e.get(t,(function(){return Promise.resolve(On(t))}))}))).then((function(e){var n=e.filter((function(e){return function(e){return e.status===_n||Date.now()-e.lastUpdate>12e4}(e)})),r=e.filter((function(e){return function(e){return e.status===Sn&&Date.now()-e.lastUpdate<=12e4}(e)})),o=[].concat(a(n),a(r));return{getTimeout:function(e,t){return(0===r.length&&0===e?1:r.length+3+e)*t},statelessHosts:o.length>0?o.map((function(e){return En(e)})):t}}))}function Cn(e,t,n,o){var i=[],c=function(e,t){if(e.method===wn||void 0===e.data&&void 0===t.data)return;var n=Array.isArray(e.data)?e.data:r(r({},e.data),t.data);return JSON.stringify(n)}(n,o),u=function(e,t){var n=r(r({},e.headers),t.headers),o={};return Object.keys(n).forEach((function(e){var t=n[e];o[e.toLowerCase()]=t})),o}(e,o),s=n.method,l=n.method!==wn?{}:r(r({},n.data),o.data),f=r(r(r({"x-algolia-agent":e.userAgent.value},e.queryParameters),l),o.queryParameters),p=0,h=function t(r,a){var l=r.pop();if(void 0===l)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:In(i)};var h={data:c,headers:u,method:s,url:kn(l,n.path,f),connectTimeout:a(p,e.timeouts.connect),responseTimeout:a(p,o.timeout)},d=function(e){var t={request:h,response:e,host:l,triesLeft:r.length};return i.push(t),t},m={onSucess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}}(e)},onRetry:function(n){var o=d(n);return n.isTimedOut&&p++,Promise.all([e.logger.info("Retryable failure",Nn(o)),e.hostsCache.set(l,On(l,n.isTimedOut?Sn:bn))]).then((function(){return t(r,a)}))},onFail:function(e){throw d(e),function(e,t){var n=e.content,r=e.status,o=n;try{o=JSON.parse(n).message}catch(e){}return function(e,t,n){return{name:"ApiError",message:e,status:t,transporterStackTrace:n}}(o,r,t)}(e,In(i))}};return e.requester.send(h).then((function(e){return function(e,t){return function(e){var t=e.status;return e.isTimedOut||function(e){var t=e.isTimedOut,n=e.status;return!t&&0==~~n}(e)||2!=~~(t/100)&&4!=~~(t/100)}(e)?t.onRetry(e):2==~~(e.status/100)?t.onSucess(e):t.onFail(e)}(e,m)}))};return jn(e.hostsCache,t).then((function(e){return h(a(e.statelessHosts).reverse(),e.getTimeout)}))}function xn(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var n="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return-1===t.value.indexOf(n)&&(t.value="".concat(t.value).concat(n)),t}};return t}function kn(e,t,n){var r=Dn(n),o="".concat(e.protocol,"://").concat(e.url,"/").concat("/"===t.charAt(0)?t.substr(1):t);return r.length&&(o+="?".concat(r)),o}function Dn(e){return Object.keys(e).map((function(t){return mn("%s=%s",t,(n=e[t],"[object Object]"===Object.prototype.toString.call(n)||"[object Array]"===Object.prototype.toString.call(n)?JSON.stringify(e[t]):e[t]));var n})).join("&")}function In(e){return e.map((function(e){return Nn(e)}))}function Nn(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r(r({},e),{},{request:r(r({},e.request),{},{headers:r(r({},e.request.headers),t)})})}var Hn=function(e){var t=e.appId,n=function(e,t,n){var r={"x-algolia-api-key":n,"x-algolia-application-id":t};return{headers:function(){return e===gn.WithinHeaders?r:{}},queryParameters:function(){return e===gn.WithinQueryParameters?r:{}}}}(void 0!==e.authMode?e.authMode:gn.WithinHeaders,t,e.apiKey),o=function(e){var t=e.hostsCache,n=e.logger,r=e.requester,o=e.requestsCache,a=e.responsesCache,c=e.timeouts,u=e.userAgent,s=e.hosts,l=e.queryParameters,f={hostsCache:t,logger:n,requester:r,requestsCache:o,responsesCache:a,timeouts:c,userAgent:u,headers:e.headers,queryParameters:l,hosts:s.map((function(e){return En(e)})),read:function(e,t){var n=vn(t,f.timeouts.read),r=function(){return Cn(f,f.hosts.filter((function(e){return 0!=(e.accept&yn.Read)})),e,n)};if(!0!==(void 0!==n.cacheable?n.cacheable:e.cacheable))return r();var o={request:e,mappedRequestOptions:n,transporter:{queryParameters:f.queryParameters,headers:f.headers}};return f.responsesCache.get(o,(function(){return f.requestsCache.get(o,(function(){return f.requestsCache.set(o,r()).then((function(e){return Promise.all([f.requestsCache.delete(o),e])}),(function(e){return Promise.all([f.requestsCache.delete(o),Promise.reject(e)])})).then((function(e){var t=i(e,2);t[0];return t[1]}))}))}),{miss:function(e){return f.responsesCache.set(o,e)}})},write:function(e,t){return Cn(f,f.hosts.filter((function(e){return 0!=(e.accept&yn.Write)})),e,vn(t,f.timeouts.write))}};return f}(r(r({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:yn.Read},{url:"".concat(t,".algolia.net"),accept:yn.Write}].concat(hn([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:r(r(r({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:r(r({},n.queryParameters()),e.queryParameters)}));return dn({transporter:o,appId:t,addAlgoliaAgent:function(e,t){o.userAgent.add({segment:e,version:t})},clearCache:function(){return Promise.all([o.requestsCache.clear(),o.responsesCache.clear()]).then((function(){}))}},e.methods)},An=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={transporter:e.transporter,appId:e.appId,indexName:t};return dn(r,n.methods)}},Mn=function(e){return function(t,n){var o=t.map((function(e){return r(r({},e),{},{params:Dn(e.params||{})})}));return e.transporter.read({method:Pn,path:"1/indexes/*/queries",data:{requests:o},cacheable:!0},n)}},Tn=function(e){return function(t,n){return Promise.all(t.map((function(t){var i=t.params,a=i.facetName,c=i.facetQuery,u=o(i,["facetName","facetQuery"]);return An(e)(t.indexName,{methods:{searchForFacetValues:Ln}}).searchForFacetValues(a,c,r(r({},n),u))})))}},qn=function(e){return function(t,n){return e.transporter.read({method:Pn,path:mn("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},n)}},Ln=function(e){return function(t,n,r){return e.transporter.read({method:Pn,path:mn("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:n},cacheable:!0},r)}},Rn=1,Fn=2,Un=3;function zn(e,t,n){var o,i={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise((function(t){var n=new XMLHttpRequest;n.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return n.setRequestHeader(t,e.headers[t])}));var r,o=function(e,r){return setTimeout((function(){n.abort(),t({status:0,content:r,isTimedOut:!0})}),1e3*e)},i=o(e.connectTimeout,"Connection timeout");n.onreadystatechange=function(){n.readyState>n.OPENED&&void 0===r&&(clearTimeout(i),r=o(e.responseTimeout,"Socket timeout"))},n.onerror=function(){0===n.status&&(clearTimeout(i),clearTimeout(r),t({content:n.responseText||"Network request failed",status:n.status,isTimedOut:!1}))},n.onload=function(){clearTimeout(i),clearTimeout(r),t({content:n.responseText,status:n.status,isTimedOut:!1})},n.send(e.data)}))}},logger:(o=Un,{debug:function(e,t){return Rn>=o&&console.debug(e,t),Promise.resolve()},info:function(e,t){return Fn>=o&&console.info(e,t),Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}}),responsesCache:pn(),requestsCache:pn({serializable:!1}),hostsCache:fn({caches:[ln({key:"".concat("4.1.0","-").concat(e)}),pn()]}),userAgent:xn("4.1.0").add({segment:"Browser",version:"lite"}),authMode:gn.WithinQueryParameters};return Hn(r(r(r({},i),n),{},{methods:{search:Mn,searchForFacetValues:Tn,multipleQueries:Mn,multipleSearchForFacetValues:Tn,initIndex:function(e){return function(t){return An(e)(t,{methods:{search:qn,searchForFacetValues:Ln}})}}}}))}zn.version="4.1.0";function Vn(e,t){return e.reduce((function(e,n){var r=t(n);return e.hasOwnProperty(r)||(e[r]=[]),e[r].length<5&&e[r].push(n),e}),{})}function Qn(e){return e}function Bn(){}function Wn(){return(Wn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Kn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Jn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Kn(Object(n),!0).forEach((function(t){$n(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yn(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Gn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gn(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Gn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Zn(e){var t=e.appId,n=void 0===t?"BH4D9OD16A":t,r=e.apiKey,o=e.indexName,i=e.placeholder,a=void 0===i?"Search docs":i,c=e.searchParameters,u=e.onClose,s=void 0===u?Bn:u,l=e.transformItems,f=void 0===l?Qn:l,p=e.hitComponent,h=void 0===p?Pt:p,d=e.resultsFooterComponent,m=void 0===d?function(){return null}:d,g=e.navigator,v=e.initialScrollY,y=void 0===v?0:v,_=e.transformSearchClient,b=void 0===_?Qn:_,S=e.disableUserPersonalization,O=void 0!==S&&S,E=e.initialQuery,w=void 0===E?"":E,P=Yn(ke.useState({query:"",suggestions:[]}),2),j=P[0],C=P[1],x=ke.useRef(null),k=ke.useRef(null),D=ke.useRef(null),I=ke.useRef(null),N=ke.useRef(10),H=ke.useRef(w||"undefined"!=typeof window?window.getSelection().toString().slice(0,64):"").current,A=function(e,t,n){return ke.useMemo((function(){var r=zn(e,t);return r.addAlgoliaAgent("docsearch","1.0.0-alpha.28"),!1===/docsearch.js \(.*\)/.test(r.transporter.userAgent.value)&&r.addAlgoliaAgent("docsearch-react","1.0.0-alpha.28"),n(r)}),[e,t,n])}(n,r,b),M=ke.useRef(sn({key:"__DOCSEARCH_FAVORITE_SEARCHES__".concat(o),limit:10})).current,T=ke.useRef(sn({key:"__DOCSEARCH_RECENT_SEARCHES__".concat(o),limit:0===M.getAll().length?7:4})).current,q=ke.useCallback((function(e){if(!O){var t="content"===e.type?e.__docsearch_parent:e;t&&-1===M.getAll().findIndex((function(e){return e.objectID===t.objectID}))&&T.add(t)}}),[M,T,O]),L=ke.useMemo((function(){return vt({id:"docsearch",defaultHighlightedIndex:0,placeholder:a,openOnFocus:!0,initialState:{query:H,context:{searchSuggestions:[]}},navigator:g,onStateChange:function(e){var t=e.state;C(t)},getSources:function(e){var t=e.query,n=e.state,r=e.setContext,i=e.setStatus;return t?St({searchClient:A,queries:[{indexName:o,query:t,params:Jn({attributesToRetrieve:["hierarchy.lvl0","hierarchy.lvl1","hierarchy.lvl2","hierarchy.lvl3","hierarchy.lvl4","hierarchy.lvl5","hierarchy.lvl6","content","type","url"],attributesToSnippet:["hierarchy.lvl1:".concat(N.current),"hierarchy.lvl2:".concat(N.current),"hierarchy.lvl3:".concat(N.current),"hierarchy.lvl4:".concat(N.current),"hierarchy.lvl5:".concat(N.current),"hierarchy.lvl6:".concat(N.current),"content:".concat(N.current)],snippetEllipsisText:"…",highlightPreTag:"<mark>",highlightPostTag:"</mark>",hitsPerPage:20},c)}]}).catch((function(e){throw"RetryError"===e.name&&i("error"),e})).then((function(e){var t=e[0].hits,o=e[0].nbHits,i=Vn(t,(function(e){return e.hierarchy.lvl0}));return n.context.searchSuggestions.length<Object.keys(i).length&&r({searchSuggestions:Object.keys(i)}),r({nbHits:o}),Object.values(i).map((function(e){return{onSelect:function(e){var t=e.suggestion;q(t),s()},getSuggestionUrl:function(e){return e.suggestion.url},getSuggestions:function(){return Object.values(Vn(e,(function(e){return e.hierarchy.lvl1}))).map(f).map((function(e){return e.map((function(t){return Jn(Jn({},t),{},{__docsearch_parent:"lvl1"!==t.type&&e.find((function(e){return"lvl1"===e.type&&e.hierarchy.lvl1===t.hierarchy.lvl1}))})}))})).flat()}}}))})):O?[]:[{onSelect:function(e){var t=e.suggestion;q(t),s()},getSuggestionUrl:function(e){return e.suggestion.url},getSuggestions:function(){return T.getAll()}},{onSelect:function(e){var t=e.suggestion;q(t),s()},getSuggestionUrl:function(e){return e.suggestion.url},getSuggestions:function(){return M.getAll()}}]}})}),[o,c,A,s,T,M,q,H,a,g,f,O]),R=L.getEnvironmentProps,F=L.getRootProps,U=L.refresh;return function(e){var t=e.getEnvironmentProps,n=e.dropdownElement,r=e.searchBoxElement,o=e.inputElement;ke.useEffect((function(){if(n&&r&&o){var e=t({dropdownElement:n,searchBoxElement:r,inputElement:o}),i=e.onTouchStart,a=e.onTouchMove;return window.addEventListener("touchstart",i),window.addEventListener("touchmove",a),function(){window.removeEventListener("touchstart",i),window.removeEventListener("touchmove",a)}}}),[t,n,r,o])}({getEnvironmentProps:R,dropdownElement:D.current,searchBoxElement:k.current,inputElement:I.current}),function(e){var t=e.container;ke.useEffect((function(){if(t){var e=t.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),n=e[0],r=e[e.length-1];return t.addEventListener("keydown",o),function(){t.removeEventListener("keydown",o)}}function o(e){"Tab"===e.key&&(e.shiftKey?document.activeElement===n&&(e.preventDefault(),r.focus()):document.activeElement===r&&(e.preventDefault(),n.focus()))}}),[t])}({container:x.current}),ke.useEffect((function(){return document.body.classList.add("DocSearch--active"),function(){var e,t;document.body.classList.remove("DocSearch--active"),null===(e=(t=window).scrollTo)||void 0===e||e.call(t,0,y)}}),[]),ke.useEffect((function(){window.matchMedia("(max-width: 750px)").matches&&(N.current=5)}),[]),ke.useEffect((function(){D.current&&(D.current.scrollTop=0)}),[j.query]),ke.useEffect((function(){H.length>0&&(U(),I.current&&I.current.focus())}),[H,U]),ke.createElement("div",Wn({ref:x},F({"aria-expanded":!0}),{className:["DocSearch","DocSearch-Container","stalled"===j.status&&"DocSearch-Container--Stalled","error"===j.status&&"DocSearch-Container--Errored"].filter(Boolean).join(" "),onMouseDown:function(e){e.target===e.currentTarget&&s()}}),ke.createElement("div",{className:"DocSearch-Modal"},ke.createElement("header",{className:"DocSearch-SearchBar",ref:k},ke.createElement(an,Wn({},L,{state:j,autoFocus:0===H.length,onClose:s,inputRef:I}))),ke.createElement("div",{className:"DocSearch-Dropdown",ref:D},ke.createElement(rn,Wn({},L,{indexName:o,state:j,hitComponent:h,resultsFooterComponent:m,disableUserPersonalization:O,recentSearches:T,favoriteSearches:M,onItemClick:function(e){q(e),s()},inputRef:I}))),ke.createElement("footer",{className:"DocSearch-Footer"},ke.createElement(Et,null))))}function Xn(){return(Xn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function er(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return tr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tr(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tr(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nr(e){var t=ke.useRef(null),n=er(ke.useState(!1),2),r=n[0],o=n[1],i=er(ke.useState(void 0),2),a=i[0],c=i[1],u=ke.useCallback((function(){o(!0)}),[o]),s=ke.useCallback((function(){o(!1)}),[o]);return function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,o=e.onInput,i=e.searchButtonRef;ke.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),i&&i.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,o,i])}({isOpen:r,onOpen:u,onClose:s,onInput:ke.useCallback((function(e){o(!0),c(e.key)}),[o,c]),searchButtonRef:t}),ke.createElement(ke.Fragment,null,ke.createElement(Te,{onClick:u,ref:t}),r&&be(ke.createElement(Zn,Xn({},e,{initialScrollY:window.scrollY,initialQuery:a,onClose:s})),document.body))}/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e){Ee(ke.createElement(nr,t({},e,{transformSearchClient:function(t){return t.addAlgoliaAgent("docsearch.js","1.0.0-alpha.28"),e.transformSearchClient?e.transformSearchClient(t):t}})),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return"string"==typeof e?t.document.querySelector(e):e}(e.container,e.environment))}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/ally.js/src/element/focus.svg-foreign-object-hack.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ally.js/src/element/focus.svg-foreign-object-hack.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

function makeFocusableForeignObject() {
  const fragment = document.createElement('div');
  fragment.innerHTML = `<svg><foreignObject width="30" height="30">
      <input type="text"/>
  </foreignObject></svg>`;

  return fragment.firstChild.firstChild;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  // Edge13, Edge14: foreignObject focus hack
  // https://jsbin.com/kunehinugi/edit?html,js,output
  // https://jsbin.com/fajagi/3/edit?html,js,output
  const isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
  if (!isSvgElement) {
    return false;
  }

  // inject and focus an <input> element into the SVG element to receive focus
  const foreignObject = makeFocusableForeignObject();
  element.appendChild(foreignObject);
  const input = foreignObject.querySelector('input');
  input.focus();

  // upon disabling the activeElement, IE and Edge
  // will not shift focus to <body> like all the other
  // browsers, but instead find the first focusable
  // ancestor and shift focus to that
  input.disabled = true;

  // clean up
  element.removeChild(foreignObject);
  return true;
}


/***/ }),

/***/ "./node_modules/ally.js/src/get/parents.js":
/*!*************************************************!*\
  !*** ./node_modules/ally.js/src/get/parents.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");



// [elem, elem.parent, elem.parent.parent, …, html]
// will not contain the shadowRoot (DOCUMENT_FRAGMENT_NODE) and shadowHost
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({context} = {}) {
  const list = [];
  let element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__.default)({
    label: 'get/parents',
    context,
  });

  while (element) {
    list.push(element);
    // IE does know support parentElement on SVGElement
    element = element.parentNode;
    if (element && element.nodeType !== Node.ELEMENT_NODE) {
      element = null;
    }
  }

  return list;
}


/***/ }),

/***/ "./node_modules/ally.js/src/get/shadow-host.js":
/*!*****************************************************!*\
  !*** ./node_modules/ally.js/src/get/shadow-host.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({context} = {}) {
  let element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__.default)({
    label: 'get/shadow-host',
    context,
  });

  // walk up to the root
  let container = null;

  while (element) {
    container = element;
    element = element.parentNode;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType
  // NOTE: Firefox 34 does not expose ShadowRoot.host (but 37 does)
  if (container.nodeType === container.DOCUMENT_FRAGMENT_NODE && container.host) {
    // the root is attached to a fragment node that has a host
    return container.host;
  }

  return null;
}


/***/ }),

/***/ "./node_modules/ally.js/src/is/active-element.js":
/*!*******************************************************!*\
  !*** ./node_modules/ally.js/src/is/active-element.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _get_shadow_host__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get/shadow-host */ "./node_modules/ally.js/src/get/shadow-host.js");
/* harmony import */ var _util_get_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/get-document */ "./node_modules/ally.js/src/util/get-document.js");

// Determines if an element is the activeElement within its context, i.e. its document iFrame or ShadowHost





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__.default)({
    label: 'is/active-element',
    resolveDocument: true,
    context,
  });

  const _document = (0,_util_get_document__WEBPACK_IMPORTED_MODULE_2__.default)(element);
  if (_document.activeElement === element) {
    return true;
  }

  const shadowHost = (0,_get_shadow_host__WEBPACK_IMPORTED_MODULE_1__.default)({ context: element });
  if (shadowHost && shadowHost.shadowRoot.activeElement === element) {
    return true;
  }

  return false;
}


/***/ }),

/***/ "./node_modules/ally.js/src/is/disabled.js":
/*!*************************************************!*\
  !*** ./node_modules/ally.js/src/is/disabled.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _get_parents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get/parents */ "./node_modules/ally.js/src/get/parents.js");
/* harmony import */ var _native_disabled_supported__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./native-disabled-supported */ "./node_modules/ally.js/src/is/native-disabled-supported.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../supports/supports */ "./node_modules/ally.js/src/supports/supports.js");

// Determine if an element is disabled (i.e. not editable)






let supports;

function isDisabledFieldset(element) {
  const nodeName = element.nodeName.toLowerCase();
  return nodeName === 'fieldset' && element.disabled;
}

function isDisabledForm(element) {
  const nodeName = element.nodeName.toLowerCase();
  return nodeName === 'form' && element.disabled;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_3__.default)();
  }

  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__.default)({
    label: 'is/disabled',
    context,
  });

  if (element.hasAttribute('data-ally-disabled')) {
    // treat ally's element/disabled like the DOM native element.disabled
    return true;
  }

  if (!(0,_native_disabled_supported__WEBPACK_IMPORTED_MODULE_2__.default)(element)) {
    // non-form elements do not support the disabled attribute
    return false;
  }

  if (element.disabled) {
    // the element itself is disabled
    return true;
  }

  const parents = (0,_get_parents__WEBPACK_IMPORTED_MODULE_1__.default)({context: element});
  if (parents.some(isDisabledFieldset)) {
    // a parental <fieldset> is disabld and inherits the state onto this element
    return true;
  }

  if (!supports.focusFormDisabled && parents.some(isDisabledForm)) {
    // a parental <form> is disabld and inherits the state onto this element
    return true;
  }

  return false;
}


/***/ }),

/***/ "./node_modules/ally.js/src/is/focus-relevant.js":
/*!*******************************************************!*\
  !*** ./node_modules/ally.js/src/is/focus-relevant.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _get_parents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get/parents */ "./node_modules/ally.js/src/get/parents.js");
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _util_element_matches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/element-matches */ "./node_modules/ally.js/src/util/element-matches.js");
/* harmony import */ var _util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/tabindex-value */ "./node_modules/ally.js/src/util/tabindex-value.js");
/* harmony import */ var _valid_tabindex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./valid-tabindex */ "./node_modules/ally.js/src/is/valid-tabindex.js");
/* harmony import */ var _is_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is.util */ "./node_modules/ally.js/src/is/is.util.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../supports/supports */ "./node_modules/ally.js/src/supports/supports.js");

// determine if an element supports.can be focused by script regardless
// of the element actually being focusable at the time of execution
// i.e. <input disabled> is conisdered focus-relevant, but not focusable









let supports;

function isFocusRelevantRules({
  context,
  except = {
    flexbox: false,
    scrollable: false,
    shadow: false,
  },
} = {}) {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_6__.default)();
  }

  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_1__.default)({
    label: 'is/focus-relevant',
    resolveDocument: true,
    context,
  });

  if (!except.shadow && element.shadowRoot) {
    // a ShadowDOM host receives focus when the focus moves to its content
    return true;
  }

  const nodeName = element.nodeName.toLowerCase();

  if (nodeName === 'input' && element.type === 'hidden') {
    // input[type="hidden"] supports.cannot be focused
    return false;
  }

  if (nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea') {
    return true;
  }

  if (nodeName === 'legend' && supports.focusRedirectLegend) {
    // specifics filtered in is/focusable
    return true;
  }

  if (nodeName === 'label') {
    // specifics filtered in is/focusable
    return true;
  }

  if (nodeName === 'area') {
    // specifics filtered in is/focusable
    return true;
  }

  if (nodeName === 'a' && element.hasAttribute('href')) {
    return true;
  }

  if (nodeName === 'object' && element.hasAttribute('usemap')) {
    // object[usemap] is not focusable in any browser
    return false;
  }

  if (nodeName === 'object') {
    const svgType = element.getAttribute('type');
    if (!supports.focusObjectSvg && svgType === 'image/svg+xml') {
      // object[type="image/svg+xml"] is not focusable in Internet Explorer
      return false;
    } else if (!supports.focusObjectSwf && svgType === 'application/x-shockwave-flash') {
      // object[type="application/x-shockwave-flash"] is not focusable in Internet Explorer 9
      return false;
    }
  }

  if (nodeName === 'iframe' || nodeName === 'object') {
    // browsing context containers
    return true;
  }

  if (nodeName === 'embed' || nodeName === 'keygen') {
    // embed is considered focus-relevant but not focusable
    // see https://github.com/medialize/ally.js/issues/82
    return true;
  }

  if (element.hasAttribute('contenteditable')) {
    // also see CSS property user-modify below
    return true;
  }

  if (nodeName === 'audio' && (supports.focusAudioWithoutControls || element.hasAttribute('controls'))) {
    return true;
  }

  if (nodeName === 'video' && (supports.focusVideoWithoutControls || element.hasAttribute('controls'))) {
    return true;
  }

  if (supports.focusSummary && nodeName === 'summary') {
    return true;
  }

  const validTabindex = (0,_valid_tabindex__WEBPACK_IMPORTED_MODULE_4__.default)(element);

  if (nodeName === 'img' && element.hasAttribute('usemap')) {
    // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
    // it appears the tabindex is overruled so focus is still forwarded to the <map>
    return validTabindex && supports.focusImgUsemapTabindex || supports.focusRedirectImgUsemap;
  }

  if (supports.focusTable && (nodeName === 'table' || nodeName === 'td')) {
    // IE10-11 supports.can focus <table> and <td>
    return true;
  }

  if (supports.focusFieldset && nodeName === 'fieldset') {
    // IE10-11 supports.can focus <fieldset>
    return true;
  }

  const isSvgElement = nodeName === 'svg';
  const isSvgContent = element.ownerSVGElement;
  const focusableAttribute = element.getAttribute('focusable');
  const tabindex = (0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__.default)(element);

  if (nodeName === 'use' && tabindex !== null && !supports.focusSvgUseTabindex) {
    // <use> cannot be made focusable by adding a tabindex attribute anywhere but Blink and WebKit
    return false;
  }

  if (nodeName === 'foreignobject') {
    // <use> can only be made focusable in Blink and WebKit
    return tabindex !== null && supports.focusSvgForeignobjectTabindex;
  }

  if ((0,_util_element_matches__WEBPACK_IMPORTED_MODULE_2__.default)(element, 'svg a') && element.hasAttribute('xlink:href')) {
    return true;
  }

  if ((isSvgElement || isSvgContent) && element.focus && !supports.focusSvgNegativeTabindexAttribute && tabindex < 0) {
    // Firefox 51 and 52 treat any natively tabbable SVG element with
    // tabindex="-1" as tabbable and everything else as inert
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
    return false;
  }

  if (isSvgElement) {
    return validTabindex || supports.focusSvg || supports.focusSvgInIframe
      // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
      || Boolean(supports.focusSvgFocusableAttribute && focusableAttribute && focusableAttribute === 'true');
  }

  if (isSvgContent) {
    if (supports.focusSvgTabindexAttribute && validTabindex) {
      return true;
    }

    if (supports.focusSvgFocusableAttribute) {
      // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
      return focusableAttribute === 'true';
    }
  }

  // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  if (validTabindex) {
    return true;
  }

  const style = window.getComputedStyle(element, null);
  if ((0,_is_util__WEBPACK_IMPORTED_MODULE_5__.isUserModifyWritable)(style)) {
    return true;
  }

  if (supports.focusImgIsmap && nodeName === 'img' && element.hasAttribute('ismap')) {
    // IE10-11 considers the <img> in <a href><img ismap> focusable
    // https://github.com/medialize/ally.js/issues/20
    const hasLinkParent = (0,_get_parents__WEBPACK_IMPORTED_MODULE_0__.default)({context: element}).some(
      parent => parent.nodeName.toLowerCase() === 'a' && parent.hasAttribute('href')
    );

    if (hasLinkParent) {
      return true;
    }
  }

  // https://github.com/medialize/ally.js/issues/21
  if (!except.scrollable && supports.focusScrollContainer) {
    if (supports.focusScrollContainerWithoutOverflow) {
      // Internet Explorer does will consider the scrollable area focusable
      // if the element is a <div> or a <span> and it is in fact scrollable,
      // regardless of the CSS overflow property
      if ((0,_is_util__WEBPACK_IMPORTED_MODULE_5__.isScrollableContainer)(element, nodeName)) {
        return true;
      }
    } else if ((0,_is_util__WEBPACK_IMPORTED_MODULE_5__.hasCssOverflowScroll)(style)) {
      // Firefox requires proper overflow setting, IE does not necessarily
      // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
      return true;
    }
  }

  if (!except.flexbox && supports.focusFlexboxContainer && (0,_is_util__WEBPACK_IMPORTED_MODULE_5__.hasCssDisplayFlex)(style)) {
    // elements with display:flex are focusable in IE10-11
    return true;
  }

  const parent = element.parentElement;
  if (!except.scrollable && parent) {
    const parentNodeName = parent.nodeName.toLowerCase();
    const parentStyle = window.getComputedStyle(parent, null);
    if (supports.focusScrollBody && (0,_is_util__WEBPACK_IMPORTED_MODULE_5__.isScrollableContainer)(parent, nodeName, parentNodeName, parentStyle)) {
      // scrollable bodies are focusable Internet Explorer
      // https://github.com/medialize/ally.js/issues/21
      return true;
    }

    // Children of focusable elements with display:flex are focusable in IE10-11
    if (supports.focusChildrenOfFocusableFlexbox) {
      if ((0,_is_util__WEBPACK_IMPORTED_MODULE_5__.hasCssDisplayFlex)(parentStyle)) {
        return true;
      }
    }
  }

  // NOTE: elements marked as inert are not focusable,
  // but that property is not exposed to the DOM
  // https://www.w3.org/TR/html5/editing.html#inert

  return false;
}

// bind exceptions to an iterator callback
isFocusRelevantRules.except = function(except = {}) {
  const isFocusRelevant = function(context) {
    return isFocusRelevantRules({
      context,
      except,
    });
  };

  isFocusRelevant.rules = isFocusRelevantRules;
  return isFocusRelevant;
};

// provide isFocusRelevant(context) as default iterator callback
const isFocusRelevant = isFocusRelevantRules.except({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFocusRelevant);


/***/ }),

/***/ "./node_modules/ally.js/src/is/focusable.js":
/*!**************************************************!*\
  !*** ./node_modules/ally.js/src/is/focusable.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _focus_relevant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus-relevant */ "./node_modules/ally.js/src/is/focus-relevant.js");
/* harmony import */ var _valid_area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valid-area */ "./node_modules/ally.js/src/is/valid-area.js");
/* harmony import */ var _visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visible */ "./node_modules/ally.js/src/is/visible.js");
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disabled */ "./node_modules/ally.js/src/is/disabled.js");
/* harmony import */ var _only_tabbable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./only-tabbable */ "./node_modules/ally.js/src/is/only-tabbable.js");
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _util_get_frame_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/get-frame-element */ "./node_modules/ally.js/src/util/get-frame-element.js");
/* harmony import */ var _util_tabindex_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/tabindex-value */ "./node_modules/ally.js/src/util/tabindex-value.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../supports/supports */ "./node_modules/ally.js/src/supports/supports.js");

// determine if an element can be focused

// https://www.w3.org/TR/html5/editing.html#focus-management

// NOTE: The following known issues exist:
//   Gecko: `svg a[xlink|href]` is not identified as focusable (because SVGElement.prototype.focus is missing)
//   Blink, WebKit: SVGElements that have been made focusable by adding a focus event listener are not identified as focusable











let supports;

function isOnlyFocusRelevant(element) {
  const nodeName = element.nodeName.toLowerCase();
  if (nodeName === 'embed' || nodeName === 'keygen') {
    // embed is considered focus-relevant but not focusable
    // see https://github.com/medialize/ally.js/issues/82
    return true;
  }

  const _tabindex = (0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_7__.default)(element);
  if (element.shadowRoot && _tabindex === null) {
    // ShadowDOM host elements *may* receive focus
    // even though they are not considered focuable
    return true;
  }

  if (nodeName === 'label') {
    // <label tabindex="0"> is only tabbable in Firefox, not script-focusable
    // there's no way to make an element focusable other than by adding a tabindex,
    // and focus behavior of the label element seems hard-wired to ignore tabindex
    // in some browsers (like Gecko, Blink and WebKit)
    return !supports.focusLabelTabindex || _tabindex === null;
  }

  if (nodeName === 'legend') {
    return _tabindex === null;
  }

  if (supports.focusSvgFocusableAttribute && (element.ownerSVGElement || nodeName === 'svg')) {
    // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
    const focusableAttribute = element.getAttribute('focusable');
    return focusableAttribute && focusableAttribute === 'false';
  }

  if (nodeName === 'img' && element.hasAttribute('usemap')) {
    // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
    // it appears the tabindex is overruled so focus is still forwarded to the <map>
    return _tabindex === null || !supports.focusImgUsemapTabindex;
  }

  if (nodeName === 'area') {
    // all <area>s are considered relevant,
    // but only the valid <area>s are focusable
    return !(0,_valid_area__WEBPACK_IMPORTED_MODULE_1__.default)(element);
  }

  return false;
}

function isFocusableRules({
  context,
  except = {
    disabled: false,
    visible: false,
    onlyTabbable: false,
  },
} = {}) {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_8__.default)();
  }

  const _isOnlyTabbable = _only_tabbable__WEBPACK_IMPORTED_MODULE_4__.default.rules.except({
    onlyFocusableBrowsingContext: true,
    visible: except.visible,
  });

  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_5__.default)({
    label: 'is/focusable',
    resolveDocument: true,
    context,
  });

  const focusRelevant = _focus_relevant__WEBPACK_IMPORTED_MODULE_0__.default.rules({
    context: element,
    except,
  });

  if (!focusRelevant || isOnlyFocusRelevant(element)) {
    return false;
  }

  if (!except.disabled && (0,_disabled__WEBPACK_IMPORTED_MODULE_3__.default)(element)) {
    return false;
  }

  if (!except.onlyTabbable && _isOnlyTabbable(element)) {
    // some elements may be keyboard focusable, but not script focusable
    return false;
  }

  // elements that are not rendered, cannot be focused
  if (!except.visible) {
    const visibilityOptions = {
      context: element,
      except: {},
    };

    if (supports.focusInHiddenIframe) {
      // WebKit and Blink can focus content in hidden <iframe> and <object>
      visibilityOptions.except.browsingContext = true;
    }

    if (supports.focusObjectSvgHidden) {
      // Blink allows focusing the object element, even if it has visibility: hidden;
      // @browser-issue Blink https://code.google.com/p/chromium/issues/detail?id=586191
      const nodeName = element.nodeName.toLowerCase();
      if (nodeName === 'object') {
        visibilityOptions.except.cssVisibility = true;
      }
    }

    if (!_visible__WEBPACK_IMPORTED_MODULE_2__.default.rules(visibilityOptions)) {
      return false;
    }
  }

  const frameElement = (0,_util_get_frame_element__WEBPACK_IMPORTED_MODULE_6__.default)(element);
  if (frameElement) {
    const _nodeName = frameElement.nodeName.toLowerCase();
    if (_nodeName === 'object' && !supports.focusInZeroDimensionObject) {
      if (!frameElement.offsetWidth || !frameElement.offsetHeight) {
        // WebKit can not focus content in <object> if it doesn't have dimensions
        return false;
      }
    }
  }

  const nodeName = element.nodeName.toLowerCase();
  if (nodeName === 'svg' && supports.focusSvgInIframe && !frameElement && element.getAttribute('tabindex') === null) {
    return false;
  }

  return true;
}

// bind exceptions to an iterator callback
isFocusableRules.except = function(except = {}) {
  const isFocusable = function(context) {
    return isFocusableRules({
      context,
      except,
    });
  };

  isFocusable.rules = isFocusableRules;
  return isFocusable;
};

// provide isFocusRelevant(context) as default iterator callback
const isFocusable = isFocusableRules.except({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFocusable);


/***/ }),

/***/ "./node_modules/ally.js/src/is/is.util.js":
/*!************************************************!*\
  !*** ./node_modules/ally.js/src/is/is.util.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUserModifyWritable": () => /* binding */ isUserModifyWritable,
/* harmony export */   "hasCssOverflowScroll": () => /* binding */ hasCssOverflowScroll,
/* harmony export */   "hasCssDisplayFlex": () => /* binding */ hasCssDisplayFlex,
/* harmony export */   "isScrollableContainer": () => /* binding */ isScrollableContainer
/* harmony export */ });

// this is a shared utility file for focus-relevant.js and tabbable.js
// separate testing of this file's functions is not necessary,
// as they're implicitly tested by way of the consumers

function isUserModifyWritable(style) {
  // https://www.w3.org/TR/1999/WD-css3-userint-19990916#user-modify
  // https://github.com/medialize/ally.js/issues/17
  const userModify = style.webkitUserModify || '';
  return Boolean(userModify && userModify.indexOf('write') !== -1);
}

function hasCssOverflowScroll(style) {
  return [
    style.getPropertyValue('overflow'),
    style.getPropertyValue('overflow-x'),
    style.getPropertyValue('overflow-y'),
  ].some(overflow => overflow === 'auto' || overflow === 'scroll');
}

function hasCssDisplayFlex(style) {
  return style.display.indexOf('flex') > -1;
}

function isScrollableContainer(element, nodeName, parentNodeName, parentStyle) {
  if (nodeName !== 'div' && nodeName !== 'span') {
    // Internet Explorer advances scrollable containers and bodies to focusable
    // only if the scrollable container is <div> or <span> - this does *not*
    // happen for <section>, <article>, …
    return false;
  }

  if (parentNodeName && parentNodeName !== 'div' && parentNodeName !== 'span' && !hasCssOverflowScroll(parentStyle)) {
    return false;
  }

  return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
}


/***/ }),

/***/ "./node_modules/ally.js/src/is/native-disabled-supported.js":
/*!******************************************************************!*\
  !*** ./node_modules/ally.js/src/is/native-disabled-supported.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supports/supports */ "./node_modules/ally.js/src/supports/supports.js");

// Determine if an element supports the disabled attribute



let supports;

// https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
let disabledElementsPattern;
const disabledElements = {
  input: true,
  select: true,
  textarea: true,
  button: true,
  fieldset: true,
  form: true,
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_1__.default)();

    if (supports.focusFieldsetDisabled) {
      delete disabledElements.fieldset;
    }

    if (supports.focusFormDisabled) {
      delete disabledElements.form;
    }

    disabledElementsPattern = new RegExp('^(' + Object.keys(disabledElements).join('|') + ')$');
  }

  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__.default)({
    label: 'is/native-disabled-supported',
    context,
  });

  const nodeName = element.nodeName.toLowerCase();
  return Boolean(disabledElementsPattern.test(nodeName));
}


/***/ }),

/***/ "./node_modules/ally.js/src/is/only-tabbable.js":
/*!******************************************************!*\
  !*** ./node_modules/ally.js/src/is/only-tabbable.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visible */ "./node_modules/ally.js/src/is/visible.js");
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _util_get_frame_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/get-frame-element */ "./node_modules/ally.js/src/util/get-frame-element.js");
/* harmony import */ var _util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/tabindex-value */ "./node_modules/ally.js/src/util/tabindex-value.js");
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/platform */ "./node_modules/ally.js/src/util/platform.js");







function isOnlyTabbableRules({
  context,
  except = {
    onlyFocusableBrowsingContext: false,
    visible: false,
  },
} = {}) {
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_1__.default)({
    label: 'is/only-tabbable',
    resolveDocument: true,
    context,
  });

  if (!except.visible && !(0,_visible__WEBPACK_IMPORTED_MODULE_0__.default)(element)) {
    return false;
  }

  if (!except.onlyFocusableBrowsingContext && (_util_platform__WEBPACK_IMPORTED_MODULE_4__.default.is.GECKO || _util_platform__WEBPACK_IMPORTED_MODULE_4__.default.is.TRIDENT || _util_platform__WEBPACK_IMPORTED_MODULE_4__.default.is.EDGE)) {
    const frameElement = (0,_util_get_frame_element__WEBPACK_IMPORTED_MODULE_2__.default)(element);
    if (frameElement) {
      if ((0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__.default)(frameElement) < 0) {
        // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
        // tabbable demotion onto elements of their browsing contexts
        return false;
      }
    }
  }

  const nodeName = element.nodeName.toLowerCase();
  const tabindex = (0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__.default)(element);

  if (nodeName === 'label' && _util_platform__WEBPACK_IMPORTED_MODULE_4__.default.is.GECKO) {
    // Firefox cannot focus, but tab to: label[tabindex=0]
    return tabindex !== null && tabindex >= 0;
  }

  // SVG Elements were keyboard focusable but not script focusable before Firefox 51.
  // Firefox 51 added the focus management DOM API (.focus and .blur) to SVGElement,
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=778654
  if (_util_platform__WEBPACK_IMPORTED_MODULE_4__.default.is.GECKO && element.ownerSVGElement && !element.focus) {
    if (nodeName === 'a' && element.hasAttribute('xlink:href')) {
      // any focusable child of <svg> cannot be focused, but tabbed to
      if (_util_platform__WEBPACK_IMPORTED_MODULE_4__.default.is.GECKO) {
        return true;
      }
    }
  }

  return false;
}

// bind exceptions to an iterator callback
isOnlyTabbableRules.except = function(except = {}) {
  const isOnlyTabbable = function(context) {
    return isOnlyTabbableRules({
      context,
      except,
    });
  };

  isOnlyTabbable.rules = isOnlyTabbableRules;
  return isOnlyTabbable;
};

// provide isOnlyTabbable(context) as default iterator callback
const isOnlyTabbable = isOnlyTabbableRules.except({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isOnlyTabbable);


/***/ }),

/***/ "./node_modules/ally.js/src/is/tabbable.js":
/*!*************************************************!*\
  !*** ./node_modules/ally.js/src/is/tabbable.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visible */ "./node_modules/ally.js/src/is/visible.js");
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _util_element_matches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/element-matches */ "./node_modules/ally.js/src/util/element-matches.js");
/* harmony import */ var _util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/tabindex-value */ "./node_modules/ally.js/src/util/tabindex-value.js");
/* harmony import */ var _focus_relevant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./focus-relevant */ "./node_modules/ally.js/src/is/focus-relevant.js");
/* harmony import */ var _util_get_frame_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/get-frame-element */ "./node_modules/ally.js/src/util/get-frame-element.js");
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/platform */ "./node_modules/ally.js/src/util/platform.js");
/* harmony import */ var _util_image_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/image-map */ "./node_modules/ally.js/src/util/image-map.js");
/* harmony import */ var _is_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is.util */ "./node_modules/ally.js/src/is/is.util.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../supports/supports */ "./node_modules/ally.js/src/supports/supports.js");

// determine if an element can be focused by keyboard (i.e. is part of the document's sequential focus navigation order)












let supports;

// Internet Explorer 11 considers fieldset, table, td focusable, but not tabbable
// Internet Explorer 11 considers body to have [tabindex=0], but does not allow tabbing to it
const focusableElementsPattern = /^(fieldset|table|td|body)$/;

function isTabbableRules({
  context,
  except = {
    flexbox: false,
    scrollable: false,
    shadow: false,
    visible: false,
    onlyTabbable: false,
  },
} = {}) {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_9__.default)();
  }

  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_1__.default)({
    label: 'is/tabbable',
    resolveDocument: true,
    context,
  });

  if (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.BLINK && _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.ANDROID && _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.majorVersion > 42) {
    // External keyboard support worked fine in CHrome 42, but stopped working in Chrome 45.
    // The on-screen keyboard does not provide a way to focus the next input element (like iOS does).
    // That leaves us with no option to advance focus by keyboard, ergo nothing is tabbable (keyboard focusable).
    return false;
  }

  const frameElement = (0,_util_get_frame_element__WEBPACK_IMPORTED_MODULE_5__.default)(element);
  if (frameElement) {
    if (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.WEBKIT && _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.IOS) {
      // iOS only does not consider anything from another browsing context keyboard focusable
      return false;
    }

    // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
    // tabbable demotion onto elements of their browsing contexts
    if ((0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__.default)(frameElement) < 0) {
      return false;
    }

    if (!except.visible && (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.BLINK || _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.WEBKIT) && !(0,_visible__WEBPACK_IMPORTED_MODULE_0__.default)(frameElement)) {
      // Blink and WebKit consider elements in hidden browsing contexts focusable, but not tabbable
      return false;
    }

    // Webkit and Blink don't consider anything in <object> tabbable
    // Blink fixed that fixed in Chrome 54, Opera 41
    const frameNodeName = frameElement.nodeName.toLowerCase();
    if (frameNodeName === 'object') {
      const isFixedBlink = (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.name === 'Chrome' && _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.majorVersion >= 54)
        || (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.name === 'Opera' && _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.majorVersion >= 41);

      if (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.WEBKIT || (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.BLINK && !isFixedBlink)) {
        return false;
      }
    }
  }

  const nodeName = element.nodeName.toLowerCase();
  const _tabindex = (0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__.default)(element);
  const tabindex = _tabindex === null ? null : _tabindex >= 0;

  if (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.EDGE && _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.majorVersion >= 14 && frameElement && element.ownerSVGElement && _tabindex < 0) {
    // Edge 14+ considers <a xlink:href="…" tabindex="-1"> keyboard focusable
    // if the element is in a nested browsing context
    return true;
  }

  const hasTabbableTabindexOrNone = tabindex !== false;
  const hasTabbableTabindex = _tabindex !== null && _tabindex >= 0;

  // NOTE: Firefox 31 considers [contenteditable] to have [tabindex=-1], but allows tabbing to it
  // fixed in Firefox 40 the latest - https://bugzilla.mozilla.org/show_bug.cgi?id=1185657
  if (element.hasAttribute('contenteditable')) {
    // tabbing can still be disabled by explicitly providing [tabindex="-1"]
    return hasTabbableTabindexOrNone;
  }

  if (focusableElementsPattern.test(nodeName) && tabindex !== true) {
    return false;
  }

  if (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.WEBKIT && _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.IOS) {
    // iOS only considers a hand full of elements tabbable (keyboard focusable)
    // this holds true even with external keyboards
    let potentiallyTabbable = (nodeName === 'input' && element.type === 'text' || element.type === 'password')
      || nodeName === 'select'
      || nodeName === 'textarea'
      || element.hasAttribute('contenteditable');

    if (!potentiallyTabbable) {
      const style = window.getComputedStyle(element, null);
      potentiallyTabbable = (0,_is_util__WEBPACK_IMPORTED_MODULE_8__.isUserModifyWritable)(style);
    }

    if (!potentiallyTabbable) {
      return false;
    }
  }

  if (nodeName === 'use' && _tabindex !== null) {
    if (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.BLINK || _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.WEBKIT && _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.majorVersion === 9) {
      // In Chrome and Safari 9 the <use> element is keyboard focusable even for tabindex="-1"
      return true;
    }
  }

  if ((0,_util_element_matches__WEBPACK_IMPORTED_MODULE_2__.default)(element, 'svg a') && element.hasAttribute('xlink:href')) {
    if (hasTabbableTabindexOrNone) {
      // in Trident and Gecko SVGElement does not handle the tabIndex property properly
      return true;
    }

    if (element.focus && !supports.focusSvgNegativeTabindexAttribute) {
      // Firefox 51 and 52 treat any natively tabbable SVG element with
      // tabindex="-1" as tabbable and everything else as inert
      // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
      return true;
    }
  }

  if (nodeName === 'svg' && supports.focusSvgInIframe && hasTabbableTabindexOrNone) {
    return true;
  }

  if (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.TRIDENT || _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.EDGE) {
    if (nodeName === 'svg') {
      if (supports.focusSvg) {
        // older Internet Explorers consider <svg> keyboard focusable
        // unless they have focsable="false", but then they wouldn't
        // be focusable and thus not even reach this filter
        return true;
      }

      // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
      return element.hasAttribute('focusable') || hasTabbableTabindex;
    }

    if (element.ownerSVGElement) {
      if (supports.focusSvgTabindexAttribute && hasTabbableTabindex) {
        return true;
      }

      // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
      return element.hasAttribute('focusable');
    }
  }
  if (element.tabIndex === undefined) {
    return Boolean(except.onlyTabbable);
  }

  if (nodeName === 'audio') {
    if (!element.hasAttribute('controls')) {
      // In Internet Explorer the <audio> element is focusable, but not tabbable, and tabIndex property is wrong
      return false;
    } else if (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.BLINK) {
      // In Chrome <audio controls tabindex="-1"> remains keyboard focusable
      return true;
    }
  }

  if (nodeName === 'video') {
    if (!element.hasAttribute('controls')) {
      if (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.TRIDENT || _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.EDGE) {
        // In Internet Explorer and Edge the <video> element is focusable, but not tabbable, and tabIndex property is wrong
        return false;
      }
    } else if (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.BLINK || _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.GECKO) {
      // In Chrome and Firefox <video controls tabindex="-1"> remains keyboard focusable
      return true;
    }
  }

  if (nodeName === 'object') {
    if (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.BLINK || _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.WEBKIT) {
      // In all Blink and WebKit based browsers <embed> and <object> are never keyboard focusable, even with tabindex="0" set
      return false;
    }
  }

  if (nodeName === 'iframe') {
    // In Internet Explorer all iframes are only focusable
    // In WebKit, Blink and Gecko iframes may be tabbable depending on content.
    // Since we can't reliably investigate iframe documents because of the
    // SameOriginPolicy, we're declaring everything only focusable.
    return false;
  }

  if (!except.scrollable && _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.GECKO) {
    // Firefox considers scrollable containers keyboard focusable,
    // even though their tabIndex property is -1
    const style = window.getComputedStyle(element, null);
    if ((0,_is_util__WEBPACK_IMPORTED_MODULE_8__.hasCssOverflowScroll)(style)) {
      return hasTabbableTabindexOrNone;
    }
  }

  if (_util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.TRIDENT || _util_platform__WEBPACK_IMPORTED_MODULE_6__.default.is.EDGE) {
    // IE and Edge degrade <area> to script focusable, if the image
    // using the <map> has been given tabindex="-1"
    if (nodeName === 'area') {
      const img = (0,_util_image_map__WEBPACK_IMPORTED_MODULE_7__.getImageOfArea)(element);
      if (img && (0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_3__.default)(img) < 0) {
        return false;
      }
    }

    const style = window.getComputedStyle(element, null);
    if ((0,_is_util__WEBPACK_IMPORTED_MODULE_8__.isUserModifyWritable)(style)) {
      // prevent being swallowed by the overzealous isScrollableContainer() below
      return element.tabIndex >= 0;
    }

    if (!except.flexbox && (0,_is_util__WEBPACK_IMPORTED_MODULE_8__.hasCssDisplayFlex)(style)) {
      if (_tabindex !== null) {
        return hasTabbableTabindex;
      }

      return isFocusRelevantWithoutFlexbox(element) && isTabbableWithoutFlexbox(element);
    }

    // IE considers scrollable containers script focusable only,
    // even though their tabIndex property is 0
    if ((0,_is_util__WEBPACK_IMPORTED_MODULE_8__.isScrollableContainer)(element, nodeName)) {
      return false;
    }

    const parent = element.parentElement;
    if (parent) {
      const parentNodeName = parent.nodeName.toLowerCase();
      const parentStyle = window.getComputedStyle(parent, null);
      // IE considers scrollable bodies script focusable only,
      if ((0,_is_util__WEBPACK_IMPORTED_MODULE_8__.isScrollableContainer)(parent, nodeName, parentNodeName, parentStyle)) {
        return false;
      }

      // Children of focusable elements with display:flex are focusable in IE10-11,
      // even though their tabIndex property suggests otherwise
      if ((0,_is_util__WEBPACK_IMPORTED_MODULE_8__.hasCssDisplayFlex)(parentStyle)) {
        // value of tabindex takes precedence
        return hasTabbableTabindex;
      }
    }
  }

  // https://www.w3.org/WAI/PF/aria-practices/#focus_tabindex
  return element.tabIndex >= 0;
}

// bind exceptions to an iterator callback
isTabbableRules.except = function(except = {}) {
  const isTabbable = function(context) {
    return isTabbableRules({
      context,
      except,
    });
  };

  isTabbable.rules = isTabbableRules;
  return isTabbable;
};

const isFocusRelevantWithoutFlexbox = _focus_relevant__WEBPACK_IMPORTED_MODULE_4__.default.rules.except({flexbox: true});
const isTabbableWithoutFlexbox = isTabbableRules.except({flexbox: true});

// provide isTabbable(context) as default iterator callback
const isTabbable = isTabbableRules.except({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTabbable);


/***/ }),

/***/ "./node_modules/ally.js/src/is/valid-area.js":
/*!***************************************************!*\
  !*** ./node_modules/ally.js/src/is/valid-area.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visible */ "./node_modules/ally.js/src/is/visible.js");
/* harmony import */ var _get_parents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get/parents */ "./node_modules/ally.js/src/get/parents.js");
/* harmony import */ var _util_image_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/image-map */ "./node_modules/ally.js/src/util/image-map.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../supports/supports */ "./node_modules/ally.js/src/supports/supports.js");

// determine if an <area> element is being properly used by and <img> via a <map>







let supports;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
// https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L88-L107
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_4__.default)();
  }

  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__.default)({
    label: 'is/valid-area',
    context,
  });

  const nodeName = element.nodeName.toLowerCase();
  if (nodeName !== 'area') {
    return false;
  }

  const hasTabindex = element.hasAttribute('tabindex');
  if (!supports.focusAreaTabindex && hasTabindex) {
    // Blink and WebKit do not consider <area tabindex="-1" href="#void"> focusable
    return false;
  }

  const img = (0,_util_image_map__WEBPACK_IMPORTED_MODULE_3__.getImageOfArea)(element);
  if (!img || !(0,_visible__WEBPACK_IMPORTED_MODULE_1__.default)(img)) {
    return false;
  }

  // Firefox only allows fully loaded images to reference image maps
  // https://stereochro.me/ideas/detecting-broken-images-js
  if (!supports.focusBrokenImageMap && (!img.complete || !img.naturalHeight || img.offsetWidth <= 0 || img.offsetHeight <= 0)) {
    return false;
  }

  // Firefox supports.can focus area elements even if they don't have an href attribute
  if (!supports.focusAreaWithoutHref && !element.href) {
    // Internet explorer supports.can focus area elements without href if either
    // the area element or the image element has a tabindex attribute
    return supports.focusAreaTabindex && hasTabindex || supports.focusAreaImgTabindex && img.hasAttribute('tabindex');
  }

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
  const childOfInteractive = (0,_get_parents__WEBPACK_IMPORTED_MODULE_2__.default)({context: img}).slice(1).some(function(_element) {
    const name = _element.nodeName.toLowerCase();
    return name === 'button' || name === 'a';
  });

  if (childOfInteractive) {
    return false;
  }

  return true;
}


/***/ }),

/***/ "./node_modules/ally.js/src/is/valid-tabindex.js":
/*!*******************************************************!*\
  !*** ./node_modules/ally.js/src/is/valid-tabindex.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supports/supports */ "./node_modules/ally.js/src/supports/supports.js");

// determine if an element's tabindex attribute has a valid value



let supports;

// https://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
// NOTE: all browsers agree to allow trailing spaces as well
const validIntegerPatternNoTrailing = /^\s*(-|\+)?[0-9]+\s*$/;
const validIntegerPatternWithTrailing = /^\s*(-|\+)?[0-9]+.*$/;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_1__.default)();
  }

  const validIntegerPattern = supports.focusTabindexTrailingCharacters
    ? validIntegerPatternWithTrailing
    : validIntegerPatternNoTrailing;

  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__.default)({
    label: 'is/valid-tabindex',
    resolveDocument: true,
    context,
  });

  // Edge 14 has a capitalization problem on SVG elements,
  // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
  const hasTabindex = element.hasAttribute('tabindex');
  const hasTabIndex = element.hasAttribute('tabIndex');

  if (!hasTabindex && !hasTabIndex) {
    return false;
  }

  // older Firefox and Internet Explorer don't support tabindex on SVG elements
  const isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
  if (isSvgElement && !supports.focusSvgTabindexAttribute) {
    return false;
  }

  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  if (supports.focusInvalidTabindex) {
    return true;
  }

  // an element matches the tabindex selector even if its value is invalid
  const tabindex = element.getAttribute(hasTabindex ? 'tabindex' : 'tabIndex');
  // IE11 parses tabindex="" as the value "-32768"
  // @browser-issue Trident https://connect.microsoft.com/IE/feedback/details/1072965
  if (tabindex === '-32768') {
    return false;
  }

  return Boolean(tabindex && validIntegerPattern.test(tabindex));
}


/***/ }),

/***/ "./node_modules/ally.js/src/is/visible.js":
/*!************************************************!*\
  !*** ./node_modules/ally.js/src/is/visible.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/array-find-index */ "./node_modules/ally.js/src/util/array-find-index.js");
/* harmony import */ var _get_parents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get/parents */ "./node_modules/ally.js/src/get/parents.js");
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _util_get_frame_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/get-frame-element */ "./node_modules/ally.js/src/util/get-frame-element.js");

// determine if an element is rendered
// NOTE: that does not mean an element is visible in the viewport, see util/visible-area






// https://www.w3.org/TR/html5/rendering.html#being-rendered
// <area> is not rendered, but we *consider* it visible to simplfiy this function's usage
const notRenderedElementsPattern = /^(area)$/;

function computedStyle(element, property) {
  return window.getComputedStyle(element, null)
    .getPropertyValue(property);
}

function notDisplayed(_path) {
  return _path.some(function(element) {
    // display:none is not visible (optimized away at layout)
    return computedStyle(element, 'display') === 'none';
  });
}

function notVisible(_path) {
  // https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L109-L114
  // NOTE: a nested element can reverse visibility:hidden|collapse by explicitly setting visibility:visible
  // NOTE: visibility can be ["", "visible", "hidden", "collapse"]
  const hidden = (0,_util_array_find_index__WEBPACK_IMPORTED_MODULE_0__.default)(_path, function(element) {
    const visibility = computedStyle(element, 'visibility');
    return visibility === 'hidden' || visibility === 'collapse';
  });

  if (hidden === -1) {
    // there is no hidden element
    return false;
  }

  const visible = (0,_util_array_find_index__WEBPACK_IMPORTED_MODULE_0__.default)(_path, function(element) {
    return computedStyle(element, 'visibility') === 'visible';
  });

  if (visible === -1) {
    // there is no visible element (but a hidden element)
    return true;
  }

  if (hidden < visible) {
    // there is a hidden element and it's closer than the first visible element
    return true;
  }

  // there may be a hidden element, but the closest element is visible
  return false;
}

function collapsedParent(_path) {
  let offset = 1;
  if (_path[0].nodeName.toLowerCase() === 'summary') {
    offset = 2;
  }

  return _path.slice(offset).some(function(element) {
    // "content children" of a closed details element are not visible
    return element.nodeName.toLowerCase() === 'details' && element.open === false;
  });
}

function isVisibleRules({
  context,
  except = {
    notRendered: false,
    cssDisplay: false,
    cssVisibility: false,
    detailsElement: false,
    browsingContext: false,
  },
} = {}) {
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_2__.default)({
    label: 'is/visible',
    resolveDocument: true,
    context,
  });

  const nodeName = element.nodeName.toLowerCase();
  if (!except.notRendered && notRenderedElementsPattern.test(nodeName)) {
    return true;
  }

  const _path = (0,_get_parents__WEBPACK_IMPORTED_MODULE_1__.default)({context: element});

  // in Internet Explorer <audio> has a default display: none, where others have display: inline
  // but IE allows focusing <audio style="display:none">, but not <div display:none><audio>
  // this is irrelevant to other browsers, as the controls attribute is required to make <audio> focusable
  const isAudioWithoutControls = nodeName === 'audio' && !element.hasAttribute('controls');
  if (!except.cssDisplay && notDisplayed(isAudioWithoutControls ? _path.slice(1) : _path)) {
    return false;
  }

  if (!except.cssVisibility && notVisible(_path)) {
    return false;
  }

  if (!except.detailsElement && collapsedParent(_path)) {
    return false;
  }

  if (!except.browsingContext) {
    // elements within a browsing context are affected by the
    // browsing context host element's visibility and tabindex
    const frameElement = (0,_util_get_frame_element__WEBPACK_IMPORTED_MODULE_3__.default)(element);
    const _isVisible = isVisibleRules.except(except);
    if (frameElement && !_isVisible(frameElement)) {
      return false;
    }
  }

  return true;
}

// bind exceptions to an iterator callback
isVisibleRules.except = function(except = {}) {
  const isVisible = function(context) {
    return isVisibleRules({
      context,
      except,
    });
  };

  isVisible.rules = isVisibleRules;
  return isVisible;
};

// provide isVisible(context) as default iterator callback
const isVisible = isVisibleRules.except({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isVisible);


/***/ }),

/***/ "./node_modules/ally.js/src/maintain/tab-focus.js":
/*!********************************************************!*\
  !*** ./node_modules/ally.js/src/maintain/tab-focus.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _is_active_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is/active-element */ "./node_modules/ally.js/src/is/active-element.js");
/* harmony import */ var _query_tabsequence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../query/tabsequence */ "./node_modules/ally.js/src/query/tabsequence.js");
/* harmony import */ var _when_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../when/key */ "./node_modules/ally.js/src/when/key.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({ context } = {}) {
  if (!context) {
    context = document.documentElement;
  }

  // Make sure the supports tests are run before intercepting the Tab key,
  // or IE10 and IE11 will fail to process the first Tab key event. Not
  // limiting this warm-up to IE because it may be a problem elsewhere, too.
  (0,_query_tabsequence__WEBPACK_IMPORTED_MODULE_1__.default)();

  return (0,_when_key__WEBPACK_IMPORTED_MODULE_2__.default)({
    // Safari on OSX may require ALT+TAB to reach links,
    // see https://github.com/medialize/ally.js/issues/146
    '?alt+?shift+tab': function(event) {
      // we're completely taking over the Tab key handling
      event.preventDefault();

      const sequence = (0,_query_tabsequence__WEBPACK_IMPORTED_MODULE_1__.default)({
        context,
      });

      const backward = event.shiftKey;
      const first = sequence[0];
      const last = sequence[sequence.length - 1];

      // wrap around first to last, last to first
      const source = backward ? first : last;
      const target = backward ? last : first;
      if ((0,_is_active_element__WEBPACK_IMPORTED_MODULE_0__.default)(source)) {
        target.focus();
        return;
      }

      // find current position in tabsequence
      let currentIndex;
      const found = sequence.some(function(element, index) {
        if (!(0,_is_active_element__WEBPACK_IMPORTED_MODULE_0__.default)(element)) {
          return false;
        }

        currentIndex = index;
        return true;
      });

      if (!found) {
        // redirect to first as we're not in our tabsequence
        first.focus();
        return;
      }

      // shift focus to previous/next element in the sequence
      const offset = backward ? -1 : 1;
      sequence[currentIndex + offset].focus();
    },
  });
}


/***/ }),

/***/ "./node_modules/ally.js/src/map/keycode.js":
/*!*************************************************!*\
  !*** ./node_modules/ally.js/src/map/keycode.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// codes mostly cloned from https://github.com/keithamus/jwerty/blob/master/jwerty.js
// deliberately not exposing characters like <,.-#* because they vary *wildly*
// across keyboard layouts and may cause various problems
// (e.g. "*" is "Shift +" on a German Mac keyboard)
// (e.g. "@" is "Alt L" on a German Mac keyboard)

const keycode = {
  // Element Focus
  tab: 9,

  // Navigation
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  pageUp: 33,
  'page-up': 33,
  pageDown: 34,
  'page-down': 34,
  end: 35,
  home: 36,

  // Action
  enter: 13,
  escape: 27,
  space: 32,

  // Modifier
  shift: 16,
  capsLock: 20,
  'caps-lock': 20,
  ctrl: 17,
  alt: 18,
  meta: 91,
  // in firefox: 224
  // on mac (chrome): meta-left=91, meta-right=93
  // on win (IE11): meta-left=91, meta-right=92
  pause: 19,

  // Content Manipulation
  insert: 45,
  'delete': 46,
  backspace: 8,

  // the same logical key may be identified through different keyCodes
  _alias: {
    91: [92, 93, 224],
  },
};

// Function keys (112 - 137)
// NOTE: not every keyboard knows F13+
for (let n = 1; n < 26; n++) {
  keycode['f' + n] = n + 111;
}

// Number keys (48-57, numpad 96-105)
// NOTE: not every keyboard knows num-0+
for (let n = 0; n < 10; n++) {
  const code = n + 48;
  const numCode = n + 96;
  keycode[n] = code;
  keycode['num-' + n] = numCode;
  keycode._alias[code] = [numCode];
}

// Latin characters (65 - 90)
for (let n = 0; n < 26; n++) {
  const code = n + 65;
  const name = String.fromCharCode(code).toLowerCase();
  keycode[name] = code;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keycode);


/***/ }),

/***/ "./node_modules/ally.js/src/prototype/window.requestanimationframe.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ally.js/src/prototype/window.requestanimationframe.js ***!
  \****************************************************************************/
/***/ (() => {


// Polyfill requestAnimationFrame for oldIE
// adapted from https://gist.github.com/paulirish/1579671
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// original source was published under the MIT license
// https://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

typeof window !== 'undefined' && (function() {
  let lastTime = 0;
  const vendors = ['ms', 'moz', 'webkit', 'o'];
  let requestAnimationFrameName = '';
  let cancelAnimationFrameName = '';

  for (let x = 0, length = vendors.length; x < length; ++x) {
    requestAnimationFrameName = window[vendors[x] + 'RequestAnimationFrame'];
    cancelAnimationFrameName = window[vendors[x] + 'CancelAnimationFrame']
      || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (typeof window.requestAnimationFrame !== 'function') {
    window.requestAnimationFrame = window[requestAnimationFrameName] || function(callback) {
      const currTime = new Date().getTime();
      const timeToCall = Math.max(0, 16 - (currTime - lastTime));
      const id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);

      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (typeof window.cancelAnimationFrame !== 'function') {
    window.cancelAnimationFrame = window[cancelAnimationFrameName] || function(id) {
      clearTimeout(id);
    };
  }
})();


/***/ }),

/***/ "./node_modules/ally.js/src/query/first-tabbable.js":
/*!**********************************************************!*\
  !*** ./node_modules/ally.js/src/query/first-tabbable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/array-find-index */ "./node_modules/ally.js/src/util/array-find-index.js");
/* harmony import */ var _tabbable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabbable */ "./node_modules/ally.js/src/query/tabbable.js");
/* harmony import */ var _is_focusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../is/focusable */ "./node_modules/ally.js/src/is/focusable.js");
/* harmony import */ var _util_node_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/node-array */ "./node_modules/ally.js/src/util/node-array.js");

/*
    query/firstTabbable() finds the first suitable element to receive focus in the given context.
    If an element has [autofocus] return that element, otherwise return the first element
    in document order that does *not* have a positive tabIndex (e.g. as [tabindex="1"]),
    otherwise return the context itself, if it is focusable.

    Note: Chrome's <dialog> will focus the first tabbable element, even if it has
    [tabindex="1"]. Since [tabindex="1"] is considered
    bad practice we'll ignore it until someone complains.
 */






function hasAutofocus(element) {
  // [autofocus] actually only works on form element, but who cares?
  return element.hasAttribute('autofocus');
}

function hasNoPositiveTabindex(element) {
  return element.tabIndex <= 0;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  context,
  sequence,
  strategy,
  ignoreAutofocus,
  defaultToContext,
  includeOnlyTabbable,
} = {}) {
  let index = -1;

  if (!sequence) {
    context = (0,_util_node_array__WEBPACK_IMPORTED_MODULE_3__.default)(context || document.body)[0];
    sequence = (0,_tabbable__WEBPACK_IMPORTED_MODULE_1__.default)({
      context,
      includeOnlyTabbable,
      strategy,
    });
  }

  if (sequence.length && !ignoreAutofocus) {
    // prefer [autofocus]
    index = (0,_util_array_find_index__WEBPACK_IMPORTED_MODULE_0__.default)(sequence, hasAutofocus);
  }

  if (sequence.length && index === -1) {
    // ignore positive [tabindex]
    index = (0,_util_array_find_index__WEBPACK_IMPORTED_MODULE_0__.default)(sequence, hasNoPositiveTabindex);
  }

  const _isFocusable = _is_focusable__WEBPACK_IMPORTED_MODULE_2__.default.rules.except({
    onlyTabbable: includeOnlyTabbable,
  });

  if (index === -1 && defaultToContext && context && _isFocusable(context)) {
    return context;
  }

  return sequence[index] || null;
}


/***/ }),

/***/ "./node_modules/ally.js/src/query/focusable.js":
/*!*****************************************************!*\
  !*** ./node_modules/ally.js/src/query/focusable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");
/* harmony import */ var _focusable_strict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusable.strict */ "./node_modules/ally.js/src/query/focusable.strict.js");
/* harmony import */ var _focusable_quick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusable.quick */ "./node_modules/ally.js/src/query/focusable.quick.js");

// https://www.w3.org/TR/html5/editing.html#focusable
// https://www.w3.org/WAI/PF/aria-practices/#keyboard





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  context,
  includeContext,
  includeOnlyTabbable,
  strategy = 'quick',
} = {}) {
  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_0__.default)({
    label: 'query/focusable',
    resolveDocument: true,
    defaultToDocument: true,
    context,
  });

  const options = {
    context: element,
    includeContext,
    includeOnlyTabbable,
    strategy,
  };

  if (strategy === 'quick') {
    return (0,_focusable_quick__WEBPACK_IMPORTED_MODULE_2__.default)(options);
  } else if (strategy === 'strict' || strategy === 'all') {
    return (0,_focusable_strict__WEBPACK_IMPORTED_MODULE_1__.default)(options);
  }

  throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]');
}


/***/ }),

/***/ "./node_modules/ally.js/src/query/focusable.quick.js":
/*!***********************************************************!*\
  !*** ./node_modules/ally.js/src/query/focusable.quick.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ queryFocusableQuick
/* harmony export */ });
/* harmony import */ var _selector_focusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selector/focusable */ "./node_modules/ally.js/src/selector/focusable.js");
/* harmony import */ var _is_focusable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is/focusable */ "./node_modules/ally.js/src/is/focusable.js");

// https://www.w3.org/TR/html5/editing.html#focusable
// https://www.w3.org/WAI/PF/aria-practices/#keyboard




function queryFocusableQuick({
  context,
  includeContext,
  includeOnlyTabbable,
} = {}) {
  const _selector = (0,_selector_focusable__WEBPACK_IMPORTED_MODULE_0__.default)();
  const elements = context.querySelectorAll(_selector);
  // the selector potentially matches more than really is focusable

  const _isFocusable = _is_focusable__WEBPACK_IMPORTED_MODULE_1__.default.rules.except({
    onlyTabbable: includeOnlyTabbable,
  });

  const result = [].filter.call(elements, _isFocusable);

  // add context if requested and focusable
  if (includeContext && _isFocusable(context)) {
    result.unshift(context);
  }

  return result;
}


/***/ }),

/***/ "./node_modules/ally.js/src/query/focusable.strict.js":
/*!************************************************************!*\
  !*** ./node_modules/ally.js/src/query/focusable.strict.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ queryFocusableStrict
/* harmony export */ });
/* harmony import */ var _is_focusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is/focusable */ "./node_modules/ally.js/src/is/focusable.js");
/* harmony import */ var _is_focus_relevant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is/focus-relevant */ "./node_modules/ally.js/src/is/focus-relevant.js");
/* harmony import */ var _util_get_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/get-document */ "./node_modules/ally.js/src/util/get-document.js");

// https://www.w3.org/TR/html5/editing.html#focusable
// https://www.w3.org/WAI/PF/aria-practices/#keyboard





function createFilter(condition) {
  // see https://developer.mozilla.org/en-US/docs/Web/API/NodeFilter
  const filter = function(node) {
    if (node.shadowRoot) {
      // return ShadowRoot elements regardless of them being focusable,
      // so they can be walked recursively later
      return NodeFilter.FILTER_ACCEPT;
    }

    if (condition(node)) {
      // finds elements that could have been found by document.querySelectorAll()
      return NodeFilter.FILTER_ACCEPT;
    }

    return NodeFilter.FILTER_SKIP;
  };
  // IE requires a function, Browsers require {acceptNode: function}
  // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
  filter.acceptNode = filter;
  return filter;
}

const PossiblyFocusableFilter = createFilter(_is_focus_relevant__WEBPACK_IMPORTED_MODULE_1__.default);

function queryFocusableStrict({
  context,
  includeContext,
  includeOnlyTabbable,
  strategy,
} = {}) {
  if (!context) {
    context = document.documentElement;
  }

  const _isFocusable = _is_focusable__WEBPACK_IMPORTED_MODULE_0__.default.rules.except({
    onlyTabbable: includeOnlyTabbable,
  });

  const _document = (0,_util_get_document__WEBPACK_IMPORTED_MODULE_2__.default)(context);
  // see https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
  const walker = _document.createTreeWalker(
    // root element to start search in
    context,
    // element type filter
    NodeFilter.SHOW_ELEMENT,
    // custom NodeFilter filter
    strategy === 'all' ? PossiblyFocusableFilter : createFilter(_isFocusable),
    // deprecated, but IE requires it
    false
  );

  let list = [];

  while (walker.nextNode()) {
    if (walker.currentNode.shadowRoot) {
      if (_isFocusable(walker.currentNode)) {
        list.push(walker.currentNode);
      }

      list = list.concat(queryFocusableStrict({
        context: walker.currentNode.shadowRoot,
        includeOnlyTabbable,
        strategy,
      }));
    } else {
      list.push(walker.currentNode);
    }
  }

  // add context if requested and focusable
  if (includeContext) {
    if (strategy === 'all') {
      if ((0,_is_focus_relevant__WEBPACK_IMPORTED_MODULE_1__.default)(context)) {
        list.unshift(context);
      }
    } else if (_isFocusable(context)) {
      list.unshift(context);
    }
  }

  return list;
}


/***/ }),

/***/ "./node_modules/ally.js/src/query/tabbable.js":
/*!****************************************************!*\
  !*** ./node_modules/ally.js/src/query/tabbable.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _focusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focusable */ "./node_modules/ally.js/src/query/focusable.js");
/* harmony import */ var _is_tabbable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is/tabbable */ "./node_modules/ally.js/src/is/tabbable.js");

// https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
// https://www.w3.org/WAI/PF/aria-practices/#keyboard




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  context,
  includeContext,
  includeOnlyTabbable,
  strategy,
} = {}) {
  const _isTabbable = _is_tabbable__WEBPACK_IMPORTED_MODULE_1__.default.rules.except({
    onlyTabbable: includeOnlyTabbable,
  });

  return (0,_focusable__WEBPACK_IMPORTED_MODULE_0__.default)({
    context,
    includeContext,
    includeOnlyTabbable,
    strategy,
  }).filter(_isTabbable);
}


/***/ }),

/***/ "./node_modules/ally.js/src/query/tabsequence.js":
/*!*******************************************************!*\
  !*** ./node_modules/ally.js/src/query/tabsequence.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbable */ "./node_modules/ally.js/src/query/tabbable.js");
/* harmony import */ var _util_node_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/node-array */ "./node_modules/ally.js/src/util/node-array.js");
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/platform */ "./node_modules/ally.js/src/util/platform.js");
/* harmony import */ var _tabsequence_sort_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabsequence.sort-area */ "./node_modules/ally.js/src/query/tabsequence.sort-area.js");
/* harmony import */ var _tabsequence_sort_shadowed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabsequence.sort-shadowed */ "./node_modules/ally.js/src/query/tabsequence.sort-shadowed.js");
/* harmony import */ var _tabsequence_sort_tabindex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabsequence.sort-tabindex */ "./node_modules/ally.js/src/query/tabsequence.sort-tabindex.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../supports/supports */ "./node_modules/ally.js/src/supports/supports.js");

// https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
// https://www.w3.org/WAI/PF/aria-practices/#keyboard








let supports;

function moveContextToBeginning(elements, context) {
  const pos = elements.indexOf(context);
  if (pos > 0) {
    const tmp = elements.splice(pos, 1);
    return tmp.concat(elements);
  }

  return elements;
}

function sortElements(elements, _context) {
  if (supports.tabsequenceAreaAtImgPosition) {
    // Some browsers sort <area> in DOM order, some place the <area>s
    // where the <img> referecing them would've been in DOM order.
    // https://github.com/medialize/ally.js/issues/5
    elements = (0,_tabsequence_sort_area__WEBPACK_IMPORTED_MODULE_3__.default)(elements, _context);
  }

  elements = (0,_tabsequence_sort_tabindex__WEBPACK_IMPORTED_MODULE_5__.default)(elements);
  return elements;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  context,
  includeContext,
  includeOnlyTabbable,
  strategy,
} = {}) {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_6__.default)();
  }

  const _context = (0,_util_node_array__WEBPACK_IMPORTED_MODULE_1__.default)(context)[0] || document.documentElement;
  let elements = (0,_tabbable__WEBPACK_IMPORTED_MODULE_0__.default)({
    context: _context,
    includeContext,
    includeOnlyTabbable,
    strategy,
  });

  if (document.body.createShadowRoot && _util_platform__WEBPACK_IMPORTED_MODULE_2__.default.is.BLINK) {
    // sort tabindex localized to shadow dom
    // see https://github.com/medialize/ally.js/issues/6
    elements = (0,_tabsequence_sort_shadowed__WEBPACK_IMPORTED_MODULE_4__.default)(elements, _context, sortElements);
  } else {
    elements = sortElements(elements, _context);
  }

  if (includeContext) {
    // if we include the context itself, it has to be the first
    // element of the sequence
    elements = moveContextToBeginning(elements, _context);
  }

  return elements;
}


/***/ }),

/***/ "./node_modules/ally.js/src/query/tabsequence.sort-area.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ally.js/src/query/tabsequence.sort-area.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbable */ "./node_modules/ally.js/src/query/tabbable.js");
/* harmony import */ var _util_merge_dom_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/merge-dom-order */ "./node_modules/ally.js/src/util/merge-dom-order.js");
/* harmony import */ var _util_get_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/get-document */ "./node_modules/ally.js/src/util/get-document.js");
/* harmony import */ var _util_image_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/image-map */ "./node_modules/ally.js/src/util/image-map.js");

// move <area> elements to the location of the <img> elements that reference them






class Maps {
  constructor(context) {
    this._document = (0,_util_get_document__WEBPACK_IMPORTED_MODULE_2__.default)(context);
    this.maps = {};
  }

  getAreasFor(name) {
    if (!this.maps[name]) {
      // the map is not defined within the context, so we
      // have to go find it elsewhere in the document
      this.addMapByName(name);
    }

    return this.maps[name];
  }

  addMapByName(name) {
    const map = (0,_util_image_map__WEBPACK_IMPORTED_MODULE_3__.getMapByName)(name, this._document);
    if (!map) {
      // if there is no map, the img[usemap] wasn't doing anything anyway
      return;
    }

    this.maps[map.name] = (0,_tabbable__WEBPACK_IMPORTED_MODULE_0__.default)({context: map});
  }

  extractAreasFromList(elements) {
    // remove all <area> elements from the elements list,
    // but put them the map for later retrieval
    return elements.filter(function(element) {
      const nodeName = element.nodeName.toLowerCase();
      if (nodeName !== 'area') {
        return true;
      }

      const map = element.parentNode;
      if (!this.maps[map.name]) {
        this.maps[map.name] = [];
      }

      this.maps[map.name].push(element);
      return false;
    }, this);
  }
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(elements, context) {
  // images - unless they are focusable themselves, likely not
  // part of the elements list, so we'll have to find them and
  // sort them into the elements list manually
  const usemaps = context.querySelectorAll('img[usemap]');
  const maps = new Maps(context);

  // remove all <area> elements from the elements list,
  // but put them the map for later retrieval
  const _elements = maps.extractAreasFromList(elements);

  if (!usemaps.length) {
    // the context does not contain any <area>s so no need
    // to replace anything, just remove any maps
    return _elements;
  }

  return (0,_util_merge_dom_order__WEBPACK_IMPORTED_MODULE_1__.default)({
    list: _elements,
    elements: usemaps,
    resolveElement: function(image) {
      const name = image.getAttribute('usemap').slice(1);
      return maps.getAreasFor(name);
    },
  });
}


/***/ }),

/***/ "./node_modules/ally.js/src/query/tabsequence.sort-shadowed.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ally.js/src/query/tabsequence.sort-shadowed.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _get_shadow_host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get/shadow-host */ "./node_modules/ally.js/src/get/shadow-host.js");
/* harmony import */ var _util_merge_dom_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/merge-dom-order */ "./node_modules/ally.js/src/util/merge-dom-order.js");
/* harmony import */ var _util_tabindex_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/tabindex-value */ "./node_modules/ally.js/src/util/tabindex-value.js");





class Shadows {
  constructor(context, sortElements) {
    // document context we're working with
    this.context = context;
    // callback that sorts an array of elements
    this.sortElements = sortElements;
    // reference to create unique IDs for each ShadowHost
    this.hostCounter = 1;
    // reference map for child-ShadowHosts of a ShadowHost
    this.inHost = {};
    // reference map for child-ShadowHost of the document
    this.inDocument = [];
    // reference map for ShadowHosts
    this.hosts = {};
    // reference map for tabbable elements of a ShadowHost
    this.elements = {};
  }

  // remember which hosts we have to sort within later
  _registerHost(host) {
    if (host._sortingId) {
      return;
    }

    // make the ShadowHost identifiable (see cleanup() for undo)
    host._sortingId = 'shadow-' + (this.hostCounter++);
    this.hosts[host._sortingId] = host;

    // hosts may contain other hosts
    const parentHost = (0,_get_shadow_host__WEBPACK_IMPORTED_MODULE_0__.default)({context: host});
    if (parentHost) {
      this._registerHost(parentHost);
      this._registerHostParent(host, parentHost);
    } else {
      this.inDocument.push(host);
    }
  }

  // remember which host is the child of which other host
  _registerHostParent(host, parent) {
    if (!this.inHost[parent._sortingId]) {
      this.inHost[parent._sortingId] = [];
    }

    this.inHost[parent._sortingId].push(host);
  }

  // remember which elements a host contains
  _registerElement(element, host) {
    if (!this.elements[host._sortingId]) {
      this.elements[host._sortingId] = [];
    }

    this.elements[host._sortingId].push(element);
  }

  // remove shadowed elements from the sequence and register
  // the ShadowHosts they belong to so we know what to sort
  // later on
  extractElements(elements) {
    return elements.filter(function(element) {
      const host = (0,_get_shadow_host__WEBPACK_IMPORTED_MODULE_0__.default)({ context: element });
      if (!host) {
        return true;
      }

      this._registerHost(host);
      this._registerElement(element, host);
      return false;
    }, this);
  }

  // inject hosts into the sequence, sort everything,
  // and recoursively replace hosts by its descendants
  sort(elements) {
    let _elements = this._injectHosts(elements);
    _elements = this._replaceHosts(_elements);
    this._cleanup();
    return _elements;
  }

  // merge ShadowHosts into the element lists of other ShadowHosts
  // or the document, then sort the individual lists
  _injectHosts(elements) {
    Object.keys(this.hosts).forEach(function(_sortingId) {
      const _list = this.elements[_sortingId];
      const _elements = this.inHost[_sortingId];
      const _context = this.hosts[_sortingId].shadowRoot;
      this.elements[_sortingId] = this._merge(_list, _elements, _context);
    }, this);

    return this._merge(elements, this.inDocument, this.context);
  }

  _merge(list, elements, context) {
    const merged = (0,_util_merge_dom_order__WEBPACK_IMPORTED_MODULE_1__.default)({
      list,
      elements,
    });

    return this.sortElements(merged, context);
  }

  _replaceHosts(elements) {
    return (0,_util_merge_dom_order__WEBPACK_IMPORTED_MODULE_1__.default)({
      list: elements,
      elements: this.inDocument,
      resolveElement: this._resolveHostElement.bind(this),
    });
  }

  _resolveHostElement(host) {
    const merged = (0,_util_merge_dom_order__WEBPACK_IMPORTED_MODULE_1__.default)({
      list: this.elements[host._sortingId],
      elements: this.inHost[host._sortingId],
      resolveElement: this._resolveHostElement.bind(this),
    });

    const _tabindex = (0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_2__.default)(host);
    if (_tabindex !== null && _tabindex > -1) {
      return [host].concat(merged);
    }

    return merged;
  }

  _cleanup() {
    // remove those identifers we put on the ShadowHost to avoid using Map()
    Object.keys(this.hosts).forEach(function(key) {
      delete this.hosts[key]._sortingId;
    }, this);
  }
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(elements, context, sortElements) {
  const shadows = new Shadows(context, sortElements);
  const _elements = shadows.extractElements(elements);

  if (_elements.length === elements.length) {
    // no shadowed content found, no need to continue
    return sortElements(elements);
  }

  return shadows.sort(_elements);
}


/***/ }),

/***/ "./node_modules/ally.js/src/query/tabsequence.sort-tabindex.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ally.js/src/query/tabsequence.sort-tabindex.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_tabindex_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/tabindex-value */ "./node_modules/ally.js/src/util/tabindex-value.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(elements) {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.tabIndex
  // elements with tabIndex "0" (including tabbableElements without tabIndex) should be navigated in the order they appear.
  // elements with a positive tabIndex:
  //   Elements that have identical tabIndexes should be navigated in the order they appear.
  //   Navigation proceeds from the lowest tabIndex to the highest tabIndex.

  // NOTE: sort implementation may be unstable and thus mess up DOM order,
  // that's why we build a map that's being sorted instead. If we were able to rely
  // on a stable sorting algorithm, sortTabindex() could be as simple as
  // elements.sort(function(a, b) { return a.tabIndex - b.tabIndex; });
  // at this time Chrome does not use a stable sorting algorithm
  // see http://blog.rodneyrehm.de/archives/14-Sorting-Were-Doing-It-Wrong.html#stability

  // NOTE: compareDocumentPosition seemed like more overhead than just sorting this with buckets
  // https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition

  const map = {};
  const indexes = [];
  const normal = elements.filter(function(element) {
    // in Trident and Gecko SVGElement does not know about the tabIndex property
    let tabIndex = element.tabIndex;
    if (tabIndex === undefined) {
      tabIndex = (0,_util_tabindex_value__WEBPACK_IMPORTED_MODULE_0__.default)(element);
    }

    // extract elements that don't need sorting
    if (tabIndex <= 0 || tabIndex === null || tabIndex === undefined) {
      return true;
    }

    if (!map[tabIndex]) {
      // create sortable bucket for dom-order-preservation of elements with the same tabIndex
      map[tabIndex] = [];
      // maintain a list of unique tabIndexes
      indexes.push(tabIndex);
    }

    // sort element into the proper bucket
    map[tabIndex].push(element);
    // element moved to sorting map, so not "normal" anymore
    return false;
  });

  // sort the tabindex ascending,
  // then resolve them to their appropriate buckets,
  // then flatten the array of arrays to an array
  const _elements = indexes.sort().map(function(tabIndex) {
    return map[tabIndex];
  }).reduceRight(function(previous, current) {
    return current.concat(previous);
  }, normal);

  return _elements;
}


/***/ }),

/***/ "./node_modules/ally.js/src/selector/focusable.js":
/*!********************************************************!*\
  !*** ./node_modules/ally.js/src/selector/focusable.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_select_in_shadows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/select-in-shadows */ "./node_modules/ally.js/src/util/select-in-shadows.js");
/* harmony import */ var _supports_supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supports/supports */ "./node_modules/ally.js/src/supports/supports.js");
// NOTE: this selector MUST *never* be used directly,
// always go through query/focusable or is/focusable.js
// there are too many edge cases that they could be covered in
// a simple CSS selector…




let supports;

let selector;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (!supports) {
    supports = (0,_supports_supports__WEBPACK_IMPORTED_MODULE_1__.default)();
  }

  if (typeof selector === 'string') {
    return selector;
  }

  // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
  selector = ''
    // IE11 supports.can focus <table> and <td>
    + (supports.focusTable ? 'table, td,' : '')
    // IE11 supports.can focus <fieldset>
    + (supports.focusFieldset ? 'fieldset,' : '')
    // Namespace problems of [xlink:href] explained in https://stackoverflow.com/a/23047888/515124
    // svg a[*|href] does not match in IE9, but since we're filtering
    // through is/focusable we can include all <a> from SVG
    + 'svg a,'
    // may behave as 'svg, svg *,' in chrome as *every* svg element with a focus event listener is focusable
    // navigational elements
    + 'a[href],'
    // validity determined by is/valid-area.js
    + 'area[href],'
    // validity determined by is/disabled.js
    + 'input, select, textarea, button,'
    // browsing context containers
    + 'iframe, object, embed,'
    // interactive content
    + 'keygen,'
    + (supports.focusAudioWithoutControls ? 'audio,' : 'audio[controls],')
    + (supports.focusVideoWithoutControls ? 'video,' : 'video[controls],')
    + (supports.focusSummary ? 'summary,' : '')
    // validity determined by is/valid-tabindex.js
    + '[tabindex],'
    // editing hosts
    + '[contenteditable]';

  // where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
  selector = (0,_util_select_in_shadows__WEBPACK_IMPORTED_MODULE_0__.default)(selector);

  return selector;
}


/***/ }),

/***/ "./node_modules/ally.js/src/supports/css-shadow-piercing-deep-combinator.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/css-shadow-piercing-deep-combinator.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let combinator;

  // see https://dev.w3.org/csswg/css-scoping-1/#deep-combinator
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1117572
  // https://code.google.com/p/chromium/issues/detail?id=446051
  try {
    document.querySelector('html >>> :first-child');
    combinator = '>>>';
  } catch (noArrowArrowArrow) {
    try {
      // old syntax supported at least up to Chrome 41
      // https://code.google.com/p/chromium/issues/detail?id=446051
      document.querySelector('html /deep/ :first-child');
      combinator = '/deep/';
    } catch (noDeep) {
      combinator = '';
    }
  }

  return combinator;
}


/***/ }),

/***/ "./node_modules/ally.js/src/supports/detect-focus.js":
/*!***********************************************************!*\
  !*** ./node_modules/ally.js/src/supports/detect-focus.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/platform */ "./node_modules/ally.js/src/util/platform.js");



function before() {
  const data = {
    // remember what had focus to restore after test
    activeElement: document.activeElement,
    // remember scroll positions to restore after test
    windowScrollTop: window.scrollTop,
    windowScrollLeft: window.scrollLeft,
    bodyScrollTop: document.body.scrollTop,
    bodyScrollLeft: document.body.scrollLeft,
  };

  // wrap tests in an element hidden from screen readers to prevent them
  // from announcing focus, which can be quite irritating to the user
  const iframe = document.createElement('iframe');
  iframe.setAttribute('style', 'position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;');
  iframe.setAttribute('aria-live', 'off');
  iframe.setAttribute('aria-busy', 'true');
  iframe.setAttribute('aria-hidden', 'true');
  document.body.appendChild(iframe);

  const _window = iframe.contentWindow;
  const _document = _window.document;

  _document.open();
  _document.close();
  const wrapper = _document.createElement('div');
  _document.body.appendChild(wrapper);

  data.iframe = iframe;
  data.wrapper = wrapper;
  data.window = _window;
  data.document = _document;

  return data;
}

// options.element:
//  {string} element name
//  {function} callback(wrapper, document) to generate an element
// options.mutate: (optional)
//  {function} callback(element, wrapper, document) to manipulate element prior to focus-test.
//             Can return DOMElement to define focus target (default: element)
// options.validate: (optional)
//  {function} callback(element, focusTarget, document) to manipulate test-result
function test(data, options) {
  // make sure we operate on a clean slate
  data.wrapper.innerHTML = '';
  // create dummy element to test focusability of
  const element = typeof options.element === 'string'
    ? data.document.createElement(options.element)
    : options.element(data.wrapper, data.document);
  // allow callback to further specify dummy element
  // and optionally define element to focus
  let focus = options.mutate && options.mutate(element, data.wrapper, data.document);
  if (!focus && focus !== false) {
    focus = element;
  }
  // element needs to be part of the DOM to be focusable
  !element.parentNode && data.wrapper.appendChild(element);
  // test if the element with invalid tabindex can be focused
  focus && focus.focus && focus.focus();
  // validate test's result
  return options.validate
    ? options.validate(element, focus, data.document)
    : data.document.activeElement === focus;
}

function after(data) {
  // restore focus to what it was before test and cleanup
  if (data.activeElement === document.body) {
    document.activeElement && document.activeElement.blur && document.activeElement.blur();
    if (_util_platform__WEBPACK_IMPORTED_MODULE_0__.default.is.IE10) {
      // IE10 does not redirect focus to <body> when the activeElement is removed
      document.body.focus();
    }
  } else {
    data.activeElement && data.activeElement.focus && data.activeElement.focus();
  }

  document.body.removeChild(data.iframe);

  // restore scroll position
  window.scrollTop = data.windowScrollTop;
  window.scrollLeft = data.windowScrollLeft;
  document.body.scrollTop = data.bodyScrollTop;
  document.body.scrollLeft = data.bodyScrollLeft;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(tests) {
  const data = before();

  const results = {};
  Object.keys(tests).map(function(key) {
    results[key] = test(data, tests[key]);
  });

  after(data);
  return results;
}


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-area-img-tabindex.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-area-img-tabindex.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _media_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif */ "./node_modules/ally.js/src/supports/media/gif.js");



// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.innerHTML = '<map name="image-map-tabindex-test">'
      + '<area shape="rect" coords="63,19,144,45"></map>'
      + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + _media_gif__WEBPACK_IMPORTED_MODULE_0__.default + '">';

    return element.querySelector('area');
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-area-tabindex.js":
/*!******************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-area-tabindex.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _media_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif */ "./node_modules/ally.js/src/supports/media/gif.js");
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/platform */ "./node_modules/ally.js/src/util/platform.js");




// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.innerHTML = '<map name="image-map-tabindex-test">'
      + '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>'
      + '<img usemap="#image-map-tabindex-test" alt="" src="' + _media_gif__WEBPACK_IMPORTED_MODULE_0__.default + '">';

    return false;
  },
  validate: function(element, focusTarget, _document) {
    if (_util_platform__WEBPACK_IMPORTED_MODULE_1__.default.is.GECKO) {
      // fixes https://github.com/medialize/ally.js/issues/35
      // Firefox loads the DataURI asynchronously, causing a false-negative
      return true;
    }

    const focus = element.querySelector('area');
    focus.focus();
    return _document.activeElement === focus;
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-area-without-href.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-area-without-href.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _media_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif */ "./node_modules/ally.js/src/supports/media/gif.js");
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/platform */ "./node_modules/ally.js/src/util/platform.js");




// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.innerHTML = '<map name="image-map-area-href-test">'
      + '<area shape="rect" coords="63,19,144,45"></map>'
      + '<img usemap="#image-map-area-href-test" alt="" src="' + _media_gif__WEBPACK_IMPORTED_MODULE_0__.default + '">';

    return element.querySelector('area');
  },
  validate: function(element, focusTarget, _document) {
    if (_util_platform__WEBPACK_IMPORTED_MODULE_1__.default.is.GECKO) {
      // fixes https://github.com/medialize/ally.js/issues/35
      // Firefox loads the DataURI asynchronously, causing a false-negative
      return true;
    }

    return _document.activeElement === focusTarget;
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-audio-without-controls.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-audio-without-controls.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _media_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/mp3 */ "./node_modules/ally.js/src/supports/media/mp3.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'can-focus-audio-without-controls',
  element: 'audio',
  mutate: function(element) {
    try {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', _media_mp3__WEBPACK_IMPORTED_MODULE_0__.default);
    } catch (e) {
      // IE9 may throw "Error: Not implemented"
    }
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-broken-image-map.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-broken-image-map.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _media_gif_invalid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif.invalid */ "./node_modules/ally.js/src/supports/media/gif.invalid.js");



// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>'
      + '<img usemap="#broken-image-map-test" alt="" src="' + _media_gif_invalid__WEBPACK_IMPORTED_MODULE_0__.default + '">';

    return element.querySelector('area');
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-children-of-focusable-flexbox.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-children-of-focusable-flexbox.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// Children of focusable elements with display:flex are focusable in IE10-11
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.setAttribute('tabindex', '-1');
    element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
    element.innerHTML = '<span style="display: block;">hello</span>';
    return element.querySelector('span');
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-fieldset-disabled.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-fieldset-disabled.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// fieldset[tabindex=0][disabled] should not be focusable, but Blink and WebKit disagree
// @specification https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
// @browser-issue Chromium https://crbug.com/453847
// @browser-issue WebKit https://bugs.webkit.org/show_bug.cgi?id=141086
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'fieldset',
  mutate: function(element) {
    element.setAttribute('tabindex', 0);
    element.setAttribute('disabled', 'disabled');
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-fieldset.js":
/*!*************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-fieldset.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'fieldset',
  mutate: function(element) {
    element.innerHTML = '<legend>legend</legend><p>content</p>';
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-flexbox-container.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-flexbox-container.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// elements with display:flex are focusable in IE10-11
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'span',
  mutate: function(element) {
    element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
    element.innerHTML = '<span style="display: block;">hello</span>';
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-form-disabled.js":
/*!******************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-form-disabled.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// form[tabindex=0][disabled] should be focusable as the
// specification doesn't know the disabled attribute on the form element
// @specification https://www.w3.org/TR/html5/forms.html#the-form-element
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'form',
  mutate: function(element) {
    element.setAttribute('tabindex', 0);
    element.setAttribute('disabled', 'disabled');
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-img-ismap.js":
/*!**************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-img-ismap.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _media_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif */ "./node_modules/ally.js/src/supports/media/gif.js");



// NOTE: https://github.com/medialize/ally.js/issues/35
// fixes https://github.com/medialize/ally.js/issues/20
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-ismap
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'a',
  mutate: function(element) {
    element.href = '#void';
    element.innerHTML = '<img ismap src="' + _media_gif__WEBPACK_IMPORTED_MODULE_0__.default + '" alt="">';
    return element.querySelector('img');
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-img-usemap-tabindex.js":
/*!************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-img-usemap-tabindex.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _media_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif */ "./node_modules/ally.js/src/supports/media/gif.js");



// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-usemap
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>'
      + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" '
      + 'src="' + _media_gif__WEBPACK_IMPORTED_MODULE_0__.default + '">';

    return element.querySelector('img');
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-in-hidden-iframe.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-in-hidden-iframe.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: function(wrapper, _document) {
    const iframe = _document.createElement('iframe');

    // iframe must be part of the DOM before accessing the contentWindow is possible
    wrapper.appendChild(iframe);

    // create the iframe's default document (<html><head></head><body></body></html>)
    const iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.close();
    return iframe;
  },
  mutate: function(iframe) {
    iframe.style.visibility = 'hidden';

    const iframeDocument = iframe.contentWindow.document;
    const input = iframeDocument.createElement('input');
    iframeDocument.body.appendChild(input);
    return input;
  },
  validate: function(iframe) {
    const iframeDocument = iframe.contentWindow.document;
    const focus = iframeDocument.querySelector('input');
    return iframeDocument.activeElement === focus;
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-in-zero-dimension-object.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-in-zero-dimension-object.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/platform */ "./node_modules/ally.js/src/util/platform.js");



const result = !_util_platform__WEBPACK_IMPORTED_MODULE_0__.default.is.WEBKIT;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return result;
}


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-invalid-tabindex.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-invalid-tabindex.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.setAttribute('tabindex', 'invalid-value');
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-label-tabindex.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-label-tabindex.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'label',
  mutate: function(element) {
    element.setAttribute('tabindex', '-1');
  },
  validate: function(element, focusTarget, _document) {
    // force layout in Chrome 49, otherwise the element won't be focusable
    /* eslint-disable no-unused-vars */
    const variableToPreventDeadCodeElimination = element.offsetHeight;
    /* eslint-enable no-unused-vars */
    element.focus();
    return _document.activeElement === element;
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-object-svg-hidden.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-object-svg-hidden.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _media_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/svg */ "./node_modules/ally.js/src/supports/media/svg.js");



// Note: IE10 on BrowserStack does not like this test

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'object',
  mutate: function(element) {
    element.setAttribute('type', 'image/svg+xml');
    element.setAttribute('data', _media_svg__WEBPACK_IMPORTED_MODULE_0__.default);
    element.setAttribute('width', '200');
    element.setAttribute('height', '50');
    element.style.visibility = 'hidden';
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-object-svg.js":
/*!***************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-object-svg.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _media_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/svg */ "./node_modules/ally.js/src/supports/media/svg.js");
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/platform */ "./node_modules/ally.js/src/util/platform.js");




// Note: IE10 on BrowserStack does not like this test

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'can-focus-object-svg',
  element: 'object',
  mutate: function(element) {
    element.setAttribute('type', 'image/svg+xml');
    element.setAttribute('data', _media_svg__WEBPACK_IMPORTED_MODULE_0__.default);
    element.setAttribute('width', '200');
    element.setAttribute('height', '50');
  },
  validate: function(element, focusTarget, _document) {
    if (_util_platform__WEBPACK_IMPORTED_MODULE_1__.default.is.GECKO) {
      // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
      // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
      return true;
    }

    return _document.activeElement === element;
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-object-swf.js":
/*!***************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-object-swf.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/platform */ "./node_modules/ally.js/src/util/platform.js");



// Every Environment except IE9 considers SWF objects focusable
const result = !_util_platform__WEBPACK_IMPORTED_MODULE_0__.default.is.IE9;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return result;
}


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-redirect-img-usemap.js":
/*!************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-redirect-img-usemap.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _media_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/gif */ "./node_modules/ally.js/src/supports/media/gif.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>'
      + '<img usemap="#focus-redirect-img-usemap" alt="" '
      + 'src="' + _media_gif__WEBPACK_IMPORTED_MODULE_0__.default + '">';

    // focus the <img>, not the <div>
    return element.querySelector('img');
  },
  validate: function(element, focusTarget, _document) {
    const target = element.querySelector('area');
    return _document.activeElement === target;
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-redirect-legend.js":
/*!********************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-redirect-legend.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// see https://jsbin.com/nenirisage/edit?html,js,console,output

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'fieldset',
  mutate: function(element) {
    element.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">';
    // take care of focus in validate();
    return false;
  },
  validate: function(element, focusTarget, _document) {
    const focusable = element.querySelector('input[tabindex="-1"]');
    const tabbable = element.querySelector('input[tabindex="0"]');

    // Firefox requires this test to focus the <fieldset> first, while this is not necessary in
    // https://jsbin.com/nenirisage/edit?html,js,console,output
    element.focus();

    element.querySelector('legend').focus();
    return _document.activeElement === focusable && 'focusable'
      || _document.activeElement === tabbable && 'tabbable'
      || '';
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-scroll-body.js":
/*!****************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-scroll-body.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// https://github.com/medialize/ally.js/issues/21
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
    element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    return element.querySelector('div');
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-scroll-container-without-overflow.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-scroll-container-without-overflow.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// https://github.com/medialize/ally.js/issues/21
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.setAttribute('style', 'width: 100px; height: 50px;');
    element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-scroll-container.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-scroll-container.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// https://github.com/medialize/ally.js/issues/21
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
    element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-summary.js":
/*!************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-summary.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'details',
  mutate: function(element) {
    element.innerHTML = '<summary>foo</summary><p>content</p>';
    return element.firstElementChild;
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-svg-focusable-attribute.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-svg-focusable-attribute.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/svg */ "./node_modules/ally.js/src/supports/helper/svg.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.innerHTML = (0,_helper_svg__WEBPACK_IMPORTED_MODULE_0__.generate)('<text focusable="true">a</text>');
    return element.querySelector('text');
  },
  validate: _helper_svg__WEBPACK_IMPORTED_MODULE_0__.validate,
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-svg-foreignobject-tabindex.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-svg-foreignobject-tabindex.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/svg */ "./node_modules/ally.js/src/supports/helper/svg.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.innerHTML = (0,_helper_svg__WEBPACK_IMPORTED_MODULE_0__.generate)('<foreignObject tabindex="-1"><input type="text" /></foreignObject>');
    // Safari 8's quersSelector() can't identify foreignObject, but getElementyByTagName() can
    return element.querySelector('foreignObject') || element.getElementsByTagName('foreignObject')[0];
  },
  validate: _helper_svg__WEBPACK_IMPORTED_MODULE_0__.validate,

});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-svg-in-iframe.js":
/*!******************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-svg-in-iframe.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/platform */ "./node_modules/ally.js/src/util/platform.js");



// Firefox seems to be handling the SVG-document-in-iframe creation asynchronously
// and thereby produces a false negative test result. Thus the test is pointless
// and we resort to UA sniffing once again.
// see http://jsbin.com/vunadohoko/1/edit?js,console,output

const result = Boolean(_util_platform__WEBPACK_IMPORTED_MODULE_0__.default.is.GECKO && typeof SVGElement !== 'undefined' && SVGElement.prototype.focus);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return result;
}


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-svg-negative-tabindex-attribute.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-svg-negative-tabindex-attribute.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/svg */ "./node_modules/ally.js/src/supports/helper/svg.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.innerHTML = (0,_helper_svg__WEBPACK_IMPORTED_MODULE_0__.generate)('<text tabindex="-1">a</text>');
    return element.querySelector('text');
  },
  validate: _helper_svg__WEBPACK_IMPORTED_MODULE_0__.validate,
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-svg-tabindex-attribute.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-svg-tabindex-attribute.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/svg */ "./node_modules/ally.js/src/supports/helper/svg.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.innerHTML = (0,_helper_svg__WEBPACK_IMPORTED_MODULE_0__.generate)('<text tabindex="0">a</text>');
    return element.querySelector('text');
  },
  validate: _helper_svg__WEBPACK_IMPORTED_MODULE_0__.validate,
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-svg-use-tabindex.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-svg-use-tabindex.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/svg */ "./node_modules/ally.js/src/supports/helper/svg.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.innerHTML = (0,_helper_svg__WEBPACK_IMPORTED_MODULE_0__.generate)([
      '<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>',
      '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />',
    ].join(''));

    return element.querySelector('use');
  },
  validate: _helper_svg__WEBPACK_IMPORTED_MODULE_0__.validate,
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-svg.js":
/*!********************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-svg.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/svg */ "./node_modules/ally.js/src/supports/helper/svg.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.innerHTML = (0,_helper_svg__WEBPACK_IMPORTED_MODULE_0__.generate)('');
    return element.firstChild;
  },
  validate: _helper_svg__WEBPACK_IMPORTED_MODULE_0__.validate,
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-tabindex-trailing-characters.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-tabindex-trailing-characters.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'div',
  mutate: function(element) {
    element.setAttribute('tabindex', '3x');
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-table.js":
/*!**********************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-table.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'table',
  mutate: function(element, wrapper, _document) {
    // IE9 has a problem replacing TBODY contents with innerHTML.
    // https://stackoverflow.com/a/8097055/515124
    // element.innerHTML = '<tr><td>cell</td></tr>';
    const fragment = _document.createDocumentFragment();
    fragment.innerHTML = '<tr><td>cell</td></tr>';
    element.appendChild(fragment);
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/focus-video-without-controls.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/focus-video-without-controls.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _media_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/mp4 */ "./node_modules/ally.js/src/supports/media/mp4.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  element: 'video',
  mutate: function(element) {
    try {
      // invalid media file can trigger warning in console, data-uri to prevent HTTP request
      element.setAttribute('src', _media_mp4__WEBPACK_IMPORTED_MODULE_0__.default);
    } catch (e) {
      // IE9 may throw "Error: Not implemented"
    }
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/helper/svg.js":
/*!*********************************************************!*\
  !*** ./node_modules/ally.js/src/supports/helper/svg.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generate": () => /* binding */ generate,
/* harmony export */   "focus": () => /* binding */ focus,
/* harmony export */   "validate": () => /* binding */ validate
/* harmony export */ });
/* harmony import */ var _element_focus_svg_foreign_object_hack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../element/focus.svg-foreign-object-hack */ "./node_modules/ally.js/src/element/focus.svg-foreign-object-hack.js");



function generate(element) {
  return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
    + element + '</svg>';
}

function focus(element) {
  if (element.focus) {
    return;
  }

  try {
    HTMLElement.prototype.focus.call(element);
  } catch (e) {
    (0,_element_focus_svg_foreign_object_hack__WEBPACK_IMPORTED_MODULE_0__.default)(element);
  }
}

function validate(element, focusTarget, _document) {
  focus(focusTarget);
  return _document.activeElement === focusTarget;
}


/***/ }),

/***/ "./node_modules/ally.js/src/supports/media/gif.invalid.js":
/*!****************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/media/gif.invalid.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ');


/***/ }),

/***/ "./node_modules/ally.js/src/supports/media/gif.js":
/*!********************************************************!*\
  !*** ./node_modules/ally.js/src/supports/media/gif.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');


/***/ }),

/***/ "./node_modules/ally.js/src/supports/media/mp3.js":
/*!********************************************************!*\
  !*** ./node_modules/ally.js/src/supports/media/mp3.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif */ "./node_modules/ally.js/src/supports/media/gif.js");

// export default 'data:audio/mp3;base64,audio-focus-test';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_gif__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./node_modules/ally.js/src/supports/media/mp4.js":
/*!********************************************************!*\
  !*** ./node_modules/ally.js/src/supports/media/mp4.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif */ "./node_modules/ally.js/src/supports/media/gif.js");

// export default 'data:video/mp4;base64,video-focus-test';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_gif__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./node_modules/ally.js/src/supports/media/svg.js":
/*!********************************************************!*\
  !*** ./node_modules/ally.js/src/supports/media/svg.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtb'
  + 'G5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJ'
  + 'zdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==');


/***/ }),

/***/ "./node_modules/ally.js/src/supports/supports-cache.js":
/*!*************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/supports-cache.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../version */ "./node_modules/ally.js/src/version.js");
/*
    Facility to cache test results in localStorage.

    USAGE:
      cache.get('key');
      cache.set('key', 'value');
 */



function readLocalStorage(key) {
  // allow reading from storage to retrieve previous support results
  // even while the document does not have focus
  let data;

  try {
    data = window.localStorage && window.localStorage.getItem(key);
    data = data ? JSON.parse(data) : {};
  } catch (e) {
    data = {};
  }

  return data;
}

function writeLocalStorage(key, value) {
  if (!document.hasFocus()) {
    // if the document does not have focus when tests are executed, focus() may
    // not be handled properly and events may not be dispatched immediately.
    // This can happen when a document is reloaded while Developer Tools have focus.
    try {
      window.localStorage && window.localStorage.removeItem(key);
    } catch (e) {
      // ignore
    }

    return;
  }

  try {
    window.localStorage && window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // ignore
  }
}

const userAgent = typeof window !== 'undefined' && window.navigator.userAgent || '';
const cacheKey = 'ally-supports-cache';
let cache = readLocalStorage(cacheKey);

// update the cache if ally or the user agent changed (newer version, etc)
if (cache.userAgent !== userAgent || cache.version !== _version__WEBPACK_IMPORTED_MODULE_0__.default) {
  cache = {};
}

cache.userAgent = userAgent;
cache.version = _version__WEBPACK_IMPORTED_MODULE_0__.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get: function() {
    return cache;
  },
  set: function(values) {
    Object.keys(values).forEach(function(key) {
      cache[key] = values[key];
    });

    cache.time = new Date().toISOString();
    writeLocalStorage(cacheKey, cache);
  },
});


/***/ }),

/***/ "./node_modules/ally.js/src/supports/supports.js":
/*!*******************************************************!*\
  !*** ./node_modules/ally.js/src/supports/supports.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _detect_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detect-focus */ "./node_modules/ally.js/src/supports/detect-focus.js");
/* harmony import */ var _supports_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supports-cache */ "./node_modules/ally.js/src/supports/supports-cache.js");
/* harmony import */ var _css_shadow_piercing_deep_combinator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-shadow-piercing-deep-combinator */ "./node_modules/ally.js/src/supports/css-shadow-piercing-deep-combinator.js");
/* harmony import */ var _focus_area_img_tabindex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focus-area-img-tabindex */ "./node_modules/ally.js/src/supports/focus-area-img-tabindex.js");
/* harmony import */ var _focus_area_tabindex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./focus-area-tabindex */ "./node_modules/ally.js/src/supports/focus-area-tabindex.js");
/* harmony import */ var _focus_area_without_href__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./focus-area-without-href */ "./node_modules/ally.js/src/supports/focus-area-without-href.js");
/* harmony import */ var _focus_audio_without_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./focus-audio-without-controls */ "./node_modules/ally.js/src/supports/focus-audio-without-controls.js");
/* harmony import */ var _focus_broken_image_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./focus-broken-image-map */ "./node_modules/ally.js/src/supports/focus-broken-image-map.js");
/* harmony import */ var _focus_children_of_focusable_flexbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./focus-children-of-focusable-flexbox */ "./node_modules/ally.js/src/supports/focus-children-of-focusable-flexbox.js");
/* harmony import */ var _focus_fieldset_disabled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./focus-fieldset-disabled */ "./node_modules/ally.js/src/supports/focus-fieldset-disabled.js");
/* harmony import */ var _focus_fieldset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./focus-fieldset */ "./node_modules/ally.js/src/supports/focus-fieldset.js");
/* harmony import */ var _focus_flexbox_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./focus-flexbox-container */ "./node_modules/ally.js/src/supports/focus-flexbox-container.js");
/* harmony import */ var _focus_form_disabled__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./focus-form-disabled */ "./node_modules/ally.js/src/supports/focus-form-disabled.js");
/* harmony import */ var _focus_img_ismap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./focus-img-ismap */ "./node_modules/ally.js/src/supports/focus-img-ismap.js");
/* harmony import */ var _focus_img_usemap_tabindex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./focus-img-usemap-tabindex */ "./node_modules/ally.js/src/supports/focus-img-usemap-tabindex.js");
/* harmony import */ var _focus_in_hidden_iframe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./focus-in-hidden-iframe */ "./node_modules/ally.js/src/supports/focus-in-hidden-iframe.js");
/* harmony import */ var _focus_in_zero_dimension_object__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./focus-in-zero-dimension-object */ "./node_modules/ally.js/src/supports/focus-in-zero-dimension-object.js");
/* harmony import */ var _focus_invalid_tabindex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./focus-invalid-tabindex */ "./node_modules/ally.js/src/supports/focus-invalid-tabindex.js");
/* harmony import */ var _focus_label_tabindex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./focus-label-tabindex */ "./node_modules/ally.js/src/supports/focus-label-tabindex.js");
/* harmony import */ var _focus_object_svg_hidden__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./focus-object-svg-hidden */ "./node_modules/ally.js/src/supports/focus-object-svg-hidden.js");
/* harmony import */ var _focus_object_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./focus-object-svg */ "./node_modules/ally.js/src/supports/focus-object-svg.js");
/* harmony import */ var _focus_object_swf__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./focus-object-swf */ "./node_modules/ally.js/src/supports/focus-object-swf.js");
/* harmony import */ var _focus_redirect_img_usemap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./focus-redirect-img-usemap */ "./node_modules/ally.js/src/supports/focus-redirect-img-usemap.js");
/* harmony import */ var _focus_redirect_legend__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./focus-redirect-legend */ "./node_modules/ally.js/src/supports/focus-redirect-legend.js");
/* harmony import */ var _focus_scroll_body__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./focus-scroll-body */ "./node_modules/ally.js/src/supports/focus-scroll-body.js");
/* harmony import */ var _focus_scroll_container_without_overflow__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./focus-scroll-container-without-overflow */ "./node_modules/ally.js/src/supports/focus-scroll-container-without-overflow.js");
/* harmony import */ var _focus_scroll_container__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./focus-scroll-container */ "./node_modules/ally.js/src/supports/focus-scroll-container.js");
/* harmony import */ var _focus_summary__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./focus-summary */ "./node_modules/ally.js/src/supports/focus-summary.js");
/* harmony import */ var _focus_svg_focusable_attribute__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./focus-svg-focusable-attribute */ "./node_modules/ally.js/src/supports/focus-svg-focusable-attribute.js");
/* harmony import */ var _focus_svg_tabindex_attribute__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./focus-svg-tabindex-attribute */ "./node_modules/ally.js/src/supports/focus-svg-tabindex-attribute.js");
/* harmony import */ var _focus_svg_negative_tabindex_attribute__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./focus-svg-negative-tabindex-attribute */ "./node_modules/ally.js/src/supports/focus-svg-negative-tabindex-attribute.js");
/* harmony import */ var _focus_svg_use_tabindex__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./focus-svg-use-tabindex */ "./node_modules/ally.js/src/supports/focus-svg-use-tabindex.js");
/* harmony import */ var _focus_svg_foreignobject_tabindex__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./focus-svg-foreignobject-tabindex */ "./node_modules/ally.js/src/supports/focus-svg-foreignobject-tabindex.js");
/* harmony import */ var _focus_svg_in_iframe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./focus-svg-in-iframe */ "./node_modules/ally.js/src/supports/focus-svg-in-iframe.js");
/* harmony import */ var _focus_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./focus-svg */ "./node_modules/ally.js/src/supports/focus-svg.js");
/* harmony import */ var _focus_tabindex_trailing_characters__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./focus-tabindex-trailing-characters */ "./node_modules/ally.js/src/supports/focus-tabindex-trailing-characters.js");
/* harmony import */ var _focus_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./focus-table */ "./node_modules/ally.js/src/supports/focus-table.js");
/* harmony import */ var _focus_video_without_controls__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./focus-video-without-controls */ "./node_modules/ally.js/src/supports/focus-video-without-controls.js");
/* harmony import */ var _tabsequence_area_at_img_position__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./tabsequence-area-at-img-position */ "./node_modules/ally.js/src/supports/tabsequence-area-at-img-position.js");










































const testCallbacks = {
  cssShadowPiercingDeepCombinator: _css_shadow_piercing_deep_combinator__WEBPACK_IMPORTED_MODULE_2__.default,
  focusInZeroDimensionObject: _focus_in_zero_dimension_object__WEBPACK_IMPORTED_MODULE_16__.default,
  focusObjectSwf: _focus_object_swf__WEBPACK_IMPORTED_MODULE_21__.default,
  focusSvgInIframe: _focus_svg_in_iframe__WEBPACK_IMPORTED_MODULE_33__.default,
  tabsequenceAreaAtImgPosition: _tabsequence_area_at_img_position__WEBPACK_IMPORTED_MODULE_38__.default,
};

const testDescriptions = {
  focusAreaImgTabindex: _focus_area_img_tabindex__WEBPACK_IMPORTED_MODULE_3__.default,
  focusAreaTabindex: _focus_area_tabindex__WEBPACK_IMPORTED_MODULE_4__.default,
  focusAreaWithoutHref: _focus_area_without_href__WEBPACK_IMPORTED_MODULE_5__.default,
  focusAudioWithoutControls: _focus_audio_without_controls__WEBPACK_IMPORTED_MODULE_6__.default,
  focusBrokenImageMap: _focus_broken_image_map__WEBPACK_IMPORTED_MODULE_7__.default,
  focusChildrenOfFocusableFlexbox: _focus_children_of_focusable_flexbox__WEBPACK_IMPORTED_MODULE_8__.default,
  focusFieldsetDisabled: _focus_fieldset_disabled__WEBPACK_IMPORTED_MODULE_9__.default,
  focusFieldset: _focus_fieldset__WEBPACK_IMPORTED_MODULE_10__.default,
  focusFlexboxContainer: _focus_flexbox_container__WEBPACK_IMPORTED_MODULE_11__.default,
  focusFormDisabled: _focus_form_disabled__WEBPACK_IMPORTED_MODULE_12__.default,
  focusImgIsmap: _focus_img_ismap__WEBPACK_IMPORTED_MODULE_13__.default,
  focusImgUsemapTabindex: _focus_img_usemap_tabindex__WEBPACK_IMPORTED_MODULE_14__.default,
  focusInHiddenIframe: _focus_in_hidden_iframe__WEBPACK_IMPORTED_MODULE_15__.default,
  focusInvalidTabindex: _focus_invalid_tabindex__WEBPACK_IMPORTED_MODULE_17__.default,
  focusLabelTabindex: _focus_label_tabindex__WEBPACK_IMPORTED_MODULE_18__.default,
  focusObjectSvg: _focus_object_svg__WEBPACK_IMPORTED_MODULE_20__.default,
  focusObjectSvgHidden: _focus_object_svg_hidden__WEBPACK_IMPORTED_MODULE_19__.default,
  focusRedirectImgUsemap: _focus_redirect_img_usemap__WEBPACK_IMPORTED_MODULE_22__.default,
  focusRedirectLegend: _focus_redirect_legend__WEBPACK_IMPORTED_MODULE_23__.default,
  focusScrollBody: _focus_scroll_body__WEBPACK_IMPORTED_MODULE_24__.default,
  focusScrollContainerWithoutOverflow: _focus_scroll_container_without_overflow__WEBPACK_IMPORTED_MODULE_25__.default,
  focusScrollContainer: _focus_scroll_container__WEBPACK_IMPORTED_MODULE_26__.default,
  focusSummary: _focus_summary__WEBPACK_IMPORTED_MODULE_27__.default,
  focusSvgFocusableAttribute: _focus_svg_focusable_attribute__WEBPACK_IMPORTED_MODULE_28__.default,
  focusSvgTabindexAttribute: _focus_svg_tabindex_attribute__WEBPACK_IMPORTED_MODULE_29__.default,
  focusSvgNegativeTabindexAttribute: _focus_svg_negative_tabindex_attribute__WEBPACK_IMPORTED_MODULE_30__.default,
  focusSvgUseTabindex: _focus_svg_use_tabindex__WEBPACK_IMPORTED_MODULE_31__.default,
  focusSvgForeignobjectTabindex: _focus_svg_foreignobject_tabindex__WEBPACK_IMPORTED_MODULE_32__.default,
  focusSvg: _focus_svg__WEBPACK_IMPORTED_MODULE_34__.default,
  focusTabindexTrailingCharacters: _focus_tabindex_trailing_characters__WEBPACK_IMPORTED_MODULE_35__.default,
  focusTable: _focus_table__WEBPACK_IMPORTED_MODULE_36__.default,
  focusVideoWithoutControls: _focus_video_without_controls__WEBPACK_IMPORTED_MODULE_37__.default,
};

function executeTests() {
  const results = (0,_detect_focus__WEBPACK_IMPORTED_MODULE_0__.default)(testDescriptions);
  Object.keys(testCallbacks).forEach(function(key) {
    results[key] = testCallbacks[key]();
  });

  return results;
}

let supportsCache = null;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (supportsCache) {
    return supportsCache;
  }

  supportsCache = _supports_cache__WEBPACK_IMPORTED_MODULE_1__.default.get();
  if (!supportsCache.time) {
    _supports_cache__WEBPACK_IMPORTED_MODULE_1__.default.set(executeTests());
    supportsCache = _supports_cache__WEBPACK_IMPORTED_MODULE_1__.default.get();
  }

  return supportsCache;
}


/***/ }),

/***/ "./node_modules/ally.js/src/supports/tabsequence-area-at-img-position.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ally.js/src/supports/tabsequence-area-at-img-position.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/platform */ "./node_modules/ally.js/src/util/platform.js");



// https://jsbin.com/vafaba/3/edit?html,js,console,output
const result = _util_platform__WEBPACK_IMPORTED_MODULE_0__.default.is.GECKO || _util_platform__WEBPACK_IMPORTED_MODULE_0__.default.is.TRIDENT || _util_platform__WEBPACK_IMPORTED_MODULE_0__.default.is.EDGE;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return result;
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/array-find-index.js":
/*!***********************************************************!*\
  !*** ./node_modules/ally.js/src/util/array-find-index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ findIndex
/* harmony export */ });
function findIndex(array, callback) {
  // attempt to use native or polyfilled Array#findIndex first
  if (array.findIndex) {
    return array.findIndex(callback);
  }

  const length = array.length;

  // shortcut if the array is empty
  if (length === 0) {
    return -1;
  }

  // otherwise loop over array
  for (let i = 0; i < length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }

  return -1;
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/compare-position.js":
/*!***********************************************************!*\
  !*** ./node_modules/ally.js/src/util/compare-position.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getParentComparator": () => /* binding */ getParentComparator
/* harmony export */ });

// Node.compareDocumentPosition is available since IE9
// see https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition

// callback returns true when element is contained by parent or is the parent suited for use with Array.some()
/*
  USAGE:
    var isChildOf = getParentComparator({parent: someNode});
    listOfElements.some(isChildOf)
*/

function getParentComparator({parent, element, includeSelf} = {}) {
  if (parent) {
    return function isChildOf(node) {
      return Boolean(
        includeSelf && node === parent
        || parent.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY
      );
    };
  } else if (element) {
    return function isParentOf(node) {
      return Boolean(
        includeSelf && element === node
        || node.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY
      );
    };
  }

  throw new TypeError('util/compare-position#getParentComparator required either options.parent or options.element');
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/context-to-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/ally.js/src/util/context-to-element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_node_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/node-array */ "./node_modules/ally.js/src/util/node-array.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  context,
  label = 'context-to-element',
  resolveDocument,
  defaultToDocument,
}) {
  let element = (0,_util_node_array__WEBPACK_IMPORTED_MODULE_0__.default)(context)[0];

  if (resolveDocument && element && element.nodeType === Node.DOCUMENT_NODE) {
    element = element.documentElement;
  }

  if (!element && defaultToDocument) {
    return document.documentElement;
  }

  if (!element) {
    throw new TypeError(label + ' requires valid options.context');
  }

  if (element.nodeType !== Node.ELEMENT_NODE && element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
    throw new TypeError(label + ' requires options.context to be an Element');
  }

  return element;
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/element-matches.js":
/*!**********************************************************!*\
  !*** ./node_modules/ally.js/src/util/element-matches.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ elementMatches
/* harmony export */ });

// Element.prototype.matches may be available at a different name
// https://developer.mozilla.org/en/docs/Web/API/Element/matches

const names = ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector'];
let name = null;

function findMethodName(element) {
  names.some(function(_name) {
    if (!element[_name]) {
      return false;
    }

    name = _name;
    return true;
  });
}

function elementMatches(element, selector) {
  if (!name) {
    findMethodName(element);
  }

  return element[name](selector);
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/get-content-document.js":
/*!***************************************************************!*\
  !*** ./node_modules/ally.js/src/util/get-content-document.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  try {
    // works on <object> and <iframe>
    return node.contentDocument
      // works on <object> and <iframe>
      || node.contentWindow && node.contentWindow.document
      // works on <object> and <iframe> that contain SVG
      || node.getSVGDocument && node.getSVGDocument()
      || null;
  } catch (e) {
    // SecurityError: Failed to read the 'contentDocument' property from 'HTMLObjectElement'
    // also IE may throw member not found exception e.g. on <object type="image/png">
    return null;
  }
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/get-document.js":
/*!*******************************************************!*\
  !*** ./node_modules/ally.js/src/util/get-document.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  if (!node) {
    return document;
  }

  if (node.nodeType === Node.DOCUMENT_NODE) {
    return node;
  }

  return node.ownerDocument || document;
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/get-frame-element.js":
/*!************************************************************!*\
  !*** ./node_modules/ally.js/src/util/get-frame-element.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getFrameElement
/* harmony export */ });
/* harmony import */ var _get_content_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-content-document */ "./node_modules/ally.js/src/util/get-content-document.js");
/* harmony import */ var _get_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-window */ "./node_modules/ally.js/src/util/get-window.js");
/* harmony import */ var _select_in_shadows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-in-shadows */ "./node_modules/ally.js/src/util/select-in-shadows.js");





let selector;

function findDocumentHostElement(_window) {
  if (!selector) {
    selector = (0,_select_in_shadows__WEBPACK_IMPORTED_MODULE_2__.default)('object, iframe');
  }

  if (_window._frameElement !== undefined) {
    return _window._frameElement;
  }

  _window._frameElement = null;

  const potentialHosts = _window.parent.document.querySelectorAll(selector);
  [].some.call(potentialHosts, function(element) {
    const _document = (0,_get_content_document__WEBPACK_IMPORTED_MODULE_0__.default)(element);
    if (_document !== _window.document) {
      return false;
    }

    _window._frameElement = element;
    return true;
  });

  return _window._frameElement;
}

function getFrameElement(element) {
  const _window = (0,_get_window__WEBPACK_IMPORTED_MODULE_1__.default)(element);
  if (!_window.parent || _window.parent === _window) {
    // if there is no parent browsing context,
    // we're not going to get a frameElement either way
    return null;
  }

  try {
    // see https://developer.mozilla.org/en-US/docs/Web/API/Window/frameElement
    // does not work within <embed> anywhere, and not within in <object> in IE
    return _window.frameElement || findDocumentHostElement(_window);
  } catch (e) {
    return null;
  }
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/get-window.js":
/*!*****************************************************!*\
  !*** ./node_modules/ally.js/src/util/get-window.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _get_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-document */ "./node_modules/ally.js/src/util/get-document.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  const _document = (0,_get_document__WEBPACK_IMPORTED_MODULE_0__.default)(node);
  return _document.defaultView || window;
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/image-map.js":
/*!****************************************************!*\
  !*** ./node_modules/ally.js/src/util/image-map.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMapByName": () => /* binding */ getMapByName,
/* harmony export */   "getMapOfImage": () => /* binding */ getMapOfImage,
/* harmony export */   "getImageOfArea": () => /* binding */ getImageOfArea
/* harmony export */ });
/* harmony import */ var css_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css.escape */ "./node_modules/css.escape/css.escape.js");
/* harmony import */ var css_escape__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_escape__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_get_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/get-document */ "./node_modules/ally.js/src/util/get-document.js");




function getMapByName(name, _document) {
  // apparently getElementsByName() also considers id attribute in IE & opera
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
  const map = _document.querySelector('map[name="' + css_escape__WEBPACK_IMPORTED_MODULE_0___default()(name) + '"]');
  return map || null;
}

function getMapOfImage(element) {
  const usemap = element.getAttribute('usemap');
  if (!usemap) {
    return null;
  }

  const _document = (0,_util_get_document__WEBPACK_IMPORTED_MODULE_1__.default)(element);
  return getMapByName(usemap.slice(1), _document);
}

function getImageOfArea(element) {
  const map = element.parentElement;

  if (!map.name || map.nodeName.toLowerCase() !== 'map') {
    return null;
  }

  // NOTE: image maps can also be applied to <object> with image content,
  // but no browser supports this at the moment

  // HTML5 specifies HTMLMapElement.images to be an HTMLCollection of all
  // <img> and <object> referencing the <map> element, but no browser implements this
  //   https://www.w3.org/TR/html5/embedded-content-0.html#the-map-element
  //   https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement
  // the image must be valid and loaded for the map to take effect
  const _document = (0,_util_get_document__WEBPACK_IMPORTED_MODULE_1__.default)(element);
  return _document.querySelector('img[usemap="#' + css_escape__WEBPACK_IMPORTED_MODULE_0___default()(map.name) + '"]') || null;
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/merge-dom-order.js":
/*!**********************************************************!*\
  !*** ./node_modules/ally.js/src/util/merge-dom-order.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _util_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/array-find-index */ "./node_modules/ally.js/src/util/array-find-index.js");
/* harmony import */ var _node_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-array */ "./node_modules/ally.js/src/util/node-array.js");
/* harmony import */ var _sort_dom_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort-dom-order */ "./node_modules/ally.js/src/util/sort-dom-order.js");

// sort a list of elements into another list of elements in DOM order

/*
  USAGE:
    mergeDomOrder({
      // DOM ordered array of elements to use as base of merge
      list: [],
      // unordered array of elements to merge into base list
      elements: [],
      // callback function to resolve an element
      resolveElement: function(element) {
        // return null to skip
        // return element to replace insertion
        // return [element1, element2, …] to replace insertion with multiple elements
        return element;
      },
    })
*/





function getFirstSuccessorOffset(list, target) {
  // find the first element that comes AFTER the target element
  return (0,_util_array_find_index__WEBPACK_IMPORTED_MODULE_0__.default)(list, function(element) {
    return target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING;
  });
}

function findInsertionOffsets(list, elements, resolveElement) {
  // instead of mutating the elements list directly, remember position and map
  // to inject later, when we can do this more efficiently
  const insertions = [];
  elements.forEach(function(element) {
    let replace = true;
    let offset = list.indexOf(element);

    if (offset === -1) {
      // element is not in target list
      offset = getFirstSuccessorOffset(list, element);
      replace = false;
    }

    if (offset === -1) {
      // there is no successor in the tabsequence,
      // meaning the image must be the last element
      offset = list.length;
    }

    // allow the consumer to replace the injected element
    const injections = (0,_node_array__WEBPACK_IMPORTED_MODULE_1__.default)(resolveElement ? resolveElement(element) : element);
    if (!injections.length) {
      // we can't inject zero elements
      return;
    }

    insertions.push({
      offset,
      replace,
      elements: injections,
    });
  });

  return insertions;
}

function insertElementsAtOffsets(list, insertions) {
  // remember the number of elements we have already injected
  // so we account for the caused index offset
  let inserted = 0;
  // make sure that we insert the elements in sequence,
  // otherwise the offset compensation won't work
  insertions.sort((a, b) => a.offset - b.offset);
  insertions.forEach(function(insertion) {
    // array.splice has an annoying function signature :(
    const remove = insertion.replace ? 1 : 0;
    const args = [insertion.offset + inserted, remove].concat(insertion.elements);
    list.splice.apply(list, args);
    inserted += insertion.elements.length - remove;
  });
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({list, elements, resolveElement} = {}) {
  // operate on a copy so we don't mutate the original array
  const _list = list.slice(0);
  // make sure the elements we're injecting are provided in DOM order
  const _elements = (0,_node_array__WEBPACK_IMPORTED_MODULE_1__.default)(elements).slice(0);
  (0,_sort_dom_order__WEBPACK_IMPORTED_MODULE_2__.default)(_elements);
  // find the offsets within the target array (list) at which to inject
  // each individual element (from elements)
  const insertions = findInsertionOffsets(_list, _elements, resolveElement);
  // actually inject the elements into the target array at the identified positions
  insertElementsAtOffsets(_list, insertions);
  return _list;
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/node-array.js":
/*!*****************************************************!*\
  !*** ./node_modules/ally.js/src/util/node-array.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// input may be undefined, selector-tring, Node, NodeList, HTMLCollection, array of Nodes
// yes, to some extent this is a bad replica of jQuery's constructor function
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input) {
  if (!input) {
    return [];
  }

  if (Array.isArray(input)) {
    return input;
  }

  // instanceof Node - does not work with iframes
  if (input.nodeType !== undefined) {
    return [input];
  }

  if (typeof input === 'string') {
    input = document.querySelectorAll(input);
  }

  if (input.length !== undefined) {
    return [].slice.call(input, 0);
  }

  throw new TypeError('unexpected input ' + String(input));
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/platform.js":
/*!***************************************************!*\
  !*** ./node_modules/ally.js/src/util/platform.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! platform */ "./node_modules/platform/platform.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_0__);

// sugar for https://github.com/bestiejs/platform.js
// make sure to ALWAYS reference the layout engine,
// even if it is not necessary for the condition,
// as this makes grepping for this stuff simpler



// deep clone of original platform
const platform = JSON.parse(JSON.stringify((platform__WEBPACK_IMPORTED_MODULE_0___default())));

// operating system
const os = platform.os.family || '';
const ANDROID = os === 'Android';
const WINDOWS = os.slice(0, 7) === 'Windows';
const OSX = os === 'OS X';
const IOS = os === 'iOS';

// layout
const BLINK = platform.layout === 'Blink';
const GECKO = platform.layout === 'Gecko';
const TRIDENT = platform.layout === 'Trident';
const EDGE = platform.layout === 'EdgeHTML';
const WEBKIT = platform.layout === 'WebKit';

// browser version (not layout engine version!)
const version = parseFloat(platform.version);
const majorVersion = Math.floor(version);
platform.majorVersion = majorVersion;

platform.is = {
  // operating system
  ANDROID,
  WINDOWS,
  OSX,
  IOS,
  // layout
  BLINK, // "Chrome", "Chrome Mobile", "Opera"
  GECKO, // "Firefox"
  TRIDENT, // "Internet Explorer"
  EDGE, // "Microsoft Edge"
  WEBKIT, // "Safari"
  // INTERNET EXPLORERS
  IE9: TRIDENT && majorVersion === 9,
  IE10: TRIDENT && majorVersion === 10,
  IE11: TRIDENT && majorVersion === 11,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (platform);


/***/ }),

/***/ "./node_modules/ally.js/src/util/select-in-shadows.js":
/*!************************************************************!*\
  !*** ./node_modules/ally.js/src/util/select-in-shadows.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _supports_css_shadow_piercing_deep_combinator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../supports/css-shadow-piercing-deep-combinator */ "./node_modules/ally.js/src/supports/css-shadow-piercing-deep-combinator.js");

// convert a CSS selector so that it also pierces ShadowDOM
// takes ".a, #b" and turns it into ".a, #b, html >>> .a, html >>> #b"



let shadowPrefix;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  if (typeof shadowPrefix !== 'string') {
    const operator = (0,_supports_css_shadow_piercing_deep_combinator__WEBPACK_IMPORTED_MODULE_0__.default)();
    if (operator) {
      shadowPrefix = ', html ' + operator + ' ';
    }
  }

  if (!shadowPrefix) {
    return selector;
  }

  return selector + shadowPrefix + selector.replace(/\s*,\s*/g, ',').split(',').join(shadowPrefix);
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/sort-dom-order.js":
/*!*********************************************************!*\
  !*** ./node_modules/ally.js/src/util/sort-dom-order.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// sorts a list of elements according to their order in the DOM

function compareDomPosition(a, b) {
  return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(elements) {
  return elements.sort(compareDomPosition);
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/tabindex-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/ally.js/src/util/tabindex-value.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _is_valid_tabindex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is/valid-tabindex */ "./node_modules/ally.js/src/is/valid-tabindex.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  if (!(0,_is_valid_tabindex__WEBPACK_IMPORTED_MODULE_0__.default)(element)) {
    return null;
  }

  // Edge 14 has a capitalization problem on SVG elements,
  // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
  const hasTabindex = element.hasAttribute('tabindex');
  const attributeName = hasTabindex ? 'tabindex' : 'tabIndex';

  // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  const tabindex = parseInt(element.getAttribute(attributeName), 10);
  return isNaN(tabindex) ? -1 : tabindex;
}


/***/ }),

/***/ "./node_modules/ally.js/src/util/visible-area.js":
/*!*******************************************************!*\
  !*** ./node_modules/ally.js/src/util/visible-area.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _get_parents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get/parents */ "./node_modules/ally.js/src/get/parents.js");



function getIntersectingRect(one, two) {
  // identify the rectangle that _element and _container overlap in
  const top = Math.max(one.top, two.top);
  const left = Math.max(one.left, two.left);
  // make sure bottom can't be above top, right can't be before left
  const right = Math.max(Math.min(one.right, two.right), left);
  const bottom = Math.max(Math.min(one.bottom, two.bottom), top);
  // return something resembling ClientRect
  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: right - left,
    height: bottom - top,
  };
}

function getViewportRect() {
  const width = window.innerWidth || document.documentElement.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight;
  // return something resembling ClientRect
  return {
    top: 0,
    right: width,
    bottom: height,
    left: 0,
    width: width,
    height: height,
  };
}

function getInnerBoundingClientRect(element) {
  // convenience for the .reduce() in getScrollableParentRect()
  const rect = element.getBoundingClientRect();

  // remove the width of the scrollbar because that
  // area is not really considered visible
  // NOTE: assuming scrollbar is always to the right and bottom
  const scrollbarWidth = element.offsetWidth - element.clientWidth;
  const scrollbarHeight = element.offsetHeight - element.clientHeight;
  // cannot mutate rect because it has readonly properties
  const _rect = {
    top: rect.top,
    left: rect.left,
    right: rect.right - scrollbarWidth,
    bottom: rect.bottom - scrollbarHeight,
    width: rect.width - scrollbarWidth,
    height: rect.height - scrollbarHeight,
    area: 0,
  };

  _rect.area = _rect.width * _rect.height;
  return _rect;
}

function isOverflowingElement(element) {
  const style = window.getComputedStyle(element, null);
  const value = 'visible';
  return style.getPropertyValue('overflow-x') !== value
    && style.getPropertyValue('overflow-y') !== value;
}

function isScrollableElement(element) {
  // an element not scrollable if it doesn't crop its content
  if (!isOverflowingElement(element)) {
    return false;
  }

  // an element is scrollable when it is smaller than its content
  return element.offsetHeight < element.scrollHeight
    || element.offsetWidth < element.scrollWidth;
}

function getScrollableParentRect(element) {
  // get largest possible space constrained by scrolling containers

  // find scrollable parents
  const scrollingContainers = (0,_get_parents__WEBPACK_IMPORTED_MODULE_0__.default)({context: element}).slice(1).filter(isScrollableElement);

  if (!scrollingContainers.length) {
    // no containers, no joy
    return null;
  }

  // identify the currently visible intersection of all scrolling container parents
  return scrollingContainers.reduce(function(previous, current) {
    const rect = getInnerBoundingClientRect(current);
    const intersection = getIntersectingRect(rect, previous);
    // identify the smallest scrolling container so we know how much space
    // our element can fill at the most - note that this is NOT the area
    // of the intersection, intersection is just abused as a vehicle
    intersection.area = Math.min(rect.area, previous.area);
    return intersection;
  }, getInnerBoundingClientRect(scrollingContainers[0]));
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  // dimensions of the element itself
  const _element = element.getBoundingClientRect();
  // dimensions of the viewport
  const _viewport = getViewportRect();
  // we need the area to know how much of the element can be displayed at the most
  _viewport.area = _viewport.width * _viewport.height;

  let _area = _viewport;
  // dimensions of the intersection of all scrollable parents
  const _container = getScrollableParentRect(element);
  if (_container) {
    if (!_container.width || !_container.height) {
      // scrollable containers without dimensions are invisible,
      // meaning that the element is not visible at all
      return 0;
    }

    // dimension the element can currently be rendered in
    _area = getIntersectingRect(_container, _viewport);
    _area.area = _container.area;
  }

  // dimension of the element currently rendered in identified space
  const _visible = getIntersectingRect(_element, _area);
  if (!_visible.width || !_visible.height) {
    // element is not shown within the identified area
    return 0;
  }

  // compare the element's currently visible size to the size it
  // could take up at the most, being either the element's actual
  // size, or the space theroetically made available if all
  // scrollable parents are aligned properly
  const area = _element.width * _element.height;
  const maxArea = Math.min(area, _area.area);
  // Firefox may return sub-pixel bounding client rect
  const visibleArea = Math.round(_visible.width) * Math.round(_visible.height) / maxArea;
  // Edge might not reach 0.5 exactly
  const factor = 10000;
  const roundedVisibleArea = Math.round(visibleArea * factor) / factor;
  // clamp the value at 1
  return Math.min(roundedVisibleArea, 1);
}


/***/ }),

/***/ "./node_modules/ally.js/src/version.js":
/*!*********************************************!*\
  !*** ./node_modules/ally.js/src/version.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

// this file is overwritten by `npm run build:pre`
const version = '1.4.1';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);


/***/ }),

/***/ "./node_modules/ally.js/src/when/key.binding.js":
/*!******************************************************!*\
  !*** ./node_modules/ally.js/src/when/key.binding.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _map_keycode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map/keycode */ "./node_modules/ally.js/src/map/keycode.js");

/*
  decodes a key binding token to a JavaScript structure

  returns an array of objects:
    {
      // key name translated to keyCode (possibly more than one)
      keyCodes: [<number>],
      // translated modifiers
      modifiers: {
        altKey: null,   // ignore
        ctrKey: false,  // expect not pressed
        metaKey: true,  // expect pressed
        shiftKey: true, // expect pressed
      },
      // callback that returns true if event's
      // modifier keys match the expected state
      matchModifiers: function(event){},
    }
*/



const modifier = {
  alt: 'altKey',
  ctrl: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey',
};

const modifierSequence = Object.keys(modifier).map(name => modifier[name]);

function createExpectedModifiers(ignoreModifiers) {
  const value = ignoreModifiers ? null : false;
  return {
    altKey: value,
    ctrlKey: value,
    metaKey: value,
    shiftKey: value,
  };
}

function resolveModifiers(modifiers) {
  const ignoreModifiers = modifiers.indexOf('*') !== -1;
  const expected = createExpectedModifiers(ignoreModifiers);

  modifiers.forEach(function(token) {
    if (token === '*') {
      // we've already covered the all-in operator
      return;
    }

    // we want the modifier pressed
    let value = true;
    const operator = token.slice(0, 1);
    if (operator === '?') {
      // we don't care if the modifier is pressed
      value = null;
    } else if (operator === '!') {
      // we do not want the modifier pressed
      value = false;
    }

    if (value !== true) {
      // compensate for the modifier's operator
      token = token.slice(1);
    }

    const propertyName = modifier[token];
    if (!propertyName) {
      throw new TypeError('Unknown modifier "' + token + '"');
    }

    expected[propertyName] = value;
  });

  return expected;
}

function resolveKey(key) {
  const code = _map_keycode__WEBPACK_IMPORTED_MODULE_0__.default[key] || parseInt(key, 10);
  if (!code || typeof code !== 'number' || isNaN(code)) {
    throw new TypeError('Unknown key "' + key + '"');
  }

  return [code].concat(_map_keycode__WEBPACK_IMPORTED_MODULE_0__.default._alias[code] || []);
}

function matchModifiers(expected, event) {
  // returns true on match
  return !modifierSequence.some(function(prop) {
    // returns true on mismatch
    return typeof expected[prop] === 'boolean' && Boolean(event[prop]) !== expected[prop];
  });
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(text) {
  return text.split(/\s+/).map(function(_text) {
    const tokens = _text.split('+');
    const _modifiers = resolveModifiers(tokens.slice(0, -1));
    const _keyCodes = resolveKey(tokens.slice(-1));
    return {
      keyCodes: _keyCodes,
      modifiers: _modifiers,
      matchModifiers: matchModifiers.bind(null, _modifiers),
    };
  });
}


/***/ }),

/***/ "./node_modules/ally.js/src/when/key.js":
/*!**********************************************!*\
  !*** ./node_modules/ally.js/src/when/key.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _key_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key.binding */ "./node_modules/ally.js/src/when/key.binding.js");
/* harmony import */ var _util_node_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/node-array */ "./node_modules/ally.js/src/util/node-array.js");
/* harmony import */ var _util_compare_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/compare-position */ "./node_modules/ally.js/src/util/compare-position.js");





// Bug 286933 - Key events in the autocomplete popup should be hidden from page scripts
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=286933

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(map = {}) {
  const bindings = {};

  const context = (0,_util_node_array__WEBPACK_IMPORTED_MODULE_1__.default)(map.context)[0] || document.documentElement;
  delete map.context;
  const filter = (0,_util_node_array__WEBPACK_IMPORTED_MODULE_1__.default)(map.filter);
  delete map.filter;

  const mapKeys = Object.keys(map);
  if (!mapKeys.length) {
    throw new TypeError('when/key requires at least one option key');
  }

  const registerBinding = function(event) {
    event.keyCodes.forEach(function(code) {
      if (!bindings[code]) {
        bindings[code] = [];
      }

      bindings[code].push(event);
    });
  };

  mapKeys.forEach(function(text) {
    if (typeof map[text] !== 'function') {
      throw new TypeError('when/key requires option["' + text + '"] to be a function');
    }

    const addCallback = function(event) {
      event.callback = map[text];
      return event;
    };

    (0,_key_binding__WEBPACK_IMPORTED_MODULE_0__.default)(text)
      .map(addCallback)
      .forEach(registerBinding);
  });

  const handleKeyDown = function(event) {
    if (event.defaultPrevented) {
      return;
    }

    if (filter.length) {
      // ignore elements within the exempted sub-trees
      const isParentOfElement = (0,_util_compare_position__WEBPACK_IMPORTED_MODULE_2__.getParentComparator)({element: event.target, includeSelf: true});
      if (filter.some(isParentOfElement)) {
        return;
      }
    }

    const key = event.keyCode || event.which;
    if (!bindings[key]) {
      return;
    }

    bindings[key].forEach(function(_event) {
      if (!_event.matchModifiers(event)) {
        return;
      }

      _event.callback.call(context, event, disengage);
    });
  };

  context.addEventListener('keydown', handleKeyDown, false);

  const disengage = function() {
    context.removeEventListener('keydown', handleKeyDown, false);
  };

  return { disengage };
}


/***/ }),

/***/ "./node_modules/ally.js/src/when/visible-area.js":
/*!*******************************************************!*\
  !*** ./node_modules/ally.js/src/when/visible-area.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _prototype_window_requestanimationframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prototype/window.requestanimationframe */ "./node_modules/ally.js/src/prototype/window.requestanimationframe.js");
/* harmony import */ var _prototype_window_requestanimationframe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prototype_window_requestanimationframe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _is_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is/visible */ "./node_modules/ally.js/src/is/visible.js");
/* harmony import */ var _util_visible_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/visible-area */ "./node_modules/ally.js/src/util/visible-area.js");
/* harmony import */ var _util_context_to_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/context-to-element */ "./node_modules/ally.js/src/util/context-to-element.js");

/*
  execute a callback once an element became fully visible in the viewport
*/






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({context, callback, area} = {}) {
  if (typeof callback !== 'function') {
    throw new TypeError('when/visible-area requires options.callback to be a function');
  }

  if (typeof area !== 'number') {
    area = 1;
  }

  const element = (0,_util_context_to_element__WEBPACK_IMPORTED_MODULE_3__.default)({
    label: 'when/visible-area',
    context,
  });

  let raf;
  let evaluate = null;
  const disengage = function() {
    raf && cancelAnimationFrame(raf);
  };

  const predicate = function() {
    return !(0,_is_visible__WEBPACK_IMPORTED_MODULE_1__.default)(element) || (0,_util_visible_area__WEBPACK_IMPORTED_MODULE_2__.default)(element) < area || callback(element) === false;
  };

  const checkPredicate = function() {
    if (predicate()) {
      evaluate();
      return;
    }

    disengage();
  };

  evaluate = function() {
    raf = requestAnimationFrame(checkPredicate);
  };

  evaluate();
  return { disengage };
}


/***/ }),

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/***/ (function(module) {

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
  function domReady() {
    return new Promise(resolve => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function arrayUnique(array) {
    return Array.from(new Set(array));
  }
  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function warnIfMalformedTemplate(el, directive) {
    if (el.tagName.toLowerCase() !== 'template') {
      console.warn(`Alpine: [${directive}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${directive}`);
    } else if (el.content.childElementCount !== 1) {
      console.warn(`Alpine: <template> tag with [${directive}] encountered with multiple element roots. Make sure <template> only has a single child element.`);
    }
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function walk(el, callback) {
    if (callback(el) === false) return;
    let node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }
  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const handleError = (el, expression, error) => {
    console.warn(`Alpine Error: "${error}"\n\nExpression: "${expression}"\nElement:`, el);

    if (!isTesting()) {
      throw error;
    }
  };

  function tryCatch(cb, {
    el,
    expression
  }) {
    try {
      const value = cb();
      return value instanceof Promise ? value.catch(e => handleError(el, expression, e)) : value;
    } catch (e) {
      handleError(el, expression, e);
    }
  }

  function saferEval(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return expression.call(dataContext);
      }

      return new Function(['$data', ...Object.keys(additionalHelperVariables)], `var __alpine_result; with($data) { __alpine_result = ${expression} }; return __alpine_result`)(dataContext, ...Object.values(additionalHelperVariables));
    }, {
      el,
      expression
    });
  }
  function saferEvalNoReturn(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return Promise.resolve(expression.call(dataContext, additionalHelperVariables['$event']));
      }

      let AsyncFunction = Function;
      /* MODERN-ONLY:START */

      AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      /* MODERN-ONLY:END */
      // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
      // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.

      if (Object.keys(dataContext).includes(expression)) {
        let methodReference = new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));

        if (typeof methodReference === 'function') {
          return Promise.resolve(methodReference.call(dataContext, additionalHelperVariables['$event']));
        } else {
          return Promise.resolve();
        }
      }

      return Promise.resolve(new AsyncFunction(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables)));
    }, {
      el,
      expression
    });
  }
  const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
  function isXAttr(attr) {
    const name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }
  function getXAttrs(el, component, type) {
    let directives = Array.from(el.attributes).filter(isXAttr).map(parseHtmlAttribute); // Get an object of directives from x-spread.

    let spreadDirective = directives.filter(directive => directive.type === 'spread')[0];

    if (spreadDirective) {
      let spreadObject = saferEval(el, spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.

      directives = directives.concat(Object.entries(spreadObject).map(([name, value]) => parseHtmlAttribute({
        name,
        value
      })));
    }

    if (type) return directives.filter(i => i.type === type);
    return sortDirectives(directives);
  }

  function sortDirectives(directives) {
    let directiveOrder = ['bind', 'model', 'show', 'catch-all'];
    return directives.sort((a, b) => {
      let typeA = directiveOrder.indexOf(a.type) === -1 ? 'catch-all' : a.type;
      let typeB = directiveOrder.indexOf(b.type) === -1 ? 'catch-all' : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    });
  }

  function parseHtmlAttribute({
    name,
    value
  }) {
    const normalizedName = replaceAtAndColonWithStandardSyntax(name);
    const typeMatch = normalizedName.match(xAttrRE);
    const valueMatch = normalizedName.match(/:([a-zA-Z0-9\-:]+)/);
    const modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(i => i.replace('.', '')),
      expression: value
    };
  }
  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }
  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }
  function convertClassStringToArray(classList, filterFn = Boolean) {
    return classList.split(' ').filter(filterFn);
  }
  const TRANSITION_TYPE_IN = 'in';
  const TRANSITION_TYPE_OUT = 'out';
  const TRANSITION_CANCELLED = 'cancelled';
  function transitionIn(el, show, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_IN) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index < modifiers.indexOf('out')) : modifiers;
      transitionHelperIn(el, modifiers, show, reject); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.some(attr => ['enter', 'enter-start', 'enter-end'].includes(attr.value))) {
      transitionClassesIn(el, component, attrs, show, reject);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }
  function transitionOut(el, hide, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return hide();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_OUT) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index > modifiers.indexOf('out')) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide, reject);
    } else if (attrs.some(attr => ['leave', 'leave-start', 'leave-end'].includes(attr.value))) {
      transitionClassesOut(el, component, attrs, hide, reject);
    } else {
      hide();
    }
  }
  function transitionHelperIn(el, modifiers, showCallback, reject) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    const styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, () => {}, reject, styleValues, TRANSITION_TYPE_IN);
  }
  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback, reject) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    const duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    const styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, () => {}, hideCallback, reject, styleValues, TRANSITION_TYPE_OUT);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      let match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, reject, styleValues, type) {
    // clear the previous transition if exists to avoid caching the wrong styles
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    } // If the user set these style values, we'll put them back when we're done with them.


    const opacityCache = el.style.opacity;
    const transformCache = el.style.transform;
    const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    const noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    const transitionOpacity = noModifiers || modifiers.includes('opacity');
    const transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    const stages = {
      start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
      },

      during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? `opacity` : ``, transitionScale ? `transform` : ``].join(' ').trim();
        el.style.transitionDuration = `${styleValues.duration / 1000}s`;
        el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      },

      show() {
        hook1();
      },

      end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
      },

      hide() {
        hook2();
      },

      cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }

    };
    transition(el, stages, type, reject);
  }

  const ensureStringExpression = (expression, el, component) => {
    return typeof expression === 'function' ? component.evaluateReturnExpression(el, expression) : expression;
  };

  function transitionClassesIn(el, component, directives, showCallback, reject) {
    const enter = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter') || {
      expression: ''
    }).expression, el, component));
    const enterStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-start') || {
      expression: ''
    }).expression, el, component));
    const enterEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, () => {}, TRANSITION_TYPE_IN, reject);
  }
  function transitionClassesOut(el, component, directives, hideCallback, reject) {
    const leave = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave') || {
      expression: ''
    }).expression, el, component));
    const leaveStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-start') || {
      expression: ''
    }).expression, el, component));
    const leaveEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, leave, leaveStart, leaveEnd, () => {}, hideCallback, TRANSITION_TYPE_OUT, reject);
  }
  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2, type, reject) {
    // clear the previous transition if exists to avoid caching the wrong classes
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    }

    const originalClasses = el.__x_original_classes || [];
    const stages = {
      start() {
        el.classList.add(...classesStart);
      },

      during() {
        el.classList.add(...classesDuring);
      },

      show() {
        hook1();
      },

      end() {
        // Don't remove classes that were in the original class attribute.
        el.classList.remove(...classesStart.filter(i => !originalClasses.includes(i)));
        el.classList.add(...classesEnd);
      },

      hide() {
        hook2();
      },

      cleanup() {
        el.classList.remove(...classesDuring.filter(i => !originalClasses.includes(i)));
        el.classList.remove(...classesEnd.filter(i => !originalClasses.includes(i)));
      }

    };
    transition(el, stages, type, reject);
  }
  function transition(el, stages, type, reject) {
    const finish = once(() => {
      stages.hide(); // Adding an "isConnected" check, in case the callback
      // removed the element from the DOM.

      if (el.isConnected) {
        stages.cleanup();
      }

      delete el.__x_transition;
    });
    el.__x_transition = {
      // Set transition type so we can avoid clearing transition if the direction is the same
      type: type,
      // create a callback for the last stages of the transition so we can call it
      // from different point and early terminate it. Once will ensure that function
      // is only called one time.
      cancel: once(() => {
        reject(TRANSITION_CANCELLED);
        finish();
      }),
      finish,
      // This store the next animation frame so we can cancel it
      nextFrame: null
    };
    stages.start();
    stages.during();
    el.__x_transition.nextFrame = requestAnimationFrame(() => {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;

      if (duration === 0) {
        duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1000;
      }

      stages.show();
      el.__x_transition.nextFrame = requestAnimationFrame(() => {
        stages.end();
        setTimeout(el.__x_transition.finish, duration);
      });
    });
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  } // Thanks @vuejs
  // https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js

  function once(callback) {
    let called = false;
    return function () {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      }
    };
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfMalformedTemplate(templateEl, 'x-for');
    let iteratorNames = typeof expression === 'function' ? parseForExpression(component.evaluateReturnExpression(templateEl, expression)) : parseForExpression(expression);
    let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    let currentEl = templateEl;
    items.forEach((item, index) => {
      let iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      let currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      let nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, () => {}, () => {}, component, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, () => nextEl.__x_for); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, () => nextEl.__x_for);
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
  } // This was taken from VueJS 2.* core. Thanks Vue!

  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\(|\)$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].trim().replace(stripParensRE, '');
    let iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    let bindKeyAttribute = getXAttrs(el, component, 'bind').filter(attr => attr.value === 'key')[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, () => iterationScopeVariables);
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    let ifAttribute = getXAttrs(el, component, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    }

    let items = component.evaluateReturnExpression(el, iteratorNames.items, extraVars); // This adds support for the `i in n` syntax.

    if (isNumeric(items) && items > 0) {
      items = Array.from(Array(items).keys(), i => i + 1);
    }

    return items;
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    let clone = document.importNode(templateEl.content, true);
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If we are already past the x-for generated elements, we don't need to look ahead.

    if (nextEl.__x_for_key === undefined) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    let tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    while (nextElementFromOldLoop) {
      let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      let nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, () => {
        nextElementFromOldLoopImmutable.remove();
      }, () => {}, component);
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType, modifiers) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      if (Alpine.ignoreFocusedForValueBinding && document.activeElement.isSameNode(el)) return; // If nested model key is undefined, set the default value to empty string.

      if (value === undefined && expression.match(/\./)) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      } else if (el.type === 'checkbox') {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.
        if (typeof value !== 'boolean' && ![null, undefined].includes(value) && attrType === 'bind') {
          el.value = String(value);
        } else if (attrType !== 'bind') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            el.checked = value.some(val => checkedAttrLooseCompare(val, el.value));
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        const originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (typeof value === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        const keysSortedByBooleanValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        keysSortedByBooleanValue.forEach(classNames => {
          if (value[classNames]) {
            convertClassStringToArray(classNames).forEach(className => el.classList.add(className));
          } else {
            convertClassStringToArray(classNames).forEach(className => el.classList.remove(className));
          }
        });
      } else {
        const originalClasses = el.__x_original_classes || [];
        const newClasses = value ? convertClassStringToArray(value) : [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      attrName = modifiers.includes('camel') ? camelCase(attrName) : attrName; // If an attribute's bound value is null, undefined or false, remove the attribute

      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? setIfChanged(el, attrName, attrName) : setIfChanged(el, attrName, value);
      }
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map(value => {
      return value + '';
    });
    Array.from(el.options).forEach(option => {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && expression.match(/\./)) {
      output = '';
    }

    el.textContent = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
    const hide = () => {
      el.style.display = 'none';
      el.__x_is_shown = false;
    };

    const show = () => {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }

      el.__x_is_shown = true;
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    const handle = (resolve, reject) => {
      if (value) {
        if (el.style.display === 'none' || el.__x_transition) {
          transitionIn(el, () => {
            show();
          }, reject, component);
        }

        resolve(() => {});
      } else {
        if (el.style.display !== 'none') {
          transitionOut(el, () => {
            resolve(() => {
              hide();
            });
          }, reject, component);
        } else {
          resolve(() => {});
        }
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(finish => finish(), () => {});
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    }

    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    warnIfMalformedTemplate(el, 'x-if');
    const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && (!elementHasAlreadyBeenAdded || el.__x_transition)) {
      const clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, () => {}, () => {}, component, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, () => {
        el.nextElementSibling.remove();
      }, () => {}, component, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
    const options = {
      passive: modifiers.includes('passive')
    };

    if (modifiers.includes('camel')) {
      event = camelCase(event);
    }

    if (modifiers.includes('away')) {
      let handler = e => {
        // Don't do anything if the click came from the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler, options);
        }
      }; // Listen for this event at the root level.


      document.addEventListener(event, handler, options);
    } else {
      let listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      let handler = e => {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, handler, options);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          const returnValue = runListenerHandler(component, expression, e, extraVars);
          returnValue.then(value => {
            if (value === false) {
              e.preventDefault();
            } else {
              if (modifiers.includes('once')) {
                listenerTarget.removeEventListener(event, handler, options);
              }
            }
          });
        }
      };

      if (modifiers.includes('debounce')) {
        let nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
        let wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
        handler = debounce(handler, wait);
      }

      listenerTarget.addEventListener(event, handler, options);
    }
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter(i => {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      let debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e[`${modifier}Key`];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    registerListener(component, el, event, modifiers, listenerExpression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return (event, currentValue) => {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle its value inside the array.
        if (Array.isArray(currentValue)) {
          const newValue = modifiers.includes('number') ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(el => !checkedAttrLooseCompare(el, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(option => {
          const rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        const rawValue = event.target.value;
        return modifiers.includes('number') ? safeParseNumber(rawValue) : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  function safeParseNumber(rawValue) {
    const number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
  }

  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  const { isArray } = Array;
  const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty, } = Object;
  const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap, } = Array.prototype;
  function isUndefined(obj) {
      return obj === undefined;
  }
  function isFunction(obj) {
      return typeof obj === 'function';
  }
  function isObject(obj) {
      return typeof obj === 'object';
  }
  const proxyToValueMap = new WeakMap();
  function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
  }
  const unwrap = (replicaOrAny) => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
  }
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach((key) => {
          let descriptor = getOwnPropertyDescriptor(originalTarget, key);
          // We do not need to wrap the descriptor if configurable
          // Because we can deal with wrapping it when user goes through
          // Get own property descriptor. There is also a chance that this descriptor
          // could change sometime in the future, so we can defer wrapping
          // until we need to
          if (!descriptor.configurable) {
              descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
          }
          ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
  }
  class ReactiveProxyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
          const { originalTarget, membrane: { valueMutated } } = this;
          const oldValue = originalTarget[key];
          if (oldValue !== value) {
              originalTarget[key] = value;
              valueMutated(originalTarget, key);
          }
          else if (key === 'length' && isArray(originalTarget)) {
              // fix for issue #236: push will add the new index, and by the time length
              // is updated, the internal length is already equal to the new length value
              // therefore, the oldValue is equal to the value. This is the forking logic
              // to support this use case.
              valueMutated(originalTarget, key);
          }
          return true;
      }
      deleteProperty(shadowTarget, key) {
          const { originalTarget, membrane: { valueMutated } } = this;
          delete originalTarget[key];
          valueMutated(originalTarget, key);
          return true;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      isExtensible(shadowTarget) {
          const shadowIsExtensible = isExtensible(shadowTarget);
          if (!shadowIsExtensible) {
              return shadowIsExtensible;
          }
          const { originalTarget, membrane } = this;
          const targetIsExtensible = isExtensible(originalTarget);
          if (!targetIsExtensible) {
              lockShadowTarget(membrane, shadowTarget, originalTarget);
          }
          return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getPrototypeOf(shadowTarget) {
          const { originalTarget } = this;
          return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = this.membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value, setter or getter (if available) cannot observe
          // mutations, just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapValue);
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          const { originalTarget, membrane } = this;
          lockShadowTarget(membrane, shadowTarget, originalTarget);
          preventExtensions(originalTarget);
          return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
          const { originalTarget, membrane } = this;
          const { valueMutated } = membrane;
          const { configurable } = descriptor;
          // We have to check for value in descriptor
          // because Object.freeze(proxy) calls this method
          // with only { configurable: false, writeable: false }
          // Additionally, method will only be called with writeable:false
          // if the descriptor has a value, as opposed to getter/setter
          // So we can just check if writable is present and then see if
          // value is present. This eliminates getter and setter descriptors
          if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
              const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
              descriptor.value = originalDescriptor.value;
          }
          ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
          if (configurable === false) {
              ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
          }
          valueMutated(originalTarget, key);
          return true;
      }
  }

  function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  class ReadOnlyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { membrane, originalTarget } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
          return false;
      }
      deleteProperty(shadowTarget, key) {
          return false;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value or getter (if available) cannot be observed,
          // just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
          if (hasOwnProperty.call(desc, 'set')) {
              desc.set = undefined; // readOnly membrane does not allow setters
          }
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
          return false;
      }
  }
  function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
          shadowTarget = [];
      }
      else if (isObject(value)) {
          shadowTarget = {};
      }
      return shadowTarget;
  }
  const ObjectDotPrototype = Object.prototype;
  function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
          return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
          return false;
      }
      if (isArray(value)) {
          return true;
      }
      const proto = getPrototypeOf(value);
      return (proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null);
  }
  const defaultValueObserved = (obj, key) => {
      /* do nothing */
  };
  const defaultValueMutated = (obj, key) => {
      /* do nothing */
  };
  const defaultValueDistortion = (value) => value;
  function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = getValue(membrane, descriptor.value);
      }
      else {
          if (!isUndefined(get)) {
              descriptor.get = function () {
                  // invoking the original getter with the original target
                  return getValue(membrane, get.call(unwrap(this)));
              };
          }
          if (!isUndefined(set)) {
              descriptor.set = function (value) {
                  // At this point we don't have a clear indication of whether
                  // or not a valid mutation will occur, we don't have the key,
                  // and we are not sure why and how they are invoking this setter.
                  // Nevertheless we preserve the original semantics by invoking the
                  // original setter with the original target and the unwrapped value
                  set.call(unwrap(this), membrane.unwrapProxy(value));
              };
          }
      }
      return descriptor;
  }
  class ReactiveMembrane {
      constructor(options) {
          this.valueDistortion = defaultValueDistortion;
          this.valueMutated = defaultValueMutated;
          this.valueObserved = defaultValueObserved;
          this.valueIsObservable = defaultValueIsObservable;
          this.objectGraph = new WeakMap();
          if (!isUndefined(options)) {
              const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
              this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
              this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
              this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
              this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
          }
      }
      getProxy(value) {
          const unwrappedValue = unwrap(value);
          const distorted = this.valueDistortion(unwrappedValue);
          if (this.valueIsObservable(distorted)) {
              const o = this.getReactiveState(unwrappedValue, distorted);
              // when trying to extract the writable version of a readonly
              // we return the readonly.
              return o.readOnly === value ? value : o.reactive;
          }
          return distorted;
      }
      getReadOnlyProxy(value) {
          value = unwrap(value);
          const distorted = this.valueDistortion(value);
          if (this.valueIsObservable(distorted)) {
              return this.getReactiveState(value, distorted).readOnly;
          }
          return distorted;
      }
      unwrapProxy(p) {
          return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
          const { objectGraph, } = this;
          let reactiveState = objectGraph.get(distortedValue);
          if (reactiveState) {
              return reactiveState;
          }
          const membrane = this;
          reactiveState = {
              get reactive() {
                  const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                  // caching the reactive proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'reactive', { value: proxy });
                  return proxy;
              },
              get readOnly() {
                  const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                  // caching the readOnly proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'readOnly', { value: proxy });
                  return proxy;
              }
          };
          objectGraph.set(distortedValue, reactiveState);
          return reactiveState;
      }
  }
  /** version: 0.26.0 */

  function wrap(data, mutationCallback) {

    let membrane = new ReactiveMembrane({
      valueMutated(target, key) {
        mutationCallback(target, key);
      }

    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }
  function unwrap$1(membrane, observable) {
    let unwrappedData = membrane.unwrapProxy(observable);
    let copy = {};
    Object.keys(unwrappedData).forEach(key => {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  class Component {
    constructor(el, componentForClone = null) {
      this.$el = el;
      const dataAttr = this.$el.getAttribute('x-data');
      const dataExpression = dataAttr === '' ? '{}' : dataAttr;
      const initExpression = this.$el.getAttribute('x-init');
      let dataExtras = {
        $el: this.$el
      };
      let canonicalComponentElementReference = componentForClone ? componentForClone.$el : this.$el;
      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(dataExtras, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.unobservedData = componentForClone ? componentForClone.getUnobservedData() : saferEval(el, dataExpression, dataExtras);
      // Construct a Proxy-based observable. This will be used to handle reactivity.

      let {
        membrane,
        data
      } = this.wrapDataInObservable(this.unobservedData);
      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = callback => {
        this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = (property, callback) => {
        if (!this.watchers[property]) this.watchers[property] = [];
        this.watchers[property].push(callback);
      };
      /* MODERN-ONLY:START */
      // We remove this piece of code from the legacy build.
      // In IE11, we have already defined our helpers at this point.
      // Register custom magic properties.


      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(this.unobservedData, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference, this.$el);
          }
        });
      });
      /* MODERN-ONLY:END */

      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      componentForClone || Alpine.onBeforeComponentInitializeds.forEach(callback => callback(this));
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !componentForClone) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.


      this.initializeElements(this.$el); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }

      componentForClone || setTimeout(() => {
        Alpine.onComponentInitializeds.forEach(callback => callback(this));
      }, 0);
    }

    getUnobservedData() {
      return unwrap$1(this.membrane, this.$data);
    }

    wrapDataInObservable(data) {
      var self = this;
      let updateDom = debounce(function () {
        self.updateElements(self.$el);
      }, 0);
      return wrap(data, (target, key) => {
        if (self.watchers[key]) {
          // If there's a watcher for this specific key, run it.
          self.watchers[key].forEach(callback => callback(target[key]));
        } else if (Array.isArray(target)) {
          // Arrays are special cases, if any of the items change, we consider the array as mutated.
          Object.keys(self.watchers).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // Ignore length mutations since they would result in duplicate calls.
            // For example, when calling push, we would get a mutation for the item's key
            // and a second mutation for the length property.

            if (key === 'length') return;
            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData[part])) {
                self.watchers[fullDotNotationKey].forEach(callback => callback(target));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } else {
          // Let's walk through the watchers with "dot-notation" (foo.bar) and see
          // if this mutation fits any of them.
          Object.keys(self.watchers).filter(i => i.includes('.')).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
            // key, then skip it early for performance reasons.

            if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
            // a match, and call the watcher if one's found.

            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData)) {
                // Run the watchers.
                self.watchers[fullDotNotationKey].forEach(callback => callback(target[key]));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } // Don't react to data changes for cases like the `x-created` hook.


        if (self.pauseReactivity) return;
        updateDom();
      });
    }

    walkAndSkipNestedComponents(el, callback, initializeComponentCallback = () => {}) {
      walk(el, el => {
        // We've hit a component.
        if (el.hasAttribute('x-data')) {
          // If it's not the current one.
          if (!el.isSameNode(this.$el)) {
            // Initialize it if it's not.
            if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

            return false;
          }
        }

        return callback(el);
      });
    }

    initializeElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop
        if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

        if (el.__x_inserted_me !== undefined) return false;
        this.initializeElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    initializeElement(el, extraVars) {
      // To support class attribute merging, we have to know what the element's
      // original class attribute looked like for reference.
      if (el.hasAttribute('class') && getXAttrs(el, this).length > 0) {
        el.__x_original_classes = convertClassStringToArray(el.getAttribute('class'));
      }

      this.registerListeners(el, extraVars);
      this.resolveBoundAttributes(el, true, extraVars);
    }

    updateElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
        if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
        this.updateElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    executeAndClearNextTickStack(el) {
      // Skip spawns from alpine directives
      if (el === this.$el && this.nextTickStack.length > 0) {
        // We run the tick stack after the next frame to allow any
        // running transitions to pass the initial show stage.
        requestAnimationFrame(() => {
          while (this.nextTickStack.length > 0) {
            this.nextTickStack.shift()();
          }
        });
      }
    }

    executeAndClearRemainingShowDirectiveStack() {
      // The goal here is to start all the x-show transitions
      // and build a nested promise chain so that elements
      // only hide when the children are finished hiding.
      this.showDirectiveStack.reverse().map(handler => {
        return new Promise((resolve, reject) => {
          handler(resolve, reject);
        });
      }).reduce((promiseChain, promise) => {
        return promiseChain.then(() => {
          return promise.then(finishElement => {
            finishElement();
          });
        });
      }, Promise.resolve(() => {})).catch(e => {
        if (e !== TRANSITION_CANCELLED) throw e;
      }); // We've processed the handler stack. let's clear it.

      this.showDirectiveStack = [];
      this.showDirectiveLastElement = undefined;
    }

    updateElement(el, extraVars) {
      this.resolveBoundAttributes(el, false, extraVars);
    }

    registerListeners(el, extraVars) {
      getXAttrs(el, this).forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'on':
            registerListener(this, el, value, modifiers, expression, extraVars);
            break;

          case 'model':
            registerModelListener(this, el, modifiers, expression, extraVars);
            break;
        }
      });
    }

    resolveBoundAttributes(el, initialUpdate = false, extraVars) {
      let attrs = getXAttrs(el, this);
      attrs.forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'model':
            handleAttributeBindingDirective(this, el, 'value', expression, extraVars, type, modifiers);
            break;

          case 'bind':
            // The :key binding on an x-for is special, ignore it.
            if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
            handleAttributeBindingDirective(this, el, value, expression, extraVars, type, modifiers);
            break;

          case 'text':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleTextDirective(el, output, expression);
            break;

          case 'html':
            handleHtmlDirective(this, el, expression, extraVars);
            break;

          case 'show':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleShowDirective(this, el, output, modifiers, initialUpdate);
            break;

          case 'if':
            // If this element also has x-for on it, don't process x-if.
            // We will let the "x-for" directive handle the "if"ing.
            if (attrs.some(i => i.type === 'for')) return;
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleIfDirective(this, el, output, initialUpdate, extraVars);
            break;

          case 'for':
            handleForDirective(this, el, expression, initialUpdate, extraVars);
            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;
        }
      });
    }

    evaluateReturnExpression(el, expression, extraVars = () => {}) {
      return saferEval(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    evaluateCommandExpression(el, expression, extraVars = () => {}) {
      return saferEvalNoReturn(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    getDispatchFunction(el) {
      return (event, detail = {}) => {
        el.dispatchEvent(new CustomEvent(event, {
          detail,
          bubbles: true
        }));
      };
    }

    listenForNewElementsToInitialize() {
      const targetNode = this.$el;
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          const closestParentComponent = mutations[i].target.closest('[x-data]');
          if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) continue;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            const xAttr = mutations[i].target.getAttribute('x-data') || '{}';
            const rawData = saferEval(this.$el, xAttr, {
              $el: this.$el
            });
            Object.keys(rawData).forEach(key => {
              if (this.$data[key] !== rawData[key]) {
                this.$data[key] = rawData[key];
              }
            });
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              if (node.nodeType !== 1 || node.__x_inserted_me) return;

              if (node.matches('[x-data]') && !node.__x) {
                node.__x = new Component(node);
                return;
              }

              this.initializeElements(node);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }

    getRefsProxy() {
      var self = this;
      var refObj = {};
      // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy(refObj, {
        get(object, property) {
          if (property === '$isAlpineProxy') return true;
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          self.walkAndSkipNestedComponents(self.$el, el => {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }

      });
    }

  }

  const Alpine = {
    version: "2.8.0",
    pauseMutationObserver: false,
    magicProperties: {},
    onComponentInitializeds: [],
    onBeforeComponentInitializeds: [],
    ignoreFocusedForValueBinding: false,
    start: async function start() {
      if (!isTesting()) {
        await domReady();
      }

      this.discoverComponents(el => {
        this.initializeComponent(el);
      }); // It's easier and more performant to just support Turbolinks than listen
      // to MutationObserver mutations at the document level.

      document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(el => {
          this.initializeComponent(el);
        });
      });
      this.listenForNewUninitializedComponentsAtRunTime();
    },
    discoverComponents: function discoverComponents(callback) {
      const rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(rootEl => {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
      const rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(el => el.__x === undefined).forEach(rootEl => {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime() {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        if (this.pauseMutationObserver) return;

        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;
              this.discoverUninitializedComponents(el => {
                this.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        // Wrap in a try/catch so that we don't prevent other components
        // from initializing when one component contains an error.
        try {
          el.__x = new Component(el);
        } catch (error) {
          setTimeout(() => {
            throw error;
          }, 0);
        }
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component);
      }
    },
    addMagicProperty: function addMagicProperty(name, callback) {
      this.magicProperties[name] = callback;
    },
    onComponentInitialized: function onComponentInitialized(callback) {
      this.onComponentInitializeds.push(callback);
    },
    onBeforeComponentInitialized: function onBeforeComponentInitialized(callback) {
      this.onBeforeComponentInitializeds.push(callback);
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;

})));


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/lib/core.js");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/php */ "./node_modules/highlight.js/lib/languages/php.js");
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_languages_shell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/shell */ "./node_modules/highlight.js/lib/languages/shell.js");
/* harmony import */ var highlight_js_lib_languages_shell__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_shell__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/bash */ "./node_modules/highlight.js/lib/languages/bash.js");
/* harmony import */ var highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/json */ "./node_modules/highlight.js/lib/languages/json.js");
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highlight_js_lib_languages_diff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js/lib/languages/diff */ "./node_modules/highlight.js/lib/languages/diff.js");
/* harmony import */ var highlight_js_lib_languages_diff__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_diff__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var quicklink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! quicklink */ "./node_modules/quicklink/dist/quicklink.mjs");
/* harmony import */ var _docsearch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @docsearch/js */ "./node_modules/@docsearch/js/dist/esm/index.js");
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clipboard */ "./resources/js/clipboard.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav */ "./resources/js/nav.js");










 // Configure Highlight.js

highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('php', (highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('shell', (highlight_js_lib_languages_shell__WEBPACK_IMPORTED_MODULE_2___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('bash', (highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_3___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('json', (highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_4___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('diff', (highlight_js_lib_languages_diff__WEBPACK_IMPORTED_MODULE_5___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().configure({
  classPrefix: 'hljs-'
}); // Configure DocSearch

(0,_docsearch_js__WEBPACK_IMPORTED_MODULE_10__.default)({
  container: '#docsearch',
  apiKey: 'd25b0b281fd72e7b8ce770857fff45bf',
  indexName: 'pestphp'
});
document.querySelectorAll('pre code').forEach(function (block) {
  highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().initHighlightingOnLoad();
});
window.addEventListener('load', function () {
  (0,quicklink__WEBPACK_IMPORTED_MODULE_7__.listen)();
});

/***/ }),

/***/ "./resources/js/clipboard.js":
/*!***********************************!*\
  !*** ./resources/js/clipboard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var clipboard_dist_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clipboard/dist/clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard_dist_clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard_dist_clipboard__WEBPACK_IMPORTED_MODULE_0__);

var clipboardIcon = "\n    <svg fill=\"currentColor\" class=\"fill-current h-6 w-6\" viewBox=\"0 0 20 20\">\n        <path d=\"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z\"></path>\n        <path d=\"M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z\">\n    </path></svg>";
var clipboardCopiedIcon = "\n    <svg fill=\"currentColor\" class=\"fill-current text-white h-6 w-6\" viewBox=\"0 0 20 20\"><path d=\"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z\"></path>\n        <path fill-rule=\"evenodd\" d=\"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2\n         0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clip-rule=\"evenodd\">\n    </path></svg>"; // Copy to Clipboard

var codeBlocks = document.querySelectorAll('pre');
codeBlocks.forEach(function (element, key) {
  // Copy to clipboard button
  var copyToClipboardBtn = document.createElement('button');
  copyToClipboardBtn.innerHTML = clipboardIcon;
  copyToClipboardBtn.id = "clipButton-".concat(key);
  ['lg:block', 'hidden'].forEach(function (value) {
    copyToClipboardBtn.classList.add(value);
  });
  copyToClipboardBtn.setAttribute('aria-label', 'Copy to Clipboard');
  copyToClipboardBtn.setAttribute('title', 'Copy to Clipboard');
  copyToClipboardBtn.classList.add('copyBtn');
  element.appendChild(copyToClipboardBtn);
  var copyToClipboard = new (clipboard_dist_clipboard__WEBPACK_IMPORTED_MODULE_0___default())("#".concat(copyToClipboardBtn.id));
  copyToClipboard.on('success', function (element) {
    copyToClipboardBtn.innerHTML = clipboardCopiedIcon;
    element.clearSelection();
    setTimeout(function () {
      copyToClipboardBtn.innerHTML = clipboardIcon;
    }, 1500);
  }); // Code Element

  var codeElement = element.querySelector('code');
  codeElement.id = "clipText-".concat(key);
  copyToClipboardBtn.dataset.clipboardTarget = "#".concat(codeElement.id);
});

/***/ }),

/***/ "./resources/js/nav.js":
/*!*****************************!*\
  !*** ./resources/js/nav.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ally_js_src_query_first_tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ally.js/src/query/first-tabbable */ "./node_modules/ally.js/src/query/first-tabbable.js");
/* harmony import */ var ally_js_src_maintain_tab_focus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ally.js/src/maintain/tab-focus */ "./node_modules/ally.js/src/maintain/tab-focus.js");
/* harmony import */ var ally_js_src_when_visible_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ally.js/src/when/visible-area */ "./node_modules/ally.js/src/when/visible-area.js");




window.AppOffCanvasMenu = function () {
  return {
    isOpen: false,
    lastActiveElement: null,
    trapFocus: null,

    /*
     * This open's the dialog
     *
    */
    toggle: function toggle() {
      if (!this.isOpen) {
        this.open();
      } else {
        this.close();
      }
    },
    open: function open() {
      var _this = this;

      // Checks if [x-ref="dialog"] exists
      if (!this.$refs.dialog) return; // Gets the focused element before dialog opens

      this.lastActiveElement = document.activeElement; // Adds .overflow-hidden class to body to prevent scrolling out of dialog

      document.body.classList.add('overflow-hidden');
      document.body.classList.add('lg:overflow-visible'); // Opens the dialog

      this.isOpen = true; // Run's after Alpine's magic things

      this.$nextTick(function () {
        // Traps focus to [x-ref="dialog"]
        _this.trapFocus = (0,ally_js_src_maintain_tab_focus__WEBPACK_IMPORTED_MODULE_1__.default)({
          context: _this.$refs.dialog
        }); // Wait's until find visible items in dialog

        (0,ally_js_src_when_visible_area__WEBPACK_IMPORTED_MODULE_2__.default)({
          context: _this.$refs.dialog,
          // Finds the first tabbable element
          callback: function callback(element) {
            var target = (0,ally_js_src_query_first_tabbable__WEBPACK_IMPORTED_MODULE_0__.default)({
              context: element,
              defaultToContext: true,
              strategy: 'quick'
            }); // And set's to the first focused element

            if (target) target.focus();
          }
        });
      });
    },
    close: function close() {
      var _this2 = this;

      document.body.classList.remove('overflow-hidden');
      this.isOpen = false;
      this.$nextTick(function () {
        _this2.trapFocus.disengage();

        if (_this2.lastActiveElement) _this2.lastActiveElement.focus();
      });
    }
  };
}; // Activates current url in Docs Navigation


var current = document.querySelector('.docs-nav ul a[href="' + window.location.pathname + '"]');

if (current) {
  current.parentNode.classList.add('active');
}

/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_637__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_637__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_637__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_637__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_637__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_637__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_637__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_637__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_637__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_637__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_637__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_637__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_637__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_637__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_637__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_637__(__nested_webpack_require_637__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_6836__) {

var is = __nested_webpack_require_6836__(3);
var delegate = __nested_webpack_require_6836__(4);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_10434__) {

var closest = __nested_webpack_require_10434__(5);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_13563__) {

"use strict";
__nested_webpack_require_13563__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __nested_webpack_require_13563__(0);
var select_default = /*#__PURE__*/__nested_webpack_require_13563__.n(src_select);

// CONCATENATED MODULE: ./src/clipboard-action.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */

var clipboard_action_ClipboardAction = function () {
    /**
     * @param {Object} options
     */
    function ClipboardAction(options) {
        _classCallCheck(this, ClipboardAction);

        this.resolveOptions(options);
        this.initSelection();
    }

    /**
     * Defines base properties passed from constructor.
     * @param {Object} options
     */


    _createClass(ClipboardAction, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText = '';
        }

        /**
         * Decides which selection strategy is going to be applied based
         * on the existence of `text` and `target` properties.
         */

    }, {
        key: 'initSelection',
        value: function initSelection() {
            if (this.text) {
                this.selectFake();
            } else if (this.target) {
                this.selectTarget();
            }
        }

        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         */

    }, {
        key: 'selectFake',
        value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = function () {
                return _this.removeFake();
            };
            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';

            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;

            this.container.appendChild(this.fakeElem);

            this.selectedText = select_default()(this.fakeElem);
            this.copyText();
        }

        /**
         * Only removes the fake element after another click event, that way
         * a user can hit `Ctrl+C` to copy because selection still exists.
         */

    }, {
        key: 'removeFake',
        value: function removeFake() {
            if (this.fakeHandler) {
                this.container.removeEventListener('click', this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
            }
        }

        /**
         * Selects the content from element passed on `target` property.
         */

    }, {
        key: 'selectTarget',
        value: function selectTarget() {
            this.selectedText = select_default()(this.target);
            this.copyText();
        }

        /**
         * Executes the copy operation based on the current selection.
         */

    }, {
        key: 'copyText',
        value: function copyText() {
            var succeeded = void 0;

            try {
                succeeded = document.execCommand(this.action);
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        }

        /**
         * Fires an event based on the copy operation result.
         * @param {Boolean} succeeded
         */

    }, {
        key: 'handleResult',
        value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        }

        /**
         * Moves focus away from `target` and back to the trigger, removes current selection.
         */

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this.trigger) {
                this.trigger.focus();
            }
            document.activeElement.blur();
            window.getSelection().removeAllRanges();
        }

        /**
         * Sets the `action` to be performed which can be either 'copy' or 'cut'.
         * @param {String} action
         */

    }, {
        key: 'destroy',


        /**
         * Destroy lifecycle.
         */
        value: function destroy() {
            this.removeFake();
        }
    }, {
        key: 'action',
        set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
        }

        /**
         * Gets the `action` property.
         * @return {String}
         */
        ,
        get: function get() {
            return this._action;
        }

        /**
         * Sets the `target` property using an element
         * that will be have its content copied.
         * @param {Element} target
         */

    }, {
        key: 'target',
        set: function set(target) {
            if (target !== undefined) {
                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                }
            }
        }

        /**
         * Gets the `target` property.
         * @return {String|HTMLElement}
         */
        ,
        get: function get() {
            return this._target;
        }
    }]);

    return ClipboardAction;
}();

/* harmony default export */ var clipboard_action = (clipboard_action_ClipboardAction);
// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __nested_webpack_require_13563__(1);
var tiny_emitter_default = /*#__PURE__*/__nested_webpack_require_13563__.n(tiny_emitter);

// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __nested_webpack_require_13563__(2);
var listen_default = /*#__PURE__*/__nested_webpack_require_13563__.n(listen);

// CONCATENATED MODULE: ./src/clipboard.js
var clipboard_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clipboard_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */

var clipboard_Clipboard = function (_Emitter) {
    _inherits(Clipboard, _Emitter);

    /**
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     * @param {Object} options
     */
    function Clipboard(trigger, options) {
        clipboard_classCallCheck(this, Clipboard);

        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

        _this.resolveOptions(options);
        _this.listenClick(trigger);
        return _this;
    }

    /**
     * Defines if attributes would be resolved using internal setter functions
     * or custom functions that were passed in the constructor.
     * @param {Object} options
     */


    clipboard_createClass(Clipboard, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
        }

        /**
         * Adds a click event listener to the passed trigger.
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         */

    }, {
        key: 'listenClick',
        value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = listen_default()(trigger, 'click', function (e) {
                return _this2.onClick(e);
            });
        }

        /**
         * Defines a new `ClipboardAction` on each click event.
         * @param {Event} e
         */

    }, {
        key: 'onClick',
        value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
                this.clipboardAction = null;
            }

            this.clipboardAction = new clipboard_action({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger: trigger,
                emitter: this
            });
        }

        /**
         * Default `action` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultAction',
        value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
        }

        /**
         * Default `target` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultTarget',
        value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
                return document.querySelector(selector);
            }
        }

        /**
         * Returns the support of the given action, or all actions if no action is
         * given.
         * @param {String} [action]
         */

    }, {
        key: 'defaultText',


        /**
         * Default `text` lookup function.
         * @param {Element} trigger
         */
        value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
        }

        /**
         * Destroy lifecycle.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
            }
        }
    }], [{
        key: 'isSupported',
        value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;

            actions.forEach(function (action) {
                support = support && !!document.queryCommandSupported(action);
            });

            return support;
        }
    }]);

    return Clipboard;
}(tiny_emitter_default.a);

/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */


function getAttributeValue(suffix, element) {
    var attribute = 'data-clipboard-' + suffix;

    if (!element.hasAttribute(attribute)) {
        return;
    }

    return element.getAttribute(attribute);
}

/* harmony default export */ var clipboard = __webpack_exports__["default"] = (clipboard_Clipboard);

/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "./node_modules/css.escape/css.escape.js":
/*!***********************************************!*\
  !*** ./node_modules/css.escape/css.escape.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;(function(root, factory) {
	// https://github.com/umdjs/umd/blob/master/returnExports.js
	if (true) {
		// For Node.js.
		module.exports = factory(root);
	} else {}
}(typeof __webpack_require__.g != 'undefined' ? __webpack_require__.g : this, function(root) {

	if (root.CSS && root.CSS.escape) {
		return root.CSS.escape;
	}

	// https://drafts.csswg.org/cssom/#serialize-an-identifier
	var cssEscape = function(value) {
		if (arguments.length == 0) {
			throw new TypeError('`CSS.escape` requires an argument.');
		}
		var string = String(value);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
			// (U+FFFD).
			if (codeUnit == 0x0000) {
				result += '\uFFFD';
				continue;
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index == 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit == 0x002D
				)
			) {
				// https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			if (
				// If the character is the first character and is a `-` (U+002D), and
				// there is no second character, […]
				index == 0 &&
				length == 1 &&
				codeUnit == 0x002D
			) {
				result += '\\' + string.charAt(index);
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit == 0x002D ||
				codeUnit == 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// https://drafts.csswg.org/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}
		return result;
	};

	if (!root.CSS) {
		root.CSS = {};
	}

	root.CSS.escape = cssEscape;
	return cssEscape;

}));


/***/ }),

/***/ "./node_modules/highlight.js/lib/core.js":
/*!***********************************************!*\
  !*** ./node_modules/highlight.js/lib/core.js ***!
  \***********************************************/
/***/ ((module) => {

function deepFreeze(obj) {
    if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function () {
            throw new Error('map is read-only');
        };
    } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function () {
            throw new Error('set is read-only');
        };
    }

    // Freeze self
    Object.freeze(obj);

    Object.getOwnPropertyNames(obj).forEach(function (name) {
        var prop = obj[name];

        // Freeze prop if it is an object
        if (typeof prop == 'object' && !Object.isFrozen(prop)) {
            deepFreeze(prop);
        }
    });

    return obj;
}

var deepFreezeEs6 = deepFreeze;
var _default = deepFreeze;
deepFreezeEs6.default = _default;

class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    // eslint-disable-next-line no-undefined
    if (mode.data === undefined) mode.data = {};

    this.data = mode.data;
  }

  ignoreMatch() {
    this.ignore = true;
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */
function inherit(original, ...objects) {
  /** @type Record<string,any> */
  const result = Object.create(null);

  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return /** @type {T} */ (result);
}

/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */

/** @typedef {{kind?: string, sublanguage?: boolean}} Node */
/** @typedef {{walk: (r: Renderer) => void}} Tree */
/** */

const SPAN_CLOSE = '</span>';

/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */
const emitsWrappingTags = (node) => {
  return !!node.kind;
};

/** @type {Renderer} */
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }

  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }

  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node)) return;

    let className = node.kind;
    if (!node.sublanguage) {
      className = `${this.classPrefix}${className}`;
    }
    this.span(className);
  }

  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node)) return;

    this.buffer += SPAN_CLOSE;
  }

  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }

  // helpers

  /**
   * Builds a span element
   *
   * @param {string} className */
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}

/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} | string} Node */
/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} } DataNode */
/**  */

class TokenTree {
  constructor() {
    /** @type DataNode */
    this.rootNode = { children: [] };
    this.stack = [this.rootNode];
  }

  get top() {
    return this.stack[this.stack.length - 1];
  }

  get root() { return this.rootNode; }

  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }

  /** @param {string} kind */
  openNode(kind) {
    /** @type Node */
    const node = { kind, children: [] };
    this.add(node);
    this.stack.push(node);
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    // eslint-disable-next-line no-undefined
    return undefined;
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }

  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    // this does not
    return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
  }

  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }

  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string") return;
    if (!node.children) return;

    if (node.children.every(el => typeof el === "string")) {
      // node.text = node.children.join("");
      // delete node.children;
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}

/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addKeyword(text, kind)
  - addText(text)
  - addSublanguage(emitter, subLanguageName)
  - finalize()
  - openNode(kind)
  - closeNode()
  - closeAllNodes()
  - toHTML()

*/

/**
 * @implements {Emitter}
 */
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }

  /**
   * @param {string} text
   * @param {string} kind
   */
  addKeyword(text, kind) {
    if (text === "") { return; }

    this.openNode(kind);
    this.addText(text);
    this.closeNode();
  }

  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") { return; }

    this.add(text);
  }

  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  addSublanguage(emitter, name) {
    /** @type DataNode */
    const node = emitter.root;
    node.kind = name;
    node.sublanguage = true;
    this.add(node);
  }

  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }

  finalize() {
    return true;
  }
}

/**
 * @param {string} value
 * @returns {RegExp}
 * */
function escape(value) {
  return new RegExp(value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/**
 * @param {RegExp} re
 * @returns {number}
 */
function countMatchGroups(re) {
  return (new RegExp(re.toString() + '|')).exec('').length - 1;
}

/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}

// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {string} separator
 * @returns {string}
 */
function join(regexps, separator = "|") {
  // backreferenceRe matches an open parenthesis or backreference. To avoid
  // an incorrect parse, it additionally matches the following:
  // - [...] elements, where the meaning of parentheses and escapes change
  // - other escape sequences, so we do not misparse escape sequences as
  //   interesting elements
  // - non-matching or lookahead parentheses, which do not capture. These
  //   follow the '(' with a '?'.
  const backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  let numCaptures = 0;
  let ret = '';
  for (let i = 0; i < regexps.length; i++) {
    numCaptures += 1;
    const offset = numCaptures;
    let re = source(regexps[i]);
    if (i > 0) {
      ret += separator;
    }
    ret += "(";
    while (re.length > 0) {
      const match = backreferenceRe.exec(re);
      if (match == null) {
        ret += re;
        break;
      }
      ret += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === '\\' && match[1]) {
        // Adjust the backreference.
        ret += '\\' + String(Number(match[1]) + offset);
      } else {
        ret += match[0];
        if (match[0] === '(') {
          numCaptures++;
        }
      }
    }
    ret += ")";
  }
  return ret;
}

// Common regexps
const IDENT_RE = '[a-zA-Z]\\w*';
const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/);
  }
  return inherit({
    className: 'meta',
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m, resp) => {
      if (m.index !== 0) resp.ignoreMatch();
    }
  }, opts);
};

// Common modes
const BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]', relevance: 0
};
const APOS_STRING_MODE = {
  className: 'string',
  begin: '\'',
  end: '\'',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  className: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit(
    {
      className: 'comment',
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push(PHRASAL_WORDS_MODE);
  mode.contains.push({
    className: 'doctag',
    begin: '(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):',
    relevance: 0
  });
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT('//', '$');
const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
const HASH_COMMENT_MODE = COMMENT('#', '$');
const NUMBER_MODE = {
  className: 'number',
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  className: 'number',
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  className: 'number',
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const CSS_NUMBER_MODE = {
  className: 'number',
  begin: NUMBER_RE + '(' +
    '%|em|ex|ch|rem' +
    '|vw|vh|vmin|vmax' +
    '|cm|mm|in|pt|pc|px' +
    '|deg|grad|rad|turn' +
    '|s|ms' +
    '|Hz|kHz' +
    '|dpi|dpcm|dppx' +
    ')?',
  relevance: 0
};
const REGEXP_MODE = {
  // this outer rule makes sure we actually have a WHOLE regex and not simply
  // an expression such as:
  //
  //     3 / something
  //
  // (which will then blow up when regex's `illegal` sees the newline)
  begin: /(?=\/[^/\n]*\/)/,
  contains: [{
    className: 'regexp',
    begin: /\//,
    end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  }]
};
const TITLE_MODE = {
  className: 'title',
  begin: IDENT_RE,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  className: 'title',
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
  relevance: 0
};

/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(mode,
    {
      /** @type {ModeCallback} */
      'on:begin': (m, resp) => { resp.data._beginMatch = m[1]; },
      /** @type {ModeCallback} */
      'on:end': (m, resp) => { if (resp.data._beginMatch !== m[1]) resp.ignoreMatch(); }
    });
};

var MODES = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IDENT_RE: IDENT_RE,
    UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
    NUMBER_RE: NUMBER_RE,
    C_NUMBER_RE: C_NUMBER_RE,
    BINARY_NUMBER_RE: BINARY_NUMBER_RE,
    RE_STARTERS_RE: RE_STARTERS_RE,
    SHEBANG: SHEBANG,
    BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
    APOS_STRING_MODE: APOS_STRING_MODE,
    QUOTE_STRING_MODE: QUOTE_STRING_MODE,
    PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
    COMMENT: COMMENT,
    C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
    HASH_COMMENT_MODE: HASH_COMMENT_MODE,
    NUMBER_MODE: NUMBER_MODE,
    C_NUMBER_MODE: C_NUMBER_MODE,
    BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
    CSS_NUMBER_MODE: CSS_NUMBER_MODE,
    REGEXP_MODE: REGEXP_MODE,
    TITLE_MODE: TITLE_MODE,
    UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE,
    METHOD_GUARD: METHOD_GUARD,
    END_SAME_AS_BEGIN: END_SAME_AS_BEGIN
});

// Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833

// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.

// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.

// ------

// TODO: We need negative look-behind support to do this properly
/**
 * Skip a match if it has a preceding dot
 *
 * This is used for `beginKeywords` to prevent matching expressions such as
 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
 * @param {RegExpMatchArray} match
 * @param {CallbackResponse} response
 */
function skipIfhasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}


/**
 * `beginKeywords` syntactic sugar
 * @type {CompilerExt}
 */
function beginKeywords(mode, parent) {
  if (!parent) return;
  if (!mode.beginKeywords) return;

  // for languages with keywords that include non-word characters checking for
  // a word boundary is not sufficient, so instead we check for a word boundary
  // or whitespace - this does no harm in any case since our keyword engine
  // doesn't allow spaces in keywords anyways and we still check for the boundary
  // first
  mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)';
  mode.__beforeBegin = skipIfhasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;
}

/**
 * Allow `illegal` to contain an array of illegal values
 * @type {CompilerExt}
 */
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal)) return;

  mode.illegal = either(...mode.illegal);
}

/**
 * `match` to match a single expression for readability
 * @type {CompilerExt}
 */
function compileMatch(mode, _parent) {
  if (!mode.match) return;
  if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");

  mode.begin = mode.match;
  delete mode.match;
}

/**
 * provides the default 1 relevance to all modes
 * @type {CompilerExt}
 */
function compileRelevance(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 1;
}

// keywords that should have no default relevance value
const COMMON_KEYWORDS = [
  'of',
  'and',
  'for',
  'in',
  'not',
  'or',
  'if',
  'then',
  'parent', // common variable name
  'list', // common variable name
  'value' // common variable name
];

/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string>} rawKeywords
 * @param {boolean} caseInsensitive
 */
function compileKeywords(rawKeywords, caseInsensitive) {
  /** @type KeywordDict */
  const compiledKeywords = {};

  if (typeof rawKeywords === 'string') { // string
    splitAndCompile('keyword', rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(className) {
      splitAndCompile(className, rawKeywords[className]);
    });
  }
  return compiledKeywords;

  // ---

  /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} className
   * @param {string} keywordList
   */
  function splitAndCompile(className, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.toLowerCase();
    }
    keywordList.split(' ').forEach(function(keyword) {
      const pair = keyword.split('|');
      compiledKeywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
    });
  }
}

/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */
function scoreForKeyword(keyword, providedScore) {
  // manual scores always win over common keywords
  // so you can force a score of 1 if you really insist
  if (providedScore) {
    return Number(providedScore);
  }

  return commonKeyword(keyword) ? 0 : 1;
}

/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}

// compilation

/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @param {{plugins: HLJSPlugin[]}} opts
 * @returns {CompiledLanguage}
 */
function compileLanguage(language, { plugins }) {
  /**
   * Builds a regex with the case sensativility of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
    );
  }

  /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      // @ts-ignore
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      // @ts-ignore
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }

    compile() {
      if (this.regexes.length === 0) {
        // avoids the need to check length every time exec is called
        // @ts-ignore
        this.exec = () => null;
      }
      const terminators = this.regexes.map(el => el[1]);
      this.matcherRe = langRe(join(terminators), true);
      this.lastIndex = 0;
    }

    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) { return null; }

      // eslint-disable-next-line no-undefined
      const i = match.findIndex((el, i) => i > 0 && el !== undefined);
      // @ts-ignore
      const matchData = this.matchIndexes[i];
      // trim off any earlier non-relevant match groups (ie, the other regex
      // match groups that make up the multi-matcher)
      match.splice(0, i);

      return Object.assign(match, matchData);
    }
  }

  /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */
  class ResumableMultiRegex {
    constructor() {
      // @ts-ignore
      this.rules = [];
      // @ts-ignore
      this.multiRegexes = [];
      this.count = 0;

      this.lastIndex = 0;
      this.regexIndex = 0;
    }

    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index];

      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }

    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }

    considerAll() {
      this.regexIndex = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin") this.count++;
    }

    /** @param {string} s */
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);

      // The following is because we have no easy way to say "resume scanning at the
      // existing position but also skip the current rule ONLY". What happens is
      // all prior rules are also skipped which can result in matching the wrong
      // thing. Example of matching "booger":

      // our matcher is [string, "booger", number]
      //
      // ....booger....

      // if "booger" is ignored then we'd really need a regex to scan from the
      // SAME position for only: [string, number] but ignoring "booger" (if it
      // was the first match), a simple resume would scan ahead who knows how
      // far looking only for "number", ignoring potential string matches (or
      // future "booger" matches that might be valid.)

      // So what we do: We execute two matchers, one resuming at the same
      // position, but the second full matcher starting at the position after:

      //     /--- resume first regex match here (for [number])
      //     |/---- full match here for [string, "booger", number]
      //     vv
      // ....booger....

      // Which ever results in a match first is then used. So this 3-4 step
      // process essentially allows us to say "match at this position, excluding
      // a prior rule that was ignored".
      //
      // 1. Match "booger" first, ignore. Also proves that [string] does non match.
      // 2. Resume matching for [number]
      // 3. Match at index + 1 for [string, "booger", number]
      // 4. If #2 and #3 result in matches, which came first?
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex) ; else { // use the second matcher result
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }

      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          // wrap-around to considering all matches again
          this.considerAll();
        }
      }

      return result;
    }
  }

  /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();

    mode.contains.forEach(term => mm.addRule(term.begin, { rule: term, type: "begin" }));

    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }

    return mm;
  }

  /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */

  /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */
  function compileMode(mode, parent) {
    const cmode = /** @type CompiledMode */ (mode);
    if (mode.compiled) return cmode;

    [
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch
    ].forEach(ext => ext(mode, parent));

    language.compilerExtensions.forEach(ext => ext(mode, parent));

    // __beforeBegin is considered private API, internal use only
    mode.__beforeBegin = null;

    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
      compileRelevance
    ].forEach(ext => ext(mode, parent));

    mode.compiled = true;

    let keywordPattern = null;
    if (typeof mode.keywords === "object") {
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }

    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }

    // both are not allowed
    if (mode.lexemes && keywordPattern) {
      throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
    }

    // `mode.lexemes` was the old standard before we added and now recommend
    // using `keywords.$pattern` to pass the keyword pattern
    keywordPattern = keywordPattern || mode.lexemes || /\w+/;
    cmode.keywordPatternRe = langRe(keywordPattern, true);

    if (parent) {
      if (!mode.begin) mode.begin = /\B|\b/;
      cmode.beginRe = langRe(mode.begin);
      if (mode.endSameAsBegin) mode.end = mode.begin;
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) cmode.endRe = langRe(mode.end);
      cmode.terminatorEnd = source(mode.end) || '';
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd;
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ (mode.illegal));
    if (!mode.contains) mode.contains = [];

    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === 'self' ? mode : c);
    }));
    mode.contains.forEach(function(c) { compileMode(/** @type Mode */ (c), cmode); });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }

  if (!language.compilerExtensions) language.compilerExtensions = [];

  // self is not valid at the top-level
  if (language.contains && language.contains.includes('self')) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }

  // we need a null object, which inherit will guarantee
  language.classNameAliases = inherit(language.classNameAliases || {});

  return compileMode(/** @type Mode */ (language));
}

/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */
function dependencyOnParent(mode) {
  if (!mode) return false;

  return mode.endsWithParent || dependencyOnParent(mode.starts);
}

/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit(mode, { variants: null }, variant);
    });
  }

  // EXPAND
  // if we have variants then essentially "replace" the mode with the variants
  // this happens in compileMode, where this function is called from
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }

  // CLONE
  // if we have dependencies on parents then we need a unique
  // instance of ourselves, so we can be reused with many
  // different parents without issue
  if (dependencyOnParent(mode)) {
    return inherit(mode, { starts: mode.starts ? inherit(mode.starts) : null });
  }

  if (Object.isFrozen(mode)) {
    return inherit(mode);
  }

  // no special dependency issues, just return ourselves
  return mode;
}

var version = "10.5.0";

// @ts-nocheck

function hasValueOrEmptyAttribute(value) {
  return Boolean(value || value === "");
}

function BuildVuePlugin(hljs) {
  const Component = {
    props: ["language", "code", "autodetect"],
    data: function() {
      return {
        detectedLanguage: "",
        unknownLanguage: false
      };
    },
    computed: {
      className() {
        if (this.unknownLanguage) return "";

        return "hljs " + this.detectedLanguage;
      },
      highlighted() {
        // no idea what language to use, return raw code
        if (!this.autoDetect && !hljs.getLanguage(this.language)) {
          console.warn(`The language "${this.language}" you specified could not be found.`);
          this.unknownLanguage = true;
          return escapeHTML(this.code);
        }

        let result = {};
        if (this.autoDetect) {
          result = hljs.highlightAuto(this.code);
          this.detectedLanguage = result.language;
        } else {
          result = hljs.highlight(this.language, this.code, this.ignoreIllegals);
          this.detectedLanguage = this.language;
        }
        return result.value;
      },
      autoDetect() {
        return !this.language || hasValueOrEmptyAttribute(this.autodetect);
      },
      ignoreIllegals() {
        return true;
      }
    },
    // this avoids needing to use a whole Vue compilation pipeline just
    // to build Highlight.js
    render(createElement) {
      return createElement("pre", {}, [
        createElement("code", {
          class: this.className,
          domProps: { innerHTML: this.highlighted }
        })
      ]);
    }
    // template: `<pre><code :class="className" v-html="highlighted"></code></pre>`
  };

  const VuePlugin = {
    install(Vue) {
      Vue.component('highlightjs', Component);
    }
  };

  return { Component, VuePlugin };
}

/* plugin itself */

/** @type {HLJSPlugin} */
const mergeHTMLPlugin = {
  "after:highlightBlock": ({ block, result, text }) => {
    const originalStream = nodeStream(block);
    if (!originalStream.length) return;

    const resultNode = document.createElement('div');
    resultNode.innerHTML = result.value;
    result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
  }
};

/* Stream merging support functions */

/**
 * @typedef Event
 * @property {'start'|'stop'} event
 * @property {number} offset
 * @property {Node} node
 */

/**
 * @param {Node} node
 */
function tag(node) {
  return node.nodeName.toLowerCase();
}

/**
 * @param {Node} node
 */
function nodeStream(node) {
  /** @type Event[] */
  const result = [];
  (function _nodeStream(node, offset) {
    for (let child = node.firstChild; child; child = child.nextSibling) {
      if (child.nodeType === 3) {
        offset += child.nodeValue.length;
      } else if (child.nodeType === 1) {
        result.push({
          event: 'start',
          offset: offset,
          node: child
        });
        offset = _nodeStream(child, offset);
        // Prevent void elements from having an end tag that would actually
        // double them in the output. There are more void elements in HTML
        // but we list only those realistically expected in code display.
        if (!tag(child).match(/br|hr|img|input/)) {
          result.push({
            event: 'stop',
            offset: offset,
            node: child
          });
        }
      }
    }
    return offset;
  })(node, 0);
  return result;
}

/**
 * @param {any} original - the original stream
 * @param {any} highlighted - stream of the highlighted source
 * @param {string} value - the original source itself
 */
function mergeStreams(original, highlighted, value) {
  let processed = 0;
  let result = '';
  const nodeStack = [];

  function selectStream() {
    if (!original.length || !highlighted.length) {
      return original.length ? original : highlighted;
    }
    if (original[0].offset !== highlighted[0].offset) {
      return (original[0].offset < highlighted[0].offset) ? original : highlighted;
    }

    /*
    To avoid starting the stream just before it should stop the order is
    ensured that original always starts first and closes last:

    if (event1 == 'start' && event2 == 'start')
      return original;
    if (event1 == 'start' && event2 == 'stop')
      return highlighted;
    if (event1 == 'stop' && event2 == 'start')
      return original;
    if (event1 == 'stop' && event2 == 'stop')
      return highlighted;

    ... which is collapsed to:
    */
    return highlighted[0].event === 'start' ? original : highlighted;
  }

  /**
   * @param {Node} node
   */
  function open(node) {
    /** @param {Attr} attr */
    function attributeString(attr) {
      return ' ' + attr.nodeName + '="' + escapeHTML(attr.value) + '"';
    }
    // @ts-ignore
    result += '<' + tag(node) + [].map.call(node.attributes, attributeString).join('') + '>';
  }

  /**
   * @param {Node} node
   */
  function close(node) {
    result += '</' + tag(node) + '>';
  }

  /**
   * @param {Event} event
   */
  function render(event) {
    (event.event === 'start' ? open : close)(event.node);
  }

  while (original.length || highlighted.length) {
    let stream = selectStream();
    result += escapeHTML(value.substring(processed, stream[0].offset));
    processed = stream[0].offset;
    if (stream === original) {
      /*
      On any opening or closing tag of the original markup we first close
      the entire highlighted node stack, then render the original tag along
      with all the following original tags at the same offset and then
      reopen all the tags on the highlighted stack.
      */
      nodeStack.reverse().forEach(close);
      do {
        render(stream.splice(0, 1)[0]);
        stream = selectStream();
      } while (stream === original && stream.length && stream[0].offset === processed);
      nodeStack.reverse().forEach(open);
    } else {
      if (stream[0].event === 'start') {
        nodeStack.push(stream[0].node);
      } else {
        nodeStack.pop();
      }
      render(stream.splice(0, 1)[0]);
    }
  }
  return result + escapeHTML(value.substr(processed));
}

/*

For the reasoning behind this please see:
https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

*/

/**
 * @param {string} message
 */
const error = (message) => {
  console.error(message);
};

/**
 * @param {string} message
 * @param {any} args
 */
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};

/**
 * @param {string} version
 * @param {string} message
 */
const deprecated = (version, message) => {
  console.log(`Deprecated as of ${version}. ${message}`);
};

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

const escape$1 = escapeHTML;
const inherit$1 = inherit;
const NO_MATCH = Symbol("nomatch");

/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */
const HLJS = function(hljs) {
  // Global internal variables used within the highlight.js library.
  /** @type {Record<string, Language>} */
  const languages = Object.create(null);
  /** @type {Record<string, string>} */
  const aliases = Object.create(null);
  /** @type {HLJSPlugin[]} */
  const plugins = [];

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  let SAFE_MODE = true;
  const fixMarkupRe = /(^(<[^>]+>|\t|)+|\n)/gm;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  /** @type {Language} */
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] };

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  /** @type HLJSOptions */
  let options = {
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };

  /* Utility functions */

  /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }

  /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */
  function blockLanguage(block) {
    let classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    return classes
      .split(/\s+/)
      .find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }

  /**
   * Core highlighting function.
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} code - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode} [continuation] - current continuation mode, if any
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {CompiledMode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(languageName, code, ignoreIllegals, continuation) {
    /** @type {BeforeHighlightContext} */
    const context = {
      code,
      language: languageName
    };
    // the plugin can change the desired language or the code to be highlighted
    // just be changing the object it was passed
    fire("before:highlight", context);

    // a before plugin can usurp the result completely by providing it's own
    // in which case we don't even need to call highlight
    const result = context.result ?
      context.result :
      _highlight(context.language, context.code, ignoreIllegals, continuation);

    result.code = context.code;
    // the plugin can change anything in result to suite it
    fire("after:highlight", result);

    return result;
  }

  /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} code - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode} [continuation] - current continuation mode, if any
   * @returns {HighlightResult} - result of the highlight operation
  */
  function _highlight(languageName, code, ignoreIllegals, continuation) {
    const codeToHighlight = code;

    /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {RegExpMatchArray} match - regexp match data
     * @returns {KeywordData | false}
     */
    function keywordData(mode, match) {
      const matchText = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return Object.prototype.hasOwnProperty.call(mode.keywords, matchText) && mode.keywords[matchText];
    }

    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }

      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";

      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const data = keywordData(top, match);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";

          relevance += keywordRelevance;
          const cssClass = language.classNameAliases[kind] || kind;
          emitter.addKeyword(match[0], cssClass);
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substr(lastIndex);
      emitter.addText(buf);
    }

    function processSubLanguage() {
      if (modeBuffer === "") return;
      /** @type HighlightResult */
      let result = null;

      if (typeof top.subLanguage === 'string') {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = /** @type {CompiledMode} */ (result.top);
      } else {
        result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      emitter.addSublanguage(result.emitter, result.language);
    }

    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = '';
    }

    /**
     * @param {Mode} mode - new mode to start
     */
    function startNewMode(mode) {
      if (mode.className) {
        emitter.openNode(language.classNameAliases[mode.className] || mode.className);
      }
      top = Object.create(mode, { parent: { value: top } });
      return top;
    }

    /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);

      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.ignore) matched = false;
        }

        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      // even if on:end fires an `ignore` it's still possible
      // that we might trigger the end node because of a parent mode
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }

    /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        // no more regexs to potentially match here, so we move the cursor forward one
        // space
        modeBuffer += lexeme[0];
        return 1;
      } else {
        // no need to move the cursor, we still have additional regexes to try and
        // match at this very spot
        resumeScanAtSamePosition = true;
        return 0;
      }
    }

    /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;

      const resp = new Response(newMode);
      // first internal before callbacks, then the public ones
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb) continue;
        cb(match, resp);
        if (resp.ignore) return doIgnore(lexeme);
      }

      if (newMode && newMode.endSameAsBegin) {
        newMode.endRe = escape(lexeme);
      }

      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode);
      // if (mode["after:begin"]) {
      //   let resp = new Response(mode);
      //   mode["after:begin"](match, resp);
      // }
      return newMode.returnBegin ? 0 : lexeme.length;
    }

    /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substr(match.index);

      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) { return NO_MATCH; }

      const origin = top;
      if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.className) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        if (endMode.endSameAsBegin) {
          endMode.starts.endRe = endMode.endRe;
        }
        startNewMode(endMode.starts);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.className) {
          list.unshift(current.className);
        }
      }
      list.forEach(item => emitter.openNode(item));
    }

    /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
    let lastMatch = {};

    /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceeding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      modeBuffer += textBeforeMatch;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          /** @type {AnnotatedError} */
          const err = new Error('0 width match regex');
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;

      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        // illegal match, we do not continue processing
        /** @type {AnnotatedError} */
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }

      // edge case for when illegal matches $ (end of line) which is technically
      // a 0 width match but not a begin/end match so it's not caught by the
      // first handler (when ignoreIllegals is true)
      if (match.type === "illegal" && lexeme === "") {
        // advance so we aren't stuck in an infinite loop
        return 1;
      }

      // infinite loops are BAD, this is a last ditch catch all. if we have a
      // decent number of iterations yet our index (cursor position in our
      // parsing) still 3x behind our index then something is very wrong
      // so we bail
      if (iterations > 100000 && iterations > match.index * 3) {
        const err = new Error('potential infinite loop, way more iterations than matches');
        throw err;
      }

      /*
      Why might be find ourselves here?  Only one occasion now.  An end match that was
      triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
      rule sets the end rule to a specific match.  Since the overall mode termination rule that's
      being used to scan the text isn't recompiled that means that any match that LOOKS like
      the end (but is not, because it is not an exact match to the beginning) will
      end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
      the end rule and fails to match, we wind up here, and just silently ignore the end.

      This causes no real harm other than stopping a few times too many.
      */

      modeBuffer += lexeme;
      return lexeme.length;
    }

    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    const md = compileLanguage(language, { plugins });
    let result = '';
    /** @type {CompiledMode} */
    let top = continuation || md;
    /** @type Record<string,CompiledMode> */
    const continuations = {}; // keep continuations for sub-languages
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = '';
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;

    try {
      top.matcher.considerAll();

      for (;;) {
        iterations++;
        if (resumeScanAtSamePosition) {
          // only regexes not matched previously will now be
          // considered for a potential match
          resumeScanAtSamePosition = false;
        } else {
          top.matcher.considerAll();
        }
        top.matcher.lastIndex = index;

        const match = top.matcher.exec(codeToHighlight);
        // console.log("match", match[0], match.rule && match.rule.begin)

        if (!match) break;

        const beforeMatch = codeToHighlight.substring(index, match.index);
        const processedCount = processLexeme(beforeMatch, match);
        index = match.index + processedCount;
      }
      processLexeme(codeToHighlight.substr(index));
      emitter.closeAllNodes();
      emitter.finalize();
      result = emitter.toHTML();

      return {
        relevance: relevance,
        value: result,
        language: languageName,
        illegal: false,
        emitter: emitter,
        top: top
      };
    } catch (err) {
      if (err.message && err.message.includes('Illegal')) {
        return {
          illegal: true,
          illegalBy: {
            msg: err.message,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode
          },
          sofar: result,
          relevance: 0,
          value: escape$1(codeToHighlight),
          emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          illegal: false,
          relevance: 0,
          value: escape$1(codeToHighlight),
          emitter: emitter,
          language: languageName,
          top: top,
          errorRaised: err
        };
      } else {
        throw err;
      }
    }
  }

  /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */
  function justTextHighlightResult(code) {
    const result = {
      relevance: 0,
      emitter: new options.__emitter(options),
      value: escape$1(code),
      illegal: false,
      top: PLAINTEXT_LANGUAGE
    };
    result.emitter.addText(code);
    return result;
  }

  /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);

    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(name =>
      _highlight(name, code, false)
    );
    results.unshift(plaintext); // plaintext is always an option

    const sorted = results.sort((a, b) => {
      // sort base on relevance
      if (a.relevance !== b.relevance) return b.relevance - a.relevance;

      // always award the tie to the base language
      // ie if C++ and Arduino are tied, it's more likely to be C++
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }

      // otherwise say they are equal, which has the effect of sorting on
      // relevance while preserving the original ordering - which is how ties
      // have historically been settled, ie the language that comes first always
      // wins in the case of a tie
      return 0;
    });

    const [best, secondBest] = sorted;

    /** @type {AutoHighlightResult} */
    const result = best;
    result.second_best = secondBest;

    return result;
  }

  /**
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

    @param {string} html
    @returns {string}
  */
  function fixMarkup(html) {
    if (!(options.tabReplace || options.useBR)) {
      return html;
    }

    return html.replace(fixMarkupRe, match => {
      if (match === '\n') {
        return options.useBR ? '<br>' : match;
      } else if (options.tabReplace) {
        return match.replace(/\t/g, options.tabReplace);
      }
      return match;
    });
  }

  /**
   * Builds new class name for block given the language name
   *
   * @param {HTMLElement} element
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */
  function updateClassName(element, currentLang, resultLang) {
    const language = currentLang ? aliases[currentLang] : resultLang;

    element.classList.add("hljs");
    if (language) element.classList.add(language);
  }

  /** @type {HLJSPlugin} */
  const brPlugin = {
    "before:highlightBlock": ({ block }) => {
      if (options.useBR) {
        block.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ /]*>/g, '\n');
      }
    },
    "after:highlightBlock": ({ result }) => {
      if (options.useBR) {
        result.value = result.value.replace(/\n/g, "<br>");
      }
    }
  };

  const TAB_REPLACE_RE = /^(<[^>]+>|\t)+/gm;
  /** @type {HLJSPlugin} */
  const tabReplacePlugin = {
    "after:highlightBlock": ({ result }) => {
      if (options.tabReplace) {
        result.value = result.value.replace(TAB_REPLACE_RE, (m) =>
          m.replace(/\t/g, options.tabReplace)
        );
      }
    }
  };

  /**
   * Applies highlighting to a DOM node containing code. Accepts a DOM node and
   * two optional parameters for fixMarkup.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */
  function highlightBlock(element) {
    /** @type HTMLElement */
    let node = null;
    const language = blockLanguage(element);

    if (shouldNotHighlight(language)) return;

    fire("before:highlightBlock",
      { block: element, language: language });

    node = element;
    const text = node.textContent;
    const result = language ? highlight(language, text, true) : highlightAuto(text);

    fire("after:highlightBlock", { block: element, result, text });

    element.innerHTML = result.value;
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relavance: result.relevance
    };
    if (result.second_best) {
      element.second_best = {
        language: result.second_best.language,
        // TODO: remove with version 11.0
        re: result.second_best.relevance,
        relavance: result.second_best.relevance
      };
    }
  }

  /**
   * Updates highlight.js global options with the passed options
   *
   * @param {Partial<HLJSOptions>} userOptions
   */
  function configure(userOptions) {
    if (userOptions.useBR) {
      deprecated("10.3.0", "'useBR' will be removed entirely in v11.0");
      deprecated("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559");
    }
    options = inherit$1(options, userOptions);
  }

  /**
   * Highlights to all <pre><code> blocks on a page
   *
   * @type {Function & {called?: boolean}}
   */
  const initHighlighting = () => {
    if (initHighlighting.called) return;
    initHighlighting.called = true;

    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(highlightBlock);
  };

  // Higlights all when DOMContentLoaded fires
  function initHighlightingOnLoad() {
    // @ts-ignore
    window.addEventListener('DOMContentLoaded', initHighlighting, false);
  }

  /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // hard or soft error
      if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }

  /**
   * @returns {string[]} List of language internal names
   */
  function listLanguages() {
    return Object.keys(languages);
  }

  /**
    intended usage: When one language truly requires another

    Unlike `getLanguage`, this will throw when the requested language
    is not available.

    @param {string} name - name of the language to fetch/require
    @returns {Language | never}
  */
  function requireLanguage(name) {
    deprecated("10.4.0", "requireLanguage will be removed entirely in v11.");
    deprecated("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");

    const lang = getLanguage(name);
    if (lang) { return lang; }

    const err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}', name));
    throw err;
  }

  /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */
  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList];
    }
    aliasList.forEach(alias => { aliases[alias] = languageName; });
  }

  /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function addPlugin(plugin) {
    plugins.push(plugin);
  }

  /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }

  /**
  Note: fixMarkup is deprecated and will be removed entirely in v11

  @param {string} arg
  @returns {string}
  */
  function deprecateFixMarkup(arg) {
    deprecated("10.2.0", "fixMarkup will be removed entirely in v11.0");
    deprecated("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534");

    return fixMarkup(arg);
  }

  /* Interface definition */
  Object.assign(hljs, {
    highlight,
    highlightAuto,
    fixMarkup: deprecateFixMarkup,
    highlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    requireLanguage,
    autoDetection,
    inherit: inherit$1,
    addPlugin,
    // plugins for frameworks
    vuePlugin: BuildVuePlugin(hljs).VuePlugin
  });

  hljs.debugMode = function() { SAFE_MODE = false; };
  hljs.safeMode = function() { SAFE_MODE = true; };
  hljs.versionString = version;

  for (const key in MODES) {
    // @ts-ignore
    if (typeof MODES[key] === "object") {
      // @ts-ignore
      deepFreezeEs6(MODES[key]);
    }
  }

  // merge all the modes/regexs into our main object
  Object.assign(hljs, MODES);

  // built-in plugins, likely to be moved out of core in the future
  hljs.addPlugin(brPlugin); // slated to be removed in v11
  hljs.addPlugin(mergeHTMLPlugin);
  hljs.addPlugin(tabReplacePlugin);
  return hljs;
};

// export an "instance" of the highlighter
var highlight = HLJS({});

module.exports = highlight;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/bash.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/bash.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: Bash
Author: vah <vahtenberg@gmail.com>
Contributrors: Benjamin Pannell <contact@sierrasoftworks.com>
Website: https://www.gnu.org/software/bash/
Category: common
*/

/** @type LanguageFn */
function bash(hljs) {
  const VAR = {};
  const BRACED_VAR = {
    begin: /\$\{/,
    end:/\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [ VAR ]
      } // default values
    ]
  };
  Object.assign(VAR,{
    className: 'variable',
    variants: [
      {begin: concat(/\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        `(?![\\w\\d])(?![$])`) },
      BRACED_VAR
    ]
  });

  const SUBST = {
    className: 'subst',
    begin: /\$\(/, end: /\)/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  const HERE_DOC = {
    begin: /<<-?\s*(?=\w+)/,
    starts: {
      contains: [
        hljs.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: 'string'
        })
      ]
    }
  };
  const QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      SUBST
    ]
  };
  SUBST.contains.push(QUOTE_STRING);
  const ESCAPED_QUOTE = {
    className: '',
    begin: /\\"/

  };
  const APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };
  const ARITHMETIC = {
    begin: /\$\(\(/,
    end: /\)\)/,
    contains: [
      { begin: /\d+#[0-9a-f]+/, className: "number" },
      hljs.NUMBER_MODE,
      VAR
    ]
  };
  const SH_LIKE_SHELLS = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh",
  ];
  const KNOWN_SHEBANG = hljs.SHEBANG({
    binary: `(${SH_LIKE_SHELLS.join("|")})`,
    relevance: 10
  });
  const FUNCTION = {
    className: 'function',
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: true,
    contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
    relevance: 0
  };

  return {
    name: 'Bash',
    aliases: ['sh', 'zsh'],
    keywords: {
      $pattern: /\b[a-z._-]+\b/,
      keyword:
        'if then else elif fi for while in do done case esac function',
      literal:
        'true false',
      built_in:
        // Shell built-ins
        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
        'trap umask unset ' +
        // Bash built-ins
        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
        'read readarray source type typeset ulimit unalias ' +
        // Shell modifiers
        'set shopt ' +
        // Zsh built-ins
        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
        'zpty zregexparse zsocket zstyle ztcp'
    },
    contains: [
      KNOWN_SHEBANG, // to catch known shells and boost relevancy
      hljs.SHEBANG(), // to catch unknown shells but still highlight the shebang
      FUNCTION,
      ARITHMETIC,
      hljs.HASH_COMMENT_MODE,
      HERE_DOC,
      QUOTE_STRING,
      ESCAPED_QUOTE,
      APOS_STRING,
      VAR
    ]
  };
}

module.exports = bash;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/diff.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/diff.js ***!
  \*********************************************************/
/***/ ((module) => {

/*
Language: Diff
Description: Unified and context diff
Author: Vasily Polovnyov <vast@whiteants.net>
Website: https://www.gnu.org/software/diffutils/
Category: common
*/

/** @type LanguageFn */
function diff(hljs) {
  return {
    name: 'Diff',
    aliases: ['patch'],
    contains: [
      {
        className: 'meta',
        relevance: 10,
        variants: [
          {
            begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/
          },
          {
            begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
          },
          {
            begin: /^--- +\d+,\d+ +----$/
          }
        ]
      },
      {
        className: 'comment',
        variants: [
          {
            begin: /Index: /,
            end: /$/
          },
          {
            begin: /^index/,
            end: /$/
          },
          {
            begin: /={3,}/,
            end: /$/
          },
          {
            begin: /^-{3}/,
            end: /$/
          },
          {
            begin: /^\*{3} /,
            end: /$/
          },
          {
            begin: /^\+{3}/,
            end: /$/
          },
          {
            begin: /^\*{15}$/
          },
          {
            begin: /^diff --git/,
            end: /$/
          }
        ]
      },
      {
        className: 'addition',
        begin: /^\+/,
        end: /$/
      },
      {
        className: 'deletion',
        begin: /^-/,
        end: /$/
      },
      {
        className: 'addition',
        begin: /^!/,
        end: /$/
      }
    ]
  };
}

module.exports = diff;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/json.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/json.js ***!
  \*********************************************************/
/***/ ((module) => {

/*
Language: JSON
Description: JSON (JavaScript Object Notation) is a lightweight data-interchange format.
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: http://www.json.org
Category: common, protocols
*/

function json(hljs) {
  const LITERALS = {
    literal: 'true false null'
  };
  const ALLOWED_COMMENTS = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE
  ];
  const TYPES = [
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE
  ];
  const VALUE_CONTAINER = {
    end: ',',
    endsWithParent: true,
    excludeEnd: true,
    contains: TYPES,
    keywords: LITERALS
  };
  const OBJECT = {
    begin: /\{/,
    end: /\}/,
    contains: [
      {
        className: 'attr',
        begin: /"/,
        end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE],
        illegal: '\\n'
      },
      hljs.inherit(VALUE_CONTAINER, {
        begin: /:/
      })
    ].concat(ALLOWED_COMMENTS),
    illegal: '\\S'
  };
  const ARRAY = {
    begin: '\\[',
    end: '\\]',
    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
    illegal: '\\S'
  };
  TYPES.push(OBJECT, ARRAY);
  ALLOWED_COMMENTS.forEach(function(rule) {
    TYPES.push(rule);
  });
  return {
    name: 'JSON',
    contains: TYPES,
    keywords: LITERALS,
    illegal: '\\S'
  };
}

module.exports = json;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/php.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/php.js ***!
  \********************************************************/
/***/ ((module) => {

/*
Language: PHP
Author: Victor Karamzin <Victor.Karamzin@enterra-inc.com>
Contributors: Evgeny Stepanischev <imbolk@gmail.com>, Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: https://www.php.net
Category: common
*/

/**
 * @param {HLJSApi} hljs
 * @returns {LanguageDetail}
 * */
function php(hljs) {
  const VARIABLE = {
    className: 'variable',
    begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*' +
      // negative look-ahead tries to avoid matching patterns that are not
      // Perl at all like $ident$, @ident@, etc.
      `(?![A-Za-z0-9])(?![$])`
  };
  const PREPROCESSOR = {
    className: 'meta',
    variants: [
      { begin: /<\?php/, relevance: 10 }, // boost for obvious PHP
      { begin: /<\?[=]?/ },
      { begin: /\?>/ } // end php tag
    ]
  };
  const SUBST = {
    className: 'subst',
    variants: [
      { begin: /\$\w+/ },
      { begin: /\{\$/, end: /\}/ }
    ]
  };
  const SINGLE_QUOTED = hljs.inherit(hljs.APOS_STRING_MODE, {
    illegal: null,
  });
  const DOUBLE_QUOTED = hljs.inherit(hljs.QUOTE_STRING_MODE, {
    illegal: null,
    contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST),
  });
  const HEREDOC = hljs.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*(\w+)\n/,
    end: /[ \t]*(\w+)\b/,
    contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST),
  });
  const STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
    variants: [
      hljs.inherit(SINGLE_QUOTED, {
        begin: "b'", end: "'",
      }),
      hljs.inherit(DOUBLE_QUOTED, {
        begin: 'b"', end: '"',
      }),
      DOUBLE_QUOTED,
      SINGLE_QUOTED,
      HEREDOC
    ]
  };
  const NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
  const KEYWORDS = {
    keyword:
    // Magic constants:
    // <https://www.php.net/manual/en/language.constants.predefined.php>
    '__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ ' +
    // Function that look like language construct or language construct that look like function:
    // List of keywords that may not require parenthesis
    'die echo exit include include_once print require require_once ' +
    // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
    // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
    // Other keywords:
    // <https://www.php.net/manual/en/reserved.php>
    // <https://www.php.net/manual/en/language.types.type-juggling.php>
    'array abstract and as binary bool boolean break callable case catch class clone const continue declare ' +
    'default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval extends ' +
    'final finally float for foreach from global goto if implements instanceof insteadof int integer interface ' +
    'isset iterable list match|0 new object or private protected public real return string switch throw trait ' +
    'try unset use var void while xor yield',
    literal: 'false null true',
    built_in:
    // Standard PHP library:
    // <https://www.php.net/manual/en/book.spl.php>
    'Error|0 ' + // error is too common a name esp since PHP is case in-sensitive
    'AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException ' +
    // Reserved interfaces:
    // <https://www.php.net/manual/en/reserved.interfaces.php>
    'ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Throwable Traversable WeakReference ' +
    // Reserved classes:
    // <https://www.php.net/manual/en/reserved.classes.php>
    'Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass'
  };
  return {
    aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7', 'php8'],
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.COMMENT('//', '$', {contains: [PREPROCESSOR]}),
      hljs.COMMENT(
        '/\\*',
        '\\*/',
        {
          contains: [
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            }
          ]
        }
      ),
      hljs.COMMENT(
        '__halt_compiler.+?;',
        false,
        {
          endsWithParent: true,
          keywords: '__halt_compiler'
        }
      ),
      PREPROCESSOR,
      {
        className: 'keyword', begin: /\$this\b/
      },
      VARIABLE,
      {
        // swallow composed identifiers to avoid parsing them as keywords
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      },
      {
        className: 'function',
        relevance: 0,
        beginKeywords: 'fn function', end: /[;{]/, excludeEnd: true,
        illegal: '[$%\\[]',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            begin: '=>' // No markup, just a relevance booster
          },
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: [
              'self',
              VARIABLE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRING,
              NUMBER
            ]
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface',
        relevance: 0,
        end: /\{/,
        excludeEnd: true,
        illegal: /[:($"]/,
        contains: [
          {beginKeywords: 'extends implements'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'namespace',
        relevance: 0,
        end: ';',
        illegal: /[.']/,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        beginKeywords: 'use',
        relevance: 0,
        end: ';',
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      STRING,
      NUMBER
    ]
  };
}

module.exports = php;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/shell.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/shell.js ***!
  \**********************************************************/
/***/ ((module) => {

/*
Language: Shell Session
Requires: bash.js
Author: TSUYUSATO Kitsune <make.just.on@gmail.com>
Category: common
Audit: 2020
*/

/** @type LanguageFn */
function shell(hljs) {
  return {
    name: 'Shell Session',
    aliases: [ 'console' ],
    contains: [
      {
        className: 'meta',
        // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
        // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
        // echo /path/to/home > t.exe
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: 'bash'
        }
      }
    ]
  };
}

module.exports = shell;


/***/ }),

/***/ "./resources/sass/app.css":
/*!********************************!*\
  !*** ./resources/sass/app.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/docs.css":
/*!*********************************!*\
  !*** ./resources/sass/docs.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/platform/platform.js":
/*!*******************************************!*\
  !*** ./node_modules/platform/platform.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2016 Benjamin Tan <https://demoneaux.github.io/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
;(function() {
  'use strict';

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used as a reference to the global object. */
  var root = (objectTypes[typeof window] && window) || this;

  /** Backup possible global object. */
  var oldRoot = root;

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes["object"] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
  var freeGlobal = freeExports && freeModule && typeof __webpack_require__.g == 'object' && __webpack_require__.g;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /** Regular expression to detect Opera. */
  var reOpera = /\bOpera/;

  /** Possible global object. */
  var thisBinding = this;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check for own properties of an object. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to resolve the internal `[[Class]]` of values. */
  var toString = objectProto.toString;

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4':  '10 Technical Preview',
      '6.3':  '8.1',
      '6.2':  '8',
      '6.1':  'Server 2008 R2 / 7',
      '6.0':  'Server 2008 / Vista',
      '5.2':  'Server 2003 / XP 64-bit',
      '5.1':  'XP',
      '5.01': '2000 SP1',
      '5.0':  '2000',
      '4.0':  'NT',
      '4.90': 'ME'
    };
    // Detect Windows version from platform tokens.
    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
        (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // Correct character case and cleanup string.
    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(
      os.replace(/ ce$/i, ' CE')
        .replace(/\bhpw/i, 'web')
        .replace(/\bMacintosh\b/, 'Mac OS')
        .replace(/_PowerPC\b/i, ' OS')
        .replace(/\b(OS X) [^ \d]+/i, '$1')
        .replace(/\bMac (OS X)\b/, '$1')
        .replace(/\/(\d)/, ' $1')
        .replace(/_/g, '.')
        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
        .replace(/\bx86\.64\b/gi, 'x86_64')
        .replace(/\b(Windows Phone) OS\b/, '$1')
        .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
        .split(' on ')[0]
    );

    return os;
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    /** The environment context object. */
    var context = root;

    /** Used to flag when a custom context is provided. */
    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

    // Juggle arguments.
    if (isCustomContext) {
      context = ua;
      ua = null;
    }

    /** Browser navigator object. */
    var nav = context.navigator || {};

    /** Browser user agent string. */
    var userAgent = nav.userAgent || '';

    ua || (ua = userAgent);

    /** Used to flag when `thisBinding` is the [ModuleScope]. */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;

    /** Used to detect if browser is like Chrome. */
    var likeChrome = isCustomContext
      ? !!nav.likeChrome
      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

    /** Internal `[[Class]]` value shortcuts. */
    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

    /** Detect Java environments. */
    var java = /\bJava/.test(javaClass) && context.java;

    /** Detect Rhino. */
    var rhino = java && getClassOf(context.environment) == enviroClass;

    /** A character to represent alpha. */
    var alpha = java ? 'a' : '\u03b1';

    /** A character to represent beta. */
    var beta = java ? 'b' : '\u03b2';

    /** Browser document object. */
    var doc = context.document || {};

    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;

    /** Opera `[[Class]]`. */
    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
      ? operaClass
      : (opera = null);

    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime. */
    var data;

    /** The CPU architecture. */
    var arch = ua;

    /** Platform description array. */
    var description = [];

    /** Platform alpha/beta indicator. */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform. */
    var useFeatures = ua == userAgent;

    /** The browser/environment version. */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /** A flag to indicate if the OS ends with "/ Version" */
    var isSpecialCasedOS;

    /* Detectable layout engines (order is important). */
    var layout = getLayout([
      { 'label': 'EdgeHTML', 'pattern': 'Edge' },
      'Trident',
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important). */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Breach',
      'Camino',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      { 'label': 'Microsoft Edge', 'pattern': 'Edge' },
      'Midori',
      'Nook Browser',
      'PaleMoon',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
      'Sunrise',
      'Swiftfox',
      'WebPositive',
      'Opera Mini',
      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
      'Opera',
      { 'label': 'Opera', 'pattern': 'OPR' },
      'Chrome',
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
      { 'label': 'IE', 'pattern': 'IEMobile' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important). */
    var product = getProduct([
      { 'label': 'BlackBerry', 'pattern': 'BB10' },
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
      'Google TV',
      'Lumia',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nexus',
      'Nook',
      'PlayBook',
      'PlayStation 3',
      'PlayStation 4',
      'PlayStation Vita',
      'TouchPad',
      'Transformer',
      { 'label': 'Wii U', 'pattern': 'WiiU' },
      'Wii',
      'Xbox One',
      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
      'Xoom'
    ]);

    /* Detectable manufacturers. */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Archos': {},
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1, 'Nexus': 1 },
      'HP': { 'TouchPad': 1 },
      'HTC': {},
      'LG': {},
      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
      'Motorola': { 'Xoom': 1 },
      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
      'Nokia': { 'Lumia': 1 },
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
      'Sony': { 'PlayStation 4': 1, 'PlayStation 3': 1, 'PlayStation Vita': 1 }
    });

    /* Detectable operating systems (order is important). */
    var os = getOS([
      'Windows Phone',
      'Android',
      'CentOS',
      { 'label': 'Chrome OS', 'pattern': 'CrOS' },
      'Debian',
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'OpenBSD',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (
          value[product] ||
          value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && key;
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
            )) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // Split by forward slash and append product version if needed.
          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // Correct character case and cleanup string.
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // Convert layout to an array so we can add extra details.
    layout && (layout = [layout]);

    // Detect product names that contain their manufacturer's name.
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    }
    // Clean up Google TV.
    if ((data = /\bGoogle TV\b/.exec(product))) {
      product = data[0];
    }
    // Detect simulators.
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // Detect IE Mobile 11.
    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    }
    // Detect iOS.
    else if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // Detect Kubuntu.
    else if (name == 'Konqueror' && !/buntu/i.test(os)) {
      os = 'Kubuntu';
    }
    // Detect Android browsers.
    else if ((manufacturer && manufacturer != 'Google' &&
        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
        (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
      name = 'Android Browser';
      os = /\bAndroid\b/.test(os) ? os : 'Android';
    }
    // Detect Silk desktop/accelerated modes.
    else if (name == 'Silk') {
      if (!/\bMobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // Detect PaleMoon identifying as Firefox.
    else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
      description.push('identifying as Firefox ' + data[1]);
    }
    // Detect Firefox OS and products running Firefox.
    else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
      os || (os = 'Firefox OS');
      product || (product = data[1]);
    }
    // Detect false positives for Firefox/Safari.
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
      // Escape the `/` for Firefox 1.
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // Clear name of false positives.
        name = null;
      }
      // Reassign a generic name.
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
      }
    }
    // Detect non-Opera (Presto-based) versions (order is important).
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // Detect stubborn layout engines.
    if ((data =
          layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
          layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
        )) {
      layout = [data];
    }
    // Detect Windows Phone 7 desktop mode.
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
      name = 'IE Mobile';
      os = 'Windows Phone 8.x';
      description.unshift('desktop mode');
      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    }
    // Detect IE 11.
    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
      if (name) {
        description.push('identifying as ' + name + (version ? ' ' + version : ''));
      }
      name = 'IE';
      version = data[1];
    }
    // Leverage environment features.
    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (isModuleScope && isHostType(context, 'system') && (data = [context.system])[0]) {
          os || (os = data[0].os || null);
          try {
            data[1] = context.require('ringo/engine').version;
            version = data[1].join('.');
            name = 'RingoJS';
          } catch(e) {
            if (data[0].global.system == context.system) {
              name = 'Narwhal';
            }
          }
        }
        else if (
          typeof context.process == 'object' && !context.process.browser &&
          (data = context.process)
        ) {
          name = 'Node.js';
          arch = data.arch;
          os = data.platform;
          version = /[\d.]+/.exec(data.version)[0];
        }
        else if (rhino) {
          name = 'Rhino';
        }
      }
      // Detect Adobe AIR.
      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // Detect PhantomJS.
      else if (getClassOf((data = context.phantom)) == phantomClass) {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // Detect IE compatibility modes.
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // We're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode.
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout && (layout[1] = '');
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      os = os && format(os);
    }
    // Detect prerelease phases.
    if (version && (data =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
          /\bMinefield\b/i.test(ua) && 'a'
        )) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // Detect Firefox Mobile.
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // Detect Xbox 360 and Xbox One.
    else if (/\bXbox\b/i.test(product)) {
      os = null;
      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
        description.unshift('mobile mode');
      }
    }
    // Add mobile postfix.
    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // Detect IE platform preview.
    else if (name == 'IE' && useFeatures && context.external === null) {
      description.unshift('platform preview');
    }
    // Detect BlackBerry OS version.
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
          version
        )) {
      data = [data, /BB10/.test(ua)];
      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
      version = null;
    }
    // Detect Opera identifying/masking itself as another browser.
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && product != 'Wii' && (
          (useFeatures && opera) ||
          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
          (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
          (name == 'IE' && (
            (os && !/^Win/.test(os) && version > 5.5) ||
            /\bWindows XP\b/.test(os) && version > 8 ||
            version == 8 && !/\bTrident\b/.test(ua)
          ))
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
      // When "identifying", the UA contains both Opera and the other browser's name.
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/\bIE\b/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // When "masking", the UA contains only the other browser's name.
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/\bIE\b/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // Detect WebKit Nightly and approximate Chrome/Safari versions.
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // Nightly builds are postfixed with a "+".
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // Clear incorrect browser versions.
      else if (version == data[1] ||
          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        version = null;
      }
      // Use the full Chrome version when available.
      data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // Detect Blink layout engine.
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      }
      // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (!likeChrome && !data[1])) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // Add the postfix of ".x" or "+" for approximate versions.
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // Obscure version for some Safari 1-2 releases.
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      }
    }
    // Detect Opera desktop modes.
    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/\bOS X\b/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // Strip incorrect OS versions.
    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // Add layout engine.
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // Combine contextual information.
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // Append manufacturer to description.
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // Append product to description.
    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    }
    // Parse the OS into an object.
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // Add browser/OS architecture.
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (
          name && (/\bWOW64\b/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
      ) {
        description.unshift('32-bit');
      }
    }
    // Chrome 39 and above on OS X is always 64-bit.
    else if (
        os && /^OS X/.test(os.family) &&
        name == 'Chrome' && parseFloat(version) >= 39
    ) {
      os.architecture = 64;
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};

    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;

    /**
     * The name of the browser's layout engine.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];

    /**
     * The name of the product's manufacturer.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;

    /**
     * The name of the browser/environment.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;

    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;

    /**
     * The name of the product hosting the browser.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;

    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;

    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;

    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {

      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
       * "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function() { return 'null'; }
    };

    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }

  /*--------------------------------------------------------------------------*/

  // Export platform.
  var platform = parse();

  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (true) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform;

    // Define as an anonymous module so platform can be aliased through path mapping.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return platform;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else {}
}.call(this));


/***/ }),

/***/ "./node_modules/quicklink/dist/quicklink.mjs":
/*!***************************************************!*\
  !*** ./node_modules/quicklink/dist/quicklink.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listen": () => /* binding */ i,
/* harmony export */   "prefetch": () => /* binding */ c
/* harmony export */ });
function n(n){return new Promise(function(e,t,r){(r=new XMLHttpRequest).open("GET",n,r.withCredentials=!0),r.onload=function(){200===r.status?e():t()},r.send()})}var e,t=(e=document.createElement("link")).relList&&e.relList.supports&&e.relList.supports("prefetch")?function(n){return new Promise(function(e,t,r){(r=document.createElement("link")).rel="prefetch",r.href=n,r.onload=e,r.onerror=t,document.head.appendChild(r)})}:n,r=window.requestIdleCallback||function(n){var e=Date.now();return setTimeout(function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},o=new Set;function i(n){if(n||(n={}),window.IntersectionObserver){var e=function(n){n=n||1;var e=[],t=0;function r(){t<n&&e.length>0&&(e.shift()(),t++)}return[function(n){e.push(n)>1||r()},function(){t--,r()}]}(n.throttle||1/0),t=e[0],i=e[1],u=n.limit||1/0,a=n.origins||[location.hostname],f=n.ignores||[],s=n.timeoutFn||r,l=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&(l.unobserve(e=e.target),o.size<u&&t(function(){c(e.href,n.priority).then(i).catch(function(e){i(),n.onError&&n.onError(e)})}))})});return s(function(){(n.el||document).querySelectorAll("a").forEach(function(n){a.length&&!a.includes(n.hostname)||function n(e,t){return Array.isArray(t)?t.some(function(t){return n(e,t)}):(t.test||t).call(t,e.href,e)}(n,f)||l.observe(n)})},{timeout:n.timeout||2e3}),function(){o.clear(),l.disconnect()}}}function c(e,r,i){if(!(i=navigator.connection)||!i.saveData&&!/2g/.test(i.effectiveType))return Promise.all([].concat(e).map(function(e){if(!o.has(e))return o.add(e),(r?function(e){return window.fetch?fetch(e,{credentials:"include"}):n(e)}:t)(new URL(e,location.href).toString())}))}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./resources/js/app.js"],
/******/ 			["./resources/sass/app.css"],
/******/ 			["./resources/sass/docs.css"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;