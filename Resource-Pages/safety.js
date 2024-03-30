import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Linking} from 'react-native'; 
import HeaderResource from '../component/HeaderResource';
import HorizontalRule from '../component/HorizontalRule';
import YoutubeIframe from 'react-native-youtube-iframe';

  const consentItems = [
    'Identify yourself to the victim',
    'State your level of training',
    'Ask the victim if you may help',
    'Explain what you plan to do',
  ];

  const primaryAssesment = [
    'Make sure the scene is safe',
    'Check for responsiveness',
    'Listen for breathing and check for a pulse',
    'If unresponsive and not breathing, call 911 and start CPR'
  ];

  const compressions = [
    'Interlock hands and push hard and fast at the center of the victim’s chest',
    'Compress chest for at least 2 inches deep and at least 100 beats per minute',
    'Let the chest rise completely before pushing down again',
    'Give CPR and ventilation at a rate of 30 compressions per 2 ventilations'
  ];

  const ventilation = [
    'Pinch the victim’s nose closed',
    'Tilt the person’s head back and chin up',
    'Close your mouth over theirs and blow a breath into it',
    'Make sure the victim’s chest rises as you breathe in',
  ];

  const aed = [
    'Turn on the AED and follow the voice or the visual prompts',
    'Remove any clothing and wipe the victim’s bare chest dry',
    'Attach the aed pads to the victim’s chest (one on the upper right and one on the left side)',
    'Let AED analyze the heart’s rhythm',
    'If the AED advises a shock, make sure no one is touching the victim',
    'Deliver the shock by pressing the button',
    'After the shock is delivered, start performing CPR, beginning with compressions',
  ];

  const firstAid = [
    'Find the source of the bleeding',
    'Place dressing on the wound (or a t-shirt)',
    'Apply steady, form pressure directly over the wound',
    'Hold direct pressure until the bleeding stops',
    'If there is heavy bleeding, you can add an additional dressing pad',
    'Only change the top dressing pad if there is excessive bleeding',
    'Check for circulation if the bleeding stops'
  ];

