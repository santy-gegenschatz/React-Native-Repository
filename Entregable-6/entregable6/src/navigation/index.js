import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './tab'
import { useSelector } from 'react-redux'

const AppNavigator = () => {
  console.log(c);
  const c = useSelector( (state) => state.category.categories)
  //
  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
  )
}

export default AppNavigator
