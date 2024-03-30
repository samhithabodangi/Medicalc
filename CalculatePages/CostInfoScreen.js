import React from 'react';
import { View, Text, StyleSheet, ScrollView, SectionList } from 'react-native';
import { useRoute } from '@react-navigation/native'; 
import HeaderResource from '../component/HeaderResource';
import HorizontalRule from '../component/HorizontalRule';
import { Ambulance } from '../costData/ambulance';
import { Behavioral } from '../costData/behavioral';
import { Colonoscopies } from '../costData/colonoscopies';
import { Emergency } from '../costData/emergency';
import { Eye } from '../costData/eye';
import { Lab } from '../costData/lab';
import { Marernity } from '../costData/maternity';
import { Office } from '../costData/office';
import { PhysicalTherapy } from '../costData/physicalTherapy';
import { Radiology } from '../costData/radiology';

const CostInfoScreen = () => {
  const route = useRoute(); // Initialize the route hook
  const procedure = route.params.procedure;
  const category = route.params.category;
  const county = route.params.checked;

  const filteredAmbulanceData = Ambulance.filter((ambulance) =>  ambulance.ServiceType_Level2 == procedure && ambulance.County == county );
  filteredAmbulanceData.sort((a, b) => a.CostEstimate - b.CostEstimate);

  const sectionsAmbu = filteredAmbulanceData.map((ambulance) => ({
    title: ambulance.ProviderName,
    data: [ambulance],
  }));

  const filteredColonoscopyData = Colonoscopies.filter((colonoscopy) => colonoscopy.ServiceType_Level2 == procedure && colonoscopy.County == county);
  filteredColonoscopyData.sort((a,b) => a.CostEstimate - b.CostEstimate);

  const sectionsColon = filteredColonoscopyData.map((colonoscopy) => ({
    title: colonoscopy.ProviderName,
    data: [colonoscopy]
  }))

  return (
    <ScrollView style={{marginBottom: 120}}>
    <View>
    <HeaderResource />
    <Text style={styles.procedure}>Below are the costs of facilities in {county} County. If you are curious about our data, please look at the Resources tab</Text>
    <Text style={styles.procedure}><Text style={styles.title}>{category}:   </Text>{procedure}</Text>
    <Text style={styles.procedure2}><Text style={styles.title}>Near: </Text>{county}</Text>
    <HorizontalRule />
      {category === "Ambulance" ? (
        <View>
        <SectionList
      sections={sectionsAmbu}
      keyExtractor={(item, index) => item.name}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.name}> {item.ProviderName}</Text>
          <View style={{ flexDirection: "row" }}>
              <View style={styles.section}>
                  <Text style={{textAlign: "center", marginBottom: 10}}><Text style={{ fontWeight: "bold" }}>Address: {'\n'}</Text>{item.ProviderAddress}</Text>
                  <Text style={{textAlign: "center"}}><Text style={{ fontWeight: "bold" }}>Facility Type: {'\n'}</Text>{item.ProviderTaxonomyType}</Text>
              </View>
              <View style={styles.section2}>
                <Text style={{textAlign: "center", fontSize: 20}}><Text style={{ fontWeight: "bold" }}>Cost: {'\n'}</Text>${item.CostEstimate}</Text>
              </View>
          </View>
          </View>
      )}/>
      </View>
      ) : category === "Colonoscopies" ? (
        <View>
        <SectionList
      sections={sectionsColon}
      keyExtractor={(item, index) => item.name}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.name}> {item.ProviderName}</Text>
          <View style={{ flexDirection: "row" }}>
              <View style={styles.section}>
                  <Text style={{textAlign: "center", marginBottom: 10}}><Text style={{ fontWeight: "bold" }}>Address: {'\n'}</Text>{item.ProviderAddress}</Text>
                  <Text style={{textAlign: "center"}}><Text style={{ fontWeight: "bold" }}>Facility Type: {'\n'}</Text>{item.ProviderTaxonomyType}</Text>
              </View>
              <View style={styles.section2}>
                <Text style={{textAlign: "center", fontSize: 20}}><Text style={{ fontWeight: "bold" }}>Cost: {'\n'}</Text>${item.CostEstimate}</Text>
              </View>
          </View>
          </View>
      )}/>
      </View>
      ) : (
        <Text style={styles.text}>Default Content</Text>
      )}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    intro: {
        fontSize: 28,
        textAlign: "center",
        marginTop: 15,
      },
      title: {
        fontWeight: "bold",
        textAlign: "center",
      },
      procedure: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 15,
        marginRight: 20,
        marginLeft: 20
      },
      procedure2: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 15,
      },
      section: {
        backgroundColor: '#A5DA9C',
        padding: 10,
        margin: 5,
        marginLeft: 13,
        borderRadius: 10,
        width: 220,
        height: 170,
        alignItems: "center",
        justifyContent: "center"
      },
      section2: {
        backgroundColor: '#E88C8C',
        margin: 5,
        borderRadius: 10,
        width: 160,
        alignItems: "center",
        justifyContent: "center"
      },
      sectionHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 10,
      },
      name: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20
      },
      info: {
        fontSize: 14,
      },
})

export default CostInfoScreen;