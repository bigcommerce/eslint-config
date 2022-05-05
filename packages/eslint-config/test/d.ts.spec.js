const { join } = require('path');

const { getEslint } = require('./getEslint');

it('keeps rules stable *.d.ts', async () => {
  const output = await getEslint().calculateConfigForFile(join(__dirname, 'file.d.ts'));

  expect(output).toMatchSnapshot();
});
