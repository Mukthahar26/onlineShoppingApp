import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../constants/constants';
import BottomNavigator from './bottomNavigator';

export type RootStackParams = {
  [screenNames.BOTTOMTABS]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name={screenNames.BOTTOMTABS}
        component={BottomNavigator}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
