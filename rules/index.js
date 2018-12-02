'use strict'

const installIfMissing = require('../src/installIfMissing')
const babelRules = require('./babel-rules')
const importRules = require('./import-rules')
const jestRules = require('./jest-rules')
const nodeRules = require('./node-rules')
const promiseRules = require('./promise-rules')
const unicornRules = require('./unicorn-rules')

const env = {
  amd: true,
  browser: true,
  commonjs: true,
  es6: true,
  jest: true,
  jquery: true,
  node: true
}

const globals = {
  document: true,
  navigator: false,
  window: true
}

const parserOptions = {
  ecmaVersion: 8,
  sourceType: 'script',
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
    octalLiterls: true,
    regexUFlag: true,
    regexYFlag: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    unicodeCodePointEscapes: true
  }
}

const plugins = [
  'array-func',
  'babel',
  'html',
  'es',
  'import',
  'json',
  'filenames',
  'jest',
  'node',
  'ocd',
  'promise',
  'security',
  'standard',
  'unicorn',
  'vue',
  'you-dont-need-lodash-underscore',
  'you-dont-need-momentjs'
].filter(plugin => installIfMissing(plugin));

/**
 * Note: This is called "Extension" despite the object key being "extends". This is because
 * "extends" is not a permitted variable name in Javascript.
 */
const extension = [
  'eslint:recommended',
  'plugin:@vue/essential',
  'plugin:you-dont-need-momentjs/recommended',
  'plugin:you-dont-need-lodash-underscore/compatible'
]

const overrides = [{
  'files': ['webpack.*.js', 'test/**/*.js'],
  'rules': {
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off'
  }
}]

