const env = require('./env')
const extend = require('./extends')
const globals = require('./globals')
const parserOptions = require('./parserOptions')
const plugins = require('./plugins')
const rules = require('./rules')

module.exports = {
  env,
  extends: extend,
  globals,
  parser: 'babel-eslint',
  parserOptions,
  plugins,
  rules
}
