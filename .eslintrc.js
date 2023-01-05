module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb', // or airbnb-base
    'plugin:react/recommended',
    // 'plugin:jsx-a11y/recommended', // 설치 한경우
    // 'plugin:import/errors', // 설치한 경우
    // 'plugin:import/warnings', // 설치한 경우
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'linebreak-style': 1,
    'import/prefer-default-export': 1,
    'import/extensions': 1,
    'no-use-before-define': 1,
    'import/no-unresolved': 1,
    'react/react-in-jsx-scope': 1,
    'import/no-extraneous-dependencies': 1, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-shadow': 1,
    'react/prop-types': 1,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    '@typescript-eslint/explicit-module-boundary-types': 1,
  },
  // quotes: [2, 'single'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
