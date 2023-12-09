import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colorThemes.darkBlue,
    height: scale(50),
    width: '100%',
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: scale(16),
  },
});

export default styles;
