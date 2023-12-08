import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigators/rootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
