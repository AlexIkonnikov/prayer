import React, { FC } from "react";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { Header } from "../ui/Header";
import { Setting } from "../ui/icons/Setting";
import { RootStackParamList } from "../navigation/MainStack";
import { View } from "react-native";
import { Input } from "../ui/Input";
import { Container } from "../ui/Container";
import { GroupIcons } from "../ui/icons/GroupIcons";
import { PrayerItem } from "../components/PrayerItem";
import { Button } from "../ui/Button";

type DeskNavigationProps = StackNavigationProp<RootStackParamList>
type DeskScreenRouteProp = RouteProp<RootStackParamList>;

interface DeskProps {
    navigation: DeskNavigationProps,
    route: DeskScreenRouteProp
}

export const Desk: FC<DeskProps> = ({ navigation, route }) => {
    return (
        <View>
            <Header name={route.params?.name ?? ''} Icon={Setting} >
            </Header>
            <Container>
                <Input placeholder="Add a prayer..." />
                <PrayerItem/>
                <PrayerItem/>
                <PrayerItem/>
                <PrayerItem/>
                <PrayerItem/>
                <Button title="Show Answered Prayers" onPress={() => {}}/>
            </Container>
        </View>
    )
}