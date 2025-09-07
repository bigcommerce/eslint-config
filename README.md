# Eslint configs / plugins monorepo

For installation guide and setup please visit each package's readme.

## Packages

[@bigcommerce/eslint-config](packages/eslint-config)

[@bigcommerce/eslint-plugin](packages/eslint-plugin)

## ESlint 9 Compatibility
Due to a [significant change](https://eslint.org/blog/2023/10/flat-config-rollout-plans/) in ESLint 9, this configuration set currently **requires** ESLint 8. In order to avoid peer dependency resolution issues, you need to also install `eslint` in your project, using the same version range as that found in [package.json](./package.json).
