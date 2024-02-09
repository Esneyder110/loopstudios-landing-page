module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs, ts, tsx, jsx}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    ignorePatterns: [
        ".eslintrc.cjs",
        "vite.config.ts",
        "postcss.config.js"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,        
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/react-in-jsx-scope': 0,
        
    },
}
