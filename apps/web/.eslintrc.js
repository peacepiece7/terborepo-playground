/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/config-eslint/storybook.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
