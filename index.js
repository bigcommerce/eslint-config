const { hasPackage } = require('./utils');

module.exports = {
  root: true,
  extends: ['./configs/base', './configs/jsdoc', './configs/prettier'],
  overrides: [
    {
      files: ['**/*.spec.*', '**/spec.*', 'jest-setup.*'],
      extends: './configs/jest',
    },
    hasPackage('react') && {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
      extends: './configs/react',
    },
    hasPackage('typescript') && {
      files: ['**/*.ts', '**/*.tsx'],
      extends: './configs/typescript',
    },
    {
      files: '*.js',
      env: {
        es6: true,
        node: true,
      },
    },
  ].filter(Boolean),
};
