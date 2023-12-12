module.exports = {
  root: true,
  env: {browser: true, es2020: true, jest: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "airbnb",
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "react", "jest"],
  rules: {
    "no-underscore-dangle": 0,
    'react-refresh/only-export-components': [
      'warn',

      {allowConstantExport: true},
    ],
  },
  parseOptions: {
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": ["react", "jest"],
    "rules": {
      "no-underscore-dangle": 0,
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "always",
          "jsx": "always"
        }
      ]

    }
  }
}
