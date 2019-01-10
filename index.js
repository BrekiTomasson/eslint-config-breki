const Linter = require('standard-engine').linter
const opts = require('./src/config').linter

module.exports = new Linter(opts)
