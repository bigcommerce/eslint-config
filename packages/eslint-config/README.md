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

Stylistic rules are considered `warnings` for better developer experience, however, we recommend
running CI with:
```
eslint --max-warnings 0
```

## Release

Please refer to the documentation of [lerna](https://github.com/lerna/lerna) for release options.


## License

MIT
