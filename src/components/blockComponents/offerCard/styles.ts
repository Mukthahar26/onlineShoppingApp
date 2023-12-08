import {StyleSheet} from 'react-native';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
  card: {
    backgroundColor: colorThemes.yellow,
    borderRadius: sizeValues.size16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(20),
  },
  col: {
    marginLeft: scale(20),
  },
  title: {
    color: colorThemes.white,
    fontSize: scale(20),
    fontWeight: '300',
  },
  offer: {
    color: colorThemes.white,
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: colorThemes.disableColor,
    opacity: 0.7,
  },
});
