import { FormApi } from "final-form";
import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { Plus } from "./icons/Plus";
import { ViewRow } from "./Row";
import { StyledInput } from './StyledInput';

interface InputProps{
    submit: (values: FormProps, form: FormApi<FormProps>) => void
}

export const Input: FC<InputProps> = ({ submit }) => {
    return (
        <Form onSubmit={submit} initialValues={{title: ''}} render={
            ({handleSubmit}) => {
                return (
                    <Wrapper>
                        <Plus width={22} color={colors.blue} onPress={handleSubmit} />
                        <Field  name="title" render={
                            ({input}) => {
                                return <StyledInput placeholder="Add a prayer..." value={input.value} onChangeText={input.onChange} />
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
    margin-bottom: 34px;
`;
