import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
  thumbnail: {
    height: scale(140),
    resizeMode: 'stretch',
    borderRadius: scale(8),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  imageIcon: {
    marginTop: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
