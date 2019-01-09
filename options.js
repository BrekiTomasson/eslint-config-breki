const eslint = require('eslint')
const config = require('./dist/config')
const join = require('path').join
const pkg = require('./package.json')

const configFile = join(__dirname, './.eslintrc.js')

module.exports = {
  bugs         : pkg.bugs.url,
  cmd          : 'lint',
  eslint,
  eslintConfig : {
    cache   : true,
    configFile,
    fix     : false,
    plugins : config.plugins
  },
  homepage : pkg.homepage,
  tagline  : 'Honesty in small things is not a small thing.',
  version  : pkg.version
}
