import React, { FC } from "react";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { Setting } from "../ui/icons/Setting";
import { RootStackParamList } from "../routes/StackRoute";
import { View } from "react-native";
import { Input } from "../ui/Input";
import { Container } from "../ui/Container";
import { PrayerItem } from "../components/PrayerItem";
import { Button } from "../ui/Button";

type DeskNavigationProps = StackNavigationProp<RootStackParamList>
type DeskScreenRouteProp = RouteProp<RootStackParamList>;

interface DeskProps {
    navigation: DeskNavigationProps,
    route: DeskScreenRouteProp
}

export const MyPrayers: FC<DeskProps> = ({ navigation, route }) => {
    const onPressItem = () => {
        navigation.navigate('Detail');
    };

    const renderIcon = () => <Setting/>

    return (
        <View style={{marginTop: 15}}>
            <Container>
                <Input placeholder="Add a prayer..." />
                <PrayerItem onPress={onPressItem}/>
                <Button title="Show Answered Prayers" onPress={() => {}}/>
            </Container>
        </View>
    )
}