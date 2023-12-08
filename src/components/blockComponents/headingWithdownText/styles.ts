import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';

const styles = StyleSheet.create({
  title: {
    opacity: 0.5,
    fontWeight: '800',
  },
  label: {
    color: colorThemes.white,
    marginRight: scale(4),
  },
  labelWithArrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
