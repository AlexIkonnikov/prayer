import React, { FC } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MyPrayers } from "../screens/MyPrayers.screen";
import { Subscribed } from "../screens/Subscribed.screen";
import { Counter } from "../ui/Counter";
import { TabNavigationProps } from "../types";

const Tab = createMaterialTopTabNavigator<TabNavigationProps>();

interface TabRouteProps {
    id: number
}

export const TabRoute: FC<TabRouteProps> = ({id}) => {
    const counter = () => <Counter numeric={0}/>;
    return (
        <Tab.Navigator initialRouteName="My prayers" screenOptions={{swipeEnabled: false}}>
            <Tab.Screen name="My prayers" component={MyPrayers} initialParams={{id}} />
            <Tab.Screen 
                name="Subscribed" 
                component={Subscribed}
                initialParams={{id}} 
                options={
                    {
                        tabBarIcon: counter,
                        tabBarIconStyle: {position: 'absolute', top: 7, left: 50},
                    }
                
                } 
            />
        </Tab.Navigator>
    )
};