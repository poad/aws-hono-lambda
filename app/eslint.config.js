// @ts-check

// @ts-ignore
import eslintImport from "eslint-plugin-import";
import solid from 'eslint-plugin-solid';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default tseslint.config(
  {
    plugins: {
      eslintImport,
    },
    rules: {
      "eslintImport/default": "error",
    },
  },
  {
    rules: {
      semi: ["error", "always"],
    },
  },
  {
    plugins: {
      solid,
    },
    files: ["./src/*.{js,ts,jsx,tsx}"],
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
  },
  {
    files: ["./src/*.{js,ts,jsx,tsx}"],
    // @ts-ignore
    rules: {
      ...prettier.rules,
    },
  },
);
