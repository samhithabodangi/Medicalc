import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking, Button} from 'react-native';

export default function HomeScreen() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Home</Text>
        <StatusBar style="auto" />
      </View>
    );
  }