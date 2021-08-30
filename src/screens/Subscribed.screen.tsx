import React from 'react';
import {PrayerList} from '../components/PrayerList';
import { FC } from 'react';
import { ColumnScreenProps } from '../routes/MainRoute';
import styled from 'styled-components/native';

export const Subscribed: FC<ColumnScreenProps> = ({navigation, route}) => {
  return (
    <Wrapper>
      <PrayerList navigation={navigation} route={route} />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin-top: 15px;
`
