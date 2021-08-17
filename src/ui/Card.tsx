import React, { FC, } from "react";
import { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';
import { colors } from "../styles/colors";
import { AppText } from "./AppText";

interface CardProps {
    name: string
    onPress?: () => void
}

export const Card: FC<CardProps> = ({ name, onPress }) => {
    const [editMode, setEditMode] = useState(false);

    const changeEditMode = () => {
        setEditMode(!editMode);
    }

    return (
        <TouchableOpacity onPress={onPress} onLongPress={changeEditMode}>
            <StyledView>
                <AppText bold >{name}</AppText>
            </StyledView>
        </TouchableOpacity>
    )
}

const StyledView = styled.View`
    padding: 20px 0 20px 15px;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    margin-bottom: 10px;
`;
