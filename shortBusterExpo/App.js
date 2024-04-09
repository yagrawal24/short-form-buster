// Import necessary modules
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SetupScreen from './SetupScreen'; // Import the SetupScreen component

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














// REDIRECTED PAGE
// import React, { useState, useEffect } from 'react';
// import { View, Text, Linking, StyleSheet, TouchableOpacity, Animated } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Notifications } from 'expo';

// const App = () => {
//   const proceedToSnapchat = () => {
//     Linking.openURL('snapchat://');
//   };

//   const [timer, setTimer] = useState(0);
//   const [buttonActive, setButtonActive] = useState(false);
//   const [loadingProgress, setLoadingProgress] = useState(new Animated.Value(0));
//   const [randomIndex, setRandomIndex] = useState(0);
//   const messages = [
//     "Did you know? The average user spends over an hour a day on Snapchat. Is there a more meaningful way you could spend your time?",
//     "Take a deep breath. Before you open Snapchat, consider if it aligns with your goals and priorities for the day.",
//     "You are more than your social media presence. Use this moment to connect with yourself and the world around you.",
//     "Your time is valuable. Spend it intentionally. Is opening Snapchat right now the best use of your time?",
//     "Pause for a moment. Reflect on how you want to spend your time and energy.",
//     "Every moment is an opportunity to choose how you engage with the world. Is Snapchat the best choice right now?",
//     "Mindfulness starts with small choices. Is opening Snapchat aligning with your intentions for today?",
//     "Consider the impact of your actions. Is opening Snapchat supporting your well-being?",
//     "Take control of your digital habits. Is opening Snapchat a conscious decision or a reflex?",
//     "Challenge yourself to be present. Is there something more fulfilling you could do instead of opening Snapchat?"
//   ];

//   useEffect(() => {
//     var ind = Math.floor(Math.random() * 10);
//     setRandomIndex(ind);
  
//     const interval = setInterval(() => {
//       setTimer(prevTimer => {
//         const newTimer = prevTimer + 1;
//         // Check if 10 seconds have passed and send a notification
//         if (newTimer % 10 === 0) {
//           sendNotification(newTimer);
//           // Optional: You can throw an error here if you want to stop the interval
//           // throw new Error('Notification sent');
//         }
//         return newTimer;
//       });
//     }, 1000);
  
//     // Start loading animation
//     Animated.timing(loadingProgress, {
//       toValue: 0.2,
//       duration: 5000, // 5 seconds
//       useNativeDriver: false,
//     }).start(() => {
//       setButtonActive(true);
//     });
  
//     return () => clearInterval(interval);
//   }, []);  

//   const sendNotification = async (seconds) => {
//     Notifications.presentLocalNotificationAsync({
//       title: 'Timer Notification',
//       body: `Current timer: ${formatTime(seconds)}`,
//     });
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     //return seconds;
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   return (
//     <LinearGradient colors={['#6B6BFF', '#6BDD6B']} style={styles.container}>
//       <View style={styles.content}>
//         <Text style={styles.title}>Are you sure?</Text>
//         <Text style={styles.description}>{messages[randomIndex]}</Text>
//         <TouchableOpacity
//           style={[styles.button, buttonActive ? styles.activeButton : styles.disabledButton]}
//           onPress={buttonActive ? proceedToSnapchat : null}
//           disabled={!buttonActive}
//         >
//           {buttonActive ? (
//             <Text style={styles.buttonText}>Continue to Snapchat</Text>
//           ) : (
//             <Animated.View style={[styles.progressBar, { width: loadingProgress.interpolate({
//               inputRange: [0, 1],
//               outputRange: ['0%', '100%'],
//             }) }]} />
//           )}
//         </TouchableOpacity>
//       </View>
//       <View style={styles.settingsContainer}>
//         <Text style={styles.settingsTitle}>App Settings</Text>
//         <Text style={styles.settingsDescription}>Notification Frequency:</Text>
//         <View style={styles.frequencyContainer}>
//           <TouchableOpacity style={styles.frequencyOption}>
//             <Text style={styles.frequencyText}>3 min</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.frequencyOption}>
//             <Text style={styles.frequencyText}>5 min</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.frequencyOption}>
//             <Text style={styles.frequencyText}>10 min</Text>
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.timer}>Timer: {formatTime(timer)}</Text>
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#FFF', // Text color
//   },
//   description: {
//     fontSize: 20,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#eee', // Text color
//   },
//   button: {
//     backgroundColor: '#ffffff',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     overflow: 'hidden',
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#000',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   progressBar: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     backgroundColor: '#ccc',
//   },
//   activeButton: {
//     opacity: 1,
//   },
//   disabledButton: {
//     opacity: 0.5,
//   },
//   settingsContainer: {
//     paddingTop: 0, // Move settings section up
//     paddingBottom: 100,
//     alignItems: 'center',
//   },
//   settingsTitle: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#FFF', // Text color
//   },
//   settingsDescription: {
//     fontSize: 18,
//     marginBottom: 5,
//     color: '#000', // Text color
//   },
//   frequencyContainer: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   frequencyOption: {
//     backgroundColor: '#ffffff',
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   frequencyText: {
//     fontSize: 14,
//     color: '#000',
//   },
//   timer: {
//     fontSize: 18,
//     color: '#000'
//   }
// });

// export default App;


