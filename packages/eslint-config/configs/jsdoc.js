import jsdocPlugin from 'eslint-plugin-jsdoc';

export default [
  {
    plugins: {
      jsdoc: jsdocPlugin,
    },
    rules: {
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-param-names': 'error',
      'jsdoc/check-syntax': 'error',
      'jsdoc/check-tag-names': 'error',
      'jsdoc/implements-on-classes': 'error',
      'jsdoc/require-param-name': 'error',
      'jsdoc/require-param-type': 'error',
      'jsdoc/require-returns-check': 'error',
      'jsdoc/require-returns-type': 'error',
      'valid-jsdoc': 'off',
    },
  },
];
