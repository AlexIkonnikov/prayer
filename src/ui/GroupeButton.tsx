import React, {FC} from 'react';
import {Button, NativeSyntheticEvent, NativeTouchEvent} from 'react-native';
import {colors} from '../styles/colors';
import {Row} from './Row';

interface GroupeButtonProps {
  cancel: () => void;
  save: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  deleted: () => void;
}

export const GroupeButton: FC<GroupeButtonProps> = ({
  save,
  cancel,
  deleted,
}) => {
  return (
    <Row
      containerStyled={`
            justify-content:space-between;
            width:80%;
            margin:0 auto;
            margin-top:20px;
        `}>
      <Button title="save" color={colors.blue} onPress={save} />
      <Button title="cancel" color={colors.ligthGray} onPress={cancel} />
      <Button title="delete" color={colors.red} onPress={deleted} />
    </Row>
  );
};
