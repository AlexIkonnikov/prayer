import React, { FC } from "react";
import styled from "styled-components/native";
import { Hands } from "./Hands";
import { User } from "./User";

interface GroupIconsProps {
    userCount: number
    prayerCount: number,
}

export const GroupIcons: FC<GroupIconsProps> = ({userCount, prayerCount}) => {
    return (
        <Row>
            <User userCount={userCount} />
            <Hands prayerCount={prayerCount} />
        </Row>
    );
}

const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`