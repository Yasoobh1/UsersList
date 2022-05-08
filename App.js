/**
 * 
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home'
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import RootStack from './src/navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>

  );
};


export default App;
