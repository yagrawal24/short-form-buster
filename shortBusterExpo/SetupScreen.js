import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SetupScreen({ navigation, route }) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const finishSetup = () => {
    navigation.navigate('Home'); // Navigate back to the Home screen
  };

  const renderNextButton = () => {
    if (currentStep < 11) {
      return (
        <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.finishButton} onPress={finishSetup}>
          <Text style={styles.finishButtonText}>Finish</Text>
        </TouchableOpacity>
      );
    }
  };

  // Array of image paths corresponding to each step
  const stepImages = [
    require('./assets/step1.png'),
    require('./assets/step2.jpg'),
    require('./assets/step3.jpg'),
    require('./assets/step4.jpg'),
    require('./assets/step5.jpg'),
    require('./assets/step6.jpg'),
    require('./assets/step7.jpg'),
    require('./assets/step8.jpg'),
    require('./assets/step9.jpg'),
    require('./assets/step10.jpg'),
    require('./assets/step11.jpg'),
  ];

  return (
    <LinearGradient
      colors={['#3498db', '#2c3e50']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image source={stepImages[currentStep - 1]} style={styles.image} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{steps[currentStep - 1]}</Text>
            {renderNextButton()}
          </View>
          <View style={styles.indicatorContainer}>
            {steps.map((step, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index < currentStep ? styles.indicatorCompleted : null,
                  index === currentStep - 1 ? styles.indicatorCurrent : null,
                ]}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const steps = [
  "Open the Shortcuts app on your iOS device.",
  "Tap the 'Automation' tab at the bottom of your screen.",
  "Tap the '+' button in the top-right corner to create a new shortcut.",
  "Tap 'Create Personal Automation' to add an action to your shortcut.",
  "Scroll down and select 'App' from the list of actions.",
  "Tap 'Choose' next to 'App' and select your social media app from the list of apps.",
  "Tap 'Next' in the top-right corner to advance.",
  "From the next action suggestions, tap the '+' next to 'Open App'.",
  "Tap 'App' highlighted in blue next to 'Open' and select this app.",
  "Tap 'Next' and then 'Done' in the top-right corner.",
  "Reselect your automation and disable 'Ask Before Running'",
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 20,
    marginTop: '30%',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 500,
    resizeMode: 'contain',
  },
  descriptionContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  finishButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  finishButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  indicatorCompleted: {
    backgroundColor: '#2ecc71',
  },
  indicatorCurrent: {
    backgroundColor: '#3498db',
  },
});
