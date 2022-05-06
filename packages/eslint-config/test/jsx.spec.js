const { join } = require('path');

const { getEslint } = require('./getEslint');

it('keeps rules stable JSX', async () => {
  const output = await getEslint().calculateConfigForFile(join(__dirname, 'file.jsx'));

  expect(output).toMatchSnapshot();
});
