import React from 'react';
import {StyledContainer} from '../ui/StyledContainer';
import {PrayerList} from '../components/PrayerList';
import { FC } from 'react';
import { ColumnScreenProps } from '../routes/MainRoute';

export const Subscribed: FC<ColumnScreenProps> = ({navigation, route}) => {
  return (
    <StyledContainer containerStyled={'marginTop: 15px;'}>
      <PrayerList navigation={navigation} route={route} />
    </StyledContainer>
  );
};
