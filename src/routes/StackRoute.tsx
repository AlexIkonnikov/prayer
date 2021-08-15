import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { DeskList } from "../screens/DeskList";;
import { Detail } from "../screens/Detail";
import { colors } from "../styles/colors";
import { Desk } from "../screens/Desk";

export type RootStackParamList = {
    DeskList: undefined
    Desk: { name: string } | undefined
    Detail: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

export const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.white
    }
};

export const StackRoute: FC = () => {
    return (
        <NavigationContainer theme={myTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="DeskList">
                <Stack.Screen name="DeskList" component={DeskList} />
                <Stack.Screen name="Desk" component={Desk} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
