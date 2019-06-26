(window.webpackJsonp=window.webpackJsonp||[]).push([["profit_table"],{675:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){var t={category:"",underlying:""},n=new RegExp("^([A-Z]+)_((OTC_[A-Z0-9]+)|R_[\\d]{2,3}|[A-Z]+)_").exec(e.shortcode);return null!==n&&(t.category=n[1].toLowerCase(),t.underlying=n[2]),t}},676:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(0),c=n.n(o),i=n(8),l=function(e){var t=e.has_selected_date,n=e.component_icon,a=e.localized_message,r=e.localized_period_message;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"empty-trade-history"},c.a.createElement(i.a,{icon:n,className:"empty-trade-history__icon"}),c.a.createElement("span",{className:"empty-trade-history__text"},t?r:a)))};l.propTypes={component_icon:r.a.string,has_selected_date:r.a.bool,localized_message:r.a.string,localized_period_message:r.a.string},t.a=l},677:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a),o=function(e){var t=e.i18n_heading,n=e.i18n_message;return r.a.createElement("div",{className:"reports__meta"},r.a.createElement("div",{className:"reports__meta-description"},r.a.createElement("h1",{className:"reports__meta-description--heading"},t),r.a.createElement("p",{className:"reports__meta-description--paragraph"},n)))}},678:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(0),c=n.n(o),i=n(164),l=function(e){var t=e.empty_message_component;return c.a.createElement(c.a.Fragment,null,e.is_empty&&c.a.createElement(t,{component_icon:e.component_icon,has_selected_date:e.has_selected_date,localized_message:e.localized_message}),e.is_loading&&c.a.createElement(i.a,null))};l.propTypes={component_icon:r.a.string,empty_message_component:r.a.func,has_selected_date:r.a.bool,localized_message:r.a.string},t.a=l},679:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(3),c=n(4),i=n.n(c),l=n(1),s=n.n(l);var u=["default","success","warn","danger","info"],p=function(e){var t,n,a,o=e.mode,c=e.children,l=u.some(function(e){return e===o})?o:"default";return r.a.createElement("span",{className:i()("label",(t={},n="label--".concat(l),a=l,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t))},c)};p.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),mode:s.a.oneOf(u)};var f=p,m=n(29),d=n(161),_=n(163),y=n(9),b=function(e){var t=e.id,n=e.is_loading,a=e.getPositionById,o=e.server_time,c=a(t);if(!c)return r.a.createElement("div",null);var i=c.contract_info,l=Object(d.d)(o,i.purchase_time,i.date_expiry);return r.a.createElement(_.a,{is_loading:n,remaining_time:i.date_expiry,percentage:l,has_result:!1,current_tick:c.current_tick,ticks_count:i.ticks_count})};b.propTypes={getPositionById:s.a.func,id:s.a.oneOfType([s.a.number,s.a.string]),is_loading:s.a.bool,server_time:s.a.object};var v=Object(y.b)(function(e){var t=e.modules,n=e.common;return{is_loading:t.portfolio.is_loading,server_time:n.server_time,getPositionById:t.portfolio.getPositionById}})(b),h=function(e){return+e.replace(/,/g,"")>=0?"profit":"loss"},g=function(e){var t=e.amount,n=e.currency,a=e.status,c=a?"indicative--".concat(a):void 0;return r.a.createElement("div",{className:c},r.a.createElement(m.a,{amount:t,currency:n}),"no-resale"===a&&r.a.createElement("div",{className:"indicative__no-resale-msg"},Object(o.a)("Resale not offered")))};g.propTypes={amount:s.a.number,currency:s.a.string,status:s.a.string};var O=g,E=n(162),j=n(8),w=n(675),C=function(e){var t=e.payload,n=e.show_description,a="string"==typeof t.shortcode,o=Object(w.a)(t);return a&&o?r.a.createElement("div",{className:"market-symbol-icon"},r.a.createElement("div",{className:"market-symbol-icon-name"},r.a.createElement(E.a,{market:o.underlying}),n&&t.display_name),r.a.createElement("div",{className:"market-symbol-icon-category"},r.a.createElement(j.a,{icon:"IconTradeType",type:o.category}),n&&o.category)):["deposit","withdrawal"].includes(t.action_type)?r.a.createElement("div",{className:"market-symbol-icon"},"deposit"===t.action_type?r.a.createElement(j.a,{icon:"IconDeposit"}):r.a.createElement(j.a,{icon:"IconWithdrawal"})):r.a.createElement("svg",{width:"32",height:"32",className:"unknown-icon"},r.a.createElement("rect",{width:"32",height:"32"}))};C.propTypes={action:s.a.string,payload:s.a.object,show_description:s.a.bool};var k=C,N=function(e){var t=e.value,n=e.children,a=h(t);return r.a.createElement("span",{className:"amount--".concat(a)},n)};N.propTypes={value:s.a.string};var x=N;n.d(t,"c",function(){return T}),n.d(t,"b",function(){return S}),n.d(t,"a",function(){return P});var T=function(e){return[{key:"icon",title:"",col_index:"action_type",renderCellContent:function(e){var t=e.cell_value,n=e.row_obj;return r.a.createElement(k,{action:t,key:n.transaction_id,payload:n})}},{title:Object(o.a)("Ref. ID"),col_index:"refid"},{title:Object(o.a)("Transaction time"),col_index:"date"},{key:"mode",title:Object(o.a)("Transaction"),col_index:"action_type",renderCellContent:function(e){var t,n,a=e.cell_value,o=e.row_obj;return r.a.createElement(f,{mode:(t=a,n={deposit:"warn",withdrawal:"info",sell:"danger",buy:"success",default:"default"},Object.keys(n).find(function(e){return e===t})?n[t]:n.default)},o.action)}},{title:Object(o.a)("Credit/Debit"),col_index:"amount",renderCellContent:function(t){var n=t.cell_value;return r.a.createElement("div",{className:"amount--".concat(h(n))},r.a.createElement(m.a,{has_sign:!0,amount:n.replace(/[,]+/g,""),currency:e}))}},{title:Object(o.a)("Balance"),col_index:"balance",renderCellContent:function(t){var n=t.cell_value;return r.a.createElement(m.a,{amount:n.replace(/[,]+/g,""),currency:e})}}]},S=function(e){return[{key:"icon",title:"",col_index:"action_type",renderCellContent:function(e){var t=e.cell_value,n=e.row_obj;return e.is_footer?Object(o.a)("Total profit/loss"):r.a.createElement(k,{action:t,key:n.transaction_id,payload:n})}},{title:Object(o.a)("Ref. ID"),col_index:"transaction_id"},{title:Object(o.a)("Buy time"),col_index:"purchase_time"},{title:Object(o.a)("Buy price"),col_index:"buy_price",renderCellContent:function(t){var n=t.cell_value;return t.is_footer?"":r.a.createElement(m.a,{amount:n,currency:e})}},{title:Object(o.a)("Sell time"),col_index:"sell_time"},{title:Object(o.a)("Sell price"),col_index:"sell_price",renderCellContent:function(t){var n=t.cell_value;return t.is_footer?"":r.a.createElement(m.a,{amount:n,currency:e})}},{title:Object(o.a)("Profit/Loss"),col_index:"profit_loss",renderCellContent:function(t){var n=t.cell_value;return r.a.createElement(x,{value:n},r.a.createElement(m.a,{has_sign:!0,amount:n.replace(/[,]+/g,""),currency:e}))}}]},P=function(e){return[{title:"",col_index:"type",renderCellContent:function(e){var t=e.cell_value,n=e.row_obj;return e.is_footer?Object(o.a)("Total"):r.a.createElement(k,{action:t,key:n.id,payload:n.contract_info})}},{title:Object(o.a)("Ref. ID"),col_index:"reference"},{title:Object(o.a)("Buy price"),col_index:"purchase",renderCellContent:function(t){var n=t.cell_value;return r.a.createElement(m.a,{amount:n,currency:e})}},{title:Object(o.a)("Potential payout"),col_index:"payout",renderCellContent:function(t){var n=t.cell_value;return n?r.a.createElement(m.a,{amount:n,currency:e}):r.a.createElement("span",null,"-")}},{title:Object(o.a)("Indicative price"),col_index:"indicative",renderCellContent:function(t){var n=t.cell_value,a=t.row_obj;return r.a.createElement(O,{amount:+n,currency:e,status:a.status})}},{title:Object(o.a)("Remaining time"),col_index:"id",renderCellContent:function(e){var t=e.cell_value;return r.a.createElement(v,{id:t})}}]}},680:function(e,t,n){"use strict";var a=n(4),r=n.n(a),o=n(11),c=n(70),i=n(1),l=n.n(i),s=n(0),u=n.n(s),p=n(37),f=function(e){var t=e.col_index,n=e.children;return u.a.createElement("div",{className:r()("table__cell",t)},n)};f.propTypes={children:l.a.oneOfType([l.a.node,l.a.string]),col_index:l.a.string};var m=f;function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,b(t).call(this,e))).toggleDetails=function(){n.props.replace&&n.setState(function(e){return{showDetails:!e.showDetails}})},n.state={showDetails:!1},n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,u.a.Component),n=t,(a=[{key:"render",value:function(){return u.a.createElement("div",{onClick:this.props.is_footer||!this.props.replace?void 0:this.toggleDetails,className:r()(this.props.className,{"statement__row--detail":this.state.showDetails})},this.state.showDetails?u.a.createElement("div",null,this.props.replace.component?this.props.replace.component:u.a.createElement("p",null,this.props.replace.message)):this.props.cells)}}])&&_(n.prototype,a),o&&_(n,o),t}();h.propTypes={cells:l.a.arrayOf(l.a.node),className:l.a.string,replace:l.a.object};var g=function(e){var t,n,a,o=e.className,c=e.columns,i=e.is_footer,l=e.is_header,s=e.replace,f=e.row_obj,d=void 0===f?{}:f,_=e.to,y=c.map(function(e){var t=e.col_index,n=e.renderCellContent,a=e.title,r=e.key,o=a;if(!l){var c=d[t]||"";o=n?n({cell_value:c,col_index:t,row_obj:d,is_footer:i}):c}return u.a.createElement(m,{col_index:t,key:r||t},o)}),b=r()("table__row",{"table__row-link":_||s},(t={},n="".concat(o,"__row"),a=o,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t));return _?u.a.createElement(p.c,{className:b,to:{pathname:_,state:{from_table_row:!0}}},y):u.a.createElement(h,{className:b,cells:y,replace:s,is_footer:i})};g.propTypes={className:l.a.string,columns:l.a.array,is_footer:l.a.bool,is_header:l.a.bool,replace:l.a.object,row_obj:l.a.object,to:l.a.string};var O=g;function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=C(this,k(t).call(this,e))).state={height:200},n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,u.a.PureComponent),n=t,(a=[{key:"componentDidMount",value:function(){this.setState({height:this.el_table_body.clientHeight})}},{key:"componentDidUpdate",value:function(){this.alignHeader()}},{key:"alignHeader",value:function(){if(this.props.data_source.length){var e=this.el_table_body.firstChild,t=this.el_table_head.offsetWidth-e.offsetWidth;this.el_table_head.style.paddingRight="".concat(t,"px")}}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.children,o=n.className,i=n.columns,l=n.data_source,s=n.footer,p=n.getRowAction,f=n.is_empty,m=n.onScroll,d=u.a.createElement(u.a.Fragment,null,l.map(function(e,t){var n=p&&p(e);return u.a.createElement(O,{className:o,row_obj:e,columns:i,key:t,to:"string"==typeof n?n:void 0,replace:"object"===j(n)?n:void 0})}),a);return u.a.createElement("div",{className:r()("table",(e={},E(e,"".concat(o),o),E(e,"".concat(o,"__table"),o),E(e,"".concat(o,"__content"),o),e))},u.a.createElement("div",{className:"table__head",ref:function(e){t.el_table_head=e}},u.a.createElement(O,{className:o,columns:i,is_header:!0})),u.a.createElement("div",{className:"table__body",onScroll:m,ref:function(e){t.el_table_body=e}},f?d:u.a.createElement(c.Scrollbars,{autoHeight:!0,autoHeightMax:this.state.height,autoHide:!0},d)),s&&u.a.createElement("div",{className:"table__foot"},u.a.createElement(O,{className:o,row_obj:s,columns:i,is_footer:!0})))}}])&&w(n.prototype,a),o&&w(n,o),t}();x.propTypes={children:l.a.oneOfType([l.a.node,l.a.arrayOf(l.a.node)]),className:l.a.string,columns:l.a.array,data_source:o.PropTypes.arrayOrObservableArray,footer:l.a.object,getRowAction:l.a.func,onScroll:l.a.func};var T=x;n.d(t,"a",function(){return T})},684:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(11),c=n(0),i=n.n(c),l=n(31),s=n(3),u=n(17),p=n(105),f=n(680),m=n(12),d=n(83),_=n(35),y=n(9),b=n(676),v=n(678),h=n(677),g=n(679),O=n(675);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=w(this,(e=C(t)).call.apply(e,[this].concat(r)))).getRowAction=function(e){return Object(_.a)()[Object(O.a)(e).category.toUpperCase()]?Object(d.b)(e.contract_id):{component:i.a.createElement(m.a,{i18n_default_text:"This trade type is currently not supported on {{website_name}}. Please go to <0>Binary.com</0> for details.",values:{website_name:p.b},components:[i.a.createElement("a",{key:0,className:"link link--orange",rel:"noopener noreferrer",target:"_blank",href:Object(u.urlFor)("user/profit_tablews",void 0,void 0,!0)})]})}},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,i.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var e=this.props,t=e.component_icon,n=e.currency,a=e.data,r=e.is_empty,o=e.is_loading,c=e.error,l=e.handleScroll,u=e.has_selected_date,p=e.totals;if(c)return i.a.createElement("p",null,c);var m=Object(g.b)(n);return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{i18n_heading:Object(s.a)("Profit table"),i18n_message:Object(s.a)("View all trades purchased on your account, and a summary of your total profit/loss.")}),o&&0===a.length||r?i.a.createElement(v.a,{is_loading:o,has_selected_date:u,is_empty:r,empty_message_component:b.a,component_icon:t,localized_message:Object(s.a)("You have no trading activity yet."),localized_period_message:Object(s.a)("You have no trading activity for this period.")}):i.a.createElement(f.a,{className:"profit-table",data_source:a,columns:m,onScroll:l,footer:p,is_empty:r,getRowAction:this.getRowAction},i.a.createElement(v.a,{is_loading:o})))}}])&&j(n.prototype,a),r&&j(n,r),t}();N.propTypes={component_icon:r.a.string,currency:r.a.string,data:o.PropTypes.arrayOrObservableArray,error:r.a.string,handleScroll:r.a.func,has_selected_date:r.a.bool,history:r.a.object,is_empty:r.a.bool,is_loading:r.a.bool,onMount:r.a.func,onUnmount:r.a.func,totals:r.a.object},t.default=Object(y.b)(function(e){var t=e.modules;return{currency:e.client.currency,data:t.profit_table.data,error:t.profit_table.error,handleScroll:t.profit_table.handleScroll,has_selected_date:t.profit_table.has_selected_date,is_empty:t.profit_table.is_empty,is_loading:t.profit_table.is_loading,onMount:t.profit_table.onMount,onUnmount:t.profit_table.onUnmount,totals:t.profit_table.totals}})(Object(l.g)(N))}}]);
//# sourceMappingURL=profit_table.69f9026720217807d401.js.map