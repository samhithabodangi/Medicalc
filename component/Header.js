import React from "react";
import {View, Text, StyleSheet, Image } from "react-native";


export default Header = () => {
    return (
        <View style={styles.container}>
        <View style={styles.row}>
            <Image source={require('../assets/medicalc-logo.png')} style={styles.logo}/>
            <Text style={styles.name}>MediCalc</Text>
            
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 0
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    logo: {
        width: 80,
        height: 80
    },
    name: {
        fontSize: 30
    }
});