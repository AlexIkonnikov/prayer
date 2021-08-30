import React, {FC} from 'React';
import {AuthRoute} from './AuthRoute';
import {StackRoute} from './StackRoute';
import {useAppSelector} from '../store/hooks';

export const Navigation: FC = () => {
    const token = useAppSelector(state => state.user.user.token);
    return token ? <StackRoute /> : <AuthRoute />;
};