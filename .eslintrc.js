module.exports = {
  extends: [
    'expo',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  plugins: [
    'prettier',
    '@react-native',
    //  Assicurarsi di aggiungere il plugin unused-imports {package.json -> devDependencies}
    'unused-imports',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react-native/sort-styles': 'off', // Rimuove l'ordinamento degli stili
    'react-native/no-color-literals': 'off', // Rimuove il warning per i colori in stringa
    'unused-imports/no-unused-imports': 'error', // Rimuove gli import non utilizzati
    'no-restricted-imports': [
      // IMPORTANTISSIMO: Rimuove l'errore per l'import di react-native-gesture-handler
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
