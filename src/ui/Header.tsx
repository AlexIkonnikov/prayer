import React, { FC } from "react";
import styled from "styled-components/native";
import { Container } from "./Container"
 
export const Header: FC = ({ children }) => {
    return (
        <HeaderContainer>
            <Container>
                <Row>
                    {children}
                </Row>
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
    align-items: center;
`;