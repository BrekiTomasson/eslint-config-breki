const EslintPlugin = require('../../validators/eslintPlugin')
const config = require('../../config')

module.exports = config.plugins.filter((plugin) => EslintPlugin(plugin))
