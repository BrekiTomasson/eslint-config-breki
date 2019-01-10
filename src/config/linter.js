const eslint = require('eslint')
const join = require('path').join
const pkg = require('../../package.json')
const plugins = require('./plugins')
const configFile = join(__dirname, '../../.eslintrc.js')

module.exports = {
  bugs: pkg.bugs.url,
  cmd: 'lint',
  cwd: '',
  eslint,
  eslintConfig: {
    cache: true,
    configFile,
    fix: false,
    plugins
  },
  homepage: pkg.homepage,
  tagline: 'Honesty in small things is not a small thing.',
  version: pkg.version
}
