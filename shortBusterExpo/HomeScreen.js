import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#3498db', '#2c3e50']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.introText}>Reclaim your lost time</Text>
        <Text style={styles.description}>Break the cycle of mindless scrolling and regain control of your time.</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>3 hrs</Text>
            <Text style={styles.statText}>spent per day on social media by an average Gen Z user</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>50%</Text>
            <Text style={styles.statText}>average under- estimate in a user's own social media use</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>51%</Text>
            <Text style={styles.statText}>of Gen Z mindlessly scrolls at least once a day</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>7 in 10</Text>
            <Text style={styles.statText}>consumers of short form media have associated negative health consequences</Text>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate("Setup")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 90,
  },
  introText: {
    fontSize: 52,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    color: '#2eff71',
  },
  description: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
    color: '#eee',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 30,
    width: '100%',
  },
  stat: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
    width: '45%', // Adjust width to fit two stats in a row
  },
  statNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2eff71',
    textAlign: 'center',
  },
  statText: {
    fontSize: 16,
    color: '#eee',
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: '#2ecc71',
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
