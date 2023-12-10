import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../../themes/sizeValues';

const styles = StyleSheet.create({
  flatListStyle: {
    marginTop: scale(30),
    marginLeft: sizeValues.size16,
  },
  item: {
    marginRight: sizeValues.size16,
  },
});

export default styles;
