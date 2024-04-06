import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, AppState } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import BackgroundTimer from 'react-native-background-timer';

const App = () => {
  const [freeDiskStorage, setFreeDiskStorage] = useState(null);

  useEffect(() => {
    fetchFreeDiskStorage();

    const intervalId = BackgroundTimer.setInterval(() => {
      fetchFreeDiskStorage();
    }, 10000); // Fetch free disk storage every 10 seconds

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      BackgroundTimer.clearInterval(intervalId);
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const fetchFreeDiskStorage = async () => {
    try {
      const storage = await DeviceInfo.getFreeDiskStorage();
      setFreeDiskStorage(storage);
    } catch (error) {
      console.error('Error fetching free disk storage:', error);
    }
  };

  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'active') {
      fetchFreeDiskStorage();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Free Disk Storage</Text>
      <Text style={styles.storage}>{freeDiskStorage !== null ? `${(freeDiskStorage / (1024 * 1024 * 1024)).toFixed(2)} GB` : 'Loading...'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  storage: {
    fontSize: 18,
  },
});

export default App;
