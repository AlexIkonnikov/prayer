import React, { FC, useState } from "react";
import { TouchableOpacity } from "react-native";
import { actions } from "../../store/ducks";
import { IPrayer } from "../../store/ducks/prayer";
import { useAppDispatch } from "../../store/hooks";
import { AppText } from "../../ui/AppText";
import { CheckBox } from "../../ui/Checkbox";
import { Hands } from "../../ui/icons/Hands";
import { User } from "../../ui/icons/User";
import { Row } from "../../ui/Row";

interface PrayerItemProps extends IPrayer {
    onPress: () => void,
}

const PrayerItem: FC<PrayerItemProps> = ({onPress, title, checked, id, description, commentsIds}) => {

    const [itemCheckedState, setItemState] = useState(checked);
    const dispatch = useAppDispatch();

    const onChangeState = () => {
        dispatch(actions.prayer.updatePrayerRequest({id, title, description, checked: !itemCheckedState}))
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <Row css="justify-content: space-between; padding: 18px 0; border-bottom-color:#E5E5E5; border-bottom-width: 1px; border-style: solid;">
                <Row>
                    <CheckBox checked={itemCheckedState} onChange={onChangeState} />
                    {itemCheckedState === true ? <AppText lineThrough>{title}</AppText> : <AppText>{title}</AppText>}
                </Row>
                <Row>
                    {commentsIds ? ( commentsIds.length > 0 && <User userCount={commentsIds.length}/> ) : null} 
                    <Hands prayerCount={15}/>
                </Row>
            </Row>
        </TouchableOpacity>
    )
};

export default PrayerItem;