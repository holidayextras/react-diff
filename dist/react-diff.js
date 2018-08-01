'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _diff = require('diff');

var _diff2 = _interopRequireDefault(_diff);

var fnMap = {
  'chars': _diff2['default'].diffChars,
  'words': _diff2['default'].diffWords,
  'sentences': _diff2['default'].diffSentences,
  'json': _diff2['default'].diffJson
};

var ReactDiff = (function (_React$Component) {
  _inherits(ReactDiff, _React$Component);

  function ReactDiff() {
    _classCallCheck(this, ReactDiff);

    _get(Object.getPrototypeOf(ReactDiff.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ReactDiff, [{
    key: 'render',
    value: function render() {
      var diff = fnMap[this.props.type](this.props.inputA, this.props.inputB);
      var result = diff.map(function (part, index) {
        var spanClass = part.added ? 'added' : part.removed ? 'removed' : 'same';
        spanClass += part.added && part.value === '\n' ? ' blankLine' : '';
        return _react2['default'].createElement(
          'span',
          { key: index, className: spanClass },
          part.value
        );
      });
      return _react2['default'].createElement(
        'pre',
        { className: 'diff-result' },
        result
      );
    }
  }]);

  return ReactDiff;
})(_react2['default'].Component);

ReactDiff.propTypes = {
  inputA: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
  inputB: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
  type: _propTypes2['default'].oneOf(['chars', 'words', 'sentences', 'json'])
};

ReactDiff.defaultProps = {
  inputA: '',
  inputB: '',
  type: 'chars'
};

exports['default'] = ReactDiff;
module.exports = exports['default'];