import npmInstallPackage from 'npm-install-package'
import resolve from 'resolve'

export function installMissing (plugin:string) {
  const pluginFullName = `eslint-plugin-${plugin}`
  console.log(`Checking for presence of ${pluginFullName}.`)

  resolve(pluginFullName, (err) => {
    if (err) {
      notFound(pluginFullName)
    } else resolve
  })
}

const notFound = (pluginFullName:string) => new Promise((good, bad) => {
  console.log(`Attempting installation of ${pluginFullName}. Please wait.`)

  npmInstallPackage(pluginFullName, (err:Error) => {
    if (err) {
      console.log(`Could not install plugin: ${pluginFullName}.`)
      bad(err)
    } else good(true)
  })
})
