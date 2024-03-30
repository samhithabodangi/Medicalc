import React from 'react';
import { View, Text } from 'react-native';

const NextPage = ({ route }) => {
  const { option1, option2 } = route.params;

  return (
    <View>
      <Text>Selected Option 1: {option1}</Text>
      <Text>Selected Option 2: {option2}</Text>
      {/* Display more information based on the selected options */}
    </View>
  );
};

export default NextPage;