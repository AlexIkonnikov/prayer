import React, {FC} from 'react';
import {FieldRenderProps} from 'react-final-form';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import {StyledContainer} from './StyledContainer';
import {colors} from '../styles/colors';
import {TextInput} from 'react-native';
import { Input } from './Input';

interface InputFieldProps extends FieldRenderProps<string> {
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

export const InputField: FC<InputFieldProps> = ({
  input,
  meta,
  ...outerProps
}) => {
  return (
    <StyledContainer
      containerStyled={`
            margin: 0 auto;
            margin-top: 20px;
            padding: 0;
            width: 80%;
            padding: 0 15px;
            border-radius: 5px;
            border: 1px solid ${colors.blue};`}>
      <Input {...input} {...meta} {...outerProps} />
    </StyledContainer>
  );
};
