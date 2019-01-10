#!/usr/bin/env node

const opts = require('./src/config').linter
require('standard-engine').cli(opts)
