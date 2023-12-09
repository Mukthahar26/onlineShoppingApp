import {StyleSheet} from 'react-native';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: sizeValues.size10,
  },
  container: {
    marginTop: scale(20),
  },
});
