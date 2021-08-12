import React, { FC } from "react";
import styled from "styled-components/native";
import { Container } from "./Container";
import { StyledText } from "./Card";


interface HeaderProps {
    name: string
    Icon: FC
}

export const Header: FC<HeaderProps> = ({ children, name, Icon }) => {
    return (
        <HeaderContainer>
            <Container>
                <Row>
                    <HeaderText>{name}</HeaderText>
                    <Icon/>
                </Row>
                {children}
            </Container>
        </HeaderContainer>
    )
};

const HeaderContainer = styled.View`
    margin-bottom: 15px;
    border-bottom-color: #E5E5E5;
    border-bottom-width: 1px;
    border-style: solid;
`;

const HeaderText = styled(StyledText)`
    flex-grow: 1;
    text-align: center;
`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 22px 0;
`;