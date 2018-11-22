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

> _And somehow, the folder has blossomed into 114 megabytes - when counting the
> `node_modules` folder. ... It feels a little overkill when you consider the 
> rules-file itself is just 25 kilobytes.... Aaaaanyway._

# Obligatory @todo section

- [x] Still getting an error message thrown by eslint when extending this...
- [x] Get rid of `validate-commit-msg`.
- [ ] Work out if Semantic Versioning library is worth it.
- [ ] Add more tests - ideally a handfull per defined rule.
- [ ] Build similar package around PHP-CS-Fixer.

# License

Free for the world to use. There's **literally** none of my own code in this 
package, it's all just configuration files for other packages and its plugins.

(That means standard MIT Licence, if you *really* want it spelled out.)
