import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './tab'
import Login from './login'
import { useSelector } from 'react-redux'

const AppNavigator = () => {
  const [userId, setUserId] = useState(useSelector( (state) => {
    console.log(state.auth);
    return (state.auth.userId)
  }))
  console.log(userId);
  return (
    <NavigationContainer>
        {userId ? 
        <Tabs /> :
        <Login />
        }

    </NavigationContainer>
  )
}

export default AppNavigator
