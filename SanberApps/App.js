import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Telegram from "./Tugas/Tugas 9/Telegram"
import Tugas11 from "./Tugas/Tugas 11/Tugas11"

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Tugas11/>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
