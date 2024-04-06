import React, { useEffect, useState } from 'react';
import { AppState, Text, View } from 'react-native';

const App = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
      } else if (nextAppState === 'background') {
        console.log('App has gone to the background!');
        // Schedule a notification here
      }
      setAppState(nextAppState);
    });

    return () => {
      subscription.remove();
    };
  }, [appState]);

  return (
    <View>
      <Text>Current state is: {appState}</Text>
    </View>
  );
};

export default App;
