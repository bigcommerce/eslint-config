import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import { readFileSync } from 'fs';
import path from 'path';

import defaultPrettierConfig from '../prettier.config.js';

function getRules() {
  const pkgPath = path.resolve(process.cwd(), 'package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));

  if (pkg.prettier !== '@bigcommerce/eslint-config/prettier') {
    throw new Error(`
      =================================================================================
      Please add "prettier": "@bigcommerce/eslint-config/prettier" to your package.json
      =================================================================================
    `);
  }

  return {
    curly: ['error', 'all'],
    'prettier/prettier': ['warn', defaultPrettierConfig, { usePrettierrc: false }],
  };
}

export default [
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      ...getRules(),
    },
  },
];
