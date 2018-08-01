'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');
var jsdiff = require('diff');

var fnMap = {
  'chars': jsdiff.diffChars,
  'words': jsdiff.diffWords,
  'sentences': jsdiff.diffSentences,
  'json': jsdiff.diffJson
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
        var spanStyle = {
          backgroundColor: part.added ? 'lightgreen' : part.removed ? 'salmon' : 'lightgrey'
        };
        return React.createElement(
          'span',
          { key: index, style: spanStyle },
          part.value
        );
      });
      return React.createElement(
        'pre',
        { className: 'diff-result' },
        result
      );
    }
  }]);

  return ReactDiff;
})(React.Component);

ReactDiff.propTypes = {
  inputA: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  inputB: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.oneOf(['chars', 'words', 'sentences', 'json'])
};

ReactDiff.defaultProps = {
  inputA: '',
  inputB: '',
  type: 'chars'
};

module.exports = ReactDiff;