import { ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import { Provider, useSelector} from 'react-redux'
import { initUserDB, initFavouritesDB } from './src/db/index'
import AppNavigator from './src/navigation';
import store from './src/store/'


export default function App() {
  const [loaded] = useFonts({
    'Pacifico-Regular' : require('../entregable9/assets/fonts/Pacifico-Regular.ttf')
  })
  if (!loaded) {
    return <ActivityIndicator />
  }

  const initializeDBs = async () => {
    try {
      await initUserDB()
      await initFavouritesDB()
    } catch (e) {
      console.log(e);
    }
  }
  initializeDBs()
  return (
    <Provider store = {store}>
      <AppNavigator />
    </Provider>
  );
}