import React, {FC } from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { colors } from "../styles/colors";

export const Loader: FC<ActivityIndicatorProps> = ({...outerProps}) => {
    return <ActivityIndicator size="large" color={colors.blue} {...outerProps}/>
};