const rules = {
  nodeRules,
  unicornRules,
  promiseRules,
  importRules,
  babelRules,
  jestRules,

    'accessor-pairs': [2, {
      'setWithoutGet': true
    }],
    'array-bracket-newline': ['warn', {
      'minItems': 4,
      'multiline': true
    }],
    'array-bracket-spacing': ['error', 'never'],
    'array-func/from-map': 2,
    'array-func/no-unnecessary-this-arg': 2,
    'array-func/prefer-array-from': 2,
    'arrow-body-style': ['error', 'always'
    ],
    'arrow-parens': [2, 'as-needed', {
      'requireForBlockBody': true
    }],
    'arrow-spacing': ['error', {
      'after': true,
      'before': true
    }],
    'block-scoped-var': 2,
    'block-spacing': 2,
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': true
      }
    ],
    'callback-return': 2,
    'camelcase': [
      'error',
      {
        'properties': 'never'
      }
    ],
    'comma-dangle': [
      'error',
      'only-multiline'
    ],
    'comma-spacing': ['error', {
      'after': true,
      'before': false
    }],
    'comma-style': ['error', 'last'],
    'complexity': ['error', {
      'max': 3
    }],
    'computed-property-spacing': [2, 'never'],
    'consistent-return': 2,
    'consistent-this': 0,
    'constructor-super': 2,
    'curly': ['error', 'multi-line'],
    'default-case': 2,
    'dot-location': ['error', 'property'],
    'dot-notation': 2,
    'eol-last': 2,
    'eqeqeq': ['error', 'always', {
      'null': 'ignore'
    }],
    'for-direction': 2,
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['error', 'always'],
    'func-style': 0,
    'generator-star-spacing': ['error', {
      'after': true,
      'before': true
    }],
    'getter-return': 2,
    'global-require': 2,
    'guard-for-in': 2,
    'handle-callback-err': ['error', '^(err|error)$'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, {
      'ArrayExpression': 1,
      'CallExpression': {
        'arguments': 1
      },
      'FunctionDeclaration': {
        'body': 1,
        'parameters': 1
      },
      'FunctionExpression': {
        'body': 1,
        'parameters': 1
      },
      'ImportDeclaration': 1,
      'MemberExpression': 1,
      'ObjectExpression': 1,
      'SwitchCase': 1,
      'VariableDeclarator': 1,
      'flatTernaryExpressions': false,
      'ignoreComments': false,
      'outerIIFEBody': 1
    }],
    'init-declarations': ['error', 'always'],
    'key-spacing': ['error', {
      'afterColon': true,
      'beforeColon': false
    }],
    'keyword-spacing': ['error', {
      'after': true,
      'before': true
    }],
    'line-comment-position': ['error', {
      'position': 'above'
    }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
      'afterBlockComment': false,
      'afterLineComment': true,
      'allowArrayEnd': true,
      'allowArrayStart': true,
      'allowBlockEnd': true,
      'allowBlockStart': true,
      'allowObjectEnd': true,
      'allowObjectStart': true,
      'beforeBlockComment': true,
      'beforeLineComment': true
    }],
    'max-depth': 0,
    'max-len': ['error', {
      'code': 120,
      'comments': 120,
      'ignoreTemplateLiterals': true
    }],
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': [
      'error',
      21
    ],
    'max-statements-per-line': ['error', {
      'max': 2
    }],
    'new-cap': ['error', {
      'capIsNew': false,
      'newIsCap': true
    }],
    'new-parens': 2,
    'newline-per-chained-call': ['warn', {
      'ignoreChainWithDepth': 4
    }],
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-class-assign': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-confusing-arrow': 2,
    'no-console': 1,
    'no-const-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-div-regex': 2,
    'no-await-in-loop': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-imports': 2,
    'no-extra-semi': 2,
    'no-invalid-this': 2,
    'require-await': 2,
    'no-duplicate-case': 2,
    'no-else-return': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-label': 2,
    'no-extra-parens': 0,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-global-assign': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-inline-comments': 0,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-magic-numbers': [
      'error',
      {
        'ignore': [
          -1,
          0,
          1
        ],
        'ignoreArrayIndexes': true
      }
    ],
    'no-mixed-operators': [
      'error',
      {
        'allowSamePrecedence': true,
        'groups': [
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<='
          ],
          [
            '&&',
            '||'
          ],
          [
            'in',
            'instanceof'
          ]
        ]
      }
    ],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 0,
    'no-multi-str': 2,
    'no-multiple-empty-lines': 2,
    'no-native-reassign': 2,
    'no-negated-condition': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-plusplus': 0,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-prototype-builtins': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-reserved-keys': 0,
    'no-return-assign': [
      'error',
      'except-parens'
    ],
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-tabs': 2,
    'no-template-curly-in-string': 2,
    'no-ternary': 0,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-underscore-dangle': 0,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      'error',
      {
        'defaultAssignment': false
      }
    ],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTaggedTemplates': true,
        'allowTernary': true
      }
    ],
    'no-unused-vars': [
      'error',
      {
        'args': 'none',
        'ignoreRestSiblings': true,
        'vars': 'all'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        'classes': false,
        'functions': false,
        'variables': false
      }
    ],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 2,
    'no-useless-rename': 2,
    'no-useless-return': 2,
    'no-var': 2,
    'no-void': 2,
    'no-warning-comments': 2,
    'no-whitespace-before-property': 2,
    'no-with': 2,

    'nonblock-statement-body-position': [
      'error',
      'beside'
    ],
    'object-curly-newline': [
      'error',
      {
        'multiline': true
      }
    ],
    'object-property-newline': [
      'error',
      {
        'allowMultiplePropertiesPerLine': true
      }
    ],
    'object-shorthand': [
      'warn',
      'always'
    ],
    'ocd/sort-import-declaration-specifiers': 2,
    'ocd/sort-import-declarations': 2,
    'ocd/sort-variable-declarator-properties': 2,
    'one-var': [
      'error',
      {
        'initialized': 'never'
      }
    ],
    'operator-assignment': 2,
    'operator-linebreak': [
      'error',
      'after',
      {
        'overrides': {
          ':': 'before',
          '?': 'before'
        }
      }
    ],
    'padded-blocks': [1, 'never'],
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'next': '*',
        'prev': 'multiline-expression'
      },
      {
        'blankLine': 'always',
        'next': 'multiline-expression',
        'prev': '*'
      }
    ],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-template': 2,
    'quote-props': [
      2,
      'as-needed'
    ],
    'quotes': [
      'warn',
      'single',
      {
        'allowTemplateLiterals': true,
        'avoidEscape': true
      }
    ],
    'radix': 2,
    'require-yield': 2,
    'rest-spread-spacing': [
      'error',
      'never'
    ],
    'security/detect-buffer-noassert': 1,
    'security/detect-child-process': 1,
    'security/detect-disable-mustache-escape': 1,
    'security/detect-eval-with-expression': 1,
    'security/detect-new-buffer': 1,
    'security/detect-no-csrf-before-method-override': 1,
    'security/detect-non-literal-fs-filename': 1,
    'security/detect-non-literal-regexp': 1,
    'security/detect-non-literal-require': 1,
    'security/detect-object-injection': 1,
    'security/detect-possible-timing-attacks': 1,
    'security/detect-pseudoRandomBytes': 1,
    'security/detect-unsafe-regex': 1,
    'semi': [2, 'never'],
    'semi-spacing': [
      'error',
      {
        'after': true,
        'before': false
      }
    ],
    'sort-vars': [
      'error',
      {
        'ignoreCase': true
      }
    ],
    'space-before-blocks': [
      'error',
      'always'
    ],
    'space-before-function-paren': [
      'error',
      'always'
    ],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        'nonwords': false,
        'words': true
      }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        'block': {
          'balanced': true,
          'exceptions': [
            '*'
          ],
          'markers': [
            '*package',
            '!',
            ',',
            ':',
            '::',
            'flow-include'
          ]
        },
        'line': {
          'markers': [
            '*package',
            '!',
            '/',
            ',',
            '='
          ]
        }
      }
    ],
    'standard/array-bracket-even-spacing': 2,
    'standard/computed-property-even-spacing': 2,
    'standard/no-callback-literal': 2,
    'standard/object-curly-even-spacing': [2, 'always'],
    'strict': ['error', 'global'],
    'symbol-description': 2,
    'template-curly-spacing': 2,
    'template-tag-spacing': 2,
    'unicode-bom': 2,
    'use-isnan': 2,
    'valid-jsdoc': [
      'warn'
    ],
    'valid-typeof': [
      'error',
      {
        'requireStringLiterals': true
      }
    ],
    'vars-on-top': 2,
    'wrap-iife': [
      'error',
      'any',
      {
        'functionPrototypeMethods': true
      }
    ],
    'wrap-regex': 0,
    'yield-star-spacing': [
      'error',
      'both'
    ],
    'yoda': [
      'error',
      'never'
    ],
    'filenames/match-exported':  2,
    'filenames/match-regex':  0,
    'filenames/no-index':  0
  }

module.export = {
  "env": env,
  "globals": globals,
  "parsereOptions": parserOptions,
  "plugins": plugins,
  "extends": extension,
  "overrides": overrides,
  "rules": rules
}
