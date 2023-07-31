import React, {FC} from 'react';
import {Line} from './Line';
import {Container} from './Container';
import {Row} from './Row';
import {AppText} from './AppText';
import {css} from 'styled-components';

interface LastTimeProps {
  timeInMin: number;
}

export const LastTime: FC<LastTimeProps> = ({timeInMin}) => {
  return (
    <Container>
      <Row containerStyled={rowStyle}>
        <Line />
        <AppText>Last prayed {timeInMin} min ago</AppText>
      </Row>
    </Container>
  );
};

const rowStyle = css`
  padding: 15px 0;
`;
