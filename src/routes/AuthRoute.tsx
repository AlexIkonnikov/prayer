import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Authentication} from '../screens/Authentication.screen';
import {Registration} from '../screens/Registration.screen';
import {AuthNavigationProps} from '../types';
import {navigationTheme} from '../styles/theme';

const Tab = createMaterialTopTabNavigator<AuthNavigationProps>();

export const AuthRoute = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator>
        <Tab.Screen name="authentication" component={Authentication} />
        <Tab.Screen name="registration" component={Registration} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
