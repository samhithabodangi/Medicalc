import React from "react";
import {View, Text, StyleSheet, Image } from "react-native";
import HorizontalRule from "./HorizontalRule";


export default HomeHeader = () => {
    return (
        <View style={styles.container}>
        <View style={styles.row}>
            <Image source={require('../assets/medicalc-logo.png')} style={styles.logo}/>
            <Text style={styles.name}>MediCalc</Text>
        </View>
        <HorizontalRule />
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
        marginTop: 70
    },
    logo: {
        width: 100,
        height: 100
    },
    name: {
        fontSize: 40
    }
});