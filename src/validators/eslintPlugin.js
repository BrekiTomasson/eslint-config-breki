const npmInstallPackage = require('npm-install-package')
const res = require('resolve')

module.exports = (plugin) => {
  let fullPluginName = `eslint-plugin-${plugin}`

  try {
    return res.sync(fullPluginName)
    return true
  } catch (err) {
    notFound(fullPluginName)
    return false
  }
}


const notFound = (fullPluginName) => {
  return new Promise((good, bad) => {
    console.log(`Attempting installation of ${fullPluginName}. Please wait.`)

    return npmInstallPackage(fullPluginName, (err) => {
      if (err) {
        console.log(`Could not install plugin: ${fullPluginName}.`)
        return bad(false)
      } else {
        console.log('done!')
        return good(true)
      }
    })
  })
}
