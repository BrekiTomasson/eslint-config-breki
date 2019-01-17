const env = require('./src/env')
const extend = require('./src/extends')
const globals = require('./src/globals')
const parserOptions = require('./src/parserOptions')
const plugins = require('./src/plugins')
const rules = require('./src/rules')

module.exports = {
  env,
  extends: extend,
  globals,
  parser: 'babel-eslint',
  parserOptions,
  plugins,
  rules
}
