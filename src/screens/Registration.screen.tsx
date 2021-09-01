import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { View } from 'react-native';
import { css } from 'styled-components/native';
import { actions, selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { colors } from '../styles/colors';
import { AppModal } from '../ui/AppModal';
import { AppText } from '../ui/AppText';
import { Button } from '../ui/Button';
import { InputField } from '../ui/InputField';
import {
  composeValidators,
  mailValidator,
  require,
  confirm,
} from '../utils/validators';

export const Registration: FC = () => {
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector(selectors.user.selectFetchingStatus);
  const errors = useAppSelector(selectors.user.selectErrors);

  const handleSubmitForm = ({ name, email, password }: FormProps) => {
    dispatch(actions.user.signUpRequest({ email, name, password }));
  };

  const handleCloseModal = () => {
    dispatch(actions.user.cleanErrors());
  };

  return (
    <Form
      onSubmit={handleSubmitForm}
      render={({ handleSubmit, values }) => {
        return (
          <View>
            <Field
              name="name"
              placeholder="Write your name"
              render={InputField}
              validate={require}
            />
            <Field
              name="email"
              placeholder="Write your email"
              render={InputField}
              validate={composeValidators(require, mailValidator)}
            />
            <Field
              name="password"
              placeholder="Write your password"
              secureTextEntry
              render={InputField}
              validate={require}
            />
            <Field
              name="confirmPassword"
              placeholder="Confirm your password"
              secureTextEntry
              render={InputField}
              validate={confirm}
            />
            <Button
              title="sign up"
              onPress={handleSubmit}
              disabled={!values.name || !values.email || !values.password}
              isLoading={fetchingStatus === 'start'}
            />
            <AppModal visible={errors.length > 0}>
              {errors.map((err, index) => (
                <AppText containerStyled={errorTextStyle} key={err + index}>
                  {err}
                </AppText>
              ))}
              <Button title="Ok" onPress={handleCloseModal} />
            </AppModal>
          </View>
        );
      }}
    />
  );
};

const errorTextStyle = css`
  color: ${colors.red};
`;
