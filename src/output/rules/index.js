const plugins = require('./plugins')
const core = require('./core')
const livePlugins = require('../plugins')

livePlugins.forEach(plugin => {
  Object.assign(core, plugins[plugin])
})

module.exports = core
