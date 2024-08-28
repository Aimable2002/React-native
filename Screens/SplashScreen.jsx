import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoadingScreen'); // Navigate to the next screen after 2 seconds
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <View style={styles.container}>
        <Image
            source={require('../assets/log.png')}
            style={styles.logo}
        />
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
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
