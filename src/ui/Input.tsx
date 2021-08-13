import React, { FC } from "react";
import { TextInputProps } from "react-native"
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { Plus } from "./icons/Plus";
import { ViewRow } from "./Row";

export const Input: FC<TextInputProps> = ({ ...outerProps }) => {
    return (
        <Wrapper>
            <Plus width={22} color={colors.blue} />
            <StyledInput {...outerProps}></StyledInput>
        </Wrapper>
    )
}

const StyledInput = styled.TextInput`
   padding-left: 15px;
   font-size: 17px;
   color: #9C9C9C;
`;

const Wrapper = styled(ViewRow)`
    padding-left: 14px;
    height: 50px;
    border-width: 1px;
    border-color: #E5E5E5;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 34px;
`;
