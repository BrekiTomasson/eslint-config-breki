const eslint = require('eslint')
const pkg = require('../package.json')
const path = require('path')

module.exports = {
  cmd: 'lint',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Honesty in small things is not a small thing.',
  eslintConfig: {configFile: path.join(__dirname, '../.eslintrc.js')},
  eslint
}
