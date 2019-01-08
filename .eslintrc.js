const path = require('path')

module.exports = {
  root: true,
  extends: [
    "./.eslintrc.baseConfig.js",
    path.join(__dirname, './src/rules/index.js')
  ]
}
