import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { Button, View } from "react-native";
import { actions } from "../../store/ducks";
import { IComment } from "../../store/ducks/comment/types";
import { selectors } from "../../store/ducks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { colors } from "../../styles/colors";
import { Input } from "../../ui/Input";
import { Loader } from "../../ui/Loader";
import { Row } from "../../ui/Row";

const EditableComment: FC<IComment> = ({id, body}) => {

    const dispatch = useAppDispatch();
    const status = useAppSelector(selectors.comment.selectDataUpdateStatus);

    const updateComment = (values: FormProps) => {
        dispatch(actions.comment.updateCommentRequest({id, body: values.body }));
    }

    const deleteComment = () => {
        dispatch(actions.comment.deleteCommentRequest(id));
    }

    return (
        <Form
            onSubmit={updateComment}
            initialValues={{body}}
            render={
                ({handleSubmit})=> {
                    return (
                        <View>
                            <Field
                                name="body"
                                render={
                                    ({input}) => {
                                        return <Input value={input.value} onChangeText={input.onChange}/>
                                    }
                                }
                            />
                            {status === 'inProcess' ? 
                                <Loader/> : 
                                <Row>
                                    <Button title="save" color={colors.gray} onPress={handleSubmit} />
                                    <Button title="delete" color={colors.red} onPress={deleteComment} />
                                </Row>
                            }
                        </View>
                    )
                }
            }
        />
    )
};

export default EditableComment;