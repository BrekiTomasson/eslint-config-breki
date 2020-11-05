# Changelog for `eslint-config-breki`

## v1.0.31 - November 5, 2020

- **
  Rule
  Changes**:
  Removed `unicorn/prefer-spread`
  as
  it
  conflicted
  with `array-func/prefer-array-from`
  .
- **
  Rule
  changes**:
  Updated `no-extra-parens`
  to
  simply
  warn
  on `all`
  instead
  of
  specifying
  the
  list.

## v1.0.30 - November 5, 2020

- **
  Config
  Changes**:
  Added
  support
  for
  GitHub
  Packages

## v1.0.30 - October 28, 2020

- **
  Config
  Changes**:
  Upgraded `ecmaVersion`
  from `2017`
  to `2020`
  in
  Parser
  Options.
- **
  Rule
  Changes**:
  Updated
  ruleset
  for `eslint-plugin-jest`
  as
  these
  had
  changed
  slightly
  between `v22.16`
  and `v24.1`
  .
- **
  Rule
  Changes**:
  Upgraded `array-func/from-map`
  and `array-func/prefer-array-from`
  from
  warning
  to
  error.
- **
  Rule
  Changes**:
  Downgraded `accessor-pairs`
  from
  error
  to
  warning.
- **
  Rule
  Changes**:
  Added
  new
  rule
  for `array-callback-return` (
  error)
  .
- **
  Rule
  Changes**:
  Added
  new
  rule
  for `func-names`
  ,
  including
  ruleset
  for
  generators (
  error)
  .
- **
  Rule
  Changes**:
  Reworked
  ruleset
  for `eslint-plugin-import`
  ,
  removing
  overlaps
  with `eslint-plugin-node`
  and
  changing some errors to warnings.
- **Rule Changes**: Added new rules from `eslint-plugin-unicorn` and removed deprecated ones.
- **Rule Changes**: Reworked ruleset for `eslint-plugin-node`, making it more strict on potential sources of errors.
- **Rule Changes**: Changed `no-extra-parens`, changing option `conditionalAssign` to `true`, and added new options
  `enforceForSequenceExpressions`, `enforceForNewInMemberExpressions`, and `enforceForFunctionPrototypeMethods`,
  all `true`.
- **Rule Changes**: Added options `ignoreDefaultValues`, `enforceConst`, and `detectObjects` to `no-magic-numbers`, all
  `true`.
- **Code Style**: Moved some more scaffolding down into the root folder's `index.js`.
- **Building and Testing**: In `.travis.yml`, removed support for specific node versions, replaced with testing against
  "Latest Stable" and "Latest LTS" only.
- **Code Style**: Renamed file and variable "env" to "environment" where applicable.
- **Dependencies**: Removed `eslint-plugin-es`, as we are bumping `ecmaVersion` to 2020 anyway.
- **Dependencies**: Upgraded multiple dependency versions:
  - `babel-eslint`: ^10.1.0
  - `eslint`: ^7.12.1
  - `eslint-plugin-array-func`: ^3.1.7
  - `eslint-plugin-babel`: ^5.3.1
  - `eslint-plugin-filenames`: ^1.3.2
  - `eslint-plugin-import`: ^2.22.1
  - `eslint-plugin-jest`: ^24.1.0
  - `eslint-plugin-json`: ^2.1.2
  - `eslint-plugin-node`: ^11.1.0
  - `eslint-plugin-ocd`: ^1.1.0
  - `eslint-plugin-promise`: ^4.2.1
  - `eslint-plugin-security`: ^1.4.0
  - `eslint-plugin-unicorn`: ^23.0.0
  - `eslint-plugin-you-dont-need-lodash-underscore`: ^6.10.0
  - `eslint-plugin-you-dont-need-momentjs`: ^1.6.0
  - `import-modules`: ^2.0.0
  - `semantic-release`: ^17.2.1
  - `vue-eslint-parser`: ^7.1.1

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
- **Rule Changes**: `eslint-plugin-node` no longer looks at `.mjs` files in `no-unpublished-import` and
  `no-unpublished-require`.
- **Rule Changes**: Added missing rules for `eslint-plugin-you-dont-need-lodash-underscore` and
  `eslint-plugin-you-dont-need-momentjs`.
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

- **Code Style**: Updated Eslint calls from 'warn' and 'warning' to `1` to guarantee future compatibility.
- **Code Style**: Updated Eslint calls from 'error' to `2` to guarantee future compatibility.

## v1.0.22 - January 26, 2019

- **BugFix**: Internal Eslint extension now correctly points to `./index.js`.
- **Code Style**: Moved output builders from `./src/output` to `./src`.
- **Dependencies**: Removed `standard` and `eslint-config-standard`.
- **Dependencies**: Added `babel-eslint`, v10.0.1.
- **Dependencies**: Added `semantic-release`, v15.13.3

## v1.0.21 - January 15, 2019

- **Enhancement**: Introduced eslint-plugin-flowtype to the mix.
- **Performance**: Cut down on the various extraneous modules being used in the repo.
- **Code Style**: Gave up on the idea of using Typescript, it felt like too much work without any real gain.

## v1.0.20 - January 8, 2019

- **Code Style**: Began migration of project into Typescript. Planning a more modular approach to how the various rules
  are loaded/imported.

## v1.0.10 - November 22, 2018

- **Dependencies**: Added several new dependencies:
  - `eslint-plugin-babel`, v5.3.0
  - `eslint-plugin-filenames`, v1.3.2
  - `eslint-plugin-html`, v5.0.0
  - `eslint-plugin-json`, v1.2.1
  - `eslint-plugin-you-dont-need-lodash-underscore`, v6.4.0
  - `eslint-plugin-you-dont-need-momentjs`, v1.4.0

## v1.0.9 - November 22, 2018

- **Code Style**: Changed line length in `README.md` from 120 to 80.
- **Code Style**: Created this changelog in the first place.
- **Code Style**: Renamed configuration file from `.eslint.json` to `eslint.json`
- **Code Style**: Updated package.json to reflect change from React to Vue.
- **Dependencies**: Added `@vue/eslint-plugin`
- **Dependencies**: Moved eslint from devDependencies to peerDependencies.
- **Dependencies**: Removed `eslint-plugin-react` in favor of `Vue`.
- **Dependencies**: Updated `eslint-plugin-jest` from v21.24.1 to v21.27.2
