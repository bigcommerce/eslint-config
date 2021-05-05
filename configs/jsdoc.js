module.exports = {
  plugins: ['jsdoc'],
  rules: {
    // This rule is now deprecated.
    // The recommendation is to use the eslint-plugin-jsdoc
    'valid-jsdoc': 'off',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-type': 'error',
  },
};
