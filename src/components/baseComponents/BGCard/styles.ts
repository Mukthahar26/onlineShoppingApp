import {scale, ScaledSheet} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    backgroundColor: colorThemes.brandColor,
  },
});

export default styles;
