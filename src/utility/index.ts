import { default as npmInstallPackage } from 'npm-install-package'
import resolve from 'resolve'

export const installMissing = function(plugin:string): boolean {
  const pluginFullName = `eslint-plugin-${plugin}`
  resolve(pluginFullName, (err:Error|null) => {
    if (err) {
      notFound(pluginFullName)
      throw err
    }
  })

  return true
}

const notFound = function(pluginFullName:string) {
  return new Promise((good, bad) => {
    npmInstallPackage(pluginFullName, (err:Error|null) => {
      if (err) bad(err)
      else good(true)
    }).then((result:boolean) => result).catch((err:Error) => {
      throw err
    });
  })
}
