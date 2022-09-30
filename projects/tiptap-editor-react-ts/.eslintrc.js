
module.exports = {
  extends: [ '../../config/eslint/react-ts.config' ],
  rules: {
    '@typescript-eslint/no-var-requires': [ 0 ],
    '@typescript-eslint/no-unused-vars': [ 0 ],
    '@typescript-eslint/no-explicit-any': [ 0 ],
    complexity: [ 'error', { max: 50 } ],
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
  ignorePatterns: [ 'src/**/*.d.ts' ],
};

