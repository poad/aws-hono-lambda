// @ts-check

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
// @ts-expect-error ignore type error
import eslintImport from "eslint-plugin-import";
import solid from 'eslint-plugin-solid';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '**/*.js',
      '**/*.jsx',
      '**/*.json',
      'vite.config.ts',
      '**/*.d.ts',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
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
    files: ['src/*.ts', 'src/**/*.ts'],
    plugins: {
      '@stylistic': stylistic,
      '@stylistic/ts': stylisticTs,
      '@stylistic/jsx': stylisticJsx,
    },
    rules: {
      '@stylistic/semi': 'error',
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/jsx/jsx-indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'always'],
      'quotes': ['error', 'single']
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
);
