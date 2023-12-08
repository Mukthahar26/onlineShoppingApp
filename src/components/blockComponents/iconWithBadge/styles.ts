import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';

const circle = scale(23);
export default StyleSheet.create({
  badgeCircle: {
    backgroundColor: colorThemes.yellow,
    width: scale(circle),
    height: scale(circle),
    borderRadius: scale(circle / 2),
    marginBottom: scale(-10),
    zIndex: 1,
    marginLeft: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeCount: {
    color: colorThemes.white,
  },
});
