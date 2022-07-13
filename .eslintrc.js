module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest', 'simple-import-sort', 'prettier'],
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/prefer-default-export': 0,
    'import/no-default-export': 2,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'class-methods-use-this': 'off',
  },
};
