import React, { FC } from "react";
import styled from "styled-components/native";

export const Square: FC = () => {
    return (
        <Wrapper>
            <BigStyledText>60</BigStyledText>
            <StyledText>Times Prayed by Others</StyledText>
        </Wrapper>
    )
};

const Wrapper = styled.View`
    padding-left: 15px;
    height: 108px;
    border: 1px solid #E5E5E5;
    width: 50%;
`;

const BigStyledText = styled.Text`
    font-size: 32px;
    color: #BFB393;
    margin-top: 26px;
`;

const StyledText = styled.Text`
    font-size: 13px;
    line-height: 15px;
    color: #514D47;
`;