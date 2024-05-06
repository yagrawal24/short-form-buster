// Import necessary modules
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SetupScreen from './SetupScreen'; // Import the SetupScreen component
import OpenPage from './OpenPage';

// Create a stack navigator
const Stack = createStackNavigator();

// Define the main App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Setup" component={SetupScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}