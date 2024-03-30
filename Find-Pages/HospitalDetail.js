import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import { EDdataMA } from './EDdataMA';

const HospitalDetail = ({ route }) => {
  const { hospital } = route.params;
  const [currentLocation, setCurrentLocation] = useState(null);
  const [travelTime, setTravelTime] = useState(null);
  const [address, setAddress] = useState(null);
  const selectedHospitalName2 = hospital.fields.name.toUpperCase();

  const selectedHospital2 = EDdataMA.find(
    (hospital) => hospital['Facility Name'] === selectedHospitalName2
  );

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setCurrentLocation(`${location.coords.latitude},${location.coords.longitude}`);

        const addressResponse = await Location.reverseGeocodeAsync({ latitude, longitude });

        // Extract city and state from the address
        const city = addressResponse[0]?.city || 'Unknown City';
        const state = addressResponse[0]?.region || 'Unknown State';

        setAddress(`${city}, ${state}`);

      } else {
        console.log('Location permission not granted.');
        setCurrentLocation(null);
      }
    } catch (error) {
      console.error('Error getting current location:', error);
      setCurrentLocation(null);
    }
  };

  const getTravelTime = async () => {
    try {
      const response = await axios.get(
        `http://www.mapquestapi.com/directions/v2/route?key=wcOZLtlj15fgKkjL3zWMruN9hvuznpTe&from=${currentLocation}&to=${hospital.fields.lat},${hospital.fields.lng}`
      );

      const travelTimeInSeconds = response.data.route.time;
      const travelTimeInMinutes = Math.ceil(travelTimeInSeconds / 60);
      setTravelTime(travelTimeInMinutes);
    } catch (error) {
      console.error('Error getting travel time:', error);
      setTravelTime(null);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, [currentLocation, hospital.fields.lat, hospital.fields.lng]);

  return (
    <ScrollView style={styles.whole}>
    <View>
      <Text style={styles.title}>{hospital.fields.name}</Text>
      <View style={styles.imgContainer}>
      <Image source={require('../assets/istockphoto-1319979886-612x612-removebg-preview.png')} style={styles.img}/>
      </View>
      {address && (<Text style={styles.time}><Text style={styles.bold}>Current Address:</Text> {address}</Text>)}
      {selectedHospital2 ? (
        <View>
          <Text style={styles.time}><Text style={styles.bold}>Telephone:</Text> {selectedHospital2["Telephone Number"]}</Text>
          <Text style={styles.time}><Text style={styles.bold}>Address:</Text> {selectedHospital2.Address}</Text>
          <Text style={styles.time}><Text style={styles.bold}>City:</Text> {selectedHospital2.City}</Text>
          <Text style={styles.time}><Text style={styles.bold}>Hours:</Text>  {selectedHospital2.Hours}</Text>
          <Text style={styles.time}><Text style={styles.bold}>Hospital Type:</Text> {selectedHospital2["Hospital Type"]}</Text>
          <Text style={styles.time}><Text style={styles.bold}>Emergency Services:</Text> {selectedHospital2["Emergency Services"]}</Text>
          <Text style={styles.time}><Text style={styles.bold}>ED Volume:</Text> {selectedHospital2["ED Volume"]}</Text>
        </View>
      ) : (
        <Text style={styles.time}>No other data available for the selected hospital.</Text>
      )}
      <Text style={styles.time}><Text style={styles.bold}>Travel Time:</Text> {travelTime !== null ? `${travelTime} minutes` : 'Not available'}</Text>
      <View style={styles.button}>
      <Button title="Refresh Time" onPress={getTravelTime} />
      </View>
      <Text style={styles.note}><Text style={styles.bold}>NOTE: </Text>This estimated wait time is referring to the 
      hospital's wait time for the Emergency Department/Emergency Room.</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  whole: {
    marginBottom: 90
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
    marginBottom: -20
  },
  img: {
    height: 250,
    width: 200,
  },
  imgContainer: {
    alignItems: 'center',
    marginBottom: 0,
    margintop: -10
  },
  note: {
    fontSize: 16,
    padding: 20,
    marginRight: 15,
    marginLeft: 5
  },
  bold: {
    fontWeight: "bold"
  },
  time: {
    marginLeft: 25,
    marginBottom: 0,
    fontSize: 16,
    marginTop: 30
  },
  time2: {
    marginLeft: 25,
    marginBottom: 0,
    fontSize: 16,
    marginTop: -10
  },
  button: {
    marginTop: 20,
  },
  traffic: {
    flexDirection: 'row'
  }
});

export default HospitalDetail;