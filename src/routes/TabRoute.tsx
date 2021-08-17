import React, { FC } from "react";
import { RouteProp } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MyPrayers } from "../screens/MyPrayers.screen";
import { Subscribed } from "../screens/Subscribed.screen";

export type TabStackParam = {
    'My prayers': { name: string, id: number },
    Subscribed: undefined
}

const Tab = createMaterialTopTabNavigator<TabStackParam>();

type TabRoute = RouteProp<TabStackParam>

interface TabRouteProps {
    id: number
}

export const TabRoute: FC<TabRouteProps> = ({id}) => {
    return (
        <Tab.Navigator initialRouteName="My prayers">
            <Tab.Screen name="My prayers" component={MyPrayers} initialParams={{id}} />
            <Tab.Screen name="Subscribed" component={Subscribed} />
        </Tab.Navigator>
    )
};