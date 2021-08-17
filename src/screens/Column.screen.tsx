import React, { FC } from "react";
import { TabRoute } from "../routes/TabRoute";
import { Header } from "../ui/Header";
import { TabStackParam } from "../routes/TabRoute";
import { RouteProp } from '@react-navigation/native';
import { AppText } from "../ui/AppText";
import { Center } from "../ui/Center";
import { Setting } from "../ui/icons/Setting";

type DeskRouteProp = RouteProp<TabStackParam, "My prayers">;

interface DeskProps {
    route: DeskRouteProp
}

export const Column: FC<DeskProps> = ({ route }) => {

    return (
        <React.Fragment>
            <Header>
                <Center>
                    <AppText bold>{route.params.name}</AppText>
                </Center>
                <Setting />
            </Header>
            <TabRoute id={route.params.id} />
        </React.Fragment>
    )
}