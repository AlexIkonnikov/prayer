import React from 'react';
import {StyledContainer} from '../ui/StyledContainer';
import {PrayerList} from '../components/PrayerList';

export const Subscribed = () => {
  return (
    <StyledContainer containerStyled={'marginTop: 15px;'}>
      <PrayerList />
    </StyledContainer>
  );
};
