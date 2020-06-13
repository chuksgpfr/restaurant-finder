// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screen/search';
import ShowRestaurant from './src/screen/ShowRestaurant';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{ title: 'Business Search' }}
        />
        <Stack.Screen 
        name="ShowRestaurant" 
        component={ShowRestaurant} 
        options={{ title: 'Restaurant Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;