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

if (isInstalled.sync('jest')) plugins.push('jest')

if (isInstalled.sync('lodash')) plugins.push('you-dont-need-lodash-underscore')

if (isInstalled.sync('momentjs')) plugins.push('you-dont-need-momentjs')

module.exports = plugins
