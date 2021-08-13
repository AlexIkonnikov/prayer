import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme, RouteProp } from "@react-navigation/native";
import { DeskList } from "../screens/DeskList";
import { Desk } from "../screens/Desk";
import { Detail } from "../screens/Detail";
import { createMaterialTopTabNavigator, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { colors } from "../styles/colors";
import { Header } from "../ui/Header";
import { Setting } from "../ui/icons/Setting";
import { Counter } from "../ui/Counter";
import { Subscribed } from "../screens/Subscribed";


export type RootStackParamList = {
    DeskList: undefined
    Desk: { name: string } | undefined
    Detail: undefined
};

export type RootTabParamList = {
    'My prayers': undefined | { name: string },
    Subscribed: undefined
}

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createMaterialTopTabNavigator<RootTabParamList>();

type TabsNavProps =  MaterialTopTabNavigationProp<RootTabParamList>
type TabsRoute = RouteProp<RootTabParamList>

interface TabsProps {
    navigation: TabsNavProps,
    route: TabsRoute
}

export const MainTabs: FC<TabsProps> = ({route}) => {
    const renderIcon = () => <Setting />;
    const renderBagde = () => <Counter numeric={3}/>;
    return (
        <>
            <Header name={route.params?.name ?? ''} icon={renderIcon} />
            <Tab.Navigator>
                <Tab.Screen name="My prayers" component={Desk} />
                <Tab.Screen name="Subscribed" component={Subscribed} options={{tabBarBadge: renderBagde}}/>
            </Tab.Navigator>
        </>
    )
}

const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.white
    }
};

export const MainStack: FC = () => {
    return (
        <NavigationContainer theme={myTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="DeskList">
                <Stack.Screen name="DeskList" component={DeskList} />
                <Stack.Screen name="Desk" component={MainTabs} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
