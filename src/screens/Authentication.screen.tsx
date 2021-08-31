import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { actions, selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Button } from '../ui/Button';
import { Loader } from '../ui/Loader';
import { View } from 'react-native';
import { InputField } from '../ui/InputField';
import { AppText } from '../ui/AppText';
import { colors } from '../styles/colors';
import { css } from 'styled-components/native';
import {mailValidator, composeValidators, require} from '../utils/validators';
import { AppModal } from '../ui/AppModal';

export const Authentication: FC = () => {
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector(selectors.user.selectFetchingStatus);
  const errors = useAppSelector(selectors.user.selectErrors);

  const handleSubmitForm = (values: FormProps) => {
    dispatch(
      actions.user.signInRequest({
        email: values.email,
        password: values.password,
      }),
    );
  };

  const handleCloseModal = () => {
    dispatch(actions.user.cleanErrors());
  };

  return (
    <Form
      onSubmit={handleSubmitForm}
      render={({ handleSubmit, invalid }) => {
        return (
          <View>
            <Field
              name="email"
              placeholder="Write your email"
              editable={fetchingStatus === 'stop'}
              validate={composeValidators(require, mailValidator)}
              render={InputField}
            />
            <Field
              name="password"
              placeholder="Write your password"
              secureTextEntry
              validate={require}
              editable={fetchingStatus === 'stop'}
              render={InputField}
            />
            {fetchingStatus === 'start' ? (
              <Loader />
            ) : (
              <Button
                title="sign in"
                onPress={handleSubmit}
                disabled={invalid}
              />
            )}
            <AppModal visible={errors.length > 0}>
              {errors.map((err, index) => (
                <AppText containerStyled={appTextStyle} key={err + index}>
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

const appTextStyle = css`color: ${colors.red};`
