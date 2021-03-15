const ECMAVERSION = 2020

module.exports = {
  allowImportExportEverywhere: false,
  babelOptions: { configFile: `${__dirname}/../babel.config.js` },
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
  },
  ecmaVersion: ECMAVERSION,
  sourceType: 'module',
}
