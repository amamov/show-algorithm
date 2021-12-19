//* [Linting ESLint] https://eslint.org/

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "next",
    "plugin:@typescript-eslint/recommended" /* https://github.com/typescript-eslint/typescript-eslint#readme */,
    "prettier",
  ],
  //   {
  //     "extends": "next/core-web-vitals"
  //   }
  ignorePatterns: [
    "next.config.js",
    ".eslintrc.js",
    ".next",
    "dist/",
    "node_modules/",
    "cypress/",
  ],
  rules: {
    "no-console": "warn",
    "@typescript-eslint/interface-name-prefix":
      "off" /* https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/interface-name-prefix.md */,
    "@typescript-eslint/explicit-function-return-type":
      "off" /* https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md */,
    "@typescript-eslint/explicit-module-boundary-types":
      "off" /* https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md */,
    "@typescript-eslint/no-explicit-any": 1 /* https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md */,
    "@next/next/no-img-element": "off",
  },
};
