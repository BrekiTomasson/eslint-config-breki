const fs = require('fs')
const path = require('path')
const appRoot = require('app-root-path')
const tslint = require('./tslint.json')

let rulesPath = 'node_modules/tslint-eslint-rules/dist/rules'
const pathedRulesPath = path.resolve(__dirname, rulesPath)

if (!fs.existsSync(pathedRulesPath)) {
  rulesPath = `${appRoot}/${rulesPath}`
}

tslint.rulesDirectory = [rulesPath]

module.exports = tslint
