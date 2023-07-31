import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {Container} from '../ui/Container';
import {Header} from '../ui/Header';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {actions, selectors} from '../store/ducks';
import {AddColumnForm} from '../components/AddColumnForm';
import {ColumnItem} from '../components/ColumnItem';
import {ScrollView} from 'react-native-gesture-handler';
import {ColumnListScreenProps} from '../routes/MainRoute';

export const ColumnList: FC<ColumnListScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector(selectors.column.selectColumn);

  useEffect(() => {
    dispatch(actions.column.addColumnsRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actions.prayer.getAllPrayersRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actions.comment.getAllCommentsRequest());
  }, [dispatch]);

  const handleNextPage = (name: string, id: number) => {
    navigation.navigate('Column', {name, id});
  };

  const handleAddColumn = (title: string) => {
    dispatch(actions.column.addColumnRequest({title, description: null}));
  };

  return (
    <View>
      <Header>
        <AddColumnForm inputText="My Desk" onSubmit={handleAddColumn} />
      </Header>
      <ScrollView>
        <Container>
          {columns.map(col => (
            <ColumnItem column={col} onNext={handleNextPage} key={col.id} />
          ))}
        </Container>
      </ScrollView>
    </View>
  );
};
