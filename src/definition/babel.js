module.exports = {
  'babel/camelcase': 'warn',
  'babel/new-cap': 'warn',
  'babel/no-invalid-this': 'warn',
  'babel/no-unused-expressions': [
    'error', {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true
    }
  ],
  'babel/object-curly-spacing': ['error', 'always'],
  'babel/quotes': [
    'warn', 'single', {
      allowTemplateLiterals: true,
      avoidEscape: true
    }
  ],
  'babel/semi': ['error', 'never'],
  'babel/valid-typeof': 'error'
}
