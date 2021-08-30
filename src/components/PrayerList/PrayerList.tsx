import {useNavigation, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {useState} from 'react';
import {selectors} from '../../store/ducks';
import {IPrayer} from '../../store/prayer';
import {useAppSelector} from '../../store/hooks';
import {ColumnScreenNavigationProp, ColumnScreenRouteProp} from '../../types';
import {Button} from '../../ui/Button';
import {PrayerItem} from '../PrayerItem';

const PrayerList: FC = () => {
  const [visibleAnsweredPrayers, setVisibleAnsweredPrayers] = useState(false);

  const navigation = useNavigation<ColumnScreenNavigationProp>();
  const route = useRoute<ColumnScreenRouteProp>();

  const onPressItem = (item: IPrayer) => {
    navigation.navigate('Detail', {prayer: item});
  };

  const onChangeState = () => {
    setVisibleAnsweredPrayers(!visibleAnsweredPrayers);
  };
  const checkedItem = useAppSelector(
    selectors.prayer.selectCheckedPrayersByColumnId(route.params.id),
  );
  const unCheckedItem = useAppSelector(
    selectors.prayer.selectUncheckedPrayersByColumnId(route.params.id),
  );

  return (
    <>
      {unCheckedItem.map(item => (
        <PrayerItem
          key={item.id}
          onPress={() => {
            onPressItem(item);
          }}
          {...item}
        />
      ))}
      {checkedItem.length > 0 && (
        <Button
          title={
            visibleAnsweredPrayers
              ? 'show answered prayers'
              : 'hide Answered Prayers'
          }
          onPress={onChangeState}
        />
      )}
      {!visibleAnsweredPrayers &&
        checkedItem.map(item => (
          <PrayerItem
            key={item.id}
            onPress={() => {
              onPressItem(item);
            }}
            {...item}
          />
        ))}
    </>
  );
};

export default PrayerList;
