import { overrides } from './overrides/'

export default {
  env: BaseConfiguration.env,
  extends: BaseConfiguration.extend,
  globals: BaseConfiguration.globals,
  overrides: overrides,
  parserOptions: BaseConfiguration.parserOptions,
  parser: 'babel-eslint',
  plugins: BaseConfiguration.plugins,
  rules: BaseConfiguration.rules
}
