module.exports = [
  {
    files: [
      'dist/**/*.js',
      'src/**/*.js',
      'test/**/*.js'
    ],
    rules: {

      // The following are overridden in babel-rules.js:

      'new-cap': 'off',
      'no-invalid-this': 'off',
      'no-unused-expressions': 'off',
      'object-curly-spacing': 'off',
      quotes: 'off',
      semi: 'off',
      'valid-typeof': 'off',
      camelcase: 'off',
    }
  }
]
