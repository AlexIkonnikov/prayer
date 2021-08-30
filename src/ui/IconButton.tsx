import React, {FC} from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface IconButtonProps extends TouchableOpacityProps {
    render: () => React.ReactElement
}

export const IconButton: FC<IconButtonProps> = ({render, ...outerProps}) => {
    return (
        <TouchableOpacity {...outerProps}>
            {render()}
        </TouchableOpacity>
    )
};