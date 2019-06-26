(window.webpackJsonp=window.webpackJsonp||[]).push([["open_positions"],{675:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=function(e){var t={category:"",underlying:""},n=new RegExp("^([A-Z]+)_((OTC_[A-Z0-9]+)|R_[\\d]{2,3}|[A-Z]+)_").exec(e.shortcode);return null!==n&&(t.category=n[1].toLowerCase(),t.underlying=n[2]),t}},676:function(e,t,n){"use strict";var o=n(1),a=n.n(o),r=n(0),c=n.n(r),i=n(8),l=function(e){var t=e.has_selected_date,n=e.component_icon,o=e.localized_message,a=e.localized_period_message;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"empty-trade-history"},c.a.createElement(i.a,{icon:n,className:"empty-trade-history__icon"}),c.a.createElement("span",{className:"empty-trade-history__text"},t?a:o)))};l.propTypes={component_icon:a.a.string,has_selected_date:a.a.bool,localized_message:a.a.string,localized_period_message:a.a.string},t.a=l},677:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(0),a=n.n(o),r=function(e){var t=e.i18n_heading,n=e.i18n_message;return a.a.createElement("div",{className:"reports__meta"},a.a.createElement("div",{className:"reports__meta-description"},a.a.createElement("h1",{className:"reports__meta-description--heading"},t),a.a.createElement("p",{className:"reports__meta-description--paragraph"},n)))}},678:function(e,t,n){"use strict";var o=n(1),a=n.n(o),r=n(0),c=n.n(r),i=n(164),l=function(e){var t=e.empty_message_component;return c.a.createElement(c.a.Fragment,null,e.is_empty&&c.a.createElement(t,{component_icon:e.component_icon,has_selected_date:e.has_selected_date,localized_message:e.localized_message}),e.is_loading&&c.a.createElement(i.a,null))};l.propTypes={component_icon:a.a.string,empty_message_component:a.a.func,has_selected_date:a.a.bool,localized_message:a.a.string},t.a=l},679:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(3),c=n(4),i=n.n(c),l=n(1),s=n.n(l);var u=["default","success","warn","danger","info"],p=function(e){var t,n,o,r=e.mode,c=e.children,l=u.some(function(e){return e===r})?r:"default";return a.a.createElement("span",{className:i()("label",(t={},n="label--".concat(l),o=l,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t))},c)};p.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),mode:s.a.oneOf(u)};var m=p,f=n(29),_=n(161),d=n(163),y=n(9),b=function(e){var t=e.id,n=e.is_loading,o=e.getPositionById,r=e.server_time,c=o(t);if(!c)return a.a.createElement("div",null);var i=c.contract_info,l=Object(_.d)(r,i.purchase_time,i.date_expiry);return a.a.createElement(d.a,{is_loading:n,remaining_time:i.date_expiry,percentage:l,has_result:!1,current_tick:c.current_tick,ticks_count:i.ticks_count})};b.propTypes={getPositionById:s.a.func,id:s.a.oneOfType([s.a.number,s.a.string]),is_loading:s.a.bool,server_time:s.a.object};var v=Object(y.b)(function(e){var t=e.modules,n=e.common;return{is_loading:t.portfolio.is_loading,server_time:n.server_time,getPositionById:t.portfolio.getPositionById}})(b),h=function(e){return+e.replace(/,/g,"")>=0?"profit":"loss"},g=function(e){var t=e.amount,n=e.currency,o=e.status,c=o?"indicative--".concat(o):void 0;return a.a.createElement("div",{className:c},a.a.createElement(f.a,{amount:t,currency:n}),"no-resale"===o&&a.a.createElement("div",{className:"indicative__no-resale-msg"},Object(r.a)("Resale not offered")))};g.propTypes={amount:s.a.number,currency:s.a.string,status:s.a.string};var E=g,O=n(162),w=n(8),j=n(675),k=function(e){var t=e.payload,n=e.show_description,o="string"==typeof t.shortcode,r=Object(j.a)(t);return o&&r?a.a.createElement("div",{className:"market-symbol-icon"},a.a.createElement("div",{className:"market-symbol-icon-name"},a.a.createElement(O.a,{market:r.underlying}),n&&t.display_name),a.a.createElement("div",{className:"market-symbol-icon-category"},a.a.createElement(w.a,{icon:"IconTradeType",type:r.category}),n&&r.category)):["deposit","withdrawal"].includes(t.action_type)?a.a.createElement("div",{className:"market-symbol-icon"},"deposit"===t.action_type?a.a.createElement(w.a,{icon:"IconDeposit"}):a.a.createElement(w.a,{icon:"IconWithdrawal"})):a.a.createElement("svg",{width:"32",height:"32",className:"unknown-icon"},a.a.createElement("rect",{width:"32",height:"32"}))};k.propTypes={action:s.a.string,payload:s.a.object,show_description:s.a.bool};var C=k,N=function(e){var t=e.value,n=e.children,o=h(t);return a.a.createElement("span",{className:"amount--".concat(o)},n)};N.propTypes={value:s.a.string};var x=N;n.d(t,"c",function(){return T}),n.d(t,"b",function(){return P}),n.d(t,"a",function(){return S});var T=function(e){return[{key:"icon",title:"",col_index:"action_type",renderCellContent:function(e){var t=e.cell_value,n=e.row_obj;return a.a.createElement(C,{action:t,key:n.transaction_id,payload:n})}},{title:Object(r.a)("Ref. ID"),col_index:"refid"},{title:Object(r.a)("Transaction time"),col_index:"date"},{key:"mode",title:Object(r.a)("Transaction"),col_index:"action_type",renderCellContent:function(e){var t,n,o=e.cell_value,r=e.row_obj;return a.a.createElement(m,{mode:(t=o,n={deposit:"warn",withdrawal:"info",sell:"danger",buy:"success",default:"default"},Object.keys(n).find(function(e){return e===t})?n[t]:n.default)},r.action)}},{title:Object(r.a)("Credit/Debit"),col_index:"amount",renderCellContent:function(t){var n=t.cell_value;return a.a.createElement("div",{className:"amount--".concat(h(n))},a.a.createElement(f.a,{has_sign:!0,amount:n.replace(/[,]+/g,""),currency:e}))}},{title:Object(r.a)("Balance"),col_index:"balance",renderCellContent:function(t){var n=t.cell_value;return a.a.createElement(f.a,{amount:n.replace(/[,]+/g,""),currency:e})}}]},P=function(e){return[{key:"icon",title:"",col_index:"action_type",renderCellContent:function(e){var t=e.cell_value,n=e.row_obj;return e.is_footer?Object(r.a)("Total profit/loss"):a.a.createElement(C,{action:t,key:n.transaction_id,payload:n})}},{title:Object(r.a)("Ref. ID"),col_index:"transaction_id"},{title:Object(r.a)("Buy time"),col_index:"purchase_time"},{title:Object(r.a)("Buy price"),col_index:"buy_price",renderCellContent:function(t){var n=t.cell_value;return t.is_footer?"":a.a.createElement(f.a,{amount:n,currency:e})}},{title:Object(r.a)("Sell time"),col_index:"sell_time"},{title:Object(r.a)("Sell price"),col_index:"sell_price",renderCellContent:function(t){var n=t.cell_value;return t.is_footer?"":a.a.createElement(f.a,{amount:n,currency:e})}},{title:Object(r.a)("Profit/Loss"),col_index:"profit_loss",renderCellContent:function(t){var n=t.cell_value;return a.a.createElement(x,{value:n},a.a.createElement(f.a,{has_sign:!0,amount:n.replace(/[,]+/g,""),currency:e}))}}]},S=function(e){return[{title:"",col_index:"type",renderCellContent:function(e){var t=e.cell_value,n=e.row_obj;return e.is_footer?Object(r.a)("Total"):a.a.createElement(C,{action:t,key:n.id,payload:n.contract_info})}},{title:Object(r.a)("Ref. ID"),col_index:"reference"},{title:Object(r.a)("Buy price"),col_index:"purchase",renderCellContent:function(t){var n=t.cell_value;return a.a.createElement(f.a,{amount:n,currency:e})}},{title:Object(r.a)("Potential payout"),col_index:"payout",renderCellContent:function(t){var n=t.cell_value;return n?a.a.createElement(f.a,{amount:n,currency:e}):a.a.createElement("span",null,"-")}},{title:Object(r.a)("Indicative price"),col_index:"indicative",renderCellContent:function(t){var n=t.cell_value,o=t.row_obj;return a.a.createElement(E,{amount:+n,currency:e,status:o.status})}},{title:Object(r.a)("Remaining time"),col_index:"id",renderCellContent:function(e){var t=e.cell_value;return a.a.createElement(v,{id:t})}}]}},680:function(e,t,n){"use strict";var o=n(4),a=n.n(o),r=n(11),c=n(70),i=n(1),l=n.n(i),s=n(0),u=n.n(s),p=n(37),m=function(e){var t=e.col_index,n=e.children;return u.a.createElement("div",{className:a()("table__cell",t)},n)};m.propTypes={children:l.a.oneOfType([l.a.node,l.a.string]),col_index:l.a.string};var f=m;function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,b(t).call(this,e))).toggleDetails=function(){n.props.replace&&n.setState(function(e){return{showDetails:!e.showDetails}})},n.state={showDetails:!1},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,u.a.Component),n=t,(o=[{key:"render",value:function(){return u.a.createElement("div",{onClick:this.props.is_footer||!this.props.replace?void 0:this.toggleDetails,className:a()(this.props.className,{"statement__row--detail":this.state.showDetails})},this.state.showDetails?u.a.createElement("div",null,this.props.replace.component?this.props.replace.component:u.a.createElement("p",null,this.props.replace.message)):this.props.cells)}}])&&d(n.prototype,o),r&&d(n,r),t}();h.propTypes={cells:l.a.arrayOf(l.a.node),className:l.a.string,replace:l.a.object};var g=function(e){var t,n,o,r=e.className,c=e.columns,i=e.is_footer,l=e.is_header,s=e.replace,m=e.row_obj,_=void 0===m?{}:m,d=e.to,y=c.map(function(e){var t=e.col_index,n=e.renderCellContent,o=e.title,a=e.key,r=o;if(!l){var c=_[t]||"";r=n?n({cell_value:c,col_index:t,row_obj:_,is_footer:i}):c}return u.a.createElement(f,{col_index:t,key:a||t},r)}),b=a()("table__row",{"table__row-link":d||s},(t={},n="".concat(r,"__row"),o=r,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t));return d?u.a.createElement(p.c,{className:b,to:{pathname:d,state:{from_table_row:!0}}},y):u.a.createElement(h,{className:b,cells:y,replace:s,is_footer:i})};g.propTypes={className:l.a.string,columns:l.a.array,is_footer:l.a.bool,is_header:l.a.bool,replace:l.a.object,row_obj:l.a.object,to:l.a.string};var E=g;function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=k(this,C(t).call(this,e))).state={height:200},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,u.a.PureComponent),n=t,(o=[{key:"componentDidMount",value:function(){this.setState({height:this.el_table_body.clientHeight})}},{key:"componentDidUpdate",value:function(){this.alignHeader()}},{key:"alignHeader",value:function(){if(this.props.data_source.length){var e=this.el_table_body.firstChild,t=this.el_table_head.offsetWidth-e.offsetWidth;this.el_table_head.style.paddingRight="".concat(t,"px")}}},{key:"render",value:function(){var e,t=this,n=this.props,o=n.children,r=n.className,i=n.columns,l=n.data_source,s=n.footer,p=n.getRowAction,m=n.is_empty,f=n.onScroll,_=u.a.createElement(u.a.Fragment,null,l.map(function(e,t){var n=p&&p(e);return u.a.createElement(E,{className:r,row_obj:e,columns:i,key:t,to:"string"==typeof n?n:void 0,replace:"object"===w(n)?n:void 0})}),o);return u.a.createElement("div",{className:a()("table",(e={},O(e,"".concat(r),r),O(e,"".concat(r,"__table"),r),O(e,"".concat(r,"__content"),r),e))},u.a.createElement("div",{className:"table__head",ref:function(e){t.el_table_head=e}},u.a.createElement(E,{className:r,columns:i,is_header:!0})),u.a.createElement("div",{className:"table__body",onScroll:f,ref:function(e){t.el_table_body=e}},m?_:u.a.createElement(c.Scrollbars,{autoHeight:!0,autoHeightMax:this.state.height,autoHide:!0},_)),s&&u.a.createElement("div",{className:"table__foot"},u.a.createElement(E,{className:r,row_obj:s,columns:i,is_footer:!0})))}}])&&j(n.prototype,o),r&&j(n,r),t}();x.propTypes={children:l.a.oneOfType([l.a.node,l.a.arrayOf(l.a.node)]),className:l.a.string,columns:l.a.array,data_source:r.PropTypes.arrayOrObservableArray,footer:l.a.object,getRowAction:l.a.func,onScroll:l.a.func};var T=x;n.d(t,"a",function(){return T})},683:function(e,t,n){"use strict";n.r(t);var o=n(11),a=n(1),r=n.n(a),c=n(0),i=n.n(c),l=n(31),s=n(3),u=n(17),p=n(680),m=n(12),f=n(105),_=n(83),d=n(676),y=n(677),b=n(679),v=n(678),h=n(9);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=O(this,(e=w(t)).call.apply(e,[this].concat(a)))).getRowAction=function(e){return e.is_unsupported?{component:i.a.createElement(m.a,{i18n_default_text:"This trade type is currently not supported on {{website_name}}. Please go to <0>Binary.com</0> for details.",values:{website_name:f.b},components:[i.a.createElement("a",{key:0,className:"link link--orange",rel:"noopener noreferrer",target:"_blank",href:Object(u.urlFor)("user/portfoliows",void 0,void 0,!0)})]})}:Object(_.b)(e.id)},n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,i.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var e=this.props,t=e.active_positions,n=e.component_icon,o=e.is_loading,a=e.error,r=e.is_empty,c=e.currency,l=e.totals;return a?i.a.createElement("p",null,a):i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a,{i18n_heading:Object(s.a)("Open positions"),i18n_message:Object(s.a)("View all active trades on your account that can still incur a profit or a loss.")}),o&&0===t.length||r?i.a.createElement(v.a,{is_loading:o||!t,is_empty:r,empty_message_component:d.a,component_icon:n,localized_message:Object(s.a)("You have no open positions yet.")}):c&&t.length>0&&i.a.createElement(p.a,{className:"open-positions",columns:Object(b.a)(c),footer:l,data_source:t,getRowAction:this.getRowAction},i.a.createElement(v.a,{is_loading:o})))}}])&&E(n.prototype,o),a&&E(n,a),t}();k.propTypes={active_positions:o.PropTypes.arrayOrObservableArray,component_icon:r.a.string,currency:r.a.string,error:r.a.string,history:r.a.object,is_empty:r.a.bool,is_loading:r.a.bool,is_mobile:r.a.bool,is_tablet:r.a.bool,onMount:r.a.func,onUnmount:r.a.func,totals:r.a.object},t.default=Object(h.b)(function(e){var t=e.modules;return{currency:e.client.currency,active_positions:t.portfolio.active_positions,error:t.portfolio.error,is_empty:t.portfolio.is_active_empty,is_loading:t.portfolio.is_loading,onMount:t.portfolio.onMount,onUnmount:t.portfolio.onUnmount,totals:t.portfolio.active_positions_totals}})(Object(l.g)(k))}}]);
//# sourceMappingURL=open_positions.e427952f38d171fe2e9d.js.map