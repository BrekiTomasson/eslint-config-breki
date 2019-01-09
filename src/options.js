const eslint = require('eslint')
const pkg = require('../package.json')
const path = require('path')

module.exports = {
  bugs: pkg.bugs.url,
  cmd: 'lint',
  eslint,
  eslintConfig: { configFile: path.join(__dirname, '../.eslintrc.js') },
  homepage: pkg.homepage,
  tagline: 'Honesty in small things is not a small thing.',
  version: pkg.version
}
