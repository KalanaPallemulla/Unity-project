/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Entering from './Screens/Entering';
import Content from './Screens/Content';
import Games from './Screens/Games';
import VirtualEnvironment from './Screens/VietualEnvironment';
import Tests from './Screens/Tests';
import WebViewScreen from './Screens/WebViewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Entering" component={Entering} />
        <Stack.Screen name="Content" component={Content} />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="Virtual" component={VirtualEnvironment} />
        <Stack.Screen name="Tests" component={Tests} />
        <Stack.Screen name="Web" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
