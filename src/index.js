const rules = require('./ruleset')

module.exports = {
  env: rules.env,
  extends: rules.extends,
  globals: rules.globals,
  parserOptions: rules.parserOptions,
  plugins: rules.plugins,
  parser: rules.parser,
  rules: rules.rules,
}
