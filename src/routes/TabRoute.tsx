import React, { FC } from "react";
import { RouteProp } from "@react-navigation/native";
import { createMaterialTopTabNavigator, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { MyPrayers } from "../screens/MyPrayers";
import { Subscribed } from "../screens/Subscribed";

export type TabStackParam = {
    'My prayers': undefined | { name: string },
    Subscribed: undefined
}

const Tab = createMaterialTopTabNavigator<TabStackParam>();

type TabRoute = RouteProp<TabStackParam>


export const TabRoute: FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="My prayers" component={MyPrayers} />
            <Tab.Screen name="Subscribed" component={Subscribed} />
        </Tab.Navigator>
    )
};