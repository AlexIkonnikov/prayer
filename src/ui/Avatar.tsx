import React, { FC } from "react";
import { CSSProp } from "styled-components";
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { User } from "./icons/User";
import { StyledContainer } from "./StyledContainer";

interface AvatarProps {
    big?: boolean
}

export const Avatar: FC<AvatarProps> = ({big}) => {
    return (
        <StyledContainer containerStyled={`
            width: ${big ? `40px` : `32px`};
            height: ${big ? `40px` : `32px`};
            border-radius: ${big ? `20px;` : `16px;`};
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${colors.blue};
        `}>
            <User color={colors.white}/>
        </StyledContainer>
    )
};