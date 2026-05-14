import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { importX, createNodeResolver } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
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
    languageOptions: {
      parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      'import-x': importX,
      '@stylistic': stylistic,
      solid,
    },
    extends: [
      'import-x/flat/recommended',
    ],
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
        }),
        createNodeResolver(),
      ],
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

      'import-x/order': [
        'error',
        {
          'groups': [
            // Imports of builtins are first
            'builtin',
            // Then sibling and parent imports. They can be mingled together
            ['sibling', 'parent'],
            // Then index file imports
            'index',
            // Then any arcane TypeScript imports
            'object',
            // Then the omitted imports: internal, external, type, unknown
          ],
        },
      ],
    },
  },
);
