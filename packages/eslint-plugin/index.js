const jsxShortCircuitConditionals = require('./rules/jsx-short-circuit-conditionals');

module.exports = {
  configs: {
    recommended: {
      parser: '@typescript-eslint/parser',
      parserOptions: { sourceType: 'module' },
      plugins: ['@bigcommerce'],
      rules: {
        '@bigcommerce/jsx-short-circuit-conditionals': 'error',
      },
    },
  },
  rules: {
    'jsx-short-circuit-conditionals': jsxShortCircuitConditionals,
  },
};
