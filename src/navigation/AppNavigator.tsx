import React, { ReactElement } from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import DetailsScreen from 'screens/DetailsScreen';
import HomeScreen from 'screens/HomeScreen';

import { RootStackParamList } from 'models/Screens';

const Stack = createStackNavigator<RootStackParamList>();

// Компонент AppNavigator
const AppNavigator = (): ReactElement => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'
                     screenOptions={{
                       headerTitleAlign: 'center',
                       cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                     }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Details' component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
