const path = require('path')

module.exports = {
  root: true,
  extends: [
    './.eslintrc.baseConfig.js',
    './dist/output/index.js'
  ]
}
