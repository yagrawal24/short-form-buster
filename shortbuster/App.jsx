import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const App = () => {
  const handleContinue = () => {
    // Replace 'instagram://' with the appropriate URL scheme for the target app
    Linking.openURL('instagram://');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Take a moment to think if you really want to open Instagram.
      </Text>
      <Button title="Continue to Instagram" onPress={handleContinue} />
    </View>
  );
};

export default App;
