(window.webpackJsonp=window.webpackJsonp||[]).push([["settings","account_password","api_token","authorized_application","cashier_password","financial_assessment","limits","login_history","personal_details","self_exclusion"],{675:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(1),i=n.n(l),o=function(e){var t=e.title,n=e.description,a=e.children;return r.a.createElement("div",{className:"section"},r.a.createElement("h2",{className:"section__title"},t),r.a.createElement("h4",{className:"section__description"},n),a)};o.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]),description:i.a.string,title:i.a.string},t.a=o},685:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(0),i=n.n(l),o=n(675),c=function(e){var t=e.title,n=e.description;return i.a.createElement(o.a,{title:t,description:n})};c.propTypes={description:r.a.string,title:r.a.string},t.default=c},686:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(0),i=n.n(l),o=n(675),c=function(e){var t=e.title,n=e.description;return i.a.createElement(o.a,{title:t,description:n})};c.propTypes={description:r.a.string,title:r.a.string},t.default=c},687:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(0),i=n.n(l),o=n(675),c=function(e){var t=e.title,n=e.description;return i.a.createElement(o.a,{title:t,description:n})};c.propTypes={description:r.a.string,title:r.a.string},t.default=c},688:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(0),i=n.n(l),o=n(675),c=function(e){var t=e.title,n=e.description;return i.a.createElement(o.a,{title:t,description:n})};c.propTypes={description:r.a.string,title:r.a.string},t.default=c},689:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(0),i=n.n(l),o=n(675),c=function(e){var t=e.title,n=e.description;return i.a.createElement(o.a,{title:t,description:n})};c.propTypes={description:r.a.string,title:r.a.string},t.default=c},690:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(0),i=n.n(l),o=n(675),c=function(e){var t=e.title,n=e.description;return i.a.createElement(o.a,{title:t,description:n})};c.propTypes={description:r.a.string,title:r.a.string},t.default=c},691:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(0),i=n.n(l),o=n(675),c=function(e){var t=e.title,n=e.description;return i.a.createElement(o.a,{title:t,description:n})};c.propTypes={description:r.a.string,title:r.a.string},t.default=c},692:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(0),i=n.n(l),o=n(675),c=function(e){var t=e.title,n=e.description;return i.a.createElement(o.a,{title:t,description:n})};c.propTypes={description:r.a.string,title:r.a.string},t.default=c},693:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(0),i=n.n(l),o=n(675),c=function(e){var t=e.title,n=e.description;return i.a.createElement(o.a,{title:t,description:n})};c.propTypes={description:r.a.string,title:r.a.string},t.default=c},698:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(0),i=n.n(l),o=n(31),c=n(36),s=function(e){var t=e.title,n=e.Icon,a=e.description,r=e.path,l=i.a.createElement(i.a.Fragment,null,i.a.createElement(n,null),i.a.createElement("div",{className:"menu-item__content"},i.a.createElement("div",{className:"menu-item__title"},t),i.a.createElement("div",{className:"menu-item__description"},a)));return r?i.a.createElement(c.c,{className:"menu-item",to:r,activeClassName:"menu-item--active"},l):i.a.createElement("div",{className:"menu-item"},l)};s.propTypes={description:r.a.string,Icon:r.a.element,path:r.a.string,title:r.a.string};var u=s,p=function(e){var t=e.items;return i.a.createElement("div",null,t.map(function(e,t){var n=e.title,a=e.description,r=e.Icon,l=e.path;return i.a.createElement(u,{key:t,title:n,description:a,Icon:r,path:l})}))};p.propTypes={items:r.a.arrayOf(r.a.shape({description:r.a.string,Icon:r.a.element,path:r.a.string,title:r.a.string}))};var m=p,v=function(e){var t=e.data;return i.a.createElement("div",{className:"settings-menu"},t.map(function(e){return i.a.createElement("div",{key:e.title},i.a.createElement("h2",{className:"settings-menu__group-header"},e.title),i.a.createElement("hr",{className:"hr settings-menu__separator"}),i.a.createElement(m,{items:e.items}))}))};v.propTypes={data:r.a.arrayOf(r.a.shape({items:r.a.array,title:r.a.string}))};var h=v,f=n(3);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=n(685),R=n(686),C=n(687),T=n(688),N=n(689),L=n(690),F=n(691),D=n(692),J=n(693),q=[{title:Object(f.a)("Profile"),items:[{title:Object(f.a)("Personal Details"),description:Object(f.a)("View your personal information."),Icon:function(e){e.styles;var t=y(e,["styles"]);return i.a.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},t),i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M0 0h32v32H0z"}),i.a.createElement("path",{fill:"#333",fillRule:"nonzero",d:"M22.016 20.613l-1.54-.317c-.337-.582-.771-1.357-.951-1.665a8.249 8.249 0 0 0 1.524-3.222.397.397 0 0 0 0-.1v-.45c.746-.55.96-2.498 1-2.93a6.098 6.098 0 0 0-1.844-4.264A5.04 5.04 0 0 0 16.623 6h-.279c-.04 0-4.434.216-5.27 4.621a4.372 4.372 0 0 0 .893 3.964v.666a.397.397 0 0 0 0 .091 7.665 7.665 0 0 0 1.64 3.33l-1.18 1.624-1.46.308C8.644 21.1 6.985 23.19 7 25.6c0 .221.176.4.394.4h18.212a.397.397 0 0 0 .394-.4c.013-2.415-1.655-4.503-3.984-4.987zm-6.795 1.732a3.091 3.091 0 0 1-2.065-1.666l1.024-1.448a3.7 3.7 0 0 0 1.902.832l-.68 2.323a.38.38 0 0 0-.18-.041zm1.304-.941l1.32 3.747h-2.41l1.09-3.747zm.393-1.29a3.661 3.661 0 0 0 2.008-.9c.205.375.541.966.82 1.44a3.1 3.1 0 0 1-2.057 1.666l-.771-2.207zm-5.065-9.293c.42-2.218 2.271-3.861 4.491-3.988h.27a4.412 4.412 0 0 1 3.042 1.382 5.274 5.274 0 0 1 1.64 3.647 8.903 8.903 0 0 1-.214 1.249v-.5a.497.497 0 0 0-.074-.258c-.147-.216-.377-.25-1.008-.341a10.702 10.702 0 0 1-3.279-.883 5.789 5.789 0 0 1-2.172-2.29.393.393 0 0 0-.344-.216.433.433 0 0 0-.353.2c-.704 1.19-1.86 3.272-1.86 3.788v.575a4.226 4.226 0 0 1-.14-2.365zm.934 1.84a19.12 19.12 0 0 1 1.393-2.814 5.967 5.967 0 0 0 2.172 1.981 11.4 11.4 0 0 0 3.517.958l.401.058v2.357c-.41 1.623-1.426 4.121-3.745 4.121-1.935 0-3.28-2.123-3.738-4.105v-2.556zm-1.64 8.76l1.312-.275a3.837 3.837 0 0 0 2.598 2.023h.132l-.582 1.982H7.853c.176-1.858 1.521-3.383 3.32-3.764l-.025.033zm7.542 3.73l-.722-2.074a3.88 3.88 0 0 0 2.46-1.981l1.442.291c1.803.376 3.153 1.903 3.328 3.764h-6.508zM24 28l4-4.005L30 26l-4 4h-2v-2zm5-5l1-1 2 2-1 1-2-2z"})))},Component:D.default},{title:Object(f.a)("Financial Assessment"),description:Object(f.a)("View your financial assessment settings"),Icon:function(e){e.styles;var t=O(e,["styles"]);return i.a.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},t),i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M0 0h32v32H0z"}),i.a.createElement("path",{fill:"#333",fillRule:"nonzero",d:"M9 25h13.586L24 23.586V7H10a1 1 0 0 0-1 1v17zm1-19h15v18l-2 2H8V8a2 2 0 0 1 2-2zm6.5 10h5a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1zm0 2h5a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1zm-5.354 4.854a.5.5 0 0 1 .708-.708l1 1a.5.5 0 0 1-.708.708l-1-1zm1.708 1a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708.708l-2 2zM16.5 21h5a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1zm0 2h5a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1zm-5.354-5.146a.5.5 0 0 1 .708-.708l1 1a.5.5 0 0 1-.708.708l-1-1zm1.708 1a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708.708l-2 2zm4.532-6.397a.626.626 0 0 0-.156-.446c-.103-.11-.28-.212-.528-.306a6.23 6.23 0 0 1-.642-.278 2.047 2.047 0 0 1-.464-.318 1.277 1.277 0 0 1-.3-.422 1.417 1.417 0 0 1-.108-.578c0-.385.123-.7.37-.947.245-.246.572-.39.98-.43V8h.547v.742c.403.057.719.225.947.504.228.279.342.64.342 1.085h-.988c0-.273-.057-.478-.17-.613a.559.559 0 0 0-.452-.204c-.187 0-.332.053-.434.16-.103.105-.154.251-.154.438 0 .173.05.312.15.417.1.105.287.212.559.322.272.109.496.212.672.309.175.097.323.206.444.328a1.278 1.278 0 0 1 .373.962c0 .388-.121.702-.363.944-.241.241-.574.384-.998.427v.68h-.543v-.677c-.467-.05-.83-.216-1.085-.497-.257-.282-.385-.656-.385-1.123h.988c0 .271.064.48.193.624.129.145.314.217.555.217.2 0 .36-.053.475-.159a.552.552 0 0 0 .175-.429z"})))},Component:N.default}]},{title:Object(f.a)("Security & Limits"),items:[{title:Object(f.a)("Account Password"),description:Object(f.a)("Change your main login password."),Icon:function(e){e.styles;var t=b(e,["styles"]);return i.a.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},t),i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M0 0h32v32H0z"}),i.a.createElement("path",{fill:"#333",fillRule:"nonzero",d:"M8 19.02v4.96h16v-4.96H8zM8 18h16c.552 0 1 .457 1 1.02v4.96A1.01 1.01 0 0 1 24 25H8c-.552 0-1-.457-1-1.02v-4.96c0-.563.448-1.02 1-1.02zm12.5 2.793l.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708l.646.647zm-4.5 0l.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708L16 22.207l-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708l.646.647zm-4.5 0l.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708l.646.647zM18 9.979v-.916c0-1.128-.895-2.042-2-2.042s-2 .914-2 2.042v.916h4zM16 6c1.657 0 3 1.371 3 3.063V11h-6V9.062C13 7.373 14.343 6 16 6zm-4 5.02v4.96h8v-4.96h-8zM12 10h8c.552 0 1 .457 1 1.02v4.96A1.01 1.01 0 0 1 20 17h-8c-.552 0-1-.457-1-1.02v-4.96c0-.563.448-1.02 1-1.02zm3.5 3.866a1 1 0 1 1 1 0v.634a.5.5 0 1 1-1 0v-.634z"})))},Component:A.default},{title:Object(f.a)("Cashier Password"),description:Object(f.a)("Change the password used for deposits and withdrawals"),Icon:function(e){e.styles;var t=E(e,["styles"]);return i.a.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},t),i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M0 0h32v32H0z"}),i.a.createElement("path",{fill:"#333",fillRule:"nonzero",d:"M7 7v10h15V7H7zm16 7h-1v3h-5v1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v7zM6 8h17v2H6V8zm3 4h6v1H9v-1zm0 2h6v1H9v-1zm9.5 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm.5 4h4v-1a2 2 0 1 0-4 0v1zm2-4a3 3 0 0 1 3 3v2h-6v-2a3 3 0 0 1 3-3zm-4 5v5h8v-5h-8zm0-1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm3.5 3.866a1 1 0 1 1 1 0v.634a.5.5 0 1 1-1 0v-.634z"})))},Component:T.default},{title:Object(f.a)("Self Exclusion"),description:Object(f.a)("Facility that allows you to set limits on your account."),Icon:function(e){e.styles;var t=H(e,["styles"]);return i.a.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},t),i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M0 0h32v32H0z"}),i.a.createElement("path",{stroke:"#333",d:"M10.268 23.5h.232v-4.333L8.449 16.43a.727.727 0 0 0-1.095-.077 1.462 1.462 0 0 0-.274 1.687l1.34 2.68a.5.5 0 0 0 .03.053l1.818 2.726z"}),i.a.createElement("path",{fill:"#333",fillRule:"nonzero",d:"M11 16v8a1 1 0 0 0 1 1h9v-9H11zm0-1h10a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-9a2 2 0 0 1-2-2v-8a1 1 0 0 1 1-1zm9 0h2v-4a1 1 0 0 0-2 0v4zm1-6a2 2 0 0 1 2 2v5h-4v-5a2 2 0 0 1 2-2zm-4 6h2v-5a1 1 0 0 0-2 0v5zm1-7a2 2 0 0 1 2 2v6h-4v-6a2 2 0 0 1 2-2zm-4 7h2V8a1 1 0 0 0-2 0v7zm1-9a2 2 0 0 1 2 2v8h-4V8a2 2 0 0 1 2-2zm-4 9h2V9a1 1 0 0 0-2 0v6zm1-8a2 2 0 0 1 2 2v7h-4V9a2 2 0 0 1 2-2z"}),i.a.createElement("path",{fill:"#FFF",d:"M22 16v10h-5V16h-6v-1h11v1z"}),i.a.createElement("path",{fill:"#333",d:"M13 7.5h1v8a.5.5 0 1 1-1 0v-8zm3 1h1v7a.5.5 0 1 1-1 0v-7zm3 1h1v6a.5.5 0 1 1-1 0v-6z"}),i.a.createElement("path",{fill:"#333",fillRule:"nonzero",d:"M21.5 20.793l.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708l.646.647zm0 4.207a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"})))},Component:J.default},{title:Object(f.a)("Limits"),description:Object(f.a)("View your trading and withdrawal limits"),Icon:function(e){e.styles;var t=M(e,["styles"]);return i.a.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},t),i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M0 0h32v32H0z"}),i.a.createElement("path",{fill:"#333",fillRule:"nonzero",d:"M16 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6 5.708A8.967 8.967 0 0 0 16 25a8.967 8.967 0 0 0 6-2.292l-.854-.854a.5.5 0 0 1 .708-.708l.854.855a8.964 8.964 0 0 0 2.278-5.501H24a.5.5 0 1 1 0-1h.986a8.964 8.964 0 0 0-2.278-5.5l-.854.854a.5.5 0 0 1-.708-.708l.855-.854A8.964 8.964 0 0 0 16.5 7.014V8a.5.5 0 1 1-1 0v-.986A8.964 8.964 0 0 0 10 9.292l.854.854a.5.5 0 0 1-.708.708l-.854-.855A8.964 8.964 0 0 0 7.014 15.5H8a.5.5 0 1 1 0 1h-.986A8.964 8.964 0 0 0 9.292 22l.854-.854a.5.5 0 0 1 .708.708l-.855.854zM16 26c-5.523 0-10-4.477-10-10S10.477 6 16 6s10 4.477 10 10-4.477 10-10 10zm-3.854-13.146a.5.5 0 0 1 .708-.708l2.12 2.122a.5.5 0 1 1-.706.707l-2.122-2.121z"})))},Component:L.default},{title:Object(f.a)("Login History"),description:Object(f.a)("View your login history"),Icon:function(e){e.styles;var t=S(e,["styles"]);return i.a.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},t),i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M0 0h32v32H0z"}),i.a.createElement("path",{fill:"#333",fillRule:"nonzero",d:"M9 14v3h5v-3H9zm0-1h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm3.5-.5a1 1 0 0 0-2 0h2zm-1-2a2 2 0 0 1 2 2v1h-4v-1a2 2 0 0 1 2-2zM7 8v13h18V8H7zm0-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm5 14h1v4h-1v-4zm7 0h1v4h-1v-4zm-8.5 3h11a.5.5 0 1 1 0 1h-11a.5.5 0 1 1 0-1zM6 19h20v1H6v-1zm11-9v1h6v-1h-6zm0-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zm0 5v1h6v-1h-6zm0-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zm-.5 4h1a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1zm3 0a.5.5 0 1 1 0 1 .5.5 0 1 1 0-1zm2 0a.5.5 0 1 1 0 1 .5.5 0 1 1 0-1z"})))},Component:F.default},{title:Object(f.a)("API Token"),description:Object(f.a)("API token for third party applications"),Icon:function(e){e.styles;var t=_(e,["styles"]);return i.a.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},t),i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M0 0h32v32H0z"}),i.a.createElement("path",{fill:"#333",fillRule:"nonzero",d:"M7 19v5h18v-5H7zm0-1h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm13.5 2.793l.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708l.646.647zm-4.5 0l.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708L16 22.207l-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708l.646.647zm-4.5 0l.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708l.646.647zM16 11c1.14 0 2-.716 2-1.5S17.14 8 16 8c-1.14 0-2 .716-2 1.5s.86 1.5 2 1.5zm0 1c-1.657 0-3-1.12-3-2.5S14.343 7 16 7s3 1.12 3 2.5-1.343 2.5-3 2.5zm0-1a.5.5 0 0 1 .5.5v5a.5.5 0 1 1-1 0v-5a.5.5 0 0 1 .5-.5zm0 5h2a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1zm0-2h1a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1z"})))},Component:R.default},{title:Object(f.a)("Authorized Applications"),description:Object(f.a)("Manage your authorised applications"),Icon:function(e){e.styles;var t=k(e,["styles"]);return i.a.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32"},t),i.a.createElement("g",{fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M0 0h32v32H0z"}),i.a.createElement("path",{fill:"#333",fillRule:"nonzero",d:"M9 14v2h14v-2H9zm0-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 7v2h5v-2H9zm0-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm9 1v2h5v-2h-5zm0-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM7 7v18h18V7H7zm0-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm-1 4h20v1H6v-1zm17.5-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"})))},Component:C.default}]}];function B(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){K(e,t,n[t])})}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=function(e){var t=e.match,n=e.routes.reduce(function(e,t){var n=t.component,a=t.path;return e[n.displayName||n.name]=a,e},{}),a=q.map(function(e){return G({},e,{items:e.items.map(function(e){return G({},e,{path:n[e.Component.displayname||e.Component.name]})})})}),r=a.reduce(function(e,t){return[].concat(B(e),B(t.items))},[]);return i.a.createElement("div",{className:"settings container"},i.a.createElement("div",{className:"settings__sidebar desktop-only"},i.a.createElement(h,{data:a})),i.a.createElement("div",{className:"settings__content"},i.a.createElement(o.d,null,r.map(function(e){var t=e.Component,n=e.title,a=e.description,r=e.path;return i.a.createElement(o.b,{key:r,path:r,render:function(){return i.a.createElement(t,{title:n,description:a})}})}),i.a.createElement(o.a,{from:t.url,to:r[0].path}))))};Q.propTypes={match:r.a.object,routes:r.a.arrayOf(r.a.shape({component:r.a.func,path:r.a.string}))};t.default=Q}}]);