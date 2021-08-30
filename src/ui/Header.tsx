import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Container} from './Container';

interface HeaderProps {
  withTab?: boolean;
}

export const Header: FC<HeaderProps> = ({children, withTab}) => {
  return (
    <HeaderContainer withTab={withTab ?? false}>
      <Container>
        <Row>{children}</Row>
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View<HeaderProps>`
  ${props =>
    props.withTab === false &&
    `
        margin-bottom: 15px;
        border-bottom-color: #E5E5E5;
        border-bottom-width: 1px;
        border-style: solid;
    `}
  padding: 22px 0;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
