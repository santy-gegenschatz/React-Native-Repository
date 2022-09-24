import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { Button, View } from 'react-native';
import { styles } from './AppStyles';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';

export default function App() {
  // Conditional Screen Navigation
  const [screen, setScreen] = useState(1);
  // Font use as per parameters
  const [loaded] = useFonts({
    OpenSansRegular: require('./assets/fonts/OpenSansRegular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSansBold.ttf')
  })

  // Return something if Fonts did not properly work
  if (!loaded) return <AppLoading />

  const changeVisibleScreen = () => {
    screen === 1 ? setScreen(2) : setScreen (1)
  }

  return (
    <View style = {styles.container}>
      {screen === 1 ? <FirstScreen /> :<SecondScreen />}
      <Button title = 'Change Screen' style = {styles.button} onPress = {changeVisibleScreen}/>
    </View>
  );
}

