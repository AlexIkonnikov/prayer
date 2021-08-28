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
import { cropText } from "../../utils/utils";

interface PrayerItemProps extends IPrayer {
    onPress: () => void,
}

const PrayerItem: FC<PrayerItemProps> = ({ onPress, title, checked, id, description }) => {

    const [itemCheckedState, setItemState] = useState(checked);
    const onChangeState = () => {
        dispatch(actions.prayer.updatePrayerRequest({ id, title, description, checked: !itemCheckedState }))
        setItemState(!itemCheckedState);
    }
    
    const dispatch = useAppDispatch();
    const commentCount = useAppSelector(selectors.comment.selectCommentCountById(id));

    const isCommentExist = () => {
        return commentCount > 0 ? true : false;
    }

    const prayerTitle = cropText(title, isCommentExist());

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
                <Row containerStyled={`
                    justify-content: space-between;
                    padding: 18px 0; 
                    border-bottom-color:#E5E5E5; 
                    border-bottom-width: 1px; 
                    border-style: solid; 
                    margin: 0 15px;
                `}>
                    <Row>
                        <Line />
                        <CheckBox checked={itemCheckedState} onChange={onChangeState} />
                        {itemCheckedState === true ? <AppText lineThrough>{prayerTitle}</AppText> : <AppText>{prayerTitle}</AppText>}
                    </Row>
                    <Row>
                        {isCommentExist() ? <User userCount={commentCount} /> : null}
                        <Hands prayerCount={15} />
                    </Row>
                </Row>
            </TouchableOpacity>
        </Swipeable>
    )
};

export default PrayerItem;