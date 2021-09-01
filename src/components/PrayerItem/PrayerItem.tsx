import React, {FC, useState} from 'react';
import {TouchableOpacity, Animated} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {actions, selectors} from '../../store/ducks';
import {IPrayer} from '../../store/prayer';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {AppText} from '../../ui/AppText';
import {CheckBox} from '../../ui/Checkbox';
import {HandsIcon} from '../../ui/icons/HandsIcon';
import {UserIcon} from '../../ui/icons/UserIcon';
import {Line} from '../../ui/Line';
import {Row} from '../../ui/Row';
import {DeleteButton} from '../../ui/DeleteButton';
import {cropText} from '../../utils/utils';
import {css} from 'styled-components';
import {StrikethroughText} from '../../ui/StrikethroughText';
import {colors} from '../../styles/colors';

interface PrayerItemProps extends IPrayer {
  onPress: () => void;
}

const PrayerItem: FC<PrayerItemProps> = ({
  onPress,
  title,
  checked,
  id,
  description,
}) => {
  const [itemCheckedState, setItemState] = useState(checked);
  const onChangeState = () => {
    dispatch(
      actions.prayer.updatePrayerRequest({
        id,
        title,
        description,
        checked: !itemCheckedState,
      }),
    );
    setItemState(!itemCheckedState);
  };

  const dispatch = useAppDispatch();
  const commentCount = useAppSelector(
    selectors.comment.selectCommentCountById(id),
  );

  const isCommentExist = () => {
    return commentCount > 0 ? true : false;
  };

  const prayerTitle = cropText(title, isCommentExist());

  const deletePrayer = () => {
    dispatch(actions.prayer.deletePrayerRequest(id));
  };

  const renderRightActions = (
    proggres: Animated.AnimatedInterpolation,
    dragX: Animated.AnimatedInterpolation,
  ) => {
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
        <Row containerStyled={rowStyle}>
          <Row>
            <Line />
            <CheckBox isChecked={itemCheckedState} onChange={onChangeState} />
            {itemCheckedState === true ? (
              <StrikethroughText>{prayerTitle}</StrikethroughText>
            ) : (
              <AppText>{prayerTitle}</AppText>
            )}
          </Row>
          <Row>
            {isCommentExist() ? <UserIcon userCount={commentCount} /> : null}
            <HandsIcon prayerCount={15} />
          </Row>
        </Row>
      </TouchableOpacity>
    </Swipeable>
  );
};

const rowStyle = css`
  justify-content: space-between;
  padding: 18px 0;
  border-bottom-color: ${colors.lightGraySecond};
  border-bottom-width: 1px;
  border-style: solid;
  margin: 0 15px;
`;

export default PrayerItem;
