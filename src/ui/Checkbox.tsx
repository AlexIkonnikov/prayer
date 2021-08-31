import React, {FC} from 'react';
import styled, { css } from 'styled-components/native';
import {CheckMarkIcon} from './icons/CheckMarkIcon';
import {Row} from './Row';
import {colors} from './../styles/colors'

interface CheckBoxProps {
  checked: boolean;
  onChange: () => void;
}

export const CheckBox: FC<CheckBoxProps> = ({checked, onChange}) => {
  return (
    <Row containerStyled={rowStyle}>
      <TouchableBox onPress={onChange}>{checked && <CheckMarkIcon />}</TouchableBox>
    </Row>
  );
};

const TouchableBox = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  border-color: ${colors.lightBlack};
  border-width: 1px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

const rowStyle = css`padding-right: 15px;`
