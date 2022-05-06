const { join } = require('path');

const { getEslint } = require('./getEslint');

it('keeps rules stable *.spec.*', async () => {
  const output = await getEslint().calculateConfigForFile(join(__dirname, 'spec.js'));

  expect(output).toMatchSnapshot();
});
