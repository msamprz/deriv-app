(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["open_positions"],{

/***/ "./src/javascript/app/Modules/Reports/Containers/open-positions.jsx":
/*!**************************************************************************!*\
  !*** ./src/javascript/app/Modules/Reports/Containers/open-positions.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _url = __webpack_require__(/*! ../../../../_common/url */ "./src/javascript/_common/url.js");

var _DataTable = __webpack_require__(/*! ../../../App/Components/Elements/DataTable */ "./src/javascript/app/App/Components/Elements/DataTable/index.js");

var _DataTable2 = _interopRequireDefault(_DataTable);

var _localize2 = __webpack_require__(/*! ../../../App/Components/Elements/localize.jsx */ "./src/javascript/app/App/Components/Elements/localize.jsx");

var _localize3 = _interopRequireDefault(_localize2);

var _appConfig = __webpack_require__(/*! ../../../App/Constants/app-config */ "./src/javascript/app/App/Constants/app-config.js");

var _helpers = __webpack_require__(/*! ../../../App/Components/Routes/helpers */ "./src/javascript/app/App/Components/Routes/helpers.js");

var _emptyTradeHistoryMessage = __webpack_require__(/*! ../Components/empty-trade-history-message.jsx */ "./src/javascript/app/Modules/Reports/Components/empty-trade-history-message.jsx");

var _emptyTradeHistoryMessage2 = _interopRequireDefault(_emptyTradeHistoryMessage);

var _reportsMeta = __webpack_require__(/*! ../Components/reports-meta.jsx */ "./src/javascript/app/Modules/Reports/Components/reports-meta.jsx");

var _dataTableConstants = __webpack_require__(/*! ../Constants/data-table-constants */ "./src/javascript/app/Modules/Reports/Constants/data-table-constants.js");

var _placeholderComponent = __webpack_require__(/*! ../Components/placeholder-component.jsx */ "./src/javascript/app/Modules/Reports/Components/placeholder-component.jsx");

var _placeholderComponent2 = _interopRequireDefault(_placeholderComponent);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app/Stores/connect.js");

var _Constants = __webpack_require__(/*! ../../../Constants */ "./src/javascript/app/Constants/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenPositions = function (_React$Component) {
    _inherits(OpenPositions, _React$Component);

    function OpenPositions() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, OpenPositions);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OpenPositions.__proto__ || Object.getPrototypeOf(OpenPositions)).call.apply(_ref, [this].concat(args))), _this), _this.getRowAction = function (row_obj) {
            return (0, _Constants.getUnsupportedContracts)()[row_obj.type] ? {
                component: _react2.default.createElement(_localize3.default, {
                    str: 'This trade type is currently not supported on [_1]. Please go to [_2]Binary.com[_3] for details.',
                    replacers: {
                        '1': _appConfig.website_domain,
                        '2_3': _react2.default.createElement('a', { className: 'link link--orange', rel: 'noopener noreferrer', target: '_blank', href: (0, _url.urlFor)('user/portfoliows', undefined, undefined, true) })
                    }
                })
            } : (0, _helpers.getContractPath)(row_obj.id);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OpenPositions, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.onMount();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.onUnmount();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                active_positions = _props.active_positions,
                component_icon = _props.component_icon,
                is_loading = _props.is_loading,
                error = _props.error,
                is_empty = _props.is_empty,
                currency = _props.currency,
                totals = _props.totals;


            if (error) {
                return _react2.default.createElement(
                    'p',
                    null,
                    error
                );
            }

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(_reportsMeta.ReportsMeta, {
                    i18n_heading: (0, _localize.localize)('Open positions'),
                    i18n_message: (0, _localize.localize)('View all active trades on your account that can still incur a profit or a loss.')
                }),
                is_loading && active_positions.length === 0 || is_empty ? _react2.default.createElement(_placeholderComponent2.default, {
                    is_loading: is_loading || !active_positions,
                    is_empty: is_empty,
                    empty_message_component: _emptyTradeHistoryMessage2.default,
                    component_icon: component_icon,
                    localized_message: (0, _localize.localize)('You have no open positions yet.')
                }) : currency && active_positions.length > 0 && _react2.default.createElement(
                    _DataTable2.default,
                    {
                        className: 'open-positions',
                        columns: (0, _dataTableConstants.getOpenPositionsColumnsTemplate)(currency),
                        footer: totals,
                        data_source: active_positions,
                        getRowAction: this.getRowAction
                    },
                    _react2.default.createElement(_placeholderComponent2.default, {
                        is_loading: is_loading
                    })
                )
            );
        }
    }]);

    return OpenPositions;
}(_react2.default.Component);

OpenPositions.propTypes = {
    active_positions: _mobxReact.PropTypes.arrayOrObservableArray,
    component_icon: _propTypes2.default.func,
    currency: _propTypes2.default.string,
    error: _propTypes2.default.string,
    history: _propTypes2.default.object,
    is_empty: _propTypes2.default.bool,
    is_loading: _propTypes2.default.bool,
    is_mobile: _propTypes2.default.bool,
    is_tablet: _propTypes2.default.bool,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func,
    totals: _propTypes2.default.object
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var modules = _ref2.modules,
        client = _ref2.client;
    return {
        currency: client.currency,
        active_positions: modules.portfolio.active_positions,
        error: modules.portfolio.error,
        is_empty: modules.portfolio.is_active_empty,
        is_loading: modules.portfolio.is_loading,
        onMount: modules.portfolio.onMount,
        onUnmount: modules.portfolio.onUnmount,
        totals: modules.portfolio.active_positions_totals
    };
})((0, _reactRouterDom.withRouter)(OpenPositions));

/***/ })

}]);