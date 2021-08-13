import React, { FC } from "react";
import { View } from "react-native";
import { colors } from "../styles/colors";
import { AppText } from "./AppText";
import { Avatar } from "./Avatar";
import { Row } from "./Row";
import styled from "styled-components/native";

export interface IComment {
    user: {
        name: string,
        avatar: string
    }
    message: string
    time: string
}

export const Comment: FC<IComment> = ({ user, message, time }) => {
    return (
        <Row css="padding:17px 0; border-top-color:#E5E5E5; border-top-width: 1px; border-style: solid;">
            <Avatar width={40} css="margin-right: 12px;" src={user.avatar} />
            <View>
                <Row>
                    <PositionBox>
                        <AppText bold>{user.name}</AppText>
                    </PositionBox>
                    <AppText fs={13} color={colors.ligthGray}>{time}</AppText>
                </Row>
                <AppText>{message}</AppText>
            </View>
        </Row>
    );
};

const PositionBox = styled.View`
    margin-right: 6px;
`
