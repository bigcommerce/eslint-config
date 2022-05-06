const { join } = require('path');

const { getEslint } = require('./getEslint');

it('keeps rules stable TSX', async () => {
  const output = await getEslint().calculateConfigForFile(join(__dirname, 'file.tsx'));

  expect(output).toMatchSnapshot();
});
