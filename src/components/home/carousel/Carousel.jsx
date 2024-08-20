
import { View, Text } from 'react-native';
import React from 'react';
import styles from './carousel.styles.js';
import { SliderBox } from 'react-native-image-slider-box';

const Carousel = () => {

    const slides = [

    ];

  return (
    <View styles={styles.CarouselContainer}>
      {/* <SliderBox /> */}
      <Text>Carousel</Text>
    </View>
  )
}

export default Carousel;