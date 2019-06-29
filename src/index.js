const env = require('./env')
const extend = require('./extends')
const globals = require('./globals')
const parserOptions = require('./parserOptions')
const plugins = require('./plugins')
const rules = require('./rules')

module.exports = {
  env,
  extends: extend,
  globals,
  parserOptions,
  plugins,
  rules,
  settings: {
  	"flowtype": {
  		"onlyFilesWithFlowAnnotation": true
  	}
  }
}
