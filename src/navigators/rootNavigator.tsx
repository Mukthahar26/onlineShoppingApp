import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../constants/constants';
import BottomNavigator from './bottomNavigator';
import {productItemType} from '../redux/slicers/productSlicer';
import ProductionDetails from '../screens/productDetails';
import ShoppingCart from '../screens/shoppingCart';

export type RootStackParams = {
  [screenNames.BOTTOMTABS]: undefined;
  [screenNames.PRODUCTDETAILS]: {
    item: productItemType;
  };
  [screenNames.SHOPPINGCART]: undefined;
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
      <RootStack.Screen
        name={screenNames.SHOPPINGCART}
        component={ShoppingCart}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
