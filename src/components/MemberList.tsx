import React from "react";
import { FC } from "react";
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
            <AppText css="margin-bottom: 15px;">Members</AppText>
            <Row>
                {srcs.map((src, idx) => <Avatar src={src} key={src + idx}/>)}
                <RoundButton/>
            </Row>
        </Container>
    )
}