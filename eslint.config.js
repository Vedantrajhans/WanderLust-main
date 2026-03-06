// eslint.config.js
import js from "@eslint/js";
import nodePlugin from "eslint-plugin-node";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    plugins: {
      node: nodePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "prettier/prettier": "error",
      "node/no-missing-require": "error",
    },
  },
  prettierConfig,
];
