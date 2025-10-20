import jestDomPlugin from 'eslint-plugin-jest-dom';

export default [
  {
    files: ['**/*.spec.*', '**/spec.*', 'jest-setup.*'],
    plugins: {
      'jest-dom': jestDomPlugin,
    },
    rules: {
      ...jestDomPlugin.configs.recommended.rules,
    },
  },
];
