
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import BottomTabNavigation from './src/navigation/BottonTabNavigation';

export default function App() {

  const stack = createNativeStackNavigator();

  // const [fontsLoaded] = useFonts({
  //   regular: require(""), //Place 1H 25 Min.
  // });

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
            name='Botton Navigation'
            component={BottomTabNavigation}
            options={{headerShown: false}}
        >
        </stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
};