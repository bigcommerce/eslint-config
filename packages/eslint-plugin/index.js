import tsParser from '@typescript-eslint/parser';

import jsxShortCircuitConditionals from './rules/jsx-short-circuit-conditionals.js';

const plugin = {
  configs: {},
  rules: {
    'jsx-short-circuit-conditionals': jsxShortCircuitConditionals,
  },
};

// Add recommended config in flat config format
plugin.configs.recommended = [
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
      },
    },
    plugins: {
      '@bigcommerce': plugin,
    },
    rules: {
      '@bigcommerce/jsx-short-circuit-conditionals': 'error',
    },
  },
];

export default plugin;
