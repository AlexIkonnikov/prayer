import { useRoute } from "@react-navigation/native";
import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { actions } from "../../store/ducks";
import { useAppDispatch } from "../../store/hooks";
import { colors } from "../../styles/colors";
import { ColumnScreenRouteProp } from "../../types";
import { Plus } from "../../ui/icons/Plus";
import { Input } from '../../ui/Input';
import { StyledContainer } from "../../ui/StyledContainer";

export const AddPrayerForm: FC = () => {

    const dispatch = useAppDispatch();
    const route = useRoute<ColumnScreenRouteProp>();
    const createPrayer = (values: FormProps, form: FormApi<FormProps>) => {
        dispatch(actions.prayer.addPrayerToColumnRequest({
            columnId: route.params.id,
            title: values.title,
            description: '',
            checked: false
        }));
        form.reset();
    };

    return (
        <Form onSubmit={createPrayer} initialValues={{title: ''}} render={
            ({handleSubmit}) => {
                return (
                    <StyledContainer containerStyled={`
                        padding-left: 14px;
                        height: 50px;
                        border-width: 1px;
                        border-color: #E5E5E5;
                        border-radius: 10px;
                        width: 100%;
                        margin-top: 15px;
                        margin-bottom: 34px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    `}>
                        <Plus width={22} color={colors.blue} onPress={handleSubmit} />
                        <Field  name="title" render={
                            ({input}) => {
                                return <Input placeholder="Add a prayer..." value={input.value} onChangeText={input.onChange} />
                            }
                        }/>
                    </StyledContainer>
                )
            }
        }/>
    )
};

