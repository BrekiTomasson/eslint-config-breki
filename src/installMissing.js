const npmInstallPackage = require('npm-install-package')

module.exports = () => {
  return (plugin) => {
    try {
      console.log(`Checking availability of eslint-config-${plugin}.`)
      require(`eslint-plugin-${plugin}`);
    } catch (exception) {
      notFound(exception, plugin)
    }
    return true;
  }
}

const notFound = (exception, plugin) => {
  console.log(exception)
  console.log(`Installing eslint-plugin-${plugin} ...`)

  npmInstallPackage(plugin, (error) => {
    if (error) {
      console.log(`Could not install plugin: eslint-plugin-${plugin}.`)
      throw error
    } else return true
  })
}
