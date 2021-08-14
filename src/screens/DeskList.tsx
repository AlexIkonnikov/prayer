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

type DeskListNavigationProps = StackNavigationProp<RootStackParamList>

interface DeskListProps {
    navigation: DeskListNavigationProps
}

export const DeskList: FC<DeskListProps> = ({ navigation }) => {

    const data = [{ name: 'To Do' }, { name: 'In Progress' }, { name: 'Completed' }];
    const next = (name: string) => {
        navigation.navigate('Desk', { name });
    };

    const renderIcon = () => <Plus color={colors.blue}/>

    return (
        <View>
            <Header name="My Desk" icon={renderIcon} />
            <Container>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return <Card name={item.name} onPress={() => { next(item.name) }} />
                    }}
                    keyExtractor={item => item.name}
                />
            </Container>
        </View>
    )
}