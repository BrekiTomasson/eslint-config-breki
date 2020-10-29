module.exports = {
  /* Possible Errors */
  'node/handle-callback-err': 2,
  'node/no-callback-literal': 2,
  'node/no-exports-assign': 2,
  'node/no-extraneous-import': [2, { allowModules: [] }],
  'node/no-extraneous-require': [2, { allowModules: [] }],
  'node/no-missing-import': 2,
  'node/no-missing-require': 2,
  'node/no-unpublished-bin': 2,
  'node/no-unpublished-import': [2, { tryExtensions: ['.js', '.mjs', '.json', '.vue', '.node'] }],
  'node/no-unpublished-require': [2, { tryExtensions: ['.js', '.mjs', '.json', '.vue', '.node'] }],
  'node/process-exit-as-throw': 2,
  'node/shebang': 2,

  /* Best Practices */
  'node/no-deprecated-api': 1,

  /* Stylistic Issues */
  'node/callback-return': 1,
  'node/exports-style': [1, 'module.exports'],
  'node/file-extension-in-import': 2,
}
