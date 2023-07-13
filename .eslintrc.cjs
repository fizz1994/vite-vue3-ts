module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    './.eslintrc-auto-import.json',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    'no-extend-native': 'off',
    'no-debugger': 'off',
    'no-empty': 'off',
    'no-prototype-builtins': 'off',
    'no-console': 'error',
    'no-irregular-whitespace': 'off'
  }
};
