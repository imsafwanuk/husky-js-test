module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: {
    browser: true,
    node: true,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": 0,
  },
};
