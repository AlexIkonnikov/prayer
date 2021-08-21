import React, { FC } from "react";
import { TabRoute } from "../routes/TabRoute";
import { Header } from "../ui/Header";
import { useRoute } from '@react-navigation/native';
import { AppText } from "../ui/AppText";
import { Setting } from "../ui/icons/Setting";
import { ColumnScreenRouteProp } from '../types';
import { StyledContainer } from "../ui/StyledContainer";

export const Column: FC = () => {
    const route = useRoute<ColumnScreenRouteProp>();

    return (
        <React.Fragment>
            <Header withTab>
                <StyledContainer containerStyled={`flex-grow: 1; align-items: center;`}>
                    <AppText bold>{route.params.name}</AppText>
                </StyledContainer>
                <Setting />
            </Header>
            <TabRoute/>
        </React.Fragment>
    )
};