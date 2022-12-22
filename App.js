// App.js
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import MainScreen from './components/MainScreen';
import Forecast from './components/Forecast';
import PageForecast from './components/PageForecast';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
        // <PageForecast />
        // <MainScreen/>

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={MainScreen} />
        <Tab.Screen name="forecast" component={PageForecast} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
