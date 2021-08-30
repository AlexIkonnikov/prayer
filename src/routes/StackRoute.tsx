import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ColumnList} from '../screens/ColumnList.screen';
import {Detail} from '../screens/Detail.screen';
import {Column} from '../screens/Column.screen';
import {RootStackParamList} from '../types';
import {navigationTheme} from '../styles/theme';

const Stack = createStackNavigator<RootStackParamList>();

export const StackRoute: FC = () => {
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
