import React, { FC } from "react";
import { TabRoute } from "../routes/TabRoute";
import { Header } from "../ui/Header";
import { TabStackParam } from "../routes/TabRoute";
import { RouteProp } from '@react-navigation/native';
import { TextForm } from "../components/TextForm";

type DeskRouteProp = RouteProp<TabStackParam, "My prayers">;

interface DeskProps {
    route: DeskRouteProp
}

export const Desk: FC<DeskProps> = ({route}) => {

    return (
        <React.Fragment>
            <Header>
                <TextForm inputText={route.params.name} readOnly/>
            </Header>
            <TabRoute id={route.params.id}/>
        </React.Fragment>
    )
}