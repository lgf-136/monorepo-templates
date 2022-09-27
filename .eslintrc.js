const path = require('path');
module.exports = {
  extends: [ path.resolve(__dirname, './config/eslint/react-ts.config') ],

  rules: {
    '@typescript-eslint/no-non-null-assertion': 0,
    'func-style': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-var-requires': [ 0 ],
    complexity: [ 'error', { max: 20 } ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 1,
        maxEOF: 1,
      },
    ],
  },

  settings: {},

  plugins: [],

  overrides: [],
  // ignorePatterns: [ 'src/**/*.d.ts' ],
};

