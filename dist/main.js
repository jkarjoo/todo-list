!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=(e,t=[],n)=>{const r=document.createElement(e);return t.forEach(e=>{r.classList.add(e)}),n&&(r.innerHTML=n),r},o=e=>{const t=document.querySelector(".main-content"),n=document.querySelector(".todolist"),o=r("li",["list"]),i=r("span",[],`${e}`),d=r("div",["buttons"]);[r("div",["editbtn"]),r("div",["deletebtn"])].forEach(e=>d.appendChild(e)),[i,d].forEach(e=>o.appendChild(e)),n.appendChild(o),t.appendChild(n)};(()=>{const e=document.querySelector(".main-content"),t=r("div",["header-content"]);[r("h1",["header"],"All Lists"),r("div",["newlist"])].forEach(e=>t.appendChild(e)),e.appendChild(t);const n=r("ul",["todolist"]);e.appendChild(n)})(),o("School"),o("Groceries"),o("Work")}]);