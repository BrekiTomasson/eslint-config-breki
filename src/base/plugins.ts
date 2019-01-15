namespace BaseConfiguration {

  /**
   * Configuration Object
   *
   * @namespace
   * @param {Array} plugins - The list of plugins to use.
   * @param {Object} resolveOpts - Options to use in package resolution.
   */
  export const plugins = [
    'array-func',
    'babel',
    'es',
    'filenames',
    'html',
    'import',
    'flowtype',
    'jest',
    'json',
    'node',
    'ocd',
    'promise',
    'security',
    'standard',
    'unicorn',
    'vue',
    'you-dont-need-lodash-underscore',
    'you-dont-need-momentjs'
  ].filter(plugin => fixMissing(plugin))
}
