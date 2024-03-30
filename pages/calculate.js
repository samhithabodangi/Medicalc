import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeInput from '../CalculatePages/ZipcodeInput';
import Shoppable from '../CalculatePages/Shoppable';
import Inpatient from '../CalculatePages/Inpatient';
import Outpatient from '../CalculatePages/Outpatient';
import HospitalServicesOption from '../CalculatePages/HospitalServices';
import CostInfoScreen from '../CalculatePages/CostInfoScreen';



export default function CalculateScreen() {
  const Stack = createStackNavigator();

    return (
      <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Hospital Services">
        <Stack.Screen name="Hospital Servicez" component={HospitalServicesOption} options={{ headerShown: false }}/>
            <Stack.Screen 
        name="Inpatient Services" 
        component={Inpatient}
          options={{
            headerBackTitle: 'Back',
            headerStyle: {
            height: 110,
            backgroundColor: '#B2E1F0' }
            }}/>
            <Stack.Screen 
        name="Outpatient Services" 
        component={Outpatient}
          options={{
            headerBackTitle: 'Back',
            headerStyle: {
            height: 110,
            backgroundColor: '#B2E1F0' }
            }}/>
        <Stack.Screen 
        name="Shoppable Services" 
        component={Shoppable}
          options={{
            title: "Common Procedures",
            headerBackTitle: 'Back',
            headerStyle: {
            height: 110,
            backgroundColor: '#B2E1F0' }
            }}/>
            <Stack.Screen 
        name="ZipCodeInput" 
        component={ZipCodeInput} 
          options={{
            title: 'ZipCode',
            headerBackTitle: 'Back',
            headerStyle: {
            height: 110,
            backgroundColor: '#B2E1F0' }
            }}/>
            <Stack.Screen 
        name="CostInfoScreen" 
        component={CostInfoScreen}
          options={{
            title: "Cost Information",
            headerBackTitle: 'Back',
            headerStyle: {
            height: 110,
            backgroundColor: '#B2E1F0' }
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }

  const styles = StyleSheet.create ({})