import React, { FC } from "react";
import { TabRoute } from "../routes/TabRoute";
import { Header } from "../ui/Header";
import { useRoute } from '@react-navigation/native';
import { AppText } from "../ui/AppText";
import { Setting } from "../ui/icons/Setting";
import { ColumnScreenRouteProp } from '../types';
import { StyledContainer } from "../ui/StyledContainer";
import { AppModal } from "../ui/AppModal";
import { useState } from "react";
import { Button } from "../ui/Button";
import { useAppDispatch } from "../store/hooks";
import { actions } from "../store/ducks";

export const Column: FC = () => {
    const route = useRoute<ColumnScreenRouteProp>();
    const dispatch = useAppDispatch();
    const [stateModal, setStateModal] = useState(false);

    const openModal = () => {
        setStateModal(true);
    }

    const closeModal = ()=> {
        setStateModal(false);
    }

    const logOut = () => {
        dispatch(actions.user.logOut());
    }
    return (
        <React.Fragment>
            <Header withTab>
                <StyledContainer containerStyled={`flex-grow: 1; align-items: center;`}>
                    <AppText bold>{route.params.name}</AppText>
                </StyledContainer>
                <Setting onPress={openModal} />
            </Header>
            <TabRoute/>
            <AppModal visible={stateModal}>
                <AppText>Do you want to log out?</AppText>
                <Button title="YES" onPress={logOut} />
                <Button title="NO" onPress={closeModal}/>
            </AppModal>
        </React.Fragment>
    )
};