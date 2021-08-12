import React, { FC } from "react";
import styled from "styled-components/native";
import { BackArrow } from "./icons/BackArrow";
import { Hands } from "./icons/Hands";
import { Row } from "./Row";

export const DetailHeader: FC = () => {
    return (
        <Wrapper>
            <Row css="justify-content: space-between; margin-bottom: 15px;">
                <BackArrow />
                <Hands />
            </Row>
            <StyledText>Prayer item two which is for my family to love God whole heartedly.</StyledText>
        </Wrapper>
    )
};

const Wrapper = styled.View`
    padding: 20px 15px 23px 15px;
    background-color: #BFB393;
`;

const StyledText = styled.Text`
    font-size: 17px;
    line-height: 27px;
    color: white;
`;