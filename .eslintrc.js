module.exports = {
    env: {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parser: "babel-eslint",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    plugins: [
        "react",
        "import"
    ],
    rules: {
        "indent": ["off", 2],
        "react/display-name": ["off"],
        "react/jsx-indent": ["error", 2],
        "comma-dangle": ["error", "never"],
        "no-console": ["off"],
        "import/no-unresolved": ["off"],
        "react/no-find-dom-node": ["off"],
        "no-empty": ["off"],
        'no-unused-vars': 'off', // Turn off the no-unused-vars rule
        'no-undef': 'off'       // Turn off the no-undef rule
        // "react/no-unescaped-entities": 0
    },
    settings: {
        "react": {
            "version": "detect"
        }
    }
};

