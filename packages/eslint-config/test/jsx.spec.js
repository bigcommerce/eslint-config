const { join } = require('path');

const { getEslint } = require('./getEslint');

const fileName = join(__dirname, '__fixtures__', 'file_jsx.jsx');

it('keeps rules stable', async () => {
  const output = await getEslint().calculateConfigForFile(fileName);

  expect(output).toMatchSnapshot();
});

it('checks that the rules are working', async () => {
  const [result] = await getEslint().lintFiles([fileName]);

  expect(result.messages).toEqual([]);
});

it('checks for rule deprecations', async () => {
  const [result] = await getEslint().lintFiles([fileName]);

  expect(result.usedDeprecatedRules).toMatchInlineSnapshot(`[]`);
});
