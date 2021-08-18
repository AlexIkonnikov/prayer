import React, { FC } from "react";
import { TabRoute } from "../routes/TabRoute";
import { Header } from "../ui/Header";
import { useRoute } from '@react-navigation/native';
import { AppText } from "../ui/AppText";
import { Center } from "../ui/Center";
import { Setting } from "../ui/icons/Setting";
import { ColumnScreenRouteProp } from '../types';

export const Column: FC = () => {
    const route = useRoute<ColumnScreenRouteProp>();

    return (
        <React.Fragment>
            <Header withTab>
                <Center>
                    <AppText bold>{route.params.name}</AppText>
                </Center>
                <Setting />
            </Header>
            <TabRoute id={route.params.id} />
        </React.Fragment>
    )
};