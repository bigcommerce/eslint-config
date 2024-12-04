const { hasPackage } = require('./utils');

module.exports = {
  extends: ['./configs/base', './configs/jsdoc', './configs/prettier'],
  overrides: [
    hasPackage('jest') && {
      extends: './configs/jest',
      files: ['**/*.spec.*', '**/spec.*', 'jest-setup.*'],
    },
    hasPackage('@testing-library/jest-dom') && {
      extends: './configs/jest-dom',
      files: ['**/*.spec.*', '**/spec.*', 'jest-setup.*'],
    },
    hasPackage('@testing-library/react') && {
      extends: './configs/testing-library',
      files: ['**/*.spec.*', '**/spec.*', 'jest-setup.*'],
    },
    hasPackage('react') && {
      extends: './configs/react',
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    },
    hasPackage('typescript') && {
      extends: './configs/typescript',
      files: ['**/*.ts', '**/*.tsx'],
    },
    {
      env: {
        es6: true,
        node: true,
      },
      files: '*.js',
    },
  ].filter(Boolean),
  root: true,
};
