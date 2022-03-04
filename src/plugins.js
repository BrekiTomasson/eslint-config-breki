const isInstalled = require('is-installed')

const plugins = [
  'babel',
  'html',
  'import',
  'json',
  'node',
  'promise',
  'security',
  'unicorn',
]

if (isInstalled.sync('lodash')) plugins.push('you-dont-need-lodash-underscore')

module.exports = plugins
