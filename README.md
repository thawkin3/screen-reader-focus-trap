# Screen Reader Focus Trap

[![npm](https://img.shields.io/npm/v/screen-reader-focus-trap)](https://www.npmjs.com/package/screen-reader-focus-trap)
[![Build Status](https://travis-ci.com/thawkin3/screen-reader-focus-trap.svg?branch=master)](https://travis-ci.com/thawkin3/screen-reader-focus-trap)
[![Codecov](https://img.shields.io/codecov/c/github/thawkin3/screen-reader-focus-trap)](https://codecov.io/gh/thawkin3/screen-reader-focus-trap)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/screen-reader-focus-trap)](https://bundlephobia.com/result?p=screen-reader-focus-trap)
[![npm](https://img.shields.io/npm/dt/screen-reader-focus-trap)](https://www.npmjs.com/package/screen-reader-focus-trap)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A focus trap that works for keyboard users and screen reader users.

## Purpose

This project is inspired by the [focus-trap](https://github.com/davidtheclark/focus-trap) npm package. While that package provides an excellent focus trap for keyboard users, it does not trap the focus appropriately for screen reader users. This project is meant to handle both scenarios.

This project is published on npm as [screen-reader-focus-trap](https://www.npmjs.com/package/screen-reader-focus-trap).

## Demos

Demos can be found at: http://tylerhawkins.info/screen-reader-focus-trap/storybook-dist

## Running the Demos Locally

To run the Storybook examples locally on your own machine, follow these steps:

1. Clone or download this repo
2. Install the needed dependencies using `yarn install`
3. Start up the Storybook app using `yarn storybook`

That's it! The Storybook app should start running at your localhost on port 9009,
and the browser tab should be opened for you automatically.

## Using the npm Package in Your App

To use this focus trap in your own app, follow these steps:

1. Install the npm package using `yarn add screen-reader-focus-trap`
   (or `npm install screen-reader-focus-trap`)
2. Import any of the exported modules like `import { FocusTrap } from 'screen-reader-focus-trap'`
3. At this point, you're good to instantiate these classes
   (ex. `const myFocusTrap = new FocusTrap()`) and use their methods in your app.

## Yarn Commands

For a complete list, see [package.json](package.json).

- `yarn install`: Installs dependencies
- `yarn storybook`: Starts up the Storybook app locally so you can view the demos and examples
- `yarn build-storybook`: Builds a static site out of the Storybook app (this is what is hosted here:
  http://tylerhawkins.info/screen-reader-focus-trap/storybook-dist)
- `yarn build`: Generates the minified build from the source code using [Rollup](https://rollupjs.org/)
- `yarn test`: Runs all tests
- `yarn test:coverage`: Runs all tests and includes coverage report
- `yarn test:watch`: Runs tests in watch mode
- `yarn prettier`: Formats the code so you don't have to worry about white space and other
  formatting during development
- `yarn prettier-watch`: Runs prettier in watch mode
- `yarn eslint`: Runs eslint to lint JS files
- `yarn stylelint`: Lints CSS files and auto-fixes issues where possible
- `yarn cz`: Uses [commitizen](https://github.com/commitizen/cz-cli)
  to walk you through some steps via the cli and then
  commits your code using a formatted commit message that
  it generates
- `yarn release`: Bumps the package version and generates the changelog using
  [standard-version](https://github.com/conventional-changelog/standard-version)

## Contributing

Please see the [Contributing Guidelines](CONTRIBUTING.md).

## Code of Conduct

The [Code of Conduct](CODE_OF_CONDUCT.md) can be found here.
