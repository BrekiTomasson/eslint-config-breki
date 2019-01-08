module.exports = {
  'node/exports-style': ['error', 'module.exports'],
  'node/no-deprecated-api': 2,
  'node/no-extraneous-import': ['error', { allowModules: [] }],
  'node/no-extraneous-require': ['error', { allowModules: [] }],
  'node/no-missing-require': 2,
  'node/no-unpublished-import': [
    'error', {
      tryExtensions: [
        '.js', '.json', '.vue', '.node'
      ]
    }
  ],
  'node/no-unpublished-require': [
    'error', {
      tryExtensions: [
        '.js', '.json', '.vue', '.node'
      ]
    }
  ],
  'node/process-exit-as-throw': 2,
  'node/shebang': 2,
}
