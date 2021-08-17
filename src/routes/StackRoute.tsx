import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { ColumnList } from "../screens/ColumnList";;
import { Detail } from "../screens/Detail";
import { colors } from "../styles/colors";
import { Column } from "../screens/Column";

export type RootStackParamList = {
    ColumnList: undefined
    Column: { name: string, id: number }
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
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ColumnList">
                <Stack.Screen name="ColumnList" component={ColumnList} />
                <Stack.Screen name="Column" component={Column} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
