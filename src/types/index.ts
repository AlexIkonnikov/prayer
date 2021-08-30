import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IPrayer} from '../store/prayer';

export type RootStackParamList = {
  ColumnList: undefined;
  Column: {name: string; id: number};
  Detail: {prayer: IPrayer};
};

export type AuthNavigationProps = {
  authentication: undefined;
  registration: undefined;
};

export type TabNavigationProps = {
  'My prayers': {id: number};
  Subscribed: {id: number};
};

export type ColumnScreenRouteProp = RouteProp<RootStackParamList, 'Column'>;

export type ColumnScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Column'
>;
