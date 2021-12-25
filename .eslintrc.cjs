/*
 *  ESLint run control for twitter-banner project.
 *  Created On 25 December 2021
 */

module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['prettier', 'simple-import-sort'],
    rules: {
        'prettier/prettier': 'error',
        'simple-import-sort/imports': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
    },
}
