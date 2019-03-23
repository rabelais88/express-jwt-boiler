module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: "airbnb-base",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "linebreak-style": "off",
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'off',
    'no-param-reassign': 'warn',
    'no-unused-vars': 'warn'
  }
};
