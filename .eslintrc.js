module.exports = {
  extends: [
    'expo',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  plugins: ['prettier', '@react-native', 'unused-imports'],
  rules: {
    'prettier/prettier': 'error',
    'react-native/sort-styles': 'off',
    'react-native/no-color-literals': 'off',
    'unused-imports/no-unused-imports': 'error', // Rimuove gli import non utilizzati
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native-gesture-handler',
          },
        ],
      },
    ],
  },
};
