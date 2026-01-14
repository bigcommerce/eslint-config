import { join } from 'path';
import { fileURLToPath } from 'url';

import eslintSerializer from './eslint-serializer.js';
import { getEslint } from './getEslint.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

expect.addSnapshotSerializer(eslintSerializer);

const fileName = join(__dirname, '__fixtures__', 'file_js.js');

it('keeps rules stable', async () => {
  const eslint = await getEslint();
  const output = await eslint.calculateConfigForFile(fileName);

  expect(output).toMatchSnapshot();
});

it('checks that the rules are working', async () => {
  const eslint = await getEslint();
  const [result] = await eslint.lintFiles([fileName]);

  expect(result.messages).toEqual([]);
});

it('checks for rule deprecations', async () => {
  const eslint = await getEslint();
  const [result] = await eslint.lintFiles([fileName]);

  expect(result.usedDeprecatedRules).toMatchInlineSnapshot(`[]`);
});
