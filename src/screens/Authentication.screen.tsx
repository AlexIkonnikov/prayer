import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { View, TextInput, Text, Modal } from "react-native";
import { actions, selectors } from "../store/ducks";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Loader } from "../ui/Loader";

export const Authentication: FC = () => {

    const dispatch = useAppDispatch();
    const fetchingStatus = useAppSelector(selectors.user.selectFetchingStatus);
    const errors= useAppSelector(selectors.user.selectErrors);

    const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
        dispatch(actions.user.signInRequest({ email: values.email, password: values.password }))
        form.reset();
    }

    if (fetchingStatus === 'start') {
        return <Loader />
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
            <Modal animationType="slide"visible={errors.length > 0} >
                <View>
                   {errors.map((err) => <Text style={{color: 'red'}}>{err}</Text>)}
                   <Button title="Ok" onPress={() => {dispatch(actions.user.cleanErrors())}}/>
                </View>
            </Modal>
        </Container>
    );

}