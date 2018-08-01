import React from 'react'
import PropTypes from 'prop-types'
import jsdiff from 'diff'

const fnMap = {
  'chars': jsdiff.diffChars,
  'words': jsdiff.diffWords,
  'sentences': jsdiff.diffSentences,
  'json': jsdiff.diffJson
}

class ReactDiff extends React.Component {
  render () {
    const diff = fnMap[this.props.type](this.props.inputA, this.props.inputB)
    const result = diff.map(function (part, index) {
      let spanClass = part.added ? 'added' : part.removed ? 'removed' : 'same'
      spanClass += part.added && part.value === '\n' ? ' blankLine' : ''
      return (
        <span key={index} className={spanClass}>{part.value}</span>
      )
    })
    return (
      <pre className='diff-result'>{result}</pre>
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

export default ReactDiff
