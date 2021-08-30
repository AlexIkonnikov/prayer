import React, {FC} from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import {View} from 'react-native';
import {actions, selectors} from '../store/ducks';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {colors} from '../styles/colors';
import {AppModal} from '../ui/AppModal';
import {AppText} from '../ui/AppText';
import {Button} from '../ui/Button';
import {InputField} from '../ui/InputField';
import {Loader} from '../ui/Loader';

export const Registration: FC = () => {
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector(selectors.user.selectFetchingStatus);
  const errors = useAppSelector(selectors.user.selectErrors);

  const closeModal = () => {
    dispatch(actions.user.cleanErrors());
  };

  const onSubmitForm = ({name, email, password}: FormProps) => {
    dispatch(actions.user.signUpRequest({email, name, password}));
  };

  return (
    <Form
      onSubmit={onSubmitForm}
      render={({handleSubmit, values}) => {
        return (
          <View>
            <Field
              name="name"
              placeholder="Write your name"
              render={InputField}
            />
            <Field
              name="email"
              placeholder="Write your email"
              render={InputField}
            />
            <Field
              name="password"
              placeholder="Write your password"
              secureTextEntry
              render={InputField}
            />
            {fetchingStatus === 'start' ? (
              <Loader />
            ) : (
              <Button
                title="sign up"
                onPress={handleSubmit}
                disabled={!values.name || !values.email || !values.password}
              />
            )}
            <AppModal visible={errors.length > 0}>
              {errors.map((err, index) => (
                <AppText color={colors.red} key={err + index}>
                  {err}
                </AppText>
              ))}
              <Button title="Ok" onPress={closeModal} />
            </AppModal>
          </View>
        );
      }}
    />
  );
};
