import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Carousel from '../component/Carousel';
import DataScreen from '../Resource-Pages/data';
import ErrorsScreen from '../Resource-Pages/errors';
import LegalScreen from '../Resource-Pages/legal';
import SafetyScreen from '../Resource-Pages/safety';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ResourcesScreen = () => {
  return (
    <View style={styles.container}>
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="Resources">
      <Stack.Screen name="Resources" component={Carousel} options={{ headerShown: false }}/>
      <Stack.Screen 
        name="Common Errors" 
        component={ErrorsScreen} 
        options={{
          headerBackTitle: 'Back',
          headerStyle: {
            height: 110,
            backgroundColor: '#B2E1F0',
      },
          headerTitleStyle: {
            marginTop: -10, 
      },
      }}/>
      <Stack.Screen 
        name="Legal and Law" 
        component={LegalScreen} 
        options={{
          headerBackTitle: 'Back',
          headerStyle: {
            height: 110,
            backgroundColor: '#B2E1F0',
      },
          headerTitleStyle: {
            marginTop: -10, 
      },
      }}/>
      <Stack.Screen 
        name="Stay Safe" 
        component={SafetyScreen} 
        options={{
          headerBackTitle: 'Back',
          headerStyle: {
            height: 110,
            backgroundColor: '#B2E1F0',
      },
          headerTitleStyle: {
            marginTop: -10, 
      },
      }}/>
      <Stack.Screen 
        name="Data" 
        component={DataScreen} 
        options={{
            headerBackTitle: 'Back',
            headerStyle: {
              height: 110,
              backgroundColor: '#B2E1F0',
        },
            headerTitleStyle: {
              marginTop: -10, 
        },
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
      <StatusBar style='auto' />
    </View>
  ); }

  export default ResourcesScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 90,
  },
})