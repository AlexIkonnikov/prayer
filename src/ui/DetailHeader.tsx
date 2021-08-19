import React, { FC } from "react";
import { Field, Form, FormProps } from "react-final-form";
import { colors } from "../styles/colors";
import { Row } from "./Row";
import { Input } from "./Input";
import { StyledContainer } from "./StyledContainer";

interface DetailHeaderProps {
    title?: string
    submit: (title: string) => void
}

export const DetailHeader: FC<DetailHeaderProps> = ({ title, children, submit }) => {
    return (
        <StyledContainer containerStyled={`
            padding: 20px 15px 23px 15px;
            background-color: ${colors.gray};`
        }>
            <Row containerStyled={`
                justify-content: space-between; 
                margin-bottom: 15px;`
            }>
                {children}
            </Row>
            <Form
                onSubmit={(values: FormProps) => { submit(values.title) }}
                initialValues={{ title: title }}
                render={
                    ({ handleSubmit }) => {
                        return <Field
                            name="title"
                            render={
                                ({ input }) => {
                                    return <Input color={colors.white} multiline={true} value={input.value} onChangeText={input.onChange} onBlur={handleSubmit} />
                                }
                            }
                        />
                    }
                }
            />
        </StyledContainer>
    )
};