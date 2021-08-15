import React, { FC } from "react";
import { useState } from "react";
import { TextInput, View} from "react-native";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export const Registration: FC = () => {
    const initialState = {name: '', email: '', password: ''};
    const [state, setState] = useState({...initialState});

    const onChangeState = (text: string, name: string ): void => {
        setState({...state, [name]: text});
    };

    const onSendData = () => {
        setState({...initialState});
    }

    return (
        <View>
        <Container>
            <TextInput placeholder="Name" onChangeText={(text) => onChangeState(text, 'name')} value={state.name} />
            <TextInput placeholder="E-mail" onChangeText={(text) => onChangeState(text, 'email')} value={state.email} />
            <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(text) => onChangeState(text, 'password')} value={state.password} />
        </Container>
        <Button title="Sign up" onPress={onSendData} />
    </View>
    );
};