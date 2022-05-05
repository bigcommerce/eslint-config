const { join } = require('path');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:@bigcommerce/recommended',
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
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/default-param-last': ['error'],
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
      {
        format: null,
        modifiers: ['requiresQuotes'],
        selector: ['objectLiteralProperty', 'typeProperty'],
      },
    ],
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
      },
    ],
    '@typescript-eslint/no-shadow': ['error', { hoist: 'all' }],
    '@typescript-eslint/no-throw-literal': ['error'],
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
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
    '@typescript-eslint/padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: ['block', 'block-like', 'class', 'const', 'let', 'var', 'interface'],
        prev: '*',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: ['block', 'block-like', 'class', 'const', 'let', 'var', 'interface'],
      },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        next: ['case'],
        prev: ['case'],
      },
    ],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    // The following rules are off mostly due to incompatibilities with their
    // @typescript-eslint version
    camelcase: 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'default-param-last': 'off',
    'import/named': 'off',
    'no-duplicate-imports': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'padding-line-between-statements': 'off',
    'sort-keys': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  // We add an additional `/` marker for .d.ts files to allow for triple-slash directives
  // eg: /// <reference path="..." />
  // eslint-disable-next-line sort-keys
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        'spaced-comment': [
          'warn',
          'always',
          {
            block: { balanced: true, exceptions: ['-', '+'], markers: ['=', '!'] },
            line: { exceptions: ['-', '+'], markers: ['=', '!', '/'] },
          },
        ],
      },
    },
  ],
};
