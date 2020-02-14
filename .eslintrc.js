module.exports = {
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true
        }
    },

    "env": {
        "node": true,
        "es6": true,
        "mocha": true
    },

    "plugins": [
        "security"
    ],

    "extends": ["eslint:recommended", "plugin:security/recommended"],

    "rules": {
        "comma-dangle": ["error", "never"],
        "curly": ["error", "all"],
        "indent": ["error", 4],
        "rest-spread-spacing": ["error", "never"],
        "semi": ["error", "never"],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
        "complexity": ["error", 7]
    }
}
