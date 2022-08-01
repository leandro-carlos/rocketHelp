import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button, Pressable, Alert } from 'react-native';
import { SignOut, HourglassSimple, Check, ChatCircleText } from 'phosphor-react-native'
import firestore from '@react-native-firebase/firestore';

// Imports 

import Logo from '../../assets/images/logo_secondary.svg'



export default function Home({ navigation: { goBack }, navigation }) {

    const [statusSelected, setStatusSelected] = useState('open');
    const [orders, setOrders] = useState([])

    const statusButton = statusSelected === 'open' ? "#FBA94C" : "#323238";
    const openEvent = statusSelected === 'open' ? "#FBA94C" : "#00B37E";
    const closedEvent = statusSelected === 'closed' ? "#00B37E" : "#323238";

    const TrocaCor = () => {
        if (statusSelected === 'open') {

            return (<HourglassSimple size={32} color='#FBA94C' />)
        } else {
            return (<Check size={32} color='green' />)
        }
    }

    function handleLogout() {
        goBack()
    }


    useEffect(() => {

        const subscriber = firestore()
            .collection('Orders')
            .where('status', '==', statusSelected)
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {
                    const { patrimony, description, status, created_at } = doc.data();

                    return {
                        id: doc.id,
                        patrimony,
                        description,
                        status,
                    }
                });
                setOrders(data);
                console.log(data)
            });

        return subscriber;
    }, [statusSelected]);

    onClickitem = (item, index) => (
        navigation.navigate('Details', { item: item })
    )

    return (
        <View style={styles.container}>

            <View style={styles.header} >
                <Logo style={styles.logo} />
                <TouchableOpacity onPress={() => handleLogout()} >
                    <SignOut size={26} color="#7C7C8A" />
                </TouchableOpacity>
            </View>

            <View style={styles.secondCamp}>
                <Text style={{ color: "white", fontSize: 18 }}>Solicitações</Text>
                <Text style={{ color: 'white', fontSize: 18 }}>0</Text>
            </View>

            <View style={styles.camposButton}>
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        width: "50%",
                        alignItems: 'center',
                        paddingVertical: 5,
                        marginRight: 2.5,
                        backgroundColor: statusButton,
                    }}
                    onPress={() => setStatusSelected('open')}
                >
                    <Text style={{ color: 'white' }}>EM ANDAMENTO</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        width: "50%",
                        alignItems: 'center',
                        paddingVertical: 5,
                        marginRight: 2.5,
                        backgroundColor: closedEvent,
                    }} onPress={() => setStatusSelected('closed')}
                >
                    <Text style={{ color: 'white' }}>FINALIZADOS</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => onClickitem(item)}>
                        <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{
                                backgroundColor: 'white',
                                height: 75,
                                width: "90%",
                                borderLeftWidth: 10,
                                borderLeftColor: openEvent,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 15,
                                borderRadius: 8,
                                flexDirection: 'row',
                                paddingHorizontal: 12.5,
                            }}>
                                <View >
                                    <Text numberOfLines={3} style={{ color: 'black', fontSize: 18 }}>Patrimônio: {item.patrimony}</Text>
                                    <Text numberOfLines={3} style={{ color: 'black', fontSize: 15, }}>Descrição: {item.description}</Text>
                                </View>
                                <TrocaCor />
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{ paddingBottom: 25, }}
                ListEmptyComponent={() => (
                    <View style={{
                        alignItems: 'center', justifyContent: 'center', marginVertical: '33.3%', flex: 1, marginHorizontal: 50,
                    }}>
                        <ChatCircleText size={32} color='#7C7C8A' />
                        <Text style={{ color: '#7C7C8A', fontSize: 26, textAlign: 'center' }}>
                            Você ainda não tem chamados criados.
                        </Text>
                    </View>
                )}
            />

            <View style={{ alignItems: 'center', }}>
                <TouchableOpacity
                    style={styles.btnNewTicket}
                    onPress={() => navigation.navigate('newTicket')}
                >
                    <Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                        Novo chamado
                    </Text>
                </TouchableOpacity>
            </View>

        </View >
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121214",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 35,
        paddingHorizontal: 10,
        backgroundColor: "#202024",
        height: "10%",

    },
    logo: {
        width: "150",
        height: "100",
        fill: "white",
    },
    secondCamp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    camposButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    styleButton: {
        borderWidth: 1,
        width: "50%",
        alignItems: 'center',
        paddingVertical: 5,
        marginRight: 2.5,
        backgroundColor: "#202024",
    },
    btnNewTicket: {
        backgroundColor: '#00B37E',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 50,
        marginVertical: 20,
        borderRadius: 10
    }

});

