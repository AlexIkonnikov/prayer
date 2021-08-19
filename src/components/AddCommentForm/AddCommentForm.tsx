import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { actions } from "../../store/ducks";
import { useAppDispatch } from "../../store/hooks";
import { Input } from "../../ui/Input";
import { Message } from "../../ui/icons/Message";
import { StyledContainer } from "../../ui/StyledContainer";

interface AddCommentPayloadProps {
    prayerId: number
}

const AddCommentForm: FC<AddCommentPayloadProps> = ({prayerId}) => {
    const dispatch = useAppDispatch();
    const onSubmitHandler = ({body}: FormProps, form: FormApi<FormProps>) => {
        dispatch(actions.comment.addCommentRequest({id: prayerId, body}));
        form.reset();
    }

    return (
        <Form
            onSubmit={onSubmitHandler}
            render={
                ({handleSubmit, pristine}) => {
                    return (
                        <StyledContainer containerStyled={`
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            padding-left: 14px;
                            height: 50px;
                            width: 100%;
                            border-top-width: 1px;
                            border-color: #E5E5E5;
                        `}>
                            <Message disabled={pristine} onPress={handleSubmit}/>
                            <Field
                                name="body"
                                render={
                                    ({input}) => {
                                        return <Input placeholder="Add a comment..." value={input.value} onChangeText={input.onChange} />
                                    }
                                }
                            />
                        </StyledContainer>
                    )
                }
            }
        />
    )
};

export default AddCommentForm;