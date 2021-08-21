import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { NativeSyntheticEvent, TextInputEndEditingEventData } from "react-native";
import { selectors } from "../../store/ducks";
import { useAppSelector } from "../../store/hooks";
import { colors } from "../../styles/colors";
import { Plus } from "../../ui/icons/Plus";
import { Input } from "../../ui/Input";
import { Loader } from "../../ui/Loader";
import { StyledContainer } from "../../ui/StyledContainer";

interface AddColumnFormProps {
    submit: (text: string) => void
    inputText: string
}

const AddColumnForm: FC<AddColumnFormProps> = ({ inputText, submit }) => {

    const dataUpdateStatus = useAppSelector(selectors.column.selectDataUpdateStatus);

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
                            <StyledContainer containerStyled={`flex-grow: 1; align-items: center;`}>
                                <Field name="text" render={
                                    ({ input }) => {
                                        return (
                                            <Input bold value={input.value} onChangeText={input.onChange} onEndEditing={(e) => { checkForm(e, form) }} />
                                        )
                                    }
                                } />
                            </StyledContainer>
                            {dataUpdateStatus === 'inProcess' ?
                                <Loader size="small" /> :
                                <Plus color={colors.blue} onPress={handleSubmit} disabled={!values.text} />
                            }
                        </>
                    )
                }
            }
        />
    );
}

export default AddColumnForm;