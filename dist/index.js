"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Simple Pagination
 * @props page - current page number
 * @props total - number of rows in total
 * @props limit - limit of rows per page
 * @props changePage - trigger the page that has to be called
 *
 * @author Wellington Viveiro <wviveiro@gmail.com>
 **/
var Pagination = function Pagination(props) {
  var page = props.page,
      total = props.total,
      limit = props.limit,
      disabled = props.disabled,
      changePage = props.changePage;
  var total_pages = Math.ceil(total / limit);
  return _react.default.createElement("div", {
    className: "simple-pagination".concat(props.className ? " ".concat(props.className) : '')
  }, _react.default.createElement("button", {
    disabled: disabled || page === 1,
    className: "btn-edge",
    onClick: function onClick() {
      return changePage(page - 1);
    }
  }, "Previous"), Array(total_pages).fill().map(function (_, i) {
    var num = i + 1;
    return _react.default.createElement("button", {
      key: num,
      className: "btn-number".concat(num === page ? ' active' : ''),
      disabled: disabled,
      onClick: function onClick() {
        return changePage(num);
      }
    }, num);
  }), _react.default.createElement("button", {
    disabled: disabled || page === total_pages,
    className: "btn-edge",
    onClick: function onClick() {
      return changePage(page + 1);
    }
  }, "Next"));
};

var _default = Pagination;
exports.default = _default;