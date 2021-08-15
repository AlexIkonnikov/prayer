import React, { FC, useState } from "react";
import { View, TextInput } from "react-native";
import { actions } from "../store/ducks/user";
import { useAppDispatch } from "../store/hooks";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export const Authentication: FC = () => {

    const initialState = {email: '', password: ''};
    const dispatch = useAppDispatch();

    const [state, setState] = useState(initialState);

    const onChangeInput = (text: string, name: string) => {
        setState({...state, [name]: text});
    }

    const onSubmitForm = () => {
        
        setState({...initialState})
    }

    return (
        <View>
            <Container>
                <TextInput placeholder="E-mail" onChangeText={(text) => {onChangeInput(text, 'email')}} value={state.email} />
                <TextInput placeholder="password" secureTextEntry={true} onChangeText={(text) => {onChangeInput(text, 'password')}} value={state.password} />
            </Container>
            <Button title="Sign in" onPress={onSubmitForm} />
        </View>
    );
}