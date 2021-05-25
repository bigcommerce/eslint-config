module.exports = {
  extends: ['@bigcommerce/eslint-config'],
  ignorePatterns: ['packages/eslint-plugin/tests/file.tsx'],
  rules: {
    'sort-keys': 'error',
  },
};
