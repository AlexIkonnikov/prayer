import React, { FC } from "react";
import { ButtonProps } from "react-native"
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { AppText } from "./AppText";

export const Button: FC<ButtonProps> = ({ title, onPress }) => {
    return (
        <StyledButton onPress={onPress}>
            <TextWrapper>
                <AppText fs={12} color={colors.white} upp bold>{title}</AppText>
            </TextWrapper>
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

const TextWrapper = styled.View`
    align-items: center;
`;