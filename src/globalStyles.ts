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
  },
  tabItem: {
    alignItems: 'center',
  },
  plusIcon: {
    top: -scale(25),
    backgroundColor: colorThemes.pureRed,
    width: scale(60),
    height: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
    elevation: 10,
  },
  homeIconStyle: {
    marginBottom: 10,
  },
});
