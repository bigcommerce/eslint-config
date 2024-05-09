const { join } = require('path');

const { getTSEslint } = require('./getEslint');

const fileName = join(__dirname, '__fixtures__', 'file_ts.ts');

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

  expect(result.usedDeprecatedRules).toMatchInlineSnapshot(`
    [
      {
        "replacedBy": [
          "@stylistic/ts/padding-line-between-statements",
        ],
        "ruleId": "@typescript-eslint/padding-line-between-statements",
      },
      {
        "replacedBy": [],
        "ruleId": "global-require",
      },
      {
        "replacedBy": [
          "padding-line-between-statements",
        ],
        "ruleId": "lines-around-directive",
      },
      {
        "replacedBy": [],
        "ruleId": "no-buffer-constructor",
      },
      {
        "replacedBy": [
          "no-object-constructor",
        ],
        "ruleId": "no-new-object",
      },
      {
        "replacedBy": [],
        "ruleId": "no-new-require",
      },
      {
        "replacedBy": [],
        "ruleId": "no-path-concat",
      },
      {
        "replacedBy": [],
        "ruleId": "no-return-await",
      },
      {
        "replacedBy": [],
        "ruleId": "spaced-comment",
      },
    ]
  `);
});
