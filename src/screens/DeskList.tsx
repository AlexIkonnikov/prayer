import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { View } from "react-native";
import { Card } from '../ui/Card';
import { Container } from '../ui/Container';
import { Header } from '../ui/Header';
import { Plus } from '../ui/icons/Plus';
import { RootStackParamList } from "../routes/StackRoute";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../styles/colors";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { actions, selectors } from "../store/ducks";

type DeskListNavigationProps = StackNavigationProp<RootStackParamList>

interface DeskListProps {
    navigation: DeskListNavigationProps
}

export const DeskList: FC<DeskListProps> = ({ navigation }) => {

    const dispatch = useAppDispatch();
    const columns = useAppSelector(selectors.column.selectColumnSlice);

    useEffect(() => {
        dispatch(actions.column.addColumnsRequest());
    }, []);

    useEffect(() => {
        dispatch(actions.prayer.getAllPrayersRequest());
    }, []);

    const next = (name: string, id: number) => {
        navigation.navigate('Desk', { name, id });
    };

    const addColumn = () => {
        dispatch(actions.column.addColumnRequest({ title: 'ALEX_TEST', description: null }));
    }

    const renderIcon = () => <Plus color={colors.blue} onPressHandler={addColumn} />

    return (
        <View>
            <Header name="My Desk" icon={renderIcon} />
            <Container>
                <FlatList
                    data={columns}
                    renderItem={({ item }) => {
                        return <Card name={item.title} onPress={() => { next(item.title, item.id) }} />
                    }}
                    keyExtractor={item => item.id}
                />
            </Container>
        </View>
    )
}