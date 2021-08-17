import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { View } from "react-native";
import { Card } from '../ui/Card';
import { Container } from '../ui/Container';
import { Header } from '../ui/Header';
import { RootStackParamList } from "../routes/StackRoute";
import { FlatList } from "react-native";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { actions, selectors } from "../store/ducks";
import { TextForm } from "../components/TextForm";

type DeskListNavigationProps = StackNavigationProp<RootStackParamList>

interface DeskListProps {
    navigation: DeskListNavigationProps
}

export const ColumnList: FC<DeskListProps> = ({ navigation }) => {

    const dispatch = useAppDispatch();
    const columns = useAppSelector(selectors.column.selectColumnSlice);

    useEffect(() => {
        dispatch(actions.column.addColumnsRequest());
    }, []);

    useEffect(() => {
        dispatch(actions.prayer.getAllPrayersRequest());
    }, []);

    const next = (name: string, id: number) => {
        navigation.navigate('Column', { name, id });
    };

    const addColumn = (title: string) => {
        dispatch(actions.column.addColumnRequest({ title, description: null }));
    };

    return (
        <View>
            <Header>
                <TextForm inputText="My Desk" submit={addColumn} />
            </Header>
            <Container>
                <FlatList
                    data={columns}
                    renderItem={({ item }) => {
                        return <Card name={item.title} onPress={() => { next(item.title, item.id) }} />
                    }}
                    keyExtractor={item => item.id + ""}
                />
            </Container>
        </View>
    );
}