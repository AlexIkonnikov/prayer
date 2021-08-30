import {useNavigation, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {AddCommentForm} from '../components/AddCommentForm';
import {CommentList} from '../components/CommentList';
import {MemberList} from '../components/MemberList';
import { DetailScreenProps } from '../routes/MainRoute';
import {actions, selectors} from '../store/ducks';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {colors} from '../styles/colors';
import {DetailHeader} from '../ui/DetailHeader';
import {BackArrowIcon} from '../ui/icons/BackArrowIcon';
import {HandsIcon} from '../ui/icons/HandsIcon';
import {LastTime} from '../ui/LastTime';
import {Statisticks} from '../ui/Statisticks';

const src = [
  'https://sun1-84.userapi.com/s/v1/ig2/KaYR6LGXCEg9pNmHl9mCB-uTZc8aN5-dKa5xYF2COoYZyB3GLX9bgVkAmhPSwaJhKFpqv_YnYbL-YmekB7MqhIs3.jpg?size=100x100&quality=96&crop=0,0,453,453&ava=1',
];

export const Detail: FC<DetailScreenProps> = ({navigation, route}) => {

  const prayer = route.params.prayer;
  const dispatch = useAppDispatch();
  const comments = useAppSelector(
    selectors.comment.selectCommentsByPrayerId(prayer.id),
  );

  const handleGoBack = () => {
    navigation.goBack();
  };

  const updatePrayer = (title: string) => {
    dispatch(
      actions.prayer.updatePrayerRequest({
        id: prayer.id,
        title,
        description: prayer.description,
        checked: prayer.checked,
      }),
    );
  };

  return (
    <React.Fragment>
      <DetailHeader title={prayer.title} submit={updatePrayer}>
        <BackArrowIcon onPress={handleGoBack} />
        <HandsIcon color={colors.white} />
      </DetailHeader>
      <ScrollView>
        <LastTime timeInMin={21} />
        <Statisticks />
        <MemberList srcs={src} />
        <CommentList comments={comments} />
      </ScrollView>
      <AddCommentForm prayerId={prayer.id} />
    </React.Fragment>
  );
};
