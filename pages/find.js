// Example usage in a React Native component
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HospitalFinder from '../Find-Pages/FindHospital';
import HospitalDetail from '../Find-Pages/HospitalDetail';

const FindScreen = () => {

  const Stack = createStackNavigator();

  return (
  <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="HospitalFinder">
        <Stack.Screen name="HospitalFinder" component={HospitalFinder} options={{ headerShown: false }}/>
        <Stack.Screen 
        name="HospitalDetail" 
        component={HospitalDetail} 
          options={{
            title: 'Hospital Details',
            headerBackTitle: 'Back',
            headerStyle: {
            height: 110,
            backgroundColor: '#B2E1F0' }
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
);
}

const styles = StyleSheet.create({

  
});

export default FindScreen;