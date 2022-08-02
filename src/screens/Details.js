import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';

import { CaretLeft, CircleWavyCheck, Hourglass, DesktopTower, Newspaper } from 'phosphor-react-native'

export default function Details({ navigation: { goBack }, route, navigation }) {

    const item = route.params.item;
    const [solution, setSolution] = useState();

    function handleOrderClose() {
        if (!solution) {
            return Alert.alert('Solicitação', 'Informa a solução para encerrar a solicitação');
        } else {
            firestore()
                .collection('Orders')
                .doc(item.id)
                .update({
                    status: 'closed',
                    solution,
                    closed_at: firestore.FieldValue.serverTimestamp()
                })
                .then(() => {
                    Alert.alert('Solicitação', 'Solicitação encerrada.');
                    goBack();
                })
                .catch((error) => {
                    console.log(error);
                    Alert.alert('Solicitação', 'Não foi possível encerrar a solicitação');
                });
        }


    }
    return (

        <View style={style.container}>

            <View style={style.header}>
                <TouchableOpacity onPress={() => goBack()}>
                    <CaretLeft size={32} color='white' />
                </TouchableOpacity>
                <Text style={{ color: 'white', marginHorizontal: 75, fontSize: 22 }}>Solicitação</Text>

            </View>

            <View style={{
                backgroundColor: '#2a292e', width: '100%',
                marginVertical: 10, alignItems: 'center',
                flexDirection: 'row', justifyContent: 'center'
            }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingRight: 5, paddingVertical: 5 }}>
                    {
                        item.status === 'closed'
                            ? <CircleWavyCheck size={36} weight="thin" color='white' />
                            : <Hourglass size={36} weight="thin" color='white' />
                    }
                </View>
                {
                    item.status === 'closed'
                        ? <Text style={style.textInfo}>Finalizado</Text>
                        : <Text style={style.textInfo}>Em andamento</Text>
                }

            </View>

            <View style={style.divEquipamento}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <DesktopTower size={26} weight="regular" color='#996DFF' style={{ marginRight: 10 }} />

                    <Text style={style.txtText}>Equipamento</Text>

                </View>
                <Text style={style.texto}>Patrimônio: {item.patrimony}</Text>
            </View>

            <View style={style.divDescricao}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Newspaper size={26} weight="regular" color='#996DFF' style={{ marginRight: 10 }} />
                    <Text style={style.txtText}>Descrição do problema</Text>
                </View>
                <Text style={style.texto}>{item.description}</Text>

            </View>

            <View style={style.divSolucao}>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <CircleWavyCheck size={26} weight="regular" color='#996DFF' style={{ marginRight: 10 }} />
                    <Text style={style.txtText}>Solução</Text>
                </View>

                {item.status === 'open' ? <TextInput
                    style={{ backgroundColor: '#121214', flex: 0.95, textAlignVertical: 'top', borderRadius: 10, paddingHorizontal: 5 }}
                    placeholder='Solução do problema:'
                    placeholderTextColor={'white'}
                    onChangeText={setSolution}
                    color='white'
                    multiline
                >
                </TextInput>
                    : <Text>{solution}</Text>
                }

            </View>


            {item.status === 'open'
                ? <View style={{ alignItems: 'center', }}>
                    <TouchableOpacity
                        style={style.btnClosedTicket}
                        onPress={() => { handleOrderClose() }}
                    >
                        <Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                            Finalizar Ticket
                        </Text>
                    </TouchableOpacity>
                </View>
                :
                null
            }

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
        flex: 0.3,
        backgroundColor: "#201f23",
        textAlignVertical: 'top',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15,
    },
    divDescricao: {
        height: 65,
        backgroundColor: "#201f23",
        textAlignVertical: 'top',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15,
        flex: 0.5
    },
    divSolucao: {
        height: 65,
        backgroundColor: "#201f23",
        textAlignVertical: 'top',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15,
        flex: 1
    },
    btnClosedTicket: {
        backgroundColor: '#00B37E',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 50,
        marginVertical: 20,
        borderRadius: 10
    },
    textInfo: {
        color: '#7d7c8a',
        fontSize: 20
    },
    txtText: {
        color: '#7d7c8a',
        fontSize: 16,
    },
    texto: {
        color: '#E1E1E6',
        fontSize: 16,
        marginTop: 10
    },

})