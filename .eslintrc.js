module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'import', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'jsx-a11y/img-redundant-alt': 0,
    'jsx-a11y/media-has-caption': 0,
    'react/prop-types': 0,
    'react/no-render-return-value': 0,
    'import/order': ['error'],
    'import/no-named-as-default': 0,
    semi: [2, 'always'],
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
