declare const _default: {
    env: {
        amd: boolean;
        browser: boolean;
        commonjs: boolean;
        es6: boolean;
        jest: boolean;
        jquery: boolean;
        node: boolean;
    };
    extends: never[];
    globals: {
        document: boolean;
        navigator: boolean;
        window: boolean;
    };
    overrides: {
        files: string[];
        rules: {
            'new-cap': string;
            'no-invalid-this': string;
            'no-unused-expressions': string;
            'object-curly-spacing': string;
            quotes: string;
            semi: string;
            'valid-typeof': string;
            camelcase: string;
        };
    }[];
    parser: string;
    parserOptions: {
        ecmaVersion: number;
        sourceType: string;
        ecmaFeatures: {
            arrowFunctions: boolean;
            binaryLiterals: boolean;
            blockBindings: boolean;
            classes: boolean;
            defaultParams: boolean;
            destructuring: boolean;
            forOf: boolean;
            globalReturn: boolean;
            impliedStrict: boolean;
            jsx: boolean;
            modules: boolean;
            objectLiteralComputedProperties: boolean;
            objectLiteralDuplicateProperties: boolean;
            objectLiteralShorthandMethods: boolean;
            objectLiteralShorthandProperties: boolean;
            octalLiterls: boolean;
            regexUFlag: boolean;
            regexYFlag: boolean;
            spread: boolean;
            superInFunctions: boolean;
            templateStrings: boolean;
            unicodeCodePointEscapes: boolean;
        };
    };
    plugins: string[];
    rules: any;
};
export = _default;
