import React, { FC } from "react";
import { TabRoute } from "../routes/TabRoute";
import { Header } from "../ui/Header";
import { TabStackParam } from "../routes/TabRoute";
import { RouteProp } from '@react-navigation/native';
import { Setting } from "../ui/icons/Setting";

type DeskRouteProp = RouteProp<TabStackParam, "My prayers">;

interface DeskProps {
    route: DeskRouteProp
}

export const Desk: FC<DeskProps> = ({route}) => {

    const renderIcon = () => <Setting/>
    return (
        <>
            <Header name={route.params.name}  icon={renderIcon}/>
            <TabRoute id={route.params.id}/>
        </>
    )
}