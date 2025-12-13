// @ts-check

import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginImport from 'eslint-plugin-import';
import tseslint, { parser } from 'typescript-eslint';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(
  {
    ignores: [
      '**/*.d.ts',
      '*.{js,jsx}',
      'src/tsconfig.json',
      'src/stories',
      '**/*.css',
      'node_modules/**/*',
      'out',
      'cdk.out',
      'dist',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: ['./{bin,lib,lambda,function}/**/*.ts'],
    languageOptions: {
      parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig-test.json'],
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
    plugins: {
      '@stylistic': stylistic,
    },
    extends: [
      eslintPluginImport.flatConfigs.recommended,
      eslintPluginImport.flatConfigs.typescript,
    ],
    rules: {
      '@stylistic/semi': 'error',
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
    },
  },
);
