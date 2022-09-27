import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppNavigator from './src/navigation';
import Categories from './src/screens/categories';

export default function App() {
  const [loaded] = useFonts({
    'Pacifico-Regular' : require('../entregable4/assets/fonts/Pacifico-Regular.ttf')
  })
  if (!loaded) {
    return <ActivityIndicator />
  }
  return (
    <AppNavigator />
  );
}