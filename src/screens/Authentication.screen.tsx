import React, {FC} from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import {actions, selectors} from '../store/ducks';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {Button} from '../ui/Button';
import {View} from 'react-native';
import {InputField} from '../ui/InputField';
import {mailValidator, composeValidators, require} from '../utils/validators';
import {ErrorText} from '../components/ErrorText';

export const Authentication: FC = () => {
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector(selectors.user.selectFetchingStatus);
  const error = useAppSelector(selectors.user.selectSignInError);

  const handleSubmitForm = (values: FormProps) => {
    dispatch(
      actions.user.signInRequest({
        email: values.email,
        password: values.password,
      }),
    );
  };

  return (
    <Form
      onSubmit={handleSubmitForm}
      render={({handleSubmit, invalid}) => {
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
            <ErrorText error={error} />
            <Button
              title="sign in"
              onPress={handleSubmit}
              disabled={invalid}
              isLoading={fetchingStatus === 'start'}
            />
          </View>
        );
      }}
    />
  );
};
