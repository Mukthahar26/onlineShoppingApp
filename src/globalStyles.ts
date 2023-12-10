import {StyleSheet} from 'react-native';
import sizeValues from './themes/sizeValues';
import {scale} from 'react-native-size-matters';
import {colorThemes} from './themes/colors';

const circle = scale(60);
export default StyleSheet.create({
  tabBarStyle: {
    height: scale(60),
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    position: 'absolute',
  },
  tabItem: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
  },

  selectedIcon: {
    marginBottom: scale(50),
    backgroundColor: colorThemes.black,
    height: circle,
    width: circle,
    borderRadius: circle / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
