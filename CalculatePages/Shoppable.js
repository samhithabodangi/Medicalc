import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Modal, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard, ScrollView, Image} from 'react-native';
import HospitalServicePage from './HospitalCommon';

const Shoppable= ({navigation}) => {

return (
  <ScrollView >
  <View style={styles.container}>
  <HospitalServicePage />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25
  },
  container: {
    padding: 10,
    height: 100,
    marginTop: -10,
    marginBottom: 200
  },
  input: {
    backgroundColor: "#DFDFDF",
    borderRadius: 10,
    width: 360,
    height: 56,
    padding: 20,
    marginTop: 15
  },
  inputBox: {
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    textAlign: "center"
  },
})

export default Shoppable;