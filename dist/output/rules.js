"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const pluginRules = tslib_1.__importStar(require("./pluginRules"));
exports.rules = Object.assign({}, pluginRules.arrayFunc, pluginRules.babel, pluginRules.es, pluginRules.filenames, pluginRules.html, pluginRules.imports, pluginRules.jest, pluginRules.json, pluginRules.node, pluginRules.ocd, pluginRules.promise, pluginRules.security, pluginRules.standard, pluginRules.unicorn, pluginRules.vue, pluginRules.youDontNeedLodashUnderscore, pluginRules.youDontNeedMomentjs, {
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': ['error', { after: true, before: true }],
    'block-spacing': ['error', 'always'],
    'comma-spacing': ['error', { after: true, before: false }],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'generator-star-spacing': ['error', { after: true, before: true }],
    'key-spacing': ['error', {
            align: {
                afterColon: true,
                beforeColon: true,
                on: "colon"
            }
        }],
    'keyword-spacing': ['error', { after: true, before: true }],
    'no-irregular-whitespace': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': ['warn', {
            ignoreEOLComments: true, exceptions: {
                Property: true,
                BinaryExpression: false,
                VariableDeclarator: false,
                ImportDeclaration: true
            }
        }],
    'no-regex-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', { "int32Hint": false }],
    'space-unary-ops': ['error', { nonwords: false, words: true }],
    'spaced-comment': ['error', 'always', {
            block: {
                balanced: true,
                exceptions: ['*', '-', '+', '='],
                markers: ['*package', '!', ',', ':', '::']
            },
            line: {
                markers: ['*package', '!', '/', ',', '=']
            }
        }],
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ["error", "always"],
    'yield-star-spacing': ['error', 'both'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'prefer-arrow-callback': 'error',
    'no-confusing-arrow': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'array-bracket-newline': ['error', { multiline: true }],
    'new-parens': 'error',
    'no-extra-parens': ['warn', 'all', {
            conditionalAssign: false,
            returnAssign: true,
            nestedBinaryExpressions: true,
            ignoreJSX: 'multi-line',
            enforceForArrowConditionals: true
        }],
    'accessor-pairs': ['error', { setWithoutGet: true }],
    'block-scoped-var': 'error',
    'callback-return': 'error',
    'comma-dangle': ['error', {
            arrays: 'only-multiline',
            objects: 'only-multiline',
            imports: 'never',
            exports: 'never',
            functions: 'never'
        }],
    'comma-style': ['error', 'last'],
    complexity: ['error', { max: 3 }],
    'consistent-return': 'error',
    'consistent-this': 0,
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'for-direction': 'error',
    'func-name-matching': ['error', 'always'],
    'func-style': 0,
    'getter-return': 'error',
    'global-require': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': ['error', '^(err|error)$'],
    indent: ['error', 2, {
            ArrayExpression: 1,
            CallExpression: { arguments: 1 },
            FunctionDeclaration: { body: 1, parameters: 1 },
            FunctionExpression: { body: 1, parameters: 1 },
            ImportDeclaration: 1,
            MemberExpression: 1,
            ObjectExpression: 1,
            SwitchCase: 1,
            VariableDeclarator: 'first',
            flatTernaryExpressions: false,
            ignoreComments: false,
            outerIIFEBody: 1
        }],
    'init-declarations': ['error', 'always'],
    'line-comment-position': ['error', { position: 'above' }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
        'error', {
            allowArrayStart: true,
            allowArrayEnd: true,
            allowBlockStart: true,
            allowBlockEnd: true,
            allowObjectStart: true,
            allowObjectEnd: true,
            beforeBlockComment: true,
            afterBlockComment: false,
            beforeLineComment: true,
            afterLineComment: true,
        }
    ],
    'max-depth': 0,
    'max-len': [
        'error', {
            code: 120,
            comments: 120,
            ignoreTemplateLiterals: true
        }
    ],
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': ['error', { max: 20 }],
    'max-statements-per-line': ['error', { max: 2 }],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 1,
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-await-in-loop': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-imports': 'error',
    'no-extra-semi': 'error',
    'require-await': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 0,
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {
            ignore: [-1, 0, 1, 2],
            ignoreArrayIndexes: true
        }],
    'no-mixed-operators': ['error', {
            allowSamePrecedence: true,
            groups: [
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof']
            ]
        }],
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'error',
    'no-native-reassign': 'error',
    'no-negated-condition': 'error',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-plusplus': 0,
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-reserved-keys': 0,
    'no-return-assign': [
        'error',
        'except-parens'
    ],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 0,
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 0,
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': [
        'error',
        { defaultAssignment: false }
    ],
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-vars': [
        'error',
        {
            args: 'none',
            ignoreRestSiblings: true,
            vars: 'all'
        }
    ],
    'no-use-before-define': [
        'error',
        {
            classes: false,
            functions: false,
            variables: false
        }
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': ['error', { multiline: true }],
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'object-shorthand': ['warn', 'always'],
    'one-var': ['error', { initialized: 'never' }],
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'after', { overrides: { ':': 'before', '?': 'before' } }],
    'padded-blocks': [1, 'never'],
    'padding-line-between-statements': [
        'error',
        {
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
    'prefer-const': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    radix: ['error', 'as-needed'],
    'require-yield': ['error'],
    'rest-spread-spacing': ['error', 'never'],
    'semi-spacing': [
        'error',
        {
            after: true,
            before: false
        }
    ],
    'sort-vars': [
        'error',
        { ignoreCase: true }
    ],
    strict: ['error', 'global'],
    'symbol-description': 'error',
    'unicode-bom': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': ['warn'],
    'vars-on-top': 'error',
    'wrap-iife': [
        'error',
        'any',
        { functionPrototypeMethods: true }
    ],
    'wrap-regex': 0,
    yoda: [
        'error',
        'never'
    ]
});
