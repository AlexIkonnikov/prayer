import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { View, Button, TextInput } from "react-native";
import { IColumn } from "../../store/ducks/column";
import { colors } from "../../styles/colors";
import { Row } from "../../ui/Row";
import { StyledContainer } from "../../ui/StyledContainer";

interface EditableColumnProps {
    column: IColumn
    updateResource: (column: IColumn) => void
    deleteResource: () => void
    cancel: () => void
}

const EditableColumn: FC<EditableColumnProps> = ({ column, updateResource, cancel, deleteResource }) => {

    const submitHandler = (values: FormProps) => {
        if (values.title === column.title) {
            cancel();
        } else {
            updateResource({id: column.id, title: values.title, description: column.description, userId: column.userId});
            cancel();
        }
    }

    return (
        <Form
            onSubmit={submitHandler}
            initialValues={{title: column.title}}
            render={({ handleSubmit }) => {
                return (
                    <View>
                        <Field name="title" render={({ input }) => {
                            return (
                                <StyledContainer containerStyled={`flex-grow: 1; align-items: center;`}>
                                    <TextInput autoFocus value={input.value} onChangeText={input.onChange} />
                                </StyledContainer>
                            )
                        }}
                        />
                        <Row containerStyled={`justify-content: space-between;`}>
                            <Button color={colors.blue} title="SAVE" onPress={handleSubmit} />
                            <Button color={colors.ligthGray} title="CANCEL" onPress={cancel} />
                            <Button color={colors.red} title="DELETE" onPress={deleteResource} />
                        </Row>
                    </View>
                )
            }}
        />
    )
};

export default EditableColumn;
