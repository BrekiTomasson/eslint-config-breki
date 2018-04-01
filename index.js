const Linter = require('standard-engine').cli
const opts = require('./options.js')
module.exports = new Linter(opts)
