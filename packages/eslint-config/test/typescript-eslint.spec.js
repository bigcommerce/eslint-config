import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { ESLint } from 'eslint';
import { join } from 'path';
import { fileURLToPath } from 'url';

import eslintSerializer from './eslint-serializer.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

expect.addSnapshotSerializer(eslintSerializer);

async function getEslint() {
  return new ESLint({
    overrideConfigFile: true,
    baseConfig: [
      {
        files: ['**/*.ts'],
        languageOptions: {
          parser: tsParser,
          parserOptions: {
            project: join(process.cwd(), 'tsconfig.json'),
          },
        },
        plugins: {
          '@typescript-eslint': tseslint,
        },
        rules: {
          ...tseslint.configs.all.rules,
        },
      },
    ],
  });
}

describe('plugin:@typescript-eslint/all', () => {
  it('if this test fails, the plugin probably added new rules. Please check which rules were added/changed and add them to our config when appropriate', async () => {
    const eslint = await getEslint();
    const output = await eslint.calculateConfigForFile(join(__dirname, 'file.ts'));

    expect(output).toMatchSnapshot();
  });
});
