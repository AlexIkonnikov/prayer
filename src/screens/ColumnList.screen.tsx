import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useEffect, useState} from "react";
import { FlatList, View } from "react-native";
import { Container } from '../ui/Container';
import { Header } from '../ui/Header';
import { RootStackParamList } from "../routes/StackRoute";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actions, selectors } from "../store/ducks";
import { TextForm } from "../components/TextForm";
import { ColumnItem } from "../components/ColumnItem";

type DeskListNavigationProps = StackNavigationProp<RootStackParamList>

interface DeskListProps {
    navigation: DeskListNavigationProps
}

export const ColumnList: FC<DeskListProps> = ({ navigation }) => {
    const [editColumnId, setEditColumnId] = useState(-1);

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
                <FlatList data={columns} renderItem={({item}) => <ColumnItem column={item} editColumnId={editColumnId} setEditColumnId={setEditColumnId} onPress={next} />} />
            </Container>
        </View>
    );
}