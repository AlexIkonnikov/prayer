import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import { Container } from '../ui/Container';
import { Header } from '../ui/Header';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actions, selectors } from "../store/ducks";
import { AddColumnForm } from "../components/AddColumnForm";
import { ColumnItem } from "../components/ColumnItem";
import { Loader } from "../ui/Loader";
import { useNavigation } from "@react-navigation/native";
import { ColumnListScreenNavigationProp } from '../types';
import { ScrollView } from "react-native-gesture-handler";


export const ColumnList: FC = () => {
    const [editColumnId, setEditColumnId] = useState(-1);

    const dispatch = useAppDispatch();
    const dataUpdateStatus = useAppSelector(selectors.column.selectDataUpdateStatus);
    const columns = useAppSelector(selectors.column.selectColumn);

    const navigation = useNavigation<ColumnListScreenNavigationProp>()

    useEffect(() => {
        dispatch(actions.column.addColumnsRequest());
    }, []);

    useEffect(() => {
        dispatch(actions.prayer.getAllPrayersRequest());
    }, []);

    useEffect(() => {
        dispatch(actions.comment.getAllCommentsRequest());
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
                <AddColumnForm inputText="My Desk" submit={addColumn} />
            </Header>
            <ScrollView>
                <Container>
                    {
                        dataUpdateStatus === "inProcess" ?
                            <Loader />
                            :
                            columns.map((col) => <ColumnItem column={col} editColumnId={editColumnId} setEditColumnId={setEditColumnId} onPress={next} key={col.id} />)
                    }
                </Container>
            </ScrollView>
        </View>
    );
}