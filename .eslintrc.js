module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    extends: 'prettier',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        'no-var': 'error',
        'linebreak-style': ['error', 'unix'],
        quotes: ['off', 'single'],
        semi: ['error', 'always'],
        'no-console': 0,
        'no-cond-assign': 0,
        'no-unused-vars': 1,
        'no-extra-semi': 'warn'
    }
};
