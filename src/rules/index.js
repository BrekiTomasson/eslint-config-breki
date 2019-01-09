/** Basic rules from Eslint standard format. */
const ruleset = require('./base/ruleset')
const env = require('./base/env')
const globals = require('./base/globals')
const overrides = require('./base/overrides')
const parserOptions = require('./base/parser-options.js')
const plugins = require('./base/plugins')

/** Rules from external plugins */
const arrayFuncRules = require('./plugins/array-func-rules')
const babelRules = require('./plugins/babel-rules')
const esRules = require('./plugins/es-rules')
const filenamesRules = require('./plugins/filenames-rules')
const htmlRules = require('./plugins/html-rules')
const importRulesRules = require('./plugins/import-rules')
const jestRules = require('./plugins/jest-rules')
const jsonRules = require('./plugins/json-rules')
const nodeRules = require('./plugins/node-rules')
const ocdRules = require('./plugins/ocd-rules')
const promiseRules = require('./plugins/promise-rules')
const securityRules = require('./plugins/security-rules')
const standardRules = require('./plugins/standard-rules')
const unicornRules = require('./plugins/unicorn-rules')
const vueRules = require('./plugins/vue-rules')
const ydnluRules = require('./plugins/ydnlu-rules')
const ydnmRules = require('./plugins/ydnm-rules')

const rules = Object.assign(ruleset, arrayFuncRules, babelRules, esRules, filenamesRules, htmlRules, importRulesRules, jestRules, jsonRules, nodeRules, ocdRules, promiseRules, securityRules, standardRules, unicornRules, vueRules, ydnluRules, ydnmRules)

module.exports = {
  env,
  extends: [],
  globals,
  overrides,
  parser: 'babel-eslint',
  parserOptions,
  plugins,
  rules
}
