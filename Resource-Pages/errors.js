import React, {useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking, Button, ScrollView} from 'react-native'; 
import HeaderResource from '../component/HeaderResource';

export default function ErrorsScreen() {
  const scrollViewRef = useRef();
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.measureLayout(
        scrollViewRef.current.getInnerViewNode(),
        (x, y) => {
          scrollViewRef.current.scrollTo({ x: 0, y, animated: true });
        }
      );
    }
  };

  const openLink = () => {
    const url = 'https://www.redcross.org/content/dam/redcross/atg/PHSS_UX_Content/CPRO_Handbook.pdf';
    Linking.openURL(url);
  };

    return (
      <ScrollView ref={scrollViewRef} style={styles.scroll}>
      <View style={styles.whole}>
      <HeaderResource />
      <View style={styles.safeContainer}>
        <Text style={styles.intro}>Emergencies can happen anywhere, and to anyone. First Aid and CPR can help you save lives 
            by allowing you to give medical care before emergency services arrive. </Text>
        <Text style={[styles.intro, styles.introtext]}>Scroll down to learn about administering CPR/AED and giving First Aid. 
            Please remember to call 911 for any life-threatening emergencies.</Text>
                
              <View style={styles.listContainer}>
                <TouchableOpacity style={styles.listItem} onPress={() => scrollToSection(section1Ref)}>
                    <Text style={styles.listText}><Text style={styles.bold}>1.</Text> HIPPA</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.listItem} onPress={() => scrollToSection(section2Ref)}>
                    <Text style={styles.listText}><Text style={styles.bold}>2.</Text> Price Transparency</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.listItem} onPress={() => scrollToSection(section3Ref)}>
                    <Text style={styles.listText}><Text style={styles.bold}>3.</Text> Affordable Care</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.listItem} onPress={() => scrollToSection(section4Ref)}>
                    <Text style={styles.listText}><Text style={styles.bold}>4.</Text> No Surprises</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.listItem} onPress={() => scrollToSection(section5Ref)}>
                    <Text style={styles.listText}><Text style={styles.bold}>5.</Text> Health Insurance</Text>
                  </TouchableOpacity>
                  </View>
              </View>

              <Text style={styles.title} ref={section1Ref}>HIPPA</Text>
              <Text style={styles.title} ref={section2Ref}>Price Transparency Act</Text>
              <Text style={styles.title} ref={section3Ref}>Affordable Care Act</Text>
              <Text style={styles.title} ref={section4Ref}>No Surprises Act</Text>
              <Text style={styles.title} ref={section5Ref}>Health Insurace</Text>

        <StatusBar style="auto" />
        </View>
        </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    whole:{
      marginBottom: 0
    },

    intro: {
      marginTop: 16,
      fontSize: 16
  },

  safeContainer: {
    marginRight: 24,
    marginLeft: 24,
  },

  cprContainer: {
    marginRight: 24
  },

  bold: {
    fontWeight: "bold"
  },

  box: {
    marginTop: 13
  },

  introtext: {
    marginTop: 20
  },

  text: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },

  listContainer: {
    marginTop: 25,
    alignItems: 'center'
  },

  listItem: {
    flexDirection: 'row', 
    marginBottom: 5,
    marginTop: 15,
    backgroundColor: '#BBDFF4',
    padding: 15,
    borderRadius: 10,
    width: '70%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  consentItem: {
    flexDirection: 'row',
  },

  consentText: {
    fontSize: 16
  },

  listText: {
    fontSize: 18,
  },

  consentNumber: {
    marginRight: 7,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0D61C4'
  },

  listNumber: {
    marginRight: 7,
    fontWeight: 'bold',
    fontSize: 18,
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 40
  },

  video: {
    marginTop: 10
  },

  consentTextBox: {
    marginTop: 10
  },

  consentText: {
    fontSize: 16
  },

  cprtitle: {
    marginTop: 30
  },

  cprItem: {
    flexDirection: 'row',
    padding: 8
  },

  cprTextBox: {
    marginTop: 10,
  },

  cprText: {
    fontSize: 16
  },

  cprNumber: {
    marginRight: 7,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0D61C4'
  },

  aedpic: {
    height: 350,
    width: 350,
  },

  imgContainer: {
    alignItems: 'center',
    marginTop: 40
  },

  aidContainer: {
    marginRight: 24
  },

  bandage: {
    height: 180,
    width: 180,
    marginRight: 10
  },

  bandageBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  caption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },

  captiontext: {
    marginRight: 30,
  },

  captiontext2: {
    marginLeft: 80
  },

  end: {
    marginTop: 40
  },

  redCross: {
    height: 100,
    width: 100,
    marginLeft: 10,
    marginTop: 15
  },

  redCrossContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },

  redCrosstext: {
    width: '70%'
  }
  })