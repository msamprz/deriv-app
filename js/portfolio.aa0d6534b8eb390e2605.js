(window.webpackJsonp=window.webpackJsonp||[]).push([["portfolio"],{676:function(e,t,r){"use strict";var n=r(1),o=r.n(n),a=r(0),c=r.n(a),i=r(3),l=r(29),s=function(e){var t=e.amount,r=e.currency,n=e.status,o=n?"indicative--".concat(n):void 0;return c.a.createElement("div",{className:o},c.a.createElement(l.a,{amount:t,currency:r}),"no-resale"===n&&c.a.createElement("div",{className:"indicative__no-resale-msg"},Object(i.a)("Resale not offered")))};s.propTypes={amount:o.a.number,currency:o.a.string,status:o.a.string},t.a=s},678:function(e,t,r){"use strict";var n=r(4),o=r.n(n),a=r(11),c=r(69),i=r(1),l=r.n(i),s=r(0),u=r.n(s),p=r(36),f=function(e){var t=e.col_index,r=e.children;return u.a.createElement("div",{className:o()("table__cell",t)},r)};f.propTypes={children:l.a.oneOfType([l.a.node,l.a.string]),col_index:l.a.string};var m=f;function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=b(this,d(t).call(this,e))).toggleDetails=function(){r.props.replace&&r.setState(function(e){return{showDetails:!e.showDetails}})},r.state={showDetails:!1},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,u.a.Component),r=t,(n=[{key:"render",value:function(){return u.a.createElement("div",{onClick:this.props.is_footer||!this.props.replace?void 0:this.toggleDetails,className:o()(this.props.className,{"statement__row--detail":this.state.showDetails})},this.state.showDetails?u.a.createElement("div",null,this.props.replace.component?this.props.replace.component:u.a.createElement("p",null,this.props.replace.message)):this.props.cells)}}])&&_(r.prototype,n),a&&_(r,a),t}();h.propTypes={cells:l.a.arrayOf(l.a.node),className:l.a.string,replace:l.a.object};var g=function(e){var t,r,n,a=e.className,c=e.columns,i=e.is_footer,l=e.is_header,s=e.replace,f=e.row_obj,y=void 0===f?{}:f,_=e.to,b=c.map(function(e){var t=e.col_index,r=e.renderCellContent,n=e.title,o=e.key,a=n;if(!l){var c=y[t]||"";a=r?r({cell_value:c,col_index:t,row_obj:y,is_footer:i}):c}return u.a.createElement(m,{col_index:t,key:o||t},a)}),d=o()("table__row",{"table__row-link":_||s},(t={},r="".concat(a,"__row"),n=a,r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t));return _?u.a.createElement(p.c,{className:d,to:{pathname:_,state:{from_table_row:!0}}},b):u.a.createElement(h,{className:d,cells:b,replace:s,is_footer:i})};g.propTypes={className:l.a.string,columns:l.a.array,is_footer:l.a.bool,is_header:l.a.bool,replace:l.a.object,row_obj:l.a.object,to:l.a.string};var E=g;function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=N(this,C(t).call(this,e))).state={height:200},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,u.a.PureComponent),r=t,(n=[{key:"componentDidMount",value:function(){this.setState({height:this.el_table_body.clientHeight})}},{key:"componentDidUpdate",value:function(){this.alignHeader()}},{key:"alignHeader",value:function(){if(this.props.data_source.length){var e=this.el_table_body.firstChild,t=this.el_table_head.offsetWidth-e.offsetWidth;this.el_table_head.style.paddingRight="".concat(t,"px")}}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.children,a=r.className,i=r.columns,l=r.data_source,s=r.footer,p=r.getRowAction,f=r.is_empty,m=r.onScroll,y=u.a.createElement(u.a.Fragment,null,l.map(function(e,t){var r=p&&p(e);return u.a.createElement(E,{className:a,row_obj:e,columns:i,key:t,to:"string"==typeof r?r:void 0,replace:"object"===w(r)?r:void 0})}),n);return u.a.createElement("div",{className:o()("table",(e={},O(e,"".concat(a),a),O(e,"".concat(a,"__table"),a),O(e,"".concat(a,"__content"),a),e))},u.a.createElement("div",{className:"table__head",ref:function(e){t.el_table_head=e}},u.a.createElement(E,{className:a,columns:i,is_header:!0})),u.a.createElement("div",{className:"table__body",onScroll:m,ref:function(e){t.el_table_body=e}},f?y:u.a.createElement(c.Scrollbars,{autoHeight:!0,autoHeightMax:this.state.height,autoHide:!0},y)),s&&u.a.createElement("div",{className:"table__foot"},u.a.createElement(E,{className:a,row_obj:s,columns:i,is_footer:!0})))}}])&&j(r.prototype,n),a&&j(r,a),t}();T.propTypes={children:l.a.oneOfType([l.a.node,l.a.arrayOf(l.a.node)]),className:l.a.string,columns:l.a.array,data_source:a.PropTypes.arrayOrObservableArray,footer:l.a.object,getRowAction:l.a.func,onScroll:l.a.func};var x=T;r.d(t,"a",function(){return x})},700:function(e,t,r){"use strict";r.r(t);var n=r(4),o=r.n(n),a=r(11),c=r(1),i=r.n(c),l=r(0),s=r.n(l),u=r(31),p=r(678),f=r(74),m=r(9),y=r(36),_=r(29),b=r(121),d=function(e){var t=e.currency,r=e.details,n=e.expiry_time,o=e.id,a=e.indicative,c=e.payout,i=e.purchase,l=e.reference,u=e.status;return s.a.createElement(y.c,{className:"portfolio-card card-list__card card-list__card-link",activeClassName:"active",to:Object(f.b)(o)},s.a.createElement("div",{className:"portfolio-card__header"},s.a.createElement("span",{className:"portfolio-card__date"},s.a.createElement(b.a,{end_time:n})),s.a.createElement("span",{className:"portfolio-card__refid"},l)),s.a.createElement("div",{className:"portfolio-card__body"},s.a.createElement("div",{className:"portfolio-card__desc"},r),s.a.createElement("div",{className:"portfolio-card__row"},s.a.createElement("div",{className:"portfolio-card__cell portfolio-card__purchase"},s.a.createElement("span",{className:"portfolio-card__cell-text"},s.a.createElement(_.a,{amount:i,currency:t}))),s.a.createElement("div",{className:"portfolio-card__cell portfolio-card__payout"},s.a.createElement("span",{className:"portfolio-card__cell-text"},s.a.createElement(_.a,{amount:c,currency:t}))),s.a.createElement("div",{className:"portfolio-card__cell portfolio-card__indicative portfolio-card__indicative--".concat(u)},s.a.createElement("span",{className:"portfolio-card__cell-text"},s.a.createElement(_.a,{amount:a,currency:t}))))))};d.propTypes={currency:i.a.string,details:i.a.string,expiry_time:i.a.number,id:i.a.number,indicative:i.a.number,payout:i.a.number,purchase:i.a.number,reference:i.a.number,status:i.a.string};var v=d;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g=function(e){var t=e.data,r=e.currency;return s.a.createElement("div",{className:"card-list"},t.map(function(e,t){return s.a.createElement(v,h({key:t},e,{currency:r}))}))};g.propTypes={currency:i.a.string,data:a.PropTypes.arrayOrObservableArray};var E=g,O=r(337),w=r(3),j=r(64),N=r(8),C=function(e){var t=e.type;return s.a.createElement("div",{className:"contract-type"},s.a.createElement("div",{className:"type-wrapper"},s.a.createElement(N.a,{icon:"IconTradeType",type:t.toLowerCase(),className:"type"})),s.a.createElement("span",null,t&&Object(j.a)(t)||""))};C.propTypes={type:i.a.string};var P=C,T=r(676),x=function(e){return[{title:Object(w.a)("Reference No."),col_index:"reference",renderCellContent:function(e){var t=e.cell_value;return e.is_footer?Object(w.a)("Total"):t}},{title:Object(w.a)("Contract Type"),col_index:"type",renderCellContent:function(e){var t=e.cell_value;return e.is_footer?"":s.a.createElement(P,{type:t})}},{title:Object(w.a)("Contract Details"),col_index:"details"},{title:Object(w.a)("Remaining Time"),col_index:"expiry_time",renderCellContent:function(e){var t=e.cell_value;return e.is_footer?"":s.a.createElement(b.a,{end_time:t})}},{title:Object(w.a)("Potential Payout"),col_index:"payout",renderCellContent:function(t){var r=t.cell_value;return s.a.createElement(_.a,{amount:r,currency:e})}},{title:Object(w.a)("Purchase"),col_index:"purchase",renderCellContent:function(t){var r=t.cell_value;return s.a.createElement(_.a,{amount:r,currency:e})}},{title:Object(w.a)("Indicative"),col_index:"indicative",renderCellContent:function(t){var r=t.cell_value,n=t.row_obj;return s.a.createElement(T.a,{amount:+r,currency:e,status:n.status})}}]},S=r(165);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,M(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,s.a.Component),r=t,(n=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var e=this.props,t=e.active_positions,r=e.is_mobile,n=e.is_tablet,a=e.is_loading,c=e.error,i=e.totals,l=e.is_empty,u=e.currency;if(c)return s.a.createElement("p",null,c);if(a)return s.a.createElement(S.a,null);if(l)return s.a.createElement(O.a,null);var m=r||n;return s.a.createElement("div",{className:o()("portfolio container",{"portfolio--card-view":m})},m?s.a.createElement(E,{data:t,currency:u}):s.a.createElement(p.a,{className:"portfolio",columns:x(u),data_source:t,footer:i,has_fixed_header:!0,getRowAction:function(e){return Object(f.b)(e.id)}}))}}])&&D(r.prototype,n),a&&D(r,a),t}();H.propTypes={active_positions:a.PropTypes.arrayOrObservableArray,currency:i.a.string,error:i.a.string,history:i.a.object,is_empty:i.a.bool,is_loading:i.a.bool,is_mobile:i.a.bool,is_tablet:i.a.bool,onMount:i.a.func,onUnmount:i.a.func,totals:i.a.object};var U=Object(m.b)(function(e){var t=e.modules,r=e.client,n=e.ui;return{currency:r.currency,active_positions:t.portfolio.active_positions,error:t.portfolio.error,is_empty:t.portfolio.is_empty,is_loading:t.portfolio.is_loading,totals:t.portfolio.totals,onMount:t.portfolio.onMount,onUnmount:t.portfolio.onUnmount,is_mobile:n.is_mobile,is_tablet:n.is_tablet}})(Object(u.g)(H));r.d(t,"default",function(){return U})}}]);