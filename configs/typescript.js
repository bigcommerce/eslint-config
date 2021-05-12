const { join } = require('path');

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
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
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
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
};
