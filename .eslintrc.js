module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        "@typescript-eslint/no-inferrable-types": "off",
        // disable as it leads to false positives in class declarations
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off"
    }
};
