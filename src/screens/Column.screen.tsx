import React, {FC} from 'react';
import {TabRoute} from '../routes/TabRoute';
import {Header} from '../ui/Header';
import {AppText} from '../ui/AppText';
import {SettingIcon} from '../ui/icons/SettingIcon';
import {AppModal} from '../ui/AppModal';
import {useState} from 'react';
import {Button} from '../ui/Button';
import {useAppDispatch} from '../store/hooks';
import {actions} from '../store/ducks';
import {ColumnScreenProps} from '../routes/MainRoute';
import {IconButton} from '../ui/IconButton';
import styled, {css} from 'styled-components/native';

export const Column: FC<ColumnScreenProps> = ({route}) => {
  const dispatch = useAppDispatch();
  const [stateModal, setStateModal] = useState(false);

  const handleOpenModal = () => {
    setStateModal(true);
  };

  const handleCloseModal = () => {
    setStateModal(false);
  };

  const handleLogOut = () => {
    dispatch(actions.user.logOut());
  };
  return (
    <React.Fragment>
      <Header isWithTab={true}>
        <TextWrapper>
          <AppText containerStyled={boldText}>{route.params.name}</AppText>
        </TextWrapper>
        <IconButton onPress={handleOpenModal} render={() => <SettingIcon />} />
      </Header>
      <TabRoute columnId={route.params.id} />
      <AppModal visible={stateModal}>
        <AppText>Do you want to log out?</AppText>
        <Button title="YES" onPress={handleLogOut} />
        <Button title="NO" onPress={handleCloseModal} />
      </AppModal>
    </React.Fragment>
  );
};

const boldText = css`
  font-weight: bold;
`;

const TextWrapper = styled.View`
  flex-grow: 1;
  align-items: center;
`;
