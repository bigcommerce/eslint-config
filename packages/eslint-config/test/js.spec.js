const { join } = require('path');

const { getEslint } = require('./getEslint');

it('keeps rules stable JS', async () => {
  const output = await getEslint().calculateConfigForFile(join(__dirname, 'file.js'));

  expect(output).toMatchSnapshot();
});
