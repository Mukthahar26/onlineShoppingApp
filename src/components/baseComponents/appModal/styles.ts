import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingTop: scale(50),
    paddingBottom: scale(50),
  },
  popup: {
    width: '85%',
    backgroundColor: colorThemes.white,
    borderRadius: 5,
    padding: sizeValues.size16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizeValues.size10,
  },
  text: {
    fontSize: sizeValues.fontNormal,
  },
});

export default styles;
