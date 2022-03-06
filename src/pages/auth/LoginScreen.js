import React, {useState}                      from 'react';
import {Button, Divider, Input, Layout, Text} from "@ui-kitten/components";
import {Alert, StyleSheet}                    from "react-native";
import {useDispatch}                          from "react-redux";
import {makeAuthentication}                   from "../../store/reducers/authReducer";
import { useValidation } from 'react-native-form-validator';
import customValidationMessages from "../../components/customValidationMessages";
const LoginScreen = ({navigation}) => {
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const dispatch                = useDispatch();

    const { validate, isFieldInError, getErrorsInField, getErrorMessages } = useValidation({
        state: { email, password },
        messages: customValidationMessages,
        deviceLocale : "bn",

    });
    const login = () => {
            validate({
                email: { email: true },
                password: { required: true }
            })
        // if (email !== "" && password !== "") {
        //     dispatch(makeAuthentication())
        //     setTimeout(() => {
        //         navigation.navigate('Home')
        //     }, 500)
        // } else {
        //     Alert.alert('Warning !', 'Please fill Email & Password.')
        // }
    }
    return (
        <Layout style={styles.container}>

            <Text style={styles.text} category='h6' status='info'>Login Screen</Text>
            <Divider/>
            <Input
                style={[styles.input, {marginTop: 25}]}
                placeholder='Email'
                value={email}
                onChangeText={nextValue => setEmail(nextValue)}
            />
            {isFieldInError('email') &&
            getErrorsInField('email').map(errorMessage => (
                <Text>{errorMessage}</Text>
            ))}
            <Input
                style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={nextValue => setPassword(nextValue)}
                secureTextEntry={true}
            />
            <Button style={styles.button} onPress={login}>
                Login
            </Button>

            <Text>{getErrorMessages()}</Text>
        </Layout>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex          : 1,
        justifyContent: 'center',
        alignContent  : 'center',
        padding       : 20,
    },
    input    : {
        marginTop      : 10,
        backgroundColor: '#fff'
    },
    button   : {
        marginTop: 20
    },
    text     : {
        textAlign   : "center",
        marginBottom: 10
    }
});