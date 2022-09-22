import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';

export default function App() {
  console.log("Hello, World!");
  const [screen, setScreen] = useState(1);
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!loaded) return <AppLoading />

  const changeVisibleScreen = () => {
    if (screen === 1) {
      setScreen(2)
    } else {
      setScreen(1)
    }
  }
  console.log(screen);
  return (
    <View style = {styles.container}>
      {screen === 1 ? <FirstScreen /> :<SecondScreen />}
      <Button title = 'Change Screen' style = {styles.button} onPress = {changeVisibleScreen}/>
    </View>
  // <View>
  //   <View>
  //     {screen === 1 ? <FirstScreen /> :<SecondScreen />}
  //   </View>
  //   <Button title = 'Change Screen' onPress = {changeVisibleScreen}/>
  // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50
  },
  button: {
    marginTop: 25
  }
});
