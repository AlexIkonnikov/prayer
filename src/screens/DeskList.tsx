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
import { actions } from "../store/ducks/column";

type DeskListNavigationProps = StackNavigationProp<RootStackParamList>

interface DeskListProps {
    navigation: DeskListNavigationProps
}

export const DeskList: FC<DeskListProps> = ({ navigation }) => {

    const dispatch = useAppDispatch();
    const columns = useAppSelector((state) => state.column);

    useEffect(() => {
        dispatch(actions.addColumnsRequest());
    },[])

    const next = (name: string) => {
        navigation.navigate('Desk', { name });
    };

    const renderIcon = () => <Plus color={colors.blue}/>

    return (
        <View>
            <Header name="My Desk" icon={renderIcon} />
            <Container>
                <FlatList
                    data={columns}
                    renderItem={({ item }) => {
                        return <Card name={item.title} onPress={() => { next(item.title) }} />
                    }}
                    keyExtractor={item => item.id}
                />
            </Container>
        </View>
    )
}