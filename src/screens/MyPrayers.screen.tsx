import React, { FC } from "react";
import { ScrollView } from "react-native";
import { AddPrayerForm } from "../components/AddPrayerForm/AddPrayerForm";
import { Container } from "../ui/Container";
import PrayerList from "../components/PrayerList/PrayerList";

export const MyPrayers: FC = () => {
    return (
        <ScrollView >
            <Container>
                <AddPrayerForm/>
            </Container>
            <PrayerList/>
        </ScrollView>
    )
};