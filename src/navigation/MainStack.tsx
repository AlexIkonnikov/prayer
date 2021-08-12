import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { DeskList } from "../screens/DeskList";
import { Desk } from "../screens/Desk";
import { Detail } from "../screens/Detail";

export type RootStackParamList = {
    DeskList: undefined
    Desk: { name: string } | undefined
    Detail: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

export const MainStack: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Detail">
                <Stack.Screen name="DeskList" component={DeskList} />
                <Stack.Screen name="Desk" component={Desk} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
