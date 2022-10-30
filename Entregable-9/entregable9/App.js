import { ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import { Provider, useSelector} from 'react-redux'
import { init } from './src/db/index'
import AppNavigator from './src/navigation';
import store from './src/store/'


export default function App() {
  const [loaded] = useFonts({
    'Pacifico-Regular' : require('../entregable8/assets/fonts/Pacifico-Regular.ttf')
  })
  if (!loaded) {
    return <ActivityIndicator />
  }

  const initializeDB = async () => {
    init()
    .then ( () => {
        console.log('Database Initialized');
    })
    .catch( (e) => {
        console.log('There was an error', e);
    })
  }
  initializeDB()
  return (
    <Provider store = {store}>
      <AppNavigator />
    </Provider>
  );
}