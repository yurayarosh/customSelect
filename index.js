"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,s){return e&&_defineProperties(t.prototype,e),s&&_defineProperties(t,s),t}function _defineProperty(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function ownKeys(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,n)}return s}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(s,!0).forEach(function(t){_defineProperty(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ownKeys(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function offset(t){var e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}}function wrap(t,e){t.parentNode.insertBefore(e,t),e.appendChild(t)}function unwrap(t){for(var e=document.createDocumentFragment();t.firstChild;){var s=t.removeChild(t.firstChild);e.appendChild(s)}t.parentNode.replaceChild(e,t)}function detectTouch(){return"ontouchstart"in window||navigator.maxTouchPoints}Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!t||"string"!=typeof t)return null;for(var s=t.charAt(0);e&&e!==document;e=e.parentNode){if("."===s&&e.classList&&e.classList.contains(t.substr(1)))return e;if("#"===s&&e.id===t.substr(1))return e;if("["===s&&e.hasAttribute(t.substr(1,t.length-2)))return e;if(e.tagName.toLowerCase()===t)return e}return null});var constants={wrap:"custom-select",opener:"custom-select__opener",panel:"custom-select__panel",option:"custom-select__option",optionsWrap:"custom-select__options",optgroup:"custom-select__optgroup",panelItemClassName:"custom-select__panel-item",openerLabel:"custom-select__opener-label",IS_OPEN:"is-open",IS_DISABLED:"is-disabled",IS_MULTIPLE:"is-multiple",IS_SELECTED:"is-selected",IS_ABOVE:"is-above",HAS_CUSTOM_SELECT:"has-custom-select",HAS_UNUSED_CLOSE_FUNCTION:"has-unused-close-custom-select-function",DATA_ALLOW_PANEL_CLICK:"data-allow-panel-click",DATA_LABEL:"data-label",DATA_VALUE:"data-value",DATA_HAS_PANEL_ITEM:"data-has-panel-item",DATA_LABEL_INDEX:"data-label-index"},defaultParams={optionBuilder:void 0,panelItem:{position:"",item:"",className:""},changeOpenerText:!0,multipleSelectionOnSingleClick:!0,multipleSelectOpenerText:{labels:!1,array:!1},allowPanelClick:!1,openOnHover:!1,closeOnMouseleave:!1,wrapDataAttributes:!1,openerLabel:!1};function _createElements(){var t,e,s,n,i=this,o=document.createElement("div"),c=document.createElement("div"),a=document.createElement("div"),l=this.el.options,r=this.el.querySelectorAll("optgroup");if(this.options.openerLabel&&((n=document.createElement("span")).className=this.constants.openerLabel),this.options.panelItem.item&&(e=document.createElement("div"),(s=document.createElement("div")).className=this.constants.optionsWrap,e.className=this.constants.panelItemClassName,this.el.setAttribute(this.constants.DATA_HAS_PANEL_ITEM,""),this.options.panelItem.item.classList?((t=this.options.panelItem.item.cloneNode(!0)).className=this.options.panelItem.className?this.options.panelItem.className:"",e.appendChild(t)):"string"==typeof this.options.panelItem.item&&(e.innerHTML=this.options.panelItem.item)),e&&"top"===this.options.panelItem.position&&c.appendChild(e),0<r.length){for(var u=0;u<r.length;u++){for(var p=r[u].label,h=r[u].querySelectorAll("option"),d=document.createElement("div"),m=0;m<h.length;m++){var L=document.createElement("div");if(L.classList.add(this.constants.option),L.setAttribute(this.constants.DATA_VALUE,h[m].value),L.innerHTML=h[m].innerHTML,this.addDataAttributes(h[m],L),this.addOptionItem(h[m],L),h[m].selected){L.classList.add(this.constants.IS_SELECTED),n?n.innerHTML=h[m].innerHTML:a.innerHTML=h[m].innerHTML;var E=L.querySelector('input[type="checkbox"]');E&&(E.checked=!0)}h[m].disabled&&L.classList.add(this.constants.IS_DISABLED),d.appendChild(L)}d.classList.add(this.constants.optgroup),d.setAttribute(this.constants.DATA_LABEL,p),this.addDataAttributes(r[u],d),s?s.appendChild(d):c.appendChild(d)}s&&c.appendChild(s)}else{for(var f=[],_=0;_<l.length;_++){var S=document.createElement("div");S.classList.add(this.constants.option),S.innerHTML=l[_].innerHTML,S.setAttribute(this.constants.DATA_VALUE,l[_].value),this.addDataAttributes(l[_],S),this.addOptionItem(l[_],S);var A=S.querySelector('input[type="checkbox"]');this.el.multiple?l[_].selected&&(S.classList.add(this.constants.IS_SELECTED),f.push(S),n?n.innerHTML=l[_].innerHTML:a.innerHTML=l[_].innerHTML,A&&(A.checked=!0)):l[_].selected&&(S.classList.add(this.constants.IS_SELECTED),n?n.innerHTML=l[_].innerHTML:a.innerHTML=l[_].innerHTML,A&&(A.checked=!0)),l[_].disabled&&S.classList.add(this.constants.IS_DISABLED),s?s.appendChild(S):c.appendChild(S)}if(this.options.multipleSelectOpenerText.labels&&this.options.openerLabel&&console.warn("You set `multipleSelectOpenerText: { labels: true }` and `openerLabel: true` options to this select",this.el,"It doesn't work that way. You should change one of the options."),0<f.length){var v=f.map(function(t){return t.innerText});this.options.multipleSelectOpenerText.array&&(n?n.innerHTML=v:a.innerHTML=v),this.options.multipleSelectOpenerText.labels&&f.forEach(function(t){i.setSelectOptionsItems(t,i.el,a)})}s&&c.appendChild(s)}function T(t,e){t&&o.classList.add(e)}e&&"bottom"===this.options.panelItem.position&&c.appendChild(e),this.options.allowPanelClick&&this.el.setAttribute(this.constants.DATA_ALLOW_PANEL_CLICK,""),o.classList.add(this.constants.wrap),this.options.wrapDataAttributes&&this.addDataAttributes(this.el,o),T(this.el.disabled,this.constants.IS_DISABLED),T(this.el.multiple,this.constants.IS_MULTIPLE),c.classList.add(this.constants.panel),a.classList.add(this.constants.opener),n&&a.appendChild(n),wrap(this.el,o),o.appendChild(a),o.appendChild(c)}function _open(){var t=this.options.openOnHover&&!this.isTouch?"mouseenter":"click";this.openSelectBind=this.openSelect.bind(this),this.opener.addEventListener(t,this.openSelectBind)}function _close(){this.options.closeOnMouseleave&&!this.isTouch&&this.select.addEventListener("mouseleave",function(t){document.body.click()}),document.documentElement.classList.contains(this.constants.HAS_CUSTOM_SELECT)||(this.closeSelectBind=this.closeSelect.bind(this),document.addEventListener("click",this.closeSelectBind),document.documentElement.classList.add(this.constants.HAS_CUSTOM_SELECT),this.closeSelectAdded=!0)}function _change(){for(var i=this,o=this.el.options,c=this.select.querySelectorAll("."+this.constants.option),t=function(n){c[n].addEventListener("click",function(t){if(!i.el.disabled){var e=t.currentTarget;if(!e.classList.contains(i.constants.IS_DISABLED)){var s=i.options.openerLabel?i.opener.children[0]:i.opener;i.setSelectedOptions({e:t,clickedCustomOption:e,nativeOptionsList:o,customOptionsList:c,item:n}),i.dispatchEvent(i.el),i.triggerCheckbox(e),i.options.changeOpenerText&&(i.el.multiple&&i.options.multipleSelectOpenerText.array?i.getSelectOptionsText(i.el)&&(s.innerHTML=i.getSelectOptionsText(i.el)):i.el.multiple&&i.options.multipleSelectOpenerText.labels?i.setSelectOptionsItems(e,i.el,i.opener):i.el.multiple&&!i.options.multipleSelectOpenerText?s.innerHTML=s.innerHTML:s.innerHTML=e.innerText)}}})},e=0;e<c.length;e++)t(e)}function _trigerCustomEvents(){var e=this;new MutationObserver(function(t){t.forEach(function(t){t.target.classList.contains(e.constants.IS_OPEN)?-1===t.oldValue.indexOf(e.constants.IS_OPEN)&&e.onOpen&&e.onOpen(t.target):0<t.oldValue.indexOf(e.constants.IS_OPEN)&&(e.panel.classList.remove(e.constants.IS_ABOVE),e.onClose&&e.onClose(t.target))})}).observe(this.select,{attributes:!0,attributeOldValue:!0,attributeFilter:["class"]})}function _destroy(){this.select.classList.contains(this.constants.wrap)&&(this.opener.parentNode.removeChild(this.opener),this.panel.parentNode.removeChild(this.panel),unwrap(this.select),this.el.removeAttribute(this.constants.DATA_HAS_PANEL_ITEM),this.el.removeAttribute(this.constants.DATA_ALLOW_PANEL_CLICK)),document.querySelectorAll(".".concat(this.constants.wrap)).length||(document.documentElement.classList.remove(this.constants.HAS_CUSTOM_SELECT),this.closeSelectAdded?(document.removeEventListener("click",this.closeSelectBind),document.documentElement.classList.remove(this.constants.HAS_UNUSED_CLOSE_FUNCTION)):document.documentElement.classList.add(this.constants.HAS_UNUSED_CLOSE_FUNCTION))}var Select=function(){function s(t,e){_classCallCheck(this,s),this.el=t,this.options=_objectSpread2({},defaultParams,{},e),this.constants=constants,this.isTouch=detectTouch()}return _createClass(s,[{key:"init",value:function(){_createElements.call(this),_open.call(this),_close.call(this),_change.call(this),_trigerCustomEvents.call(this)}},{key:"destroy",value:function(){_destroy.call(this)}},{key:"dispatchEvent",value:function(t){var e=document.createEvent("HTMLEvents");e.initEvent("change",!0,!1),t.dispatchEvent(e)}},{key:"triggerCheckbox",value:function(t){var e=t.querySelector('input[type="checkbox"]'),s=t.classList.contains(this.constants.IS_SELECTED);e&&s&&(e.checked=!0),e&&!s&&(e.checked=!1)}},{key:"addOptionItem",value:function(t,e){this.options.optionBuilder&&this.options.optionBuilder(t,e)}},{key:"openSelect",value:function(t){if(!this.el.disabled&&!t.target.closest("[".concat(this.constants.DATA_LABEL_INDEX,"]"))){var e=document.querySelectorAll("."+this.constants.wrap+"."+this.constants.IS_OPEN);this.select.classList.toggle(this.constants.IS_OPEN);for(var s=0;s<e.length;s++)e[s].classList.remove(this.constants.IS_OPEN);this.setPanelPosition()}}},{key:"closeSelect",value:function(t){if(document.documentElement.classList.contains(this.constants.HAS_UNUSED_CLOSE_FUNCTION)&&console.warn("You have unused `closeSelect` function, triggering on document click. You shoud remove it, by using `destroy()` method to the first select element."),document.documentElement.classList.contains(this.constants.HAS_CUSTOM_SELECT)&&!t.target.closest("[".concat(this.constants.DATA_LABEL_INDEX,"]"))){var e=document.querySelectorAll("."+this.constants.wrap+"."+this.constants.IS_OPEN);if(e.length&&!t.target.closest("."+this.constants.IS_DISABLED)&&!t.target.hasAttribute(this.constants.DATA_LABEL)){if(t.target.closest("."+this.constants.wrap)){var s=t.target.closest("."+this.constants.wrap).querySelector("select");if(s.multiple&&i(t,this.constants.panel))return;if(s.hasAttribute(this.constants.DATA_ALLOW_PANEL_CLICK)&&i(t,this.constants.panel))return;if(s.hasAttribute(this.constants.DATA_HAS_PANEL_ITEM)&&i(t,this.constants.panelItemClassName))return}if(-1===t.target.className.indexOf(this.constants.opener))for(var n=0;n<e.length;n++)e[n].classList.remove(this.constants.IS_OPEN)}}function i(t,e){if(t.target.classList&&t.target.classList.contains(e)||t.target.closest("."+e))return!0}}},{key:"setSelectedOptionsMultiple",value:function(t){var e=t.clickedCustomOption,s=t.nativeOptionsList,n=t.item;s[n].selected?(s[n].selected=!1,e.classList.remove(this.constants.IS_SELECTED)):(s[n].selected=!0,e.classList.add(this.constants.IS_SELECTED))}},{key:"setSelectedOptionsDefault",value:function(t){for(var e=t.clickedCustomOption,s=t.nativeOptionsList,n=t.customOptionsList,i=t.item,o=0;o<s.length;o++){var c=n[o].querySelector('input[type="checkbox"]');s[o].selected=!1,n[o].classList.remove(this.constants.IS_SELECTED),c&&(c.checked=!1)}var a=e.querySelector('input[type="checkbox"]');e.classList.add(this.constants.IS_SELECTED),s[i].selected=!0,a&&(a.checked=!0)}},{key:"setSelectedOptions",value:function(t){var e=t.e,s=t.clickedCustomOption,n=t.nativeOptionsList,i=t.customOptionsList,o=t.item;this.el.multiple&&(this.options.multipleSelectionOnSingleClick||e.ctrlKey)?this.setSelectedOptionsMultiple({clickedCustomOption:s,nativeOptionsList:n,item:o}):this.setSelectedOptionsDefault({clickedCustomOption:s,nativeOptionsList:n,customOptionsList:i,item:o})}},{key:"setPanelPosition",value:function(){offset(this.panel).top+this.panel.offsetHeight>=window.innerHeight?this.panel.classList.add(this.constants.IS_ABOVE):this.panel.classList.remove(this.constants.IS_ABOVE)}},{key:"getSelectOptionsText",value:function(t){var e=[].slice.call(t.options),s=[];return e.forEach(function(t){t.selected&&s.push(t.innerText)}),s.join(", ")}},{key:"setSelectOptionsItems",value:function(t,e,s){var n=this,i=[].slice.call(t.parentNode.children),o=[].slice.call(e.options),c=i.map(function(t,e){var s=document.createElement("span");return s.className=n.constants.openerLabel,s.setAttribute(n.constants.DATA_LABEL_INDEX,e),s.innerHTML="".concat(t.innerText,"<button></button>"),s});i.forEach(function(t,e){t.setAttribute(n.constants.DATA_LABEL_INDEX,e)}),o.forEach(function(t,e){t.setAttribute(n.constants.DATA_LABEL_INDEX,e)});var a=+t.getAttribute(this.constants.DATA_LABEL_INDEX),l=s.querySelector("[".concat(this.constants.DATA_LABEL_INDEX,'="').concat(a,'"]'));t.classList.contains(this.constants.IS_SELECTED)?(s.children.length||(s.innerHTML=""),s.appendChild(c[a])):l&&s.removeChild(l),c.forEach(function(t){t.querySelector("button").addEventListener("click",function(t){var e=this;t.preventDefault();var s=t.currentTarget.parentNode,n=s.getAttribute(this.constants.DATA_LABEL_INDEX),i=[].slice.call(this.select.querySelectorAll("[".concat(this.constants.DATA_LABEL_INDEX,'="').concat(n,'"]'))),o=i.filter(function(t){if(t.classList.contains(e.constants.option))return t})[0];i.forEach(function(t){t.selected&&(t.selected=!1),t.classList.contains(e.constants.IS_SELECTED)&&t.classList.remove(e.constants.IS_SELECTED)}),this.dispatchEvent(this.el),this.triggerCheckbox(o),s.parentNode&&s.parentNode.removeChild(s)}.bind(n))})}},{key:"addDataAttributes",value:function(t,e){var s=[].filter.call(t.attributes,function(t){return/^data-/.test(t.name)});s.length&&s.forEach(function(t){e.setAttribute(t.name,t.value)})}},{key:"select",get:function(){return this.el.parentNode}},{key:"opener",get:function(){return this.select.querySelector("."+this.constants.opener)}},{key:"panel",get:function(){return this.select.querySelector("."+this.constants.panel)}}]),s}();module.exports=Select;
