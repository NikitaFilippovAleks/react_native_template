import React, { ReactElement } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from 'screens/HomeScreen';

const Stack = createNativeStackNavigator();

// Компонент AppNavigator
const AppNavigator = (): ReactElement => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;