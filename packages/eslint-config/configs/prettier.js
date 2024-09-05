const path = require('path');

const defaultConfig = require('../prettier.config');

function getRules() {
  const pkgPath = path.resolve(process.cwd(), 'package.json');
  // eslint-disable-next-line import/no-dynamic-require
  const pkg = require(pkgPath);

  if (pkg.prettier !== '@bigcommerce/eslint-config/prettier') {
    throw new Error(`
      =================================================================================
      Please add "prettier": "@bigcommerce/eslint-config/prettier" to your package.json
      =================================================================================
    `);
  }

  return {
    curly: ['error', 'all'],
    'prettier/prettier': ['warn', defaultConfig, { usePrettierrc: false }],
  };
}

module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: getRules(),
};
