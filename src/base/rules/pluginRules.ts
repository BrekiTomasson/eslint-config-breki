namespace BaseConfiguration {
  export const arrayFunc = {
    'array-func/from-map': 'error',
    'array-func/no-unnecessary-this-arg': 'error',
    'array-func/prefer-array-from': 'error',
    'array-func/avoid-reverse': 'error',
    'array-func/prefer-flat-map': 'error',
    'array-func/prefer-flat': 'error',
  }

  export const es = {
    // TO DO
  }
  export const filenames = {
    'filenames/match-exported': ['error', [null, 'kebab', 'pascal', 'camel']],
    'filenames/match-regex': 0,
    'filenames/no-index': 0
  }
  export const html = {
    // TO DO
  }
  export const imports = {
    'import/export': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-webpack-loader-syntax': 'error',
  }
  export const jest = {
    'jest/consistent-test-it': [
      "error", {
        fn: "it",
        withinDescribe: "it"
      }
    ],
    'jest/expect-expect': 'warn',
    'jest/lowercase-name': 'error',
    'jest/no-alias-methods': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-jest-import': 'warn',
    'jest/no-large-snapshots': 'error',
    'jest/no-test-callback': 'warn',
    'jest/no-test-prefixes': 'warn',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-expect-assertions': 'warn',
    'jest/prefer-spy-on': 'warn',
    'jest/prefer-strict-equal': 'warn',
    'jest/prefer-to-be-null': 'warn',
    'jest/prefer-to-be-undefined': 'warn',
    'jest/prefer-to-contain': 'warn',
    'jest/prefer-to-have-length': 'warn',
    'jest/require-tothrow-message': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-expect': 'error'
  };
  export const json = {
    // TO DO
  }
  export const node = {
    'node/exports-style': ['error', 'module.exports'],
    'node/no-deprecated-api': 'error',
    'node/no-extraneous-import': ['error', { allowModules: [] }],
    'node/no-extraneous-require': ['error', { allowModules: [] }],
    'node/no-missing-require': 'error',
    'node/no-unpublished-import': ['error', { tryExtensions: ['.js', '.json', '.vue', '.node'] }],
    'node/no-unpublished-require': ['error', { tryExtensions: ['.js', '.json', '.vue', '.node'] }],
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error',
  }
  export const ocd = {
    'ocd/sort-import-declaration-specifiers': 'error',
    'ocd/sort-import-declarations': 'error',
    'ocd/sort-variable-declarator-properties': 'error',
  }
  export const promise = {
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn'
  }
  export const security = {
    'security/detect-unsafe-regex': 'warn',
    'security/detect-buffer-noassert': 'warn',
    'security/detect-child-process': 'warn',
    'security/detect-disable-mustache-escape': 'warn',
    'security/detect-eval-with-expression': 'warn',
    'security/detect-no-csrf-before-method-override': 'warn',
    'security/detect-non-literal-fs-filename': 'warn',
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-non-literal-require': 'warn',
    'security/detect-object-injection': 'warn',
    'security/detect-possible-timing-attacks': 'warn',
    'security/detect-pseudoRandomBytes': 'warn'
  }
  export const standard = {
    'standard/array-bracket-even-spacing': ['error', 'never'],
    'standard/computed-property-even-spacing': 'off',
    'standard/no-callback-literal': ['error', ['cb', 'callback']],
    'standard/object-curly-even-spacing': ['error', 'always'],
  }
  export const unicorn = {
    'unicorn/catch-error-name': ['error', { name: 'err' }],
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': ['error', { 'non-zero': 'not-equal' }],
    'unicorn/filename-case': 'off', // This is handled already by eslint-plugin-filenames
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-exponentiation-operator': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/regex-shorthand': 'error',
    'unicorn/throw-new-error': 'error',

    // - Have these been removed?
    //  'unicorn/no-console-spaces': 'error',
    //  'unicorn/no-unreadable-array-destructuring': 'error',
    //  'unicorn/no-unused-properties': 'warn',
    //  'unicorn/prefer-node-append': 'warn',

  }
  export const vue = {
    // TO DO
  }
  export const youDontNeedLodashUnderscore = {
    // TO DO
  }
  export const youDontNeedMomentjs = {
    // TO DO
  }

  export const flowtype = {
    'flowtype/array-style-complex-type': [1, 'verbose']
  }

  export const babel = {
    'babel/new-cap': 'warn',
    'babel/no-invalid-this': 'warn',
    'babel/object-curly-spacing': [
      'error', 'always', { arraysInObjects: true, objectsInObjects: true }
    ],
    'babel/quotes': [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    'babel/semi': ['error', 'never'],
    'babel/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true
      }
    ],
    'babel/valid-typeof': 'error',
  }
}
