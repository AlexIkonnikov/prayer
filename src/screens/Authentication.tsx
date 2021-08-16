import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { View, TextInput, ActivityIndicator } from "react-native";
import { actions, selectors } from "../store/ducks";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { colors } from "../styles/colors";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export const Authentication: FC = () => {

    const dispatch = useAppDispatch();
    const fetchingStatus = useAppSelector(selectors.user.selectFetchingStatus);

    const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
        dispatch(actions.user.signInRequest({ email: values.email, password: values.password }))
        form.reset();
    }

    if (fetchingStatus === 'start') {
        return <ActivityIndicator size="large" color={colors.blue} />
    }
    return (
        <Container>
            <Form onSubmit={onSubmitForm} render={
                ({ handleSubmit, values }) => {
                    return (
                        <View>
                            <Field name="email" render={
                                ({ input }) => {
                                    return (
                                        <TextInput placeholder="Write your email" value={input.value} onChangeText={input.onChange} />
                                    )
                                }
                            } />
                            <Field name="password" render={
                                ({ input }) => {
                                    return <TextInput placeholder="Write your password" secureTextEntry value={input.value} onChangeText={input.onChange} />
                                }
                            } />
                            <Button title="sign in" onPress={handleSubmit} disabled={!values.password || !values.email} />
                        </View>
                    )
                }
            } />
        </Container>
    );

}