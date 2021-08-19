import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { actions, selectors } from "../store/ducks";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Button } from "../ui/Button";
import { Loader } from "../ui/Loader";
import { View } from "react-native";
import { InputField } from "../ui/InputField";

export const Authentication: FC = () => {

    const dispatch = useAppDispatch();
    const fetchingStatus = useAppSelector(selectors.user.selectFetchingStatus);

    const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
        dispatch(actions.user.signInRequest({ email: values.email, password: values.password }));
    }

    return (
        <Form onSubmit={onSubmitForm} render={
            ({ handleSubmit, values }) => {
                return (
                    <View>
                        <Field name="email" placeholder="Write your email" render={InputField} />
                        <Field name="password" placeholder="Write your password" secureTextEntry  render={InputField} />
                        {fetchingStatus == "start" ? <Loader /> : <Button title="sign in" onPress={handleSubmit} disabled={!values.password || !values.email} />}
                    </View>
                )
            }
        } />
    );
};
