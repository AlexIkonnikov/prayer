import React, { FC } from "react";
import { Line } from "./Line";
import { Container } from "./Container";
import { Row } from "./Row";
import { AppText } from "./AppText";

interface LastTimeProps {
    timeInMin: number
}

export const LastTime: FC<LastTimeProps> = ({timeInMin}) => {
    return (
        <Container>
            <Row containerStyled={`padding: 15px 0;`}>
                <Line/>
                <AppText>Last prayed {timeInMin} min ago</AppText>
            </Row>
        </Container>
    )
};
