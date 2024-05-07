import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SetupScreen from './SetupScreen'; // Import the SetupScreen component
import OpenPage from './OpenPage';

// Create a stack navigator
const Stack = createStackNavigator();

// Define a component for handling the initial URL check and navigation
const InitialURLHandler = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Check if the app was opened from another app
    Linking.getInitialURL().then(url => {
      if (url) {
        console.log(url);
        // If opened from another app, navigate to OpenPage
        navigation.navigate('OpenPage');
      }
    });
  }, [navigation]); // Run this effect only once when the component mounts

  return null; // This component doesn't render anything
}

// Define the main App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InitialURLHandler" component={InitialURLHandler} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Setup" component={SetupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OpenPage" component={OpenPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
