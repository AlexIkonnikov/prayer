import React, {FC} from 'react';
import {FieldRenderProps} from 'react-final-form';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import {colors} from '../styles/colors';
import {Input} from './Input';
import styled, {css} from 'styled-components/native';
import {AppText} from './AppText';

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
    <InputWrapper>
      <BorderWrapper>
        <Input {...input} {...outerProps} />
      </BorderWrapper>
      {meta.error && meta.touched && (
        <AppText containerStyled={errorStyleText}>{meta.error}</AppText>
      )}
    </InputWrapper>
  );
};

const errorStyleText = css`
  color: ${colors.red};
`;

const InputWrapper = styled.View`
  margin: 0 auto;
  margin-top: 20px;
  padding: 0;
  width: 80%;
  padding: 0 15px;
`;

const BorderWrapper = styled.View`
  border-radius: 5px;
  border: 1px solid ${colors.blue};
`;
