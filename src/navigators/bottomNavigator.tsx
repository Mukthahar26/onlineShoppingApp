import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import {screenNames} from '../constants/constants';
import {View} from 'react-native';
import AppText from '../components/baseComponents/AppText';
import {isFieldEmpty} from '../utilities/utils';
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

export type bottomNavigatorParams = {
  [screenNames.HOME]: undefined;
  [screenNames.CATEGORYTAB]: undefined;
  [screenNames.FAVORITETAB]: undefined;
  [screenNames.MORETAB]: undefined;
};

const BottomTabs = createBottomTabNavigator<bottomNavigatorParams>();

const renderBottomTab = ({focused, labelName, color, IconName}: any) => {
  const isHomeScreen = labelName === 'Home';
  return (
    <View style={[globalStyles.tabItem]}>
      <View style={[isHomeScreen && globalStyles.homeIconStyle]}>
        <IconName />
      </View>
      {!isHomeScreen && (
        <AppText style={{color, fontWeight: focused ? '500' : '400'}}>
          {labelName}
        </AppText>
      )}
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
