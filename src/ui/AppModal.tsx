import React, {FC} from 'react';
import {ModalProps, Modal} from 'react-native';
import styled from 'styled-components/native';

export const AppModal: FC<ModalProps> = ({children, ...outerProps}) => {
  return (
    <Modal animationType="slide" {...outerProps}>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

const ModalBody = styled.View`
  padding: 25px;
`;
