import React from "react";
import { View } from "react-native";
import { Container } from "../ui/Container";
import { PrayerItem } from "../components/PrayerItem";
import { Button } from "../ui/Button";

export const Subscribed = () => {
    return (
        <View style={{marginTop: 15}}>
            <Container>
                <Button title="Show Answered Prayers" onPress={() => {}}/>
            </Container>
        </View>
    )
}