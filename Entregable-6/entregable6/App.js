import { ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import { Provider, useSelector} from 'react-redux'
import AppNavigator from './src/navigation';
import store from './src/store/'


export default function App() {
  const [loaded] = useFonts({
    'Pacifico-Regular' : require('../entregable6/assets/fonts/Pacifico-Regular.ttf')
  })
  if (!loaded) {
    return <ActivityIndicator />
  }
  console.log(store);
  return (
    <Provider store = {store}>
      <AppNavigator />
    </Provider>
  );
}