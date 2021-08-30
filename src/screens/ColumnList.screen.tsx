import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {Container} from '../ui/Container';
import {Header} from '../ui/Header';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {actions, selectors} from '../store/ducks';
import {AddColumnForm} from '../components/AddColumnForm';
import {ColumnItem} from '../components/ColumnItem';
import {useNavigation} from '@react-navigation/native';
import {ColumnListScreenNavigationProp} from '../types';
import {ScrollView} from 'react-native-gesture-handler';

export const ColumnList: FC = () => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector(selectors.column.selectColumn);

  const navigation = useNavigation<ColumnListScreenNavigationProp>();

  useEffect(() => {
    dispatch(actions.column.addColumnsRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actions.prayer.getAllPrayersRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actions.comment.getAllCommentsRequest());
  }, [dispatch]);

  const next = (name: string, id: number) => {
    navigation.navigate('Column', {name, id});
  };

  const addColumn = (title: string) => {
    dispatch(actions.column.addColumnRequest({title, description: null}));
  };

  return (
    <View>
      <Header>
        <AddColumnForm inputText="My Desk" submit={addColumn} />
      </Header>
      <ScrollView>
        <Container>
          {columns.map(col => (
            <ColumnItem column={col} onPress={next} key={col.id} />
          ))}
        </Container>
      </ScrollView>
    </View>
  );
};
