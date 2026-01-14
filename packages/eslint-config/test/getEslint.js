/* eslint-env node, jest */
import { ESLint } from 'eslint';
import { join } from 'path';
import { fileURLToPath } from 'url';

import eslintConfig from '../index.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

async function getEslint(additionalConfig = []) {
  // Wait for the config promise to resolve
  const baseConfig = await eslintConfig;

  return new ESLint({
    overrideConfigFile: true, // Don't look for config files
    baseConfig: [...baseConfig, ...additionalConfig],
  });
}

async function getTSEslint() {
  return getEslint([
    {
      languageOptions: {
        parserOptions: {
          project: join(__dirname, '__fixtures__', 'tsconfig.json'),
        },
      },
    },
  ]);
}

export { getEslint, getTSEslint };
