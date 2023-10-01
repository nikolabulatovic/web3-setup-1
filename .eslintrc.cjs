module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:storybook/recommended',
  ],
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import'],
  root: true,
  ignorePatterns: [
    '.eslintrc.cjs',
    'jest.config.mjs',
    'jest.setup.js',
    'next.config.js',
    'postcss.config.js',
    'tailwind.config.js',
    'webpack.config.js',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
    eqeqeq: 'error',
    'import/order': [
      'error',
      {
        groups: [['external'], ['index', 'sibling', 'parent', 'internal']],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prefer-destructuring': 'error',
    strict: 'error',
  },
};
