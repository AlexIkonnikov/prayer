import React, {FC} from 'react';
import {ModalProps} from 'react-native';
import styled from 'styled-components/native';

export const AppModal: FC<ModalProps> = ({children, ...outerProps}) => {
  return (
    <MyModal animationType="slide" {...outerProps}>
      {children}
    </MyModal>
  );
};

const MyModal = styled.Modal`
  padding: 25px;
`;
