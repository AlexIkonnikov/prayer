import React, {FC} from 'react';
import {FieldRenderProps} from 'react-final-form';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import {colors} from '../styles/colors';
import { Input } from './Input';
import styled from 'styled-components/native';

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
    <FieldWrapper>
      <Input {...input} {...meta} {...outerProps} />
    </FieldWrapper>
  );
};

const FieldWrapper = styled.View`
  margin: 0 auto;
  margin-top: 20px;
  padding: 0;
  width: 80%;
  padding: 0 15px;
  border-radius: 5px;
  border: 1px solid ${colors.blue};
`