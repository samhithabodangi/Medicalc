import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Header from '../component/Header';


const HospitalServicesOption = ({navigation}) => {
    const [isInfoVisible, setIsInfoVisible] = useState(false);

  const showInfoBox = () => {
    setIsInfoVisible(true);
  };

  const hideInfoBox = () => {
    setIsInfoVisible(false);
  };

  const navigateToAnotherScreenIS = () => {
    navigation.navigate('Inpatient Services'); 
  };

  const navigateToAnotherScreenOS = () => {
    navigation.navigate('Outpatient Services'); 
  };

  const navigateToAnotherScreenSS = () => {
    navigation.navigate('Shoppable Services'); 
  };
    
    return (
        <View>
      <Header />
      <Text style={styles.intro}>Let's Calculate!</Text>
        <Text style={styles.text}>MediCalc finds the average cost of hospital procedures in your area. 
        Get an estimated cost of your bill to stay informed and decrease the potential errors in your medical bill.</Text>
        <Text style={styles.text2}>Press the button to get cost information</Text>
        <View>
        <View style={{alignItems:"center", marginTop: 20}}>
              <TouchableOpacity style={styles.listItem} onPress={navigateToAnotherScreenSS}>
                <Text style={styles.listText}>Common Services</Text>
              </TouchableOpacity>
        </View>
        <Text style={styles.text}>For more information on our data, please read about it in the Resources Page</Text>
        <StatusBar style="auto" />
      </View>
      </View>
    );
};

const styles = StyleSheet.create ({
    container: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    intro: {
      fontSize: 28,
      textAlign: "center",
      marginTop: 20,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoBox: {
      backgroundColor: 'white',
      padding: 20,
      margin: 20,
      borderRadius: 10,
      marginTop: -83,
      marginBottom: 80
    },
    listContainer: {
      marginTop: 25,
      alignItems: 'center'
    },

    text: {
      marginTop: 40,
      fontSize: 17,
      marginRight: 30,
      marginLeft: 30,
      marginBottom: 15,
    },

    text2: {
      textAlign: 'center',
      fontWeight: "bold",
      fontSize: 20,
      marginTop: 15,
      marginBottom: 20
    },
  
    listItem: {
      flexDirection: 'row', 
      marginBottom: 5,
      marginTop: 15,
      backgroundColor: '#6FCDEB',
      padding: 15,
      borderRadius: 10,
      width: '70%',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    icon:{
      flex: 1,
      marginTop: 35,
      marginLeft: 20,
      marginRight: -30,
    },
    listText: {
      fontSize: 18,
    },
    bold: {
      fontWeight: "bold"
    },

    row: {
      flexDirection: 'row',
      marginBottom: 20,
      marginLeft: 50
    },
  });

export default HospitalServicesOption;