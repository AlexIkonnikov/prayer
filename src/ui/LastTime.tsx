import React, { FC } from "react";
import { Line } from "./Line";
import styled from "styled-components/native";
import { Container } from "./Container";
import { Row } from "./Row";

interface LastTimeProps {
    timeInMin: number
}

export const LastTime: FC<LastTimeProps> = ({timeInMin}) => {
    return (
        <Container>
            <Row css="padding: 15px 0;">
                <Line/>
                <StyledText>Last prayed {timeInMin} min ago</StyledText>
            </Row>
        </Container>
    )
};

const StyledText = styled.Text`
    font-size: 17px;
    line-height: 20px;
    color: #514D47;
`;