
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.styles';
import Colors from '../../../../assets/constants/Colors';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {

  const navigation = useNavigation();

  return (
    <View>

      <View style={styles.container}>
        <Text style={styles.welcomeText(Colors.light.text)}>Find The Most</Text>
        <Text style={styles.welcomeText()}>Luxuriuos Furnitures</Text>
      </View>

      <View style={styles.searchContainer(Colors.light.background)}>
        <TouchableOpacity>
          <Feather 
            name='search' 
            size={24} 
            style={styles.searchIcon}>      
          </Feather>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value='' 
            onPress={()=> navigation.navigate('Search')} 
            placeholder='What are looking for'>
          </TextInput>
        </View>
        
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name='camera-outline' size={24}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Welcome;