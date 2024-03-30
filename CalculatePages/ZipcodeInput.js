import React, { useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert, ScrollView} from 'react-native';
import HeaderResource from '../component/HeaderResource';
import { useRoute } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

const ZipCodeInput = ({navigation}) => {
  const route = useRoute(); // Initialize the route hook
  const procedure = route.params.procedure;
  const category = route.params.category;
  const [checked, setChecked] = useState('Barnstable'); 

  const navigateToAnotherScreen = () => {
        navigation.navigate('CostInfoScreen',  { category, procedure, checked });
  };

  const handleRadioChange = (value) => {
    setChecked(value);
  };

  const renderRadioButton = (value, label) => {
    const isOptionSelected = checked === value;
    const radioOptionStyle = isOptionSelected
      ? [styles.radioOption, styles.selectedRadioOption]
      : styles.radioOption;

    return (
      <TouchableOpacity
        style={radioOptionStyle}
        onPress={() => handleRadioChange(value)}
        activeOpacity={0.7}
      >
        <Text style={styles.radioLabel}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{marginBottom: 100}}>
    <View>
      <HeaderResource />
      <View style={styles.params}>
        <Text style={styles.text2}><Text style={{ fontWeight: 'bold'}}>Chosen Category: </Text>{category}</Text>
        <Text style={styles.text2}><Text style={{ fontWeight: 'bold', marginTop: 10 }}>Chosen Procedure: </Text>{procedure}</Text>
      </View>
      <Text style={styles.text}>Please select your county to get average costs within your area.</Text>

      <View style={{paddingRight: 20, paddingLeft: 20, marginTop: -20}}>
      {renderRadioButton('Barnstable', 'Barnstable')}
      {renderRadioButton('Berkshire', 'Berkshire')}
      {renderRadioButton('Bristol', 'Bristol')}
      {renderRadioButton('Dukes', 'Dukes')}
      {renderRadioButton('Essex', 'Essex')}
      {renderRadioButton('Franklin', 'Franklin')}
      {renderRadioButton('Hampden', 'Hampden')}
      {renderRadioButton('Hampshire', 'Hampshire')}
      {renderRadioButton('Middlesex', 'Middlesex')}
      {renderRadioButton('Nantucket', 'Nantucket')}
      {renderRadioButton('Norfolk', 'Norfolk')}
      {renderRadioButton('Plymouth', 'Plymouth')}
      {renderRadioButton('Suffolk', 'Suffolk')}
      {renderRadioButton('Worcester', 'Worcester')}
      </View>

      <View style={{alignItems: "center", marginTop: 20}}>
      <Text style={styles.selectedOption}>County Selected: {checked}</Text>
          <TouchableOpacity style={styles.button} onPress={navigateToAnotherScreen}>
            <Text style={{textAlign: "center"}}>Next</Text>
          </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 4,
      marginBottom: 100
    },
    button: {
      padding: 15,
      backgroundColor: 'lightblue',
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 10,
      width: 120
    },
    text: {
        marginTop: 25,
        fontSize: 17,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 55,
      },
      text2: {
        marginTop: 25,
        fontSize: 17,
        marginRight: 30,
        marginLeft: 30,
      },

      radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
      },
      radioLabel: {
        fontSize: 16,
      },
      selectedOption: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10
      },
      selectedRadioOption: {
        backgroundColor: 'lightblue', // Highlight color when pressed
      },
  });

export default ZipCodeInput;