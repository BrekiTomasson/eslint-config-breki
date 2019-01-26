const resolve = require('path').resolve
const importModules = require('import-modules')

module.exports = {
  rules: importModules(resolve(__dirname, './definition/'), { camelize: false })
}
