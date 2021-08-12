import React, { FC, useState } from "react";
import { Text } from "react-native";
import { CheckBox } from "../ui/Checkbox";
import { GroupIcons } from "../ui/icons/GroupIcons";
import { Row } from "../ui/Row";

export const PrayerItem: FC = () => {

    const [itemState, setItemState] = useState(false);

    return (
        <Row css="justify-content: space-between; padding: 18px 0; border-bottom-color:#E5E5E5; border-bottom-width: 1px; border-style: solid;">
            <Row>
                <CheckBox checked={itemState} onChange={() => { setItemState(!itemState) }} />
                <Text style={{ fontSize: 17 }}>Prayer item two...</Text>
            </Row>
            <GroupIcons userCount={15} prayerCount={123} />
        </Row>
    )
};