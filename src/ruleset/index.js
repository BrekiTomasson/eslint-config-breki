const env = require('./env')
const xtends = require('./extends')
const globals = require('./globals')
const parserOptions = require('./parserOptions')
const plugins = require('./plugins')
const rules = require('./rules')

module.exports = {
  env,
  extends: xtends,
  globals,
  parserOptions,
  plugins,
  rules,
  parser: 'babel-eslint'
}
