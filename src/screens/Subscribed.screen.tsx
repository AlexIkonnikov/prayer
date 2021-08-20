import React from "react";
import { Container } from "../ui/Container";
import { PrayerItem } from "../components/PrayerItem";
import { Button } from "../ui/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MyPrayerScreenRouteProp, MyPrayerScreenNavigationProp } from "../types";
import { useAppSelector } from "../store/hooks";
import { selectors } from "../store/ducks";
import { useState } from "react";
import { IPrayer } from "../store/ducks/prayer";
import { StyledContainer } from "../ui/StyledContainer";

export const Subscribed = () => {
    const [visibleAnsweredPrayers, setVisibleAnsweredPrayers] = useState(false);
    const onChangeState = () => {
        setVisibleAnsweredPrayers(!visibleAnsweredPrayers);
    };
    const route = useRoute<MyPrayerScreenRouteProp>();
    const navigation = useNavigation<MyPrayerScreenNavigationProp>();
    const columnId = route.params.id;
    const prayersItem = useAppSelector(selectors.prayer.selectPrayersById(columnId));
    const checkedItem = prayersItem.filter((prayer) => prayer.checked);
    const unCheckedItem = prayersItem.filter((prayer) => !prayer.checked);

    const onPressItem = (item: IPrayer) => {
        navigation.navigate('Detail', {prayer: item})
    };
    return (
        <StyledContainer containerStyled={`marginTop: 15px;`}>
            <Container>
                {unCheckedItem.map((item) => <PrayerItem key={item.id} onPress={() => {onPressItem(item)}} {...item} />)}
                {checkedItem.length > 0 && <Button title={visibleAnsweredPrayers ? 'show answered prayers' : 'hide Answered Prayers'} onPress={onChangeState} />}
                {!visibleAnsweredPrayers && checkedItem.map((item) => <PrayerItem key={item.id} onPress={() => {onPressItem(item)}} {...item} />)}
            </Container>
        </StyledContainer>
    )
}