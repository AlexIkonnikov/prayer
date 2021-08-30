import React, { FC } from 'react';
import { TabRoute } from '../routes/TabRoute';
import { Header } from '../ui/Header';
import { AppText } from '../ui/AppText';
import { SettingIcon } from '../ui/icons/SettingIcon';
import { StyledContainer } from '../ui/StyledContainer';
import { AppModal } from '../ui/AppModal';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { useAppDispatch } from '../store/hooks';
import { actions } from '../store/ducks';
import { ColumnScreenProps } from '../routes/MainRoute';

export const Column: FC<ColumnScreenProps> = ({ route }) => {
  const dispatch = useAppDispatch();
  const [stateModal, setStateModal] = useState(false);

  const openModal = () => {
    setStateModal(true);
  };

  const closeModal = () => {
    setStateModal(false);
  };

  const logOut = () => {
    dispatch(actions.user.logOut());
  };
  return (
    <React.Fragment>
      <Header withTab>
        <StyledContainer containerStyled={'flex-grow: 1; align-items: center;'}>
          <AppText bold>{route.params.name}</AppText>
        </StyledContainer>
        <SettingIcon onPress={openModal} />
      </Header>
      <TabRoute columnId={route.params.id}/>
      <AppModal visible={stateModal}>
        <AppText>Do you want to log out?</AppText>
        <Button title="YES" onPress={logOut} />
        <Button title="NO" onPress={closeModal} />
      </AppModal>
    </React.Fragment>
  );
};
