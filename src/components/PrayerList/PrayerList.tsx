import React, { FC } from 'react';
import { useState } from 'react';
import { selectors } from '../../store/ducks';
import { IPrayer } from '../../store/prayer';
import { useAppSelector } from '../../store/hooks';
import { Button } from '../../ui/Button';
import { PrayerItem } from '../PrayerItem';
import { ColumnScreenProps } from '../../routes/MainRoute';

const PrayerList: FC<ColumnScreenProps> = ({ navigation, route }) => {
  const [visibleAnsweredPrayers, setVisibleAnsweredPrayers] = useState(false);

  const onPrayerItemPress = (item: IPrayer) => {
    navigation.navigate('Detail', { prayer: item })
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
            onPrayerItemPress(item);
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
              onPrayerItemPress(item);
            }}
            {...item}
          />
        ))}
    </>
  );
};

export default PrayerList;
