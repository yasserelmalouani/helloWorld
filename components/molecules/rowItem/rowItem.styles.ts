import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
  },
  checkBoxCompleted: {
    borderWidth: 1,
    backgroundColor: 'green',
    borderRadius: 15,
    height: 30,
    width: 30,
  },
  checkBoxEmpty: {
    borderWidth: 1,
    borderRadius: 15,
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'semibold',
    paddingLeft: 24,
  },
});
