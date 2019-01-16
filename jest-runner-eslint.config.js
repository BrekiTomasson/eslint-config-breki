const join = require('path').join
const rootDir = join(__dirname, './')

module.exports = {
  cliOptions: {
    cache: true,
    cacheLocation: '.eslintcache',
    config: `${rootDir}/.eslintrc.js`,
    fix: true,
    ignorePattern: ['node_modules']
  }
}
