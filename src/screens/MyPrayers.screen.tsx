import React, { FC } from "react";
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/StackRoute";
import { ScrollView } from "react-native";
import { Input } from "../ui/Input";
import { Container } from "../ui/Container";
import { PrayerItem } from "../components/PrayerItem";
import { Button } from "../ui/Button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actions, selectors } from "../store/ducks";
import { useState } from "react";
import { FormProps } from "react-final-form";
import { FormApi } from "final-form";

type DeskNavigationProps = StackNavigationProp<RootStackParamList>
type DeskScreenRouteProp = RouteProp<RootStackParamList, "Column">;

interface DeskProps {
    navigation: DeskNavigationProps,
    route: DeskScreenRouteProp
}

export const MyPrayers: FC<DeskProps> = ({ navigation, route }) => {
    const dispatch = useAppDispatch()
    const [visibleAnsweredPrayers, setVisibleAnsweredPrayers] = useState(false);

    const onChangeState = () => {
        setVisibleAnsweredPrayers(!visibleAnsweredPrayers);
    };

    const onPressItem = () => {
        navigation.navigate('Detail');
    };

    const createPrayer = (values: FormProps, form: FormApi<FormProps>) => {
        dispatch(actions.prayer.addPrayerToColumnRequest({
            columnId: route.params.id,
            title: values.title,
            description: '',
            checked: false
        }));
        form.reset();
    };

    const columnId = route.params.id;
    const prayersItem = useAppSelector(selectors.prayer.selectPrayersById(columnId));
    const checkedItem = prayersItem.filter((prayer) => prayer.checked);
    const unCheckedItem = prayersItem.filter((prayer) => !prayer.checked);

    return (
        <ScrollView >
            <Container>
                <Input submit={createPrayer}/>
            </Container>
                {unCheckedItem.map((item) => <PrayerItem key={item.id} onPress={onPressItem} {...item} />)}
                {checkedItem.length > 0 && <Button title={visibleAnsweredPrayers ? ' Show Answered Prayers' : 'hide Answered Prayers'} onPress={onChangeState} />}
                {!visibleAnsweredPrayers && checkedItem.map((item) => <PrayerItem key={item.id} onPress={onPressItem} {...item} />)}
        </ScrollView>
    )
}