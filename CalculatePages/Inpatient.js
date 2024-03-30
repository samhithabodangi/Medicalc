import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HeaderResource from '../component/HeaderResource';

const Inpatient = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    // Add more data as needed
  ]);

  const handleSearch = (text) => {
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchQuery(text);
    setData(filteredData);
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.name}</Text>
    </View>
  );


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
    <HeaderResource />
      <TextInput
        style={styles.searchBox}
        placeholder="Search for Inpatient Services"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      {searchQuery !== '' && (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      )}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25
  },
  container: {
    padding: 10,
    height: 100,
    marginTop: -10
  },
  searchBox: {
    height: 56,
    marginBottom: 10,
    paddingLeft: 20,
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 15,
  }
})

export default Inpatient;