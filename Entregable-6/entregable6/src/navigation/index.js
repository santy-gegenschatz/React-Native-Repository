import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './tab'
import Login from './login'
import { useSelector } from 'react-redux'

const AppNavigator = () => {
  const [userId, setUserId] = useState(null)

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
