const Linter = require('standard-engine').linter
const opts = require('./src/options.js')

module.exports = new Linter(opts)
