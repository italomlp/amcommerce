module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-unused-expressions': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/camelcase': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    'no-console': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-param-reassign': [
      'error',
      { ignorePropertyModificationsForRegex: ['draft'] },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      { declaration: false, assignment: false },
    ],
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
