import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Favourites from '../screens/favourites' 

const Stack = createNativeStackNavigator()

const FavouritesNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = 'Favourites'            
                component = {Favourites}
            />

        </Stack.Navigator>
    )
}

export default FavouritesNavigator