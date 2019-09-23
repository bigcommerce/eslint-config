# @bigcommerce/eslint-config


This package is a configuration preset for [ESLint](https://eslint.org/). At the moment it contains a set of rules applied to React projects at BigCommerce.


## Install

```sh
npm install --save-dev eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
npm install --save-dev @bigcommerce/eslint-config
```


## Usage

Add `@bigcommerce/eslint-config` to your project's ESLint configuration file. i.e.:

```json
{
    "extends": "@bigcommerce/eslint-config"
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
