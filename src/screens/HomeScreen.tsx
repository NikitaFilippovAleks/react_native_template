import React, { ReactElement } from 'react';

import { Button, Text, View } from 'react-native';

import { HomeScreenNavigationProps } from 'models/Screens';

// Компонент HomeScreen
const HomeScreen = ({ navigation }: HomeScreenNavigationProps): ReactElement => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title='Go to Details'
            onPress={() => navigation.navigate('Details')} />
  </View>
);

export default HomeScreen;
