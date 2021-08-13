import React, { FC, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AppText } from "../ui/AppText";
import { CheckBox } from "../ui/Checkbox";
import { Hands } from "../ui/icons/Hands";
import { User } from "../ui/icons/User";
import { Row } from "../ui/Row";

interface PrayerItemProps {
    onPress: () => void
}

export const PrayerItem: FC<PrayerItemProps> = ({onPress}) => {

    const [itemState, setItemState] = useState(false);

    return (
        <TouchableOpacity onPress={onPress}>
            <Row css="justify-content: space-between; padding: 18px 0; border-bottom-color:#E5E5E5; border-bottom-width: 1px; border-style: solid;">
                <Row>
                    <CheckBox checked={itemState} onChange={() => { setItemState(!itemState) }} />
                    <AppText>Prayer item two...</AppText>
                </Row>
                <Row>
                    <User userCount={12}/>
                    <Hands prayerCount={15}/>
                </Row>
            </Row>
        </TouchableOpacity>
    )
};