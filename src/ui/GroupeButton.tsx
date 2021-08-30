import React, {FC} from 'react';
import {Button, NativeSyntheticEvent, NativeTouchEvent} from 'react-native';
import {colors} from '../styles/colors';
import {Row} from './Row';

interface GroupeButtonProps {
  onCancel: () => void;
  onSave: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onDeleted: () => void;
}

export const GroupeButton: FC<GroupeButtonProps> = ({
  onSave,
  onCancel,
  onDeleted,
}) => {
  return (
    <Row
      containerStyled={`
            justify-content:space-between;
            width:80%;
            margin:0 auto;
            margin-top:20px;
        `}>
      <Button title="save" color={colors.blue} onPress={onSave} />
      <Button title="cancel" color={colors.ligthGray} onPress={onCancel} />
      <Button title="delete" color={colors.red} onPress={onDeleted} />
    </Row>
  );
};
