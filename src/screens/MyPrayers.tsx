import React, { FC } from "react";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/StackRoute";
import { ScrollView } from "react-native";
import { Input } from "../ui/Input";
import { Container } from "../ui/Container";
import { PrayerItem } from "../components/PrayerItem";
import { Button } from "../ui/Button";
import { useAppSelector } from "../store/hooks";
import { selectors } from "../store/ducks";

type DeskNavigationProps = StackNavigationProp<RootStackParamList>
type DeskScreenRouteProp = RouteProp<RootStackParamList,"Desk">;

interface DeskProps {
    navigation: DeskNavigationProps,
    route: DeskScreenRouteProp
}

export const MyPrayers: FC<DeskProps> = ({ navigation, route }) => {
    const onPressItem = () => {
        navigation.navigate('Detail');
    };

    const columnId = route.params.id;
    const prayersItem = useAppSelector(selectors.prayer.selectPrayersById(columnId));
    const checkedItem = prayersItem.filter((prayer) => prayer.checked);
    const unCheckedItem = prayersItem.filter((prayer) => !prayer.checked);
    return (
        <ScrollView style={{marginTop: 15}}>
            <Container>
                <Input placeholder="Add a prayer..." />
                {unCheckedItem.map((item) => <PrayerItem onPress={onPressItem} {...item}/>)}
                <Button title="Show Answered Prayers" onPress={() => {}}/>
                {checkedItem.map((item) => <PrayerItem onPress={onPressItem} {...item}/>)}
            </Container>
        </ScrollView>
    )
}