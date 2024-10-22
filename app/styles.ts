import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    marginBottom: 16,
  },
  emptyTextInput: {
    flex: 1,
    height: 40,
    borderColor: 'red',
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    marginBottom: 16,
  },
  textInputContainer: {
    flexDirection: 'row',
  },
});
