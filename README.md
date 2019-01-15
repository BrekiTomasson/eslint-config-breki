# [![eslint-config-breki](./ecb.png)](https://github.com/BrekiTomasson/breki-eslint-config)

[![Build
Status](https://travis-ci.org/BrekiTomasson/breki-eslint-config.svg?branch=master)](https://travis-ci.org/BrekiTomasson/breki-eslint-config)

We spend more time reading our code than we do writing it - so it only makes
sense to make it look as good as possible, right? Instead of putting all your
effort into making sure that your code just _works_, why not add that little
extra bit of effort in making sure that it also looks good? It makes it so much
easier to understand when you're going back to fix whatever problems you
inevitably created when you were working on that **great** idea you had.

My goal with this repo was originally just a place to store my various rulesets
for various linters and formatters. Over time, it grew into something more,
and also something less, than that. This is now a full `eslint` configuration
that I can import into other projects to help me out.

# Obligatory @todo section

- [x] Still getting an error message thrown by eslint when extending this...
- [x] Get rid of `validate-commit-msg`.
- [ ] Add more tests - ideally two or three for each defined rule.
  - *Mental note: Remember to test both the positive and negative for each rule*
- [ ] See if there is any way for the same package to export both Eslint and,
      for example, Tslint or Stylelint rules.

# License

Free for the world to use. My code is mainly just a wrapper for other people's
hard work.

(That means MIT Licence, if you *really* want it spelled out.)
