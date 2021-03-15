module.exports = {
  'node/callback-return': 'warn',
  'node/exports-style': ['warn', 'module.exports'],
  'node/handle-callback-err': 'error',
  'node/no-callback-literal': 'error',
  'node/no-deprecated-api': 'warn',
  'node/no-exports-assign': 'error',
  'node/no-extraneous-import': ['error', { allowModules: [] }],
  'node/no-extraneous-require': ['error', { allowModules: [] }],
  'node/no-missing-import': 'error',
  'node/no-missing-require': 'error',
  'node/no-unpublished-bin': 'error',
  'node/no-unpublished-import': ['error', { tryExtensions: ['.js', '.mjs', '.json', '.vue', '.node'] }],
  'node/no-unpublished-require': ['error', { tryExtensions: ['.js', '.mjs', '.json', '.vue', '.node'] }],
  'node/process-exit-as-throw': 'error',
  'node/shebang': 'error'
}
