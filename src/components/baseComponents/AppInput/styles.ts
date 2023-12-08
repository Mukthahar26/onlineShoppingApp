import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';

const styles = StyleSheet.create({
  textField: {
    color: colorThemes.black1,
    height: scale(45),
    padding: scale(10),
  },
  inputView: {
    paddingLeft: scale(28),
    height: scale(45),
    padding: scale(10),
    borderColor: colorThemes.black40,
    backgroundColor: colorThemes.white,
    borderRadius: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
