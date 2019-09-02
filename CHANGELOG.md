# Changelog for `eslint-config-breki`

## v1.0.29 - September 2, 2019

- **Rule Changes**: Rule no longer enforces `lf` linebreaks over `crlf`, but ignores linebreaks completely.
- **Dependencies**: Upgraded multiple dependency versions:
  - `babel-eslint`, v10.0.3
  - `eslint-plugin-array-func`, v3.1.3
  - `eslint-plugin-import`, v2.18.2
  - `eslint-plugin-jest`, v22.16.0
  - `eslint-plugin-json`, v1.4.0
  - `eslint-plugin-node`, v9.2.0
  - `eslint-plugin-promise`, v4.2.1
  - `eslint-plugin-unicorn`, v10.0.0
  - `eslint-plugin-you-dont-need-lodash-underscore`, v6.6.0
  - `eslint-plugin-you-dont-need-momentjs`, v1.5.0
  - `vue-eslint-parser`, v6.0.4
  - `eslint-plugin-es`, v2.0.0
  - `semantic-release`, v15.13.24

## v1.0.28 - August 22, 2019

- **Rule Changes**: `promise/avoid-new` changed from _warning_ to _ignore_.

## v1.0.27 - June 30, 2019

- **Dependencies**: Removed `eslint-plugin-flowtype` & associated rules.

## v1.0.26 - June 30, 2019

- **Rule Changes**: Flowtype only triggers together with `@flow` notation.

## v1.0.25 - June 28, 2019

- **Dependencies**: Added `vue-eslint-parser`, v6.0.4
- **Dependencies**: Removed `eslint-plugin-vue` & associated rules.
- **Dependencies**: Removed `eslint-plugin-html` & associated rules.
- **BugFix**: Fixed faulty rule implementations for `eslint-plugin-flowtype`.
- **Rule Changes**: `eslint-plugin-node` no longer looks at `.mjs` files in `no-unpublished-import` and `no-unpublished-require`.
- **Rule Changes**: Added missing rules for `eslint-plugin-you-dont-need-lodash-underscore` and `eslint-plugin-you-dont-need-momentjs`.
- **Rule Changes**: Dropped `ecmaVersion` to 2017 rather than 2019.

## v1.0.24 - June 27, 2019

- **Dependencies**: Updated multiple dependency versions.
  - `eslint`: v6.0.1
  - `eslint-plugin-array-func`: v3.1.3
  - `eslint-plugin-flowtype`: v3.11.1
  - `eslint-plugin-html`: v6.0.0
  - `eslint-plugin-import`: v2.18.0
  - `eslint-plugin-jest`: v22.7.1
  - `eslint-plugin-json`: v1.4.0
  - `eslint-plugin-node`: v9.1.0
  - `eslint-plugin-promise`: v4.2.1
  - `eslint-plugin-unicorn`: v9.1.1
  - `eslint-plugin-vue`: v5.2.3
  - `eslint-plugin-you-dont-need-lodash-underscore`: v6.5.0
  - `eslint-plugin-you-dont-need-momentjs`: v1.5.0

## v1.0.23 - June 27, 2019

- **CodeStyle**: Updated Eslint calls from 'warn' and 'warning' to `1` and 'error' to `2` to guarantee future compatibility.


## v1.0.22 - January 26, 2019

- **BugFix**: Internal Eslint extension now correctly points to `./index.js`.
- **CodeStyle**: Moved output builders from `./src/output` to `./src`.
- **Dependencies**: Removed `standard` and `eslint-config-standard`.
- **Dependencies**: Added `babel-eslint`, v10.0.1.
- **Dependencies**: Added `semantic-release`, v15.13.3

## v1.0.21 - January 15, 2019

- **Enhancement**: Introduced eslint-plugin-flowtype to the mix.
- **Performance**: Cut down on the various extraneous modules being used in the repo.
- **CodeStyle**: Gave up on the idea of using Typescript, it felt like too much work for far too little effort. (... node_modules before: 154mb. node_modules after: 67mb)

## v1.0.20 - January 8, 2019

- **CodeStyle**: Began migration of project into Typescript. Planning a more modular approach to how the various rules are loaded/imported.

## v1.0.10 - November 22, 2018

- **Dependencies**: Added several new dependencies:
  - `eslint-plugin-babel`, v5.3.0
  - `eslint-plugin-filenames`, v1.3.2
  - `eslint-plugin-html`, v5.0.0
  - `eslint-plugin-json`, v1.2.1
  - `eslint-plugin-you-dont-need-lodash-underscore`, v6.4.0
  - `eslint-plugin-you-dont-need-momentjs`, v1.4.0

## v1.0.9 - November 22, 2018

- **CodeStyle**: Changed line length in `README.md` from 120 to 80.
- **CodeStyle**: Created this changelog in the first place.
- **CodeStyle**: Renamed configuration file from `.eslint.json` to `eslint.json`
- **CodeStyle**: Updated package.json to reflect change from React to Vue.
- **Dependencies**: Added `@vue/eslint-plugin`
- **Dependencies**: Moved eslint from devDependencies to peerDependencies.
- **Dependencies**: Removed `eslint-plugin-react` in favor of `Vue`.
- **Dependencies**: Updated `eslint-plugin-jest` from v21.24.1 to v21.27.2
