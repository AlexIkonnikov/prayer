import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { actions, selectors } from "../store/ducks";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Button } from "../ui/Button";
import { Loader } from "../ui/Loader";
import { View } from "react-native";
import { InputField } from "../ui/InputField";
import { AppModal } from "../ui/AppModal";
import { AppText } from "../ui/AppText";
import { colors } from "../styles/colors";

export const Authentication: FC = () => {

    const dispatch = useAppDispatch();
    const fetchingStatus = useAppSelector(selectors.user.selectFetchingStatus);
    const errors = useAppSelector(selectors.user.selectErrors);

    const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
        dispatch(actions.user.signInRequest({ email: values.email, password: values.password }));
    }

    const closeModal = () => {
        dispatch(actions.user.cleanErrors());
    }

    return (
        <Form onSubmit={onSubmitForm} render={
            ({ handleSubmit, values }) => {
                return (
                    <View>
                        <Field name="email" placeholder="Write your email" render={InputField} />
                        <Field name="password" placeholder="Write your password" secureTextEntry  render={InputField} />
                        {fetchingStatus == "start" ? <Loader /> : <Button title="sign in" onPress={handleSubmit} disabled={!values.password || !values.email} />}
                        <AppModal visible={errors.length > 0}>
                            {errors.map((err, index) => <AppText color={colors.red} key={err + index}>{err}</AppText>)}
                            <Button title="Ok" onPress={closeModal}/>
                        </AppModal>
                    </View>
                )
            }
        } />
    );
};
