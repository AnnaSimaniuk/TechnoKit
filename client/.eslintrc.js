module.exports = {
  root: true,
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
  ],
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "prettier"],
  rules: {
    "import/no-extraneous-dependencies": 0,
    "no-param-reassign": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "react/jsx-uses-react": 0,
    "react/jsx-props-no-spreading": 0,
    "no-shadow": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-no-useless-fragment": 0,
    "no-underscore-dangle": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "react/no-unescaped-entities": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "ban-ts-comment": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/require-default-props": 0,
    "react/jsx-curly-brace-presence": 0,
  },
};
