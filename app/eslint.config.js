import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintImport from "eslint-plugin-import";
import solid from 'eslint-plugin-solid';
import tseslint, { parser } from 'typescript-eslint';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(
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
    files: ["./src/*.{js,ts,jsx,tsx}"],
    extends: [
      eslintImport.flatConfigs.recommended,
      eslintImport.flatConfigs.typescript,
    ],
    plugins: {
      '@stylistic': stylistic,
      solid,
    },
    languageOptions: {
      parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
    'settings': {
      'import/resolver': {
        // You will also need to install and configure the TypeScript resolver
        // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
        'typescript': true,
        'node': true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      '@stylistic/semi': 'error',
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      "import/default": "error",
      "mport/namespace": "off"
    },
  },
);
