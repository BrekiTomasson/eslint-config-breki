const eslint = require('eslint')
const plugins = require('./dist/js/plugins').plugins
const join = require('path').join
const pkg = require('./package.json')

const configFile = join(__dirname, './.eslintrc.js')

module.exports = {
  bugs         : pkg.bugs.url,
  cmd          : 'lint',
  eslint,
  cwd          : '',
  eslintConfig : {
    cache       : true,
    configFile,
    fix         : true,
    plugins,
    useEslintrc : true
  },
  homepage : pkg.homepage,
  tagline  : 'Honesty in small things is not a small thing.',
  version  : pkg.version
}
