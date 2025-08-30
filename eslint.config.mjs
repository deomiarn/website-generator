// eslint.config.mjs (Root, Flat Config, ESLint v9)
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
      },
    },
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  prettier
)
