import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import styled from "styled-components/native";
import { colors } from "../styles/colors";
import { Row } from "./Row";
import { Input } from "./Input";

interface DetailHeaderProps {
    title?: string
    submit: (title: string) => void
}

export const DetailHeader: FC<DetailHeaderProps> = ({title, children, submit}) => {
    return (
        <Wrapper>
            <Row css="justify-content: space-between; margin-bottom: 15px;">
                {children}
            </Row>
            <Form 
                onSubmit={(values: FormProps) => {submit(values.title)}}
                initialValues={{title: title}}
                render={
                    ({handleSubmit}) => {
                        return <Field 
                            name="title"
                            render={
                                ({input}) => {
                                    return <Input color={colors.white} multiline={true} value={input.value} onChangeText={input.onChange} onBlur={handleSubmit} />
                                }
                            }
                        />
                    }
                }
            />
        </Wrapper>
    )
};

const Wrapper = styled.View`
    padding: 20px 15px 23px 15px;
    background-color: #BFB393;
`;