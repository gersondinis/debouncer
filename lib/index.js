"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.debounce = exports.debouncer = exports.Debouncer = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Debouncer = function Debouncer() {
  var _this = this;

  var DEFAULT_DELAY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.DEFAULT_DELAY;

  _classCallCheck(this, Debouncer);

  _defineProperty(this, "DEFAULT_IDENTIFIER", 'DEFAULT');

  _defineProperty(this, "DEFAULT_DELAY", 250);

  _defineProperty(this, "TIMEOUT_IDS", _defineProperty({}, this.DEFAULT_IDENTIFIER, 0));

  _defineProperty(this, "debounce", function (fn) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.DEFAULT_DELAY;
    var identifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.DEFAULT_IDENTIFIER;

    if (_this.TIMEOUT_IDS.hasOwnProperty(identifier)) {
      clearTimeout(_this.TIMEOUT_IDS[identifier]);
    }

    if (delay) {
      _this.TIMEOUT_IDS[identifier] = setTimeout(fn, delay);
    } else {
      fn();
    }

    return _this;
  });

  _defineProperty(this, "clear", function () {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.TIMEOUT_IDS[_this.DEFAULT_IDENTIFIER];
    clearTimeout(id);
    return _this;
  });

  _defineProperty(this, "clearAll", function () {
    Object.values(_this.TIMEOUT_IDS).forEach(clearTimeout);
    return _this;
  });

  _defineProperty(this, "getAll", function () {
    return _objectSpread({}, _this.TIMEOUT_IDS);
  });

  _defineProperty(this, "setDefaultDelay", function (delay) {
    _this.DEFAULT_DELAY = delay;
    return _this;
  });

  this.DEFAULT_DELAY = DEFAULT_DELAY;
};

exports.Debouncer = Debouncer;
var debouncer = new Debouncer();
exports.debouncer = debouncer;
var debounce = debouncer.debounce;
exports.debounce = debounce;
var _default = debounce;
exports["default"] = _default;