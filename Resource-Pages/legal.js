import React, {useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking, ScrollView} from 'react-native'; 
import HeaderResource from '../component/HeaderResource';
import HorizontalRule from '../component/HorizontalRule';

export default function LegalScreen() {
  const consentItems = [
    'A machine-readable file with all standard charges established by the hospital for all the  services it provides.',
    'A display of standard charges for at least 300 shoppable services the hospital provides. '
  ];

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
    const url = 'https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html';
    Linking.openURL(url);
  };

  const openLink2 = () => {
    const url = 'https://www.hhs.gov/civil-rights/filing-a-complaint/complaint-process/index.html';
    Linking.openURL(url);
  };

  const openLink3 = () => {
    const url = 'https://www.cms.gov/newsroom/fact-sheets/hospital-price-transparency-enforcement-updates';
    Linking.openURL(url);
  };

    return (
      <ScrollView ref={scrollViewRef} style={styles.scroll}>
      <View style={styles.whole}>
      <HeaderResource />
      <View style={styles.safeContainer}>
        <Text style={styles.intro}>Understanding health care laws can help you advocate for yourself. You can make informed 
        decisions  and take control over the complex and often confusing healthcare system. </Text>
        <Text style={[styles.intro, styles.introtext]}>Scroll down to learn about the laws and acts that regulate and shape 
        the United States healthcare system.</Text>
                
              <View style={styles.listContainer}>
                <TouchableOpacity style={styles.listItem} onPress={() => scrollToSection(section1Ref)}>
                    <Text style={styles.listText}><Text style={styles.bold}>1.</Text> HIPAA</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.listItem} onPress={() => scrollToSection(section3Ref)}>
                    <Text style={styles.listText}><Text style={styles.bold}>2.</Text> Price Transparency</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.listItem} onPress={() => scrollToSection(section4Ref)}>
                    <Text style={styles.listText}><Text style={styles.bold}>3.</Text> Affordable Care</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.listItem} onPress={() => scrollToSection(section5Ref)}>
                    <Text style={styles.listText}><Text style={styles.bold}>4.</Text> No Surprises</Text>
                  </TouchableOpacity>

              </View>

              <Text style={styles.title} ref={section1Ref}>HIPAA</Text>
              <HorizontalRule />
              <Text style={styles.text}>HIPAA stands for the Health Insurance Portability and Accountability Act, which was 
              passed in 1996. It mainly has two purposes:</Text>
              <Text style={[styles.text, styles.bold]} >Patient Privacy</Text>
              <Text style={styles.text}>- Whether you information is on paper or stored electronically, it remains private</Text>
              <Text style={styles.text}>- You have the right to see or get a copy of your medical records</Text>
              <Text style={styles.text}>- Providers are not allowed to give information without your permission</Text>
              <Text style={styles.text}>- You can request that your information not be shared to specific people or groups</Text>
              <Text style={styles.text}>However, providers may disclose your information in special circumstances. For example, 
              they may share your information with other doctors to help gain a better understanding about your condition. </Text>
              <Text style={[styles.text, styles.bold]} >Health Insurance</Text>

              <Text style={styles.text}>Title I ensures the continuation of health coverage when employees change or loose jobs. 
              It allows people to continue their health insurance coverage as a private payer for a limited period of time.</Text>
               
              <View style={styles.redCrossContainer}><Text style={styles.text}>Learn more about </Text><TouchableOpacity onPress={openLink}>
              <Text style={styles.hippa}> HIPAA</Text>
            </TouchableOpacity></View>

              <Text style={styles.title2} ref={section3Ref}>Price Transparency Act</Text>
              <HorizontalRule />
              <Text style={styles.text}>Price transparency helps Americans know the cost of a hospital service upfront. </Text>
              <Text style={styles.text}>From January 
              1, 2021, every United States hospital was required to provide clear, accessible pricing information online about common 
              hospital procedures. </Text>

              <Text style={styles.text}>Hospitals are required to make these standard charges public in two ways:</Text>
              {consentItems.map((item, index) => (
                <View style={styles.consentItem} key={index}>
                  <Text style={styles.consentNumber}>{index + 1}.</Text>
                  <Text style={styles.consentText}>{item}</Text>
                </View>
              ))}

              <Text style={styles.text}>This information makes it easier for healthcare consumers to compare prices across hospitals 
              and estimate the cost of care before they receive it. </Text>

              <Text style={styles.text}>Hospital pricing is complicated and hard to navigate. Prices can vary greatly, even between hospitals in the same city.</Text>
              <Text style={styles.text}>Price transparency forces hospitals to be honest and straightforward about the costs they provide. 
              Consumers can now make affordable and informed decisions about their healthcare.</Text>

              <View style={styles.redCrossContainer}><Text style={styles.text}>Learn more about </Text><TouchableOpacity onPress={openLink3}>
              <Text style={styles.hippa}> Price Transparency</Text>
            </TouchableOpacity></View>

              <Text style={styles.title} ref={section4Ref}>Affordable Care Act`</Text>
              <HorizontalRule />

              <Text style={styles.title} ref={section5Ref}>No Surprises Act</Text>
              <HorizontalRule />

              <Text style={styles.text}>The No Surprises Act </Text>

              <Text>-------------------------------------------</Text>
              <Text style={styles.text}>Remember, if you believe that any of your rights are being violated, you have the right to 
              file a complaint. </Text>
              <View style={styles.redCrossContainer}><Text style={styles.text}>Learn how to file a </Text><TouchableOpacity onPress={openLink2}>
              <Text style={styles.hippa}> Civil Rights complaint</Text>
            </TouchableOpacity></View>

        <StatusBar style="auto" />
        </View>
        </View>
        </ScrollView>
    );
  }

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
    width: '75%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  consentItem: {
    flexDirection: 'row',
    marginRight: 30,
    marginBottom: 15
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

  title2: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 26
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

  redCrossContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  hippa: {
    color: 'blue', 
    textDecorationLine: 'underline',
    marginTop: 13
  }
  })