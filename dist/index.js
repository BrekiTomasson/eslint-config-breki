"use strict";
const env_1 = require("./output/env");
const extends_1 = require("./output/extends");
const globals_1 = require("./output/globals");
const overrides_1 = require("./output/overrides");
const parserOptions_1 = require("./output/parserOptions");
const plugins_1 = require("./output/plugins");
const rules_1 = require("./output/rules");
module.exports = {
    env: env_1.env,
    extends: extends_1.extend,
    globals: globals_1.globals,
    overrides: overrides_1.overrides,
    parser: 'babel-eslint',
    parserOptions: parserOptions_1.parserOptions,
    plugins: plugins_1.plugins,
    rules: rules_1.rules
};
