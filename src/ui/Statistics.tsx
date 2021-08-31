import React, {FC} from 'react';
import styled, {css} from 'styled-components/native';
import {colors} from '../styles/colors';
import {AppText} from './AppText';
import {Row} from './Row';

export const Statistics: FC = () => {
  return (
    <ContentWrapper>
      <Row>
        <Wrapper>
          <AppText containerStyled={[bigStyleText, middleStyleText]}>
            July 25 2017
          </AppText>
          <AppText containerStyled={textStyle}>Date Added</AppText>
          <AppText containerStyled={[textStyle, blueText]}>
            Opened for 4 days
          </AppText>
        </Wrapper>
        <Wrapper>
          <AppText containerStyled={bigStyleText}>123</AppText>
          <AppText containerStyled={textStyle}>Times Prayed Total</AppText>
        </Wrapper>
      </Row>
      <Row>
        <Wrapper>
          <AppText containerStyled={bigStyleText}>63</AppText>
          <AppText containerStyled={textStyle}>Times Prayed by Me</AppText>
        </Wrapper>
        <Wrapper>
          <AppText containerStyled={bigStyleText}>60</AppText>
          <AppText containerStyled={textStyle}>Times Prayed by Others</AppText>
        </Wrapper>
      </Row>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.View`
  margin-bottom: 20px;
`;
const Wrapper = styled.View`
  padding-left: 15px;
  height: 108px;
  border: 1px solid ${colors.lightGraySecond};
  width: 50%;
`;

const bigStyleText = css`
  color: ${colors.gray};
  margin-top: 26px;
  font-size: 32px;
`;

const middleStyleText = css`
  font-size: 22px;
`;

const textStyle = css`
  font-size: 13px;
  line-height: 15px;
`;
const blueText = css`
  color: ${colors.blue};
`;
