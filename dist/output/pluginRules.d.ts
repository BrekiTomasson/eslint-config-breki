export declare const arrayFunc: {
    'array-func/from-map': string;
    'array-func/no-unnecessary-this-arg': string;
    'array-func/prefer-array-from': string;
    'array-func/avoid-reverse': string;
    'array-func/prefer-flat-map': string;
    'array-func/prefer-flat': string;
};
export declare const es: {};
export declare const filenames: {
    'filenames/match-exported': (string | (string | null)[])[];
    'filenames/match-regex': number;
    'filenames/no-index': number;
};
export declare const html: {};
export declare const imports: {
    'import/export': string;
    'import/first': string;
    'import/no-duplicates': string;
    'import/no-webpack-loader-syntax': string;
};
export declare const jest: {
    'jest/consistent-test-it': (string | {
        fn: string;
        withinDescribe: string;
    })[];
    'jest/expect-expect': string;
    'jest/lowercase-name': string;
    'jest/no-alias-methods': string;
    'jest/no-disabled-tests': string;
    'jest/no-focused-tests': string;
    'jest/no-hooks': string;
    'jest/no-identical-title': string;
    'jest/no-jasmine-globals': string;
    'jest/no-jest-import': string;
    'jest/no-large-snapshots': string;
    'jest/no-test-callback': string;
    'jest/no-test-prefixes': string;
    'jest/no-test-return-statement': string;
    'jest/prefer-expect-assertions': string;
    'jest/prefer-spy-on': string;
    'jest/prefer-strict-equal': string;
    'jest/prefer-to-be-null': string;
    'jest/prefer-to-be-undefined': string;
    'jest/prefer-to-contain': string;
    'jest/prefer-to-have-length': string;
    'jest/require-tothrow-message': string;
    'jest/valid-describe': string;
    'jest/valid-expect-in-promise': string;
    'jest/valid-expect': string;
};
export declare const json: {};
export declare const node: {
    'node/exports-style': string[];
    'node/no-deprecated-api': string;
    'node/no-extraneous-import': (string | {
        allowModules: never[];
    })[];
    'node/no-extraneous-require': (string | {
        allowModules: never[];
    })[];
    'node/no-missing-require': string;
    'node/no-unpublished-import': (string | {
        tryExtensions: string[];
    })[];
    'node/no-unpublished-require': (string | {
        tryExtensions: string[];
    })[];
    'node/process-exit-as-throw': string;
    'node/shebang': string;
};
export declare const ocd: {
    'ocd/sort-import-declaration-specifiers': string;
    'ocd/sort-import-declarations': string;
    'ocd/sort-variable-declarator-properties': string;
};
export declare const promise: {
    'promise/always-return': string;
    'promise/no-return-wrap': string;
    'promise/param-names': string;
    'promise/catch-or-return': string;
    'promise/no-native': string;
    'promise/no-nesting': string;
    'promise/no-promise-in-callback': string;
    'promise/no-callback-in-promise': string;
    'promise/avoid-new': string;
    'promise/no-new-statics': string;
    'promise/no-return-in-finally': string;
    'promise/valid-params': string;
};
export declare const security: {
    'security/detect-unsafe-regex': string;
    'security/detect-buffer-noassert': string;
    'security/detect-child-process': string;
    'security/detect-disable-mustache-escape': string;
    'security/detect-eval-with-expression': string;
    'security/detect-no-csrf-before-method-override': string;
    'security/detect-non-literal-fs-filename': string;
    'security/detect-non-literal-regexp': string;
    'security/detect-non-literal-require': string;
    'security/detect-object-injection': string;
    'security/detect-possible-timing-attacks': string;
    'security/detect-pseudoRandomBytes': string;
};
export declare const standard: {
    'standard/array-bracket-even-spacing': string[];
    'standard/computed-property-even-spacing': string;
    'standard/no-callback-literal': (string | string[])[];
    'standard/object-curly-even-spacing': string[];
};
export declare const unicorn: {
    'unicorn/catch-error-name': (string | {
        name: string;
    })[];
    'unicorn/explicit-length-check': (string | {
        'non-zero': string;
    })[];
    'unicorn/filename-case': string;
    'unicorn/no-abusive-eslint-disable': string;
    'unicorn/no-process-exit': string;
    'unicorn/throw-new-error': string;
    'unicorn/number-literal-case': string;
    'unicorn/escape-case': string;
    'unicorn/no-array-instanceof': string;
    'unicorn/no-new-buffer': string;
    'unicorn/no-hex-escape': string;
    'unicorn/custom-error-definition': string;
    'unicorn/prefer-starts-ends-with': string;
    'unicorn/prefer-type-error': string;
    'unicorn/no-fn-reference-in-iterator': string;
    'unicorn/import-index': string;
    'unicorn/new-for-builtins': string;
    'unicorn/regex-shorthand': string;
    'unicorn/prefer-spread': string;
    'unicorn/error-message': string;
    'unicorn/no-unsafe-regex': string;
    'unicorn/prefer-add-event-listener': string;
    'unicorn/prefer-exponentiation-operator': string;
    'unicorn/no-console-spaces': string;
    'unicorn/no-unreadable-array-destructuring': string;
    'unicorn/no-unused-properties': string;
    'unicorn/prefer-node-append': string;
};
export declare const vue: {};
export declare const youDontNeedLodashUnderscore: {};
export declare const youDontNeedMomentjs: {};
export declare const babel: {
    'babel/new-cap': string;
    'babel/no-invalid-this': string;
    'babel/object-curly-spacing': (string | {
        arraysInObjects: boolean;
        objectsInObjects: boolean;
    })[];
    'babel/quotes': (string | {
        allowTemplateLiterals: boolean;
        avoidEscape: boolean;
    })[];
    'babel/semi': string[];
    'babel/no-unused-expressions': (string | {
        allowShortCircuit: boolean;
        allowTaggedTemplates: boolean;
        allowTernary: boolean;
    })[];
    'babel/valid-typeof': string;
};
