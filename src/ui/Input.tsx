import React, { FC } from "react";
import { TextInputProps } from "react-native"
import { CSSProp } from "styled-components";
import styled from "styled-components/native";
import { colors } from "../styles/colors";

interface InputProps extends TextInputProps {
    bold?: boolean
    color?: string
    containerStyled?:CSSProp

}

export const Input: FC<InputProps> = ({...outerProps}) => {
    return <StyledInput {...outerProps} />;
}

const StyledInput = styled.TextInput<InputProps>`
    padding: 0;
    padding-left: 15px;
    padding-right: 25px;
    font-size: 17px;
    ${
        ({color}) => {
            if (color !== '') {
                return `color: ${color};`
            }
            return `color: ${colors.ligthBlack};`
        }
    }
    ${({bold}) => bold && 'font-weight: bold;'}
`;
