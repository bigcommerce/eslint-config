const {
  configs: { all },
} = require('@typescript-eslint/eslint-plugin');
const pickBy = require('lodash.pickby');
const { join } = require('path');

const offRules = pickBy(all.rules, (v) => v === 'off');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: join(process.cwd(), 'tsconfig.json'),
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // This disables every rule that is disabled by the typescript-eslint team.
    ...offRules,
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'never',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'PascalCase'],
        selector: 'default',
      },
      {
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        selector: 'variable',
      },
      {
        format: ['camelCase', 'UPPER_CASE'],
        selector: 'variable',
        types: ['boolean', 'string', 'number', 'array'],
      },
      {
        format: ['camelCase'],
        selector: 'property',
      },
      {
        format: ['camelCase'],
        selector: 'parameterProperty',
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
      {
        format: ['PascalCase', 'UPPER_CASE'],
        selector: 'enumMember',
      },
      {
        format: ['camelCase'],
        selector: 'parameter',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        modifiers: ['unused'],
        selector: 'parameter',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
      },
    ],
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowNumber: false,
        allowString: false,
      },
    ],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    'consistent-return': 'off',
    // import/named does not behave properly with Typescript imports
    'import/named': 'off',
    'no-throw-literal': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'sort-keys': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
