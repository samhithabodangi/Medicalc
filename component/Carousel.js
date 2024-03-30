import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from './Header';

const slides = [
  {
    id: 1,
    title: 'Common Errors',
    description: 'Look out for these common errors in medical bills',
    image: require("../assets/bill.png"), 
    destination: 'Common Errors'
  },
  {
    id: 2,
    title: 'Legal and Law',
    description: 'Know your rights when it comes to your healthcare',
    image: require('../assets/balance.png'), 
    destination: 'Legal and Law'
  },
  {
    id: 3,
    title: 'Stay Safe',
    description: 'First Aid and CPR guides to help keep everyone safe',
    image: require('../assets/firstaid.png'), 
    destination: 'Stay Safe'
  },
  {
    id: 4,
    title: 'The Data',
    description: 'Learn where MediCalc gets its data and information',
    image: require('../assets/search.png'),
    destination: 'Data'
  }
];

const Carousel = () => {
  const navigation = useNavigation();

  const handleSlidePress = (destination) => {
    // Navigate to the specified destination screen
    navigation.navigate(destination);
  };


  return (
    <><View>
    <Header />
    </View>
    <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
        {slides.map((slide) => (
            <View style={styles.carouselContainer}>
              <View style={styles.slideBox}>
                <TouchableOpacity
                  key={slide.id}
                  onPress={() => handleSlidePress(slide.destination)}
                  style={styles.slide}>
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>{slide.title}</Text>
                    <Text style={styles.content}>{slide.description}</Text>
                  </View>
                  <View style={styles.imageBox}>
                    <Image source={slide.image} style={styles.image} />
                  </View>
                </TouchableOpacity>
              </View>
          </View>
        ))}
      </Swiper></>
  );
};

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    
  },
  carouselContainer: {
    alignItems: 'center'
  },
  slideBox: {
    backgroundColor: '#BBDFF4',
    width: 300,
    height: 411,    
    borderRadius: 10,
    marginTop: "18%",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
},
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20
  },
  imageBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
  textContainer: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'center'
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5
  },
});

export default Carousel;
