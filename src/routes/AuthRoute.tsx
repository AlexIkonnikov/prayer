import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Authentication } from "../screens/Authentication";
import { Registration } from "../screens/Registration";
import { myTheme } from './StackRoute';

type AuthNavigationProps = {
    authentication: undefined
    registration: undefined
}

const Tab = createMaterialTopTabNavigator<AuthNavigationProps>();

export const AuthRoute = () => {
    return (
        <NavigationContainer theme={myTheme}>
            <Tab.Navigator>
                <Tab.Screen name="authentication" component={Authentication} />
                <Tab.Screen name="registration" component={Registration} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}