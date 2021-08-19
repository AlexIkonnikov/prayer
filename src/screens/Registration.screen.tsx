import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { View } from "react-native";
import { actions, selectors } from "../store/ducks";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Button } from "../ui/Button";
import { InputField } from "../ui/InputField";
import { Loader } from "../ui/Loader";

export const Registration: FC = () => {

    const dispatch = useAppDispatch();
    const fetchingStatus = useAppSelector(selectors.user.selectFetchingStatus);

    const onSubmitForm = ({ name, email, password }: FormProps, form: FormApi<FormProps>) => {
        dispatch(actions.user.signUpRequest({ email, name, password }));
    }
 
    return (
        <Form onSubmit={onSubmitForm} render={
            ({ handleSubmit, values }) => {
                return (
                    <View>
                        <Field name="name" placeholder="Write your name" render={InputField} />
                        <Field name="email" placeholder="Write your email" render={InputField} />
                        <Field name="password" placeholder="Write your password" secureTextEntry  render={InputField} />
                        {fetchingStatus === 'start' ? 
                            <Loader/> :
                            <Button title="sign up" onPress={handleSubmit} disabled={!values.name || !values.email || !values.password} />
                        }
                    </View>
                )
            }
        } />
    );
};