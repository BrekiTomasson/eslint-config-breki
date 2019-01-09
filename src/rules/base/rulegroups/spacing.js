module.exports = {
  'array-bracket-spacing': ['error', 'never'],
  'arrow-spacing': ['error', { after: true, before: true }],
  'block-spacing': ['error', 'always'],
  'comma-spacing': ['error', { after: true, before: false }],
  'computed-property-spacing': ['error', 'never'],
  'func-call-spacing': ['error', 'never'],
  'generator-star-spacing': ['error', { after: true, before: true }],
  'key-spacing': ['error', { align: true, afterColon: true, beforeColon: false }],
  'keyword-spacing': ['error', { after: true, before: true }],
  'no-irregular-whitespace': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-spaces': ['warn', {
    ignoreEOLComments: true, exceptions: {
      Property: true,
      BinaryExpression: false,
      VariableDeclarator: false,
      ImportDeclaration: true
    }
  }],
  'no-regex-spaces': 'error',
  'no-trailing-spaces': 'error',
  'no-whitespace-before-property': 'error',
  'space-before-blocks': ['error', 'always'],
  'space-before-function-paren': ['error', 'always'],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': ['error', { "int32Hint": false }],
  'space-unary-ops': ['error', { nonwords: false, words: true }],
  'spaced-comment': ['error', 'always', {
    block: {
      balanced: true,
      exceptions: ['*', '-', '+', '='],
      markers: ['*package', '!', ',', ':', '::']
    },
    line: {
      markers: ['*package', '!', '/', ',', '=']
    }
  }],
  'template-curly-spacing': ['error', 'never'],
  'template-tag-spacing': ["error", "always"],
  'yield-star-spacing': ['error', 'both'],
}
