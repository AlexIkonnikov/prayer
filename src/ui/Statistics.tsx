import React, {FC} from 'react';
import {CSSProp} from 'styled-components';
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
          <StyledText>Date Added</StyledText>
          <StyledText $CSS={textStyle}>Opened for 4 days</StyledText>
        </Wrapper>
        <Wrapper>
          <AppText containerStyled={bigStyleText}>123</AppText>
          <StyledText>Times Prayed Total</StyledText>
        </Wrapper>
      </Row>
      <Row>
        <Wrapper>
          <AppText containerStyled={bigStyleText}>63</AppText>
          <StyledText>Times Prayed by Me</StyledText>
        </Wrapper>
        <Wrapper>
          <AppText containerStyled={bigStyleText}>60</AppText>
          <StyledText>Times Prayed by Others</StyledText>
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

const StyledText = styled.Text<{$CSS?: CSSProp}>`
  font-size: 13px;
  line-height: 15px;
  ${({$CSS}) => $CSS};
`;

const textStyle = css`
  color: ${colors.blue};
`;
