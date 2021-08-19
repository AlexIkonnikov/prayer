import React, { FC } from "react";
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { AppText } from "./AppText";
import { Row } from "./Row";

export const Statisticks: FC = () => {
    return (
        <ContentWrapper>
            <Row>
                <Wrapper>
                    <BigStyledText fs={22}>July 25 2017</BigStyledText>
                    <StyledText>Date Added</StyledText>
                    <StyledText color={colors.blue}>Opened for 4 days</StyledText>
                </Wrapper>
                <Wrapper>
                    <BigStyledText fs={32}>123</BigStyledText>
                    <StyledText>Times Prayed Total</StyledText>
                </Wrapper>
            </Row>
            <Row>
                <Wrapper>
                    <BigStyledText fs={32}>63</BigStyledText>
                    <StyledText>Times Prayed by Me</StyledText>
                </Wrapper>
                <Wrapper>
                    <BigStyledText fs={32}>60</BigStyledText>
                    <StyledText>Times Prayed by Others</StyledText>
                </Wrapper>
            </Row>
        </ContentWrapper>
    );
}

const ContentWrapper = styled.View`
    margin-bottom: 20px;
`
const Wrapper = styled.View`
    padding-left: 15px;
    height: 108px;
    border: 1px solid #E5E5E5;
    width: 50%;
`;

const BigStyledText = styled(AppText)`
    color: #BFB393;
    margin-top: 26px;
`;

const StyledText = styled.Text<{color?: string}>`
    font-size: 13px;
    line-height: 15px;
    ${
        ({color}) => {
            return `color: ${color ?? colors.ligthBlack}`
        }
    }
`;