module.exports = {
  'node/exports-style': [2, 'module.exports'],
  'node/no-deprecated-api': 2,
  'node/no-extraneous-import': [2, { allowModules: [] }],
  'node/no-extraneous-require': [2, { allowModules: [] }],
  'node/no-missing-require': 2,
  'node/no-unpublished-import': [2, { tryExtensions: ['.js', '.json', '.vue', '.node'] }],
  'node/no-unpublished-require': [2, { tryExtensions: ['.js', '.json', '.vue', '.node'] }],
  'node/process-exit-as-throw': 2,
  'node/shebang': 2,
}
