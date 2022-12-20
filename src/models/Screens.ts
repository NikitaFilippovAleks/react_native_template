import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Hello: undefined;
  Main: NavigatorScreenParams<MainParamList>;
};

export type HelloScreenNavigationProps = StackScreenProps<RootStackParamList, 'Hello'>;

export type MainParamList = {
  Home: undefined;
  Settings: NavigatorScreenParams<SettingsParamList>;
};

export type SettingsParamList = {
  ScreensSettingsIndex: undefined;
  ScreensSettingsDisplay: undefined;
};

type ScreensSettingsIndexProps = CompositeScreenProps<
  StackScreenProps<SettingsParamList, 'ScreensSettingsIndex'>,
  CompositeScreenProps<
    StackScreenProps<RootStackParamList>,
    BottomTabScreenProps<MainParamList>
  >
>;

export type ScreensSettingsIndexNavigationProps = ScreensSettingsIndexProps['navigation'];
