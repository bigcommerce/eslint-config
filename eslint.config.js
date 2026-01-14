import globals from 'globals';

import config from './packages/eslint-config/index.js';

const baseConfig = await config;

export default [
  {
    ignores: ['**/node_modules/**', '**/__snapshots__/**', '**/dist/**', '**/build/**'],
  },
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      'import/core-modules': [
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        '@typescript-eslint/rule-tester',
      ],
    },
    rules: {
      // Allow .js extensions in ES module imports
      'import/extensions': ['error', 'ignorePackages'],
      // Allow __dirname in ES modules
      'no-underscore-dangle': ['error', { allow: ['__dirname', '__filename'] }],
      // Allow dynamic imports without webpack chunkname
      'import/dynamic-import-chunkname': 'off',
    },
  },
];
