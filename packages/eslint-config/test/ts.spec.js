const { join } = require('path');

const { getEslint } = require('./getEslint');

it('keeps rules stable TS', async () => {
  const output = await getEslint().calculateConfigForFile(join(__dirname, 'file.ts'));

  expect(output).toMatchSnapshot();
});
