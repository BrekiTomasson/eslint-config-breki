const environment = require('./src/environment')
const globals = require('./src/globals')
const parserOptions = require('./src/parserOptions')
const plugins = require('./src/plugins')
const rules = require('./src/rules')

module.exports = {
  env: environment,
  extends: [],
  globals,
  parser: 'babel-eslint',
  parserOptions,
  plugins,
  rules
}
