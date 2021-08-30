import React, {FC} from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import {colors} from '../styles/colors';
import {Row} from './Row';
import {Input} from './Input';
import { css } from 'styled-components';
import styled from 'styled-components/native';

interface DetailHeaderProps {
  title: string;
  onSubmitForm: (values: FormProps) => void;
}

export const DetailHeader: FC<DetailHeaderProps> = ({
  title,
  children,
  onSubmitForm,
}) => {
  return (
    <HeaderWrapper>
      <Row containerStyled={styleRow}>
        {children}
      </Row>
      <Form
        onSubmit={onSubmitForm}
        initialValues={{title: title}}
        render={({handleSubmit}) => {
          return (
            <Field
              name="title"
              render={({input}) => {
                return (
                  <Input
                    color={colors.white}
                    multiline={true}
                    value={input.value}
                    onChangeText={input.onChange}
                    onBlur={handleSubmit}
                  />
                );
              }}
            />
          );
        }}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.View`
  padding: 20px 15px 23px 15px;
  background-color: ${colors.gray};
`;

const styleRow = css`
  justify-content: space-between;
  margin-bottom: 15px;
`