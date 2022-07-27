import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { SignOut, ChatCircleText } from 'phosphor-react-native'

// Imports 

import Logo from '../../assets/images/logo_secondary.svg'

export default function Home() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Logo style={styles.logo} />
                <TouchableOpacity>
                    <SignOut size={26} color="#7C7C8A" />
                </TouchableOpacity>
            </View>

            <View style={styles.secondCamp}>
                <Text style={{ color: "white", fontSize: 18 }}>Solicitações</Text>
                <Text style={{ color: 'white', fontSize: 18 }}>0</Text>
            </View>

            <View style={styles.camposButton}>
                <TouchableOpacity style={styles.styleButton}>
                    <Text style={{ color: '#7C7C8A' }}>EM ANDAMENTO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.styleButton}>
                    <Text style={{ color: '#7C7C8A' }}>FINALIZADOS</Text>
                </TouchableOpacity>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 125 }}>
                <ChatCircleText size={60} color='#7C7C8A' />
                <Text style={{ color: '#7C7C8A', fontSize: 31, paddingTop: 16, textAlign: 'center' }}>Você ainda não tem chamados criados.</Text>
            </View>

        </View>
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
        paddingHorizontal: 10
    },
    styleButton: {
        borderWidth: 1,
        width: "50%",
        alignItems: 'center',
        paddingVertical: 5,
        marginRight: 2.5,
        backgroundColor: "#202024"
    }
});

