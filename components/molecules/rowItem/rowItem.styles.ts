import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    padding: 12,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'flex-end',
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
    fontSize: 18,
    flex: 1,
    fontWeight: 'semibold',
    paddingLeft: 12,
  },
  trashIcon: {
    height: 24,
    width: 24,
  },
});
