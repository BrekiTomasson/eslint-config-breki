const environment = require('./src/environment')
const globals = require('./src/globals')
const parserOptions = require('./src/parser-options')
const plugins = require('./src/plugins')
const rules = require('./src/rules')
const settings = require('./src/settings')

module.exports = {
  env: environment,
  extends: [],
  globals,
  parser: '@babel/eslint-parser',
  parserOptions,
  plugins,
  rules,
  settings
}
