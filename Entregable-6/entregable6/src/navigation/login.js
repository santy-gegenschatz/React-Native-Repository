import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Auth from '../screens/auth'

const Login = () => {
    const Stack = createNativeStackNavigator()
    
    return (
        <Stack.Navigator 
        initialRouteName = 'Login'
        screenOptions = {{
            headerShown: false
        }}>
            <Stack.Screen name = 'Login' component = {Auth} />
        </Stack.Navigator>
    )
}

export default Login