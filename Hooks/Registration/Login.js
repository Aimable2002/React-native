import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// Custom Hook for Login
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); // Hook for navigation

  const login = async ({ userName, password }) => {
    const success = handleLoginError(userName, password);
    if (!success) return Alert.alert('fill the field')
    
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/authUser/login', {
        userName,
        password,
      });
      const data = res.data;

      if (!data) {
        throw new Error(data.error);
      }

      await AsyncStorage.setItem('on-user', JSON.stringify(data));

      // Navigate to home screen
      navigation.replace('Home');
    } catch (error) {
      Alert.alert('error from server')
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

// Error handling function
function handleLoginError(userName, password) {
  if (!userName || !password) {
    return false;
  }
  return true;
}

export default useLogin;
