module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest': true
  },
  'parser': '@typescript-eslint/parser',
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    'prettier/prettier': [
      'error',
      {
        'printWidth': 120,
        'singleQuote': true,
        'trailingComma': 'es5'
      }
    ]
  },
};
