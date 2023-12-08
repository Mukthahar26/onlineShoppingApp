import {StyleSheet} from 'react-native';
import sizeValues from './themes/sizeValues';
import {scale} from 'react-native-size-matters';
import {colorThemes} from './themes/colors';

export default StyleSheet.create({
  titleLargeSize: {
    fontWeight: '700',
    fontSize: sizeValues.fontLarge,
  },
  tabBarStyle: {
    height: scale(60),
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  tabItem: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },

  homeIconStyle: {
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  curveBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
