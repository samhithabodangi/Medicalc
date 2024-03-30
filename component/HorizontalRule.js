import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalRule = () => {
  return (
        <View style={styles.horizontalRule} />
    );
};

const styles = StyleSheet.create({
  horizontalRule: {
    width: '86%',
    alignSelf: 'center',
    borderBottomColor: 'black', 
    borderBottomWidth: 2,
    marginVertical: 10
  },
});

export default HorizontalRule;
