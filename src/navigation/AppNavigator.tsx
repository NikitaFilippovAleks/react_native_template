import React, { ReactElement } from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HelloScreen from 'screens/HelloScreen';
import HomeScreen from 'screens/HomeScreen';

import { MainParamList, RootStackParamList, SettingsParamList } from 'models/Screens';

import ScreensSettingsDisplay from 'screens/settings/DisplayScreen';
import ScreensSettingsIndex from 'screens/settings/Index';

const SettingsStack = createStackNavigator<SettingsParamList>();

const Settings = () => (
  <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
    <SettingsStack.Screen name='ScreensSettingsIndex' component={ScreensSettingsIndex} />
    <SettingsStack.Screen name='ScreensSettingsDisplay'
                          component={ScreensSettingsDisplay}
                          options={{ headerShown: true }} />
  </SettingsStack.Navigator>
);

const Tab = createBottomTabNavigator<MainParamList>();

const Main = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name='Home' component={HomeScreen} />
    <Tab.Screen name='Settings' component={Settings} />
  </Tab.Navigator>
);

const RootStack = createStackNavigator<RootStackParamList>();

// Компонент AppNavigator
const AppNavigator = (): ReactElement => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName='Hello'
                         screenOptions={{
                           headerShown: false,
                           headerTitleAlign: 'center',
                           cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                         }}>
      <RootStack.Screen name='Hello' component={HelloScreen} />
      <RootStack.Screen name='Main' component={Main} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
