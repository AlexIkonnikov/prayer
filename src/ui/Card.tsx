import React, { FC, } from "react";
import { TouchableOpacity } from "react-native";
import styled from 'styled-components/native';

interface CardProps {
    name: string
    onPress?: () => void
}

export const Card: FC<CardProps> = ({ name, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <StyledView>
                <StyledText>{name}</StyledText>
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

export const StyledText = styled.Text`
    font-size: 17px;
    color: #514D47;
    font-weight: bold;
`;
