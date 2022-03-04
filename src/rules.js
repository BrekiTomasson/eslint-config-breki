const resolve = require('path').resolve
const importModules = require('import-modules')
const isInstalled = require('is-installed')

const ruleCollection = importModules(resolve(__dirname, './definition/'), { camelize: false })
const rules = {}

if (!isInstalled.sync('lodash')) {
  delete ruleCollection['you-dont-need-lodash-underscore']
}

Object.keys(ruleCollection)
  // eslint-disable-next-line security/detect-object-injection
  .filter(ruleset => Object.assign(rules, ruleCollection[ruleset]))

module.exports = rules
