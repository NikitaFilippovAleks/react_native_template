import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export type HomeScreenNavigationProps = StackScreenProps<RootStackParamList, 'Home'>;
