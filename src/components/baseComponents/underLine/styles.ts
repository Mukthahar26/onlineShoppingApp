import {scale, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: scale(1),
    backgroundColor: '#e6e5e3',
    alignSelf: 'center',
  },
});

export default styles;
