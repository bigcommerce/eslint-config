# Eslint configs / plugins monorepo

For installation guide and setup please visit each package's readme.

## Packages

[@bigcommerce/eslint-config](packages/eslint-config)

[@bigcommerce/eslint-plugin](packages/eslint-plugin)

## ESLint 9 Compatibility

This configuration now **requires ESLint 9** and uses the new [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files).

### Breaking Changes from v2.x

- **ESLint 9 Required**: This version requires ESLint ^9.0.0
- **Flat Config Format**: Configurations now use ESLint's flat config format
- **ES Modules**: All packages now use ES modules (`"type": "module"`)
- **No Patch Required**: The `require('@bigcommerce/eslint-config/patch')` is no longer needed (and won't work)
- **Import Instead of Require**: Use `import` instead of `require` in your config files

### Migration Guide

See the package README files for migration instructions from ESLint 8 to ESLint 9.
