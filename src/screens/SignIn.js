import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import React, { useState } from 'react';

import { Envelope, Key } from 'phosphor-react-native';




import Logo from '../../assets/images/logo_secondary.svg'

export default function SignIn({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

        <View style={style.container}>
            {/* <StatusBar
                barStyle='light-content'
                backgroundColor='transpareFnt'
                translucent
            /> */}
            <Logo width='200' height='200' fill='white' />

            <Text style={{ color: '#E1E1E6', fontSize: 20, marginBottom: 12, }}>Acesse sua conta</Text>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: '#FFF',
                height: 50,
                width: '75%',
                backgroundColor: '#121214',
                borderRadius: 7.5,
                paddingHorizontal: 10,
                marginVertical: 10,
            }}>
                <Envelope color="#7C7C8A" size={20} />
                <TextInput
                    placeholder="E-mail"
                    fontSize={15}
                    placeholderTextColor={'#C4C4CC'}
                    keyboardType='email-address'
                    style={style.inputEmail}
                    onChangeText={setEmail}

                />
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: '#FFF',
                height: 50,
                width: '75%',
                backgroundColor: '#121214',
                borderRadius: 7.5,
                paddingHorizontal: 10,
                marginVertical: 10,
            }}>
                <Key color="#7C7C8A" />
                <TextInput
                    placeholder='Senha' fontSize={15} placeholderTextColor={'#C4C4CC'} keyboardType="default" secureTextEntry={true}
                    onChangeText={setPassword}
                    style={style.inputPassWord} />
            </View>

            <TouchableOpacity
                style={style.btnLogin}
                onPress={() =>
                    navigation.navigate('Home')
                }
            >
                <Text style={{ color: 'white', fontSize: 18 }}>Entrar</Text>
            </TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#29292E',
        alignItems: 'center',
        paddingVertical: "30%"

    },

    inputEmail: {
        color: 'white',
        flex: 1,
        paddingHorizontal: 10


    },
    inputPassWord: {
        color: 'white',
        flex: 1,
        paddingHorizontal: 10,
    },
    btnLogin: {
        width: '70%',
        backgroundColor: 'white',
        marginVertical: 10,
        height: '6.5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7.5,
        backgroundColor: '#00875F'
    },
})