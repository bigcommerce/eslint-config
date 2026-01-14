import testingLibraryPlugin from 'eslint-plugin-testing-library';

export default [
  {
    files: ['**/*.spec.*', '**/spec.*', 'jest-setup.*'],
    plugins: {
      'testing-library': testingLibraryPlugin,
    },
    rules: {
      ...testingLibraryPlugin.configs.react.rules,
      'testing-library/no-render-in-lifecycle': 'off',
    },
  },
];
