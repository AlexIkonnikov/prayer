import React, { FC } from "react";
import { ButtonProps } from "react-native"
import styled from "styled-components/native";

export const Button: FC<ButtonProps> = ({ title, onPress }) => {
    return (
        <StyledButton onPress={onPress}>
            <StyledText>{title}</StyledText>
        </StyledButton>
    )
};

const StyledButton = styled.TouchableOpacity`
    background-color: #BFB393;
    font-size: 12px;
    padding: 8px 0;
    width: 209px;
    margin: 20px 0;
    border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
`;

const StyledText = styled.Text`
    text-align: center;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
`;