import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { Plus } from "./icons/Plus";
import { ViewRow } from "./Row";
import { Input } from './Input';

interface AddPrayerFormProps{
    submit: (values: FormProps, form: FormApi<FormProps>) => void
}

export const AddPrayerForm: FC<AddPrayerFormProps> = ({ submit }) => {
    return (
        <Form onSubmit={submit} initialValues={{title: ''}} render={
            ({handleSubmit}) => {
                return (
                    <Wrapper>
                        <Plus width={22} color={colors.blue} onPress={handleSubmit} />
                        <Field  name="title" render={
                            ({input}) => {
                                return <Input placeholder="Add a prayer..." value={input.value} onChangeText={input.onChange} />
                            }
                        }/>
                    </Wrapper>
                )
            }
        }/>
    )
}

const Wrapper = styled(ViewRow)`
    padding-left: 14px;
    height: 50px;
    border-width: 1px;
    border-color: #E5E5E5;
    border-radius: 10px;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 34px;
`;
