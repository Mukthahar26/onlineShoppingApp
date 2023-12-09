import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';

export default StyleSheet.create({
  container: {
    height: scale(60),
    justifyContent: 'flex-end',
    paddingRight: sizeValues.size16,
    paddingLeft: sizeValues.size16,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  headerName: {
    fontSize: sizeValues.fontLarge,
    fontWeight: '300',
    marginLeft: scale(10),
  },
});
