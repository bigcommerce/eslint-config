/* eslint-disable sort-keys */
const { ESLintUtils } = require('@typescript-eslint/experimental-utils');
const tsutils = require('tsutils');
const ts = require('typescript');

module.exports = {
  name: 'jsx-short-circuit-conditionals',
  meta: {
    type: 'problem',
    fixable: true,
  },
  docs: {
    description: 'Disallows usage of string / number while short-circuiting jsx',
    suggestion: true,
    recommended: true,
  },
  create(context) {
    const parserServices = ESLintUtils.getParserServices(context);
    const typeChecker = parserServices.program.getTypeChecker();

    function checkNode(node) {
      const targetNode = node.left;
      const tsNode = parserServices.esTreeNodeToTSNodeMap.get(targetNode);
      const type = typeChecker.getTypeAtLocation(tsNode);
      const types = tsutils.unionTypeParts(type);

      const suggestions = [
        {
          desc: `Make it a boolean by casting it: Boolean(${targetNode.name})`,
          fix: (fixer) => {
            return [
              fixer.insertTextBefore(targetNode, `Boolean(`),
              fixer.insertTextAfter(targetNode, ')'),
            ];
          },
        },
      ];

      if (isString(types)) {
        if (types.length === 1) {
          suggestions.unshift({
            desc: `Make it a boolean by checking empty string: ${targetNode.name} !== ''`,
            fix: (fixer) => fixer.insertTextAfter(targetNode, " !== ''"),
          });
        }

        return context.report({
          node,
          message: 'Short-circuiting jsx with a string is not allowed.',
          suggest: suggestions,
        });
      }

      if (isNumber(types)) {
        if (types.length === 1) {
          suggestions.unshift({
            desc: `Make it a boolean by checking: ${targetNode.name} > 0`,
            fix: (fixer) => fixer.insertTextAfter(targetNode, ' > 0'),
          });
        }

        return context.report({
          node,
          message: 'Short-circuiting jsx with a number is not allowed.',
          suggest: suggestions,
        });
      }

      return null;
    }

    function isString(types) {
      return types.some((type) => tsutils.isTypeFlagSet(type, ts.TypeFlags.StringLike));
    }

    function isNumber(types) {
      return types.some((type) => tsutils.isTypeFlagSet(type, ts.TypeFlags.NumberLike));
    }

    return {
      ":matches(JSXElement, JSXFragment) > JSXExpressionContainer > LogicalExpression[operator='&&']": checkNode,
    };
  },
};
