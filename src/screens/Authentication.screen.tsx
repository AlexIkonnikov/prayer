import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { actions, selectors } from "../store/ducks";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Button } from "../ui/Button";
import { Loader } from "../ui/Loader";
import { Input } from "../ui/Input";
import { View } from "react-native";

export const Authentication: FC = () => {

    const dispatch = useAppDispatch();
    const fetchingStatus = useAppSelector(selectors.user.selectFetchingStatus);
    const errors= useAppSelector(selectors.user.selectErrors);

    const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
        dispatch(actions.user.signInRequest({ email: values.email, password: values.password }));
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
                        <Field name="email" render={
                            ({ input }) => {
                                return (
                                    <Input placeholder="Write your email" value={input.value} onChangeText={input.onChange} />
                                )
                            }
                        } />
                        <Field name="password" render={
                            ({ input }) => {
                                return <Input placeholder="Write your password" secureTextEntry value={input.value} onChangeText={input.onChange} />
                            }
                        } />
                        <Button title="sign in" onPress={handleSubmit} disabled={!values.password || !values.email} />
                    </View>
                )
            }
        } />
    );
};
