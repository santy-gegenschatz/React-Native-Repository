import { ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux'
import AppNavigator from './src/navigation';
import store from './src/store/index'


export default function App() {
  const [loaded] = useFonts({
    'Pacifico-Regular' : require('../entregable5/assets/fonts/Pacifico-Regular.ttf')
  })
  if (!loaded) {
    return <ActivityIndicator />
  }
  return (
    <Provider store = {store}>
      <AppNavigator />
    </Provider>
  );
}