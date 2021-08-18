import { DefaultTheme } from "@react-navigation/native";
import { colors } from "./colors";

export const navigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.white
    }
};