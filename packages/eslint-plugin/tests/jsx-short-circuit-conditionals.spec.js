import { RuleTester } from '@typescript-eslint/rule-tester';
import edentImport from 'endent';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import rule from '../rules/jsx-short-circuit-conditionals.js';

const endent = edentImport.default || edentImport;

const __dirname = dirname(fileURLToPath(import.meta.url));

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: '../tsconfig.json',
      ecmaFeatures: { jsx: true },
    },
  },
});

ruleTester.run('jsx-short-circuit-conditionals', rule, {
  valid: [
    {
      code: endent`
        const Test = () => (
          <div>
            {true && <span>test</span>}
          </div>
        );`,
    },
    {
      code: endent`
        const Test = () => (
          <div>
            {false && <span>test</span>}
          </div>
        );`,
    },
    {
      code: endent`
        const Test = () => (
          <div>
            {'string ternary' ? <span>test</span> : null}
          </div>
        );`,
    },
    {
      code: endent`
        const Test = () => (
          <div>
            {[] && <span>test</span>}
          </div>
        );`,
    },
    {
      code: endent`
        const Test = () => (
          <div>
            {{} && <span>test</span>}
          </div>
        );`,
    },
  ],
  invalid: [
    {
      code: endent`
        const name: string = 'Test Name';
        const Test = () => (
          <div>
            {name && <span>{name}</span>}
          </div>
        );`,
      errors: [
        {
          message: /Short-circuiting jsx with a string is not allowed./i,
          suggestions: [
            {
              desc: "Make it a boolean by checking empty string: name !== ''",
              output: endent`
                const name: string = 'Test Name';
                const Test = () => (
                  <div>
                    {name !== '' && <span>{name}</span>}
                  </div>
                );`,
            },
            {
              desc: 'Make it a boolean by casting it: Boolean(name)',
              output: endent`
                const name: string = 'Test Name';
                const Test = () => (
                  <div>
                    {Boolean(name) && <span>{name}</span>}
                  </div>
                );`,
            },
          ],
        },
      ],
    },
    {
      code: endent`
          const name: string | undefined;
          const Test = () => (
            <div>
              {name && <span>{name}</span>}
            </div>
          );`,
      errors: [
        {
          message: /Short-circuiting jsx with a string is not allowed./i,
          suggestions: [
            {
              desc: 'Make it a boolean by casting it: Boolean(name)',
              output: endent`
                  const name: string | undefined;
                  const Test = () => (
                    <div>
                      {Boolean(name) && <span>{name}</span>}
                    </div>
                  );`,
            },
          ],
        },
      ],
    },
    {
      code: endent`
          const count: number = 0;
          const Test = () => (
            <div>
              {count && <span>{count}</span>}
            </div>
          );`,
      errors: [
        {
          message: /Short-circuiting jsx with a number is not allowed./i,
          suggestions: [
            {
              desc: 'Make it a boolean by checking: count > 0',
              output: endent`
                  const count: number = 0;
                  const Test = () => (
                    <div>
                      {count > 0 && <span>{count}</span>}
                    </div>
                  );`,
            },
            {
              desc: 'Make it a boolean by casting it: Boolean(count)',
              output: endent`
                  const count: number = 0;
                  const Test = () => (
                    <div>
                      {Boolean(count) && <span>{count}</span>}
                    </div>
                  );`,
            },
          ],
        },
      ],
    },
    {
      code: endent`
          const count: number | undefined;
          const Test = () => (
            <div>
              {count && <span>{count}</span>}
            </div>
          );`,
      errors: [
        {
          message: /Short-circuiting jsx with a number is not allowed./i,
          suggestions: [
            {
              desc: 'Make it a boolean by casting it: Boolean(count)',
              output: endent`
                  const count: number | undefined;
                  const Test = () => (
                    <div>
                      {Boolean(count) && <span>{count}</span>}
                    </div>
                  );`,
            },
          ],
        },
      ],
    },
  ],
});
