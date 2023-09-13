import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking, Button} from 'react-native';

export default function CalculateScreen() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Caclulate</Text>
        <StatusBar style="auto" />
      </View>
    );
  }