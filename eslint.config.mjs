import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

const tsRoot = {
  files: ['packages/*/src/**/*.ts', 'packages/*/src/**/*.tsx'],
  languageOptions: {
    parserOptions: {
      project: ['./packages/*/tsconfig.json'],
      tsconfigRootDir: new URL('.', import.meta.url).pathname,
    },
  },
  plugins: { prettier: prettierPlugin },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
}

const tsTests = {
  files: ['packages/*/tests/**/*.ts'],
  languageOptions: {
    parserOptions: {
      project: ['./packages/*/tsconfig.test.json'],
      tsconfigRootDir: new URL('.', import.meta.url).pathname,
    },
  },
  plugins: { prettier: prettierPlugin },
  rules: { 'prettier/prettier': 'error' },
}

const configFiles = {
  files: ['**/*.config.ts', '**/*.config.mts', '**/*.config.cts', '**/vitest.config.ts'],
  languageOptions: {
    parserOptions: { project: null },
  },
}

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  tsRoot,
  tsTests,
  configFiles,
  prettier
)
