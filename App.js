import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomesScreen from './pages/home';
import CalculateScreen from './pages/calculate';
import FindScreen from './pages/find';
import ResourcesScreen from './pages/resources';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab =createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 90,
    backgroundColor: "#B2E1F0",
    paddingTop: 25,
  }
}
export default function App() {
  return (
  
    <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Home"
            component={HomesScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <FontAwesome name="home" size={30} color={focused ? "#0D61C4" : "#111"} />
                    <Text style={{ fontSize: 12, color: "#16247d", paddingTop: 4 }}>Home</Text>
                  </View>
                );
              }
            }} />
          <Tab.Screen
            name="Calculate"
            component={CalculateScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Ionicons name="calculator" size={30} color={focused ? "#0D61C4" : "#111"} />
                    <Text style={{ fontSize: 12, color: "#16247d", paddingTop: 4 }}>Calculate</Text>
                  </View>
                );
              }
            }} />
          <Tab.Screen
            name="Find"
            component={FindScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <MaterialCommunityIcons name="map-marker-radius" size={30} color={focused ? "#0D61C4" : "#111"} />
                    <Text style={{ fontSize: 12, color: "#16247d", paddingTop: 4 }}>Find</Text>
                  </View>
                );
              }
            }} />
          <Tab.Screen
            name="Resources"
            component={ResourcesScreen}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Ionicons name="ios-book" size={30} color={focused ? "#0D61C4" : "#111"} />
                    <Text style={{ fontSize: 12, color: "#16247d", paddingTop: 4 }}>Resources</Text>
                  </View>
                );
              }
            }} />
        </Tab.Navigator>
      </NavigationContainer>
  )
};