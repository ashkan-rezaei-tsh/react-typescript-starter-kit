module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    parser: '@typescript-eslint/parser',
    extends: [
        "eslint:recommended",
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    'plugins': [
        'simple-import-sort',
        'import',
        "react",
        "@typescript-eslint"
    ],
    rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
    },

    settings: {
        react: {
            version: 'detect',
        },
    },
};