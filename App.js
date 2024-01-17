import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import { AppRegistry } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <Text>afuboau</Text>
    // <HomeScreen/>
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// AppRegistry.registerComponent('Expense Tracker', () => App);
export default App;