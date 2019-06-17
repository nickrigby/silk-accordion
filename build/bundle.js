!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e){},function(t,e){},function(t,e,i){"use strict";function n(){new s.default}e.__esModule=!0;var s=i(6);e.SilcCore=s.default,e.silcCoreInit=n},function(t,e,i){"use strict";function n(){var t=document.querySelectorAll(".silc-accordion:not(.silc-accordion--initialized)");if(t.length>0)for(var e=0;e<t.length;e++)new s.default(t[e])}Object.defineProperty(e,"__esModule",{value:!0});var s=i(7);e.SilcAccordion=s.default,e.silcAccordionInit=n},function(t,e){!function(t){"function"!=typeof t.matches&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(t){for(var e=this,i=(e.document||e.ownerDocument).querySelectorAll(t),n=0;i[n]&&i[n]!==e;)++n;return Boolean(i[n])}),"function"!=typeof t.closest&&(t.closest=function(t){for(var e=this;e&&1===e.nodeType;){if(e.matches(t))return e;e=e.parentNode}return null})}(window.Element.prototype)},function(t,e,i){(function(e){function i(t,e,i){function s(e){var i=f,n=v;return f=v=void 0,C=e,m=t.apply(n,i)}function o(t){return C=t,y=setTimeout(u,e),L?s(t):m}function c(t){var i=t-_,n=t-C,s=e-i;return x?S(s,g-n):s}function l(t){var i=t-_,n=t-C;return void 0===_||i>=e||i<0||x&&n>=g}function u(){var t=T();if(l(t))return d(t);y=setTimeout(u,c(t))}function d(t){return y=void 0,w&&f?s(t):(f=v=void 0,m)}function h(){void 0!==y&&clearTimeout(y),C=0,f=_=v=y=void 0}function p(){return void 0===y?m:d(T())}function b(){var t=T(),i=l(t);if(f=arguments,v=this,_=t,i){if(void 0===y)return o(_);if(x)return y=setTimeout(u,e),s(_)}return void 0===y&&(y=setTimeout(u,e)),m}var f,v,g,m,y,_,C=0,L=!1,x=!1,w=!0;if("function"!=typeof t)throw new TypeError(a);return e=r(e)||0,n(i)&&(L=!!i.leading,x="maxWait"in i,g=x?A(r(i.maxWait)||0,e):g,w="trailing"in i?!!i.trailing:w),b.cancel=h,b.flush=p,b}function n(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function s(t){return!!t&&"object"==typeof t}function o(t){return"symbol"==typeof t||s(t)&&y.call(t)==l}function r(t){if("number"==typeof t)return t;if(o(t))return c;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var i=h.test(t);return i||p.test(t)?b(t.slice(2),i?2:8):d.test(t)?c:+t}var a="Expected a function",c=NaN,l="[object Symbol]",u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^0o[0-7]+$/i,b=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,g=f||v||Function("return this")(),m=Object.prototype,y=m.toString,A=Math.max,S=Math.min,T=function(){return g.Date.now()};t.exports=i}).call(e,i(9))},function(t,e,i){"use strict";e.__esModule=!0;var n=function(){function t(){document.body.classList.add("js")}return t}();e.default=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(5),s=(i(4),function(){function t(t){this.labels=[],this.contentAreas=[],this.sections=[],this.activeSections=[],this.displayingAsTabs=!1,t&&(this.element=t,this.sections=this.getChildNodesByClassName("silc-accordion__section"),this.labels=this.getChildNodesByClassName("silc-accordion__label"),this.contentAreas=this.getChildNodesByClassName("silc-accordion__content"),this.settings=this.applySettings(),this.initiallyHideSections(),this.sections.length&&(this.labelEventListener(),this.addAttributesToLabels(),this.settings.openFirst&&this.openFirstSection(),this.settings.tabs&&(this.settings.becomeTabsBreakpoint?this.becomeTabsResizeListener():(this.convertToTabs(),this.openFirstSection())),this.settings.shouldAnimate&&this.contentTransitionListener(),this.element.classList.add("silc-accordion--initialized")))}return t.prototype.getChildNodesByClassName=function(t){for(var e=this.element.querySelectorAll("."+t),i=[],n=0;n<e.length;n++)e[n].closest(".silc-accordion")===this.element&&i.push(e[n]);return i},t.prototype.updateActiveSections=function(t){if(t){var e=parseInt(t.getAttribute("data-index"));this.displayingAsTabs||this.settings.tabs&&!this.settings.becomeTabsBreakpoint||this.toggleSection(e),this.toggleLabel(e),this.toggleContent(e);var i=this.activeSections.indexOf(e);this.settings.openMultiple||(this.activeSections=[]),-1!==i?delete this.activeSections[this.activeSections.indexOf(i)]:this.activeSections.push(e)}},t.prototype.addAttributesToLabels=function(){for(var t=0;t<this.sections.length;t++){var e=this.sections[t].querySelector(".silc-accordion__label");e.setAttribute("data-index",String(t)),e.setAttribute("type","button")}},t.prototype.applySettings=function(){var t={tabs:this.element.classList.contains("silc-accordion--become-tabs")||this.element.classList.contains("silc-accordion--tabs"),openMultiple:this.element.hasAttribute("data-silc-accordion-open-multiple"),openFirst:this.element.hasAttribute("data-silc-accordion-open-first"),shouldAnimate:this.element.hasAttribute("data-silc-accordion-animated")};if(this.element.classList.contains("silc-accordion--become-tabs")){var e=window.getComputedStyle(this.element,":before").content;t.becomeTabsBreakpoint=parseInt(e.replace(/"*/g,""))}return t},t.prototype.initiallyHideSections=function(){for(var t=0;t<this.sections.length;t++)this.toggleLabel(t),this.toggleContent(t)},t.prototype.openFirstSection=function(){var t=this.element.querySelector(".silc-accordion__label");this.updateActiveSections(t)},t.prototype.labelEventListener=function(){var t=this;this.element.addEventListener("click",function(e){var i=e.target;i.classList.contains("silc-accordion__label")&&(i.hasAttribute("aria-disabled")||t.updateActiveSections(i)),e.stopPropagation()})},t.prototype.contentTransitionListener=function(){this.element.addEventListener("transitionend",function(t){var e=t.target;e.classList.contains("silc-accordion__content")&&"height"===t.propertyName&&(e.style.height=null,e.classList.remove("transitioning"))})},t.prototype.becomeTabsResizeListener=function(){var t=this,e=function(){window.innerWidth>=t.settings.becomeTabsBreakpoint?t.displayingAsTabs||(t.convertToTabs(),t.activeSections.length||t.openFirstSection()):t.displayingAsTabs&&t.convertToAccordions()};window.addEventListener("resize",n(e,100)),e()},t.prototype.toggleSection=function(t){this.settings.openMultiple||void 0!==this.activeSections[0]&&this.activeSections[0]!==t&&this.sections[this.activeSections[0]].classList.remove("silc-accordion__section--active"),this.sections[t].classList.toggle("silc-accordion__section--active")},t.prototype.toggleLabel=function(t){var e=this.labels[t],i=this.displayingAsTabs?"aria-selected":"aria-expanded",n=!!JSON.parse(e.getAttribute(i));this.settings.openMultiple||void 0!==this.activeSections[0]&&this.activeSections[0]!==t&&(this.labels[this.activeSections[0]].setAttribute(i,"false"),this.labels[this.activeSections[0]].removeAttribute("aria-disabled")),this.displayingAsTabs&&e.setAttribute("aria-disabled","true"),e.hasAttribute(i)?e.setAttribute(i,String(!n)):e.setAttribute(i,"false")},t.prototype.toggleContent=function(t){var e=this.contentAreas[t],i=!!JSON.parse(e.getAttribute("aria-hidden"));if(!this.settings.openMultiple&&void 0!==this.activeSections[0]&&this.activeSections[0]!==t){var n=this.contentAreas[this.activeSections[0]];this.slideContent(n,!0),this.toggleTabbingForChildElements(n,!1)}e.hasAttribute("aria-hidden")?(this.slideContent(e,!i),this.toggleTabbingForChildElements(e,i)):(this.toggleTabbingForChildElements(e,!1),e.setAttribute("aria-hidden","true"))},t.prototype.slideContent=function(t,e){this.settings.shouldAnimate&&!this.displayingAsTabs?e?(t.style.height=t.scrollHeight+"px",setTimeout(function(){t.style.height="0px",t.setAttribute("aria-hidden","true")},50)):(t.style.height=t.scrollHeight+"px",t.setAttribute("aria-hidden","false")):t.setAttribute("aria-hidden",""+e)},t.prototype.toggleTabbingForChildElements=function(t,e){for(var i=t.querySelectorAll("a, input, button, textarea, select, object, area"),n=0;n<i.length;n++)i[n].setAttribute("tabindex",e?"0":"-1")},t.prototype.convertToAccordions=function(){for(var t=[],e=0;e<this.labels.length;e++){var i=this.labels[e],n=document.getElementById(i.getAttribute("aria-controls")),s=document.createElement("DIV");i.setAttribute("role","button"),i.setAttribute("aria-expanded",i.getAttribute("aria-selected")),i.removeAttribute("aria-selected"),i.removeAttribute("aria-disabled"),n.removeAttribute("role"),s.className="silc-accordion__section",s.appendChild(i),s.appendChild(n),-1!==this.activeSections.indexOf(e)&&s.classList.add("silc-accordion__section--active"),t.push(s)}this.element.innerHTML="";for(var e=0;e<t.length;e++)this.element.appendChild(t[e]);this.displayingAsTabs=!1},t.prototype.convertToTabs=function(){var t=document.createElement("DIV"),e=document.createElement("DIV");t.className="silc-accordion__tablist",t.setAttribute("role","tablist"),e.className="silc-accordion__tabpanels";for(var i=0;i<this.labels.length;i++)if(this.labels[i].closest(".silc-accordion")===this.element){var n=this.labels[i],s=document.getElementById(n.getAttribute("aria-controls"));n.setAttribute("role","tab"),n.setAttribute("aria-selected",n.getAttribute("aria-expanded")),n.removeAttribute("aria-expanded"),s.setAttribute("role","tabpanel"),t.appendChild(n),e.appendChild(s)}this.element.innerHTML="",this.element.appendChild(t),this.element.appendChild(e),this.displayingAsTabs=!0},t}());e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(1),i(0);var n=i(2),s=i(3);n.silcCoreInit(),s.silcAccordionInit()},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i}]);