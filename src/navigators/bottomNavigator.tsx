import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import {screenNames} from '../constants/constants';
import {View} from 'react-native';
import AppText from '../components/baseComponents/AppText';
import Categories from '../screens/categories';
import Favorite from '../screens/favorite';
import More from '../screens/more/indext';
import globalStyles from '../globalStyles';
import {
  CategoriesIcon,
  FavoriteIcon,
  HomeIcon,
  MoreIcon,
} from '../utilities/iconPaths';
import {colorThemes} from '../themes/colors';

export type bottomNavigatorParams = {
  [screenNames.HOME]: undefined;
  [screenNames.CATEGORYTAB]: undefined;
  [screenNames.FAVORITETAB]: undefined;
  [screenNames.MORETAB]: undefined;
};

const BottomTabs = createBottomTabNavigator<bottomNavigatorParams>();

const renderBottomTab = ({focused, labelName, IconName}: any) => {
  return (
    <View style={[globalStyles.tabItem]}>
      <View style={[focused && globalStyles.selectedIcon]}>
        <IconName fill={focused ? colorThemes.yellow : colorThemes.white} />
      </View>
      {!focused && <AppText style={{fontWeight: '500'}}>{labelName}</AppText>}
    </View>
  );
};
const BottomNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: globalStyles.tabBarStyle,
      }}>
      <BottomTabs.Screen
        options={{
          tabBarIcon: (item: any) =>
            renderBottomTab({
              ...item,
              labelName: 'Home',
              IconName: HomeIcon,
            }),
        }}
        name={screenNames.HOME}
        component={Home}
      />
      <BottomTabs.Screen
        options={{
          tabBarIcon: (item: any) =>
            renderBottomTab({
              ...item,
              labelName: 'Categories',
              IconName: CategoriesIcon,
            }),
        }}
        name={screenNames.CATEGORYTAB}
        component={Categories}
      />
      <BottomTabs.Screen
        options={{
          tabBarIcon: (item: any) =>
            renderBottomTab({
              ...item,
              labelName: 'Favorite',
              IconName: FavoriteIcon,
            }),
        }}
        name={screenNames.FAVORITETAB}
        component={Favorite}
      />
      <BottomTabs.Screen
        options={{
          tabBarIcon: (item: any) =>
            renderBottomTab({
              ...item,
              labelName: 'More',
              IconName: MoreIcon,
            }),
        }}
        name={screenNames.MORETAB}
        component={More}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
