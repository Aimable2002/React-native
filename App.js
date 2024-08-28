import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './Navigation/AppNavigator.jsx'
import TabNavigator from './Navigation/TabNavigator.jsx';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
