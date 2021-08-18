import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { NativeSyntheticEvent, TextInputEndEditingEventData } from "react-native";
import { colors } from "../../styles/colors";
import { Center } from "../../ui/Center";
import { Plus } from "../../ui/icons/Plus";
import { StyledInput } from "../../ui/StyledInput";

interface AddColumnFormProps {
    submit: (text: string) => void
    inputText: string
}

const AddColumnForm: FC<AddColumnFormProps> = ({ inputText, submit }) => {

    const checkForm = ({ nativeEvent }: NativeSyntheticEvent<TextInputEndEditingEventData>, form: FormApi<FormProps>) => {
        if (nativeEvent.text === '') {
            form.restart();
        }
    }

    const submitHandler = (values: FormProps) => {
        submit(values.text);
    }

    return (
        <Form
            onSubmit={submitHandler}
            initialValues={{ text: inputText }}
            render={
                ({ handleSubmit, form, values }) => {
                    return (
                        <>
                            <Center>
                                <Field name="text" render={
                                    ({ input }) => {
                                        return (
                                            <StyledInput value={input.value} onChangeText={input.onChange} onEndEditing={(e) => { checkForm(e, form) }} />
                                        )
                                    }
                                } />
                            </Center>
                            <Plus color={colors.blue} onPress={handleSubmit} disabled={!values.text} />
                        </>
                    )
                }
            }
        />
    );
}

export default AddColumnForm;