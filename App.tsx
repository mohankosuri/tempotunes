 import { View, Text, StyleSheet,StatusBar } from 'react-native'
 import React from 'react'
 import LinearGradient from 'react-native-linear-gradient'
 
import Splashscreen from './screens/Splashscreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
 
 const App = () => {
  const stack=createNativeStackNavigator()
   return (
     <View  style={{ flex: 1 }}>
      <LinearGradient 
        colors={['#7F265B', '#FF7F50']}
        style={styles.statusBarBackground}
      >
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      </LinearGradient>

      <NavigationContainer>
        <stack.Navigator initialRouteName='splash'>
          <stack.Screen name='splash' component={Splashscreen} options={{headerShown:false}}></stack.Screen>
          <stack.Screen name='home' component={Home} options={{headerShown:false}}></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
       
     </View>
   )
 }

 const styles =StyleSheet.create({
  statusBarBackground: {
    height: StatusBar.currentHeight, // Ensure it matches the height of the status bar
  },
 })
 
 export default App