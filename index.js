const environment = require('./src/environment')
const globals = require('./src/globals')
const parserOptions = require('./src/parser-options')
const plugins = require('./src/plugins')
const rules = require('./src/rules')
const settings = require('./src/settings')

/**
 * This file returns the configuration for all the eslint plugins.
 *
 * TODO (2021-02-01) Wrap this up in something more than just an Eslint config file, maybe?
 */

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
