# v2 - wip

# @bigcommerce/eslint-config

This package is a configuration preset for [ESLint](https://eslint.org/).


## Install

```sh
npm install --save-dev eslint prettier
npm install --save-dev @bigcommerce/eslint-config
```


## Usage

Add `@bigcommerce/eslint-config` to your project's ESLint configuration file. i.e.:

```js
// .eslintrc.js
require('@bigcommerce/eslint-config/patch');

module.exports = {
  extends: ['@bigcommerce/eslint-config'],
};
```

This config also runs prettier via eslint, add the following to your `package.json`
```json
{
  "prettier": "@bigcommerce/eslint-config/prettier"
}
```

If possible, try not to override the preset unless you have a special reason.

## Release

To release:

```sh
npm run release
```

Please refer to the documentation of [standard-version](https://github.com/conventional-changelog/standard-version) for more options.


## License

MIT
