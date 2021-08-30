import React, {FC} from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {ColumnList} from '../screens/ColumnList.screen';
import {Detail} from '../screens/Detail.screen';
import {Column} from '../screens/Column.screen';
import {navigationTheme} from '../styles/theme';
import { IPrayer } from '../store/prayer';

const Stack = createStackNavigator<RootStackParamList>();

export const MainRoute: FC = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="ColumnList">
        <Stack.Screen name="ColumnList" component={ColumnList} />
        <Stack.Screen name="Column" component={Column} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

type RootStackParamList = {
  ColumnList: undefined;
  Column: {name: string; id: number};
  Detail: {prayer: IPrayer};
};

export interface ColumnListScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'ColumnList'>
}

export interface ColumnScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Column'>
  route: RouteProp<RootStackParamList, 'Column'>
}

export interface DetailScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>
  route: RouteProp<RootStackParamList, 'Detail'>
}