import React, { FC } from "react";
import { colors } from "../../styles/colors";
import { AppText } from "../../ui/AppText";
import { Avatar } from "../../ui/Avatar";
import { RoundButton } from "../../ui/RoundButton";
import { Row } from "../../ui/Row";
import { StyledContainer } from "../../ui/StyledContainer";

interface MemberListProps {
    srcs: Array<string>
}

const MemberList: FC<MemberListProps> = ({srcs}) => {
    return (
        <StyledContainer containerStyled={`margin: 0 15px 30px;`}>
            <AppText fs={13} color={colors.blue} upp bold>Members</AppText>
            <Row containerStyled={`margin-top: 15px;`}>
                {srcs.map((src, idx) => <Avatar src={src} key={src + idx}/>)}
                <RoundButton/>
            </Row>
        </StyledContainer>
    )
};

export default MemberList;