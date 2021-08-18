import React, { FC, useState } from "react";
import { TouchableOpacity, Animated } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { actions, selectors } from "../../store/ducks";
import { IPrayer } from "../../store/ducks/prayer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { AppText } from "../../ui/AppText";
import { CheckBox } from "../../ui/Checkbox";
import { Hands } from "../../ui/icons/Hands";
import { User } from "../../ui/icons/User";
import { Line } from "../../ui/Line";
import { Row } from "../../ui/Row";
import { DeleteButton } from "../../ui/DeleteButton";

interface PrayerItemProps extends IPrayer {
    onPress: () => void,
}

const PrayerItem: FC<PrayerItemProps> = ({ onPress, title, checked, id, description, commentsIds }) => {

    const [itemCheckedState, setItemState] = useState(checked);
    const dispatch = useAppDispatch();

    const isCommentExist = () => {
        return commentsIds ? (commentsIds.length > 0) : false;
    }

    (() => {
        const stringLimit = isCommentExist() ? 15 : 21;
        if (title.length > stringLimit) {
            title = title.split('').slice(0, stringLimit).join('') + '...';
        }
    })()


    const onChangeState = () => {
        dispatch(actions.prayer.updatePrayerRequest({ id, title, description, checked: !itemCheckedState }))
        setItemState(!itemCheckedState);
    }

    const deletePrayer = () => {
        dispatch(actions.prayer.deletPrayerRequest(id));
    }

    const renderRightActions = (proggres: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {
        const trans = dragX.interpolate({
            inputRange: [-100, -50, 0, 1],
            outputRange: [-30, 50, 100, 130],
        });
        return (
            <Animated.View style={{transform: [{translateX: trans}]}}>
                <DeleteButton title="Delete" onPress={deletePrayer} />
            </Animated.View>
        );
    };

    return (   
        <Swipeable renderRightActions={renderRightActions} overshootRight={false}>
            <TouchableOpacity onPress={onPress}>
                <Row css="justify-content: space-between; padding: 18px 0; border-bottom-color:#E5E5E5; border-bottom-width: 1px; border-style: solid; margin: 0 15px;">
                    <Row>
                        <Line />
                        <CheckBox checked={itemCheckedState} onChange={onChangeState} />
                        {itemCheckedState === true ? <AppText lineThrough>{title}</AppText> : <AppText>{title}</AppText>}
                    </Row>
                    <Row>
                        {isCommentExist() ? <User userCount={commentsIds.length} /> : null}
                        <Hands prayerCount={15} />
                    </Row>
                </Row>
            </TouchableOpacity>
        </Swipeable>
    )
};

export default PrayerItem;