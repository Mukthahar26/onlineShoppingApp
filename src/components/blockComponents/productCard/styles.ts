import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';

export default StyleSheet.create({
  card: {
    backgroundColor: colorThemes.lightGray,
    width: '48%',
    elevation: 0,
  },
  favoriteContainer: {
    height: scale(35),
    width: scale(35),
    backgroundColor: colorThemes.white,
    borderRadius: scale(35 / 2),
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    left: 5,
    top: 5,
  },
  thumbnail: {
    height: scale(140),
    resizeMode: 'stretch',
    borderRadius: scale(8),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  details: {
    margin: sizeValues.size10,
    marginBottom: sizeValues.size16,
  },
  price: {
    fontSize: sizeValues.fontMedium,
    fontWeight: '700',
    marginTop: scale(10),
  },
  title: {
    fontSize: sizeValues.fontNormal,
    fontWeight: '300',
    marginTop: scale(10),
  },
  addToCart: {
    position: 'absolute',
    right: 5,
    top: scale(10),
    zIndex: 1,
  },
});
