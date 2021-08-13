import React from "react";
import { FC } from "react";
import { colors } from "../styles/colors";
import { AppText } from "../ui/AppText";
import { Avatar } from "../ui/Avatar";
import { Container } from "../ui/Container";
import { RoundButton } from "../ui/RoundButton";
import { Row } from "../ui/Row";

interface MemberListProps {
    srcs: Array<string>
}

export const MemberList: FC<MemberListProps> = ({srcs}) => {
    return (
        <Container>
            <AppText fs={13} color={colors.blue} upp bold>Members</AppText>
            <Row css="margin-top: 15px;">
                {srcs.map((src, idx) => <Avatar src={src} key={src + idx}/>)}
                <RoundButton/>
            </Row>
        </Container>
    )
};