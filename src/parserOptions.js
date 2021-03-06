const ECMAVERSION = 2020

module.exports = {
  parser: 'babel-eslint',
  allowImportExportEverywhere: true,
  ecmaVersion: ECMAVERSION,
  sourceType: 'module',
  ecmaFeatures: {
    arrowFunctions: true,
    binaryLiterals: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    globalReturn: false,
    impliedStrict: true,
    jsx: false,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    octalLiterals: true,
    regexUFlag: true,
    regexYFlag: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    unicodeCodePointEscapes: true
  }
}
