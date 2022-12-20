import React, { ReactElement } from 'react';

import { Button, Text, View } from 'react-native';

import { HelloScreenNavigationProps } from 'models/Screens';

// Компонент HelloScreen
const HelloScreen = ({ navigation }: HelloScreenNavigationProps): ReactElement => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Hello Screen</Text>
    <Button title='Go to Home'
            onPress={() => navigation.navigate('Main', { screen: 'Home' })} />
  </View>
);

export default HelloScreen;
