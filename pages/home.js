import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import HomeHeader from '../component/HomeHeader';

export default function HomesScreen() {
   return (
      <ScrollView style={styles.whole}>
      <HomeHeader />
      <View style={styles.imgContainer}>
      <Image source={require('../assets/Screenshot_2023-09-29_200911-removebg-preview.png')} style={styles.img}/>
      </View>

      <View style={styles.textbox}>
      <Text style={styles.text}>Welcome to MediCalc, your personal price checker</Text>
      <Text style={styles.text}>Our aim is to keep you informed about hospital bills and important healthcare topics</Text>
      <Text style={styles.text}>Get started by navigating to different pages by pressing the buttons on the bottom</Text>
      <View style={styles.gifContainer}>
      <Image source={require('../assets/39ec65_13cd983a32b54a78a65664687bd5d7fd~mv2.gif')} style={styles.gif} />
      </View>
      </View>
      
      <View>
      <View style={styles.row}>
        <View style={styles.button}>
            <Image source={require('../assets/Screenshot__28__-_Copy-removebg-preview.png')} style={styles.button}/>
        </View>
        <View style={styles.column}>
        <Text style={styles.head}>Calculate</Text>
        <Text>Find the average cost of specific hospital procedures or services based on your location</Text>
        </View>
      </View>

      <View style={[styles.buttonLeft, styles.row, styles.buttonBox]}>
      <View style={[styles.column, styles.textLeft]}>
      <Text style={styles.head}>Resources</Text>
      <Text>Important information to help you stay informed about our medical system</Text>
      </View>
        <View style={styles.button}>
          <Image source={require('../assets/Screenshot__29__-_Copy-removebg-preview.png')} style={styles.button2}/>
        </View>
      </View>

      <View style={styles.row}>
      <View style={styles.button}>
      <Image source={require('../assets/Untitlesdfuhign.png')} style={styles.button3}/>
      </View>
      <View style={styles.column}>
      <Text style={styles.head}>Find Hospital</Text>
      <Text style={styles.columnText}>Find hospitals with the least wait times to make your visit quick and easy</Text>
      </View>
      </View>

      </View>
        <StatusBar style="auto" />
        <View style={styles.name}>
        <Text>Samhitha Bodangi</Text>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create ({
    img: {
      height: 160,
      width: 370
    },
    imgContainer: {
      alignItems: 'center',
      marginTop: 40,
      marginBottom: 35,
      marginLeft: -6
    },
    whole: {
      marginBottom: 90,
    },
    text: {
      fontSize: 17,
      marginRight: 25,
      marginLeft: 24,
      marginBottom: 20,
    },
    textbox: {
      marginTop: 30,
      marginBottom: 20
    },
    headingContainer: {
      alignItems: "center"
    },
    button: {
      height: 150,
      width: 150,
      marginLeft: 5,
      marginRight: 6,
      justifyContent: 'center',
      resizeMode: 'contain',
    },
    button3: {
      marginRight: 6,
      justifyContent: 'center',
      resizeMode: 'contain',
      height: 200,
      width: 200,
      marginLeft: -21
    },
    button2: {
      height: 150,
      width: 150,
    },
    buttonBox: {
      paddingLeft: 15,
    },
    buttonLeft: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingRight: 3
    },
    textLeft: {
      marginLeft: 20,
    },
    row: {
      flexDirection: "row",
      alignItems: 'center',
     backgroundColor: '#BBDFF4',
      marginBottom: 20,
      paddingTop: 18,
      paddingBottom: 18,
    },
    column: {
      flexDirection: "column",
      width: "55%",
      marginLeft: 11,
    },
    gif: {
      width: 100,
      height: 100,
    },
    gifContainer: {
      alignItems: "center",
      marginBottom: -12,
      marginTop: -12,
    },
    head: {
      color: "blue",
      fontSize: 16,
      marginBottom: 3
    },
    name: {
      alignItems: "center",
      marginTop: -1,
      marginBottom: 19,
    }
  });