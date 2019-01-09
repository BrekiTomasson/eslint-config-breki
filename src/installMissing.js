const npmInstallPackage = require('npm-install-package')
const debug = require('debug')

module.exports = () => {
  return (plugin) => {
    plugin = `eslint-plugin-${plugin}`

    try {
      require(plugin)
    } catch (err) {
      notFound(plugin)
    }
    return true
  }
}

const notFound = (plugin) => {
  debug('[PluginManager] ')(`Installing eslint-plugin-${plugin} ...`)

  npmInstallPackage(plugin, (err) => {
    if (err) {
      debug('[PluginManager] ')(`Could not install plugin: eslint-plugin-${plugin}.`)
      throw err
    } else return true
  })
}
