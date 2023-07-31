import React, {FC} from 'react';
import {AuthRoute} from './AuthRoute';
import {MainRoute} from './MainRoute';
import {useAppSelector} from '../store/hooks';

export const Navigation: FC = () => {
  const token = useAppSelector(state => state.user.user.token);
  return token ? <MainRoute /> : <AuthRoute />;
};
