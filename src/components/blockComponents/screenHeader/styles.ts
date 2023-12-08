import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';

const imageSize = scale(40);
export default StyleSheet.create({
  container: {
    height: imageSize + scale(15),
    backgroundColor: colorThemes.brandColor,
    elevation: 1,
    justifyContent: 'center',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameLabel: {
    fontWeight: '500',
    fontSize: sizeValues.fontLarge,
    color: colorThemes.white,
    alignSelf: 'center',
  },
  nameLabel2: {
    marginLeft: scale(-40),
    maxWidth: '70%',
  },
  arrowIcon: {
    fontSize: imageSize,
    resizeMode: 'contain',
    color: colorThemes.white,
  },
});
