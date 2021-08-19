import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { TextInput, View } from "react-native";
import { actions, selectors } from "../store/ducks";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Button } from "../ui/Button";
import { Loader } from "../ui/Loader";

export const Registration: FC = () => {

    const dispatch = useAppDispatch();
    const fetchingStatus = useAppSelector(selectors.user.selectFetchingStatus);

    const onSubmitForm = ({ name, email, password }: FormProps, form: FormApi<FormProps>) => {
        dispatch(actions.user.signUpRequest({ email, name, password }));
        form.reset();
    }

    if (fetchingStatus === 'start') {
        return <Loader />
    } 
    return (
        <Form onSubmit={onSubmitForm} render={
            ({ handleSubmit, values }) => {
                return (
                    <View>
                        <Field name="name" render={
                            ({ input }) => {
                                return <TextInput placeholder="Write your name" onChangeText={input.onChange} value={input.value} />
                            }
                        } />
                        <Field name="email" render={
                            ({ input }) => {
                                return <TextInput placeholder="Write your email" onChangeText={input.onChange} value={input.value} />
                            }
                        } />
                        <Field name="password" render={
                            ({ input }) => {
                                return <TextInput placeholder="Write your password" onChangeText={input.onChange} value={input.value} />
                            }
                        } />
                        <Button title="sign up" onPress={handleSubmit} disabled={!values.name || !values.email || !values.password} />
                    </View>
                )
            }
        } />
    );
};