import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { AddPrayerForm } from '../components/AddPrayerForm';
import { Container } from '../ui/Container';
import { PrayerList } from '../components/PrayerList';
import { ColumnScreenProps } from '../routes/MainRoute';
import { IPrayer } from '../store/prayer';

export const MyPrayers: FC<ColumnScreenProps> = ({ navigation, route }) => {

  return (
    <ScrollView>
      <Container>
        <AddPrayerForm columnId={route.params.id} />
      </Container>
      <PrayerList navigation={navigation} route={route} />
    </ScrollView>
  );
};
