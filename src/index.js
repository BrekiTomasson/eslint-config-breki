const env = require('./output/env')
const extend = require('./output/extends')
const globals = require('./output/globals')
const overrides = require('./output/overrides')
const parserOptions = require('./output/parserOptions')
const plugins = require('./output/plugins')
const rules = require('./output/rules/core')

module.exports = {
  env,
  extends: extend,
  globals,
  overrides,
  parser: 'babel-eslint',
  parserOptions,
  plugins,
  rules
}
