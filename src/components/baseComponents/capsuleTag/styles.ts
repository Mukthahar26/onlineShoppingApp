import {scale, ScaledSheet} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';

const styles = ScaledSheet.create({
  container: {
    paddingLeft: scale(15),
    paddingRight: scale(15),
    backgroundColor: colorThemes.white,
    alignSelf: 'flex-start',
    height: scale(30),
    borderRadius: scale(15),
    justifyContent: 'center',
  },
  label: {
    fontSize: scale(sizeValues.fontSmall),
  },
});

export default styles;
