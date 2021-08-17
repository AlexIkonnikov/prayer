import React, { FC } from "react";
import { TextInputProps } from "react-native"
import styled from "styled-components/native";
import { colors } from "../styles/colors";

export const StyledInput: FC<TextInputProps> = ({ ...outerProps }) => {
    return <CustomInput {...outerProps} />
}

const CustomInput = styled.TextInput`
    
    padding: 0;
    padding-left: 15px;
    font-size: 17px;
    color: ${colors.ligthBlack};
`;