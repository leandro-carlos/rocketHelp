import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SignOut, ChatCircleText } from 'phosphor-react-native'

// Imports 

import Logo from '../../assets/images/logo_secondary.svg'



export default function Home({ navigation: { goBack } }) {

    const [statusSelected, setStatusSelected] = useState('');
    console.log(statusSelected)
    const [orders, setOrders] = useState([{
        id: '123',
        patrimony: '151515',
        when: '18/07/2022 às 10:00',
        status: 'open',

    }])

    const statusButton = statusSelected === 'open' ? "#00B37E" : "#323238";
    const secondStatus = statusSelected === 'closed' ? "#00B37E" : "#323238";


    return (
        <View style={styles.container}>

            <View style={styles.header} >
                <Logo style={styles.logo} />
                <TouchableOpacity onPress={() => goBack()} >
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
                    <Text style={{ color: '#7C7C8A' }}>EM ANDAMENTO</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        width: "50%",
                        alignItems: 'center',
                        paddingVertical: 5,
                        marginRight: 2.5,
                        backgroundColor: secondStatus,
                    }} onPress={() => setStatusSelected('closed')}
                >
                    <Text style={{ color: '#7C7C8A' }}>FINALIZADOS</Text>
                </TouchableOpacity>
            </View>



            <View style={{
                backgroundColor: "#202024",
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 24,
                marginHorizontal: 100
            }}>
                <FlatList
                    data={orders}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Text style={{ color: 'white' }}>
                            {item.status} + {item.patrimony} + {item.when}
                        </Text>}
                />
            </View>


        </View >
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121214"
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

    }
});

