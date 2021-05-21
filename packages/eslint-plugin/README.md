# @bigcommerce/eslint-plugin

This plugin contains a few custom eslint rules we use at BigCommerce. It's enabled by default with `@bigcommerce/eslint-config`, if you are extending our config, there is no need to do the following install process.

## Install

```sh
npm install --save-dev @bigcommerce/eslint-plugin
```

## Usage

Add `plugin:@bigcommerce/recommended` to your project's ESLint configuration file. i.e.:

```js
// .eslintrc.js
module.exports = {
  extends: ['plugin:@bigcommerce/recommended'],
};
```

### Rules

**@bigcommerce/jsx-short-circuit-conditionals:**

Disallows usage of string / number while short-circuiting jsx