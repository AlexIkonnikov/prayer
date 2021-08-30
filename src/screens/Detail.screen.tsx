import React, {FC} from 'react';
import { FormProps } from 'react-final-form';
import {ScrollView} from 'react-native';
import {AddCommentForm} from '../components/AddCommentForm';
import {CommentList} from '../components/CommentList';
import {MemberList} from '../components/MemberList';
import { DetailScreenProps } from '../routes/MainRoute';
import {actions, selectors} from '../store/ducks';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {colors} from '../styles/colors';
import {DetailHeader} from '../ui/DetailHeader';
import { IconButton } from '../ui/IconButton';
import {BackArrowIcon} from '../ui/icons/BackArrowIcon';
import {HandsIcon} from '../ui/icons/HandsIcon';
import {LastTime} from '../ui/LastTime';
import {Statistics} from '../ui/Statistics';

export const Detail: FC<DetailScreenProps> = ({navigation, route}) => {

  const prayer = route.params.prayer;
  const dispatch = useAppDispatch();
  const comments = useAppSelector(
    selectors.comment.selectCommentsByPrayerId(prayer.id),
  );

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleUpdatePrayer = (values: FormProps) => {
    dispatch(
      actions.prayer.updatePrayerRequest({
        id: prayer.id,
        title: values.title,
        description: prayer.description,
        checked: prayer.checked,
      }),
    );
  };

  return (
    <React.Fragment>
      <DetailHeader title={prayer.title} onSubmitForm={handleUpdatePrayer}>
        <IconButton onPress={handleGoBack} render={() => <BackArrowIcon/>}/>
        <HandsIcon color={colors.white} />
      </DetailHeader>
      <ScrollView>
        <LastTime timeInMin={21} />
        <Statistics />
        <MemberList />
        <CommentList comments={comments} />
      </ScrollView>
      <AddCommentForm prayerId={prayer.id} />
    </React.Fragment>
  );
};
