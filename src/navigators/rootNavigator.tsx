import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../constants/constants';
import BottomNavigator from './bottomNavigator';
import {productItemType} from '../redux/slicers/productSlicer';
import ProductionDetails from '../screens/productDetails';

export type RootStackParams = {
  [screenNames.BOTTOMTABS]: undefined;
  [screenNames.PRODUCTDETAILS]: {
    item: productItemType;
  };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name={screenNames.BOTTOMTABS}
        component={BottomNavigator}
      />
      <RootStack.Screen
        name={screenNames.PRODUCTDETAILS}
        component={ProductionDetails}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
