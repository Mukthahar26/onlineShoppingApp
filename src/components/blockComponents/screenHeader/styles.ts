import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';

export default StyleSheet.create({
  container: {
    height: scale(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: sizeValues.size16,
    paddingLeft: sizeValues.size16,
  },
  topContainer: {
    backgroundColor: colorThemes.blue,
    paddingLeft: sizeValues.size16,
    paddingRight: sizeValues.size16,
    paddingBottom: scale(12),
  },
  headerContainer: {
    marginTop: scale(40),
  },
  nameLabel: {
    color: colorThemes.white,
    fontSize: scale(22),
  },
});
