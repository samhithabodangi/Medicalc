import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking, Button} from 'react-native'; 
import HeaderResource from '../component/HeaderResource';

export default function DataScreen() {
    return (
      <View >
      <HeaderResource />
      <Text style={styles.text}></Text>
      <Text>CHIA</Text>
      <Text>MAPQUEST</Text>
      <Text>CMS</Text>
        <StatusBar style="auto" />
        </View>
    );
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      marginTop: 10,
      marginBottom: 10,
    },
  })