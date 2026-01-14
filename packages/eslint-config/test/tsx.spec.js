import { join } from 'path';
import { fileURLToPath } from 'url';

import { getTSEslint } from './getEslint.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fileName = join(__dirname, '__fixtures__', 'file_tsx.tsx');

it('keeps rules stable', async () => {
  const eslint = await getTSEslint();
  const output = await eslint.calculateConfigForFile(fileName);

  expect(output).toMatchSnapshot();
});

it('checks that the rules are working', async () => {
  const eslint = await getTSEslint();
  const [result] = await eslint.lintFiles([fileName]);

  expect(result.messages).toEqual([]);
});

it('checks for rule deprecations', async () => {
  const eslint = await getTSEslint();
  const [result] = await eslint.lintFiles([fileName]);

  expect(result.usedDeprecatedRules).toMatchInlineSnapshot(`[]`);
});
