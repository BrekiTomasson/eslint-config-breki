import { env } from './output/env'
import { extend } from './output/extends'
import { globals } from './output/globals'
import { overrides } from './output/overrides'
import { parserOptions } from './output/parserOptions'
import { plugins } from './output/plugins'
import { rules } from './output/rules'

export = {
  env,
  extends: extend,
  globals,
  overrides,
  parser: 'babel-eslint',
  parserOptions,
  plugins,
  rules
}
