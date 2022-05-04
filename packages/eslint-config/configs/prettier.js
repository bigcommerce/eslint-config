const { basename, dirname } = require('path');
const { resolveConfigFile } = require('prettier');

const defaultConfig = require('../prettier.config');

function getRules() {
  const prettierConfigFile = resolveConfigFile.sync(process.cwd());
  const hasLocalConfig = prettierConfigFile ? dirname(prettierConfigFile) === process.cwd() : false;

  if (!hasLocalConfig) {
    throw new Error(`
      =================================================================================
      Please add "prettier": "@bigcommerce/eslint-config/prettier" to your package.json
      =================================================================================
    `);
  }

  if (basename(prettierConfigFile) !== 'package.json') {
    throw new Error(`
      =================================================================================
      Please add "prettier": "@bigcommerce/eslint-config/prettier" to your package.json
      and remove any other prettier config file
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
