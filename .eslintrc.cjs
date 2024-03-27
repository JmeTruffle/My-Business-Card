module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '*.cjs', '*.d.ts', '*.mjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'simple-import-sort', 'unused-imports'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // import
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/extensions': 'off',
    'import/no-amd': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: false,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-self-import': 'error',
    'import/prefer-default-export': 'off',

    // typescript
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/lines-between-class-members': ['error', 'always'],
    '@typescript-eslint/comma-spacing': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/keyword-spacing': 'error',

    //react-hooks
    'react-hooks/exhaustive-deps': 'off',

    // react
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: {
          single: 3,
          multi: 1,
        },
      },
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        reservedFirst: true,
        noSortAlphabetically: true,
      },
    ],
    'react/jsx-indent': [
      'error',
      2,
      {
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'react/jsx-one-expression-per-line': [
      'warn',
      {
        allow: 'single-child',
      },
    ],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-no-useless-fragment': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    'react/display-name': 'off',

    // other
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreStrings: true,
        ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\(',
        ignoreUrls: true,
      },
    ],
    'newline-before-return': 'warn',
    'no-console': ['warn', { allow: ['error'] }],
    semi: ['error', 'never'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-trailing-spaces': 'error',
    'object-shorthand': 'error',
    'no-multi-spaces': 'error',
    'no-useless-rename': 'error',
    'eol-last': 'error',
    'arrow-spacing': 'error',
    'dot-notation': 'error',
  },
}
