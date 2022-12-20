import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button, Text, View } from 'react-native';
import { ScreensSettingsIndexNavigationProps } from 'models/Screens';

// Компонент SettingsScreen
const ScreensSettingsIndex = (): ReactElement => {
  const navigation = useNavigation<ScreensSettingsIndexNavigationProps>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button title='Go to Display settings'
              onPress={() => navigation.push('ScreensSettingsDisplay')} />
    </View>
  );
};

export default ScreensSettingsIndex;
