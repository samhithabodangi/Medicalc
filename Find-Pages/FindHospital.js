// HospitalFinder.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView, Alert} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import HeaderResource from '../component/HeaderResource';

const HospitalFinder = () => {
  const [zipCode, setZipCode] = useState('');
  const [hospitals, setHospitals] = useState([]);
  const [coordinates, setCoordinates] = useState(null);

  //MAPQUEST_API_KEY = 'wcOZLtlj15fgKkjL3zWMruN9hvuznpTe'; 

  const navigation = useNavigation();

  useEffect(() => {
    if (coordinates) {
      findClosestHospitals();
    }
  }, [coordinates]);

  const getCoordinatesFromZipCode = async () => {
    try {
      const response = await fetch(
        `http://www.mapquestapi.com/geocoding/v1/address?key=wcOZLtlj15fgKkjL3zWMruN9hvuznpTe&location=${zipCode}`
      );
      const data = await response.json();
      const firstResult = data.results[0];

      if (firstResult && firstResult.locations.length > 0) {
        const location = firstResult.locations[0].latLng;
        setCoordinates({ latitude: location.lat, longitude: location.lng });
      } else {
        Alert.alert('Error', 'Please enter a ZIP code');
      }
    } catch (error) {
      console.error('Error getting coordinates:', error.message);
    } 
  };

  const findClosestHospitals = async () => {
    try {
      const response = await fetch(
        `http://www.mapquestapi.com/search/v2/radius?key=wcOZLtlj15fgKkjL3zWMruN9hvuznpTe&origin=${coordinates.latitude},${coordinates.longitude}&radius=5&hostedData=mqap.ntpois|group_sic_code=?|806202`
      );
      const data = await response.json();
      const sortedHospitals = data.searchResults.sort(
        (a, b) => a.distance - b.distance
      );
      const top10Hospitals = sortedHospitals.slice(0, 10);

      setHospitals(top10Hospitals);
    } catch (error) {
      console.error('Error fetching hospitals:', error.message);
    } 
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToHospitalDetail(item)} style={styles.hospitalButton}>
      <View style={styles.listItem}>
        <Text style={styles.hospitalText}>{item.fields.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const navigateToHospitalDetail = (hospital) => {
    navigation.navigate('HospitalDetail', { hospital });
  };

  return (
    <ScrollView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
    <HeaderResource />
    <Text style={styles.start}>Get Started</Text>
    <View style={styles.buttons}>
      <TextInput
        style={styles.input}
        placeholder="Enter ZIP Code"
        keyboardType="numeric"
        value={zipCode}
        onChangeText={(text) => setZipCode(text)}
        />
      
      <TouchableOpacity style={styles.button} onPress={() => {getCoordinatesFromZipCode(); findClosestHospitals();}}>
          <Text>Find Hospitals</Text>
        </TouchableOpacity>
        </View>
      
      {coordinates && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          <Marker
            coordinate={{ latitude: coordinates.latitude, longitude: coordinates.longitude }}
            title={`ZIP Code: ${zipCode}`}
          />

            {hospitals.map((hospital) => (
            <Marker
              key={hospital.id}
              coordinate={{
                latitude: hospital.fields.lat,
                longitude: hospital.fields.lng,
              }}
              title={hospital.fields.name}
              pinColor="blue"
            />
          ))}

        </MapView>
      )}

      {hospitals.length > 0 && (
        <FlatList
            data={hospitals}
            renderItem={renderItem}
            keyExtractor={(item) => item.id} 
            />
      )}
    <View style={styles.textBox}>
      <Text style={styles.text}>Input your Zip Code and get a list of the top 10 hospitals closest to you.</Text>
      <Text style={styles.text}>The hospitals are ranked based on travel time.</Text>
      <Text style={styles.text}>Click the hospitals for more information such as the address, travel time, telephone, etc.</Text>
    </View>

    </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 16,
    marginTop: 32,
    marginBottom: 100
  },
  buttons: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: '70%',
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10
  },
  map: {
    flex: 1,
    width: '100%',
    height: 200,
    marginTop: 10,
    marginBottom: 20
  },
  hospitalButton: {
    height: 65,
    borderWidth: 0.5,
    width: 400,
    borderColor: "gray",
    justifyContent: "center",
    marginLeft: -10,
  },
  hospitalText: {
    marginLeft: 15
  },
  start: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  text: {
    marginTop: 15,
    fontSize: 17,
    marginRight: 8,
    marginLeft: 10,
    marginBottom: 15,
  },
  textBox: {
    marginTop: 25,
  }

});

export default HospitalFinder;