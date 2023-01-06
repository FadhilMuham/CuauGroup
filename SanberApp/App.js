import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Tugas/Tugas 10/LoginScreen';
import Telegram from './Tugas/Tugas 9/Telegram';
import AboutMe from './Tugas/Tugas 10/AboutMe';

export default function App() {
  return (
    <AboutMe/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
