var React = require('react')
var PropTypes = require('prop-types')
var jsdiff = require('diff')

var fnMap = {
  'chars': jsdiff.diffChars,
  'words': jsdiff.diffWords,
  'sentences': jsdiff.diffSentences,
  'json': jsdiff.diffJson
}

class ReactDiff extends React.Component {
  render () {
    var diff = fnMap[this.props.type](this.props.inputA, this.props.inputB)
    var result = diff.map(function (part, index) {
      var spanStyle = {
        backgroundColor: part.added ? 'lightgreen' : part.removed ? 'salmon' : 'lightgrey'
      }
      return (
        <span key={index} style={spanStyle}>{part.value}</span>
      )
    })
    return (
      <pre className='diff-result'>
        {result}
      </pre>
    )
  }
}

ReactDiff.propTypes = {
  inputA: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  inputB: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  type: PropTypes.oneOf([
    'chars',
    'words',
    'sentences',
    'json'
  ])
}

ReactDiff.defaultProps = {
  inputA: '',
  inputB: '',
  type: 'chars'
}

module.exports = ReactDiff
