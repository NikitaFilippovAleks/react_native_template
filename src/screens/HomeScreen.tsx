import React, { ReactElement } from 'react';

import { Text, View } from 'react-native';

// Компонент HomeScreen
const HomeScreen = (): ReactElement => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

export default HomeScreen;
