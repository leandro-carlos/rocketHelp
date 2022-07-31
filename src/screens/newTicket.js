import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { CaretLeft } from 'phosphor-react-native'


export default function NewTicket({ navigation: { goBack }, navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => goBack()}>
                    <CaretLeft size={32} color='white' />
                </TouchableOpacity>
                <Text style={{ color: 'white', marginHorizontal: 75, fontSize: 22 }}>Nova Solicitação</Text>

            </View>

            <TextInput placeholder='Número do Patrimônio' placeholderTextColor={'white'} fontSize={16} style={styles.inputPatrimonio} />
            <TextInput placeholder='Descrição do Problema' placeholderTextColor={'white'} fontSize={16} multiline={true} style={styles.inputDescricao} />

            <View style={{ alignItems: 'center', marginBottom: 10, marginTop: 15}}>
                <TouchableOpacity
                    style={styles.btnCadastrar}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Cadastrar</Text>
                </TouchableOpacity>
            </View>


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#201f23",
        paddingHorizontal: 20,
        paddingVertical: 30,

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15
    },
    inputPatrimonio: {
        backgroundColor: '#121214',
        paddingHorizontal: 10,
        marginVertical: 10,
        color: 'white'
    },
    inputDescricao: {
        textAlignVertical: 'top',
        backgroundColor: '#121214',
        flex: 1,
        paddingHorizontal: 10,
        color: 'white'
    },
    btnCadastrar: {
        justifyContent: 'center',
        backgroundColor: '#00B37E',
        height: 50,
        width: "100%",
        borderRadius: 10
    }
})