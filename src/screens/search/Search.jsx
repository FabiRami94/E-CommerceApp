
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './search.styles.js';
import Colors from '../../../assets/constants/Colors';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Search = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView>

      <View style={styles.searchContainer(Colors.light.background)}>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name='camera-outline' size={24}></Ionicons>
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
            <Feather 
              name='search' 
              size={24} 
              style={styles.searchIcon}>      
            </Feather> 
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Search;