
import { View, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import styles from './home.styles.js';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fontisto, Ionicons } from '@expo/vector-icons';

import FontAwesome from '@expo/vector-icons/FontAwesome';

// import { Welcome, Carousel, Headings } from '../../components';

import Welcome from "../../components/home/welcome/Welcome.jsx";
import Carousel from "../../components/home/carousel/Carousel.jsx";
import Headings from "../../components/home/headings/Headings.jsx";

const Home = () => {
  
  return (
    <SafeAreaView>
      {/*<View> View is like div in React*/}
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>

          <Ionicons name='location-outline' size={24}></Ionicons>

          <Text style={styles.textStyle}>Location</Text>

          <View style={{alignItems: 'flex-end'}}>
            <View style={styles.cartCount}>
              {/* <Text style={styles.cartNumber}>8</Text> */}
              {/* <Touchable> For make an item touch or 'clikeable'*/}
              <TouchableOpacity>
                {/* <Fontisto name='shopping-bag' size={40}></Fontisto> */}
                <FontAwesome name="shopping-bag" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome></Welcome>
        <Carousel></Carousel>
        <Headings></Headings>
      </ScrollView>
    </SafeAreaView>
  )
};

export default Home;