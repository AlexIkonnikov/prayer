import React, { FC } from "react";
import styled from "styled-components/native";
import { Container } from "./Container"
import { AppText } from "./AppText";
 
interface HeaderProps {
    name: string
    icon?: () => JSX.Element
}

export const Header: FC<HeaderProps> = ({ children, name, icon }) => {
    return (
        <HeaderContainer>
            <Container>
                <Row>
                    <TextWrapper>
                        <AppText bold>{name}</AppText>
                    </TextWrapper>
                    { icon && icon()}
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
    padding: 22px 0;
`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const TextWrapper = styled.View`
    flex-grow: 1;
    align-items: center;
`;