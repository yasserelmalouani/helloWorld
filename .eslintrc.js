module.exports = {
  extends: [
    'expo',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  plugins: ['prettier', '@react-native'],
  rules: {
    'prettier/prettier': 'error',
  },
};
