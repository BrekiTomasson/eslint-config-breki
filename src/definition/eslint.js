module.exports = {
  'accessor-pairs': 1,
  'array-callback-return': 2,
  'array-bracket-newline': [2, { multiline: true }],
  'array-bracket-spacing': [2, 'never'],
  'arrow-body-style': [2, 'as-needed'],
  'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
  'arrow-spacing': [
    2, {
      after: true,
      before: true
    }
  ],
  'block-scoped-var': 2,
  'block-spacing': [2, 'always'],
  'brace-style': [
    2, '1tbs',
    { allowSingleLine: true }
  ],
  camelcase: 0,
  'comma-dangle': [
    2, {
      arrays: 'only-multiline',
      exports: 'never',
      functions: 'never',
      imports: 'never',
      objects: 'only-multiline'
    }
  ],
  'comma-spacing': [
    2, {
      after: true,
      before: false
    }
  ],
  'comma-style': [2, 'last'],
  complexity: [2, { max: 8 }],
  'computed-property-spacing': [2, 'never'],
  'consistent-return': 2,
  'consistent-this': 0,
  'constructor-super': 2,
  curly: [2, 'multi-line'],
  'default-case': 2,
  'dot-location': [2, 'property'],
  'dot-notation': 2,
  'eol-last': 2,
  eqeqeq: [2, 'always', { null: 'ignore' }],
  'for-direction': 2,
  'func-call-spacing': [2, 'never'],
  'func-name-matching': [2, 'always'],
  'func-names': [2, { generators: 'always' }],
  'func-style': 0,
  'generator-star-spacing': [
    2, {
      after: true,
      before: true
    }
  ],
  'getter-return': 2,
  'guard-for-in': 2,
  'implicit-arrow-linebreak': [2, 'beside'],
  indent: [
    2,
    2,
    {
      ArrayExpression: 1,
      CallExpression: { arguments: 1 },
      FunctionDeclaration: {
        body: 1,
        parameters: 1
      },
      FunctionExpression: {
        body: 1,
        parameters: 1
      },
      ImportDeclaration: 1,
      MemberExpression: 1,
      ObjectExpression: 1,
      SwitchCase: 1,
      VariableDeclarator: 'first',
      flatTernaryExpressions: false,
      ignoreComments: false,
      outerIIFEBody: 1
    }
  ],
  'init-declarations': [2, 'always'],
  'key-spacing': [
    2, {
      afterColon: true,
      beforeColon: false
    }
  ],
  'keyword-spacing': [
    2, {
      after: true,
      before: true
    }
  ],
  'line-comment-position': [2, { position: 'above' }],

  // 'linebreak-style': [2, 'unix'],

  'lines-around-comment': [
    2, {
      afterBlockComment: false,
      afterLineComment: true,
      allowArrayEnd: true,
      allowArrayStart: true,
      allowBlockEnd: true,
      allowBlockStart: true,
      allowObjectEnd: true,
      allowObjectStart: true,
      beforeBlockComment: true,
      beforeLineComment: true
    }
  ],
  'max-depth': 0,
  'max-len': [
    2, {
      code: 120,
      comments: 120,
      ignoreTemplateLiterals: true
    }
  ],
  'max-nested-callbacks': 0,
  'max-params': 0,
  'max-statements': [2, { max: 20 }],
  'max-statements-per-line': [2, { max: 2 }],
  'new-cap': 0,
  'new-parens': 2,
  'newline-per-chained-call': [
    1,
    { ignoreChainWithDepth: 4 }
  ],
  'no-alert': 2,
  'no-array-constructor': 2,
  'no-await-in-loop': 2,
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
  'no-dupe-args': 2,
  'no-dupe-class-members': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-duplicate-imports': 2,
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
  'no-extra-parens': [
    1,
    'all',
    {
      conditionalAssign: true,
      returnAssign: true,
      nestedBinaryExpressions: true,
      ignoreJSX: 'multi-line',
      enforceForArrowConditionals: true,
      enforceForSequenceExpressions: true,
      enforceForNewInMemberExpressions: true,
      enforceForFunctionPrototypeExpressions: true
    }
  ],
  'no-extra-semi': 2,
  'no-fallthrough': 2,
  'no-floating-decimal': 2,
  'no-func-assign': 2,
  'no-global-assign': 2,
  'no-implicit-coercion': 2,
  'no-implied-eval': 2,
  'no-inline-comments': 0,
  'no-inner-declarations': 2,
  'no-invalid-regexp': 2,
  'no-invalid-this': 0,
  'no-irregular-whitespace': 2,
  'no-iterator': 2,
  'no-label-var': 2,
  'no-labels': 2,
  'no-lone-blocks': 2,
  'no-lonely-if': 2,
  'no-loop-func': 2,
  'no-magic-numbers': [
    2,
    {
      ignore: [-1, 0, 1, 2],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
      enforceConst: true,
      detectObjects: true
    }
  ],
  'no-mixed-operators': [
    2, {
      allowSamePrecedence: true,
      groups: [
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
  'no-multi-spaces': [
    1,
    {
      exceptions: {
        BinaryExpression: false,
        ImportDeclaration: true,
        Property: true,
        VariableDeclarator: false
      },
      ignoreEOLComments: true
    }
  ],
  'no-multi-str': 2,
  'no-multiple-empty-lines': 2,
  'no-native-reassign': 2,
  'no-negated-condition': 2,
  'no-negated-in-lhs': 2,
  'no-nested-ternary': 2,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-object': 2,
  'no-new-symbol': 2,
  'no-new-wrappers': 2,
  'no-obj-calls': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-plusplus': 0,
  'no-proto': 2,
  'no-prototype-builtins': 2,
  'no-redeclare': 2,
  'no-regex-spaces': 2,
  'no-reserved-keys': 0,
  'no-return-assign': [2, 'except-parens'],
  'no-return-await': 2,
  'no-script-url': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-shadow': 2,
  'no-shadow-restricted-names': 2,
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
  'no-unneeded-ternary': [2, { defaultAssignment: false }],
  'no-unreachable': 2,
  'no-unsafe-finally': 2,
  'no-unsafe-negation': 2,
  'no-unused-expressions': 0,
  'no-unused-vars': [
    2, {
      args: 'none',
      ignoreRestSiblings: true,
      vars: 'all'
    }
  ],
  'no-use-before-define': [
    2, {
      classes: false,
      functions: false,
      variables: false
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
  'nonblock-statement-body-position': [2, 'beside'],
  'object-curly-newline': [2, { multiline: true }],
  'object-curly-spacing': 0,
  'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
  'object-shorthand': [
    1,
    'always'
  ],
  'one-var': [2, { initialized: 'never' }],
  'operator-assignment': 2,
  'operator-linebreak': [
    2, 'after',
    {
      overrides: {
        ':': 'before',
        '?': 'before'
      }
    }
  ],
  'padded-blocks': [
    1,
    'never'
  ],
  'padding-line-between-statements': [
    2, {
      blankLine: 'always',
      next: '*',
      prev: 'multiline-expression'
    },
    {
      blankLine: 'always',
      next: 'multiline-expression',
      prev: '*'
    }
  ],
  'prefer-arrow-callback': 2,
  'prefer-const': 2,
  'prefer-promise-reject-errors': 2,
  'prefer-template': 2,
  'quote-props': [2, 'as-needed'],
  quotes: 0,
  radix: [2, 'as-needed'],
  'require-await': 2,
  'require-yield': [2],
  'rest-spread-spacing': [2, 'never'],
  semi: 0,
  'semi-spacing': [
    2, {
      after: true,
      before: false
    }
  ],
  'sort-vars': [2, { ignoreCase: true }],
  'space-before-blocks': [2, 'always'],
  'space-before-function-paren': [2, 'always'],
  'space-in-parens': [2, 'never'],
  'space-infix-ops': [2, { int32Hint: false }],
  'space-unary-ops': [
    2, {
      nonwords: false,
      words: true
    }
  ],
  'spaced-comment': [
    2, 'always',
    {
      block: {
        balanced: true,
        exceptions: [
          '*',
          '-',
          '+',
          '='
        ],
        markers: [
          '*package',
          '!',
          ',',
          ':',
          '::'
        ]
      },
      line: {
        markers: [
          '*package',
          '!',
          '/',
          ',',
          '='
        ]
      }
    }
  ],
  strict: [2, 'global'],
  'symbol-description': 2,
  'template-curly-spacing': [2, 'never'],
  'template-tag-spacing': [2, 'always'],
  'unicode-bom': 2,
  'use-isnan': 2,
  'valid-jsdoc': [1],
  'valid-typeof': 0,
  'vars-on-top': 2,
  'wrap-iife': [
    2, 'any',
    { functionPrototypeMethods: true }
  ],
  'wrap-regex': 0,
  'yield-star-spacing': [2, 'both'],
  yoda: [2, 'never']
}
