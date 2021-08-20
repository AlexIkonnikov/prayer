import React, { FC } from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from "react-native";
import { AddPrayerForm } from "../ui/AddPrayerForm";
import { Container } from "../ui/Container";
import { PrayerItem } from "../components/PrayerItem";
import { Button } from "../ui/Button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actions, selectors } from "../store/ducks";
import { useState } from "react";
import { FormProps } from "react-final-form";
import { FormApi } from "final-form";
import { IPrayer } from "../store/ducks/prayer";
import { MyPrayerScreenNavigationProp, MyPrayerScreenRouteProp } from "../types";

export const MyPrayers: FC = () => {
    const [visibleAnsweredPrayers, setVisibleAnsweredPrayers] = useState(false);
    const onChangeState = () => {
        setVisibleAnsweredPrayers(!visibleAnsweredPrayers);
    };

    const dispatch = useAppDispatch();
    const navigation = useNavigation<MyPrayerScreenNavigationProp>();
    const route = useRoute<MyPrayerScreenRouteProp>();

    const onPressItem = (item: IPrayer) => {
        navigation.navigate('Detail', {prayer: item})
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
                <AddPrayerForm submit={createPrayer}/>
            </Container>
                {unCheckedItem.map((item) => <PrayerItem key={item.id} onPress={() => {onPressItem(item)}} {...item} />)}
                {checkedItem.length > 0 && <Button title={visibleAnsweredPrayers ? 'show answered prayers' : 'hide Answered Prayers'} onPress={onChangeState} />}
                {!visibleAnsweredPrayers && checkedItem.map((item) => <PrayerItem key={item.id} onPress={() => {onPressItem(item)}} {...item} />)}
        </ScrollView>
    )
}