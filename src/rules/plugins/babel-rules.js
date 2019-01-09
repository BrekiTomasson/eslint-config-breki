module.exports = {
  'babel/new-cap': 'warn',
  'babel/no-invalid-this': 'warn',
  'babel/object-curly-spacing': [
    'error', 'always', { arraysInObjects: true, objectsInObjects: true }
  ],
  'babel/quotes': [
    'warn',
    'single',
    {
      allowTemplateLiterals: true,
      avoidEscape: true
    }
  ],
  'babel/semi': ['error', 'never'],
  'babel/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true
    }
  ],
  'babel/valid-typeof': 'error',
}
