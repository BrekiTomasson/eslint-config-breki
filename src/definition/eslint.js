module.exports = {
  "new-cap": 0, // Disabled in favor of Babel's version.
  "camelcase": 0, // Disabled in favor of Babel's version.
  "no-invalid-this": 0, // Disabled in favor of Babel's version.
  "object-curly-spacing": 0, // Disabled in favor of Babel's version.
  "quotes": 0, // Disabled in favor of Babel's version.
  "semi": 0, // Disabled in favor of Babel's version.
  "no-unused-expressions": 0, // Disabled in favor of Babel's version.
  "valid-typeof": 0, // Disabled in favor of Babel's version.
  "accessor-pairs": [
    "error",
    {
      setWithoutGet: true
    }
  ],
  "array-bracket-newline": [
    "error",
    {
      multiline: true
    }
  ],
  "array-bracket-spacing": [
    "error",
    "never"
  ],
  "arrow-body-style": [
    "error",
    "as-needed"
  ],
  "arrow-parens": [
    "error",
    "as-needed",
    {
      requireForBlockBody: true
    }
  ],
  "arrow-spacing": [
    "error",
    {
      after: true,
      before: true
    }
  ],
  "block-scoped-var": "error",
  "block-spacing": [
    "error",
    "always"
  ],
  "brace-style": [
    "error",
    "1tbs",
    {
      allowSingleLine: true
    }
  ],
  "callback-return": "error",
  camelcase: "off",
  "comma-dangle": [
    "error",
    {
      arrays: "only-multiline",
      exports: "never",
      functions: "never",
      imports: "never",
      objects: "only-multiline"
    }
  ],
  "comma-spacing": [
    "error",
    {
      after: true,
      before: false
    }
  ],
  "comma-style": [
    "error",
    "last"
  ],
  complexity: [
    "error",
    {
      max: 8
    }
  ],
  "computed-property-spacing": [
    "error",
    "never"
  ],
  "consistent-return": "error",
  "consistent-this": 0,
  "constructor-super": "error",
  curly: [
    "error",
    "multi-line"
  ],
  "default-case": "error",
  "dot-location": [
    "error",
    "property"
  ],
  "dot-notation": "error",
  "eol-last": "error",
  eqeqeq: [
    "error",
    "always",
    {
      null: "ignore"
    }
  ],
  "for-direction": "error",
  "func-call-spacing": [
    "error",
    "never"
  ],
  "func-name-matching": [
    "error",
    "always"
  ],
  "func-style": 0,
  "generator-star-spacing": [
    "error",
    {
      after: true,
      before: true
    }
  ],
  "getter-return": "error",
  "global-require": "error",
  "guard-for-in": "error",
  "handle-callback-err": [
    "error",
    "^(err|error)$"
  ],
  "implicit-arrow-linebreak": [
    "error",
    "beside"
  ],
  indent: [
    "error",
    2,
    {
      ArrayExpression: 1,
      CallExpression: {
        arguments: 1
      },
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
      VariableDeclarator: "first",
      flatTernaryExpressions: false,
      ignoreComments: false,
      outerIIFEBody: 1
    }
  ],
  "init-declarations": [
    "error",
    "always"
  ],
  "key-spacing": [
    "error",
    {
      afterColon: true,
      beforeColon: false
    }
  ],
  "keyword-spacing": [
    "error",
    {
      after: true,
      before: true
    }
  ],
  "line-comment-position": [
    "error",
    {
      position: "above"
    }
  ],
  "linebreak-style": [
    "error",
    "unix"
  ],
  "lines-around-comment": [
    "error",
    {
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
  "max-depth": 0,
  "max-len": [
    "error",
    {
      code: 120,
      comments: 120,
      ignoreTemplateLiterals: true
    }
  ],
  "max-nested-callbacks": 0,
  "max-params": 0,
  "max-statements": [
    "error",
    {
      max: 20
    }
  ],
  "max-statements-per-line": [
    "error",
    {
      max: 2
    }
  ],
  "new-cap": "off",
  "new-parens": "error",
  "newline-per-chained-call": [
    "warn",
    {
      ignoreChainWithDepth: 4
    }
  ],
  "no-alert": "error",
  "no-array-constructor": "error",
  "no-await-in-loop": "error",
  "no-caller": "error",
  "no-catch-shadow": "error",
  "no-class-assign": "error",
  "no-compare-neg-zero": "error",
  "no-cond-assign": "error",
  "no-confusing-arrow": "error",
  "no-console": 1,
  "no-const-assign": "error",
  "no-constant-condition": "error",
  "no-control-regex": "error",
  "no-debugger": "error",
  "no-delete-var": "error",
  "no-div-regex": "error",
  "no-dupe-args": "error",
  "no-dupe-class-members": "error",
  "no-dupe-keys": "error",
  "no-duplicate-case": "error",
  "no-duplicate-imports": "error",
  "no-else-return": "error",
  "no-empty": "error",
  "no-empty-character-class": "error",
  "no-empty-pattern": "error",
  "no-eq-null": "error",
  "no-eval": "error",
  "no-ex-assign": "error",
  "no-extend-native": "error",
  "no-extra-bind": "error",
  "no-extra-boolean-cast": "error",
  "no-extra-label": "error",
  "no-extra-parens": [
    "warn",
    "all",
    {
      conditionalAssign: false,
      enforceForArrowConditionals: true,
      ignoreJSX: "multi-line",
      nestedBinaryExpressions: true,
      returnAssign: true
    }
  ],
  "no-extra-semi": "error",
  "no-fallthrough": "error",
  "no-floating-decimal": "error",
  "no-func-assign": "error",
  "no-global-assign": "error",
  "no-implicit-coercion": "error",
  "no-implied-eval": "error",
  "no-inline-comments": 0,
  "no-inner-declarations": "error",
  "no-invalid-regexp": "error",
  "no-invalid-this": "off",
  "no-irregular-whitespace": "error",
  "no-iterator": "error",
  "no-label-var": "error",
  "no-labels": "error",
  "no-lone-blocks": "error",
  "no-lonely-if": "error",
  "no-loop-func": "error",
  "no-magic-numbers": [
    "error",
    {
      ignore: [
        -1,
        0,
        1,
        2
      ],
      ignoreArrayIndexes: true
    }
  ],
  "no-mixed-operators": [
    "error",
    {
      allowSamePrecedence: true,
      groups: [
        [
          "==",
          "!=",
          "===",
          "!==",
          ">",
          ">=",
          "<",
          "<="
        ],
        [
          "&&",
          "||"
        ],
        [
          "in",
          "instanceof"
        ]
      ]
    }
  ],
  "no-mixed-spaces-and-tabs": "error",
  "no-multi-spaces": [
    "warn",
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
  "no-multi-str": "error",
  "no-multiple-empty-lines": "error",
  "no-native-reassign": "error",
  "no-negated-condition": "error",
  "no-negated-in-lhs": "error",
  "no-nested-ternary": "error",
  "no-new": "error",
  "no-new-func": "error",
  "no-new-object": "error",
  "no-new-require": "error",
  "no-new-symbol": "error",
  "no-new-wrappers": "error",
  "no-obj-calls": "error",
  "no-octal": "error",
  "no-octal-escape": "error",
  "no-path-concat": "error",
  "no-plusplus": 0,
  "no-process-exit": "error",
  "no-proto": "error",
  "no-prototype-builtins": "error",
  "no-redeclare": "error",
  "no-regex-spaces": "error",
  "no-reserved-keys": 0,
  "no-return-assign": [
    "error",
    "except-parens"
  ],
  "no-return-await": "error",
  "no-script-url": "error",
  "no-self-assign": "error",
  "no-self-compare": "error",
  "no-sequences": "error",
  "no-shadow": "error",
  "no-shadow-restricted-names": "error",
  "no-sparse-arrays": "error",
  "no-tabs": "error",
  "no-template-curly-in-string": "error",
  "no-ternary": 0,
  "no-this-before-super": "error",
  "no-throw-literal": "error",
  "no-trailing-spaces": "error",
  "no-undef": "error",
  "no-undef-init": "error",
  "no-undefined": "error",
  "no-underscore-dangle": 0,
  "no-unexpected-multiline": "error",
  "no-unmodified-loop-condition": "error",
  "no-unneeded-ternary": [
    "error",
    {
      defaultAssignment: false
    }
  ],
  "no-unreachable": "error",
  "no-unsafe-finally": "error",
  "no-unsafe-negation": "error",
  "no-unused-expressions": "off",
  "no-unused-vars": [
    "error",
    {
      args: "none",
      ignoreRestSiblings: true,
      vars: "all"
    }
  ],
  "no-use-before-define": [
    "error",
    {
      classes: false,
      functions: false,
      variables: false
    }
  ],
  "no-useless-call": "error",
  "no-useless-computed-key": "error",
  "no-useless-constructor": "error",
  "no-useless-escape": "error",
  "no-useless-rename": "error",
  "no-useless-return": "error",
  "no-var": "error",
  "no-void": "error",
  "no-warning-comments": "error",
  "no-whitespace-before-property": "error",
  "no-with": "error",
  "nonblock-statement-body-position": [
    "error",
    "beside"
  ],
  "object-curly-newline": [
    "error",
    {
      multiline: true
    }
  ],
  "object-curly-spacing": "off",
  "object-property-newline": [
    "error",
    {
      allowMultiplePropertiesPerLine: true
    }
  ],
  "object-shorthand": [
    "warn",
    "always"
  ],
  "one-var": [
    "error",
    {
      initialized: "never"
    }
  ],
  "operator-assignment": "error",
  "operator-linebreak": [
    "error",
    "after",
    {
      overrides: {
        ":": "before",
        "?": "before"
      }
    }
  ],
  "padded-blocks": [
    1,
    "never"
  ],
  "padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      next: "*",
      prev: "multiline-expression"
    },
    {
      blankLine: "always",
      next: "multiline-expression",
      prev: "*"
    }
  ],
  "prefer-arrow-callback": "error",
  "prefer-const": "error",
  "prefer-promise-reject-errors": "error",
  "prefer-template": "error",
  "quote-props": [
    "error",
    "as-needed"
  ],
  quotes: "off",
  radix: [
    "error",
    "as-needed"
  ],
  "require-await": "error",
  "require-yield": [
    "error"
  ],
  "rest-spread-spacing": [
    "error",
    "never"
  ],
  semi: "off",
  "semi-spacing": [
    "error",
    {
      after: true,
      before: false
    }
  ],
  "sort-vars": [
    "error",
    {
      ignoreCase: true
    }
  ],
  "space-before-blocks": [
    "error",
    "always"
  ],
  "space-before-function-paren": [
    "error",
    "always"
  ],
  "space-in-parens": [
    "error",
    "never"
  ],
  "space-infix-ops": [
    "error",
    {
      int32Hint: false
    }
  ],
  "space-unary-ops": [
    "error",
    {
      nonwords: false,
      words: true
    }
  ],
  "spaced-comment": [
    "error",
    "always",
    {
      block: {
        balanced: true,
        exceptions: [
          "*",
          "-",
          "+",
          "="
        ],
        markers: [
          "*package",
          "!",
          ",",
          ":",
          "::"
        ]
      },
      line: {
        markers: [
          "*package",
          "!",
          "/",
          ",",
          "="
        ]
      }
    }
  ],
  strict: [
    "error",
    "global"
  ],
  "symbol-description": "error",
  "template-curly-spacing": [
    "error",
    "never"
  ],
  "template-tag-spacing": [
    "error",
    "always"
  ],
  "unicode-bom": "error",
  "use-isnan": "error",
  "valid-jsdoc": [
    "warn"
  ],
  "valid-typeof": "off",
  "vars-on-top": "error",
  "wrap-iife": [
    "error",
    "any",
    {
      functionPrototypeMethods: true
    }
  ],
  "wrap-regex": 0,
  "yield-star-spacing": [
    "error",
    "both"
  ],
  yoda: [
    "error",
    "never"
  ]
}
