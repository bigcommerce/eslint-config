const { join } = require('path');

const { getTSEslint } = require('./getEslint');

const fileName = join(__dirname, '__fixtures__', 'file_d.d.ts');

it('keeps rules stable', async () => {
  const output = await getTSEslint().calculateConfigForFile(fileName);

  expect(output).toMatchSnapshot();
});

it('checks that the rules are working', async () => {
  const [result] = await getTSEslint().lintFiles([fileName]);

  expect(result.messages).toEqual([]);
});

it('checks for rule deprecations', async () => {
  const [result] = await getTSEslint().lintFiles([fileName]);

  expect(result.usedDeprecatedRules).toMatchInlineSnapshot(`[]`);
});
