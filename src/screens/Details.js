import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { CaretLeft } from 'phosphor-react-native'

export default function Details({ navigation: { goBack }, route, navigation }) {

    const item = route.params.item;


    console.log(item)
    return (
        <View style={style.container}>

            <View style={style.header}>
                <TouchableOpacity onPress={() => goBack()}>
                    <CaretLeft size={32} color='white' />
                </TouchableOpacity>
                <Text style={{ color: 'white', marginHorizontal: 75, fontSize: 22 }}>Solicitação</Text>

            </View>

            <View style={style.divEquipamento}>
                <Text>Equipamento</Text>
                <Text>Patrimônio: {item.patrimony}</Text>
            </View>

            <View style={style.divDescricao}>
                <Text>Descrição do problema</Text>
                {/* <Text>Patrimônio: {item.}</Text> */}

            </View>

            <View style={style.divSolucao}>
                <Text>Solução</Text>
                {/* <Text>Patrimônio: {item.patrimony}</Text> */}
            </View>


        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121214",
        paddingHorizontal: 20,
        paddingVertical: 30,

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15
    },
    divEquipamento: {
        height: 65,
        backgroundColor: "#201f23",
        textAlignVertical: 'top',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginBottom: 15
    },
    divDescricao: {
        height: 65,
        backgroundColor: "#201f23",
        textAlignVertical: 'top',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginBottom: 15,
        flex: 0.35
    },
    divSolucao: {
        height: 65,
        backgroundColor: "#201f23",
        textAlignVertical: 'top',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginBottom: 15,
        flex: 0.4
    }
})