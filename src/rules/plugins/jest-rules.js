module.exports = {
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
