module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "airbnb", // or airbnb-base
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended", // 설치 한경우
    "plugin:import/errors", // 설치한 경우
    "plugin:import/warnings", // 설치한 경우
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "linebreak-style": true,
    "import/prefer-default-export": true,
    "import/extensions": true,
    "no-use-before-define": true,
    "import/no-unresolved": true,
    "react/react-in-jsx-scope": true,
    "import/no-extraneous-dependencies": true, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    "no-shadow": true,
    "react/prop-types": true,
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "jsx-a11y/no-noninteractive-element-interactions": true,
    "@typescript-eslint/explicit-module-boundary-types": true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
