import React, {FC} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MyPrayers} from '../screens/MyPrayers.screen';
import {Subscribed} from '../screens/Subscribed.screen';
import {Counter} from '../ui/Counter';
import {ColumnScreenRouteProp, TabNavigationProps} from '../types';
import {useRoute} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator<TabNavigationProps>();

export const TabRoute: FC = () => {
  const counter = () => <Counter numeric={0} />;
  const route = useRoute<ColumnScreenRouteProp>();
  const id = route.params.id;

  return (
    <Tab.Navigator
      initialRouteName="My prayers"
      screenOptions={{swipeEnabled: false}}>
      <Tab.Screen
        name="My prayers"
        component={MyPrayers}
        initialParams={{id}}
      />
      <Tab.Screen
        name="Subscribed"
        component={Subscribed}
        initialParams={{id}}
        options={{
          tabBarIcon: counter,
          tabBarIconStyle: {position: 'absolute', top: 7, left: 50},
        }}
      />
    </Tab.Navigator>
  );
};
