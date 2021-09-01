import React, {FC} from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import {View} from 'react-native';
import {ErrorText} from '../components/ErrorText';
import {actions, selectors} from '../store/ducks';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {Button} from '../ui/Button';
import {InputField} from '../ui/InputField';
import {
  composeValidators,
  mailValidator,
  require,
  confirm,
} from '../utils/validators';

export const Registration: FC = () => {
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector(selectors.user.selectFetchingStatus);
  const error = useAppSelector(selectors.user.selectSignUpError);

  const handleSubmitForm = ({name, email, password}: FormProps) => {
    dispatch(actions.user.signUpRequest({email, name, password}));
  };

  return (
    <Form
      onSubmit={handleSubmitForm}
      render={({handleSubmit, values}) => {
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
            <ErrorText error={error} />
            <Button
              title="sign up"
              onPress={handleSubmit}
              disabled={!values.name || !values.email || !values.password}
              isLoading={fetchingStatus === 'start'}
            />
          </View>
        );
      }}
    />
  );
};
