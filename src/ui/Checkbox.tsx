import React, { FC } from "react";
import styled from "styled-components/native";
import { CheckMark } from "./icons/CheckMark";
import { Line } from "./Line";
import { Row } from "./Row";

interface CheckBoxProps {
    checked: boolean
    onChange: () => void
}

export const CheckBox: FC<CheckBoxProps> = ({ checked, onChange }) => {
    return (
        <Row>
            <Line />
            <Row css="padding-right: 15px;">
                <Box onPress={onChange}>
                    { checked && <CheckMark/> }
                </Box>
            </Row>
        </Row>
    )
};

const Box = styled.TouchableOpacity`
    width: 22px;
    height: 22px;
    border-color: #514D47;
    border-width: 1px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`