export default function SafetyScreen() {
  const scrollViewRef = useRef();
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();

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
                    <Text style={styles.listText}><Text style={styles.bold}>1.</Text> CPR</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.listItem} onPress={() => scrollToSection(section2Ref)}>
                    <Text style={styles.listText}><Text style={styles.bold}>2.</Text> AED</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.listItem} onPress={() => scrollToSection(section3Ref)}>
                    <Text style={styles.listText}><Text style={styles.bold}>3.</Text> First Aid</Text>
                  </TouchableOpacity>
              </View>

            <Text style={styles.title}>Consent</Text>
            <HorizontalRule />
            <View style={styles.box}>
            <Text style={[styles.bold, styles.text]}>Before giving any type of care remember to ask for consent</Text>
            <Text style={styles.text}>Giving someone care without their consent is considered an act of battery</Text>
            <Text style={styles.text}>To obtain consent:</Text>
            <View style={styles.consentContainer}>
              {consentItems.map((item, index) => (
                <View style={styles.consentItem} key={index}>
                  <Text style={styles.consentNumber}>{index + 1}.</Text>
                  <Text style={styles.consentText}>{item}</Text>
                </View>
              ))}
            </View>
            <View style={styles.consentTextBox}>
            <Text style={styles.text}>If a victim indicates that they do not give consent, do not provide care. Call 911 
            and monitor the victim instead.</Text>

            <Text style={styles.text}>If the victim is unable to give consent (they are unconsious, mentally impaired, or 
              confused) <Text style={styles.bold}>consent is implied</Text>.</Text>

            <Text style={styles.text}>For a minor (under 18), you must 
              obtain consent from a parent or guardian. If a parent or guardian is not present, consent is implied.</Text>
              </View>

            <Text style={styles.title} ref={section1Ref}>Performing CPR</Text>
            <HorizontalRule />
            <View style={styles.video}>
            <YoutubeIframe 
              height={250}
              videoId='k0W9TM0uvk4'
            />
            <View >
            <Text style={styles.text}>CPR circulates oxygen blood to the vital organs of a person whose heart and
              breathing have stopped</Text>

            <Text style={styles.text}>Perform CPR when a person is unconscious and non responsive
              Stop performing CPR when you see an obvious sign of life (such as breathing), or until emergency personnel arrives.</Text>

              <Text style={[styles.text, styles.bold, styles.cprtitle]}>Perform a primary assessment:</Text>
              <View style={styles.cprContainer}>
              <View style={styles.consentContainer}>
              {primaryAssesment.map((item, index) => (
                <View style={styles.cprItem} key={index}>
                  <Text style={styles.cprNumber}>{index + 1}.</Text>
                  <Text style={styles.cprText}>{item}</Text>
                </View>
              ))}
            </View>
            
            <Text style={[styles.text, styles.bold, styles.cprtitle]}>Chest Compression:</Text>
            <View style={styles.consentContainer}>
              {compressions.map((item, index) => (
                <View style={styles.cprItem} key={index}>
                  <Text style={styles.cprNumber}>{index + 1}.</Text>
                  <Text style={styles.cprText}>{item}</Text>
                </View>
              ))}
            </View>

            <Text style={[styles.text, styles.bold, styles.cprtitle]}>Ventilations:</Text>
            <View style={styles.consentContainer}>
              {ventilation.map((item, index) => (
                <View style={styles.cprItem} key={index}>
                  <Text style={styles.cprNumber}>{index + 1}.</Text>
                  <Text style={styles.cprText}>{item}</Text>
                </View>
              ))}
            </View>
            </View>

            </View>
            </View>

            <Text style={styles.title}  ref={section2Ref}>Using an AED</Text>
            <HorizontalRule />
            <View style={styles.video}>
            <YoutubeIframe 
              height={250}
              videoId='in8j2Q2z3HE'
            />
            </View>
            <Text style={styles.text}>AEDs are devices that analyze the heart’s rhythm 
            and provide defibrillation to help the heart re-establish an effective rhythm.</Text>

            <Text style={styles.text}>Use an AED when the victim is not breathing and has no pulse</Text>

            <Text style={styles.text}>If it is raining, try to make sure the victim is as dry as possible.
            Do not delay the defibrillation; <Text style={styles.bold}>AEDS are safe even in rain and snow. </Text></Text>

            <View style={styles.imgContainer}>
            <Image source={require('../assets/aed-placement.jpg')} style={styles.aedpic}/>
            </View>

            <Text style={[styles.text, styles.bold, styles.cprtitle]}>How to use an AED:</Text>
            <View style={styles.aidContainer}>
              {aed.map((item, index) => (
                <View style={styles.cprItem} key={index}>
                  <Text style={styles.cprNumber}>{index + 1}.</Text>
                  <Text style={styles.cprText}>{item}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.text}>Follow the prompts of the AED
            Perform 2 minutes of CPR after the shock.
            Let the AED analyze the heart's rhythm again and give another shock if it is advised.</Text>

            <Text style={styles.text}>If no shock is advised, perform CPR until you see an obvious sign of life.</Text>

            <Text style={styles.title} ref={section3Ref}>First Aid</Text>
            <HorizontalRule />
            <View style={styles.video}>
            <YoutubeIframe 
              height={250}
              videoId='YJB3fI3T1oo'
            />
            </View>
            <Text style={styles.text}>Use direct pressure to control life-threatening bleeding on the head, neck or chest</Text>
            <Text style={styles.text}>Apply direct pressure on an arm or leg when you are waiting for a tourniquet, or one is not available</Text>

            <View style={styles.bandageBox}>
            <Image source={require('../assets/guaze-pad.jpg')} style={styles.bandage}/>
            <Image source={require('../assets/roll-bandage.jpg')} style={styles.bandage}/>
            </View>
            <View style={styles.caption}>
              <Text style={styles.captiontext}>Gauze Pad</Text>
              <Text style={styles.captiontext2}>Rolling Bandage</Text>
            </View>

            <View style={styles.aidContainer}>
              {firstAid.map((item, index) => (
                <View style={styles.cprItem} key={index}>
                  <Text style={styles.cprNumber}>{index + 1}.</Text>
                  <Text style={styles.cprText}>{item}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.text}>Do not remove the original gauze pad, and do not stack multiple pads on top of each other</Text>
            <Text style={styles.text}>Make sure the injured body part is on a firm, flat surface</Text>
            <Text style={styles.text}>Add a roller bandage if the bleeding stops and support the victim</Text>

            <Text>-------------------------------------------</Text>
            <Text style={[styles.text, styles.end]}>Your care could potentially save someone's life. Remember to keep the victim comfortable 
            and make them feel safe before emergency personnel arrive. </Text>
            <View style={styles.redCrossContainer}>
            <Text style={[styles.text, styles.redCrosstext]}>For more information or training, there are many classes and resources at the 
            <TouchableOpacity onPress={openLink}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline' }}> Red Cross</Text>
            </TouchableOpacity></Text>
            <Image source={require('../assets/redCross.png')} style={styles.redCross}/>
            </View>
            </View>
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
    width: '60%',
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
});