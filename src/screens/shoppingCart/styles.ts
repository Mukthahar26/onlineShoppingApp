import {StyleSheet} from 'react-native';
import {colorThemes} from '../../themes/colors';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../themes/sizeValues';

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    marginTop: scale(-70),
    backgroundColor: colorThemes.white,
  },
  removeCenterStyle: {
    justifyContent: 'flex-start',
    marginTop: 0,
  },
  pricesCard: {
    elevation: 0,
    backgroundColor: colorThemes.lightGray,
    borderRadius: scale(20),
    padding: sizeValues.size16,
    marginTop: scale(20),
  },
  underline: {
    width: '95%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(8),
    marginBottom: scale(8),
  },
  button: {
    marginTop: scale(30),
  },
  edit: {
    fontSize: sizeValues.fontMedium,
    alignSelf: 'flex-end',
    color: colorThemes.darkBlue,
    fontWeight: '300',
    marginTop: scale(15),
  },
  emptyStateContainer: {
    flex: 1,
  },
});

export default styles;
