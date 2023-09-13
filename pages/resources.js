import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';

const ResourcesScreen = () => {
    return (
      <SafeAreaView>
      <Text>Resources</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  };

  export default ResourcesScreen;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})