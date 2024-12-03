import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#739ce7',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titleStyle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
  },
  containerImage: {
    alignItems: 'flex-end',
  },
  imageStyle: {
    width: 54,
    height: 54,
  },
  genericCardTextSpacing: {
    marginTop: 8,
  },
  genericCardText: {
    fontSize: 16,
    color: 'white',
  },
  buyCartButton: {
    marginTop: 4,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#d02d2d',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
export default styles;
