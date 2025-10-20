# @bigcommerce/eslint-config

This package is a configuration preset for [ESLint](https://eslint.org/) using the new flat config format (ESLint 9+).

## Install

```sh
npm install --save-dev eslint@^9.0.0 prettier
npm install --save-dev @bigcommerce/eslint-config
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
// eslint.config.js
import config from '@bigcommerce/eslint-config';

export default config;
```

This config also runs prettier via eslint, add the following to your `package.json`:

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

## Usage with Next.js

For Next.js projects, you can combine this config with Next.js's built-in ESLint configuration:

```js
// eslint.config.js
import config from '@bigcommerce/eslint-config';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...config,
  ...compat.extends('next/core-web-vitals'),
];
```

## Migration from ESLint 8

### Breaking Changes

- **ESLint 9 Required**: This version requires ESLint ^9.0.0
- **Flat Config Format**: Use `eslint.config.js` instead of `.eslintrc.js`
- **ES Modules**: Configuration must use ES module syntax
- **No Patch Required**: Remove `require('@bigcommerce/eslint-config/patch')`

### Migration Steps

1. **Update ESLint**: `npm install --save-dev eslint@^9.0.0`
2. **Update this package**: `npm install --save-dev @bigcommerce/eslint-config@latest`
3. **Delete old config**: Remove `.eslintrc.js` or `.eslintrc.json`
4. **Create new config**: Create `eslint.config.js` with the usage example above
5. **Remove patch import**: Delete any `require('@bigcommerce/eslint-config/patch')` calls

## Release

Please refer to the documentation of [lerna](https://github.com/lerna/lerna) for release options.

## License

MIT
