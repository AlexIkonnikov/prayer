import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const CheckMark: FC = () => {
    return (
        <Svg width="14" height="13" viewBox="0 0 14 13" fill="none">
            <Path d="M13 1L4.75 12L1 7" stroke="#514D47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
};
